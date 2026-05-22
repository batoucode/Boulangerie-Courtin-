import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    // If RESEND_API_KEY is set, send via Resend; otherwise log and return success
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Site web <contact@boulangerie-courtin.fr>",
        to: process.env.CONTACT_EMAIL ?? "contact@boulangerie-courtin.fr",
        replyTo: email,
        subject: `[Contact site] ${subject}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
          <p><strong>Sujet :</strong> ${subject}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap">${message}</p>
        `,
      });
    } else {
      console.log("[Contact form]", { name, email, phone, subject, message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API error]", err);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
