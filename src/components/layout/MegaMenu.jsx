import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Briefcase,
  Phone,
  Database,
  DollarSign,
  Users,
  TrendingUp,
  Code,
  HelpCircle,
  Radio,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Executive & Business Support",
    icon: Briefcase,
    path: "/services/executive-support",
  },
  {
    title: "Customer Operations",
    icon: Phone,
    path: "/services/customer-operations",
  },
  {
    title: "Back Office & Operations",
    icon: Database,
    path: "/services/back-office",
  },
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    path: "/services/finance",
  },
  { title: "Human Resource Services", icon: Users, path: "/services/hr" },
  {
    title: "Digital Growth",
    icon: TrendingUp,
    path: "/services/digital-growth",
  },
  { title: "Tech & Development", icon: Code, path: "/services/tech" },
  { title: "Knowledge Process", icon: HelpCircle, path: "/services/kpo" },
  {
    title: "Industry Specific Solutions",
    icon: Building2,
    path: "/services/industry-solutions",
  },
  { title: "Custom Workforce", icon: Radio, path: "/services/custom" },
];

const about = [
  { title: "Our People", icon: Users, path: "/about/people" },
  { title: "Our Advantage", icon: TrendingUp, path: "/about/advantage" },
  { title: "Awards", icon: HelpCircle, path: "/about/awards" },
  { title: "About Us", icon: Briefcase, path: "/about" },
];

const MegaMenu = ({ type, mobile = false }) => {
  const navigate = useNavigate();
  const items = type === "services" ? services : about;

  // ── MOBILE: simple single-column list ──
  if (mobile) {
    return (
      <div className="flex flex-col py-1">
        {items.map((s, i) => {
          const Icon = s.icon;
          return (
            <Link
              key={i}
              to={s.path}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg group"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,164,92,0.10)" }}
              >
                <Icon size={13} color="#C9A45C" strokeWidth={1.8} />
              </div>
              <span className="text-[13px] text-[#0b1c35] group-hover:text-[#C9A45C] transition-colors duration-150">
                {s.title}
              </span>
            </Link>
          );
        })}

        {/* Mobile view all */}
        <button
          onClick={() => navigate(type === "services" ? "/services" : "/about")}
          className="mx-3 mt-2 mb-1 py-2 rounded-full bg-[#C9A45C] text-white text-[12px] font-semibold hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          View All
        </button>
      </div>
    );
  }

  // ── DESKTOP: 3-column grid ──
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="w-full bg-white border border-t-0 border-[#e2eaf4] rounded-b-2xl px-8 pt-7 pb-6 shadow-xl"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Label */}
      <p
        className="text-[9px] font-semibold tracking-[2px] text-[#C9A45C] uppercase mb-5"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Browse by {type === "services" ? "service" : "section"}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-x-2 gap-y-0.5">
        {items.map((s, i) => {
          const Icon = s.icon;
          return (
            <Link
              key={i}
              to={s.path}
              className="flex items-center gap-3 px-2.5 py-2.5 rounded-lg group"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,164,92,0.09)" }}
              >
                <Icon size={15} color="#C9A45C" strokeWidth={1.8} />
              </div>
              <span className="text-[13px] text-[#0b1c35] font-normal group-hover:text-[#C9A45C] transition-colors duration-150">
                {s.title}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-[#edf2f8] mt-5 pt-4 flex items-center justify-end">
        <button
          onClick={() => navigate(type === "services" ? "/services" : "/about")}
          className="text-[11px] font-semibold text-white bg-[#C9A45C] rounded-full px-5 py-[7px] hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          View All {type === "services" ? "Services" : ""}
        </button>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
