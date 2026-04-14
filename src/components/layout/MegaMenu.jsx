import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MegaMenu = ({ type }) => {
  const data = {
    services: [
      {
        title: "1. Executive & Business Support",
        items: [
          {
            name: "Executive Assistants (EA)",
            path: "/services/executive-assistants",
          },
          {
            name: "Virtual Assistants (VA)",
            path: "/services/virtual-assistants",
          },
          {
            name: "Calendar & Email Management",
            path: "/services/calendar-email",
          },
          { name: "Research & Reporting", path: "/services/research" },
          {
            name: "Personal + Business Admin Support",
            path: "/services/admin-support",
          },
        ],
      },
      {
        title: "2. Customer Operations",
        items: [
          {
            name: "Customer Support (Chat, Email, Voice)",
            path: "/services/customer-support",
          },
          {
            name: "Call Center (Inbound/Outbound)",
            path: "/services/call-center",
          },
          { name: "Technical Support", path: "/services/technical-support" },
          { name: "Helpdesk Management", path: "/services/helpdesk" },
        ],
      },
      {
        title: "3. Back Office & Operations",
        items: [
          { name: "Data Entry & Processing", path: "/services/data-entry" },
          { name: "CRM Management", path: "/services/crm" },
          { name: "Order Processing", path: "/services/order-processing" },
          {
            name: "Documentation & Verification",
            path: "/services/documentation",
          },
          { name: "Operations Support", path: "/services/operations" },
        ],
      },
      {
        title: "4. Finance & Accounting Support",
        items: [
          { name: "Bookkeeping", path: "/services/bookkeeping" },
          { name: "Accounts Payable/Receivable", path: "/services/accounts" },
          { name: "Payroll Processing", path: "/services/payroll" },
          {
            name: "Financial Reporting",
            path: "/services/financial-reporting",
          },
        ],
      },
      {
        title: "5. Human Resource Services",
        items: [
          { name: "Recruitment Support", path: "/services/recruitment" },
          { name: "Resume Screening", path: "/services/resume-screening" },
          { name: "Onboarding Coordination", path: "/services/onboarding" },
          { name: "HR Operations", path: "/services/hr" },
        ],
      },
      {
        title: "6. Digital Growth Services",
        items: [
          { name: "Social Media Management", path: "/services/social-media" },
          {
            name: "Performance Marketing Support",
            path: "/services/performance-marketing",
          },
          { name: "SEO & Content", path: "/services/seo" },
          { name: "Lead Generation", path: "/services/lead-generation" },
        ],
      },
      {
        title: "7. Tech & Development",
        items: [
          { name: "Web Development", path: "/services/web-dev" },
          { name: "Software Development", path: "/services/software-dev" },
          { name: "AI Solutions / Automation", path: "/services/ai" },
          { name: "IT Support", path: "/services/it-support" },
        ],
      },
      {
        title: "8. Knowledge Process",
        items: [
          { name: "Market Research", path: "/services/market-research" },
          { name: "Business Analysis", path: "/services/business-analysis" },
          { name: "Legal Process Outsourcing", path: "/services/legal" },
          { name: "Data Analytics", path: "/services/data-analytics" },
        ],
      },
      {
        title: "9. Custom Workforce Solutions",
        items: [
          {
            name: "Customized Talent Solutions",
            path: "/services/custom-solutions",
          },
        ],
      },
    ],

    about: [
      { name: "Our People", path: "/about/people" },
      { name: "Our Advantage", path: "/about/advantage" },
      { name: "Awards", path: "/about/awards" },
      { name: "About Us", path: "/about" },
    ],
  };

  const sections =
    type === "services" ? data.services : type === "about" ? data.about : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="w-full bg-white shadow-xl border-t border-[rgba(31,46,79,0.08)] max-h-[calc(100vh-80px)] overflow-y-auto scroll-smooth"
    >
      <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* 🔥 SERVICES */}
        {type === "services" &&
          sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#1F2E4F] font-semibold mb-4">
                {section.title}
              </h3>

              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 5 }} className="group">
                    <Link to={item.path} className="flex items-center gap-3">
                      {/* BULLET */}
                      <div className="w-2 h-2 rounded-full bg-[#3FA7B3] group-hover:bg-[#C9A45C] transition"></div>

                      {/* TEXT */}
                      <span className="text-[#1F2E4F]/80 group-hover:text-[#3FA7B3] text-sm">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        {/* 🔥 WHO WE ARE (ABOUT) */}
        {type === "about" && (
          <div>
            <h3 className="text-[#1F2E4F] font-semibold mb-4">Who We Are</h3>

            <div className="space-y-3">
              {data.about.map((item, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className="group">
                  <Link to={item.path} className="flex items-center gap-3">
                    {/* BULLET */}
                    <div className="w-2 h-2 rounded-full bg-[#3FA7B3] group-hover:bg-[#C9A45C] transition"></div>

                    {/* TEXT */}
                    <span className="text-[#1F2E4F]/80 group-hover:text-[#3FA7B3] text-sm">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MegaMenu;
