import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Who we help", type: null },
  { name: "Services", type: "services" },
  { name: "How it works", type: null },
  { name: "Our philosophy", type: null },
  { name: "Who We Are", type: "about" },
];

const Navbar = () => {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/80 backdrop-blur-xl py-3 shadow-2xl border-b border-gold-500/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
            <div className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500">
              <span className="text-black font-display font-bold text-lg">
                A
              </span>
            </div>
          </div>
          <h1 className="text-gold-500 text-2xl font-display font-bold tracking-tight group-hover:text-white transition-colors duration-300">
            Alph Knot
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => link.type && setActiveMenu(link.type)}
              onMouseLeave={() => link.type && setActiveMenu(null)}
              className="relative group cursor-pointer"
            >
              <span className="text-[#E5E5E5]/80 hover:text-[#C9A45C] transition">
                {link.name}
              </span>

              {/* Small underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#C9A45C] group-hover:w-full transition-all duration-300"></span>
            </div>
          ))}
        </nav>

        <AnimatePresence>
          {activeMenu && (
            <div
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
              className="fixed top-[80px] left-0 w-full z-40"
            >
              <MegaMenu type={activeMenu} />
            </div>
          )}
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex items-center gap-6"
        >
          <button className="text-white/60 hover:text-gold-500 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group">
            Book a Call
            <ArrowUpRight
              size={14}
              className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all duration-300"
            />
          </button>

          <motion.button
            onClick={() => navigate("/hire-talent")}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 20px rgba(201, 164, 92, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gold-500 text-black px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-400 transition-all duration-300"
          >
            Hire Talent
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/80 hover:text-gold-500 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#0B0B0F] px-6 py-6 border-t border-[#C9A45C]/20"
          >
            <div className="flex flex-col gap-4">
              {/* Who We Are Dropdown */}
              <div>
                <div
                  onClick={() =>
                    setOpenDropdown(openDropdown === "about" ? null : "about")
                  }
                  className="flex justify-between items-center text-white text-lg cursor-pointer"
                >
                  Who we are
                  <span
                    className={`transition-transform ${
                      openDropdown === "about" ? "rotate-180" : ""
                    }`}
                  >
                    ⌃
                  </span>
                </div>

                <AnimatePresence>
                  {openDropdown === "about" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 mt-2 flex flex-col gap-2"
                    >
                      {[
                        "Our People",
                        "Our Technology",
                        "Our Advantage",
                        "Analyst Reports",
                        "Awards",
                        "News",
                        "About Us",
                        "Locations",
                      ].map((item, i) => (
                        <span
                          key={i}
                          className="text-white/70 hover:text-[#C9A45C] text-base"
                        >
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div>
                <div
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "services" ? null : "services",
                    )
                  }
                  className="flex justify-between items-center text-white text-lg cursor-pointer"
                >
                  Services
                  <span
                    className={`transition-transform ${
                      openDropdown === "services" ? "rotate-180" : ""
                    }`}
                  >
                    ⌃
                  </span>
                </div>

                <AnimatePresence>
                  {openDropdown === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 mt-2 flex flex-col gap-2"
                    >
                      {[
                        "Trust & Safety",
                        "Wellness & Resiliency",
                        "Financial Crime & Compliance",
                        "AI Safety & Alignment",
                        "AI Data & Operations",
                        "Customer Experience",
                        "Sales as a Service",
                        "Learning as a Service",
                        "Autonomous Vehicles",
                        "Robotics",
                      ].map((item, i) => (
                        <span
                          key={i}
                          className="text-white/70 hover:text-[#C9A45C] text-base"
                        >
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Normal Links */}
              <span className="text-white text-lg">How it works</span>
              <span className="text-white text-lg">Our philosophy</span>

              {/* CTA */}
              <button className="text-white border border-[#C9A45C] py-2 rounded-full mt-4">
                Book a Call
              </button>

              <button
                className="bg-[#C9A45C] text-black py-2 rounded-full font-medium"
                onClick={() => navigate("/hire-talent")}
              >
                Hire Talent
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
