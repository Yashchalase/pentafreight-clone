import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "../../utils/animations";

function ServiceCard({ service }) {
  const imageLeft = service.imageSide === "left";

  return (
    <motion.div
      className="grid h-[420px] grid-cols-1 items-stretch md:h-[460px] md:grid-cols-2"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div
        className={[
          "relative h-full bg-[#efe8de]",
          imageLeft ? "md:order-1" : "md:order-2",
        ].join(" ")}
      >
        <div className="absolute inset-0">
          <img
            src={service.imageUrl}
            alt={service.imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // fallback: hide broken image so background shows
              e.currentTarget.style.display = "none";
            }}
          />
          <div
            className={[
              "absolute inset-y-0 w-24",
              imageLeft
                ? "right-0 bg-gradient-to-r from-transparent to-[#fbf7f2]"
                : "left-0 bg-gradient-to-l from-transparent to-[#fbf7f2]",
            ].join(" ")}
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        className={[
          "flex h-full flex-col justify-center overflow-hidden px-8 py-10 md:px-12",
          imageLeft ? "md:order-2" : "md:order-1",
          "pb-12 md:pb-14 pt-12 md:pt-14",
        ].join(" ")}
      >
        <h3 className="text-[26px] font-semibold text-gray-800 md:text-[28px]">
          {service.title}
        </h3>
        <div className="mt-4 space-y-4 text-[12px] leading-relaxed text-gray-600 md:text-[12px]">
          {service.paragraphs.map((p) => (
            <p
              key={p}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        >
          {service.tags.map((t) => (
            <motion.span
              key={t}
              className="rounded-full border border-black/10 bg-white/30 px-4 py-2 text-[11px] text-gray-700"
              variants={scaleIn}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          type="button"
          className="mt-6 inline-flex w-fit items-center justify-center rounded-sm bg-orange-500 px-6 py-3 text-[12px] font-medium text-white hover:bg-orange-600"
          whileHover={{ scale: 1.05 }}
        >
          Read More
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const services = useMemo(
    () => [
      {
        title: "Air Freight",
        imageUrl: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1400",
        imageAlt: "Air Freight",
        paragraphs: [
          "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
          "Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.",
        ],
        tags: ["Speed", "Efficiency", "Reliability", "Affordability"],
        imageSide: "left",
      },
      {
        title: "Sea Freight",
        imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1400",
        imageAlt: "Sea Freight",
        paragraphs: [
          "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.",
          "With decades of experience, we plan, monitor, and manage shipments, ensuring compliance.",
        ],
        tags: ["Flexibility", "Cost-Effective", "Scalability", "Expertise"],
        imageSide: "right",
      },
      {
        title: "Multi Modal Transport",
        imageUrl: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1400",
        imageAlt: "Multi Modal Transport",
        paragraphs: [
          "Every shipment is unique, so we offer multiple affordable transport options.",
          "Along with air and sea freight, we provide multimodal transport via our global network.",
        ],
        tags: ["Integration", "Efficiency", "Visibility", "Convenience"],
        imageSide: "left",
      },
      {
        title: "Project Cargo",
        imageUrl: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?w=1400",
        imageAlt: "Project Cargo",
        paragraphs: [
          "We understand the precise needs of customers and shipping lines, ensuring cargo is stuffed, lashed, and checked to specifications.",
          "We handle logistics, clearance, and oversized or breakbulk cargo with expertise.",
        ],
        tags: ["Precision", "Expertise", "Oversized", "Security"],
        imageSide: "right",
      },
      {
        title: "Custom Broking",
        imageUrl: "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?w=1400",
        imageAlt: "Custom Broking",
        paragraphs: [
          "Our licensed customs agents know domestic and international regulations.",
          "With 30+ years of experience, we handle clearance challenges and ensure timely, transparent processing.",
        ],
        tags: ["Accuracy", "Compliance", "Speed", "Expertise"],
        imageSide: "left",
      },
      {
        title: "Transit Warehouse and Fleet",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400",
        imageAlt: "Transit Warehouse and Fleet",
        paragraphs: [
          "Our transit warehouse is near the International Air Cargo Complex and Ocean Ports.",
          "We offer storage for all cargo types, including temperature-controlled (15–25°C, 2–8°C), DGR, and general cargo zones.",
          "We provide specialized packaging, palletizing, and shrink wrapping.",
          "Our reefer and general trucks ensure smooth nationwide transportation.",
        ],
        tags: ["Specialized", "Accessible", "Versatile", "Nationwide"],
        imageSide: "right",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, services.length);
    const els = stepRefs.current.filter(Boolean);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible) return;
        const idx = Number(visible.target.getAttribute("data-step-index"));
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      { threshold: [0.55] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [services.length]);

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative mx-auto max-w-6xl">
          <div className="sticky top-[86px] overflow-hidden rounded-[28px] bg-[#fbf7f2] shadow-sm">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={services[activeIndex]?.title ?? activeIndex}
                variants={services[activeIndex]?.imageSide === "left" ? fadeInLeft : fadeInRight}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <ServiceCard service={services[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pointer-events-none">
            {services.map((s, i) => (
              <div
                key={`${s.title}-step`}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-step-index={i}
                className="h-[80vh] md:h-[90vh]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

