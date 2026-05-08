import { useState } from "react";

const SERVICES = [
  { value: "", label: "Select what you need…" },

  { value: "executive-support", label: "Executive & Business Support" },
  { value: "customer-operations", label: "Customer Operations" },
  { value: "back-office", label: "Back Office & Operations" },
  { value: "finance", label: "Finance & Accounting" },
  { value: "hr", label: "Human Resource Services" },
  { value: "digital-growth", label: "Digital Growth" },
  { value: "tech", label: "Tech & Development" },
  { value: "kpo", label: "Knowledge Process (KPO)" },
  { value: "industry-solutions", label: "Industry-Specific Solutions" },
  { value: "custom", label: "Custom Workforce" },
  { value: "team-pods", label: "Team Pods" },
];

const TEAM_SIZES = [
  { value: "1", label: "1", sub: "Solo hire" },
  { value: "2-5", label: "2–5", sub: "Small team" },
  { value: "5-10", label: "5–10", sub: "Mid team" },
  { value: "10+", label: "10+", sub: "Scale-up" },
];

const TIMES = [
  { value: "morning", label: "Morning", time: "8am – 12pm" },
  { value: "afternoon", label: "Afternoon", time: "12pm – 4pm" },
  { value: "evening", label: "Evening", time: "4pm – 7pm" },
];

