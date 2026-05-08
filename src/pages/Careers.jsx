import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Upload,
  ChevronDown,
  ArrowUpRight,
  Check,
  Link2,
  Globe,
  FileText,
  Star,
} from "lucide-react";


const benefits = [
  {
    title: "Ownership & Impact",
    desc: "Your work directly contributes to real business outcomes, not isolated tasks.",
  },
  {
    title: "Accelerated Growth",
    desc: "Work on global projects that expand your skills and perspective faster.",
  },
  {
    title: "Flexible Work Environment",
    desc: "Remote, hybrid, or onsite  work in a way that fits your productivity.",
  },
  {
    title: "Global Exposure",
    desc: "Collaborate with international teams and clients across industries.",
  },
  {
    title: "Continuous Learning",
    desc: "Access tools, mentorship, and real-world challenges that sharpen your expertise.",
  },
  {
    title: "Balanced Performance Culture",
    desc: "High standards without burnout  we value sustainable performance.",
  },
];

const departments = [
  "Technology",
  "Finance",
  "Human Resources",
  "Marketing",
  "Operations",
  "Sales",
  "Design",
  "Other",
];

const experienceLevels = [
  "Entry-Level (0–2 years)",
  "Mid-Level (2–5 years)",
  "Senior (5–10 years)",
  "Lead / Manager (10+ years)",
];

const workPreferences = ["Remote", "Onsite", "Hybrid", "Open to All"];

