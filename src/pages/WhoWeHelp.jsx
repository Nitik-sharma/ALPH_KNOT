import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Rocket,
  TrendingUp,
  ShoppingCart,
  Code,
  Briefcase,
  Building2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const clients = [
  {
    title: "Startup Founders & CEOs",
    icon: Rocket,
    desc: "Outsource operations, admin, and execution so you can focus on scaling your startup.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    tags: ["Virtual Assistants", "Ops Support", "Admin"],
  },
  {
    title: "Scaling Businesses (SMBs)",
    icon: TrendingUp,
    desc: "Build offshore teams and streamline processes to grow faster without hiring delays.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    tags: ["Offshore Teams", "Process Ops", "Growth"],
  },
  {
    title: "E-commerce Brands",
    icon: ShoppingCart,
    desc: "Manage customer support, order processing, and backend operations efficiently.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tags: ["Customer Support", "Order Ops", "Backend"],
  },
  {
    title: "SaaS Companies",
    icon: Code,
    desc: "Support product, customer experience, and data operations with expert teams.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    tags: ["Product Ops", "CX", "Data Teams"],
  },
  {
    title: "Agencies & Consultants",
    icon: Briefcase,
    desc: "Delegate execution and focus on strategy, growth, and client relationships.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    tags: ["Execution", "Strategy Support", "Client Ops"],
  },
  {
    title: "Enterprises & Operations Teams",
    icon: Building2,
    desc: "Optimize workflows, reduce costs, and improve operational efficiency globally.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    tags: ["Workflow Ops", "Cost Reduction", "Global Teams"],
  },
];

const stats = [
  { value: "500+", label: "Businesses Helped" },
  { value: "98%", label: "Client Retention" },
  { value: "40%", label: "Avg. Cost Savings" },
  { value: "72hrs", label: "Avg. Onboarding Time" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const WhoWeHelp = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#F7F4EF" }}>
      <Helmet>
        <title>Who We Help | Alph Knot</title>
        <meta
          name="description"
          content="We help startups, CEOs, SaaS companies, and scaling businesses with outsourcing, virtual assistants, and business operations support."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-32 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1F2E4F]/82" />

        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#C9A45C] text-xs font-semibold tracking-[3px] uppercase mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Who We Serve
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Built for Ambitious <br />
            <span className="text-[#C9A45C]">CEOs & Scaling Teams</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We partner with startups, SaaS companies, and growing businesses to
            deliver reliable outsourcing and operational support  helping you
            scale faster with less friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-[#C9A45C] text-white px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/book-call")}
              className="border border-white/30 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Book a Call <ArrowUpRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative z-10 max-w-4xl mx-auto px-6 mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm px-6 py-5 text-center"
              >
                <p
                  className="text-2xl font-bold text-[#C9A45C] mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-white/55 text-[12px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CLIENTS GRID ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p
            className="text-[#C9A45C] text-xs font-semibold tracking-[3px] uppercase mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Clients
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1F2E4F]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Who We Help
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <motion.div
                key={index}
                variants={cardAnim}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e8e2d8] hover:shadow-2xl hover:border-[#C9A45C]/40 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E4F]/65 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-[#C9A45C] flex items-center justify-center shadow-lg">
                    <Icon size={16} color="white" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3
                    className="text-[#1F2E4F] font-semibold text-[15px] mb-2 group-hover:text-[#C9A45C] transition-colors duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {client.title}
                  </h3>

                  <p
                    className="text-[13px] text-[#1F2E4F]/60 leading-relaxed mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {client.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {client.tags.map((tag, t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-[#C9A45C]/10 text-[#C9A45C] font-medium"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Learn more <ArrowUpRight size={11} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── WHY US STRIP ── */}
      <section className="bg-white border-y border-[#e8e2d8] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Global Talent, U.S. Standards",
                desc: "Pre-vetted professionals trained to U.S. business expectations.",
              },
              {
                title: "Fast Onboarding",
                desc: "Your dedicated team is ready within 72 hours of kickoff.",
              },
              {
                title: "No Long-Term Lock-ins",
                desc: "Flexible engagements that scale up or down with your business.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#C9A45C]/15 flex items-center justify-center mb-4">
                  <CheckCircle2 size={16} className="text-[#C9A45C]" />
                </div>
                <h3
                  className="text-[#1F2E4F] font-semibold text-[15px] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] text-[#1F2E4F]/55 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-28 text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80')`,
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
            Let's Work Together
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Scale with <br /> the Right Support?
          </h2>
          <p
            className="text-white/55 mb-9 text-[15px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Let's build your remote team and streamline your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate("/book-call")}
              className="bg-[#C9A45C] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Book a Call
            </button>
            <button
              onClick={() => navigate("/hire-talent")}
              className="border border-white/25 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hire Alph Knot <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeHelp;
