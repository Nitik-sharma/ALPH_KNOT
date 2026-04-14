import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Headphones,
  Database,
  DollarSign,
  Users,
  TrendingUp,
  Code,
  BarChart3,
  Layers,
} from "lucide-react";

const services = [
  {
    title: "Executive & Business Support",
    icon: Briefcase,
    items: [
      "Executive Assistants (EA)",
      "Virtual Assistants (VA)",
      "Calendar & Email Management",
      "Research & Reporting",
      "Personal + Business Admin Support",
    ],
  },
  {
    title: "Customer Operations",
    icon: Headphones,
    items: [
      "Customer Support (Chat, Email, Voice)",
      "Call Center (Inbound/Outbound)",
      "Technical Support",
      "Helpdesk Management",
    ],
  },
  {
    title: "Back Office & Operations",
    icon: Database,
    items: [
      "Data Entry & Processing",
      "CRM Management",
      "Order Processing",
      "Documentation & Verification",
      "Operations Support",
    ],
  },
  {
    title: "Finance & Accounting Support",
    icon: DollarSign,
    items: [
      "Bookkeeping",
      "Accounts Payable/Receivable",
      "Payroll Processing",
      "Financial Reporting",
    ],
  },
  {
    title: "Human Resource Services",
    icon: Users,
    items: [
      "Recruitment Support",
      "Resume Screening",
      "Onboarding Coordination",
      "HR Operations",
    ],
  },
  {
    title: "Digital Growth Services",
    icon: TrendingUp,
    items: [
      "Social Media Management",
      "Performance Marketing Support",
      "SEO & Content",
      "Lead Generation",
    ],
  },
  {
    title: "Tech & Development",
    icon: Code,
    items: [
      "Web Development",
      "Software Development",
      "AI Solutions / Automation",
      "IT Support",
    ],
  },
  {
    title: "Knowledge Process",
    icon: BarChart3,
    items: [
      "Market Research",
      "Business Analysis",
      "Legal Process Outsourcing",
      "Data Analytics",
    ],
  },
  {
    title: "Custom Workforce Solutions",
    icon: Layers,
    items: ["Customized Talent Solutions"],
  },
];

const Services = () => {
  return (
    <div className="bg-white">
      {/* 🔥 HERO */}
      <section className="pt-32 pb-20 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1F2E4F] mb-6">
          Scalable Talent Solutions for Modern Businesses
        </h1>

        <p className="text-[#1F2E4F]/60 text-lg">
          From executive support to AI-driven operations — we help you scale
          faster, reduce costs, and operate with precision.
        </p>
      </section>

      {/* 🔥 SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="group p-6 border border-transparent rounded-2xl hover:shadow-xl hover:border-[#C9A45C] hover:bg-[#1F2E4F]/5 transition-all duration-300"
            >
              {/* 🔥 ICON + TITLE */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#3FA7B3]/10 group-hover:bg-[#C9A45C]/20 transition">
                  <service.icon
                    size={20}
                    className="text-[#3FA7B3] group-hover:text-[#C9A45C] transition"
                  />
                </div>

                <h3 className="text-[#1F2E4F] font-semibold">
                  {service.title}
                </h3>
              </div>

              {/* 🔥 ITEMS */}
              <div className="space-y-2">
                {service.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-[#1F2E4F]/70 group-hover:text-[#1F2E4F]"
                  >
                    <div className="w-2 h-2 bg-[#3FA7B3] group-hover:bg-[#C9A45C] rounded-full transition"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-[#1F2E4F] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Scale Your Business?
        </h2>

        <p className="text-white/70 mb-8">
          Hire top global talent and start executing faster today.
        </p>

        <button className="bg-[#C9A45C] px-8 py-3 rounded-full font-semibold hover:opacity-90">
          Hire Alph Knot
        </button>
      </section>
    </div>
  );
};

export default Services;
