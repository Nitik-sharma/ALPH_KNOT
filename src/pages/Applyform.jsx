import { useState, useRef, useCallback } from "react";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────

const ROLES = [
  { value: "", label: "Select a role…" },
  { value: "frontend", label: "Frontend Developer" },
  { value: "backend", label: "Backend Developer" },
  { value: "support", label: "Customer Support" },
  { value: "marketing", label: "Marketing" },
  { value: "other", label: "Other" },
];

const EXP_OPTIONS = [
  { value: "0-1", label: "0–1 yr", sub: "Fresher" },
  { value: "1-3", label: "1–3 yrs", sub: "Junior" },
  { value: "3-6", label: "3–6 yrs", sub: "Mid" },
  { value: "6+", label: "6+ yrs", sub: "Senior" },
];

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
// HELPER: Input class builder
// ─────────────────────────────────────────────

/**
 * Returns Tailwind classes for a text input based on focus/error state.
 * @param {boolean} focused - Is the field currently focused?
 * @param {string|undefined} error - Error message if validation failed
 */
const inputCls = (focused, error) =>
  [
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200",
    "bg-white text-gray-900 placeholder-[#B5BEC9]",
    error
      ? "border-red-400 ring-2 ring-red-100"
      : focused
        ? "border-[#C9A45C] ring-2 ring-[#C9A45C]/10 shadow-sm"
        : "border-[#E4DDD4] hover:border-[#C9A45C]/50",
  ].join(" ");

// ─────────────────────────────────────────────
// SMALL REUSABLE COMPONENTS
// ─────────────────────────────────────────────

/** Field label with optional required asterisk */
const Label = ({ children, required = true }) => (
  <label className="text-[11px] font-medium text-[#7A8499] tracking-widest uppercase flex items-center gap-1">
    {children}
    {required && <span className="text-[#C9A45C] text-[10px]">*</span>}
  </label>
);

