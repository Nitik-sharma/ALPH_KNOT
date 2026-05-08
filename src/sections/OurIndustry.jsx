import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    id: 1,
    tag: "Technology",
    label: "01 — Tech & SaaS",
    title: "Technology & Software",
    desc: "Scale your tech ops with elite virtual assistants, SDRs, and developer support built for fast-moving SaaS companies.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80",
    services: ["Virtual Assistants", "Tech Support", "Sales Dev"],
    slug: "/industries/technology",
  },
  {
    id: 2,
    tag: "Healthcare",
    label: "02 — Health & Wellness",
    title: "Healthcare & Medical",
    desc: "HIPAA-aligned remote staff handling patient coordination, admin operations, and billing support.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
    services: ["Admin Support", "Bookkeeping", "Customer Care"],
    slug: "/industries/healthcare",
  },
  {
    id: 3,
    tag: "Finance",
    label: "03 — Finance & Banking",
    title: "Finance & Fintech",
    desc: "Precision bookkeepers, accountants, and ops specialists who keep your financial workflows clean and compliant.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    services: ["Bookkeeping", "Accounting", "Operations"],
    slug: "/industries/finance",
  },
  {
    id: 4,
    tag: "E-Commerce",
    label: "04 — Retail & D2C",
    title: "E-Commerce & Retail",
    desc: "Customer support teams, social media managers, and SDRs purpose-built for DTC and e-commerce brands.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80",
    services: ["Customer Support", "Social Media", "Sales Dev"],
    slug: "/industries/ecommerce",
  },
  {
    id: 5,
    tag: "Agencies",
    label: "05 — Marketing & Creative",
    title: "Agencies & Consultancies",
    desc: "White-label execution talent for agencies — from project managers to content creators — so you scale client work seamlessly.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
    services: ["Project Mgmt", "Social Media", "VA Support"],
    slug: "/industries/agencies",
  },
  {
    id: 6,
    tag: "Real Estate",
    label: "06 — Property & Realty",
    title: "Real Estate & Property",
    desc: "Transaction coordinators, lead follow-up specialists, and admin support designed for high-volume real estate operations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    services: ["Admin Support", "Customer Care", "Bookkeeping"],
    slug: "/industries/real-estate",
  },
];

const stats = [
  { num: "12+", label: "Industries served globally" },
  { num: "500+", label: "Businesses scaled with our talent" },
  { num: "98%", label: "Client retention rate" },
  { num: "24h", label: "Average talent deployment time" },
];

function IndustryCard({ industry, index, navigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={() => navigate(industry.slug)}
      className="bg-[#132035] border border-[#C9A45C]/15 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A45C]/50 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-[175px] overflow-hidden">
        <img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-92 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/90 via-[#0d1b2e]/10 to-transparent" />
        <span className="absolute top-3 left-3 bg-[#C9A45C] text-[#0d1b2e] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
          {industry.tag}
        </span>
        <span className="absolute top-2 right-3 text-white/[0.07] text-4xl font-black leading-none select-none">
          {String(industry.id).padStart(2, "0")}
        </span>
      </div>

      {/* Gold shimmer divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-transparent" />

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[#C9A45C] text-[9px] font-black tracking-[1.5px] uppercase mb-2">
          {industry.label}
        </p>
        <h3 className="text-white font-bold text-[15px] leading-snug mb-2 group-hover:text-[#C9A45C] transition-colors duration-300">
          {industry.title}
        </h3>
        <p className="text-white/45 text-[12px] leading-relaxed flex-1">
          {industry.desc}
        </p>

        {/* Service tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {industry.services.map((s) => (
            <span
              key={s}
              className="bg-[#C9A45C]/10 border border-[#C9A45C]/20 text-[#C9A45C] text-[10px] font-semibold px-2.5 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06]">
          <span className="text-[#C9A45C] text-[10px] font-black uppercase tracking-widest">
            Explore
          </span>
          <div className="w-7 h-7 rounded-full border border-[#C9A45C]/30 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:border-[#C9A45C] transition-all duration-300">
            <ArrowRight
              size={12}
              className="group-hover:text-[#0d1b2e] transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function OurIndustry() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#0d1b2e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
            From fast-moving startups to Fortune 500 enterprises — our talent
            solutions are built to scale with every sector that demands
            excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={i}
              navigate={navigate}
            />
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
        >
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
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 bg-[#C9A45C] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-[#0d1b2e] text-[11px] font-black uppercase tracking-[2px] mb-1">
              Don't see your industry?
            </p>
            <h3 className="text-[#0d1b2e] text-xl font-black">
              We work across all sectors — let's talk.
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
        </motion.div>
      </div>
    </section>
  );
}

export default OurIndustry;
