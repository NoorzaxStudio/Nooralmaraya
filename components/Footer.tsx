"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/logo.png"
            alt="Noor Al Maraya"
            width={160}
            height={64}
            className="h-10 w-auto object-contain opacity-90"
          />
          <p className="tracking-uppercase text-[11px] text-cream/60">
            {t.footer.tagline}
          </p>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Contact details */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-16">
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.99.36 1.96.68 2.9a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.11-.45c.94.32 1.91.55 2.9.68A2 2 0 0 1 22 16.9Z" />
                </svg>
              </span>
              <span className="tracking-uppercase text-[10px] text-cream/50">
                {t.footer.phoneLabel}
              </span>
              <a
                href={`tel:${t.footer.phone.replace(/\s/g, "")}`}
                dir="ltr"
                className="text-sm text-cream transition-colors duration-600 ease-luxe hover:text-gold"
              >
                {t.footer.phone}
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10.5c0 6.5-9 12-9 12s-9-5.5-9-12a9 9 0 1 1 18 0Z" />
                  <circle cx="12" cy="10.5" r="3" />
                </svg>
              </span>
              <span className="tracking-uppercase text-[10px] text-cream/50">
                {t.footer.addressLabel}
              </span>
              <span className="max-w-[220px] text-sm leading-relaxed text-cream">
                {t.footer.address}
              </span>
            </div>
          </div>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/nooralmaraya/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/70 transition-colors duration-600 ease-luxe hover:text-gold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="text-cream/70 transition-colors duration-600 ease-luxe hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-6.9L4 22H1l8.2-9.3L.9 2h7.4l5 6.4L18.9 2Zm-1.3 18h1.9L6.5 4H4.5l13.1 16Z" />
              </svg>
            </a>
          </div>

          <p className="text-[11px] text-cream/40">
            © {year} Noor Al Maraya. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
