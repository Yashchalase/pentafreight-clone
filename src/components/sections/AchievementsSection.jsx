import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInLeft, scaleIn, staggerContainer } from "../../utils/animations";

const stats = [
  { value: "7+", label: "Strategic Domestic Offices" },
  { value: "USA", label: "Global presence" },
  { value: "200+", label: "Logistics Experts" },
  { value: "50+", label: "Awards & Accolades" },
];

export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const targets = useMemo(() => ({ offices: 7, experts: 200, awards: 50 }), []);
  const [counts, setCounts] = useState({ offices: 0, experts: 0, awards: 0 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        setInView(visible);
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const durationMs = 900;
    const start = performance.now();

    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const easeOut = 1 - Math.pow(1 - t, 3);
      setCounts({
        offices: Math.round(targets.offices * easeOut),
        experts: Math.round(targets.experts * easeOut),
        awards: Math.round(targets.awards * easeOut),
      });
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, targets]);

  const displayCounts = inView ? counts : { offices: 0, experts: 0, awards: 0 };

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ backgroundColor: "#4A5568" }}
      ref={sectionRef}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='420' viewBox='0 0 900 420'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'%3E%3Cpath d='M-20 70 C 110 40, 210 95, 340 70 S 560 30, 700 70 S 860 120, 940 80'/%3E%3Cpath d='M-30 110 C 120 80, 230 140, 360 110 S 590 60, 740 110 S 880 165, 960 120'/%3E%3Cpath d='M-40 160 C 140 125, 250 185, 390 160 S 630 115, 780 160 S 905 210, 980 170'/%3E%3Cpath d='M-50 210 C 150 175, 270 235, 420 210 S 660 165, 820 210 S 930 260, 1010 220'/%3E%3Cpath d='M-60 260 C 170 225, 290 290, 450 260 S 700 215, 860 260 S 955 310, 1030 270'/%3E%3Cpath d='M-70 310 C 190 275, 320 340, 490 310 S 740 265, 900 310 S 980 360, 1050 320'/%3E%3Cpath d='M-80 360 C 210 325, 350 390, 520 360 S 780 315, 950 360 S 1010 410, 1080 370'/%3E%3C/g%3E%3C/svg%3E\")",
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px)",
          ].join(", "),
          backgroundSize: "900px 420px, 60px 60px",
          backgroundRepeat: "repeat, repeat",
          opacity: 0.35,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <motion.div
            className="md:col-span-5"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="mb-4 text-[32px] font-bold text-brand-orange">Our Achievements</h2>
            <p className="max-w-xs text-base leading-relaxed text-white/80">
              Over 31+ years of excellence, trusted globally, delivering reliable logistics
              solutions with precision.
            </p>
          </motion.div>

          <div className="md:col-span-7">
            <motion.div
              className="grid grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
            >
              {stats.map((s) => {
                const displayValue =
                  s.value === "USA"
                    ? "USA"
                    : s.value === "7+"
                      ? `${displayCounts.offices}+`
                      : s.value === "200+"
                        ? `${displayCounts.experts}+`
                        : s.value === "50+"
                          ? `${displayCounts.awards}+`
                          : s.value;

                return (
                  <motion.div
                    key={s.label}
                    className="text-center"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-[60px] font-extrabold leading-none text-white">
                      {displayValue}
                    </div>
                    <div className="mt-2 text-[16px] text-white/80">{s.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

