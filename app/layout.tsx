import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const arabic = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noor Al Maraya | Interior Design & Construction — Muscat",
  description:
    "Noor Al Maraya is a premium interior design and construction studio in Muscat — from your dream to design, from design to build.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${display.variable} ${sans.variable} ${arabic.variable} bg-navy text-cream antialiased`}
      >
        <LanguageProvider>
          <GrainOverlay />
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
