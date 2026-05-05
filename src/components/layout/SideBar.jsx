import { motion } from "framer-motion";
import { useState } from "react";

// Put the file here: public/pentauslogo-CZ8jGOcj.png (then it loads as this URL)
const PENTA_US_LOGO_SRC = "/pentauslogo-CZ8jGOcj.png";

export default function SideBar() {
  const [logoOk, setLogoOk] = useState(true);

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
          {logoOk ? (
            <img
              src={PENTA_US_LOGO_SRC}
              alt="Penta Freight"
              className="block h-[160px] w-auto select-none shadow-sm"
              loading="eager"
              decoding="async"
              draggable={false}
              onError={() => setLogoOk(false)}
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            />
          ) : (
            <div
              className="select-none px-2 py-4 text-[12px] font-semibold uppercase tracking-widest text-gray-700 shadow-sm"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              <span className="font-bold text-brand-orange">PENTA</span>{" "}
              <span className="font-normal text-gray-500">Freight</span>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}

