import React from "react";
import { motion } from "framer-motion";
import { Globe, Settings, TrendingUp } from "lucide-react";
import globe from '../assets/images/WHYCHOOSEUSGLOBAL.avif'

const data = [
  {
    icon: Globe,
    title: "Agile Global Talent",
    desc: "We connect you with high-performing professionals who integrate seamlessly into your workflow — without delays of traditional hiring.",
  },
  {
    icon: Settings,
    title: "Flexible Digital Support",
    desc: "From operations to specialized roles, we provide support exactly when and how you need — no long-term commitments.",
  },
  {
    icon: TrendingUp,
    title: "Execution That Delivers",
    desc: "We ensure outcomes. Our partners work as an extension of your team to drive measurable business results.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C9A45C]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#C9A45C]/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-5xl font-semibold text-white mb-16"
        >
          Built for Scale. Designed for{" "}
          <span className="text-[#C9A45C]">Speed.</span>
        </motion.h2>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#C9A45C]/40 transition-all duration-500"
            >
              {/* ✨ Hover Glow Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 border border-[#C9A45C]/30" />

              {/* 🔥 Icon */}
              <div className="mb-6">
                <item.icon
                  size={40}
                  className="text-[#C9A45C] group-hover:scale-110 transition"
                />
              </div>

              {/* 🔥 Title */}
              <h3 className="text-xl font-semibold text-[#C9A45C] mb-4">
                {item.title}
              </h3>

              {/* 🔥 Description */}
              <p className="text-white/60 leading-relaxed text-sm">
                {item.desc}
              </p>

              {/* ✨ Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A45C] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 SECOND SECTION */}
      <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* 🔥 HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-semibold text-white mb-6"
          >
            Why Global Leaders Choose{" "}
            <span className="text-[#C9A45C]">Alph Knot</span>
          </motion.h2>

          {/* 🔥 SUBTEXT */}
          <p className="text-white/60 mb-10 max-w-lg">
            Not just another outsourcing provider. We act as your strategic
            execution partner — built for speed, precision, and real business
            impact.
          </p>

          {/* 🔥 DIFFERENCE POINTS */}
          <div className="space-y-6">
            {[
              {
                title: "Execution Partners, Not Virtual Assistants",
                desc: "We don’t just complete tasks — we take ownership and drive measurable results.",
              },
              {
                title: "Instant Scale, Zero Hiring Delays",
                desc: "From 1 role to full teams — scale instantly without recruitment bottlenecks.",
              },
              {
                title: "Aligned to Your Time Zone",
                desc: "Work seamlessly with professionals synced to your business hours.",
              },
              {
                title: "No Contracts. No Risk.",
                desc: "Flexible engagement model — scale up or down anytime without lock-ins.",
              },
              {
                title: "Cost Efficiency Without Compromise",
                desc: "Reduce operational costs while maintaining top-tier execution quality.",
              },
              {
                title: "Global Talent with Business Mindset",
                desc: "Professionals trained in communication, accountability, and results.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                {/* 🔥 ICON STYLE DOT */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C9A45C]/10 group-hover:bg-[#C9A45C]/20 transition">
                  <div className="w-2 h-2 bg-[#C9A45C] rounded-full"></div>
                </div>

                <div>
                  <h4 className="text-white font-semibold group-hover:text-[#C9A45C] transition">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🔥 TAGLINE */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-white/50"
          >
            <span className="text-[#C9A45C]">No delays.</span> No friction. Just
            execution.
          </motion.p>
        </div>

        {/* RIGHT SIDE VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center"
        >
          {/* 🔥 GLOW BACKGROUND */}
          <div className="absolute w-[400px] h-[400px] bg-[#C9A45C]/10 blur-[120px] rounded-full" />

          {/* 🌍 IMAGE */}
          <img
            src={globe}
            alt="global"
            className="relative w-full max-w-[450px] object-contain"
          />

          {/* 🔥 FLOATING EFFECT */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