/** Inline validation error message */
const ErrorMsg = ({ msg }) =>
  msg ? (
    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-0.5">
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

/** Horizontal divider with a centered label */
const SectionDivider = ({ label }) => (
  <div className="flex items-center gap-3 py-2">
    <div className="flex-1 h-px bg-[#F0EBE3]" />
    <span className="text-[10px] font-semibold text-[#C9A45C] tracking-widest uppercase">
      {label}
    </span>
    <div className="flex-1 h-px bg-[#F0EBE3]" />
  </div>
);

// ─────────────────────────────────────────────
// PROGRESS STEPS
// ─────────────────────────────────────────────

/**
 * 3-step progress indicator shown at the top of the form.
 * @param {number} currentStep - Which step is active (1-indexed)
 */
const ProgressSteps = ({ currentStep = 1 }) => {
  const steps = ["Personal Info", "Experience", "Final Step"];

  return (
    <div className="flex items-center mb-8">
      {steps.map((label, i) => {
        const step = i + 1;
        const isDone = step < currentStep;
        const isActive = step === currentStep;

        return (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            {/* Circle indicator */}
            <div className="flex flex-col items-center gap-1">
              <div
                className={[
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300",
                  isDone
                    ? "bg-[#C9A45C] text-white"
                    : isActive
                      ? "bg-[#1F2E4F] text-white ring-2 ring-[#1F2E4F]/20 ring-offset-2"
                      : "bg-[#F0EBE3] text-[#B5BEC9]",
                ].join(" ")}
              >
                {isDone ? (
                  // Checkmark for completed steps
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
              {/* Label — hidden on very small screens */}
              <span
                className={[
                  "text-[9px] tracking-wide uppercase hidden sm:block",
                  isActive ? "text-[#1F2E4F] font-medium" : "text-[#B5BEC9]",
                ].join(" ")}
              >
                {label}
              </span>
            </div>

            {/* Connector line between steps */}
            {i < steps.length - 1 && (
              <div
                className={[
                  "flex-1 h-px mx-2 mb-4 transition-all duration-500",
                  isDone ? "bg-[#C9A45C]" : "bg-[#E8E2D9]",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

// ─────────────────────────────────────────────
// RESUME UPLOAD
// ─────────────────────────────────────────────

/**
 * Drag-and-drop / click-to-browse file upload zone.
 * Shows a file preview card once a file is selected.
 *
 * @param {File|null} value - Currently selected file
 * @param {(file: File|null) => void} onChange - Called when file changes or is removed
 * @param {string|undefined} error - Validation error message
 */
const ResumeUpload = ({ value, onChange, error }) => {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = () => setDragging(false);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) onChange(file);
    },
    [onChange],
  );

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) onChange(file);
  };

  /** Formats bytes → human-readable size */
  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (value) {
    // ── File selected: show preview card ──
    return (
      <div>
        <div className="flex items-center gap-3 p-4 rounded-xl border border-[#C9A45C]/40 bg-[#C9A45C]/5">
          {/* File icon */}
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
                d="M6 6h5M6 8.5h5M6 11h3"
                stroke="#C9A45C"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* File name + size */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#1F2E4F] truncate">
              {value.name}
            </p>
            <p className="text-xs text-[#7A8499] mt-0.5">
              {formatSize(value.size)}
            </p>
          </div>
          {/* Remove button */}
          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="Remove file"
            className="w-7 h-7 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors flex-shrink-0"
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
        <ErrorMsg msg={error} />
      </div>
    );
  }

  // ── No file: show drop zone ──
  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={[
          "cursor-pointer rounded-xl border-2 border-dashed px-6 py-8 text-center transition-all duration-200",
          error
            ? "border-red-300 bg-red-50/50"
            : dragging
              ? "border-[#C9A45C] bg-[#C9A45C]/5 scale-[1.01]"
              : "border-[#E4DDD4] hover:border-[#C9A45C]/60 hover:bg-[#F7F3EE]/80",
        ].join(" ")}
      >
        {/* Upload icon */}
        <div
          className={[
            "w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center transition-colors duration-200",
            dragging ? "bg-[#C9A45C]/15" : "bg-[#F0EBE3]",
          ].join(" ")}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 14V4M7 8l4-4 4 4"
              stroke={dragging ? "#C9A45C" : "#7A8499"}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 17v1a1 1 0 001 1h14a1 1 0 001-1v-1"
              stroke={dragging ? "#C9A45C" : "#7A8499"}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-[#1F2E4F] mb-1">
          {dragging ? "Drop your file here" : "Upload your resume"}
        </p>
        <p className="text-xs text-[#7A8499]">
          Drag & drop or{" "}
          <span className="text-[#C9A45C] font-medium">browse files</span>
        </p>
        <p className="text-[10px] text-[#B5BEC9] mt-2">
          PDF, DOC, DOCX · Max 5MB
        </p>
      </div>

      {/* Hidden native file input */}
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileInput}
        className="hidden"
        aria-hidden="true"
      />
      <ErrorMsg msg={error} />
    </div>
  );
};

// ─────────────────────────────────────────────
// SKILLS TAG INPUT
// ─────────────────────────────────────────────

/**
 * Tag-style multi-skill input.
 * Press Enter or comma to add a skill. Click × to remove.
 * Quick-add chips show suggested skills not yet added.
 *
 * @param {string[]} tags - Current skill tags
 * @param {(skill: string) => void} onAdd
 * @param {(skill: string) => void} onRemove
 * @param {string|undefined} error
 */
const SkillsInput = ({ tags, onAdd, onRemove, error }) => {
  const [inputVal, setInputVal] = useState("");

  const commitSkill = (raw) => {
    const skill = raw.replace(",", "").trim();
    if (skill && !tags.includes(skill)) onAdd(skill);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commitSkill(inputVal);
    }
  };

  const handleBlur = () => {
    if (inputVal.trim()) commitSkill(inputVal);
  };

  return (
    <div className="space-y-3">
      {/* Combined tags + text input box */}
      <div
        className={[
          "min-h-[48px] px-3 py-2.5 rounded-xl border transition-all duration-200 bg-white",
          "flex flex-wrap gap-2 items-center",
          error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-[#E4DDD4] focus-within:border-[#C9A45C] focus-within:ring-2 focus-within:ring-[#C9A45C]/10",
        ].join(" ")}
      >
        {/* Existing skill tags */}
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 bg-[#1F2E4F]/10 text-[#1F2E4F] rounded-lg px-2.5 py-1 text-xs font-medium"
          >
            {tag}
            <button
              type="button"
              onClick={() => onRemove(tag)}
              aria-label={`Remove ${tag}`}
              className="text-[#7A8499] hover:text-red-400 transition-colors leading-none"
            >
              ×
            </button>
          </span>
        ))}

        {/* Text input for new skills */}
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={
            tags.length === 0 ? "Type a skill and press Enter…" : "Add more…"
          }
          className="flex-1 min-w-[140px] outline-none bg-transparent text-sm text-[#1A1A1A] placeholder-[#B5BEC9]"
        />
      </div>

      {/* Quick-add suggestion chips */}
      <div className="flex flex-wrap gap-2">
        <span className="text-[10px] text-[#B5BEC9] tracking-wide self-center">
          Quick add:
        </span>
        {SUGGESTED_SKILLS.filter((s) => !tags.includes(s))
          .slice(0, 6)
          .map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => onAdd(s)}
              className="text-[11px] text-[#7A8499] border border-[#E4DDD4] rounded-lg px-2.5 py-1 hover:border-[#C9A45C]/50 hover:text-[#C9A45C] hover:bg-[#F7F3EE] transition-all duration-150"
            >
              + {s}
            </button>
          ))}
      </div>

      <ErrorMsg msg={error} />
    </div>
  );
};

// ─────────────────────────────────────────────
// SUCCESS SCREEN
// ─────────────────────────────────────────────

/**
 * Shown after a successful form submission.
 * @param {string} name - Applicant's name to personalise the message
 * @param {() => void} onReset - Resets the form to submit again
 */
const SuccessScreen = ({ name, onReset }) => (
  <div className="min-h-screen bg-[#F7F3EE] flex items-center justify-center px-5 py-20">
    <div className="w-full max-w-lg">
      <div className="bg-white rounded-3xl p-10 md:p-14 text-center border border-[#E8E2D9] relative overflow-hidden shadow-xl">
        {/* Gold top strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A45C] via-[#E8C97E] to-[#C9A45C]" />

        {/* Animated check circle */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/25 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#C9A45C] flex items-center justify-center">
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

        <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2E4F] mb-3">
          Application Submitted ✅
        </h2>
        <p className="text-sm text-[#7A8499] leading-relaxed mb-2 max-w-sm mx-auto">
          Thanks for applying,{" "}
          <span className="font-medium text-[#1F2E4F]">{name}</span>! Our team
          will review your profile and get back to you soon.
        </p>
        <p className="text-xs text-[#B5BEC9] mb-8">
          Typical response time: 2–3 business days
        </p>

        {/* Info pills */}
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
              <span className="text-xs text-[#7A8499]">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/opportunities"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1F2E4F] hover:bg-[#C9A45C] rounded-xl px-8 py-3.5 transition-all duration-200 hover:-translate-y-0.5 group"
        >
          Explore Opportunities
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

        <div className="mt-4">
          <button
            onClick={onReset}
            className="text-xs text-[#B5BEC9] hover:text-[#C9A45C] transition-colors underline underline-offset-4"
          >
            Submit another application
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// LEFT PANEL: Info sidebar
// ─────────────────────────────────────────────

/** Static info/marketing sidebar shown to the left of the form on desktop */
const InfoPanel = () => (
  <aside className="lg:col-span-2 space-y-5 lg:sticky lg:top-24">
    {/* Brand intro card */}
    <div className="bg-white rounded-3xl p-8 border border-[#E8E2D9] shadow-sm">
      <div className="w-9 h-[3px] bg-[#C9A45C] rounded-full mb-5" />
      <h1 className="text-[clamp(1.55rem,3vw,2rem)] font-semibold text-[#1F2E4F] leading-tight mb-4">
        Apply to Join <span className="text-[#C9A45C]">Alph Knot</span>
      </h1>
      <p className="text-sm text-[#7A8499] leading-relaxed">
        Tell us about your skills and experience. We'll review your application
        and match you with the right opportunities.
      </p>
    </div>

    {/* Why join cards */}
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
    ].map((item) => (
      <div
        key={item.title}
        className="bg-white rounded-2xl px-5 py-4 border border-[#E8E2D9] flex gap-4 items-start shadow-sm hover:border-[#C9A45C]/40 hover:shadow-md transition-all duration-200"
      >
        <span className="text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
        <div>
          <p className="text-sm font-semibold text-[#1F2E4F] mb-0.5">
            {item.title}
          </p>
          <p className="text-xs text-[#7A8499] leading-relaxed">{item.body}</p>
        </div>
      </div>
    ))}

    {/* Stats strip */}
    <div className="grid grid-cols-3 gap-3">
      {[
        ["200+", "Placed"],
        ["98%", "Retention"],
        ["4 days", "Avg. hire"],
      ].map(([val, lbl]) => (
        <div
          key={lbl}
          className="bg-[#1F2E4F] rounded-2xl px-2 py-4 text-center"
        >
          <p className="text-base font-semibold text-[#C9A45C] leading-tight">
            {val}
          </p>
          <p className="text-[9.5px] text-white/45 mt-1">{lbl}</p>
        </div>
      ))}
    </div>
  </aside>
);

// ─────────────────────────────────────────────
// MAIN COMPONENT: ApplyForm
// ─────────────────────────────────────────────

export default function ApplyForm() {
  // ── Form field state ──
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "", // one of EXP_OPTIONS values
    skills: [], // array of skill strings
    resume: null, // File object
    portfolio: "",
    whyUs: "",
  });

  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success"

  // ── Generic field updater (for text/email/etc inputs) ──
  const setField = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    // Clear error on change
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  // ── Picker for non-event values (e.g. experience pill buttons) ──
  const pick = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  // ── Skills handlers ──
  const addSkill = (skill) => {
    setForm((f) => ({ ...f, skills: [...f.skills, skill] }));
    if (errors.skills) setErrors((er) => ({ ...er, skills: undefined }));
  };
  const removeSkill = (skill) =>
    setForm((f) => ({ ...f, skills: f.skills.filter((s) => s !== skill) }));

  // ── Resume handler ──
  const setResume = (file) => {
    setForm((f) => ({ ...f, resume: file }));
    if (errors.resume) setErrors((er) => ({ ...er, resume: undefined }));
  };

  // ── Validation: returns object of field → error message ──
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

  // ── Submit ──
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      document
        .querySelector("[data-field-error]")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    try {
      setStatus("loading");

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("role", form.role);
      formData.append("experience", form.experience);
      formData.append("skills", JSON.stringify(form.skills));
      formData.append("portfolio", form.portfolio);
      formData.append("whyUs", form.whyUs);

      if (form.resume) {
        formData.append("resume", form.resume);
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/job-application`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("Form subit ")

      setStatus("success");
    } catch (error) {
      console.error(error);
      alert(error.message);
      setStatus("idle");
    }
  };

  // ── Reset all state ──
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

  // ── Show success screen after submission ──
  if (status === "success") {
    return <SuccessScreen name={form.name} onReset={reset} />;
  }

  // ─────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <div className="max-w-6xl mx-auto px-5 py-14 lg:py-20">
        {/* Page layout: sidebar (2 cols) + form (3 cols) on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* ── Left: Info sidebar ── */}
          <InfoPanel />

          {/* ── Right: Application form ── */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8E2D9] shadow-sm">
              {/* Form header */}
              <div className="mb-7">
                <p className="text-xs text-[#C9A45C] font-medium tracking-widest uppercase mb-1">
                  Careers at Alph Knot
                </p>
                <h2 className="text-xl font-semibold text-[#1F2E4F] mb-5">
                  Your Application
                </h2>
                <ProgressSteps currentStep={1} />
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* ══════════════════════
                    SECTION 1 — Personal Info
                ══════════════════════ */}
                <SectionDivider label="Personal Info" />

                {/* Full Name + Email — 2 columns on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div
                    className="space-y-1.5"
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
                    <ErrorMsg msg={errors.name} />
                  </div>

                  <div
                    className="space-y-1.5"
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
                    <ErrorMsg msg={errors.email} />
                  </div>
                </div>

                {/* Phone — full width with icon */}
                <div
                  className="space-y-1.5"
                  data-field-error={errors.phone ? true : undefined}
                >
                  <Label>Phone Number</Label>
                  <div className="relative">
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
                  <ErrorMsg msg={errors.phone} />
                </div>

                {/* ══════════════════════
                    SECTION 2 — Experience & Skills
                ══════════════════════ */}
                <SectionDivider label="Experience & Skills" />

                {/* Role dropdown */}
                <div
                  className="space-y-1.5"
                  data-field-error={errors.role ? true : undefined}
                >
                  <Label>Role Applying For</Label>
                  <div className="relative">
                    <select
                      value={form.role}
                      onChange={setField("role")}
                      onFocus={() => setFocused("role")}
                      onBlur={() => setFocused("")}
                      className={[
                        inputCls(focused === "role", errors.role),
                        "appearance-none pr-10 cursor-pointer",
                        !form.role ? "text-[#B5BEC9]" : "text-[#1A1A1A]",
                      ].join(" ")}
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
                    {/* Custom chevron icon */}
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
                  <ErrorMsg msg={errors.role} />
                </div>

                {/* Experience level — 4 pill buttons */}
                <div
                  className="space-y-2.5"
                  data-field-error={errors.experience ? true : undefined}
                >
                  <Label>Years of Experience</Label>
                  <div className="grid grid-cols-4 gap-3">
                    {EXP_OPTIONS.map((opt) => {
                      const isSelected = form.experience === opt.value;
                      return (
                        <button
                          type="button"
                          key={opt.value}
                          onClick={() => pick("experience", opt.value)}
                          className={[
                            "relative rounded-xl py-3.5 px-2 text-center border transition-all duration-200",
                            isSelected
                              ? "border-[#C9A45C] bg-[#C9A45C]/6 shadow-sm"
                              : "border-[#E4DDD4] bg-white hover:border-[#C9A45C]/50 hover:bg-[#F7F3EE]",
                          ].join(" ")}
                        >
                          {/* Active dot */}
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                          )}
                          <p
                            className={`text-sm font-semibold ${isSelected ? "text-[#C9A45C]" : "text-[#1F2E4F]"}`}
                          >
                            {opt.label}
                          </p>
                          <p className="text-[10px] text-[#7A8499] mt-0.5">
                            {opt.sub}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                  <ErrorMsg msg={errors.experience} />
                </div>

                {/* Skills tag input */}
                <div
                  className="space-y-1.5"
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

                {/* ══════════════════════
                    SECTION 3 — Documents & Links
                ══════════════════════ */}
                <SectionDivider label="Documents & Links" />

                {/* Resume upload */}
                <div
                  className="space-y-1.5"
                  data-field-error={errors.resume ? true : undefined}
                >
                  <Label>Resume / CV</Label>
                  <ResumeUpload
                    value={form.resume}
                    onChange={setResume}
                    error={errors.resume}
                  />
                </div>

                {/* Portfolio URL — optional */}
                <div className="space-y-1.5">
                  <Label required={false}>Portfolio / LinkedIn URL</Label>
                  <div className="relative">
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
                  <p className="text-[10.5px] text-[#B5BEC9]">
                    Optional — but helps us understand your work better.
                  </p>
                </div>

                {/* ══════════════════════
                    SECTION 4 — Final Step
                ══════════════════════ */}
                <SectionDivider label="Final Step" />

                {/* Why should we hire you — textarea */}
                <div
                  className="space-y-1.5"
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
                  {/* Error + character counter side by side */}
                  <div className="flex justify-between items-start">
                    <ErrorMsg msg={errors.whyUs} />
                    <p
                      className={`text-[11px] ml-auto ${form.whyUs.length > 450 ? "text-amber-400" : "text-[#B5BEC9]"}`}
                    >
                      {form.whyUs.length}/500
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#F0EBE3]" />

                {/* ── Submit button ── */}
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={[
                      "w-full flex items-center justify-center gap-2.5",
                      "text-sm font-semibold text-white rounded-xl py-4 px-6",
                      "transition-all duration-200",
                      status === "loading"
                        ? "bg-[#1F2E4F]/60 cursor-not-allowed"
                        : "bg-[#1F2E4F] hover:bg-[#C9A45C] hover:-translate-y-0.5 cursor-pointer active:scale-[0.99]",
                    ].join(" ")}
                  >
                    {status === "loading" ? (
                      <>
                        {/* Spinning loader ring */}
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="white"
                            strokeOpacity="0.3"
                            strokeWidth="3"
                          />
                          <path
                            d="M12 2a10 10 0 0110 10"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
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
                  <p className="text-[11.5px] text-[#B5BEC9] text-center leading-relaxed">
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
