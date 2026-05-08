import { useState, useRef, useCallback } from "react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────

/** Dropdown options for role selection */
const ROLES = [
  { value: "", label: "Select a role…" },
  { value: "frontend", label: "Frontend Developer" },
  { value: "backend", label: "Backend Developer" },
  { value: "support", label: "Customer Support" },
  { value: "marketing", label: "Marketing" },
  { value: "other", label: "Other" },
];

/** Experience level quick-select options */
const EXP_OPTIONS = [
  { value: "0-1", label: "0–1 yr", sub: "Fresher" },
  { value: "1-3", label: "1–3 yrs", sub: "Junior" },
  { value: "3-6", label: "3–6 yrs", sub: "Mid" },
  { value: "6+", label: "6+ yrs", sub: "Senior" },
];

/** Suggested skill tags shown as quick-add chips */
const SUGGESTED_SKILLS = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Figma",
  "SEO",
  "Tailwind CSS",
  "AWS",
  "Customer Support",
  "Copywriting",
];

// ─────────────────────────────────────────────
// HELPER: Input class generator
// ─────────────────────────────────────────────
const inputCls = (focused, error) =>
  `w-full px-4 py-3 text-gray-900 rounded-xl border text-sm outline-none transition-all duration-200 bg-white font-inter placeholder-[#B5BEC9] 
  ${
    error
      ? "border-red-400 ring-2 ring-red-100"
      : focused
        ? "border-[#C9A45C] ring-2 ring-[#C9A45C]/12 shadow-sm"
        : "border-[#E4DDD4] hover:border-[#C9A45C]/50"
  }`;

// ─────────────────────────────────────────────
// SUB-COMPONENT: Field Label
// ─────────────────────────────────────────────
const Label = ({ children, required = true }) => (
  <label className="font-inter text-[11px] font-medium text-[#7A8499] tracking-widest uppercase flex items-center gap-1">
    {children}
    {required && <span className="text-[#C9A45C] text-[10px]">*</span>}
  </label>
);

// ─────────────────────────────────────────────
// SUB-COMPONENT: Error message
// ─────────────────────────────────────────────
const ErrMsg = ({ msg }) =>
  msg ? (
    <p className="font-inter text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <circle cx="5" cy="5" r="4.5" stroke="#f87171" />
        <path
          d="M5 3v2.5M5 7h.01"
          stroke="#f87171"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      {msg}
    </p>
  ) : null;

// ─────────────────────────────────────────────
// SUB-COMPONENT: Section divider with label
// ─────────────────────────────────────────────
const SectionDivider = ({ label }) => (
  <div className="flex items-center gap-3 py-2">
    <div className="flex-1 h-px bg-[#F0EBE3]" />
    <span className="font-poppins text-[10px] font-semibold text-[#C9A45C] tracking-widest uppercase">
      {label}
    </span>
    <div className="flex-1 h-px bg-[#F0EBE3]" />
  </div>
);

