import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    tag: "Virtual Staffing",
    num: "01",
    title: "Executive Virtual Assistants",
    desc: "High-caliber assistants who manage your calendar, communications, and operations.",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&auto=format&fit=crop&q=80",
    slug: "/services",
  },
  {
    id: 2,
    tag: "Customer Success",
    num: "02",
    title: "Customer Support Teams",
    desc: "Dedicated specialists who represent your brand with professionalism around the clock.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=80",
    slug: "/services",
  },
  {
    id: 3,
    tag: "Digital Growth",
    num: "03",
    title: "Social Media Management",
    desc: "Creative strategists who grow your presence, engage audiences, and drive real results.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
    slug: "/services",
  },
  {
    id: 4,
    tag: "Revenue",
    num: "04",
    title: "Sales Development Reps",
    desc: "Trained SDRs who prospect, qualify leads, and fill your pipeline with high intent.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
    slug: "/services",
  },
  {
    id: 5,
    tag: "Finance",
    num: "05",
    title: "Bookkeeping & Accounting",
    desc: "Detail-oriented finance professionals who keep your books clean and reporting accurate.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80",
    slug: "/services",
  },
  {
    id: 6,
    tag: "Technology",
    num: "06",
    title: "Tech & Developer Support",
    desc: "Skilled developers who build, maintain, and scale your digital infrastructure.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
    slug: "/services",
  },
  {
    id: 7,
    tag: "HR Ops",
    num: "07",
    title: "HR & Recruitment Support",
    desc: "Dedicated HR professionals who streamline hiring, onboarding, and people ops.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&auto=format&fit=crop&q=80",
    slug: "/services",
  },
  {
    id: 8,
    tag: "Operations",
    num: "08",
    title: "Project & Operations Management",
    desc: "Experienced ops managers who keep your projects on track and teams aligned.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80",
    slug: "/services",
  },
];

// Duplicate 4x to ensure seamless infinite loop with no gaps
const loopedServices = [...services, ...services, ...services, ...services];

function ServiceCard({ service, navigate }) {
  return (
    <div
      onClick={() => navigate(service.slug)}
      className="w-[260px] flex-shrink-0 bg-[#0d1b2e] rounded-2xl overflow-hidden border border-[#C9A45C]/15 cursor-pointer group transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A45C]/55 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-[155px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-65 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/92 via-[#0d1b2e]/10 to-transparent" />
        <span className="absolute top-3 left-3 bg-[#C9A45C] text-[#0d1b2e] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
          {service.tag}
        </span>
        <span className="absolute top-2 right-3 text-white/10 text-4xl font-black leading-none select-none">
          {service.num}
        </span>
      </div>

      {/* Shimmer divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-transparent" />

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[#C9A45C] text-[9px] font-black tracking-[1.5px] uppercase mb-2">
          {service.num}  {service.tag}
        </p>
        <h3 className="text-white font-bold text-[14px] leading-snug mb-2 group-hover:text-[#C9A45C] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-white/45 text-[11.5px] leading-relaxed flex-1">
          {service.desc}
        </p>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.07]">
          <span className="text-[#C9A45C] text-[9px] font-black uppercase tracking-widest">
            Explore
          </span>
          <div className="w-7 h-7 rounded-full border border-[#C9A45C]/35 flex items-center justify-center text-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:border-[#C9A45C] transition-all duration-300">
            <ArrowRight
              size={12}
              className="group-hover:text-[#0d1b2e] transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f8f7f4] py-24 overflow-hidden">
      {/* Header */}
      <div className="px-6 max-w-6xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#C9A45C]" />
            <span className="text-[#C9A45C] text-[11px] font-bold uppercase tracking-[2px]">
              What We Offer
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2e] leading-tight tracking-tight">
                Our Core <span className="text-[#C9A45C]">Services</span>
              </h2>
              <p className="text-[#6b7280] text-base mt-3 max-w-lg leading-relaxed">
                End-to-end talent solutions built for modern businesses that
                demand excellence without the overhead.
              </p>
            </div>
            <button
              onClick={() => navigate("/services")}
              className="flex items-center gap-2 bg-[#0d1b2e] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#C9A45C] hover:text-[#0d1b2e] transition-all duration-300 whitespace-nowrap self-start"
            >
              View All Services <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Infinite Marquee ── */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#f8f7f4] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#f8f7f4] to-transparent z-10 pointer-events-none" />

        {/* Track — Tailwind keyframe approach */}
        <div
          className="flex gap-5 w-max"
          style={{
            animation: "marquee-scroll 260s linear infinite",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {loopedServices.map((service, i) => (
            <ServiceCard key={i} service={service} navigate={navigate} />
          ))}
        </div>
      </div>

      {/* Inject keyframe globally once */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Bottom CTA */}
      <div className="px-6 max-w-6xl mx-auto mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0d1b2e] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C9A45C]/15"
        >
          <div>
            <p className="text-[#C9A45C] text-[11px] font-bold uppercase tracking-[2px] mb-1">
              Ready to scale?
            </p>
            <h3 className="text-white text-xl font-bold">
              Not sure which service fits your needs?
            </h3>
            <p className="text-white/50 text-sm mt-1">
              Talk to our team and get a custom talent plan in 24 hours.
            </p>
          </div>
          <button
            onClick={() => navigate("/book-call")}
            className="flex items-center gap-2 bg-[#C9A45C] text-[#0d1b2e] px-7 py-3.5 rounded-full font-bold text-sm whitespace-nowrap hover:bg-[#d4b06a] transition-colors duration-200"
          >
            Get a Free Consultation <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
