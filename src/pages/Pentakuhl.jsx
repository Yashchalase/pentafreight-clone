import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OfficesSection from "../components/sections/OfficesSection";
import Footer from "../components/layout/Footer";
import { fadeInLeft, fadeInRight, fadeInUp, scaleIn } from "../utils/animations";

const ORANGE = "#E8722A";
const CTA_BG = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400";
// Local copy in `public/` to avoid remote rate-limit (Vite serves at root `/`)
const HERO_VIDEO_SRC = "/pentakulvid-Cg-CExBI.mp4";
const HERO_FALLBACK_IMAGE_SRC =
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=2000";
// Local copy in `public/`
const PELI_LOGO_SRC = "/peli_logo_vertical_full_color-BSk9BalL.png";

function PillLogo({ children, className = "" }) {
  return (
    <div
      className={[
        "inline-flex items-center justify-center whitespace-nowrap rounded border border-gray-300 px-2 py-1 text-xs font-bold tracking-widest text-gray-400",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function ShippersTable({ columns, rows }) {
  return (
    <div className="mt-10 overflow-hidden rounded-md border border-gray-200">
      <div className="grid grid-cols-3">
        <div className="border-b border-gray-200 bg-white px-6 py-4" />
        {columns.map((c) => (
          <div key={c} className="border-b border-l border-gray-200 bg-white px-6 py-4 text-center">
            <PillLogo>{c}</PillLogo>
          </div>
        ))}
      </div>

      {rows.map((r) => (
        <motion.div
          key={r.label}
          className="grid grid-cols-3"
          variants={fadeInUp}
        >
          <div className="border-b border-gray-200 bg-white px-6 py-4 font-semibold text-gray-700">
            {r.label}
          </div>
          <div className="flex items-center justify-center border-b border-l border-gray-200 bg-white px-6 py-4">
            {r.col1}
          </div>
          <div className="flex items-center justify-center border-b border-l border-gray-200 bg-white px-6 py-4">
            {r.col2 ?? <span className="text-gray-300" />}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Pentakuhl() {
  const [activeTab, setActiveTab] = useState("SERIES 20M");
  const [openFaqId, setOpenFaqId] = useState("q1");
  const [heroVideoFailed, setHeroVideoFailed] = useState(false);

  const faqItemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 26 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
      },
    }),
    [],
  );

  const series = useMemo(
    () => [
      {
        id: "SERIES 4",
        temperature: "+2°C to +8°C",
        usage: "Maintains refrigerated temperatures for standard pharma products.",
        ideal: "Vaccines and biologics requiring refrigeration.",
      },
      {
        id: "SERIES 22",
        temperature: "+15°C to +25°C",
        usage: "Maintains controlled room temperature for sensitive cargo.",
        ideal: "Medications and products requiring ambient conditions.",
      },
      {
        id: "SERIES 20M",
        temperature: "-20°C",
        usage: "Maintains sub-zero temperatures for more sensitive items.",
        ideal: "Ideal for frozen vaccines and biologics.",
      },
      {
        id: "SERIES 50M",
        temperature: "-50°C",
        usage: "Ultra-low temperature for the most sensitive biologics.",
        ideal: "Advanced biologics and cell therapies.",
      },
    ],
    [],
  );

  const activeSeries = useMemo(
    () => series.find((s) => s.id === activeTab) ?? series[2],
    [activeTab, series],
  );

  const faqs = useMemo(
    () => [
      {
        id: "q1",
        q: "What is Penta Kuhl?",
        a: "Penta Kuhl is our specialized division focused on temperature-controlled logistics and cold chain packaging solutions, ensuring safe transport of temperature-sensitive products.",
      },
      {
        id: "q2",
        q: "How does Penta Kuhl ensure cargo safety?",
        a: "We use Pelican BioThermal certified packaging, real-time temperature monitoring, and trained logistics professionals to ensure your cargo remains safe throughout transit.",
      },
      {
        id: "q3",
        q: "What types of cargo can Penta Kuhl handle?",
        a: "We handle pharmaceuticals, vaccines, biologics, food products, and any other temperature-sensitive cargo requiring precise thermal management.",
      },
      {
        id: "q4",
        q: "Is there customer support available for Penta Kuhl users?",
        a: "Yes, we provide 24/7 dedicated customer support for all Penta Kuhl clients, ensuring any issues are resolved promptly and efficiently.",
      },
    ],
    [],
  );

  const heroHeading = "Ensuring Safe Transport for Temperature-Sensitive Products";
  const heroSub =
    "Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features";

  return (
    <main className="bg-white">
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>

      {/* SECTION 1 - HERO */}
      <section className="relative h-screen min-h-[520px] overflow-hidden">
        {heroVideoFailed ? (
          <img
            src={HERO_FALLBACK_IMAGE_SRC}
            alt="PentaKÜHL"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setHeroVideoFailed(true)}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-6 md:px-16">
          <div className="w-full max-w-4xl text-center">
            <motion.h1
              className="text-[34px] font-light leading-[1.18] text-white md:text-[46px]"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            >
              {heroHeading}
            </motion.h1>

            <motion.div
              className="mx-auto my-6 w-full max-w-[520px] origin-center border-t border-white/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            />

            <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
              <motion.p
                className="text-[13px] leading-relaxed text-white/80 md:text-[13px]"
                variants={fadeInLeft}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.95 }}
              >
                {heroSub}
              </motion.p>

              <motion.div
                className="flex justify-center md:justify-end"
                variants={fadeInRight}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.95 }}
              >
                <motion.button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-sm bg-orange-500 px-6 py-3 text-[13px] font-medium text-white hover:bg-orange-600"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>Explore</span>
                  <i className="fa-solid fa-chevron-down text-xs" aria-hidden="true" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - ABOUT PENTA KUHL */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-10 lg:gap-16">
            <motion.div
              className="lg:col-span-3"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: ORANGE }}>
                ABOUT
              </div>
              <div className="my-2 w-12 border-b-2 border-orange-500" />
              <div className="text-[18px] font-bold" style={{ color: ORANGE }}>
                PENTA KUHL
              </div>
            </motion.div>

            <motion.div
              className="text-base leading-relaxed text-gray-600 lg:col-span-7"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p>
                At <span className="font-semibold text-gray-900">Pentakuhl</span>, we specialize in
                providing durable, effective packaging solutions that maintain temperature{" "}
                <span className="font-semibold text-gray-900">stability</span> during transit,{" "}
                <span className="font-semibold text-gray-900">protecting</span> your valuable
                products. Our innovative designs cater to various industries, including
                pharmaceuticals, food, and biotechnology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - BIOTHERMAL BANNER */}
      <section className="relative overflow-hidden py-16" style={{ backgroundColor: "#4A5568" }}>
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='420' viewBox='0 0 900 420'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'%3E%3Cpath d='M-20 70 C 110 40, 210 95, 340 70 S 560 30, 700 70 S 860 120, 940 80'/%3E%3Cpath d='M-30 110 C 120 80, 230 140, 360 110 S 590 60, 740 110 S 880 165, 960 120'/%3E%3Cpath d='M-40 160 C 140 125, 250 185, 390 160 S 630 115, 780 160 S 905 210, 980 170'/%3E%3Cpath d='M-50 210 C 150 175, 270 235, 420 210 S 660 165, 820 210 S 930 260, 1010 220'/%3E%3Cpath d='M-60 260 C 170 225, 290 290, 450 260 S 700 215, 860 260 S 955 310, 1030 270'/%3E%3Cpath d='M-70 310 C 190 275, 320 340, 490 310 S 740 265, 900 310 S 980 360, 1050 320'/%3E%3Cpath d='M-80 360 C 210 325, 350 390, 520 360 S 780 315, 950 360 S 1010 410, 1080 370'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "900px 420px",
            backgroundRepeat: "repeat",
            opacity: 0.75,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-16">
          <motion.div
            className="mx-auto mb-8 w-[320px] rounded-2xl bg-white p-8 shadow-lg"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="flex items-center justify-center">
              <img
                src={PELI_LOGO_SRC}
                alt="Pelican BioThermal"
                className="h-[110px] w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.h2
            className="text-center text-2xl font-semibold text-white"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2 }}
          >
            Authorized Distributors for Pelican BioThermal<sup>tm</sup> Products
          </motion.h2>

          <motion.button
            type="button"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-3 text-white hover:bg-orange-600"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Read more
          </motion.button>
        </div>
      </section>

      {/* SECTION 4 - PARCEL & PALLET SHIPPERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-200 border-t border-gray-200 md:divide-x md:divide-y-0 md:border-t-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              className="px-6 py-16 md:px-16"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <h2 className="mb-4 text-center text-4xl font-light text-gray-800">Parcel Shippers</h2>
              <p className="mx-auto mb-8 max-w-lg text-center text-sm text-gray-500">
                We understand the unique challenges faced by parcel shippers and offer tailored
                solutions for seamless shipping.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ staggerChildren: 0.1 }}
              >
                <ShippersTable
                  columns={["COOLGUARD", "COOLGUARD"]}
                  rows={[
                    {
                      label: "Single Use",
                      col1: <PillLogo>COOLGUARD</PillLogo>,
                      col2: <PillLogo>COOLGUARD</PillLogo>,
                    },
                    {
                      label: "Reusable",
                      col1: (
                        <div className="inline-flex items-center gap-2">
                          <i className="fa-solid fa-cube text-gray-500" aria-hidden="true" />
                          <span className="font-semibold text-gray-700">
                            <span style={{ color: ORANGE }}>Crēdo</span> Cube
                          </span>
                        </div>
                      ),
                      col2: null,
                    },
                  ]}
                />
              </motion.div>

              <div className="mt-8 flex justify-center">
                <motion.button
                  type="button"
                  className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Parcel Shippers
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="px-6 py-16 md:px-16"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <h2 className="mb-4 text-center text-4xl font-light text-gray-800">Pallet Shippers</h2>
              <p className="mx-auto mb-8 max-w-lg text-center text-sm text-gray-500">
                We provide tailored services for pallet shippers, ensuring your cargo arrives safely
                and efficiently.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ staggerChildren: 0.1 }}
              >
                <ShippersTable
                  columns={["COOLPALL VERTOS", "COOLPALL VERTOS ADVANCE"]}
                  rows={[
                    {
                      label: "Single Use",
                      col1: <PillLogo>COOLPALL</PillLogo>,
                      col2: <PillLogo>COOLPALL</PillLogo>,
                    },
                    {
                      label: "Reusable",
                      col1: (
                        <div className="inline-flex items-center gap-2">
                          <i className="fa-solid fa-cube text-gray-500" aria-hidden="true" />
                          <span className="font-semibold text-gray-700">
                            <span style={{ color: ORANGE }}>Crēdo</span> Xtreme
                          </span>
                        </div>
                      ),
                      col2: (
                        <div className="inline-flex items-center gap-2">
                          <i className="fa-solid fa-box text-gray-500" aria-hidden="true" />
                          <span className="font-semibold text-gray-700">
                            <span style={{ color: ORANGE }}>Crēdo</span> Cargo
                          </span>
                        </div>
                      ),
                    },
                  ]}
                />
              </motion.div>

              <div className="mt-8 flex justify-center">
                <motion.button
                  type="button"
                  className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Pallet Shippers
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - SERIES GUIDE */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <motion.h2
            className="text-3xl font-semibold"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-gray-800">Series </span>
            <span className="text-gray-400">Guide</span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 max-w-2xl text-sm text-gray-400"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            This guide outlines temperature-controlled packaging solutions designed for the safe
            transport and storage of sensitive products, like vaccines and biologics, across various
            thermal conditions, from refrigerated to deep-freeze.
          </motion.p>

          <div className="mt-8 overflow-hidden rounded-md border border-gray-200">
            <div className="flex flex-col sm:flex-row">
              {series.map((t) => {
                const isActive = t.id === activeTab;
                return (
                  <button
                    key={t.id}
                    type="button"
                    className={[
                      "flex-1 border-b border-gray-200 py-4 text-center text-sm font-medium text-gray-500 sm:border-b-0 sm:border-r sm:last:border-r-0",
                      isActive ? "text-orange-500" : "",
                    ].join(" ")}
                    onClick={() => setActiveTab(t.id)}
                  >
                    <span className="relative inline-flex flex-col items-center">
                      {t.id}
                      {isActive ? (
                        <span className="mt-2 h-[2px] w-10 bg-orange-500" aria-hidden="true" />
                      ) : (
                        <span className="mt-2 h-[2px] w-10 bg-transparent" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-gray-200 p-8 text-left">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeSeries.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="text-sm text-gray-700">
                    <div>
                      <span className="font-semibold text-gray-900">Temperature Range:</span>{" "}
                      {activeSeries.temperature}
                    </div>
                    <div className="mt-2">
                      <span className="font-semibold text-gray-900">Usage &amp; Applications:</span>{" "}
                      {activeSeries.usage}
                    </div>
                    <div className="mt-2">
                      <span className="font-semibold text-gray-900">Ideal For:</span>{" "}
                      {activeSeries.ideal}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SCROLLING MARQUEE FEATURES */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 md:px-16">
          {[
            {
              direction: "normal",
              items: [
                "Tailored Freight Solutions",
                "Robust Load Security",
                "Expert Logistics Support",
                "Tailored Freight Solutions",
                "Robust Load Security",
                "Expert Logistics Support",
              ],
            },
            {
              direction: "reverse",
              items: [
                "Risk Management",
                "Flexible Shipping Schedules",
                "Volume Discounts",
                "End-to-End Supply Chain Management",
                "Risk Management",
                "Flexible Shipping Schedules",
              ],
            },
          ].map((row) => (
            <div key={row.direction} className="mb-4 last:mb-0">
              <div
                className="flex w-[200%] gap-4"
                style={{
                  animation: "marquee 20s linear infinite",
                  animationDirection: row.direction,
                }}
              >
                {[...row.items, ...row.items].map((item, idx) => (
                  <div
                    key={`${item}-${idx}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-gray-300 px-8 py-4 text-base font-medium text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 - FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-16 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold">
              <span className="text-gray-900">Frequently Asked </span>
              <span className="font-bold text-gray-400">Questions</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400">{heroSub}</p>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  variants={faqItemVariants}
                  className="border-b border-gray-200 py-5"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left"
                    onClick={() => setOpenFaqId((prev) => (prev === faq.id ? "" : faq.id))}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-gray-800">{faq.q}</span>
                    <motion.i
                      className="fa-solid fa-chevron-down text-sm text-gray-500"
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 text-sm leading-relaxed text-gray-500">{faq.a}</div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - BOTTOM CTA WITH BACKGROUND IMAGE */}
      <section className="relative min-h-64 w-full overflow-hidden">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: `url(${CTA_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-64 max-w-7xl flex-col items-center justify-center px-6 py-20 text-center md:px-16">
          <motion.h3
            className="text-3xl font-bold text-white md:text-4xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            Protecting What Matters Most
          </motion.h3>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base text-white/80"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2 }}
          >
            Get in touch to ensure safe and temperature-stable transit for your sensitive products.
          </motion.p>

          <motion.a
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Us Today
          </motion.a>
        </div>
      </section>

      {/* SECTION 9 - OFFICES + FOOTER */}
      <OfficesSection />
      <Footer />
    </main>
  );
}

