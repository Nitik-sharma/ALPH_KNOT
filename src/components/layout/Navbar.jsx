import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const navLinks = [
  { name: "Who we help", type: null, path: "/who-we-help" },
  { name: "Services", type: "services", path: "/services" },
  { name: "How it works", type: null, path: "/how-it-works" },
  { name: "Our philosophy", type: null, path: "/philosophy" },
  { name: "Who We Are", type: null, path: "/about" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        {/* 
          ✅ KEY FIXES:
          - max-w-[1920px] so it fills large screens properly
          - px scales: px-8 (laptop) → px-16 (desktop) → px-24 (large)
          - h scales: h-[68px] → h-[76px] → h-[84px]
          - font scales: 14px → 15px → 16px
          - logo scales: h-9 → h-10 → h-11
          - gap scales: gap-7 → gap-9 → gap-12
        */}
        <div className="mx-auto w-full max-w-[1920px] px-8 lg:px-16 xl:px-24 2xl:px-32 flex items-center justify-between h-[68px] lg:h-[70px] xl:h-[70px] 2xl:h-[88px]">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeAll}
            aria-label="Alph Knot Home"
            className="flex-shrink-0"
          >
            <img
              src={logo}
              alt="Alph Knot"
              className="h-9 lg:h-10 xl:h-11 2xl:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 2xl:gap-12">
            {navLinks.map((link, index) => (
              <div
                key={index}
                onMouseEnter={() => link.type && setActiveMenu(link.type)}
                onMouseLeave={() => link.type && setActiveMenu(null)}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className="text-[14px] xl:text-[15px] 2xl:text-[16px] font-medium text-[#1F2E4F] hover:text-[#bb7f14] transition-colors flex items-center gap-1 whitespace-nowrap"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.name}
                  {link.type && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeMenu === link.type
                          ? "rotate-180 text-[#bb7f14]"
                          : ""
                      }`}
                    />
                  )}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#bb7f14] group-hover:w-full transition-all duration-300" />

                <AnimatePresence>
                  {activeMenu === link.type && link.type && (
                    <div
                      onMouseEnter={() => setActiveMenu(link.type)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-[60]"
                    >
                      <MegaMenu type={link.type} />
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6 2xl:gap-8 flex-shrink-0">
            <Link
              to="/book-call"
              className="text-[14px] xl:text-[15px] 2xl:text-[16px] font-medium text-[#1F2E4F] hover:text-[#bb7f14] flex items-center gap-1.5 transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a Call <ArrowUpRight size={14} />
            </Link>
            <button
              onClick={() => navigate("/hire-talent")}
              className="bg-[#bb7f14] text-white text-[14px] xl:text-[15px] 2xl:text-[16px] font-semibold px-6 xl:px-7 2xl:px-8 py-2.5 xl:py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Hire Alph Knot
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1 text-[#0462ee]"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAll}
              className="fixed inset-0 z-40 bg-black/25 lg:hidden"
              style={{ top: "68px" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.22 }}
              className="fixed right-0 bottom-0 z-50 w-[78vw] max-w-[300px] bg-white lg:hidden flex flex-col overflow-y-auto"
              style={{ top: "68px" }}
            >
              <nav className="flex flex-col px-4 pt-5 pb-2 gap-0.5 flex-1">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.type ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === link.type ? null : link.type,
                            )
                          }
                          className="w-full flex items-center justify-between py-3 px-3 text-[13.5px] font-medium text-[#0b1c35] rounded-lg hover:bg-amber-50 transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {link.name}
                          <ChevronDown
                            size={14}
                            className={`text-[#bb7f14] transition-transform duration-200 ${
                              mobileExpanded === link.type ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === link.type && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                              className="overflow-hidden pl-2"
                            >
                              <MegaMenu type={link.type} mobile />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={closeAll}
                        className="flex items-center py-3 px-3 text-[13.5px] font-medium text-[#0b1c35] rounded-lg hover:bg-amber-50 hover:text-[#bb7f14] transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {link.name}
                      </Link>
                    )}
                    <div className="h-px bg-gray-100 mx-3" />
                  </div>
                ))}
              </nav>

              <div className="px-4 py-5 border-t border-gray-100 flex flex-col gap-2.5">
                <Link
                  to="/book-call"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-[#0b1c35]/15 text-[13px] font-medium text-[#0b1c35] hover:text-[#bb7f14] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Book a Call <ArrowUpRight size={13} />
                </Link>
                <button
                  onClick={() => {
                    navigate("/hire-talent");
                    closeAll();
                  }}
                  className="py-2.5 rounded-full bg-[#bb7f14] text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Hire Alph Knot
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
