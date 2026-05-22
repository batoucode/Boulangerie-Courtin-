"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import clsx from "clsx";

const schema = z.object({
  name: z.string().min(2, "Veuillez entrer votre nom (min. 2 caractères)"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Veuillez préciser le sujet"),
  message: z.string().min(10, "Le message doit faire au moins 10 caractères"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Erreur serveur");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-stone-900 mb-2">Message envoyé !</h3>
        <p className="text-stone-600 mb-6">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
            Nom complet <span className="text-brand-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jean Dupont"
            {...register("name")}
            className={clsx("input-field", errors.name && "border-red-400 focus:ring-red-400")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
            Email <span className="text-brand-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jean@exemple.fr"
            {...register("email")}
            className={clsx("input-field", errors.email && "border-red-400 focus:ring-red-400")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1.5">
          Téléphone <span className="text-stone-400 text-xs font-normal">(optionnel)</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="06 XX XX XX XX"
          {...register("phone")}
          className="input-field"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1.5">
          Sujet <span className="text-brand-400">*</span>
        </label>
        <select
          id="subject"
          {...register("subject")}
          className={clsx("input-field", errors.subject && "border-red-400 focus:ring-red-400")}
        >
          <option value="">Choisissez un sujet…</option>
          <option value="Commande spéciale">Commande spéciale</option>
          <option value="Gâteau sur mesure">Gâteau sur mesure</option>
          <option value="Renseignement produit">Renseignement produit</option>
          <option value="Horaires et disponibilités">Horaires et disponibilités</option>
          <option value="Autre">Autre</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
          Message <span className="text-brand-400">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Décrivez votre demande en détail…"
          {...register("message")}
          className={clsx("input-field resize-none", errors.message && "border-red-400 focus:ring-red-400")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={clsx(
          "btn-primary w-full text-base py-4",
          status === "loading" && "opacity-70 cursor-not-allowed"
        )}
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Envoi en cours…
          </span>
        ) : (
          "Envoyer le message"
        )}
      </button>

      <p className="text-xs text-stone-400 text-center">
        Vos données ne sont utilisées que pour répondre à votre demande.
      </p>
    </form>
  );
}
