import { motion } from "framer-motion";
import { fadeInLeft, scaleIn, staggerContainer } from "../../utils/animations";

const features = [
  {
    iconClass: "fa-solid fa-gears",
    title: "Comprehensive Solutions",
    description:
      "Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.",
  },
  {
    iconClass: "fa-solid fa-award",
    title: "Expertise and Experience",
    description:
      "Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.",
  },
  {
    iconClass: "fa-solid fa-truck",
    title: "State-of-the-Art Facilities",
    description:
      "Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-0">
          <motion.div
            className="pb-10 md:pb-0 md:pr-10"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="inline-flex items-center gap-2">
              <span className="text-gray-500">•</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1 text-sm text-gray-600">
                Why us
              </span>
            </div>

            <h2 className="mt-6 text-[30px] font-bold leading-tight">
              <span className="block text-gray-900">Why choose</span>
              <span className="block text-gray-400">Penta Freight.</span>
            </h2>
          </motion.div>

          <motion.div
            className="md:col-span-3 md:border-l md:border-gray-200"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-gray-200">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  className="pt-10 md:px-10 md:pt-0"
                  variants={scaleIn}
                >
                  <i
                    className={`${f.iconClass} mb-4 text-[44px] text-gray-800/70`}
                    aria-hidden="true"
                  />
                  <div className="mb-2 text-[13px] font-semibold text-gray-900">{f.title}</div>
                  <p className="text-[11px] leading-relaxed text-gray-500">{f.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

