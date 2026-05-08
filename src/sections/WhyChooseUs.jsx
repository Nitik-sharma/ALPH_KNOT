import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Settings,
  TrendingUp,
  Clock,
  Brain,
  UserCheck,
  DollarSign,
  Globe2,
} from "lucide-react";
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
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-5xl text-[#1F2E4F] tracking-tight mb-16"
        >
          Built for Scale. Designed for{" "}
          <span className="text-[#C9A45C]">Speed.</span>
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl border border-[#C9A45C]/20 bg-[#1F2E4F] hover:border-[#C9A45C]/60 hover:shadow-2xl transition-all duration-300"
            >
              {/* ICON */}
              <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-[#C9A45C]/10 border border-[#C9A45C]/25 group-hover:bg-[#C9A45C]/20 group-hover:border-[#C9A45C]/50 transition-all duration-300">
                <item.icon size={26} className="text-[#C9A45C]" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl text-white font-semibold mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-white/50 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DARK SECTION */}
        <section className="w-full bg-[#f8f7f4] py-20 px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-4xl md:text-5xl font-bold text-[#0d1b2e] mb-3 leading-tight tracking-tight"
          >
            Why Global Leaders Choose{" "}
            <span className="text-[#C9A45C]">Alph Knot</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center text-[#6b7280] text-base mb-16"
          >
            Six reasons world-class teams trust us to deliver
          </motion.p>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[#e2d9c8] hidden md:block" />

            {[
              {
                image:
                  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
                tag: "Execution",
                num: "01 — Timing",
                title: "Time-Zone Synced Execution",
                desc: "Operate seamlessly with talent aligned to U.S. business hours — no delays, no gaps.",
                side: "left",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
                tag: "Strategy",
                num: "02 — Talent",
                title: "Strategic Talent, Not Just Support",
                desc: "We deliver execution partners who think, act, and grow with your business.",
                side: "right",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
                tag: "Growth",
                num: "03 — Scale",
                title: "Built for Scale",
                desc: "From 1 hire to full execution teams — scale instantly based on your needs.",
                side: "left",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=600&auto=format&fit=crop&q=80",
                tag: "Process",
                num: "04 — Hiring",
                title: "Zero Hiring Friction",
                desc: "No job postings, no interviews, no onboarding headaches.",
                side: "right",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80",
                tag: "Value",
                num: "05 — Cost",
                title: "Cost-Efficient, High Impact",
                desc: "Reduce operational costs without compromising quality or output.",
                side: "left",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=80",
                tag: "Global",
                num: "06 — Culture",
                title: "Global Talent, Local Understanding",
                desc: "Professionals trained to align with your business culture and expectations.",
                side: "right",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: item.side === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 }}
                className={`relative grid md:grid-cols-[1fr_56px_1fr] items-center mb-7 gap-0
          ${
            item.side === "right"
              ? "md:[&>*:nth-child(1)]:order-3 md:[&>*:nth-child(2)]:order-2 md:[&>*:nth-child(3)]:order-1"
              : ""
          }`}
              >
                {/* Card */}
                <div className="md:px-3">
                  <div className="bg-[#0d1b2e] rounded-2xl overflow-hidden border border-[#C9A45C]/15 hover:-translate-y-1 hover:border-[#C9A45C]/50 transition-all duration-300 group cursor-pointer">
                    {/* Image */}
                    <div className="relative w-full h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/90 via-[#0d1b2e]/15 to-transparent" />
                      {/* Tag pill */}
                      <span className="absolute top-3 left-3 bg-[#C9A45C] text-[#0d1b2e] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    {/* Gold shimmer divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/50 to-transparent" />

                    {/* Body */}
                    <div className="p-5">
                      <p className="text-[#C9A45C] text-[10px] font-bold tracking-[1.2px] uppercase mb-2">
                        {item.num}
                      </p>
                      <h4 className="text-white font-bold text-[15px] leading-snug mb-2">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-[12.5px] leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-1.5 mt-4 text-[#C9A45C] text-[10px] font-bold uppercase tracking-widest">
                        Learn more
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dot + connector */}
                <div className="hidden md:flex items-center justify-center w-full h-full">
                  <div
                    className={`flex items-center w-full ${item.side === "right" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div className="flex-1 h-px bg-[#C9A45C]/35" />
                    <div className="w-4 h-4 rounded-full bg-[#C9A45C] border-[3px] border-[#f8f7f4] outline outline-2 outline-[#C9A45C] flex-shrink-0 z-10" />
                  </div>
                </div>

                {/* Empty opposite side */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyChooseUs;
