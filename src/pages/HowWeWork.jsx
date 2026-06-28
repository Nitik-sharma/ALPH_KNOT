import React,{useState} from "react";
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
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does AlphKnot do?",
    answer:
      "AlphKnot is a business execution partner that provides dedicated workforce solutions for businesses. We build, manage, and support teams across operations, customer service, finance, HR, technology, digital growth, and other business functions, helping organizations scale efficiently without traditional hiring challenges.",
  },
  {
    question: "How quickly can my dedicated team get started?",
    answer:
      "After understanding your requirements, we design the right workforce solution and begin onboarding your dedicated team as quickly as possible. Timelines vary based on your requirements, but our process is designed for speed without compromising quality.",
  },
  {
    question: "Can you build a team based on my specific requirements?",
    answer:
      "Yes. Every business is different. We create custom workforce solutions based on your roles, workflows, SOPs, communication preferences, industry requirements, and long-term business goals.",
  },
  {
    question: "What services can my dedicated team support?",
    answer:
      "Our teams support Executive & Business Support, Customer Operations, Back Office & Operations, Finance & Accounting, Human Resource Services, Digital Growth, Tech & Development, Knowledge Process, Industry-Specific Solutions, Custom Workforce, and Team Pods.",
  },
  {
    question: "Do your teams work in my business hours and time zone?",
    answer:
      "Absolutely. Our professionals are aligned with your preferred working hours, communication tools, and operational processes, ensuring seamless collaboration with your internal team.",
  },
  {
    question: "Can I scale my team as my business grows?",
    answer:
      "Yes. Our workforce solutions are designed for flexibility. Whether you need one additional specialist or an entire operational team, we help you scale efficiently as your business evolves.",
  },
  {
    question: "How do you ensure quality and performance?",
    answer:
      "Every engagement includes structured onboarding, clearly defined responsibilities, ongoing performance monitoring, and dedicated account support to ensure consistent quality and continuous improvement.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We support businesses across Technology & SaaS, Startups & Scaleups, E-Commerce & Retail, Healthcare, Finance & FinTech, Professional Services, Real Estate, Logistics, Education, Manufacturing, Hospitality, and other industry-specific sectors.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "We offer flexible engagement models designed to match your business needs. During our consultation, we'll recommend the most suitable approach based on your operational goals and workforce requirements.",
  },
  {
    question: "How do I get started with AlphKnot?",
    answer:
      "Simply schedule a strategy consultation with our team. We'll understand your business, recommend the right workforce solution, and create a tailored execution plan to help you achieve your goals.",
  },
];

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

  
];
const HowWeWork = () => {
  const navigate = useNavigate();

  const [openIndex, setOpenIndex] = useState(null);

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

      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Top text */}
          <div className="text-center mb-14">
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#04388b] mb-4">
              Custom Workforce Solutions
            </h2>
            <p className="text-[#bb7f14] font-medium text-base md:text-lg mb-4">
              Built around your unique business requirements
            </p>
            <p className="text-[#1F2E4F]/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Every organization is different. Share your processes, workflows,
              and business requirements, and we'll build, train, and manage a
              dedicated team tailored specifically to your operations, industry,
              and long-term growth goals.
            </p>
          </div>

          {/* Image + List side by side */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Image */}
            <div className="flex-1 rounded-2xl overflow-hidden min-h-[300px]">
              <img
                src={img5}
                alt="Custom Workforce"
                className="w-full h-full object-cover"
              />
            </div>

            {/* List */}
            <div className="flex-1 bg-[#1F2E4F] rounded-2xl p-8 flex flex-col justify-center gap-6">
              <p className="text-xs uppercase tracking-widest text-[#bb7f14] font-semibold">
                What You Get
              </p>

              {[
                {
                  title: "Share your custom requirements",
                  desc: "Tell us your workflows, SOPs, and business goals — we handle the rest.",
                },
                {
                  title: "Teams trained on your SOPs & workflows",
                  desc: "Your dedicated team is onboarded and trained specifically for your operations.",
                },
                {
                  title: "Scalable workforce built for long-term growth",
                  desc: "Expand your team as your business grows — no friction, no delays.",
                },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  {/* Number badge */}
                  <div className="w-8 h-8 rounded-full bg-[#bb7f14]/20 text-[#bb7f14] text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      {point.title}
                    </p>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
      <div className="px-6 max-w-6xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center text-center mt-12 mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#04388b] leading-tight tracking-tight">
              Everything You Need to Know About Working{" "}
              <span className="text-[#bb7f14]">
                <NavLink to={"/services"}> with AlphKnot</NavLink>{" "}
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-xl text-[#1F2E4F]/55 leading-relaxed">
              Get answers to the most common questions about our dedicated
              workforce solutions, onboarding process, pricing, scalability, and
              how we help businesses execute and grow with confidence.
            </p>
          </div>

          <div className="grid gap-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="bg-white border border-[#E8E2D8] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <h3
                      className="text-lg font-semibold text-[#1F2E4F] pr-4"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {faq.question}
                    </h3>

                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F7F4EF] text-[#C9A45C] flex-shrink-0">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-[#1F2E4F]/70 leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWeWork;
