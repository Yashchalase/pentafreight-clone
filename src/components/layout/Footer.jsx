import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <motion.div
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-sm text-gray-500">© 2026 Penta Freight. All Rights Reserved</div>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded border border-gray-300 p-2 text-gray-600 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
          </a>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">
              Privacy Policy
            </a>
            <span className="text-orange-500" aria-hidden="true">
              •
            </span>
            <a href="#" className="hover:text-gray-700">
              Terms and Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

