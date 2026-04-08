import React from "react";
import { motion } from "framer-motion";
import { Globe, Settings, TrendingUp } from "lucide-react";
import globe from "../assets/images/Background.png";

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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔥 HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-5xl font-semibold text-[#1F2E4F] mb-16"
        >
          Built for Scale. Designed for{" "}
          <span className="text-[#C9A45C]">Speed.</span>
        </motion.h2>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-white border border-[#1F2E4F]/10 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* ICON */}
              <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-[#C9A45C]/10">
                <item.icon size={26} className="text-[#C9A45C]" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-[#1F2E4F] mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-[#1F2E4F]/60 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* HOVER LINE */}
              <div className="mt-4 h-[2px] w-0 bg-[#3FA7B3] group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 SECOND SECTION */}
        <section className="relative py-32">
          {/* 🔥 BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <img
              src={globe}
              alt="Global network"
              className="w-full h-full object-cover"
            />

            {/* 🔥 DARK OVERLAY */}
            <div className="absolute inset-0 bg-[#0B0B0F]/70" />

            {/* 🔥 GOLD LIGHT GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9A45C]/20 via-transparent to-transparent" />
          </div>

          {/* 🔥 CONTENT */}
          <div className="relative max-w-7xl mx-auto px-6">
            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center text-3xl md:text-5xl font-semibold text-white mb-16"
            >
              Why Global Leaders Choose{" "}
              <span className="text-[#C9A45C]">Alph Knot</span>
            </motion.h2>

            {/* 🔥 GRID */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* LEFT CONTENT */}
              <div className="space-y-10">
                {[
                  {
                    title: "Time-Zone Synced Execution",
                    desc: "Operate seamlessly with talent aligned to U.S. business hours — no delays, no gaps.",
                  },
                  {
                    title: "Strategic Talent, Not Just Support",
                    desc: "We deliver execution partners who think, act, and grow with your business.",
                  },
                  {
                    title: "Built for Scale",
                    desc: "From 1 hire to full execution teams — scale instantly based on your needs.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4"
                  >
                    {/* ICON DOT */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C9A45C]/20">
                      <div className="w-2 h-2 bg-[#C9A45C] rounded-full"></div>
                    </div>

                    <div>
                      <h4 className="text-white text-lg font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT SIDE EMPTY (IMAGE IS BG NOW) */}
              <div />
            </div>

            {/* 🔥 BOTTOM 3 CARDS */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Zero Hiring Friction",
                  desc: "No job postings, no interviews, no onboarding headaches.",
                },
                {
                  title: "Cost-Efficient, High Impact",
                  desc: "Reduce operational costs without compromising quality.",
                },
                {
                  title: "Global Talent, Local Understanding",
                  desc: "Professionals trained to align with your business culture.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-4"
                >
                  {/* 🔥 SAME DOT STYLE */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C9A45C]/20">
                    <div className="w-2 h-2 bg-[#C9A45C] rounded-full"></div>
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyChooseUs;
