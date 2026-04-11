import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Zap } from "lucide-react";

const Features = () => {
  const data = [
    {
      icon: Shield,
      title: "Vetted Excellence",
      desc: "Rigorous screening process.",
    },
    {
      icon: Users,
      title: "Elite Network",
      desc: "Access top 1% talent.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      desc: "Hire 60% faster.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔥 HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F2E4F]">
            Why Choose <span className="text-[#C9A45C]">Alph Knot</span>
          </h2>
          <p className="text-[#1F2E4F]/60 mt-3 max-w-xl mx-auto">
            Built for ambitious businesses that need speed, quality, and
            reliability.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-white border border-[#1F2E4F]/10 shadow-sm hover:shadow-lg transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C9A45C]/10 mb-5">
                <item.icon className="text-[#C9A45C]" size={22} />
              </div>

              {/* TITLE */}
              <h3 className="text-[#1F2E4F] text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-[#1F2E4F]/60">{item.desc}</p>

              {/* HOVER LINE */}
              <div className="mt-4 h-[2px] w-0 bg-[#3FA7B3] group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
