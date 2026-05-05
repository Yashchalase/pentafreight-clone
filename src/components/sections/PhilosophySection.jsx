import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../../utils/animations";

export default function PhilosophySection() {
  return (
    <section
      className="relative overflow-hidden py-20 text-center"
      style={{ backgroundColor: "#4A5568" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: [
            // subtle contour-line texture (closer to the reference than crosshatch)
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='420' viewBox='0 0 900 420'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'%3E%3Cpath d='M-20 70 C 110 40, 210 95, 340 70 S 560 30, 700 70 S 860 120, 940 80'/%3E%3Cpath d='M-30 110 C 120 80, 230 140, 360 110 S 590 60, 740 110 S 880 165, 960 120'/%3E%3Cpath d='M-40 160 C 140 125, 250 185, 390 160 S 630 115, 780 160 S 905 210, 980 170'/%3E%3Cpath d='M-50 210 C 150 175, 270 235, 420 210 S 660 165, 820 210 S 930 260, 1010 220'/%3E%3Cpath d='M-60 260 C 170 225, 290 290, 450 260 S 700 215, 860 260 S 955 310, 1030 270'/%3E%3Cpath d='M-70 310 C 190 275, 320 340, 490 310 S 740 265, 900 310 S 980 360, 1050 320'/%3E%3Cpath d='M-80 360 C 210 325, 350 390, 520 360 S 780 315, 950 360 S 1010 410, 1080 370'/%3E%3C/g%3E%3C/svg%3E\")",
            // faint diagonal noise to enrich texture
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px)",
          ].join(", "),
          backgroundSize: "900px 420px, 60px 60px",
          backgroundRepeat: "repeat, repeat",
          opacity: 0.35,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          className="mb-6 text-[36px] font-bold text-brand-orange"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Philosophy
        </motion.h2>
        <motion.p
          className="mx-auto max-w-3xl text-[16px] leading-relaxed text-white/80"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          Customer satisfaction drives everything we do. Every shipment is a promise, and we
          deliver it with precision, care, and professionalism. With expert resources, we ensure
          safe, timely transport, building lasting partnerships founded on trust and excellence.
        </motion.p>
        <motion.button
          type="button"
          className="mt-8 rounded-md bg-brand-orange px-8 py-3 font-medium text-white shadow-sm hover:bg-orange-600"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Read more
        </motion.button>
      </div>
    </section>
  );
}

