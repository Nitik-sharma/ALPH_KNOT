import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneCall, Users, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall size={24} />,
    label: "Step 01 - Discovery",
    title: "Book a Strategy Call",
    desc: "Share your goals, challenges, and hiring needs. We quickly understand where you are and where you want to go.",
    tag: "30-min call",
    tagIcon: "⏱",
  },
  {
    icon: <Users size={24} />,
    label: "Step 02 - Matching",
    title: "Get Matched with the Right Talent",
    desc: "We connect you with pre-vetted professionals aligned to your business, role requirements, and time zone.",
    tag: "Pre-vetted talent",
    tagIcon: "✓",
  },
  {
    icon: <Rocket size={24} />,
    label: "Step 03 - Execution",
    title: "Start Execution",
    desc: "Your team gets to work immediately, delivering results without delays, overhead, or hiring complexity.",
    tag: "Same-day start",
    tagIcon: "⚡",
  },
  {
    icon: <TrendingUp size={24} />,
    label: "Step 04 - Growth",
    title: "Scale as You Grow",
    desc: "Easily expand or adjust your team based on your needs flexible, fast, and built for long-term growth.",
    tag: "Fully flexible",
    tagIcon: "⚙",
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f4f8fb] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#bb7f14]" />
            <span className="text-[#bb7f14] text-[11px] font-bold uppercase tracking-[2px]">
              The Process
            </span>
            <div className="w-8 h-0.5 bg-[#bb7f14]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#04388b] leading-tight tracking-tight mb-4">
            How It <span className="text-[#bb7f14]">Works</span>
          </h2>
          <p className="text-[#04388b] text-base max-w-xl mx-auto leading-relaxed">
            From your first call to a fully running team - we make it simple,
            fast, and completely friction-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line — desktop only */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-[#6db9d1]/30 hidden lg:block pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-[#1F2E4F] border border-[#bb7f14]/15 rounded-2xl p-7 group hover:-translate-y-2 hover:border-[#bb7f14]/55 transition-all duration-300 flex flex-col relative"
            >
              {/* Icon + big number */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-full bg-[#6db9d1]/15 border border-[#6db9d1]/35 flex items-center justify-center text-[#6db9d1] group-hover:bg-[#6db9d1]/25 group-hover:border-[#6db9d1]/60 transition-all duration-300">
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-white/[0.06] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Label */}
              <p className="text-[#bb7f14] text-[9px] font-black uppercase tracking-[1.5px] mb-2">
                {step.label}
              </p>

              {/* Title */}
              <h3 className="text-white font-bold text-[16px] leading-snug mb-3 group-hover:text-[#bb7f14] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-white/55 text-[12.5px] leading-relaxed flex-1">
                {step.desc}
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#bb7f14]/35 to-transparent my-4" />

              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 bg-[#bb7f14]/10 border border-[#bb7f14]/25 text-[#bb7f14] text-[10px] font-semibold px-3 py-1.5 rounded-full w-fit">
                {step.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-[#1F2E4F] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#bb7f14]/15"
        >
          <div>
            <p className="text-[#bb7f14] text-[10px] font-black uppercase tracking-[2px] mb-1">
              Ready to get started?
            </p>
            <h3 className="text-white text-xl font-black">
              Launch your remote team in 24 hours.
            </h3>
            <p className="text-white/55 text-sm mt-1">
              No contracts. No hiring headaches. Just results from day one.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/contact-us")}
            className="flex items-center gap-2 bg-[#bb7f14] text-[#1F2E4F] px-7 py-4 rounded-full font-black text-sm whitespace-nowrap hover:bg-[#bb7f14]/90 transition-colors duration-200"
          >
            Book Your Strategy Call <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
