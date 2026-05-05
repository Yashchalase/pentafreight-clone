import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OfficesSection from "../components/sections/OfficesSection";
import { fadeInLeft, fadeInUp, scaleIn } from "../utils/animations";

const ORANGE = "#E8722A";
const ORANGE_DARK = "#D86522";
const CTA_BG = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400";

export default function Industries() {
  const [openFaqId, setOpenFaqId] = useState("q1");

  const industries = useMemo(
    () => [
      {
        title: "Pharmaceuticals",
        iconClass: "fa-solid fa-pills",
        description:
          "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.",
      },
      {
        title: "Chemicals",
        iconClass: "fa-solid fa-flask",
        description:
          "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.",
      },
      {
        title: "Textiles",
        iconClass: "fa-solid fa-border-all",
        description:
          "We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.",
      },
      {
        title: "Energy",
        iconClass: "fa-regular fa-lightbulb",
        description:
          "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.",
      },
      {
        title: "Automobile",
        iconClass: "fa-solid fa-car",
        description:
          "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.",
      },
      {
        title: "Packaging",
        iconClass: "fa-solid fa-box",
        description:
          "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.",
      },
      {
        title: "Time Critical Cargo",
        iconClass: "fa-regular fa-clock",
        description:
          "We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.",
      },
      {
        title: "Glassware",
        iconClass: "fa-solid fa-wine-glass",
        description:
          "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.",
      },
      {
        title: "Electronics",
        iconClass: "fa-solid fa-laptop",
        description:
          "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.",
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        id: "q1",
        q: "What industries do you serve?",
        a: "We serve a wide range of industries including pharmaceuticals, chemicals, textiles, energy, automobile, packaging, time-critical cargo, glassware, and electronics.",
      },
      {
        id: "q2",
        q: "How do you handle temperature-sensitive shipments?",
        a: "We use state-of-the-art temperature-controlled warehouses and reefer vehicles to ensure your temperature-sensitive cargo remains safe throughout transit.",
      },
      {
        id: "q3",
        q: "What sets your logistics apart?",
        a: "Our 30+ years of experience, global network, skilled customs agents, and dedicated customer support set us apart from other freight forwarders.",
      },
      {
        id: "q4",
        q: "How do you ensure compliance with regulations?",
        a: "We strictly follow IATA, IMDG, and local customs regulations, ensuring all shipments are compliant with international trade laws.",
      },
    ],
    [],
  );

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

  return (
    <main className="bg-white pt-20">
      {/* SECTION 1 - PAGE HEADER */}
      <section className="bg-white pb-8 pt-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            className="text-center text-5xl font-bold tracking-wide text-gray-300"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            INDUSTRIES
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-lg text-center text-base text-gray-400"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Over the past two decades we have been coming up with innovative ways to enable
            global trade across various industries.
          </motion.p>

          <div className="mb-16" />
        </div>
      </section>

      {/* SECTION 2 - INDUSTRY CARDS GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-16">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.12 }}
          >
            {industries.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={[
                  "rounded-2xl p-8",
                  "min-h-[340px]",
                ].join(" ")}
                style={{ backgroundColor: ORANGE }}
              >
                <div className="flex items-center">
                  <div
                    className="flex h-[60px] w-[60px] items-center justify-center rounded-full"
                    style={{ backgroundColor: ORANGE_DARK }}
                  >
                    <i className={`${item.iconClass} text-2xl text-white`} aria-hidden="true" />
                  </div>
                  <div className="ml-4 text-2xl font-bold text-white">{item.title}</div>
                </div>

                <p
                  className="mt-6 text-sm leading-relaxed text-white/90"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 7,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 - FAQ */}
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
            <p className="mt-4 text-sm text-gray-400">
              Find answers to common industry questions, ensuring clarity on our services,
              processes, and solutions.
            </p>
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

      {/* SECTION 4 - BOTTOM CTA BANNER */}
      <section className="relative w-full overflow-hidden py-20 text-center">
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

        <div className="relative mx-auto max-w-7xl px-6 md:px-16">
          <motion.h3
            className="text-3xl font-bold text-white md:text-4xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            Tailored Logistics for Every Industry
          </motion.h3>

          <motion.p
            className="mx-auto mt-4 max-w-2xl text-base text-white/80"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2 }}
          >
            Delivering tailored supply chain solutions to meet the unique needs of industries
            worldwide.
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

      {/* SECTION 5 - OFFICES (REUSE) */}
      <OfficesSection />
    </main>
  );
}

