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
    <div className="bg-white font-sans">
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
        <h1 className="text-4xl md:text-5xl text-[#1F2E4F] mb-6 font-sans">
          U.S.-Based Support Partner for Ambitious CEOs & Scaling Businesses
        </h1>

        <p className="text-[#1F2E4F]/60 text-lg font-sans">
          We partner with startups, SaaS companies, and growing businesses to
          deliver reliable outsourcing, virtual assistant, and operational
          support — helping you scale faster with less friction.
        </p>
      </section>

      {/* 🔥 SECTION TITLE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl text-[#1F2E4F] mb-12 text-center font-sans">
          Who We Help
        </h2>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="group p-6 border border-transparent rounded-2xl hover:shadow-xl hover:border-[#C9A45C] hover:bg-[#1F2E4F]/5 transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#3FA7B3]/10 group-hover:bg-[#C9A45C]/20 transition mb-4">
                <client.icon
                  size={22}
                  className="text-[#3FA7B3] group-hover:text-[#C9A45C]"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[#1F2E4F] mb-2 font-sans">{client.title}</h3>

              {/* DESC */}
              <p className="text-sm text-[#1F2E4F]/60 font-sans leading-relaxed">
                {client.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-[#1F2E4F] text-white py-20 text-center">
        <h2 className="text-3xl mb-4 font-sans">
          Ready to Scale with the Right Support?
        </h2>

        <p className="text-white/70 mb-8 font-sans">
          Let’s build your remote team and streamline your operations.
        </p>

        <button className="bg-[#C9A45C] px-8 py-3 rounded-full font-sans hover:opacity-90">
          Book a Call
        </button>
      </section>
    </div>
  );
};

export default WhoWeHelp;
