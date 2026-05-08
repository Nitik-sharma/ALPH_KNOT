import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

/* ─────────────────────────────
   DESIGN TOKENS
───────────────────────────── */
const C = {
  dark: "#1F2E4F",
  gold: "#C9A45C",
  white: "#FFFFFF",
  soft: "#F7F3EE",
  border: "#E8E8E8",
  muted: "#6B7280",
};

/* ─────────────────────────────
   GLOBAL STYLES (injected once)
───────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap');

  .ak-root *, .ak-root *::before, .ak-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .ak-root {
    font-family: 'Inter', sans-serif;
    background: #fff;
    color: #1A1A1A;
    -webkit-font-smoothing: antialiased;
  }

  /* ── layout helpers ── */
  .ak-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── section spacing ── */
  .ak-section {
    padding: 96px 0;
  }
  .ak-section-soft {
    background: #F7F3EE;
    padding: 96px 0;
  }

  /* ── typography ── */
  .ak-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(201,164,92,0.12);
    color: #C9A45C;
    border: 1px solid rgba(201,164,92,0.28);
    border-radius: 999px;
    padding: 5px 14px;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .ak-label-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #C9A45C;
    display: inline-block;
    flex-shrink: 0;
  }

  .ak-h1 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2rem, 4vw, 3.4rem);
    font-weight: 600;
    color: #1F2E4F;
    line-height: 1.2;
    letter-spacing: -0.025em;
    margin-bottom: 18px;
  }

  .ak-h2 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.5rem, 2.5vw, 2.1rem);
    font-weight: 600;
    color: #1F2E4F;
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }

  .ak-body {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #6B7280;
    line-height: 1.8;
  }

  .ak-gold-bar {
    width: 40px;
    height: 3px;
    background: #C9A45C;
    border-radius: 99px;
    margin-bottom: 14px;
  }

  /* ── buttons ── */
  .ak-btn-primary {
    background: #C9A45C;
    color: #fff;
    padding: 12px 26px;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    white-space: nowrap;
  }
  .ak-btn-primary:hover {
    background: #C9A45C;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(201,164,92,0.4);
  }

  .ak-btn-outline {
    background: transparent;
    color: #1F2E4F;
    padding: 12px 26px;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    border: 1.5px solid #E8E8E8;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
    white-space: nowrap;
  }
  .ak-btn-outline:hover {
    border-color: #C9A45C;
    color: #C9A45C;
  }

  /* ── cards ── */
  .ak-card {
    background: #fff;
    border: 1px solid #E8E8E8;
    border-radius: 18px;
    padding: 28px 24px;
    transition: border-color 0.22s, box-shadow 0.22s, transform 0.22s;
    cursor: default;
  }
  .ak-card:hover {
    border-color: rgba(201,164,92,0.45);
    box-shadow: 0 10px 32px rgba(31,46,79,0.08);
    transform: translateY(-3px);
  }

  .ak-card-soft {
    background: #F7F3EE;
    border: 1px solid #E8E8E8;
    border-radius: 16px;
    padding: 20px 20px;
    transition: border-color 0.22s, background 0.22s, box-shadow 0.22s;
    cursor: default;
  }
  .ak-card-soft:hover {
    border-color: rgba(201,164,92,0.45);
    background: #fff;
    box-shadow: 0 4px 18px rgba(201,164,92,0.09);
  }

  /* ── image wrapper ── */
  .ak-img {
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
  }
  .ak-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── trust pills ── */
  .ak-pill {
    display: inline-block;
    background: #F7F3EE;
    border: 1px solid #E8E8E8;
    border-radius: 999px;
    padding: 5px 14px;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    color: #6B7280;
    font-weight: 500;
    white-space: nowrap;
  }

  /* ── grid helpers ── */
  .ak-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
  }

  .ak-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .ak-grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  /* ── responsive breakpoints ── */
  @media (max-width: 1024px) {
    .ak-grid-2 {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .ak-grid-4 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .ak-section, .ak-section-soft { padding: 64px 0; }
    .ak-grid-3 { grid-template-columns: 1fr; gap: 16px; }
    .ak-grid-4 { grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .ak-container { padding: 0 20px; }
    .ak-h1 { font-size: clamp(1.8rem, 6vw, 2.4rem); }
    .ak-h2 { font-size: clamp(1.4rem, 5vw, 1.8rem); }
    .ak-hide-mobile { display: none !important; }
  }

  @media (max-width: 480px) {
    .ak-grid-4 { grid-template-columns: 1fr 1fr; gap: 12px; }
    .ak-section, .ak-section-soft { padding: 52px 0; }
  }

  /* ── fade-in animation ── */
  .ak-fade { opacity: 0; transform: translateY(20px); }
  .ak-fade.visible { opacity: 1; transform: translateY(0); transition: opacity 0.6s ease, transform 0.6s ease; }
`;

/* ─────────────────────────────
   FADE-IN HOOK
───────────────────────────── */
function useFade() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
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

function Fade({ children, delay = 0, style = {} }) {
  const ref = useFade();
  return (
    <div
      ref={ref}
      className="ak-fade"
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────
   SMALL SHARED COMPONENTS
───────────────────────────── */
function GoldBar({ center = false }) {
  return (
    <div
      className="ak-gold-bar"
      style={center ? { margin: "0 auto 14px" } : {}}
    />
  );
}

function SectionLabel({ text, center = false }) {
  return (
    <div style={center ? { display: "flex", justifyContent: "center" } : {}}>
      <span className="ak-label">
        <span className="ak-label-dot" />
        {text}
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0, marginTop: 1 }}
    >
      <circle cx="10" cy="10" r="10" fill="#C9A45C" fillOpacity="0.15" />
      <path
        d="M6 10.5l2.5 2.5 5.5-5.5"
        stroke="#C9A45C"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteSVG() {
  return (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
      <path
        d="M0 36V22.5C0 9.9 7.2 2.1 21.6 0l2.4 4.2C16.2 6 11.4 10.2 10.2 16.8H18V36H0zm24 0V22.5C24 9.9 31.2 2.1 45.6 0L48 4.2C40.2 6 35.4 10.2 34.2 16.8H42V36H24z"
        fill="#C9A45C"
        fillOpacity="0.22"
      />
    </svg>
  );
}

/* ─────────────────────────────
   1. HERO
───────────────────────────── */
function Hero() {
  return (
    <section
      className="ak-section"
      style={{ background: C.white, paddingTop: 72, paddingBottom: 72 }}
    >
      <div className="ak-container">
        <div className="ak-grid-2" style={{ alignItems: "center" }}>
          {/* LEFT — copy */}
          <div>
           
            <Fade delay={0.07}>
              <h1 className="ak-h1">
                Global Talent.{" "}
                <span style={{ color: C.gold }}>Structured Execution.</span>{" "}
                Real Results.
              </h1>
            </Fade>

            <Fade delay={0.14}>
              <p
                className="ak-body"
                style={{ maxWidth: 460, marginBottom: 32 }}
              >
                Alph Knot helps businesses scale with global teams across
                operations, finance, tech, and growth  so you can focus on what
                matters most.
              </p>
            </Fade>

         

            <Fade delay={0.26}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "3× Faster Execution",
                  "60% Cost Reduction",
                  "90%+ Satisfaction",
                  "24/7 Support",
                ].map((s) => (
                  <span key={s} className="ak-pill">
                    {s}
                  </span>
                ))}
              </div>
            </Fade>
          </div>

          {/* RIGHT — image */}
          <Fade delay={0.15} style={{ position: "relative" }}>
            <div className="ak-hide-mobile" style={{ position: "relative" }}>
              <div
                className="ak-img"
                style={{
                  height: 520,
                  boxShadow: "0 20px 56px rgba(31,46,79,0.11)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85"
                  alt="Team at work"
                />
              </div>

              {/* floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 28,
                  left: -20,
                  background: C.white,
                  borderRadius: 14,
                  padding: "14px 20px",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.1)",
                  border: `1px solid ${C.border}`,
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    fontFamily: "Inter, sans-serif",
                    marginBottom: 3,
                  }}
                >
                  Teams active in
                </p>
                <p
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: "Poppins, sans-serif",
                    color: C.dark,
                  }}
                >
                  12+ Countries
                </p>
              </div>

              {/* gold ring */}
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  right: -14,
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: `${C.gold}15`,
                  border: `2px solid ${C.gold}28`,
                  zIndex: 0,
                }}
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   2. MISSION
───────────────────────────── */
function Mission() {
  return (
    <section className="ak-section-soft">
      <div className="ak-container">
        {/* Centered intro */}
        <Fade>
          <div
            style={{
              textAlign: "center",
              maxWidth: 660,
              margin: "0 auto 56px",
            }}
          >
            <GoldBar center />
            <h2 className="ak-h2">Our Mission</h2>
            <p className="ak-body">
              Most companies struggle not because of bad strategy  but
              execution gaps. The right talent in the wrong structure, or no
              structure at all. Alph Knot was built to close that gap:
              connecting businesses with pre-vetted global professionals
              embedded into your workflows, making execution your competitive
              advantage.
            </p>
          </div>
        </Fade>

        {/* 3 pillar cards */}
        <div className="ak-grid-3">
          {[
            {
              icon: "🌍",
              title: "Global Reach",
              body: "Access top talent across time zones, cultures, and disciplines.",
            },
            {
              icon: "⚙️",
              title: "Structured Process",
              body: "Onboarding, SOPs, and workflows built for clarity from day one.",
            },
            {
              icon: "📈",
              title: "Scalable Growth",
              body: "Expand your team as fast as you grow  no friction, no delays.",
            },
          ].map((p, i) => (
            <Fade key={p.title} delay={i * 0.09}>
              <div className="ak-card" style={{ background: C.white }}>
                <span
                  style={{ fontSize: 30, display: "block", marginBottom: 14 }}
                >
                  {p.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    color: C.dark,
                    fontSize: "0.95rem",
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.85rem",
                    color: C.muted,
                    lineHeight: 1.7,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   3. FOUNDER QUOTE
───────────────────────────── */
function FounderQuote() {
  return (
    <section className="ak-section" style={{ background: C.white }}>
      <div className="ak-container">
        <div className="ak-grid-2">
          {/* Quote side */}
          <Fade delay={0}>
            <QuoteSVG />
            <blockquote
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
                fontWeight: 500,
                color: C.dark,
                lineHeight: 1.72,
                letterSpacing: "-0.01em",
                marginTop: 18,
                marginBottom: 28,
              }}
            >
              "Behind every successful business is a team that executes with
              clarity and consistency. Alph Knot gives companies more than
              talent 
              <span style={{ color: C.gold }}> we deliver execution.</span>"
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: C.dark,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                AK
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    color: C.dark,
                    fontSize: "0.9rem",
                  }}
                >
                  Founder, Alph Knot
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: C.muted,
                    fontSize: "0.8rem",
                    marginTop: 2,
                  }}
                >
                  Visionary · Builder · Operator
                </p>
              </div>
            </div>
          </Fade>

          {/* Image side */}
          <Fade delay={0.12}>
            <div style={{ position: "relative" }}>
              <div
                className="ak-img"
                style={{
                  height: 440,
                  boxShadow: "0 14px 44px rgba(31,46,79,0.1)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=85"
                  alt="Founder"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -18,
                  left: 18,
                  background: C.soft,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: "12px 18px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 11,
                    color: C.muted,
                  }}
                >
                  Est. 2020 · Global Partner
                </p>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    color: C.dark,
                    fontSize: 13,
                    marginTop: 2,
                  }}
                >
                  Execution-First Company
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   4. BUILT TO SOLVE
───────────────────────────── */
function BuiltToSolve() {
  return (
    <section className="ak-section-soft">
      <div className="ak-container">
        <div className="ak-grid-2">
          {/* Image */}
          <Fade delay={0}>
            <div style={{ position: "relative" }}>
              <div
                className="ak-img"
                style={{
                  height: 420,
                  boxShadow: "0 14px 44px rgba(31,46,79,0.09)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85"
                  alt="Team collaboration"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 18,
                  right: -16,
                  background: C.gold,
                  borderRadius: 12,
                  padding: "10px 18px",
                  color: "#fff",
                  boxShadow: `0 6px 24px ${C.gold}44`,
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 10,
                    opacity: 0.85,
                  }}
                >
                  Teams across
                </p>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: 17,
                  }}
                >
                  12+ Countries
                </p>
              </div>
            </div>
          </Fade>

          {/* Text */}
          <Fade delay={0.12}>
            <GoldBar />
            <h2 className="ak-h2">Built to Solve a Real Problem</h2>
            <p className="ak-body" style={{ marginBottom: 14 }}>
              Modern businesses face a paradox: talent is everywhere, but great
              execution is rare. Hiring takes months, onboarding takes more, and
              misaligned teams cost companies more than they realize.
            </p>
            <p className="ak-body" style={{ marginBottom: 26 }}>
              Alph Knot was designed to collapse that gap  connecting you with
              professionals who don't just fill a seat, but integrate into your
              goals from day one.
            </p>
            <div
              style={{
                background: C.white,
                borderLeft: `4px solid ${C.gold}`,
                borderRadius: "0 12px 12px 0",
                padding: "14px 18px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  color: C.dark,
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                }}
              >
                "Talent is global. Execution should be seamless."
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   5. WHY DIFFERENT
───────────────────────────── */
const DIFFS = [
  {
    label: "Execution-first approach",
    desc: "We don't just place talent  we build systems around them.",
  },
  {
    label: "Pre-vetted talent",
    desc: "Rigorous vetting ensures every hire is ready to perform.",
  },
  {
    label: "Global scalability",
    desc: "Scale teams up or down across continents without friction.",
  },
  {
    label: "Flexible engagement",
    desc: "Part-time, full-time, or project-based  you decide the model.",
  },
  {
    label: "Dedicated support",
    desc: "A success manager with you from kickoff to long-term growth.",
  },
  {
    label: "Cost-efficient operations",
    desc: "Premium talent without the overhead of traditional hiring.",
  },
];

function WhyDifferent() {
  return (
    <section className="ak-section" style={{ background: C.white }}>
      <div className="ak-container">
        <div className="ak-grid-2" style={{ alignItems: "start", gap: 48 }}>
          {/* Left: sticky heading + image */}
          <Fade delay={0}>
            <div style={{ position: "sticky", top: 100 }}>
              <GoldBar />
              <h2 className="ak-h2">Why Alph Knot Is Different</h2>
              <p
                className="ak-body"
                style={{ maxWidth: 380, marginBottom: 28 }}
              >
                We've reimagined what a global staffing partner should be  less
                transactional, more transformational.
              </p>
              <div
                className="ak-img"
                style={{
                  height: 260,
                  boxShadow: "0 8px 28px rgba(31,46,79,0.08)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85"
                  alt="Global team"
                />
              </div>
            </div>
          </Fade>

          {/* Right: checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {DIFFS.map((d, i) => (
              <Fade key={d.label} delay={0.04 * i}>
                <div className="ak-card-soft">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <CheckIcon />
                    <div>
                      <p
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 600,
                          color: C.dark,
                          fontSize: "0.875rem",
                          marginBottom: 3,
                        }}
                      >
                        {d.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.8rem",
                          color: C.muted,
                          lineHeight: 1.6,
                        }}
                      >
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   6. GLOBAL BUT HUMAN
───────────────────────────── */
function GlobalHuman() {
  return (
    <section className="ak-section-soft">
      <div className="ak-container">
        <div className="ak-grid-2">
          {/* Text */}
          <Fade delay={0}>
            <GoldBar />
            <h2 className="ak-h2">
              Global by Design.{" "}
              <span style={{ color: C.gold }}>Human by Nature.</span>
            </h2>
            <p className="ak-body" style={{ marginBottom: 14 }}>
              We operate across continents, but our relationships are built one
              person at a time. Every professional in our network is more than a
              resume  they're a trusted collaborator.
            </p>
            <p className="ak-body" style={{ marginBottom: 36 }}>
              Our account managers, talent leads, and operations team stay close
              to both sides  ensuring the human thread never gets lost in the
              scale.
            </p>
            {/* Stats row */}
            <div style={{ display: "flex", gap: 36 }}>
              {[
                ["12+", "Countries"],
                ["200+", "Professionals"],
                ["98%", "Retention"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "1.7rem",
                      color: C.gold,
                    }}
                  >
                    {n}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.78rem",
                      color: C.muted,
                      marginTop: 2,
                    }}
                  >
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </Fade>

          {/* Image */}
          <Fade delay={0.12}>
            <div
              className="ak-img"
              style={{
                height: 440,
                boxShadow: "0 14px 44px rgba(31,46,79,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85"
                alt="Global collaboration"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   7. TEAM
───────────────────────────── */
const TEAM = [
  {
    name: "Aryan Kapoor",
    role: "CEO & Co-Founder",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Priya Mehta",
    role: "Chief Operations Officer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "James O'Brien",
    role: "Head of Talent",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Sara Lin",
    role: "Head of Client Success",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

function Team() {
  return (
    <section className="ak-section" style={{ background: C.white }}>
      <div className="ak-container">
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <GoldBar center />
            <h2 className="ak-h2">The People Behind the Platform</h2>
            <p className="ak-body">
              Operators. Builders. People who've been in your shoes.
            </p>
          </div>
        </Fade>

        <div className="ak-grid-4">
          {TEAM.map((m, i) => (
            <Fade key={m.name} delay={i * 0.07}>
              <div
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: `1px solid ${C.border}`,
                  transition:
                    "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 36px rgba(31,46,79,0.1)";
                  e.currentTarget.style.borderColor = `${C.gold}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                <div style={{ height: 210, overflow: "hidden" }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: "grayscale(15%)",
                      transition: "filter 0.3s, transform 0.4s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)";
                      e.currentTarget.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "grayscale(15%)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
                <div style={{ background: C.soft, padding: "14px 16px" }}>
                  <p
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      color: C.dark,
                      fontSize: "0.85rem",
                    }}
                  >
                    {m.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: C.muted,
                      fontSize: "0.75rem",
                      marginTop: 3,
                    }}
                  >
                    {m.role}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   8. CULTURE / STATS
