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
    <section className="py-32 bg-[#0B0B0F]/50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C9A45C]/30"
          >
            <item.icon className="text-[#C9A45C] mb-4" />
            <h3 className="text-white text-xl mb-2">{item.title}</h3>
            <p className="text-white/50">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
