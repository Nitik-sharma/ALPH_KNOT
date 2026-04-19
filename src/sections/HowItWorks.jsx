import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Users, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall className="text-[#C9A45C]" size={28} />,
    title: "Book a Strategy Call",
    desc: "Share your goals, challenges, and hiring needs. We quickly understand where you are and where you want to go.",
  },
  {
    icon: <Users className="text-[#C9A45C]" size={28} />,
    title: "Get Matched with the Right Talent",
    desc: "We connect you with pre-vetted professionals aligned to your business, role requirements, and time zone.",
  },
  {
    icon: <Rocket className="text-[#C9A45C]" size={28} />,
    title: "Start Execution",
    desc: "Your team gets to work immediately, delivering results without delays, overhead, or hiring complexity.",
  },
  {
    icon: <TrendingUp className="text-[#C9A45C]" size={28} />,
    title: "Scale as You Grow",
    desc: "Easily expand or adjust your team based on your needs — flexible, fast, and built for growth.",
  },
];

const HowitWorks = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🔥 HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl text-[#1F2E4F] text-center mb-16 tracking-tight"
        >
          How It <span className="text-[#C9A45C]">Works</span>
        </motion.h2>

        {/* 🔥 STEPS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group p-7 rounded-2xl border border-[#1F2E4F]/10 bg-white 
              hover:border-[#C9A45C] 
              hover:shadow-[0px_10px_30px_rgba(201,164,92,0.25)] 
              transition-all duration-300"
            >
              {/* ICON */}
              <div className="mb-5 transition group-hover:scale-110">
                {step.icon}
              </div>

              {/* STEP NUMBER */}
              <p className="text-sm text-[#C9A45C] font-medium mb-2">
                Step {i + 1}
              </p>

              {/* TITLE */}
              <h3 className="text-lg text-[#1F2E4F] font-semibold mb-2 group-hover:text-[#C9A45C] transition">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#1F2E4F]/70 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
