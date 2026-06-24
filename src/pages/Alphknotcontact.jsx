import { useState, useRef, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

/* ─────────────────────────
   DESIGN TOKENS
───────────────────────── */
const C = {
  dark: "#1F2E4F",
  gold: "#C9A45C",
  goldL: "#E8C97E",
  white: "#FFFFFF",
  soft: "#F7F3EE",
  softB: "#F0EBE3",
  border: "#E4DDD4",
  muted: "#7A8499",
  text: "#1A1A1A",
};

/* ─────────────────────────
   GLOBAL STYLES
───────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap');

  .ck-root *, .ck-root *::before, .ck-root *::after {
    box-sizing: border-box; margin: 0; padding: 0;
  }

  .ck-root {
    font-family: 'Inter', sans-serif;
    background: #F7F3EE;
    color: #1A1A1A;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── fade animations ── */
  @keyframes ck-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes ck-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes ck-scaleIn {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes ck-slideRight {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes ck-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  @keyframes ck-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .ck-fade-up   { animation: ck-fadeUp   0.65s ease both; }
  .ck-fade-in   { animation: ck-fadeIn   0.55s ease both; }
  .ck-scale-in  { animation: ck-scaleIn  0.55s ease both; }

  /* stagger delays */
  .ck-d1  { animation-delay: 0.05s; }
  .ck-d2  { animation-delay: 0.13s; }
  .ck-d3  { animation-delay: 0.21s; }
  .ck-d4  { animation-delay: 0.29s; }
  .ck-d5  { animation-delay: 0.37s; }
  .ck-d6  { animation-delay: 0.45s; }

  /* scroll-trigger placeholder — JS adds .ck-visible */
  .ck-reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .ck-reveal.ck-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .ck-reveal.ck-delay-1 { transition-delay: 0.07s; }
  .ck-reveal.ck-delay-2 { transition-delay: 0.14s; }
  .ck-reveal.ck-delay-3 { transition-delay: 0.21s; }
  .ck-reveal.ck-delay-4 { transition-delay: 0.28s; }

  /* ── form elements ── */
  .ck-field {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .ck-label {
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #7A8499;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .ck-input {
    width: 100%;
    padding: 13px 16px;
    background: #FFFFFF;
    border: 1.5px solid #E4DDD4;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 14.5px;
    color: #1A1A1A;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
    appearance: none;
  }
  .ck-input:focus {
    border-color: #C9A45C;
    box-shadow: 0 0 0 3px rgba(201,164,92,0.12);
  }
  .ck-input::placeholder { color: #B0B8C8; }
  .ck-input.ck-error {
    border-color: #E07070;
    box-shadow: 0 0 0 3px rgba(224,112,112,0.1);
  }

  .ck-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A8499' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 40px;
    cursor: pointer;
  }

  .ck-textarea {
    resize: vertical;
    min-height: 120px;
    line-height: 1.6;
  }

  .ck-error-msg {
    font-size: 11.5px;
    color: #E07070;
    font-family: 'Inter', sans-serif;
    margin-top: -2px;
  }

  /* ── submit button ── */
  .ck-submit {
    width: 100%;
    padding: 15px 28px;
    background: #1F2E4F;
    color: #fff;
    border: none;
    border-radius: 11px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    letter-spacing: 0.01em;
  }
  .ck-submit:hover:not(:disabled) {
    background: #C9A45C;
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(201,164,92,0.35);
  }
  .ck-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  .ck-spinner {
    width: 17px; height: 17px;
    border: 2px solid rgba(255,255,255,0.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: ck-spin 0.7s linear infinite;
    flex-shrink: 0;
  }

  /* ── process steps ── */
  .ck-step-line {
    position: absolute;
    top: 22px;
    left: calc(50% + 28px);
    right: calc(-50% + 28px);
    height: 1px;
    background: linear-gradient(90deg, #C9A45C44, #C9A45C11);
  }

  /* ── testimonial card ── */
  .ck-quote-mark {
    font-family: 'Poppins', sans-serif;
    font-size: 5rem;
    line-height: 0.6;
    color: #C9A45C;
    opacity: 0.3;
    user-select: none;
  }

  /* ── responsive ── */
  @media (max-width: 900px) {
    .ck-hero-grid   { grid-template-columns: 1fr !important; }
    .ck-form-grid   { grid-template-columns: 1fr !important; }
    .ck-step-line   { display: none; }
    .ck-steps-grid  { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 560px) {
    .ck-steps-grid  { grid-template-columns: 1fr !important; }
    .ck-trust-grid  { grid-template-columns: 1fr 1fr !important; }
  }
`;

/* ─────────────────────────
   SCROLL REVEAL HOOK
───────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("ck-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, style = {}, className = "" }) {
  const ref = useReveal();
  const delayClass = delay ? `ck-delay-${delay}` : "";
  return (
    <div
      ref={ref}
      className={`ck-reveal ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────
   SHARED: GOLD BAR
───────────────────────── */
function GoldBar({ center = false }) {
  return (
    <div
      style={{
        width: 36,
        height: 2.5,
        background: `linear-gradient(90deg, ${C.gold}, ${C.goldL})`,
        borderRadius: 99,
        marginBottom: 14,
        ...(center ? { margin: "0 auto 14px" } : {}),
      }}
    />
  );
}

function Label({ text, center = false }) {
  return (
    <div
      style={{
        ...(center ? { display: "flex", justifyContent: "center" } : {}),
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          background: "rgba(201,164,92,0.1)",
          color: C.gold,
          border: "1px solid rgba(201,164,92,0.25)",
          borderRadius: 999,
          padding: "5px 13px",
          fontSize: 11.5,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          letterSpacing: "0.05em",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: C.gold,
            flexShrink: 0,
          }}
        />
        {text}
      </span>
    </div>
  );
}

/* ─────────────────────────
   1. HERO
───────────────────────── */
function Hero() {
  return (
    <section
      style={{
        background: C.white,
        paddingTop: 72,
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `radial-gradient(circle at 70% 40%, rgba(201,164,92,0.06) 0%, transparent 55%),
                          radial-gradient(circle at 10% 80%, rgba(31,46,79,0.04) 0%, transparent 45%)`,
        }}
      />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div
          className="ck-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* LEFT: copy */}
          <div style={{ paddingTop: 40, paddingBottom: 72 }}>
            <div className="ck-fade-up ck-d1">
              <Label text="Get In Touch" />
            </div>

            <h1
              className="ck-fade-up ck-d2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                fontWeight: 500,
                color: C.dark,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                marginBottom: 20,
              }}
            >
              Let's Build Something
              <br />
              <span style={{ color: C.gold, fontWeight: 600 }}>
                Exceptional
              </span>{" "}
              Together.
            </h1>

            <p
              className="ck-fade-up ck-d3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: C.muted,
                lineHeight: 1.78,
                maxWidth: 420,
                marginBottom: 36,
              }}
            >
              Tell us about your business and goals. Our team typically responds
              within 4 business hours  no fluff, just a genuine conversation
              about how Alph Knot can help you scale.
            </p>

            {/* Response promise */}
            <div
              className="ck-fade-up ck-d4"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                { icon: "⚡", text: "Response within 4 business hours" },
                {
                  icon: "🎯",
                  text: "No sales pressure  just a real conversation",
                },
                { icon: "🔒", text: "Your information stays private" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{ display: "flex", alignItems: "center", gap: 11 }}
                >
                  <span style={{ fontSize: 15 }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: C.muted,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: image collage */}
          <div
            className="ck-fade-in ck-d3 ck-hero-img-col"
            style={{
              position: "relative",
              paddingBottom: 32,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                height: 280,
                boxShadow: "0 16px 48px rgba(31,46,79,0.1)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=85"
                alt="Team discussion"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  height: 160,
                  boxShadow: "0 8px 24px rgba(31,46,79,0.08)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
                  alt="Collaboration"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  borderRadius: 16,
                  background: C.dark,
                  height: 160,
                  padding: "22px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 8px 24px rgba(31,46,79,0.15)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Average response
                </p>
                <div>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "2.4rem",
                      fontWeight: 500,
                      color: C.gold,
                      lineHeight: 1,
                    }}
                  >
                    4hrs
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.55)",
                      marginTop: 4,
                    }}
                  >
                    Business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom soft fade */}
      <div
        style={{
          height: 40,
          background: `linear-gradient(to bottom, transparent, ${C.soft})`,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

/* ─────────────────────────
   2. CONTACT FORM
───────────────────────── */
const SERVICES = [
  "Operations & Back-Office",
  "Finance & Accounting",
  "Technology & Development",
  "Marketing & Growth",
  "Customer Support",
  "Executive Assistance",
  "Recruitment & HR",
  "Other / Not Sure Yet",
];

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.company.trim()) e.company = "Company name is required.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.message.trim()) e.message = "Tell us a bit about your needs.";
    return e;
  };

  const handle = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
  };

  const inputClass = (field) => `ck-input${errors[field] ? " ck-error" : ""}`;

  if (status === "success") {
    return (
      <section style={{ background: C.soft, padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
          <Reveal>
            <div
              style={{
                maxWidth: 560,
                margin: "0 auto",
                background: C.white,
                borderRadius: 22,
                padding: "56px 48px",
                textAlign: "center",
                border: `1px solid ${C.border}`,
                boxShadow: "0 12px 48px rgba(31,46,79,0.07)",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "rgba(201,164,92,0.12)",
                  border: `2px solid ${C.gold}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: 24,
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.9rem",
                  fontWeight: 500,
                  color: C.dark,
                  marginBottom: 12,
                }}
              >
                Message Received
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  color: C.muted,
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Thank you,{" "}
                <strong style={{ color: C.dark, fontWeight: 500 }}>
                  {form.name}
                </strong>
                . Our team will review your message and reach out to{" "}
                <strong style={{ color: C.dark, fontWeight: 500 }}>
                  {form.email}
                </strong>{" "}
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
                    message: "",
                  });
                }}
                style={{
                  background: "transparent",
                  color: C.gold,
                  border: `1.5px solid ${C.gold}40`,
                  borderRadius: 10,
                  padding: "10px 24px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 13.5,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${C.gold}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Send Another Message
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: C.soft, padding: "80px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 40,
            alignItems: "start",
          }}
          className="ck-hero-grid"
        >
          {/* LEFT: info panel */}
          <Reveal delay={1}>
            <div
              style={{
                background: C.dark,
                borderRadius: 20,
                padding: "36px 30px",
                position: "sticky",
                top: 96,
                overflow: "hidden",
              }}
            >
              {/* gold texture top-right */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${C.gold}22 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: 12,
                }}
              >
                Contact Details
              </p>
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                Ready when you are.
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Fill in the form and our team will get back to you shortly.
              </p>

              {/* Contact items */}
              {[
                { icon: "✉", label: "Email", value: "hello@alphknot.com" },
                { icon: "📞", label: "Phone", value: "+1 (888) 000-0000" },
                {
                  icon: "🌍",
                  label: "Headquarters",
                  value: "Global Operations",
                },
                {
                  icon: "⏱",
                  label: "Response Time",
                  value: "Within 4 business hours",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 13,
                    alignItems: "flex-start",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>
                    {item.icon}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.38)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.82)",
                        fontWeight: 400,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* offices badge */}
              <div
                style={{
                  marginTop: 24,
                  padding: "14px 16px",
                  background: "rgba(201,164,92,0.1)",
                  borderRadius: 12,
                  border: "1px solid rgba(201,164,92,0.18)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: C.gold,
                    fontWeight: 500,
                  }}
                >
                  🌐 Active in 12+ Countries
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.76rem",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: 3,
                  }}
                >
                  Supporting clients across all time zones
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: form */}
          <Reveal delay={2}>
            <div
              style={{
                background: C.white,
                borderRadius: 20,
                padding: "40px 36px",
                border: `1px solid ${C.border}`,
                boxShadow: "0 4px 32px rgba(31,46,79,0.06)",
              }}
            >
              <GoldBar />
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 500,
                  color: C.dark,
                  marginBottom: 6,
                }}
              >
                Send Us a Message
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: C.muted,
                  marginBottom: 28,
                  lineHeight: 1.6,
                }}
              >
                Complete the form below and a member of our team will be in
                touch.
              </p>

              <form onSubmit={submit} noValidate>
                {/* Row 1: Name + Email */}
                <div
                  className="ck-form-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div className="ck-field">
                    <label className="ck-label">Name</label>
                    <input
                      className={inputClass("name")}
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handle("name")}
                    />
                    {errors.name && (
                      <span className="ck-error-msg">{errors.name}</span>
                    )}
                  </div>
                  <div className="ck-field">
                    <label className="ck-label">Email</label>
                    <input
                      className={inputClass("email")}
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handle("email")}
                    />
                    {errors.email && (
                      <span className="ck-error-msg">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Company Name */}
                <div className="ck-field" style={{ marginBottom: 16 }}>
                  <label className="ck-label">Company Name</label>
                  <input
                    className={inputClass("company")}
                    type="text"
                    placeholder="Your company or organization"
                    value={form.company}
                    onChange={handle("company")}
                  />
                  {errors.company && (
                    <span className="ck-error-msg">{errors.company}</span>
                  )}
                </div>

                {/* Row 3: Service Dropdown */}
                <div className="ck-field" style={{ marginBottom: 16 }}>
                  <label className="ck-label">
                    Service You're Interested In
                  </label>
                  <select
                    className={`ck-input ck-select${errors.service ? " ck-error" : ""}`}
                    value={form.service}
                    onChange={handle("service")}
                  >
                    <option value="">Select a service area…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <span className="ck-error-msg">{errors.service}</span>
                  )}
                </div>

                {/* Row 4: Message */}
                <div className="ck-field" style={{ marginBottom: 24 }}>
                  <label className="ck-label">Message</label>
                  <textarea
                    className={`ck-input ck-textarea${errors.message ? " ck-error" : ""}`}
                    placeholder="Tell us about your team size, current challenges, and what you're hoping to achieve..."
                    value={form.message}
                    onChange={handle("message")}
                  />
                  {errors.message && (
                    <span className="ck-error-msg">{errors.message}</span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="ck-submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className="ck-spinner" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message{" "}
                      <span style={{ fontSize: 16, marginLeft: 2 }}>→</span>
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11.5,
                    color: C.muted,
                    textAlign: "center",
                    marginTop: 14,
                    lineHeight: 1.5,
                  }}
                >
                  By submitting, you agree to our Privacy Policy. We never share
                  your data with third parties.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────
   3. PROCESS
───────────────────────── */
const STEPS = [
  {
    num: "01",
    icon: "📋",
    title: "Submit Your Form",
    body: "Fill out the contact form with your details and what you're looking for.",
  },
  {
    num: "02",
    icon: "📞",
    title: "Discovery Call",
    body: "A dedicated strategist reaches out within 4 hours to understand your needs.",
  },
  {
    num: "03",
    icon: "🎯",
    title: "Custom Proposal",
    body: "We craft a tailored team structure and engagement plan for your business.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Launch & Scale",
    body: "Your team is onboarded, briefed, and executing within days  not months.",
  },
];

function Process() {
  return (
    <section style={{ background: C.white, padding: "96px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <Label text="What Happens Next" center />
            <GoldBar center />
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                fontWeight: 500,
                color: C.dark,
                letterSpacing: "-0.01em",
                marginBottom: 12,
              }}
            >
              From First Contact to Full Execution
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: C.muted,
                maxWidth: 460,
                margin: "0 auto",
              }}
            >
              A clear, fast-moving process designed to get you the right team
              with zero confusion.
            </p>
          </div>
        </Reveal>

        <div
          className="ck-steps-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {STEPS.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i + 1}
              style={{ position: "relative" }}
            >
              {/* connector line between steps (not last) */}
              {i < STEPS.length - 1 && <div className="ck-step-line" />}

              <div
                style={{
                  background: C.soft,
                  border: `1px solid ${C.border}`,
                  borderRadius: 18,
                  padding: "28px 22px",
                  position: "relative",
                  transition:
                    "transform 0.22s, box-shadow 0.22s, border-color 0.22s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(31,46,79,0.09)";
                  e.currentTarget.style.borderColor = `${C.gold}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                {/* step number */}
                <span
                  style={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: C.gold,
                    opacity: 0.6,
                  }}
                >
                  {step.num}
                </span>

                {/* icon circle */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: `rgba(201,164,92,0.1)`,
                    border: `1px solid rgba(201,164,92,0.2)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    marginBottom: 16,
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: C.dark,
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.83rem",
                    color: C.muted,
                    lineHeight: 1.68,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────
   4. TRUST
───────────────────────── */
const STATS = [
  { v: "200+", l: "Clients Served" },
  { v: "98%", l: "Satisfaction Rate" },
  { v: "4hrs", l: "Avg. Response Time" },
  { v: "12+", l: "Countries" },
];

function Trust() {
  return (
    <section style={{ background: C.soft, padding: "96px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        {/* Stats row */}
        <Reveal>
          <div
            className="ck-trust-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginBottom: 60,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.l}
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding: "24px 20px",
                  textAlign: "center",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${C.gold}55`;
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(201,164,92,0.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: "2rem",
                    color: C.gold,
                  }}
                >
                  {s.v}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: C.muted,
                    marginTop: 4,
                  }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonial */}
        <Reveal delay={2}>
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: 22,
              padding: "48px 44px",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 40,
              alignItems: "center",
              boxShadow: "0 4px 32px rgba(31,46,79,0.05)",
            }}
            className="ck-hero-grid"
          >
            {/* Left: person */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 14px",
                  border: `3px solid ${C.gold}30`,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                  alt="Client"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: C.dark,
                }}
              >
                Sarah Mitchell
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: C.muted,
                  marginTop: 3,
                }}
              >
                CEO, NovaBridge Inc.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                  marginTop: 10,
                }}
              >
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} style={{ color: C.gold, fontSize: 13 }}>
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Right: quote */}
            <div>
              <p className="ck-quote-mark">"</p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
                  fontWeight: 400,
                  color: C.dark,
                  lineHeight: 1.72,
                  fontStyle: "normal",
                  marginTop: -16,
                  marginBottom: 16,
                }}
              >
                Working with Alph Knot transformed how we operate. Within two
                weeks of filling out their contact form, we had a fully
                onboarded remote team handling our operations. The response was
                fast, the process was clear, and the results have been
                outstanding.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 28,
                    height: 2,
                    background: C.gold,
                    borderRadius: 99,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: C.muted,
                  }}
                >
                  Scaled from 5 to 23 team members in 60 days
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Trust logos / badges row */}
        <Reveal delay={3}>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11.5,
                color: C.muted,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Trusted by teams across industries
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              {[
                "Operations",
                "Finance",
                "Technology",
                "Marketing",
                "Healthcare",
                "Legal",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: C.white,
                    border: `1px solid ${C.border}`,
                    borderRadius: 999,
                    padding: "6px 16px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12.5,
                    color: C.muted,
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────
   5. FINAL CTA
───────────────────────── */
function FinalCTA() {
  const scrollToForm = () => {
    document
      .getElementById("ck-form-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{ background: C.white, padding: "96px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <div
            style={{
              background: C.dark,
              borderRadius: 24,
              padding: "64px 56px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(31,46,79,0.18)",
            }}
          >
            {/* gold glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 500,
                height: 300,
                pointerEvents: "none",
                background: `radial-gradient(ellipse, ${C.gold}10 0%, transparent 65%)`,
              }}
            />
            {/* ring decorations */}
            <div
              style={{
                position: "absolute",
                top: -56,
                right: -56,
                width: 200,
                height: 200,
                borderRadius: "50%",
                border: `1px solid rgba(201,164,92,0.12)`,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 150,
                height: 150,
                borderRadius: "50%",
                border: `1px solid rgba(201,164,92,0.08)`,
                pointerEvents: "none",
              }}
            />

            <Label text="Don't Wait" center />

            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: 16,
                position: "relative",
              }}
            >
              Your next great hire is{" "}
              <span style={{ color: C.gold, fontWeight: 600 }}>
                one message away.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.975rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                maxWidth: 460,
                margin: "0 auto 36px",
              }}
            >
              Stop searching, start scaling. Fill out the form above and our
              team will put together a tailored execution plan for your business
              no commitment required.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={scrollToForm}
                style={{
                  background: C.gold,
                  color: "#fff",
                  padding: "14px 30px",
                  borderRadius: 11,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: 14.5,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: `0 6px 22px ${C.gold}40`,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 10px 30px ${C.gold}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 6px 22px ${C.gold}40`;
                }}
              >
                Fill Out the Form →
              </button>
              <Link to={"/book-call"}>
                <button
                  
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.8)",
                    padding: "14px 30px",
                    borderRadius: 11,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 14.5,
                    border: "1px solid rgba(255,255,255,0.13)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    backdropFilter: "blur(6px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  }}
                >
                  Book a Call Instead
                </button>
              </Link>
            </div>

            {/* bottom micro-copy */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.28)",
                marginTop: 24,
              }}
            >
              No spam. No pressure. Just a conversation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────
   ROOT EXPORT
───────────────────────── */
export default function AlphKnotContact() {
  return (
    <div className="ck-root">
      <style>{CSS}</style>
      <Hero />
      <div id="ck-form-section">
        <ContactForm />
      </div>
      <Process />
      <Trust />
      <FinalCTA />
    </div>
  );
}
