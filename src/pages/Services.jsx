import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Phone,
  Database,
  DollarSign,
  Users,
  TrendingUp,
  Code,
  HelpCircle,
  Building2,
  Radio,
  User,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Executive & Business Support",
    icon: Briefcase,
    path: "/services/executive-support",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    items: [
      "Executive Assistants (EA)",
      "Virtual Assistants (VA)",
      "Calendar & Email Management",
      "Research & Reporting",
    ],
  },
  {
    title: "Customer Operations",
    icon: Phone,
    path: "/services/customer-operations",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
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
    path: "/services/back-office",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    items: [
      "Data Entry & Processing",
      "CRM Management",
      "Order Processing",
      "Operations Support",
    ],
  },
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    path: "/services/finance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
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
    path: "/services/hr",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    items: [
      "Recruitment Support",
      "Resume Screening",
      "Onboarding Coordination",
      "HR Operations",
    ],
  },
  {
    title: "Digital Growth",
    icon: TrendingUp,
    path: "/services/digital-growth",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    items: [
      "Social Media Management",
      "Performance Marketing",
      "SEO & Content",
      "Lead Generation",
    ],
  },
  {
    title: "Tech & Development",
    icon: Code,
    path: "/services/tech",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    items: [
      "Web Development",
      "Software Development",
      "AI Solutions / Automation",
      "IT Support",
    ],
  },
  {
    title: "Knowledge Process",
    icon: HelpCircle,
    path: "/services/kpo",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    items: [
      "Market Research",
      "Business Analysis",
      "Legal Process Outsourcing",
      "Data Analytics",
    ],
  },
  {
    title: "Industry Specific Solutions",
    icon: Building2,
    path: "/services/industry-solutions",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    items: [
      "Real Estate Support",
      "Healthcare BPO",
      "E-commerce Operations",
      "Legal Support",
    ],
  },
  {
    title: "Custom Workforce",
    icon: Radio,
    path: "/services/custom",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    items: ["Customized Talent Solutions", "Dedicated Teams", "Hybrid Models"],
  },
  {
    title: "Team Pods",
    icon: User,
    path: "/services/team-pods",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
    items: ["Cross-functional Pods", "Agile Sprint Teams", "Embedded Teams"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#F7F4EF] min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── HERO ── */}
      <section
        className="relative pt-40 pb-28 text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1F2E4F]/80" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
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
            What We Offer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Scalable Talent Solutions <br />
            <span className="text-[#C9A45C]">for Modern Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            From executive support to AI-driven operations — we help you scale
            faster, reduce costs, and operate with precision.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardAnim}
                onClick={() => navigate(service.path)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl border border-[#e8e2d8]"
                style={{
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                whileHover={{ y: -6 }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E4F]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 w-9 h-9 rounded-xl bg-[#C9A45C] flex items-center justify-center shadow-lg">
                    <Icon size={16} color="white" strokeWidth={1.8} />
                  </div>
                  <div className="absolute bottom-3 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={14} color="white" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3
                    className="text-[#1F2E4F] font-semibold text-[18px] mb-3 group-hover:text-[#C9A45C] transition-colors duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <div className="space-y-1.5">
                    {service.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[14px] text-[#1F2E4F]/60"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-4 flex items-center gap-1 text-[12px] font-semibold text-[#C9A45C] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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

      {/* ── CTA ── */}
      <section
        className="relative py-24 text-center overflow-hidden"
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
            Get Started Today
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Scale Your Business?
          </h2>
          <p
            className="text-white/60 mb-8 text-[15px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Hire top global talent and start executing faster today.
          </p>
          <button
            onClick={() => navigate("/hire-talent")}
            className="bg-[#C9A45C] text-white px-9 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Hire Alph Knot
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
