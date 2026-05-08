import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    id: 1,
    tag: "Technology",
    label: "01  Tech & SaaS",
    title: "Technology & Software",
    desc: "Scale your tech ops with elite virtual assistants, SDRs, and developer support built for fast-moving SaaS companies.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&auto=format&fit=crop&q=80",
    services: ["Virtual Assistants", "Tech Support", "Sales Dev"],
  },
  {
    id: 2,
    tag: "Healthcare",
    label: "02  Health & Wellness",
    title: "Healthcare & Medical",
    desc: "HIPAA-aligned remote staff handling patient coordination, admin operations, and billing support.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
    services: ["Admin Support", "Bookkeeping", "Customer Care"],
  },
  {
    id: 3,
    tag: "Finance",
    label: "03  Finance & Banking",
    title: "Finance & Fintech",
    desc: "Precision bookkeepers, accountants, and ops specialists who keep your financial workflows clean and compliant.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    services: ["Bookkeeping", "Accounting", "Operations"],
  },
  {
    id: 4,
    tag: "E-Commerce",
    label: "04  Retail & D2C",
    title: "E-Commerce & Retail",
    desc: "Customer support teams, social media managers, and SDRs purpose-built for DTC and e-commerce brands.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop&q=80",
    services: ["Customer Support", "Social Media", "Sales Dev"],
  },
  {
    id: 5,
    tag: "Agencies",
    label: "05  Marketing & Creative",
    title: "Agencies & Consultancies",
    desc: "White-label execution talent for agencies, from project managers to content creators so you scale client work seamlessly.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    services: ["Project Mgmt", "Social Media", "VA Support"],
  },
  {
    id: 6,
    tag: "Real Estate",
    label: "06  Property & Realty",
    title: "Real Estate & Property",
    desc: "Transaction coordinators, lead follow-up specialists, and admin support designed for high-volume real estate operations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
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
    <section className="w-full bg-[#0d1b2e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#C9A45C]" />
            <span className="text-[#C9A45C] text-[11px] font-bold uppercase tracking-[2px]">
              Industries We Serve
            </span>
            <div className="w-8 h-0.5 bg-[#C9A45C]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Powering Growth Across{" "}
            <span className="text-[#C9A45C]">Every Industry</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto leading-relaxed">
            From fast-moving startups to Fortune 500 enterprises, our talent
            solutions are built to scale with every sector that demands
            excellence.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 whitespace-nowrap
                ${
                  active === i
                    ? "bg-[#C9A45C] text-[#0d1b2e] border-[#C9A45C]"
                    : "bg-transparent text-white/60 border-white/15 hover:border-[#C9A45C]/50 hover:text-white"
                }`}
            >
              {ind.tag}
            </button>
          ))}
        </div>

        {/* Active Industry Display */}
        <div className="rounded-2xl overflow-hidden border border-[#C9A45C]/20">
          {/* Image */}
          <div className="relative w-full h-[380px] md:h-[460px] overflow-hidden">
            <img
              key={current.id}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover opacity-75 transition-all duration-500"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e] via-[#0d1b2e]/30 to-transparent" />

            {/* Tag pill */}
            <span className="absolute top-5 left-5 bg-[#C9A45C] text-[#0d1b2e] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
              {current.tag}
            </span>

            {/* Ghost number */}
            <span className="absolute top-4 right-6 text-white/[0.07] text-8xl font-black leading-none select-none">
              {String(current.id).padStart(2, "0")}
            </span>

            {/* Content overlaid on image bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
              <p className="text-[#C9A45C] text-[10px] font-black uppercase tracking-[1.5px] mb-2">
                {current.label}
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-3">
                {current.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-2xl mb-5">
                {current.desc}
              </p>

              {/* Service pills + CTA row */}
              <div className="flex flex-wrap items-center gap-3">
                {current.services.map((s) => (
                  <span
                    key={s}
                    className="bg-white/10 border border-white/20 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
                <button
                  onClick={() => navigate("/contact")}
                  className="ml-auto flex items-center gap-2 bg-[#C9A45C] text-[#0d1b2e] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#d4b06a] transition-colors duration-200 whitespace-nowrap"
                >
                  Get Started <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {industries.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i
                  ? "w-6 h-2 bg-[#C9A45C]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#132035] border border-[#C9A45C]/12 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-black text-[#C9A45C] leading-none mb-2">
                {stat.num}
              </div>
              <div className="text-white/45 text-[12px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-[#C9A45C] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#0d1b2e] text-[11px] font-black uppercase tracking-[2px] mb-1">
              Don't see your industry?
            </p>
            <h3 className="text-[#0d1b2e] text-xl font-black">
              We work across all sectors, let's talk.
            </h3>
            <p className="text-[#0d1b2e]/60 text-sm mt-1">
              Our talent solutions adapt to any business model, anywhere.
            </p>
          </div>
          <button
            onClick={() => navigate("/book-call")}
            className="flex items-center gap-2 bg-[#0d1b2e] text-white px-7 py-3.5 rounded-full font-bold text-sm whitespace-nowrap hover:bg-[#132035] transition-colors duration-200"
          >
            Talk to Our Team <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurIndustry;
