import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    category: "DISCOVERY",
    title: "Understand Your Business",
    description:
      "We take time to understand your goals, operations, challenges, and growth plans before building a workforce strategy tailored to your business.",
    badge: "Strategy Session",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#BB7F14" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="5" stroke="#BB7F14" strokeWidth="1.5" />
        <line
          x1="16"
          y1="4"
          x2="16"
          y2="8"
          stroke="#BB7F14"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="24"
          x2="16"
          y2="28"
          stroke="#BB7F14"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="4"
          y1="16"
          x2="8"
          y2="16"
          stroke="#BB7F14"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="24"
          y1="16"
          x2="28"
          y2="16"
          stroke="#BB7F14"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    num: "01",
  },
  {
    category: "WORKFORCE",
    title: "Build Your Dedicated Team",
    description:
      "We assemble dedicated professionals who integrate seamlessly into your business and operate as a true extension of your internal team.",
    badge: "Dedicated Workforce",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="10" r="4" stroke="#BB7F14" strokeWidth="1.5" />
        <circle cx="22" cy="13" r="3" stroke="#6DB9D1" strokeWidth="1.5" />
        <path
          d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8"
          stroke="#BB7F14"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 19c2.761 0 5 2.239 5 5"
          stroke="#6DB9D1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    num: "02",
  },
  {
    category: "EXECUTION",
    title: "Launch & Execute",
    description:
      "Your AlphKnot team manages daily operations, customer support, technology, finance, and business processes with accountability and precision.",
    badge: "Managed Operations",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="6"
          width="24"
          height="18"
          rx="2"
          stroke="#BB7F14"
          strokeWidth="1.5"
        />
        <path
          d="M10 16l4 4 8-8"
          stroke="#6DB9D1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    num: "03",
  },
  {
    category: "SCALABILITY",
    title: "Grow Without Limits",
    description:
      "Expand your team, add capabilities, and scale operations effortlessly as your business evolves—without the delays of traditional hiring.",
    badge: "Flexible Scaling",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polyline
          points="4,24 10,16 16,20 22,10 28,4"
          stroke="#BB7F14"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="22,4 28,4 28,10"
          stroke="#BB7F14"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="4"
          y1="28"
          x2="28"
          y2="28"
          stroke="#6DB9D1"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
      </svg>
    ),
    num: "04",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function StepCard({ step, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        backgroundColor: "#1F2E4F",
        borderRadius: "16px",
        padding: "32px 28px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        border: hovered
          ? "1.5px solid #BB7F14"
          : "1.5px solid rgba(187,127,20,0.22)",
        boxShadow: hovered
          ? "0 8px 40px rgba(31,46,79,0.22), 0 2px 8px rgba(0,0,0,0.12)"
          : "0 2px 16px rgba(31,46,79,0.10)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        cursor: "default",
        flex: "1 1 220px",
        minWidth: 0,
      }}
    >
      {/* Step number top-right */}
      <span
        style={{
          position: "absolute",
          top: "20px",
          right: "24px",
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        {step.num}
      </span>

      {/* Icon */}
      <motion.div
        animate={hovered ? { scale: 1.08, rotate: 4 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          width: 52,
          height: 52,
          borderRadius: "12px",
          backgroundColor: "rgba(187,127,20,0.10)",
          border: "1px solid rgba(187,127,20,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {step.icon}
      </motion.div>

      {/* Category label */}
      <span
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          color: "#BB7F14",
          textTransform: "uppercase",
        }}
      >
        {step.category}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "17px",
          fontWeight: 700,
          color: "#FFFFFF",
          margin: 0,
          lineHeight: 1.35,
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: "13.5px",
          color: "rgba(255,255,255,0.55)",
          margin: 0,
          lineHeight: 1.7,
          flexGrow: 1,
        }}
      >
        {step.description}
      </p>

      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "rgba(109,185,209,0.12)",
          border: "1px solid rgba(109,185,209,0.22)",
          borderRadius: "999px",
          padding: "5px 12px",
          width: "fit-content",
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: "#6DB9D1",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            color: "#6DB9D1",
            letterSpacing: "0.04em",
          }}
        >
          {step.badge}
        </span>
      </div>
    </motion.div>
  );
}

function Connector({ index }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        width: "28px",
      }}
    >
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
        <line
          x1="0"
          y1="10"
          x2="20"
          y2="10"
          stroke="#BB7F14"
          strokeWidth="1"
          strokeDasharray="3 3"
          strokeOpacity="0.45"
        />
        <polyline
          points="16,5 22,10 16,15"
          stroke="#BB7F14"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.7"
        />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#F4F8FB",
        padding: "96px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 900,
              color: "#04388B",
              margin: "0 0 20px",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Your Business,{" "}
            <span className=" text-[#bb7f14]">Fully Executed</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(31,46,79,0.6)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            From first conversation to full-scale operations, AlphKnot guides
            you through a structured journey designed to deliver results—fast.
          </p>
        </motion.div>

        {/* Cards row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            alignItems: "stretch",
            marginBottom: 48,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                alignItems: "stretch",
                flex: "1 1 200px",
                minWidth: 0,
              }}
            >
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 2px",
                    flexShrink: 0,
                  }}
                >
                  <Connector index={i} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundColor: "#1F2E4F",
            borderRadius: "16px",
            border: "1.5px solid rgba(187,127,20,0.35)",
            padding: "48px 40px",
            display: "flex",
            flexWrap: "wrap",
            gap: "28px",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 4px 32px rgba(31,46,79,0.14)",
          }}
        >
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <h3
              style={{
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 700,
                color: "#FFFFFF",
                margin: "0 0 12px",
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              Build Your Dedicated Business Team
            </h3>
            <p
              style={{
                fontSize: "14.5px",
                color: "rgba(255,255,255,0.55)",
                margin: 0,
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              Whether you need one specialist or a fully managed execution team,
              AlphKnot helps you operate smarter, move faster, and scale with
              confidence.
            </p>
          </div>

          <motion.button
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            animate={ctaHovered ? { scale: 1.03 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: ctaHovered ? "#1F2E4F" : "#BB7F14",
              color: ctaHovered ? "#FFFFFF" : "#1F2E4F",
              border: ctaHovered
                ? "1.5px solid #FFFFFF"
                : "1.5px solid #BB7F14",
              borderRadius: "999px",
              padding: "14px 28px",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.02em",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition:
                "background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
              flexShrink: 0,
            }}
          >
            Schedule a Strategy Call →
          </motion.button>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hiw-cards { flex-direction: column !important; }
          .hiw-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}
