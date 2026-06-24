import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/images/Home/technology.png"
import image2 from "../assets/images/Home/halthcare.png"
import image3 from "../assets/images/Home/Finance.png"
import image4 from "../assets/images/Home/Ecommarce.png"
import image5 from "../assets/images/Home/Agency.png"
import image6 from "../assets/images/Home/Realeastate.png"

const industries = [
  {
    id: 1,
    tag: "Technology",
    label: "01  Tech & SaaS",
    title: "Technology & Software",
    desc: "Scale your tech ops with elite virtual assistants, SDRs, and developer support built for fast-moving SaaS companies.",
    image:
      image1,
    services: ["Virtual Assistants", "Tech Support", "Sales Dev"],
  },
  {
    id: 2,
    tag: "Healthcare",
    label: "02  Health & Wellness",
    title: "Healthcare & Medical",
    desc: "HIPAA-aligned remote staff handling patient coordination, admin operations, and billing support.",
    image:
     image2,
    services: ["Admin Support", "Bookkeeping", "Customer Care"],
  },
  {
    id: 3,
    tag: "Finance",
    label: "03  Finance & Banking",
    title: "Finance & Fintech",
    desc: "Precision bookkeepers, accountants, and ops specialists who keep your financial workflows clean and compliant.",
    image:
    image3,
    services: ["Bookkeeping", "Accounting", "Operations"],
  },
  {
    id: 4,
    tag: "E-Commerce",
    label: "04  Retail & D2C",
    title: "E-Commerce & Retail",
    desc: "Customer support teams, social media managers, and SDRs purpose-built for DTC and e-commerce brands.",
    image:
      image4,
    services: ["Customer Support", "Social Media", "Sales Dev"],
  },
  {
    id: 5,
    tag: "Agencies",
    label: "05  Marketing & Creative",
    title: "Agencies & Consultancies",
    desc: "White-label execution talent for agencies, from project managers to content creators so you scale client work seamlessly.",
    image:
     image5,
    services: ["Project Mgmt", "Social Media", "VA Support"],
  },
  {
    id: 6,
    tag: "Real Estate",
    label: "06  Property & Realty",
    title: "Real Estate & Property",
    desc: "Transaction coordinators, lead follow-up specialists, and admin support designed for high-volume real estate operations.",
    image:
      image6,
    services: ["Admin Support", "Customer Care", "Bookkeeping"],
  },
];

const stats = [
  { num: "12+", label: "Industries served globally" },
  { num: "500+", label: "Businesses scaled with our talent" },
  { num: "98%", label: "Client retention rate" },
  { num: "24h", label: "Average talent deployment time" },
];

function OurIndustry() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const current = industries[active];

  return (
    <section className="w-full bg-[#1F2E4F] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#bb7f14]" />
            <span className="text-[#bb7f14] text-[11px] font-bold uppercase tracking-[2px]">
              Industries We Serve
            </span>
            <div className="w-8 h-0.5 bg-[#bb7f14]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Powering Growth Across{" "}
            <span className="text-[#bb7f14]">Every Industry</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto leading-relaxed">
            From fast-moving startups to Fortune 500 enterprises, our talent
            solutions are built to scale with every sector that demands
            excellence.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 whitespace-nowrap
                ${
                  active === i
                    ? "bg-[#bb7f14] text-[#1F2E4F] border-[#bb7f14]"
                    : "bg-white/[0.04] text-white/60 border-white/10 hover:border-[#6db9d1]/50 hover:text-white"
                }`}
            >
              {ind.tag}
            </button>
          ))}
        </div>

        {/* Active Industry Display — split panel, crossfades on tab change */}
        <div className="rounded-2xl overflow-hidden border border-[#bb7f14]/20 bg-[#1F2E4F]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid lg:grid-cols-2"
            >
              {/* Image panel */}
              <div className="relative h-[280px] lg:h-[460px] overflow-hidden rounded-2xl">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full rounded-2xl"
                />
                <span className="absolute top-5 left-5 bg-[#bb7f14] text-[#1F2E4F] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {current.tag}
                </span>
                <span className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#6db9d1] text-[#1F2E4F] font-black text-sm flex items-center justify-center shadow-md">
                  {String(current.id).padStart(2, "0")}
                </span>
              </div>

              {/* Content panel */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#bb7f14]/15">
                <p className="text-[#bb7f14] text-[10px] font-black uppercase tracking-[1.5px] mb-3">
                  {current.label}
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-4">
                  {current.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {current.desc}
                </p>

                {/* Service pills */}
                <div className="flex flex-wrap gap-2.5 mb-7">
                  {current.services.map((s) => (
                    <span
                      key={s}
                      className="bg-[#6db9d1]/10 border border-[#6db9d1]/30 text-[#6db9d1] text-[11px] font-semibold px-3 py-1.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate("/contact-us")}
                  className="flex items-center justify-center gap-2 bg-[#bb7f14] text-[#1F2E4F] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#1F2E4F] hover:text-white border border-transparent hover:border-[#bb7f14]/40 transition-all duration-300 w-fit"
                >
                  Get Started <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {industries.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 h-2 bg-[#bb7f14]"
                  : "w-2 h-2 bg-[#6db9d1]/30 hover:bg-[#6db9d1]/50"
              }`}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative bg-white/[0.04] border border-[#6db9d1]/15 rounded-2xl p-6 text-center overflow-hidden"
            >
              <span className="absolute top-0 left-0 h-[3px] w-full bg-[#bb7f14]/50" />
              <div className="text-4xl font-black text-[#bb7f14] leading-none mb-2">
                {stat.num}
              </div>
              <div className="text-white/45 text-[12px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-[#bb7f14] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#1F2E4F] text-[11px] font-black uppercase tracking-[2px] mb-1">
              Don't see your industry?
            </p>
            <h3 className="text-[#1F2E4F] text-xl font-black">
              We work across all sectors, let's talk.
            </h3>
            <p className="text-[#1F2E4F]/60 text-sm mt-1">
              Our talent solutions adapt to any business model, anywhere.
            </p>
          </div>
          <button
            onClick={() => navigate("/book-call")}
            className="flex items-center gap-2 bg-[#1F2E4F] text-white px-7 py-3.5 rounded-full font-bold text-sm whitespace-nowrap hover:bg-[#1F2E4F]/80 transition-colors duration-200"
          >
            Talk to Our Team <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurIndustry;