───────────────────────────── */
const CULTURE = [
  { v: "200+", l: "Global Team", s: "Professionals worldwide" },
  { v: "98%", l: "High Retention", s: "Year-over-year retention" },
  { v: "12+", l: "Countries", s: "Multi-country presence" },
  { v: "25yrs", l: "Leadership", s: "Combined experience" },
];

function CultureStats() {
  return (
    <section className="ak-section-soft">
      <div className="ak-container">
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <GoldBar center />
            <h2 className="ak-h2">Culture of Excellence</h2>
            <p className="ak-body">The numbers behind the mission.</p>
          </div>
        </Fade>
        <div className="ak-grid-4">
          {CULTURE.map((s, i) => (
            <Fade key={s.l} delay={i * 0.07}>
              <div
                className="ak-card"
                style={{ textAlign: "center", padding: "30px 20px" }}
              >
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.9rem",
                    color: C.gold,
                  }}
                >
                  {s.v}
                </p>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    color: C.dark,
                    fontSize: "0.875rem",
                    marginTop: 6,
                  }}
                >
                  {s.l}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: C.muted,
                    fontSize: "0.76rem",
                    marginTop: 4,
                  }}
                >
                  {s.s}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   9. RESULTS
───────────────────────────── */
const RESULTS = [
  {
    m: "3×",
    l: "Faster Execution",
    d: "Companies onboard and deploy teams 3× faster with Alph Knot.",
  },
  {
    m: "60%",
    l: "Cost Reduction",
    d: "Average savings vs. traditional full-time hiring models.",
  },
  {
    m: "24/7",
    l: "Support Coverage",
    d: "Round-the-clock support across all major time zones.",
  },
  {
    m: "90%+",
    l: "Satisfaction Rate",
    d: "Clients who consistently rate Alph Knot as their top partner.",
  },
];