export default function HireTalentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    teamSize: "",
    description: "",
    meetingTime: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const [focused, setFocused] = useState("");

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };
  const pick = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.company.trim()) e.company = "Company name is required.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.teamSize) e.teamSize = "Select a team size.";
    if (!form.description.trim())
      e.description = "Give us a brief description.";
    if (!form.meetingTime) e.meetingTime = "Pick a preferred time.";
    return e;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
      }
      console.log("form ",form)
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
      setStatus("success");
      
    };
    

    

  /* ── field wrapper helper ── */
  const fieldClass = (f) =>
    `w-full px-4 py-3 text-gray-900 rounded-xl border text-sm outline-none transition-all duration-200 bg-white font-inter
     ${
       errors[f]
         ? "border-red-400 ring-2 ring-red-100"
         : focused === f
           ? "border-[#C9A45C] ring-2 ring-[#C9A45C]/10 shadow-sm"
           : "border-[#E4DDD4] hover:border-[#C9A45C]/50"
     }`;

  /* ── SUCCESS ── */
  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center px-5 py-20">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-inter   { font-family: 'Inter',   sans-serif; }
        `}</style>
        <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-xl border border-[#E8E2D9]">
          <div className="w-16 h-16 rounded-full bg-[#C9A45C]/10 border-2 border-[#C9A45C]/30 flex items-center justify-center mx-auto mb-5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M6 14.5l5 5 11-11"
                stroke="#C9A45C"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="font-poppins text-2xl font-semibold text-[#1F2E4F] mb-3">
            You're All Set!
          </h3>
          <p className="font-inter text-sm text-[#7A8499] leading-relaxed mb-6">
            Thanks,{" "}
            <span className="text-[#1F2E4F] font-medium">{form.name}</span>.
            We've received your request and will reach out to{" "}
            <span className="text-[#1F2E4F] font-medium">{form.email}</span>{" "}
            within 4 business hours.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setForm({
                name: "",
                email: "",
                company: "",
                service: "",
                teamSize: "",
                description: "",
                meetingTime: "",
              });
            }}
            className="font-inter text-sm text-[#C9A45C] border border-[#C9A45C]/30 rounded-xl px-6 py-2.5 hover:bg-[#C9A45C]/5 transition-colors"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  /* ── MAIN FORM ── */
  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter   { font-family: 'Inter',   sans-serif; }
        input::placeholder,textarea::placeholder { color: #B5BEC9; font-family: 'Inter', sans-serif; }
        select option[value=""] { color: #B5BEC9; }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .anim-1 { animation: fadeUp 0.5s ease both 0.05s; }
        .anim-2 { animation: fadeUp 0.5s ease both 0.12s; }
        .anim-3 { animation: fadeUp 0.5s ease both 0.19s; }
        .anim-4 { animation: fadeUp 0.5s ease both 0.26s; }
        .anim-5 { animation: fadeUp 0.5s ease both 0.33s; }
        .anim-6 { animation: fadeUp 0.5s ease both 0.40s; }
        .anim-7 { animation: fadeUp 0.5s ease both 0.47s; }
        .anim-8 { animation: fadeUp 0.5s ease both 0.54s; }
        .spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform:rotate(360deg); } }
      `}</style>

      <div className="max-w-6xl mx-auto px-5 py-16 lg:py-24">
        {/* ── Grid: Left panel + Right form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* ════════════════════════════
              LEFT PANEL  (2 of 5 cols)
          ════════════════════════════ */}
          <div className="lg:col-span-2 lg:sticky lg:top-28 space-y-6">
            {/* Header card */}
            <div className="anim-1 bg-white rounded-3xl p-8 border border-[#E8E2D9] shadow-sm">
              {/* Gold bar */}
              <div className="w-9 h-[3px] bg-[#C9A45C] rounded-full mb-5" />

              <h1 className="font-poppins text-[clamp(1.6rem,3vw,2.1rem)] font-semibold text-[#1F2E4F] leading-tight mb-4">
                Build Your Team
                <br />
                with <span className="text-[#C9A45C]">Alph Knot</span>
              </h1>
              <p className="font-inter text-sm text-[#7A8499] leading-relaxed">
                Tell us what you're looking for, and we'll match you with the
                right talent. We'll review your requirements and schedule a
                quick call to get started.
              </p>
            </div>

            {/* Promise cards */}
            {[
              {
                icon: "⚡",
                title: "Fast Response",
                body: "Hear back within 4 business hours  guaranteed.",
              },
              {
                icon: "🎯",
                title: "Exact Match",
                body: "We hand-pick talent to fit your specific needs.",
              },
              {
                icon: "🔒",
                title: "Fully Private",
                body: "Your information is never shared with third parties.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`anim-${i + 2} bg-white rounded-2xl px-6 py-5 border border-[#E8E2D9] flex gap-4 items-start shadow-sm hover:border-[#C9A45C]/40 hover:shadow-md transition-all duration-200`}
              >
                <span className="text-xl mt-0.5 flex-shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="font-poppins text-sm font-semibold text-[#1F2E4F] mb-1">
                    {item.title}
                  </p>
                  <p className="font-inter text-xs text-[#7A8499] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats row */}
            <div className="anim-5 grid grid-cols-3 gap-3">
              {[
                ["200+", "Clients"],
                ["98%", "Satisfied"],
                ["12+", "Countries"],
              ].map(([val, lbl]) => (
                <div
                  key={lbl}
                  className="bg-[#1F2E4F] rounded-2xl px-3 py-4 text-center"
                >
                  <p className="font-poppins text-lg font-semibold text-[#C9A45C]">
                    {val}
                  </p>
                  <p className="font-inter text-[10px] text-white/50 mt-0.5">
                    {lbl}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ════════════════════════════
              RIGHT FORM  (3 of 5 cols)
          ════════════════════════════ */}
          <div className="lg:col-span-3">
            <div className="anim-2 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D9] shadow-sm">
              {/* Form header */}
              <div className="mb-8 pb-6 border-b border-[#F0EBE3]">
                <p className="font-inter text-xs text-[#C9A45C] font-medium tracking-widest uppercase mb-2">
                  Step 1 of 1
                </p>
                <h2 className="font-poppins text-xl font-semibold text-[#1F2E4F]">
                  Your Requirements
                </h2>
                <p className="font-inter text-sm text-[#7A8499] mt-1">
                  All fields are required to ensure we match you correctly.
                </p>
              </div>

              <form onSubmit={submit} noValidate className="space-y-6">
                {/* ── Row 1: Name + Email ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="anim-3 space-y-1.5">
                    <label className="font-inter text-[11px] font-medium text-[#7A8499] tracking-widest uppercase block">
                      Full Name
                    </label>
                    <input
                                          type="text"
                                         
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={set("name")}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      className={fieldClass("name")}
                    />
                    {errors.name && (
                      <p className="font-inter text-[11px] text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="anim-3 space-y-1.5">
                    <label className="font-inter text-[11px] font-medium text-[#7A8499] tracking-widest uppercase block">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={set("email")}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      className={fieldClass("email")}
                    />
                    {errors.email && (
                      <p className="font-inter text-[11px] text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* ── Company Name ── */}
                <div className="anim-4 space-y-1.5">
                  <label className="font-inter text-[11px] font-medium text-[#7A8499] tracking-widest uppercase block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={set("company")}
                    onFocus={() => setFocused("company")}
                    onBlur={() => setFocused("")}
                    className={fieldClass("company")}
                  />
                  {errors.company && (
                    <p className="font-inter text-[11px] text-red-400">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* ── Service Dropdown ── */}
                <div className="anim-4 space-y-1.5">
                  <label className="font-inter text-[11px] font-medium text-[#7A8499] tracking-widest uppercase block">
                    What Do You Need Help With?
                  </label>
                  <div className="relative">
                    <select
                      value={form.service}
                      onChange={set("service")}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused("")}
                      className={`${fieldClass("service")} appearance-none pr-10 cursor-pointer ${!form.service ? "text-[#B5BEC9]" : "text-[#1A1A1A]"}`}
                    >
                      {SERVICES.map((s) => (
                        <option
                          key={s.value}
                          value={s.value}
                          disabled={s.value === ""}
                        >
                          {s.label}
                        </option>
                      ))}
                    </select>
                    {/* custom chevron */}
                    <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="#C9A45C"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {errors.service && (
                    <p className="font-inter text-[11px] text-red-400">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* ── Team Size (pill selector) ── */}
                <div className="anim-5 space-y-2.5">
                  <label className="font-inter text-[11px] font-medium text-[#7A8499] tracking-widest uppercase block">
                    Team Size Needed
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {TEAM_SIZES.map((ts) => {
                      const active = form.teamSize === ts.value;
                      return (
                        <button
                          type="button"
                          key={ts.value}
                          onClick={() => pick("teamSize", ts.value)}
                          className={`
                            relative rounded-xl py-3.5 px-2 text-center border transition-all duration-200 cursor-pointer
                            ${
                              active
                                ? "border-[#C9A45C] bg-[#C9A45C]/5 shadow-sm"
                                : "border-[#E4DDD4] bg-white hover:border-[#C9A45C]/50 hover:bg-[#F7F3EE]"
                            }
                          `}
                        >
                          {active && (
                            <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#C9A45C]" />
                          )}
                          <p
                            className={`font-poppins text-base font-semibold ${active ? "text-[#C9A45C]" : "text-[#1F2E4F]"}`}
                          >
                            {ts.label}
                          </p>
                          <p className="font-inter text-[10px] text-[#7A8499] mt-0.5">
                            {ts.sub}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                  {errors.teamSize && (
                    <p className="font-inter text-[11px] text-red-400">
                      {errors.teamSize}
                    </p>
                  )}
                </div>

                {/* ── Project Description ── */}
                <div className="anim-6 space-y-1.5">
                  <label className="font-inter text-[11px] font-medium text-[#7A8499] tracking-widest uppercase block">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, current challenges, and what success looks like for you…"
                    value={form.description}
                    onChange={set("description")}
                    onFocus={() => setFocused("description")}
                    onBlur={() => setFocused("")}
                    className={`${fieldClass("description")} resize-none leading-relaxed`}
                  />
                  <div className="flex justify-between items-center">
                    {errors.description ? (
                      <p className="font-inter text-[11px] text-red-400">
                        {errors.description}
                      </p>
                    ) : (
                      <span />
                    )}
                    <p className="font-inter text-[11px] text-[#B5BEC9] text-right">
                      {form.description.length}/500
                    </p>
                  </div>
                </div>

                {/* ── Preferred Meeting Time ── */}
                <div className="anim-7 space-y-2.5">
                  <label className="font-inter text-[11px] font-medium text-[#7A8499] tracking-widest uppercase block">
                    Preferred Meeting Time
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {TIMES.map((t) => {
                      const active = form.meetingTime === t.value;
                      return (
                        <button
                          type="button"
                          key={t.value}
                          onClick={() => pick("meetingTime", t.value)}
                          className={`
                            relative rounded-xl py-4 px-3 text-center border transition-all duration-200 cursor-pointer
                            ${
                              active
                                ? "border-[#C9A45C] bg-[#C9A45C]/5 shadow-sm"
                                : "border-[#E4DDD4] bg-white hover:border-[#C9A45C]/50 hover:bg-[#F7F3EE]"
                            }
                          `}
                        >
                          {/* time icon */}
                          <span className="text-lg block mb-1">
                            {t.value === "morning"
                              ? "🌅"
                              : t.value === "afternoon"
                                ? "☀️"
                                : "🌆"}
                          </span>
                          <p
                            className={`font-poppins text-xs font-semibold ${active ? "text-[#C9A45C]" : "text-[#1F2E4F]"}`}
                          >
                            {t.label}
                          </p>
                          <p className="font-inter text-[10px] text-[#7A8499] mt-0.5">
                            {t.time}
                          </p>
                          {active && (
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#C9A45C]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {errors.meetingTime && (
                    <p className="font-inter text-[11px] text-red-400">
                      {errors.meetingTime}
                    </p>
                  )}
                </div>

                {/* ── Divider ── */}
                <div className="border-t border-[#F0EBE3]" />

                {/* ── Submit ── */}
                <div className="anim-8 space-y-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`
                      w-full flex items-center justify-center gap-2.5
                      font-poppins text-sm font-semibold text-white
                      rounded-xl py-4 px-6
                      transition-all duration-200
                      ${
                        status === "loading"
                          ? "bg-[#1F2E4F]/70 cursor-not-allowed"
                          : "bg-[#1F2E4F] hover:bg-[#C9A45C] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A45C]/25 cursor-pointer"
                      }
                    `}
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          viewBox="0 0 24 24"
                        />
                        Sending your request…
                      </>
                    ) : (
                      <>
                        Submit Request
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="font-inter text-[11.5px] text-[#B5BEC9] text-center leading-relaxed">
                    By submitting, you agree to our{" "}
                    <span className="text-[#C9A45C] cursor-pointer hover:underline">
                      Privacy Policy
                    </span>
                    . No spam, ever.
                  </p>
                </div>
              </form>
            </div>
          </div>
          {/* ── end grid ── */}
        </div>
      </div>
    </div>
  );
}
