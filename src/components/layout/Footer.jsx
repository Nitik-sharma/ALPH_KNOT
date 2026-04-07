import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: FaInstagram },
    { icon: FaFacebook },
    { icon: FaTwitter },
    { icon: FaLinkedin },
  ];
  return (
    <footer className="bg-[#0B0B0F] text-white border-t border-white/10">
      {/* TOP CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let’s build something{" "}
            <span className="text-[#C9A45C]">great together</span>
          </h2>

          <button className="bg-[#C9A45C] text-black px-6 py-3 rounded-full hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold mb-4">Alph Knot</h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Empowering enterprises with comprehensive services across design,
            technology, and operations—built to scale, innovate, and lead.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-white/60">
            <li className="hover:text-[#C9A45C] cursor-pointer">
              UI/UX Design
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer">
              App Development
            </li>
            <li className="hover:text-[#C9A45C] cursor-pointer">Branding</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-white/60">
            <li className="hover:text-[#C9A45C] cursor-pointer">About Us</li>
            <li className="hover:text-[#C9A45C] cursor-pointer">Careers</li>
            <li className="hover:text-[#C9A45C] cursor-pointer">Blog</li>
            <li className="hover:text-[#C9A45C] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4">
            {socialIcons.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-3 bg-white/5 rounded-full hover:bg-[#C9A45C] hover:text-black transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-white/50 text-sm py-6 border-t border-white/10">
        © {new Date().getFullYear()} Alph Knot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
