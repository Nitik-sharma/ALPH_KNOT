import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  ShoppingCart,
  Code,
  Briefcase,
  Building2,
} from "lucide-react";
import { Helmet } from "react-helmet";

const clients = [
  {
    title: "Startup Founders & CEOs",
    icon: Rocket,
    desc: "Outsource operations, admin, and execution so you can focus on scaling your startup.",
  },
  {
    title: "Scaling Businesses (SMBs)",
    icon: TrendingUp,
    desc: "Build offshore teams and streamline processes to grow faster without hiring delays.",
  },
  {
    title: "E-commerce Brands",
    icon: ShoppingCart,
    desc: "Manage customer support, order processing, and backend operations efficiently.",
  },
  {
    title: "SaaS Companies",
    icon: Code,
    desc: "Support product, customer experience, and data operations with expert teams.",
  },
  {
    title: "Agencies & Consultants",
    icon: Briefcase,
    desc: "Delegate execution and focus on strategy, growth, and client relationships.",
  },
  {
    title: "Enterprises & Operations Teams",
    icon: Building2,
    desc: "Optimize workflows, reduce costs, and improve operational efficiency globally.",
  },
];

const WhoWeHelp = () => {
  return (
    <div className="bg-white">
      {/* 🔥 SEO */}
      <Helmet>
        <title>
          Who We Help | U.S.-Based Business Support & Outsourcing Services
        </title>
        <meta
          name="description"
          content="We help startups, CEOs, SaaS companies, and scaling businesses with outsourcing, virtual assistants, and business operations support."
        />
      </Helmet>

      {/* 🔥 HERO */}
      <section className="pt-32 pb-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl text-[#1F2E4F] tracking-tight mb-6">
          U.S.-Based Support Partner for Ambitious CEOs & Scaling Businesses
        </h1>

        <p className="text-[#1F2E4F]/60 text-lg">
          We partner with startups, SaaS companies, and growing businesses to
          deliver reliable outsourcing, virtual assistant, and operational
          support — helping you scale faster with less friction.
        </p>
      </section>

      {/* 🔥 SECTION TITLE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl text-[#1F2E4F] text-center mb-12 tracking-tight">
          Who We Help
        </h2>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="group p-6 border border-[#1F2E4F]/10 rounded-2xl bg-white 
              hover:border-[#C9A45C] 
              hover:shadow-[0px_10px_30px_rgba(201,164,92,0.25)] 
              transition-all duration-300"
            >
              {/* ICON */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl 
              bg-[#C9A45C]/10 group-hover:bg-[#C9A45C]/20 transition mb-4"
              >
                <client.icon
                  size={22}
                  className="text-[#C9A45C] group-hover:scale-110 transition"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[#1F2E4F] font-semibold mb-2 group-hover:text-[#C9A45C] transition">
                {client.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-[#1F2E4F]/60 leading-relaxed">
                {client.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-[#1F2E4F] text-white py-20 text-center">
        <h2 className="text-3xl mb-4 tracking-tight">
          Ready to Scale with the Right Support?
        </h2>

        <p className="text-white/70 mb-8">
          Let’s build your remote team and streamline your operations.
        </p>

        <button
          className="bg-[#C9A45C] px-8 py-3 rounded-full font-medium tracking-wide 
        hover:shadow-[0px_8px_25px_rgba(201,164,92,0.3)] transition"
        >
          Book a Call
        </button>
      </section>
    </div>
  );
};

export default WhoWeHelp;
