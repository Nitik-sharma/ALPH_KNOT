import React from "react";
import { motion } from "framer-motion";
import { Shield, Users, Zap } from "lucide-react";

const Features = () => {
  const data = [
    {
      icon: Shield,
      title: "Vetted Excellence",
      desc: "Rigorous screening process to ensure only top-tier professionals.",
    },
    {
      icon: Users,
      title: "Elite Network",
      desc: "Access the top 1% of global talent across industries.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      desc: "Scale your team 60% faster with our streamlined hiring.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1F2E4F] tracking-tight">
            Why Choose <span className="text-[#bb7f14]">Alph Knot</span>
          </h2>
          <p className="text-[#1F2E4F]/60 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
            Built for ambitious businesses that need speed, quality, and
            reliability.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-[#1F2E4F] border border-[#bb7f14]/20 hover:border-[#bb7f14]/60 hover:shadow-[0px_10px_30px_rgba(201,164,92,0.2)] transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#bb7f14]/10 border border-[#bb7f14]/25 group-hover:bg-[#bb7f14]/20 group-hover:border-[#bb7f14]/50 transition-all duration-300 mb-5">
                <item.icon className="text-[#bb7f14]" size={22} />
              </div>

              {/* TITLE */}
              <h3 className="text-white text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