const InputField = ({ label, icon: Icon, error, ...props }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[#1F2E4F] text-[13px] font-semibold tracking-wide">
      {label} {props.required && <span className="text-[#C9A45C]">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2E4F]/35 pointer-events-none"
        />
      )}
      <input
        {...props}
        className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3 rounded-xl border ${
          error ? "border-red-400" : "border-[#1F2E4F]/15"
        } text-[#1F2E4F] text-sm bg-[#F7F4EF] focus:border-[#C9A45C] focus:ring-2
        focus:ring-[#C9A45C]/15 outline-none transition placeholder:text-[#1F2E4F]/30`}
      />
    </div>
    {error && <p className="text-red-500 text-[11px]">{error}</p>}
  </div>
);

const SelectField = ({
  label,
  icon: Icon,
  options,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[#1F2E4F] text-[13px] font-semibold tracking-wide">
      {label} {required && <span className="text-[#C9A45C]">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1F2E4F]/35 pointer-events-none"
        />
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full appearance-none ${Icon ? "pl-10" : "pl-4"} pr-10 py-3 rounded-xl border border-[#1F2E4F]/15
        text-[#1F2E4F] text-sm bg-[#F7F4EF] focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/15
        outline-none transition cursor-pointer`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1F2E4F]/40 pointer-events-none"
      />
    </div>
  </div>
);

const Careers = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    workPreference: "",
    currentRole: "",
    location: "",
    linkedin: "",
    portfolio: "",
    skills: "",
    about: "",
    resume: null,
    salary: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState("");

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleResume = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((p) => ({ ...p, resume: file }));
      setResumeName(file.name);
    }
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.department) e.department = "Please select a department.";
    if (!form.experience) e.experience = "Please select experience level.";
    if (!form.about.trim()) e.about = "Please tell us about yourself.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    setSubmitted(true);
  };

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
            At Alph Knot, you don't just join a company  you step into real
            impact. Work with global teams, solve meaningful problems, and grow
            faster than traditional career paths allow.
          </motion.p>
          <motion.a
            href="#apply"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="inline-block bg-[#C9A45C] text-white font-semibold text-sm px-9 py-4 rounded-full hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Submit Your Profile
          </motion.a>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section id="apply" className="py-20 px-6 bg-[#F7F4EF]">
        <div className="max-w-3xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p
              className="text-[#C9A45C] text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Join the Team
            </p>
            <h2
              className="text-3xl md:text-[40px] font-bold text-[#1F2E4F] leading-tight tracking-tight mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Submit Your <span className="text-[#C9A45C]">Profile</span>
            </h2>
            <div className="w-10 h-[2px] bg-[#C9A45C] mx-auto mb-5" />
            <p className="text-[#1F2E4F]/55 text-[15px] leading-[1.85] max-w-xl mx-auto font-light">
              Don't wait for the perfect job posting. Tell us who you are and
              what you're great at  we'll match you to the right opportunity.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── SUCCESS STATE ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-3xl border border-[#C9A45C]/20 p-12 text-center shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/30 flex items-center justify-center mx-auto mb-6">
                  <Check size={28} className="text-[#C9A45C]" />
                </div>
                <h3
                  className="text-[#1F2E4F] text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Profile Submitted!
                </h3>
                <p className="text-[#1F2E4F]/55 text-[15px] leading-relaxed max-w-md mx-auto font-light">
                  Thank you,{" "}
                  <span className="text-[#C9A45C] font-semibold">
                    {form.fullName}
                  </span>
                  . We've received your profile and will be in touch if there's
                  a strong match. Keep doing great work.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      fullName: "",
                      email: "",
                      phone: "",
                      department: "",
                      experience: "",
                      workPreference: "",
                      currentRole: "",
                      location: "",
                      linkedin: "",
                      portfolio: "",
                      skills: "",
                      about: "",
                      resume: null,
                      salary: "",
                    });
                    setResumeName("");
                    setErrors({});
                  }}
                  className="mt-8 text-[#C9A45C] text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition"
                >
                  Submit another profile
                </button>
              </motion.div>
            ) : (
              /* ── FORM ── */
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-[#1F2E4F]/[0.08] shadow-xl overflow-hidden"
              >
                {/* SECTION 1 — Personal Info */}
                <div className="px-8 pt-8 pb-6 border-b border-[#1F2E4F]/[0.07]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#1F2E4F] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A45C] text-xs font-bold">
                        01
                      </span>
                    </div>
                    <h3
                      className="text-[#1F2E4F] text-[15px] font-bold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Personal Information
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      icon={User}
                      placeholder="John Smith"
                      value={form.fullName}
                      onChange={set("fullName")}
                      required
                      error={errors.fullName}
                    />
                    <InputField
                      label="Email Address"
                      icon={Mail}
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={set("email")}
                      required
                      error={errors.email}
                    />
                    <InputField
                      label="Phone Number"
                      icon={Phone}
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={set("phone")}
                      required
                      error={errors.phone}
                    />
                    <InputField
                      label="Current Location"
                      icon={MapPin}
                      placeholder="City, Country"
                      value={form.location}
                      onChange={set("location")}
                    />
                  </div>
                </div>

                {/* SECTION 2 — Professional Profile */}
                <div className="px-8 py-6 border-b border-[#1F2E4F]/[0.07]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#1F2E4F] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A45C] text-xs font-bold">
                        02
                      </span>
                    </div>
                    <h3
                      className="text-[#1F2E4F] text-[15px] font-bold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Professional Profile
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <InputField
                      label="Current / Last Role"
                      icon={Briefcase}
                      placeholder="e.g. Senior Frontend Developer"
                      value={form.currentRole}
                      onChange={set("currentRole")}
                    />
                    <SelectField
                      label="Department of Interest"
                      icon={Star}
                      options={departments}
                      placeholder="Select a department"
                      value={form.department}
                      onChange={set("department")}
                      required
                    />
                    <SelectField
                      label="Experience Level"
                      options={experienceLevels}
                      placeholder="Select experience level"
                      value={form.experience}
                      onChange={set("experience")}
                      required
                    />
                    <SelectField
                      label="Work Preference"
                      options={workPreferences}
                      placeholder="Remote / Onsite / Hybrid"
                      value={form.workPreference}
                      onChange={set("workPreference")}
                    />
                    <div className="md:col-span-2">
                      <InputField
                        label="Key Skills"
                        placeholder="e.g. React, Financial Modelling, Talent Acquisition, SEO..."
                        value={form.skills}
                        onChange={set("skills")}
                      />
                      <p className="text-[#1F2E4F]/35 text-[11px] mt-1.5">
                        Separate skills with commas
                      </p>
                    </div>
                    <InputField
                      label="Expected Salary / Rate"
                      placeholder="e.g. $5,000/month or $50/hr"
                      value={form.salary}
                      onChange={set("salary")}
                    />
                  </div>
                </div>

                {/* SECTION 3 — Links */}
                <div className="px-8 py-6 border-b border-[#1F2E4F]/[0.07]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#1F2E4F] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A45C] text-xs font-bold">
                        03
                      </span>
                    </div>
                    <h3
                      className="text-[#1F2E4F] text-[15px] font-bold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Links & Portfolio
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <InputField
                      label="LinkedIn Profile"
                      icon={Link2}
                      placeholder="linkedin.com/in/yourname"
                      value={form.linkedin}
                      onChange={set("linkedin")}
                    />
                    <InputField
                      label="Portfolio / Website"
                      icon={Globe}
                      placeholder="yourwebsite.com"
                      value={form.portfolio}
                      onChange={set("portfolio")}
                    />
                  </div>
                </div>

                {/* SECTION 4 — About + Resume */}
                <div className="px-8 py-6 border-b border-[#1F2E4F]/[0.07]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#1F2E4F] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A45C] text-xs font-bold">
                        04
                      </span>
                    </div>
                    <h3
                      className="text-[#1F2E4F] text-[15px] font-bold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      About You
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1F2E4F] text-[13px] font-semibold tracking-wide">
                        Tell Us About Yourself{" "}
                        <span className="text-[#C9A45C]">*</span>
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Share what you're great at, what drives you, and what kind of work you want to do at Alph Knot..."
                        value={form.about}
                        onChange={set("about")}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.about
                            ? "border-red-400"
                            : "border-[#1F2E4F]/15"
                        } text-[#1F2E4F] text-sm bg-[#F7F4EF] focus:border-[#C9A45C] focus:ring-2
                        focus:ring-[#C9A45C]/15 outline-none transition resize-none placeholder:text-[#1F2E4F]/30`}
                      />
                      {errors.about && (
                        <p className="text-red-500 text-[11px]">
                          {errors.about}
                        </p>
                      )}
                    </div>

                    {/* Resume Upload */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#1F2E4F] text-[13px] font-semibold tracking-wide">
                        Upload Resume / CV
                      </label>
                      <label
                        className={`flex items-center gap-4 px-5 py-4 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-300
                        ${resumeName ? "border-[#C9A45C]/50 bg-[#C9A45C]/5" : "border-[#1F2E4F]/15 bg-[#F7F4EF] hover:border-[#C9A45C]/40 hover:bg-[#C9A45C]/5"}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                          ${resumeName ? "bg-[#C9A45C]/15" : "bg-[#1F2E4F]/5"}`}
                        >
                          {resumeName ? (
                            <Check size={16} className="text-[#C9A45C]" />
                          ) : (
                            <Upload size={16} className="text-[#1F2E4F]/40" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`text-sm font-medium truncate ${resumeName ? "text-[#C9A45C]" : "text-[#1F2E4F]/50"}`}
                          >
                            {resumeName || "Click to upload PDF, DOC, or DOCX"}
                          </p>
                          <p className="text-[#1F2E4F]/30 text-[11px] mt-0.5">
                            Max file size: 5MB
                          </p>
                        </div>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleResume}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="px-8 py-6 bg-[#F7F4EF]/50">
                  <p className="text-[#1F2E4F]/40 text-[12px] mb-5 leading-relaxed">
                    By submitting this form, you agree to allow Alph Knot to
                    store and process your information for recruitment purposes.
                    We respect your privacy.
                  </p>
                  <button
                    type="submit"
                    className="w-full bg-[#1F2E4F] text-white font-semibold py-4 rounded-xl text-sm
                    hover:bg-[#C9A45C] transition-colors duration-300 flex items-center justify-center gap-2 group"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Submit My Profile
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CULTURE SECTION ── */}
      <section className="bg-white border-t border-[#1F2E4F]/[0.07] py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
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
              beyond instructions, and care about outcomes.
            </p>
          </motion.div>

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
            Have Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            We'd Love to Hear From You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/55 text-[15px] mb-9 font-light"
          >
            Reach out directly and a member of our team will get back to you
            within 48 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href="#apply"
              className="bg-[#C9A45C] text-white px-8 py-3.5 rounded-full font-semibold text-sm
              hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Submit Your Profile
            </a>
            <button
              className="border border-white/25 text-white px-8 py-3.5 rounded-full text-sm font-medium
              hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Contact Us <ArrowUpRight size={14} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
