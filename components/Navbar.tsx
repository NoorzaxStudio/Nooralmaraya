"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const { locale, toggleLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-600 ease-luxe ${
        scrolled
          ? "bg-navy/70 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 blend-diff">
          <Image
            src="/logo.png"
            alt="Noor Al Maraya"
            width={140}
            height={56}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-10 blend-diff">
          <a
            href="#collection"
            className="tracking-uppercase text-xs font-medium hover:opacity-70 transition-opacity duration-600 ease-luxe"
          >
            {t.nav.collection}
          </a>
          <a
            href="#contact"
            className="tracking-uppercase text-xs font-medium hover:opacity-70 transition-opacity duration-600 ease-luxe"
          >
            {t.nav.contact}
          </a>
        </nav>

        <motion.button
          onClick={toggleLocale}
          whileTap={{ scale: 0.92 }}
          className="blend-diff tracking-uppercase text-xs font-semibold border border-current px-4 py-2 rounded-full hover:opacity-70 transition-opacity duration-600 ease-luxe"
          aria-label="Switch language"
        >
          {t.nav.langLabel}
        </motion.button>
      </div>
    </header>
  );
}
