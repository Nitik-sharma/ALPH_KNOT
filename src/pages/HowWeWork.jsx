import React from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import img1 from "../assets/images/work/discovery.avif";
import img2 from "../assets/images/work/planing.avif";
import img3 from "../assets/images/work/Talent.avif";
import img4 from "../assets/images/work/onboarding.avif";
import img5 from "../assets/images/work/Scale.avif";
import bg1 from "../assets/images/work/bg1.avif";
import bg2 from "../assets/images/work/bg2.avif";

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    subtitle: "We listen before we act",
    desc: "We kick off with a focused 30-minute call to understand your business model, pain points, team gaps, and growth goals. No generic pitches just a real conversation about what you need.",
    bullets: [
      "Understand your business & goals",
      "Identify operational bottlenecks",
      "Define the right talent profile",
    ],
    img: img1,
  },
  {
    step: "02",
    title: "Strategy & Scoping",
    subtitle: "Build the right plan together",
    desc: "Our team designs a tailored engagement model whether you need a single VA, a full customer operations team, or a custom workforce pod. We define scope, KPIs, and timelines upfront.",
    bullets: [
      "Custom engagement model",
      "Clear KPIs & deliverables",
      "Transparent pricing structure",
    ],
    img: img2,
  },
  {
    step: "03",
    title: "Talent Matching",
    subtitle: "Precision over speed",
    desc: "We don't just fill seats. Our matching process evaluates skills, communication style, timezone compatibility, and culture fit so you get professionals who truly integrate with your team.",
    bullets: [
      "Vetted, trained professionals",
      "Culture & timezone fit",
      "Roles across 11 service categories",
    ],
    img: img3,
  },
  {
    step: "04",
    title: "Onboarding & Launch",
    subtitle: "Ready in 72 hours",
    desc: "Your team is briefed, onboarded, and executing within 72 hours of kickoff. We handle all coordination you just show up and lead. Weekly check-ins keep everything aligned.",
    bullets: [
      "72-hour onboarding guarantee",
      "Dedicated account manager",
      "Weekly performance check-ins",
    ],
    img: img4,
  },
  {
    step: "05",
    title: "Scale on Demand",
    subtitle: "Grow without friction",
    desc: "As your business grows, your team grows with it. Add new roles, expand to new service areas, or restructure your pod all without long-term lock-ins or hiring overhead.",
    bullets: [
      "No long-term contracts",
      "Add or swap roles anytime",
      "Access to 11 service verticals",
    ],
    img: img5,
  },
];

const HowWeWork = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-[#F7F4EF] w-full overflow-x-hidden"
    >
      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-32 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1F2E4F]/83" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#C9A45C] text-xs font-semibold tracking-[3px] uppercase mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Process
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            How We Work <br />
            <span className="text-[#C9A45C]">From Call to Scale</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            A transparent, repeatable process built for busy founders, ops
            leaders, and scaling teams who need results — not more overhead.
          </motion.p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <div className="flex flex-col overflow-hidden">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="grid md:grid-cols-2 items-stretch overflow-hidden"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative h-[320px] md:h-[480px] overflow-hidden ${
                  !isEven ? "md:order-2" : ""
                }`}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F2E4F]/50 to-transparent" />
                <div
                  className="absolute bottom-6 left-6 text-[80px] font-bold leading-none text-white/10 select-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {step.step}
                </div>
                <div
                  className="absolute top-6 left-6 bg-[#C9A45C] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Step {step.step}
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex items-center justify-center bg-white px-8 md:px-16 py-14 overflow-hidden ${
                  !isEven ? "md:order-1" : ""
                }`}
              >
                <div className="max-w-md w-full">
                  <p
                    className="text-[#C9A45C] text-[11px] font-semibold tracking-[2.5px] uppercase mb-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {step.subtitle}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#1F2E4F] mb-4 leading-snug"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-[#C9A45C] mb-5" />
                  <p className="text-[#1F2E4F]/60 leading-relaxed text-[14.5px] mb-6">
                    {step.desc}
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {step.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2
                          size={15}
                          className="text-[#C9A45C] flex-shrink-0"
                        />
                        <span className="text-[13px] text-[#1F2E4F]/70">
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* ── TRUST STRIP ── */}
      <section className="bg-white border-y border-[#e8e2d8] py-14 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Businesses Onboarded" },
              { value: "72hrs", label: "Average Launch Time" },
              { value: "98%", label: "Client Retention Rate" },
              { value: "11", label: "Service Categories" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p
                  className="text-3xl font-bold text-[#C9A45C] mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-[12.5px] text-[#1F2E4F]/55">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-28 text-center overflow-hidden"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-[#1F2E4F]/88" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <p
            className="text-[#C9A45C] text-xs font-semibold tracking-[3px] uppercase mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Begin?
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Start Your Journey <br /> in One Call
          </h2>
          <p className="text-white/55 mb-9 text-[15px]">
            Book a free discovery call and we'll have your team ready within 72
            hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate("/book-call")}
              className="bg-[#C9A45C] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <NavLink to={"/book-call"}>Book a Free Call</NavLink>
            </button>
            <button
              onClick={() => navigate("/services")}
              className="border border-white/25 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Explore Services <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
