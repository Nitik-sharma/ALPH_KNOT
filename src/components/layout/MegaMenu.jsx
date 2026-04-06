import React from "react";
import { motion } from "framer-motion";

const MegaMenu = ({ type, onClose }) => {
  const data = {
    services: [
      "Trust & Safety",
      "Wellness & Resiliency",
      "Financial Crime & Compliance",
      "AI Safety & Alignment",
      "AI Data & Operations",
      "Customer Experience (CX)",
      "Sales as a Service",
      "Learning as a Service",
      "Autonomous Vehicles",
      "Robotics",
    ],
    about: [
      "Our People",
      "Our Advantage",
      "Awards",
      "About Us",
      "Locations",
      "Our Technology",
      "Analyst Reports",
      "Social Impact & Inclusion",
    ],
  };

  const items = type === "services" ? data.services : data.about;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full bg-[#0B0B0F] border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Title */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            {type === "services" ? "Services" : "Who We Are"}
          </h2>
        </div>

        {/* Items */}
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 5 }}
            className="text-white/70 hover:text-[#C9A45C] cursor-pointer transition"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MegaMenu;
