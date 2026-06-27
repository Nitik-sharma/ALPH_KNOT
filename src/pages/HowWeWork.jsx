import React from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import img1 from "../assets/images/work/discover.png";
import img2 from "../assets/images/work/planing.png";
import img3 from "../assets/images/work/Workforce.png";
import img4 from "../assets/images/work/launch.png";
import img5 from "../assets/images/Home/customWork.png";
import bg1 from "../assets/images/work/bg1.avif";
import bg2 from "../assets/images/work/bg2.avif";

const steps = [
  {
    step: "01",
    title: "Discovery & Business Consultation",
    subtitle: "Understanding your business comes first",
    desc: "Every successful partnership begins with understanding your business. We discuss your goals, operational challenges, team structure, and growth plans to identify the right workforce solution for your organization.",
    bullets: [
      "Business & operational assessment",
      "Growth goals and workforce planning",
      "Identify key operational requirements",
    ],
    img: img1,
  },

  {
    step: "02",
    title: "Workforce Strategy & Solution Design",
    subtitle: "A workforce plan built around your goals",
    desc: "Based on your requirements, we design a tailored workforce strategy that defines the ideal team structure, responsibilities, workflows, timelines, and delivery framework to support your business objectives.",
    bullets: [
      "Custom workforce strategy",
      "Defined roles & responsibilities",
      "Transparent execution roadmap",
    ],
    img: img2,
  },

  {
    step: "03",
    title: "Build Your Dedicated Team",
    subtitle: "Professionals aligned with your business",
    desc: "We assemble experienced professionals who seamlessly integrate into your business. Every team is selected for its expertise, communication, cultural alignment, and ability to deliver measurable business outcomes.",
    bullets: [
      "Experienced business professionals",
      "Culture & workflow alignment",
      "Dedicated team focused on your success",
    ],
    img: img3,
  },

  {
    step: "04",
    title: "Launch, Execute & Optimize",
    subtitle: "Fast onboarding with continuous support",
    desc: "Your dedicated team is onboarded, trained, and ready to execute quickly. We oversee implementation, monitor performance, optimize workflows, and ensure consistent operational excellence from day one.",
    bullets: [
      "Fast onboarding process",
      "Dedicated success manager",
      "Performance monitoring & optimization",
    ],
    img: img4,
  },

  {
    step: "05",
    title: "Custom Workforce Solutions",
    subtitle: "Built around your unique business requirements",
    desc: "Every organization is different. Share your processes, workflows, and business requirements, and we'll build, train, and manage a dedicated team tailored specifically to your operations, industry, and long-term growth goals.",
    bullets: [
      "Share your custom requirements",
      "Teams trained on your SOPs & workflows",
      "Scalable workforce built for long-term growth",
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
         
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            A Smarter Way to <br />
            <span className="text-[#C9A45C]">Build Your Dedicated Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            From understanding your business to launching a fully managed team,
            every step is designed for speed, transparency, and long-term
            success.
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