// ─────────────────────────────────────────────
// SUB-COMPONENT: Progress steps indicator
// ─────────────────────────────────────────────
const ProgressSteps = ({ currentStep = 1, totalSteps = 3 }) => {
  const stepLabels = ["Personal Info", "Experience", "Final Step"];
  return (
    <div className="flex items-center gap-0 mb-8">
      {stepLabels.map((label, i) => {
        const step = i + 1;
        const done = step < currentStep;
        const active = step === currentStep;
        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            {/* Circle */}
            <div className="flex flex-col items-center gap-1">
              <div
                className={`
                w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold font-poppins
                transition-all duration-300
                ${
                  done
                    ? "bg-[#C9A45C] text-white"
                    : active
                      ? "bg-[#1F2E4F] text-white ring-2 ring-[#1F2E4F]/20 ring-offset-2"
                      : "bg-[#F0EBE3] text-[#B5BEC9]"
                }
              `}
              >
                {done ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6.5l2.5 2.5 4.5-5"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span
                className={`font-inter text-[9px] tracking-wide uppercase hidden sm:block ${active ? "text-[#1F2E4F] font-medium" : "text-[#B5BEC9]"}`}
              >
                {label}
              </span>
            </div>
            {/* Connector line */}
            {i < stepLabels.length - 1 && (
              <div
                className={`flex-1 h-px mx-2 mb-4 transition-all duration-500 ${done ? "bg-[#C9A45C]" : "bg-[#E8E2D9]"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

// ─────────────────────────────────────────────
// SUB-COMPONENT: Resume Upload Zone
// ─────────────────────────────────────────────
const ResumeUpload = ({ value, onChange, error }) => {
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);

  /* Handle drag events */
  const onDragOver = (e) => {
    e.preventDefault();
    setDrag(true);
  };
  const onDragLeave = () => setDrag(false);
  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDrag(false);
      const file = e.dataTransfer.files[0];
      if (file) onChange(file);
    },
    [onChange],
  );

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onChange(file);
  };

  /* Format file size */
  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div>
      {value ? (
        /* ── File selected state ── */
        <div
          className={`
          flex items-center gap-3 p-4 rounded-xl border
          border-[#C9A45C]/40 bg-[#C9A45C]/5
        `}
        >
          {/* PDF icon */}
          <div className="w-10 h-10 rounded-lg bg-[#C9A45C]/15 flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect
                x="3"
                y="1"
                width="11"
                height="14"
                rx="1.5"
                fill="#C9A45C"
                fillOpacity=".2"
              />
              <rect
                x="3"
                y="1"
                width="11"
                height="14"
                rx="1.5"
                stroke="#C9A45C"
                strokeWidth="1.2"
              />
              <path
                d="M9 14v3l2-1 2 1v-3"
                stroke="#C9A45C"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6h5M6 8.5h5M6 11h3"
                stroke="#C9A45C"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-poppins text-sm font-medium text-[#1F2E4F] truncate">
              {value.name}
            </p>
            <p className="font-inter text-xs text-[#7A8499] mt-0.5">
              {formatSize(value.size)}
            </p>
          </div>
          {/* Remove button */}
          <button
            type="button"
            onClick={() => onChange(null)}
            className="w-7 h-7 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Remove file"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M3 3l6 6M9 3l-6 6"
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      ) : (
        /* ── Drop zone ── */
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`
            cursor-pointer rounded-xl border-2 border-dashed px-6 py-8 text-center
            transition-all duration-200
            ${
              error
                ? "border-red-300 bg-red-50/50"
                : drag
                  ? "border-[#C9A45C] bg-[#C9A45C]/5 scale-[1.01]"
                  : "border-[#E4DDD4] hover:border-[#C9A45C]/60 hover:bg-[#F7F3EE]/80"
            }
          `}
        >
          {/* Upload icon */}
          <div
            className={`
            w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center
            transition-colors duration-200
            ${drag ? "bg-[#C9A45C]/15" : "bg-[#F0EBE3]"}
          `}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 14V4M7 8l4-4 4 4"
                stroke={drag ? "#C9A45C" : "#7A8499"}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 17v1a1 1 0 001 1h14a1 1 0 001-1v-1"
                stroke={drag ? "#C9A45C" : "#7A8499"}
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="font-poppins text-sm font-medium text-[#1F2E4F] mb-1">
            {drag ? "Drop your file here" : "Upload your resume"}
          </p>
          <p className="font-inter text-xs text-[#7A8499]">
            Drag & drop or{" "}
            <span className="text-[#C9A45C] font-medium">browse files</span>
          </p>
          <p className="font-inter text-[10px] text-[#B5BEC9] mt-2">
            PDF, DOC, DOCX · Max 5MB
          </p>
        </div>
      )}

      {/* Hidden native file input */}
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={onFileChange}
        className="hidden"
        aria-hidden="true"
      />
      <ErrMsg msg={error} />
    </div>
  );
};

// ─────────────────────────────────────────────
// SUB-COMPONENT: Skills Tags Input
// ─────────────────────────────────────────────
const SkillsInput = ({ tags, onAdd, onRemove, error }) => {
  const [inputVal, setInputVal] = useState("");

  /* Add tag on Enter or comma */
  const handleKey = (e) => {
    if ((e.key === "Enter" || e.key === ",") && inputVal.trim()) {
      e.preventDefault();
      const skill = inputVal.replace(",", "").trim();
      if (skill && !tags.includes(skill)) onAdd(skill);
      setInputVal("");
    }
  };

  /* Add on blur if value remains */
  const handleBlur = () => {
    if (inputVal.trim()) {
      const skill = inputVal.replace(",", "").trim();
      if (skill && !tags.includes(skill)) onAdd(skill);
      setInputVal("");
    }
  };

  return (
    <div className="space-y-3">
      {/* Tags display + text input combined */}
      <div
        className={`
        min-h-[48px] px-3 py-2.5 rounded-xl border transition-all duration-200 bg-white
        flex flex-wrap gap-2 items-center
        ${
          error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-[#E4DDD4] focus-within:border-[#C9A45C] focus-within:ring-2 focus-within:ring-[#C9A45C]/12"
        }
      `}
      >
        {/* Existing tags */}
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 bg-[#1F2E4F]/8 text-[#1F2E4F] rounded-lg px-2.5 py-1 text-xs font-medium font-inter"
          >
            {tag}
            <button
              type="button"
              onClick={() => onRemove(tag)}
              className="text-[#7A8499] hover:text-red-400 transition-colors leading-none"
              aria-label={`Remove ${tag}`}
            >
              ×
            </button>
          </span>
        ))}

        {/* Text input */}
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKey}
          onBlur={handleBlur}
          placeholder={
            tags.length === 0 ? "Type a skill and press Enter…" : "Add more…"
          }
          className="flex-1 min-w-[140px] outline-none bg-transparent text-sm font-inter text-[#1A1A1A] placeholder-[#B5BEC9]"
        />
      </div>

      {/* Suggested chips */}
      <div className="flex flex-wrap gap-2">
        <span className="font-inter text-[10px] text-[#B5BEC9] tracking-wide self-center">
          Quick add:
        </span>
        {SUGGESTED_SKILLS.filter((s) => !tags.includes(s))
          .slice(0, 6)
          .map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => onAdd(s)}
              className="font-inter text-[11px] text-[#7A8499] border border-[#E4DDD4] rounded-lg px-2.5 py-1 hover:border-[#C9A45C]/50 hover:text-[#C9A45C] hover:bg-[#F7F3EE] transition-all duration-150"
            >
              + {s}
            </button>
          ))}
      </div>

      <ErrMsg msg={error} />
    </div>
  );
};

// ─────────────────────────────────────────────
// SUB-COMPONENT: Success Screen
// ─────────────────────────────────────────────
const SuccessScreen = ({ name, onReset }) => (
  <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center px-5 py-20">
    {/* Confetti-like decorative dots */}
    <div className="relative w-full max-w-lg">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#C9A45C]/8 to-[#1F2E4F]/5 blur-2xl scale-110" />

      <div className="bg-white rounded-3xl p-10 md:p-14 text-center shadow-xl border border-[#E8E2D9] relative overflow-hidden">
        {/* Top decorative strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A45C] via-[#E8C97E] to-[#C9A45C]" />

        {/* ── Animated check circle ── */}
        <div className="relative inline-flex items-center justify-center mb-6">
          {/* Outer ring */}
          <div className="w-20 h-20 rounded-full border-2 border-[#C9A45C]/20 absolute animate-ping opacity-30" />
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A45C]/15 to-[#C9A45C]/5 border border-[#C9A45C]/25 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#C9A45C] flex items-center justify-center shadow-lg shadow-[#C9A45C]/30">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M5 11.5l4 4 8-8"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Heading ── */}
        <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-[#1F2E4F] mb-3">
          Application Submitted ✅
        </h2>

        {/* ── Message ── */}
        <p className="font-inter text-sm text-[#7A8499] leading-relaxed mb-2 max-w-sm mx-auto">
          Thanks for applying,{" "}
          <span className="font-medium text-[#1F2E4F]">{name}</span>! Our team
          will review your profile and get back to you soon.
        </p>
        <p className="font-inter text-xs text-[#B5BEC9] mb-8">
          Typical response time: 2–3 business days
        </p>

        {/* ── Info pills ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { icon: "📧", text: "Check your email" },
            { icon: "⏱", text: "2–3 day review" },
            { icon: "🤝", text: "Personal match" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 bg-[#F7F3EE] rounded-xl px-4 py-2 border border-[#E8E2D9]"
            >
              <span className="text-sm">{item.icon}</span>
              <span className="font-inter text-xs text-[#7A8499]">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <a
          href="/opportunities"
          className="
            inline-flex items-center gap-2
            font-poppins text-sm font-semibold text-white
            bg-[#1F2E4F] hover:bg-[#C9A45C]
            rounded-xl px-8 py-3.5
            transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A45C]/25
            group
          "
        >
          Explore Opportunities
          {/* Arrow icon — slides right on hover */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* ── Secondary: submit another ── */}
        <div className="mt-4">
          <button
            onClick={onReset}
            className="font-inter text-xs text-[#B5BEC9] hover:text-[#C9A45C] transition-colors underline underline-offset-4"
          >
            Submit another application
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// MAIN COMPONENT: ApplyForm
// ─────────────────────────────────────────────
export default function ApplyForm() {
  /* ── Form state ── */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    skills: [], // array of tag strings
    resume: null, // File object
    portfolio: "",
    whyUs: "",
  });

  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  /* ── Field setter helpers ── */
  const setField = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const pick = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  /* ── Skills tag handlers ── */
  const addSkill = (skill) => {
    setForm((f) => ({ ...f, skills: [...f.skills, skill] }));
    if (errors.skills) setErrors((er) => ({ ...er, skills: undefined }));
  };
  const removeSkill = (skill) =>
    setForm((f) => ({ ...f, skills: f.skills.filter((s) => s !== skill) }));

  /* ── Resume handler ── */
  const setResume = (file) => {
    setForm((f) => ({ ...f, resume: file }));
    if (errors.resume) setErrors((er) => ({ ...er, resume: undefined }));
  };

  /* ── Validation ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.role) e.role = "Please select a role.";
    if (!form.experience) e.experience = "Select your experience level.";
    if (form.skills.length < 1) e.skills = "Add at least one skill.";
    if (!form.resume) e.resume = "Please upload your resume.";
    if (!form.whyUs.trim()) e.whyUs = "This field is required — tell us why!";
    return e;
  };

  /* ── Submit handler ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      // Scroll to first error field
      const firstErrField = document.querySelector("[data-field-error]");
      firstErrField?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
      }
      console.log(form)
    setStatus("loading");
    // Simulate async submission (replace with real API call)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  /* ── Reset ── */
  const reset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      role: "",
      experience: "",
      skills: [],
      resume: null,
      portfolio: "",
      whyUs: "",
    });
    setErrors({});
    setStatus("idle");
  };

  // ── Render Success ──
  if (status === "success") {
    return (
      <>
        <style>{FONT_STYLE}</style>
        <SuccessScreen name={form.name} onReset={reset} />
      </>
    );
  }

  // ─────────────────────────────────────────────
  // RENDER: Main Form
  // ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <style>{FONT_STYLE + ANIM_STYLE}</style>

      <div className="max-w-6xl mx-auto px-5 py-14 lg:py-20">
        {/* ════════════════════════════════════════
            PAGE GRID — Left info panel + Right form
        ════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* ──────────────────────────────────────
              LEFT PANEL  (2 of 5 columns)
              Sticky on desktop, stacks on mobile
          ────────────────────────────────────── */}
          <aside className="lg:col-span-2 space-y-5 lg:sticky lg:top-24">
            {/* ── Brand intro card ── */}
            <div className="anim-1 bg-white rounded-3xl p-8 border border-[#E8E2D9] shadow-sm">
              {/* Gold accent bar */}
              <div className="w-9 h-[3px] bg-[#C9A45C] rounded-full mb-5" />

              <h1 className="font-poppins text-[clamp(1.55rem,3vw,2rem)] font-semibold text-[#1F2E4F] leading-tight mb-4">
                Apply to Join <span className="text-[#C9A45C]">Alph Knot</span>
              </h1>
              <p className="font-inter text-sm text-[#7A8499] leading-relaxed">
                Tell us about your skills and experience. We'll review your
                application and match you with the right opportunities.
              </p>
            </div>

            {/* ── Why join cards ── */}
            {[
              {
                icon: "🌍",
                title: "Global Opportunities",
                body: "Work with companies across 12+ countries.",
              },
              {
                icon: "💼",
                title: "Matched to Your Skills",
                body: "We find roles that align with your expertise.",
              },
              {
                icon: "🚀",
                title: "Fast-Track Onboarding",
                body: "Get placed and productive in days, not months.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`anim-${i + 2} bg-white rounded-2xl px-5 py-4 border border-[#E8E2D9] flex gap-4 items-start shadow-sm hover:border-[#C9A45C]/40 hover:shadow-md transition-all duration-200`}
              >
                <span className="text-xl mt-0.5 flex-shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="font-poppins text-sm font-semibold text-[#1F2E4F] mb-0.5">
                    {item.title}
                  </p>
                  <p className="font-inter text-xs text-[#7A8499] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}

            {/* ── Stats strip ── */}
            <div className="anim-5 grid grid-cols-3 gap-3">
              {[
                ["200+", "Placed"],
                ["98%", "Retention"],
                ["4 days", "Avg. hire"],
              ].map(([val, lbl]) => (
                <div
                  key={lbl}
                  className="bg-[#1F2E4F] rounded-2xl px-2 py-4 text-center"
                >
                  <p className="font-poppins text-base font-semibold text-[#C9A45C] leading-tight">
                    {val}
                  </p>
                  <p className="font-inter text-[9.5px] text-white/45 mt-1">
                    {lbl}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          {/* ──────────────────────────────────────
              RIGHT FORM  (3 of 5 columns)
          ────────────────────────────────────── */}
          <main className="lg:col-span-3">
            <div className="anim-2 bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D9] shadow-sm">
              {/* ── Form header + progress ── */}
              <div className="mb-7">
                <p className="font-inter text-xs text-[#C9A45C] font-medium tracking-widest uppercase mb-1">
                  Careers at Alph Knot
                </p>
                <h2 className="font-poppins text-xl font-semibold text-[#1F2E4F] mb-5">
                  Your Application
                </h2>
                {/* 3-step progress bar */}
                <ProgressSteps currentStep={1} totalSteps={3} />
              </div>

              {/* ════════════════════════════
                  THE FORM
              ════════════════════════════ */}
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* ╔══════════════════════╗
                    SECTION 1: Personal Info
                    ╚══════════════════════╝ */}
                <SectionDivider label="Personal Info" />

                {/* Row: Full Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div
                    className="anim-3 space-y-1.5"
                    data-field-error={errors.name ? true : undefined}
                  >
                    <Label>Full Name</Label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={setField("name")}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      className={inputCls(focused === "name", errors.name)}
                    />
                    <ErrMsg msg={errors.name} />
                  </div>

                  {/* Email Address */}
                  <div
                    className="anim-3 space-y-1.5"
                    data-field-error={errors.email ? true : undefined}
                  >
                    <Label>Email Address</Label>
                    <input
                      type="email"
                      placeholder="jane@email.com"
                      value={form.email}
                      onChange={setField("email")}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      className={inputCls(focused === "email", errors.email)}
                    />
                    <ErrMsg msg={errors.email} />
                  </div>
                </div>

                {/* Phone Number */}
                <div
                  className="anim-4 space-y-1.5"
                  data-field-error={errors.phone ? true : undefined}
                >
                  <Label>Phone Number</Label>
                  <div className="relative">
                    {/* Phone icon */}
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B5BEC9]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M2 2.5A1.5 1.5 0 013.5 1h1.07a1 1 0 01.97.757l.5 2a1 1 0 01-.29.97l-.88.879a9.065 9.065 0 004.523 4.523l.88-.88a1 1 0 01.969-.29l2 .5a1 1 0 01.757.97V13.5A1.5 1.5 0 0112.5 15C6.701 15 1 9.299 1 3.5A1.5 1.5 0 012 2.5z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={setField("phone")}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      className={`${inputCls(focused === "phone", errors.phone)} pl-9`}
                    />
                  </div>
                  <ErrMsg msg={errors.phone} />
                </div>

                {/* ╔══════════════════════╗
                    SECTION 2: Experience
                    ╚══════════════════════╝ */}
                <SectionDivider label="Experience & Skills" />

                {/* Role Dropdown */}
                <div
                  className="anim-4 space-y-1.5"
                  data-field-error={errors.role ? true : undefined}
                >
                  <Label>Role Applying For</Label>
                  <div className="relative">
                    <select
                      value={form.role}
                      onChange={setField("role")}
                      onFocus={() => setFocused("role")}
                      onBlur={() => setFocused("")}
                      className={`
                        ${inputCls(focused === "role", errors.role)}
                        appearance-none pr-10 cursor-pointer
                        ${!form.role ? "text-[#B5BEC9]" : "text-[#1A1A1A]"}
                      `}
                    >
                      {ROLES.map((r) => (
                        <option
                          key={r.value}
                          value={r.value}
                          disabled={r.value === ""}
                        >
                          {r.label}
                        </option>
                      ))}
                    </select>
                    {/* Custom chevron */}
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
                  <ErrMsg msg={errors.role} />
                </div>

                {/* Years of Experience — pill selector */}
                <div
                  className="anim-5 space-y-2.5"
                  data-field-error={errors.experience ? true : undefined}
                >
                  <Label>Years of Experience</Label>
                  <div className="grid grid-cols-4 gap-3">
                    {EXP_OPTIONS.map((opt) => {
                      const active = form.experience === opt.value;
                      return (
                        <button
                          type="button"
                          key={opt.value}
                          onClick={() => pick("experience", opt.value)}
                          className={`
                            relative rounded-xl py-3.5 px-2 text-center border
                            transition-all duration-200 cursor-pointer
                            ${
                              active
                                ? "border-[#C9A45C] bg-[#C9A45C]/6 shadow-sm"
                                : "border-[#E4DDD4] bg-white hover:border-[#C9A45C]/50 hover:bg-[#F7F3EE]"
                            }
                          `}
                        >
                          {/* Active indicator dot */}
                          {active && (
                            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                          )}
                          <p
                            className={`font-poppins text-sm font-semibold ${active ? "text-[#C9A45C]" : "text-[#1F2E4F]"}`}
                          >
                            {opt.label}
                          </p>
                          <p className="font-inter text-[10px] text-[#7A8499] mt-0.5">
                            {opt.sub}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                  <ErrMsg msg={errors.experience} />
                </div>

                {/* Skills Tags Input */}
                <div
                  className="anim-5 space-y-1.5"
                  data-field-error={errors.skills ? true : undefined}
                >
                  <Label>Skills</Label>
                  <SkillsInput
                    tags={form.skills}
                    onAdd={addSkill}
                    onRemove={removeSkill}
                    error={errors.skills}
                  />
                </div>

                {/* ╔══════════════════════╗
                    SECTION 3: Documents
                    ╚══════════════════════╝ */}
                <SectionDivider label="Documents & Links" />

                {/* Resume Upload */}
                <div
                  className="anim-6 space-y-1.5"
                  data-field-error={errors.resume ? true : undefined}
                >
                  <Label>Resume / CV</Label>
                  <ResumeUpload
                    value={form.resume}
                    onChange={setResume}
                    error={errors.resume}
                  />
                </div>

                {/* Portfolio / LinkedIn URL */}
                <div className="anim-6 space-y-1.5">
                  <Label required={false}>Portfolio / LinkedIn URL</Label>
                  <div className="relative">
                    {/* Link icon */}
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B5BEC9]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.5 8.5a3.5 3.5 0 005 0l2-2a3.5 3.5 0 00-5-5l-1 1"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8.5 5.5a3.5 3.5 0 00-5 0l-2 2a3.5 3.5 0 005 5l1-1"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/yourname"
                      value={form.portfolio}
                      onChange={setField("portfolio")}
                      onFocus={() => setFocused("portfolio")}
                      onBlur={() => setFocused("")}
                      className={`${inputCls(focused === "portfolio", false)} pl-9`}
                    />
                  </div>
                  {/* Optional badge */}
                  <p className="font-inter text-[10.5px] text-[#B5BEC9]">
                    Optional  but helps us understand your work better.
                  </p>
                </div>

                {/* ╔══════════════════════╗
                    SECTION 4: Final Step
                    ╚══════════════════════╝ */}
                <SectionDivider label="Final Step" />

                {/* Why should we hire you */}
                <div
                  className="anim-7 space-y-1.5"
                  data-field-error={errors.whyUs ? true : undefined}
                >
                  <Label>Why Should We Hire You?</Label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what makes you unique, what drives you, and why Alph Knot is the right fit for you…"
                    value={form.whyUs}
                    onChange={setField("whyUs")}
                    onFocus={() => setFocused("whyUs")}
                    onBlur={() => setFocused("")}
                    className={`${inputCls(focused === "whyUs", errors.whyUs)} resize-none leading-relaxed`}
                  />
                  {/* Character count */}
                  <div className="flex justify-between items-start">
                    <ErrMsg msg={errors.whyUs} />
                    <p
                      className={`font-inter text-[11px] ml-auto ${form.whyUs.length > 450 ? "text-amber-400" : "text-[#B5BEC9]"}`}
                    >
                      {form.whyUs.length}/500
                    </p>
                  </div>
                </div>

                {/* ── Form divider ── */}
                <div className="border-t border-[#F0EBE3]" />

                {/* ── Submit button area ── */}
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
                          ? "bg-[#1F2E4F]/60 cursor-not-allowed"
                          : "bg-[#1F2E4F] hover:bg-[#C9A45C] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A45C]/25 cursor-pointer active:scale-[0.99]"
                      }
                    `}
                  >
                    {status === "loading" ? (
                      <>
                        {/* Spinner */}
                        <svg
                          className="spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          viewBox="0 0 24 24"
                        />
                        Submitting Application…
                      </>
                    ) : (
                      <>
                        Submit Application
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

                  {/* Privacy note */}
                  <p className="font-inter text-[11.5px] text-[#B5BEC9] text-center leading-relaxed">
                    By submitting, you agree to our{" "}
                    <span className="text-[#C9A45C] cursor-pointer hover:underline">
                      Privacy Policy
                    </span>{" "}
                    · Your data is never sold or shared.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// STYLES (injected via <style> tag)
// ─────────────────────────────────────────────

/** Google Fonts + utility class aliases */
const FONT_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap');
  .font-poppins { font-family: 'Poppins', sans-serif; }
  .font-inter   { font-family: 'Inter',   sans-serif; }
  input::placeholder, textarea::placeholder { color: #B5BEC9; font-family: 'Inter', sans-serif; }
`;

/** Staggered fade-up entrance animations */
const ANIM_STYLE = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  .anim-1 { animation: fadeUp 0.5s ease both 0.04s; }
  .anim-2 { animation: fadeUp 0.5s ease both 0.10s; }
  .anim-3 { animation: fadeUp 0.5s ease both 0.16s; }
  .anim-4 { animation: fadeUp 0.5s ease both 0.22s; }
  .anim-5 { animation: fadeUp 0.5s ease both 0.28s; }
  .anim-6 { animation: fadeUp 0.5s ease both 0.34s; }
  .anim-7 { animation: fadeUp 0.5s ease both 0.40s; }
  .anim-8 { animation: fadeUp 0.5s ease both 0.46s; }

  /* Loading spinner */
  @keyframes spin { to { transform: rotate(360deg); } }
  .spin { animation: spin 0.75s linear infinite; }

  /* Ping for success screen */
  @keyframes ping {
    75%, 100% { transform: scale(1.8); opacity: 0; }
  }
  .animate-ping { animation: ping 1.5s cubic-bezier(0,0,0.2,1) infinite; }
`;
