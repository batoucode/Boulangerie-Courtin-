import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Boulangerie Courtin — Bracieux",
  description:
    "Boulangerie artisanale Courtin à Bracieux (41250). Pains, viennoiseries et pâtisseries maison préparés chaque jour avec passion. 7 Place de la Halle.",
  keywords: [
    "boulangerie",
    "Bracieux",
    "Courtin",
    "artisan boulanger",
    "pain",
    "viennoiseries",
    "pâtisserie",
    "41250",
  ],
  openGraph: {
    title: "Boulangerie Courtin — Bracieux",
    description:
      "Boulangerie artisanale à Bracieux. Pains, viennoiseries et pâtisseries maison.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
