import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: FaInstagram, link: "https://www.instagram.com/alphknot" },
    { icon: FaFacebook, link: "https://www.facebook.com/alphknot" },
    { icon: FaTwitter, link: "https://www.x.com/alphknot" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/company/alph-knot" },
  ];

  return (
    <footer className="bg-white border-t border-[#1F2E4F]/10">
      {/* 🔥 TOP CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#1F2E4F]/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl text-[#1F2E4F] text-center md:text-left tracking-tight">
            Let’s build something{" "}
            <span className="text-[#C9A45C]">great together</span>
          </h2>

          <button className="bg-[#C9A45C] text-white px-6 py-3 rounded-full font-medium tracking-wide hover:shadow-[0px_8px_25px_rgba(201,164,92,0.3)] transition">
            Get Started
          </button>
        </div>
      </div>

      {/* 🔥 MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <h2 className="text-xl text-[#1F2E4F] mb-4">Alph Knot</h2>
          <p className="text-[#1F2E4F]/60 text-sm leading-relaxed">
            Empowering enterprises with comprehensive services across design,
            technology, and operations—built to scale, innovate, and lead.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg text-[#1F2E4F] mb-4">Services</h3>
          <ul className="space-y-2 text-[#1F2E4F]/60 text-sm">
            <li className="hover:text-[#C9A45C] cursor-pointer transition">
              UI/UX Design
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer transition">
              Web Development
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer transition">
              App Development
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer transition">
              Branding
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg text-[#1F2E4F] mb-4">Company</h3>
          <ul className="space-y-2 text-[#1F2E4F]/60 text-sm">
            <li className="hover:text-[#C9A45C] cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer transition">
              Blog
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg text-[#1F2E4F] mb-4">Follow Us</h3>

          <div className="flex gap-4">
            {socialIcons.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#1F2E4F]/5 rounded-full hover:bg-[#C9A45C] transition"
                >
                  <Icon
                    size={18}
                    className="text-[#1F2E4F] group-hover:text-white transition"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* 🔥 BOTTOM */}
      <div className="text-center text-[#1F2E4F]/50 text-sm py-6 border-t border-[#1F2E4F]/10">
        © {new Date().getFullYear()} Alph Knot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
