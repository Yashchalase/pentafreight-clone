import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CookieBanner() {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem("cookiesAccepted") === "true";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const onAccept = () => {
    try {
      localStorage.setItem("cookiesAccepted", "true");
    } catch {
      // no-op
    }
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {!dismissed ? (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-brand-orange px-8 py-4"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
            <p className="text-sm text-white">
              We use cookies to enhance your experience. Please accept to enjoy the full features
              of our site.
            </p>
            <button
              type="button"
              onClick={onAccept}
              className="shrink-0 rounded-md bg-white px-6 py-2 font-semibold text-brand-orange hover:bg-gray-100"
            >
              I Accept
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

