import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp } from "../../utils/animations";

const ABOUT_IMAGE_SRC =
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=2200";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#FDF2EA] to-brand-light-bg">
      <div className="relative">
        <motion.img
          src={ABOUT_IMAGE_SRC}
          alt="Air freight"
          className="h-[520px] w-full object-cover object-center md:h-[620px]"
          loading="lazy"
          decoding="async"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mt-10 bg-[#FDF2EA]/90 px-8 py-8 md:mt-12 md:py-10">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
                <motion.div
                  className="md:col-span-4 md:text-center"
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="text-[14px] font-semibold uppercase tracking-wider text-brand-orange">
                    ABOUT US
                  </div>
                  <div className="mx-0 my-3 w-16 border-b-2 border-orange-500 md:mx-auto" />
                  <div className="text-[18px] font-bold text-brand-orange">PENTA FREIGHT</div>
                </motion.div>

                <motion.div
                  className="md:col-span-8"
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <p className="max-w-3xl text-[16px] leading-relaxed text-gray-600">
                    Penta Freight provides reliable{" "}
                    <span className="font-bold text-gray-800">logistics solutions</span>,
                    specializing in temperature-sensitive shipments. We ensure safe,{" "}
                    <span className="font-bold text-gray-800">on-time delivery</span> worldwide.
                    Trust us for seamless supply chain management.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

