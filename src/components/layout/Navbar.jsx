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
  { name: "Who We Are", type: "about", path: "/about" },
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
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link to="/" onClick={closeAll} aria-label="Alph Knot Home">
            <img src={logo} alt="Alph Knot" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                onMouseEnter={() => link.type && setActiveMenu(link.type)}
                onMouseLeave={() => link.type && setActiveMenu(null)}
                className="relative group"
              >
                <Link
                  to={link.path}
                  className="text-sm text-[#1F2E4F]/80 hover:text-[#C9A45C] transition-colors flex items-center gap-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.name}
                  {link.type && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeMenu === link.type
                          ? "rotate-180 text-[#C9A45C]"
                          : ""
                      }`}
                    />
                  )}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#C9A45C] group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/book-call"
              className="text-sm text-[#1F2E4F]/70 hover:text-[#C9A45C] flex items-center gap-1 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a Call <ArrowUpRight size={13} />
            </Link>
            <button
              onClick={() => navigate("/hire-talent")}
              className="bg-[#C9A45C] text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
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

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <div
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
              className="absolute top-[60px] left-0 w-full z-50"
            >
              <MegaMenu type={activeMenu} />
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Mobile Drawer — rendered OUTSIDE header so it doesn't affect layout ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAll}
              className="fixed inset-0 z-40 bg-black/25 lg:hidden"
              style={{ top: "60px" }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.22 }}
              className="fixed right-0 bottom-0 z-50 w-[78vw] max-w-[300px] bg-white lg:hidden flex flex-col overflow-y-auto"
              style={{ top: "60px" }}
            >
              {/* Links */}
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
                            className={`text-[#C9A45C] transition-transform duration-200 ${
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
                        className="flex items-center py-3 px-3 text-[13.5px] font-medium text-[#0b1c35] rounded-lg hover:bg-amber-50 hover:text-[#C9A45C] transition-colors"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {link.name}
                      </Link>
                    )}
                    <div className="h-px bg-gray-100 mx-3" />
                  </div>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-4 py-5 border-t border-gray-100 flex flex-col gap-2.5">
                <Link
                  to="/book-call"
                  onClick={closeAll}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-[#0b1c35]/15 text-[13px] font-medium text-[#0b1c35] hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Book a Call <ArrowUpRight size={13} />
                </Link>
                <button
                  onClick={() => {
                    navigate("/hire-talent");
                    closeAll();
                  }}
                  className="py-2.5 rounded-full bg-[#C9A45C] text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
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
