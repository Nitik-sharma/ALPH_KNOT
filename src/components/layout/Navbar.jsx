import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl py-3 shadow-lg border-b border-[rgba(31,46,79,0.08)]"
          : "bg-white py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        {/* ✅ SEO LOGO */}
        <Link
          to="/"
          aria-label="Alph Knot Home"
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            alt="Alph Knot - Global Talent & Business Solutions"
            title="Alph Knot"
            loading="eager"
            className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* ✅ NAVIGATION */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-8"
        >
          {navLinks.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => link.type && setActiveMenu(link.type)}
              onMouseLeave={() => link.type && setActiveMenu(null)}
              className="relative group"
            >
              <Link
                to={link.path}
                className="text-[#1F2E4F]/80 hover:text-[#3FA7B3] transition"
              >
                {link.name}
              </Link>

              {/* underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#3FA7B3] group-hover:w-full transition-all duration-300"></span>
            </div>
          ))}
        </nav>

        {/* ✅ MEGA MENU */}
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

        {/* ✅ CTA */}
        <motion.div className="hidden lg:flex items-center gap-6">
          <Link
            to="/book-call"
            className="text-[#1F2E4F]/70 hover:text-[#3FA7B3] text-sm font-medium flex items-center gap-1 group"
           
          >
            Book a Call
            <ArrowUpRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition"
            />
          </Link>

          <motion.button
            onClick={() => navigate("/hire-talent")}
            className="bg-[#C9A45C] text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:opacity-90"
          >
            Hire Alph Knot
          </motion.button>
        </motion.div>

        {/* ✅ MOBILE BUTTON */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#1F2E4F] hover:text-[#3FA7B3]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="lg:hidden bg-white px-6 py-6 border-t border-[rgba(31,46,79,0.08)]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-[#1F2E4F] text-lg hover:text-[#3FA7B3]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/book-call"
                className="text-[#1F2E4F] border border-[#C9A45C] py-2 rounded-full text-center hover:bg-[#C9A45C] hover:text-white"
              >
                Book a Call
              </Link>

              <button
                onClick={() => navigate("/hire-talent")}
                className="bg-[#C9A45C] text-white py-2 rounded-full"
              >
                Hire Talent
              </button>
            </div>
          </motion.div>
        )}
        <div></div>
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
