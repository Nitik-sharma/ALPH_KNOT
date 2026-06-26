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
import image1 from "../assets/images/Home/time-zone-synced-execution-outsourcing.avif"
import image2 from "../assets/images/Home/strategic-talent-augmentation-services.avif"
import image3 from "../assets/images/Home/scalable-remote-execution-teams.avif"
import image4 from "../assets/images/Home/zero-hiring-friction-talent-solutions.png"
import image5 from "../assets/images/Home/cost-efficient-business-operations.avif"
import image6 from "../assets/images/Home/global-talent.png"
import image7 from "../assets/images/Home/angile.png"
import image8 from "../assets/images/Home/flexible.png"
import image9 from "../assets/images/Home/Execution.png"

const data = [
  {
    icon: Globe,
    image: image7,
    title: "Agile Global Talent",
    desc: "We connect you with high-performing professionals who integrate seamlessly into your workflow without delays of traditional hiring.",
  },
  {
    icon: Settings,
    image: image8,
    title: "Flexible Digital Support",
    desc: "From operations to specialized roles, we provide support exactly when and how you need  no long-term commitments.",
  },
  {
    icon: TrendingUp,
    image: image9,
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
          className="text-center text-3xl md:text-5xl text-[#04388b] tracking-tight mb-16"
        >
          Built for Scale Designed for{" "}
          <span className="text-[#bb7f14]">Speed.</span>
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-[#bb7f14]/20 bg-[#1F2E4F] shadow-lg shadow-[#1F2E4F]/10 hover:border-[#bb7f14]/55 hover:shadow-xl hover:shadow-[#1F2E4F]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line — grows full-width on hover */}
              <span className="absolute top-0 left-0 h-[3px] w-10 bg-[#bb7f14]/70 group-hover:w-full transition-all duration-500 z-10" />

              {/* IMAGE — no overlay, natural colors */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* BODY */}
              <div className="relative px-7 pb-8">
                {/* Floating icon badge — bridges image and text */}
                <div className="-mt-7 mb-5 w-14 h-14 rounded-full bg-[#bb7f14] border-4 border-[#1F2E4F] flex items-center justify-center shadow-md group-hover:bg-[#6db9d1] transition-colors duration-300">
                  <item.icon size={22} className="text-[#1F2E4F]" />
                </div>

                {/* Watermark index */}
                <span className="absolute top-3 right-6 text-[#6db9d1]/10 text-6xl font-black leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* TITLE */}
                <h3 className="text-xl text-white font-semibold mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DARK SECTION */}
        <section className="w-full bg-[#f4f8fb] py-20 px-6">
          {/* Heading */}
          <h2 className="text-center text-4xl md:text-5xl font-bold text-[#04388b] mb-3 leading-tight tracking-tight">
            Why Global Leaders Choose{" "}
            <span className="text-[#bb7f14]">Alph Knot</span>
          </h2>

          <p className="text-center text-[#1F2E4F]/55 text-base mb-16">
            Six reasons world-class teams trust us to deliver
          </p>

          {/* Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: image1,
                tag: "Execution",
                num: "01",
                title: "Time-Zone Synced Execution",
                desc: "Operate seamlessly with talent aligned to U.S. business hours, no delays, no gaps.",
              },
              {
                image: image2,
                tag: "Strategy",
                num: "02",
                title: "Strategic Talent, Not Just Support",
                desc: "We deliver execution partners who think, act, and grow with your business.",
              },
              {
                image: image3,
                tag: "Growth",
                num: "03",
                title: "Built for Scale",
                desc: "From 1 hire to full execution teams, scale instantly based on your needs.",
              },
              {
                image: image4,
                tag: "Process",
                num: "04",
                title: "Zero Hiring Friction",
                desc: "No job postings, no interviews, no onboarding headaches.",
              },
              {
                image: image5,
                tag: "Value",
                num: "05",
                title: "Cost-Efficient, High Impact",
                desc: "Reduce operational costs without compromising quality or output.",
              },
              {
                image: image6,
                tag: "Global",
                num: "06",
                title: "Global Talent, Local Understanding",
                desc: "Professionals trained to align with your business culture and expectations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1F2E4F] rounded-2xl overflow-hidden border border-[#bb7f14]/15 hover:-translate-y-1 hover:border-[#bb7f14]/50 transition-all duration-300 group cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#bb7f14] text-[#1F2E4F] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <span className="absolute top-3 right-3 bg-[#1F2E4F] text-white text-[11px] font-black leading-none select-none w-7 h-7 rounded-full flex items-center justify-center">
                    {item.num}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#bb7f14]/25" />

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[#bb7f14] text-[10px] font-bold tracking-[1.2px] uppercase mb-2">
                    {item.num} — {item.tag}
                  </p>
                  <h4 className="text-white font-bold text-[15px] leading-snug mb-2 group-hover:text-[#bb7f14] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-[12.5px] leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-white/[0.06] text-[#bb7f14] text-[10px] font-bold uppercase tracking-widest">
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
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyChooseUs;
