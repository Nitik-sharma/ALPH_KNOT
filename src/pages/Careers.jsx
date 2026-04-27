import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  ChevronDown,
  ArrowUpRight,
  Check,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer (React)",
    department: "Technology",
    location: "Remote / India",
    locationType: "Remote",
    description:
      "Build fast, scalable interfaces used by global clients. Work closely with product and design to deliver seamless user experiences.",
    tags: ["Full-time", "Remote"],
    experience: "Mid-Level",
  },
  {
    id: 2,
    title: "Financial Analyst",
    department: "Finance",
    location: "Onsite / Gurgaon",
    locationType: "Onsite",
    description:
      "Drive financial insights that influence real business decisions. Work with global stakeholders on forecasting, reporting, and strategy.",
    tags: ["Full-time", "Onsite"],
    experience: "Senior",
  },
  {
    id: 3,
    title: "HR Operations Specialist",
    department: "Human Resources",
    location: "Hybrid / Bangalore",
    locationType: "Hybrid",
    description:
      "Shape employee experience across distributed teams. Handle hiring operations, onboarding, and performance processes.",
    tags: ["Full-time", "Hybrid"],
    experience: "Entry-Level",
  },
];

const benefits = [
  {
    title: "Ownership & Impact",
    desc: "Your work directly contributes to real business outcomes, not isolated tasks.",
    icon: "◈",
  },
  {
    title: "Accelerated Growth",
    desc: "Work on global projects that expand your skills and perspective faster.",
    icon: "◈",
  },
  {
    title: "Flexible Work Environment",
    desc: "Remote, hybrid, or onsite — work in a way that fits your productivity.",
    icon: "◈",
  },
  {
    title: "Global Exposure",
    desc: "Collaborate with international teams and clients across industries.",
    icon: "◈",
  },
  {
    title: "Continuous Learning",
    desc: "Access tools, mentorship, and real-world challenges that sharpen your expertise.",
    icon: "◈",
  },
  {
    title: "Balanced Performance Culture",
    desc: "High standards without burnout — we value sustainable performance.",
    icon: "◈",
  },
];

const tagColor = {
  Remote: "bg-[#E8F4EC] text-[#1A6B35]",
  Onsite: "bg-[#EEF0F8] text-[#1F2E4F]",
  Hybrid: "bg-[#FBF3E8] text-[#8A5C1A]",
  "Full-time": "bg-[#F7F4EF] text-[#1F2E4F]",
};

