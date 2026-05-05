import { motion } from "framer-motion";

const PENTA_US_LOGO_SRC = "https://www.pentafreight.com/assets/pentauslogo-CZ8jGOcj.png";

export default function SideBar() {
  return (
    <motion.aside
      className="fixed left-0 top-0 z-[999] h-screen w-0"
      aria-label="Penta Freight sidebar"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
    >
      <div className="relative h-full w-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <img
            src={PENTA_US_LOGO_SRC}
            alt="Penta Freight"
            className="block h-[160px] w-auto select-none shadow-sm"
            loading="lazy"
            decoding="async"
            draggable={false}
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          />
        </div>
      </div>
    </motion.aside>
  );
}

