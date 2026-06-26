import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import startup from "../assets/images/Home/startup.png"
import technology from "../assets/images/Home/technology.png"
import ecommarce from "../assets/images/Home/ecommarceinds.png"
import halthcare from "../assets/images/Home/Healthcare.png"
import finance from "../assets/images/Home/finances.png"
import professional from "../assets/images/Home/Professional.png"


const industries = [
  {
    id: 1,
    tag: "Startups",
    label: "Startup Growth",
    title: "Startups & Scaleups",
    desc: "Build and scale faster with dedicated teams that manage operations, customer support, technology, and business execution, allowing founders to focus on innovation and sustainable growth.",
    image:startup,
    services: [
      "Executive Support",
      "Customer Operations",
      "Team Pods",
    ],
  },
  {
    id: 2,
    tag: "Technology",
    label: "Technology & SaaS",
    title: "Technology & SaaS",
    desc: "Accelerate product growth with scalable workforce solutions for software companies, including customer success, technical support, development, and business operations.",
    image:technology,
    services: [
      "Tech & Development",
      "Customer Operations",
      "Digital Growth",
    ],
  },
  {
    id: 3,
    tag: "E-Commerce",
    label: "Retail & Commerce",
    title: "E-Commerce & Retail",
    desc: "Deliver exceptional customer experiences with dedicated teams for customer support, back-office operations, finance, and digital marketing that help your business grow profitably.",
    image: ecommarce,
    services: [
      "Customer Operations",
      "Digital Growth",
      "Finance & Accounting",
    ],
  },
  {
    id: 4,
    tag: "Healthcare",
    label: "Healthcare Services",
    title: "Healthcare & Medical",
    desc: "Improve operational efficiency with reliable professionals supporting patient services, administration, finance, HR, and healthcare business operations.",
    image: halthcare,
    services: [
      "Executive Support",
      "Back Office",
      "Finance & Accounting",
    ],
  },
  {
    id: 5,
    tag: "Finance",
    label: "Banking & FinTech",
    title: "Finance & FinTech",
    desc: "Strengthen financial operations through expert accounting, customer support, knowledge process services, and dedicated teams focused on accuracy and compliance.",
    image: finance,
    services: [
      "Finance & Accounting",
      "Knowledge Process",
      "Customer Operations",
    ],
  },
  {
    id: 6,
    tag: "Professional",
    label: "Professional Services",
    title: "Professional Services",
    desc: "Empower consulting firms, agencies, legal practices, and business service providers with dedicated workforce solutions that improve productivity, client delivery, and operational excellence.",
    image: professional,
    services: [
      "Executive Support",
      "Custom Workforce",
      "Team Pods",
    ],
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
          <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight">
            Built to Support Businesses Across{" "}
            <span className="text-[#bb7f14]">Every Industry</span>
          </h2>

          <p className="text-center text-sm md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Every industry has unique operational challenges. Our dedicated
            teams provide the expertise, execution, and flexibility businesses
            need to streamline operations, improve productivity, and scale
            sustainably.
          </p>
        </div>

        {/* Tab Buttons */}
        {/* Tab buttons */}
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

        {/* Full-width panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="rounded-2xl overflow-hidden  bg-[#1F2E4F]"
          >
            {/* Full-width image */}
            <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover rounded-md"
              />
              
            </div>

            {/* Text content below image */}
            <div className="p-8 md:p-10  ">
              <p className="text-[#bb7f14] text-[10px] font-black uppercase tracking-[1.5px] mb-3">
                {current.label}
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-4">
                {current.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl">
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
                className="flex items-center gap-2 bg-[#bb7f14] text-[#1F2E4F] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#1F2E4F] hover:text-white border border-transparent hover:border-[#bb7f14]/40 transition-all duration-300"
              >
                Get Started <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

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