const Careers = () => {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All Departments");
  const [loc, setLoc] = useState("All Locations");
  const [exp, setExp] = useState("All Experience Levels");

  const filtered = jobs.filter((j) => {
    const matchSearch =
      search === "" ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.department.toLowerCase().includes(search.toLowerCase());
    const matchDept = dept === "All Departments" || j.department === dept;
    const matchLoc = loc === "All Locations" || j.locationType === loc;
    const matchExp = exp === "All Experience Levels" || j.experience === exp;
    return matchSearch && matchDept && matchLoc && matchExp;
  });

  return (
    <div
      className="bg-[#F7F4EF] w-full overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── HERO ── */}
      <section
        className="relative min-h-[88vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1F2E4F]/84" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#C9A45C] text-[11px] font-semibold tracking-[0.22em] uppercase mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Careers at Alph Knot
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl md:text-[58px] font-bold text-white leading-[1.1] mb-6 tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Work Where Execution
            <br />
            <span className="text-[#C9A45C]">Defines You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base md:text-lg font-light leading-[1.8] max-w-2xl mx-auto mb-10"
          >
            At Alph Knot, you don't just join a company — you step into real
            impact. Work with global teams, solve meaningful problems, and grow
            faster than traditional career paths allow.
          </motion.p>

          <motion.a
            href="#openings"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="inline-block bg-[#C9A45C] text-white font-semibold text-sm px-9 py-4 rounded-full hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Explore Open Roles
          </motion.a>
        </div>
      </section>

      {/* ── FILTERS + SEARCH ── */}
      <section
        id="openings"
        className="bg-white border-b border-[#1F2E4F]/[0.07] py-10 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center text-[#1F2E4F]/50 text-[13px] mb-6"
          >
            Find the role where your work creates measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-3"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2E4F]/35"
              />
              <input
                type="text"
                placeholder="Search roles, skills, or keywords"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#1F2E4F]/15 text-[#1F2E4F] text-sm
                focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/20 outline-none transition bg-[#F7F4EF]"
              />
            </div>

            {/* Department */}
            <div className="relative">
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 rounded-lg border border-[#1F2E4F]/15
                text-[#1F2E4F] text-sm bg-[#F7F4EF] focus:border-[#C9A45C] outline-none transition cursor-pointer"
              >
                <option>All Departments</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Human Resources</option>
              </select>
              <ChevronDown
                size={13}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1F2E4F]/40 pointer-events-none"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <select
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 rounded-lg border border-[#1F2E4F]/15
                text-[#1F2E4F] text-sm bg-[#F7F4EF] focus:border-[#C9A45C] outline-none transition cursor-pointer"
              >
                <option>All Locations</option>
                <option>Remote</option>
                <option>Onsite</option>
                <option>Hybrid</option>
              </select>
              <ChevronDown
                size={13}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1F2E4F]/40 pointer-events-none"
              />
            </div>

            {/* Experience */}
            <div className="relative">
              <select
                value={exp}
                onChange={(e) => setExp(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 rounded-lg border border-[#1F2E4F]/15
                text-[#1F2E4F] text-sm bg-[#F7F4EF] focus:border-[#C9A45C] outline-none transition cursor-pointer"
              >
                <option>All Experience Levels</option>
                <option>Entry-Level</option>
                <option>Mid-Level</option>
                <option>Senior</option>
              </select>
              <ChevronDown
                size={13}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1F2E4F]/40 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── JOB LISTINGS ── */}
      <section className="py-16 px-6 bg-[#F7F4EF]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p
              className="text-[#1F2E4F]/40 text-sm"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {filtered.length} role{filtered.length !== 1 ? "s" : ""} available
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p
                className="text-[#1F2E4F]/40 text-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                No roles match your filters.
              </p>
              <p className="text-[#1F2E4F]/30 text-sm mt-2">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-[#1F2E4F]/[0.08] p-6 flex flex-col gap-4
                  hover:border-[#C9A45C]/40 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p
                        className="text-[#C9A45C] text-[10px] font-semibold tracking-[0.18em] uppercase mb-1"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {job.department}
                      </p>
                      <h3
                        className="text-[#1F2E4F] text-[17px] font-bold leading-snug"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {job.title}
                      </h3>
                    </div>
                    <div
                      className="w-9 h-9 rounded-full border border-[#C9A45C]/30 flex items-center justify-center flex-shrink-0
                    group-hover:bg-[#C9A45C] group-hover:border-[#C9A45C] transition-all duration-300"
                    >
                      <ArrowUpRight
                        size={14}
                        className="text-[#C9A45C] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-[#1F2E4F]/50 text-[13px]">
                    <MapPin size={13} className="flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#1F2E4F]/[0.06]" />

                  {/* Description */}
                  <p className="text-[#1F2E4F]/55 text-[13.5px] leading-[1.75] font-light flex-1">
                    {job.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className={`text-[11px] font-semibold px-3 py-1 rounded-full ${tagColor[tag] || "bg-[#F7F4EF] text-[#1F2E4F]"}`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full mt-1 bg-[#1F2E4F] text-white text-sm font-semibold py-2.5 rounded-xl
                    hover:bg-[#C9A45C] transition-colors duration-300"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CULTURE SECTION ── */}
      <section className="bg-white border-t border-[#1F2E4F]/[0.07] py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <p
              className="text-[#C9A45C] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Why Alph Knot
            </p>
            <h2
              className="text-3xl md:text-[40px] font-bold text-[#1F2E4F] leading-tight mb-5 tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Built for People Who Want
              <br />
              <span className="text-[#C9A45C]">More Than a Job</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#C9A45C] mx-auto mb-6" />
            <p className="text-[#1F2E4F]/55 text-[15px] leading-[1.85] max-w-2xl mx-auto font-light">
              Alph Knot is designed for individuals who take ownership, think
              beyond instructions, and care about outcomes. We operate with
              clarity, speed, and trust — giving you the environment to do your
              best work without unnecessary complexity.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#F7F4EF] rounded-2xl p-6 border border-[#1F2E4F]/[0.06]
                hover:border-[#C9A45C]/35 hover:bg-white transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-full bg-[#C9A45C]/10 flex items-center justify-center mb-4
                group-hover:bg-[#C9A45C] transition-colors duration-300"
                >
                  <Check
                    size={16}
                    className="text-[#C9A45C] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h4
                  className="text-[#1F2E4F] text-[15px] font-bold mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {b.title}
                </h4>
                <p className="text-[#1F2E4F]/55 text-[13.5px] leading-[1.75] font-light">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[#C9A45C] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Don't See Your Role?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Send Us Your Profile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/55 text-[15px] mb-9 font-light"
          >
            We're always looking for exceptional people. If you don't see a role
            that fits, reach out anyway.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <button
              className="bg-[#C9A45C] text-white px-8 py-3.5 rounded-full font-semibold text-sm
              hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Send Your Resume
            </button>
            <button
              className="border border-white/25 text-white px-8 py-3.5 rounded-full text-sm font-medium
              hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              View All Roles <ArrowUpRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
