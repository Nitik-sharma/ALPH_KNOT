import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MegaMenu = ({ type }) => {
  const data = {
    services: [
      { name: "Trust & Safety", path: "/services/trust-safety" },
      { name: "Wellness & Resiliency", path: "/services/wellness" },
      {
        name: "Financial Crime & Compliance",
        path: "/services/finance-compliance",
      },
      { name: "AI Safety & Alignment", path: "/services/ai-safety" },
      { name: "AI Data & Operations", path: "/services/ai-operations" },
      {
        name: "Customer Experience (CX)",
        path: "/services/customer-experience",
      },
      { name: "Sales as a Service", path: "/services/sales" },
      { name: "Learning as a Service", path: "/services/learning" },
      { name: "Autonomous Vehicles", path: "/services/autonomous" },
      { name: "Robotics", path: "/services/robotics" },
    ],
    about: [
      { name: "Our People", path: "/about/people" },
      { name: "Our Advantage", path: "/about/advantage" },
      { name: "Awards", path: "/about/awards" },
      { name: "About Us", path: "/about" },
      { name: "Locations", path: "/about/locations" },
      { name: "Our Technology", path: "/about/technology" },
      { name: "Analyst Reports", path: "/about/reports" },
      { name: "Social Impact & Inclusion", path: "/about/social-impact" },
    ],
  };

  const items = type === "services" ? data.services : data.about;

  return (
    <motion.div
      role="menu"
      aria-label={type === "services" ? "Services Menu" : "About Menu"}
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="w-full bg-white border-t border-[rgba(31,46,79,0.08)] shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* ✅ TITLE (SEO Heading) */}
        <div>
          <h2 className="text-3xl font-bold text-[#1F2E4F] mb-6">
            {type === "services" ? "Services" : "Who We Are"}
          </h2>

          <p className="text-[#1F2E4F]/60 text-sm max-w-xs">
            Explore our capabilities designed to help businesses scale with
            precision and efficiency.
          </p>
        </div>

        {/* ✅ ITEMS (NOW SEO LINKS) */}
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 6 }}
            className="group transition-all duration-300"
          >
            <Link
              to={item.path}
              role="menuitem"
              aria-label={item.name}
              className="flex items-center gap-3"
            >
              {/* DOT */}
              <div className="w-2 h-2 rounded-full bg-[#3FA7B3] group-hover:bg-[#C9A45C] transition"></div>

              {/* TEXT */}
              <span className="text-[#1F2E4F]/80 group-hover:text-[#3FA7B3] font-medium transition">
                {item.name}
              </span>
            </Link>

            {/* UNDERLINE */}
            <div className="ml-5 mt-1 h-[1px] w-0 bg-[#C9A45C] group-hover:w-12 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MegaMenu;
