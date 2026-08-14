"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const IMAGES = [
  "https://images.unsplash.com/photo-1683629357963-adf2b1fa9ad9?w=1000&h=1250&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=1000&h=1250&fit=crop&auto=format&q=80",
  "/images/tv-lounge.jpg",
];

export default function Collection() {
  const { t } = useLanguage();

  return (
    <section id="collection" className="relative bg-navy py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="tracking-uppercase mb-4 text-xs text-gold">{t.collection.kicker}</p>
          <h2 className="font-display text-4xl font-medium text-cream md:text-5xl">
            {t.collection.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/70 md:text-base">
            {t.collection.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {t.collection.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
              className="group relative"
            >
              <div
                className="bracket-frame relative aspect-[4/5] overflow-hidden rounded-sm border border-cream/10 transition-all duration-900 ease-luxe group-hover:scale-[1.02] group-hover:border-gold/60"
                style={{ boxShadow: "0 0 0 rgba(217,179,106,0)" }}
              >
                <Image
                  src={IMAGES[i]}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1200 ease-luxe group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-900 ease-luxe group-hover:opacity-100 [box-shadow:inset_0_0_40px_rgba(217,179,106,0.35)]" />

                {/* Floating frosted-glass chip */}
                <div className="absolute left-5 top-5 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 backdrop-blur-md">
                  <span className="tracking-uppercase text-[10px] text-cream">
                    {item.chip}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-cream md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-cream/75 md:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
