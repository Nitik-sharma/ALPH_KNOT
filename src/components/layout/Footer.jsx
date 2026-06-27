import { path } from "framer-motion/client";
import React from "react";

import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const socialIcons = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/alphknot",
    label: "Instagram",
    background:
      "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45)",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/alphknot",
    label: "Facebook",
    background: "#1877F2",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/alphknot",
    label: "X (formerly Twitter)",
    background: "#000000",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/company/alph-knot",
    label: "LinkedIn",
    background: "#0A66C2",
  },
];



// const socialIcons = [
//   { icon: FaInstagram, link: "https://www.instagram.com/alphknot" },
//   { icon: FaFacebook, link: "https://www.facebook.com/alphknot" },
//   { icon: FaTwitter, link: "https://www.x.com/alphknot" },
//   { icon: FaLinkedin, link: "https://www.linkedin.com/company/alph-knot" },
// ];



const company = [
  { title: "About Us", path: "/about" },
  { title: "Who We Help", path: "/who-we-help" },
  { title: "How It Works", path: "/how-it-works" },
  { title: "Our Philosophy", path: "/philosophy" },
  { title: "Careers", path: "/careers" },
  { title: "Case Studies", path: "/case-studies" },
  { title: "Contact", path: "/contact-us" },
  {
    title: "Our Services",
    path: "/services",
  },
];

const Footer = () => {
  return (
    <footer
      className="bg-[#bb7f14] border-t border-[#1F2E4F]/10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── TOP CTA ── */}
      <div className="max-w-7xl mx-auto px-6 py-14 border-b border-[#1F2E4F]/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p
              className="text-white text-sm font-semibold tracking-[3px] uppercase mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Let's Work Together
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#04388b]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Let's build something{" "}
              <span className="text-white">great together</span>
            </h2>
          </div>
          <NavLink to={"/contact-us"}>
            <button
              className="flex-shrink-0 bg-[#04388b] text-white px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get Started
            </button>
          </NavLink>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* ── ROW 1: Brand + Company + Social ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
          {/* Brand */}
          <div>
            <h2
              className="text-xl font-bold  mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className=" text-[#04388b]">Alph</span>{" "}
              <span className="text-[#6db9d1]">Knot</span>
            </h2>
            <p className="text-white text-[0.90rem] leading-relaxed max-w-xs">
              Empowering startups, SMBs, and enterprises with world-class
              outsourced talent built to scale, operate, and lead.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-sm font-semibold tracking-[2.5px] uppercase text-white mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Company
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {company.map((c, i) => (
                <li key={i}>
                  <NavLink
                    to={c.path}
                    className={({ isActive }) =>
                      `text-[0.90rem] transition-colors duration-150 ${
                        isActive
                          ? "text-[#04388b]"
                          : "text-white hover:text-[#04388b]"
                      }`
                    }
                  >
                    {c.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3
              className="text-[10px] font-semibold tracking-[2.5px] uppercase text-[#bb7f14] mb-5"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Follow Us
            </h3>
            <div className="flex gap-3 mb-6">
              {socialIcons.map(({ icon: Icon, link, label, background }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-transform hover:scale-105"
                  style={{ background }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-sm text-[#04388b] leading-relaxed max-w-[200px]">
              Follow us for updates on outsourcing, ops, and remote teams.
            </p>
          </div>
        </div>

        {/* ── ROW 2: Services (full width) ── */}
        {/* <div className="pt-12">
          <h3
            className="text-[10px] font-semibold tracking-[2.5px] uppercase text-[#bb7f14] mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Services
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {services.map((s, i) => (
              <li key={i}>
                <NavLink
                  to={s.path}
                  className={({ isActive }) =>
                    `text-[13px] transition-colors duration-150 flex items-center gap-2 group ${
                      isActive
                        ? "text-[#bb7f14]"
                        : "text-[#1F2E4F]/55 hover:text-[#bb7f14]"
                    }`
                  }
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bb7f14]/40 group-hover:bg-[#bb7f14] flex-shrink-0 transition-colors" />
                  {s.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-[#1F2E4F]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#ffffff text-sm">
            © {new Date().getFullYear()}{" "}
            <span className=" text-sm text-[#04388b]">Alph</span>{" "}
            <span className="text-sm text-[#6db9d1]">Knot</span>. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", path: "/privacy-policy" },
              { label: "Terms of Service", path: "/terms-of-service" },
              { label: "Cookie Policy", path: "/cookie-policy" },
            ].map((l, i) => (
              <NavLink
                key={i}
                to={l.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "text-[#fffff]"
                      : "text-[#FFFFFF] hover:text-[#04388b]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
