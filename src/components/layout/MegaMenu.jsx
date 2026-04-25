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
  User,
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
  { title: "Team Pods", icon: User, path: "/services/team-pods" },
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
          onClick={() => navigate(type === "services" ? "/services" : "")}
          className="mx-3 mt-2 mb-1 py-2 rounded-full bg-[#C9A45C] text-white text-[12px] font-semibold hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          View All
        </button>
      </div>
    );
  }

  // ── DESKTOP: 3-column grid ──
 
// ── DESKTOP: clean dropdown list ──
return (
  <motion.div
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
    className="bg-white border border-[#e8e8e8] rounded-xl shadow-lg py-2"
    style={{
      fontFamily: "'Inter', sans-serif",
      width: "250px",
    }}
  >
    {items.map((s, i) => (
      <Link
        key={i}
        to={s.path}
        className="block px-4 py-2.5 text-[13px] text-[#1a1a1a] hover:bg-[#f7f3ee] hover:text-[#C9A45C] transition-colors duration-150"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {s.title}
      </Link>
    ))}
  </motion.div>
);
};

export default MegaMenu;
