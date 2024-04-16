import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ratana Mey · Développeur Front-End React JS",
  description:
    "Passionné par la création d'interfaces utilisateur réactives et accessibles, avec une spécialité en React.js et un engagement envers le code moderne et maintenable. Constamment à la recherche de nouvelles technologies et de meilleures pratiques pour améliorer l'expérience web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
