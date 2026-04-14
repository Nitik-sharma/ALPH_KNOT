import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Who we help", type: null, path: "/who-we-help" },
  { name: "Services", type: "services", path: "/services" },
  { name: "How it works", type: null, path: "/how-it-works" },
  { name: "Our philosophy", type: null, path: "/philosophy" },
  { name: "Who We Are", type: "about", path: "/about" },
];


const aboutItems = [
  { name: "Our People", path: "/about/people" },
  { name: "Our Advantage", path: "/about/advantage" },
  { name: "Awards", path: "/about/awards" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  const navigate = useNavigate();
const [openAbout, setOpenAbout] = useState(false);
 const [openServices, setOpenServices] = useState(false);
 const [openSection, setOpenSection] = useState(null);
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
                className="text-[#1F2E4F]/80 hover:text-[#3FA7B3] transition flex items-center gap-1"
              >
                {link.name}

                {/* ARROW */}
                {link.type && (
                  <ChevronDown
                    size={14}
                    className={`mt-[2px] transition-transform ${
                      activeMenu === link.type
                        ? "rotate-180 text-[#3FA7B3]"
                        : ""
                    }`}
                  />
                )}
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
      {/* ✅ MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="lg:hidden bg-white px-6 py-6 border-t border-[rgba(31,46,79,0.08)] max-h-[80vh] overflow-y-auto">
            {/* NORMAL LINKS */}
            <div className="flex flex-col gap-4 mb-6">
              {navLinks.map((link, i) => {
                if (link.type === "services" || link.type === "about")
                  return null;

                return (
                  <Link
                    key={i}
                    to={link.path}
                    className="text-[#1F2E4F] text-lg hover:text-[#3FA7B3]"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* 🔥 LEVEL 1: SERVICES */}
            <div className="border-b pb-4 mb-4">
              <button
                onClick={() => setOpenServices(!openServices)}
                className="w-full flex justify-between items-center"
              >
                <span className="text-[#1F2E4F] text-lg font-semibold">
                  Services
                </span>

                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    openServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* 🔥 LEVEL 2: 9 SECTIONS */}
              <AnimatePresence>
                {openServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4 space-y-4"
                  >
                    {[
                      {
                        title: "1. Executive & Business Support",
                        items: [
                          "Executive Assistants (EA)",
                          "Virtual Assistants (VA)",
                          "Calendar & Email Management",
                          "Research & Reporting",
                          "Personal + Business Admin Support",
                        ],
                      },
                      {
                        title: "2. Customer Operations",
                        items: [
                          "Customer Support (Chat, Email, Voice)",
                          "Call Center (Inbound/Outbound)",
                          "Technical Support",
                          "Helpdesk Management",
                        ],
                      },
                      {
                        title: "3. Back Office & Operations",
                        items: [
                          "Data Entry & Processing",
                          "CRM Management",
                          "Order Processing",
                          "Documentation & Verification",
                          "Operations Support",
                        ],
                      },
                      {
                        title: "4. Finance & Accounting Support",
                        items: [
                          "Bookkeeping",
                          "Accounts Payable/Receivable",
                          "Payroll Processing",
                          "Financial Reporting",
                        ],
                      },
                      {
                        title: "5. Human Resource Services",
                        items: [
                          "Recruitment Support",
                          "Resume Screening",
                          "Onboarding Coordination",
                          "HR Operations",
                        ],
                      },
                      {
                        title: "6. Digital Growth Services",
                        items: [
                          "Social Media Management",
                          "Performance Marketing Support",
                          "SEO & Content",
                          "Lead Generation",
                        ],
                      },
                      {
                        title: "7. Tech & Development",
                        items: [
                          "Web Development",
                          "Software Development",
                          "AI Solutions / Automation",
                          "IT Support",
                        ],
                      },
                      {
                        title: "8. Knowledge Process",
                        items: [
                          "Market Research",
                          "Business Analysis",
                          "Legal Process Outsourcing",
                          "Data Analytics",
                        ],
                      },
                      {
                        title: "9. Custom Workforce Solutions",
                        items: ["Customized Talent Solutions"],
                      },
                    ].map((section, index) => (
                      <div key={index} className="border-b pb-3">
                        {/* 🔥 LEVEL 3: SECTION */}
                        <button
                          onClick={() =>
                            setOpenSection(openSection === index ? null : index)
                          }
                          className="w-full flex justify-between items-center text-left"
                        >
                          <span className="text-[#1F2E4F] font-medium">
                            {section.title}
                          </span>

                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              openSection === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* 🔥 SUB ITEMS */}
                        <AnimatePresence>
                          {openSection === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden mt-3 pl-3"
                            >
                              <div className="space-y-2">
                                {section.items.map((item, i) => (
                                  <div
                                    key={i}
                                    className="text-sm text-[#1F2E4F]/70 flex items-center gap-2"
                                  >
                                    <div className="w-1.5 h-1.5 bg-[#3FA7B3] rounded-full"></div>
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🔥 WHO WE ARE */}
            <div className="border-b pb-4 mb-4">
              <button
                onClick={() => setOpenAbout(!openAbout)}
                className="w-full flex justify-between items-center"
              >
                <span className="text-[#1F2E4F] text-lg font-semibold">
                  Who We Are
                </span>

                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    openAbout ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openAbout && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-3 pl-3 space-y-2"
                  >
                    {aboutItems.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className="text-sm text-[#1F2E4F]/70 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-[#3FA7B3] rounded-full"></div>
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
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
      </AnimatePresence>
    </header>
  );
};;

export default Navbar;
