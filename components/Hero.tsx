"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/i18n";

// [start, end] as fractions (0–1) of the hero's scroll progress.
const RANGES: [number, number][] = [
  [0, 0.1],
  [0.15, 0.25],
  [0.35, 0.45],
  [0.6, 0.7],
  [0.85, 1.0],
];

function rangeOpacity(p: number, start: number, end: number) {
  const fade = Math.min(0.035, (end - start) / 3);
  if (p < start - fade || p > end + fade) return 0;
  if (p < start) return (p - (start - fade)) / fade;
  if (p > end) return 1 - (p - end) / fade;
  return 1;
}

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);
  const triggerRef = useRef<any>(null);

  // Prep video for scroll scrubbing (iOS Safari-safe).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.preload = "auto";
    video.load();
    const onLoaded = () => video.pause();
    video.addEventListener("loadedmetadata", onLoaded);
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  // GSAP ScrollTrigger: map scroll progress -> video.currentTime + headline opacity.
  useEffect(() => {
    let ctx: any;
    (async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const video = videoRef.current;
      if (!section || !video) return;

      ctx = gsap.context(() => {
        triggerRef.current = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
          onUpdate: (self) => {
            const progress = self.progress;

            if (video.duration && !isNaN(video.duration) && video.paused) {
              video.currentTime = progress * video.duration;
            }

            lineRefs.current.forEach((el, i) => {
              if (!el) return;
              const [start, end] = RANGES[i];
              el.style.opacity = String(rangeOpacity(progress, start, end));
            });
          },
        });
      }, section);
    })();

    return () => {
      triggerRef.current?.kill();
      ctx?.revert?.();
    };
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative" style={{ height: "450vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden vignette">
        <video
          ref={videoRef}
          poster="/video/hero-poster.jpg"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-navy-deep/25" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative h-[320px] w-full max-w-4xl md:h-[380px]">
            {t.hero.lines.map((line, i) => (
              <div
                key={i}
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className="hero-line absolute inset-0 flex flex-col items-center justify-center gap-4 text-center"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <h1
                  className="whitespace-pre-line font-display text-4xl font-semibold leading-tight text-navy md:text-6xl lg:text-7xl"
                  style={{ textShadow: "0 2px 24px rgba(245,239,226,0.55), 0 1px 3px rgba(245,239,226,0.4)" }}
                >
                  {line.title}
                </h1>
                <p className="max-w-md text-sm font-light leading-relaxed text-azure md:text-base">
                  {line.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <span className="tracking-uppercase text-[10px] text-cream/70">
            {t.hero.scrollHint}
          </span>
        </div>
      </div>
    </section>
  );
}
