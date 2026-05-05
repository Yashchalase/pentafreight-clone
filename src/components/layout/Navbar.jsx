import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { fadeInUp, staggerContainer } from "../../utils/animations";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const activeHash = location.hash || "";

  const navItems = useMemo(
    () => [
      { label: "HOME", to: "/" },
      { label: "ABOUT US", to: "/#about" },
      { label: "SERVICES", to: "/#services", hasDropdown: true },
      { label: "PentaKÜHL", to: "/pentakuhl", hasDropdown: true, isPentaKuhl: true },
      { label: "INDUSTRIES", to: "/industries" },
      { label: "CAREERS", to: "/#careers" },
      { label: "CONTACT", to: "/#contact" },
    ],
    [],
  );

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex items-center py-4">
          <nav className="hidden w-full justify-center md:flex" aria-label="Primary">
            <motion.ul
              className="flex items-center space-x-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item.label} variants={fadeInUp}>
                  {item.isPentaKuhl ? (
                    <NavLink
                      to={item.to}
                      className="inline-flex items-center text-[15px] font-normal text-black hover:text-brand-orange"
                    >
                      <span className="font-normal text-black">Penta</span>
                      <span className="font-bold text-sky-600">KÜHL</span>
                      <i
                        className="fa-solid fa-chevron-down ml-1 text-xs text-black/60"
                        aria-hidden="true"
                      />
                    </NavLink>
                  ) : item.to.startsWith("/#") ? (
                    <Link
                      to={item.to}
                      className={[
                        "inline-flex items-center text-[15px] font-normal",
                        activeHash === item.to.replace("/#", "#")
                          ? "text-brand-orange"
                          : "text-black hover:text-brand-orange",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown ? (
                        <i
                          className="fa-solid fa-chevron-down ml-1 text-xs text-black/60"
                          aria-hidden="true"
                        />
                      ) : null}
                    </Link>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        [
                          "inline-flex items-center text-[15px]",
                          isActive
                            ? "font-medium text-brand-orange"
                            : "font-normal text-black hover:text-brand-orange",
                        ].join(" ")
                      }
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown ? (
                        <i
                          className="fa-solid fa-chevron-down ml-1 text-xs text-black/60"
                          aria-hidden="true"
                        />
                      ) : null}
                    </NavLink>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          <button
            type="button"
            className="absolute right-0 inline-flex items-center justify-center text-gray-700 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <i className="fa-solid fa-bars text-lg" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="border-t border-gray-100 bg-white md:hidden"
            initial={{ y: -12, opacity: 0, height: 0 }}
            animate={{ y: 0, opacity: 1, height: "auto" }}
            exit={{ y: -12, opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mx-auto max-w-7xl px-6 py-2">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.isPentaKuhl ? (
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center py-2 text-[15px] text-black hover:text-brand-orange"
                      >
                        <span className="font-normal text-black">Penta</span>
                        <span className="font-bold text-sky-600">KÜHL</span>
                        <i
                          className="fa-solid fa-chevron-down ml-1 text-xs text-black/60"
                          aria-hidden="true"
                        />
                      </Link>
                    ) : item.to.startsWith("/#") ? (
                      <Link
                        to={item.to}
                        onClick={() => {
                          setMobileOpen(false);
                        }}
                        className={[
                          "flex items-center py-2 text-[15px] font-normal",
                          activeHash === item.to.replace("/#", "#")
                            ? "text-brand-orange"
                            : "text-black hover:text-brand-orange",
                        ].join(" ")}
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown ? (
                          <i
                            className="fa-solid fa-chevron-down ml-1 text-xs text-black/60"
                            aria-hidden="true"
                          />
                        ) : null}
                      </Link>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={() => {
                          setMobileOpen(false);
                        }}
                        className={[
                          "flex items-center py-2 text-[15px]",
                          "font-normal text-black hover:text-brand-orange",
                        ].join(" ")}
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown ? (
                          <i
                            className="fa-solid fa-chevron-down ml-1 text-xs text-black/60"
                            aria-hidden="true"
                          />
                        ) : null}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