function Results() {
  return (
    <section className="ak-section" style={{ background: C.white }}>
      <div className="ak-container">
        <Fade>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <GoldBar center />
            <h2 className="ak-h2">Numbers That Speak</h2>
            <p className="ak-body">
              Measurable impact for every company we partner with.
            </p>
          </div>
        </Fade>
        <div className="ak-grid-4">
          {RESULTS.map((r, i) => (
            <Fade key={r.l} delay={i * 0.07}>
              <div
                className="ak-card-soft"
                style={{ padding: "28px 22px" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${C.gold}50`;
                  e.currentTarget.style.background = C.white;
                  e.currentTarget.style.boxShadow = `0 8px 28px rgba(201,164,92,0.11)`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.background = C.soft;
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "2.1rem",
                    color: C.gold,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {r.m}
                </p>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    color: C.dark,
                    fontSize: "0.875rem",
                    marginTop: 8,
                  }}
                >
                  {r.l}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                    color: C.muted,
                    lineHeight: 1.65,
                    marginTop: 6,
                  }}
                >
                  {r.d}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   10. FINAL CTA
───────────────────────────── */
function FinalCTA() {
  return (
    <section className="ak-section-soft" style={{ paddingBottom: 96 }}>
      <div className="ak-container">
        <Fade>
          <div
            style={{
              background: C.white,
              border: `1px solid ${C.border}`,
              borderRadius: 24,
              padding: "64px 48px",
              textAlign: "center",
              boxShadow: "0 6px 40px rgba(31,46,79,0.07)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* decorative rings */}
            <div
              style={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                border: `1px solid ${C.gold}15`,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -36,
                left: -36,
                width: 140,
                height: 140,
                borderRadius: "50%",
                border: `1px solid ${C.gold}12`,
                pointerEvents: "none",
              }}
            />

            <SectionLabel text="Let's Build Together" center />

            <h2
              className="ak-h2"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                marginBottom: 14,
              }}
            >
              Ready to scale with a{" "}
              <span style={{ color: C.gold }}>global team?</span>
            </h2>

            <p
              className="ak-body"
              style={{ maxWidth: 440, margin: "0 auto 36px" }}
            >
              Join hundreds of companies that trust Alph Knot to power their
              operations, growth, and execution  from day one.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <NavLink to={"/contact-us"}>
                <button
                  className="ak-btn-primary"
                  style={{ padding: "13px 30px", fontSize: 14 }}
                >
                  Get Started →
                </button>
              </NavLink>
              <NavLink to={"/book-call"}>
                <button
                  className="ak-btn-outline"
                  style={{ padding: "13px 30px", fontSize: 14 }}
                >
                  Book a Call
                </button>
              </NavLink>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─────────────────────────────
   ROOT EXPORT
───────────────────────────── */
export default function AlphKnotAbout() {
  return (
    <div className="ak-root">
      <style>{GLOBAL_CSS}</style>
      <Hero />
      <Mission />
      <Team />

      <BuiltToSolve />
      <WhyDifferent />
      <GlobalHuman />
      <FounderQuote />
      <CultureStats />
      <Results />
      <FinalCTA />
    </div>
  );
}
