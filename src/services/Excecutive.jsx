import React, { useRef, useState } from "react";
import HeroExecutive from "../assets/images/ExecutiveHero.avif";
import { Clock, Shield, Lock, Activity, Users } from "lucide-react";

import {
  CalendarDays,
  Monitor,
  Mail,
  BarChart2,
  User,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Executive Assistant",
    desc: "Your right hand for high-level operations — keeping you focused on what matters most.",
    tags: ["Calendar", "Travel", "Communications", "Gatekeeper"],
  },
  {
    icon: Monitor,
    title: "Virtual Assistant",
    desc: "Remote-first support for the day-to-day tasks that slow your team down.",
    tags: ["Remote Admin", "Research", "Errands", "Coordination"],
  },
  {
    icon: Mail,
    title: "Calendar & Email Manager",
    desc: "Full ownership of your inbox and schedule so nothing falls through the cracks.",
    tags: ["Inbox Zero", "Scheduling", "Priority Filter"],
  },
  {
    icon: BarChart2,
    title: "Research & Reporting",
    desc: "Actionable intelligence delivered fast — so decisions are backed by data, not guesswork.",
    tags: ["Competitive Intel", "Summaries", "Data Gathering"],
  },
  {
    icon: User,
    title: "Personal Admin Support",
    desc: "Life and business logistics handled together — because your time is one resource.",
    tags: ["Life Logistics", "Personal Errands", "Blended Support"],
  },
  {
    icon: Building2,
    title: "Business Admin Support",
    desc: "Operational backbone for your business — structured, reliable, and always running.",
    tags: ["SOPs", "Vendor Coordination", "Internal Ops"],
  },
];

const points = [
  {
    icon: Clock,
    iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
    iconColor: "#C9A45C",
    tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
    title: "Reclaim 15+ hours every week",
    desc: "Hand off calendar, comms, and admin so you focus entirely on the work that actually moves your business forward.",
    tag: "⚡ 15+ hrs/week saved",
  },
  {
    icon: Shield,
    iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
    iconColor: "#3b7dd8",
    tagStyle: "bg-[#eef4ff] text-[#2563c0]",
    title: "Consistent coverage, zero gaps",
    desc: "No disruption when your EA takes leave — seamless continuity is baked into how we operate from day one.",
    tag: "✓ Always covered",
  },
  {
    icon: Lock,
    iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
    iconColor: "#7c3aed",
    tagStyle: "bg-[#f3effe] text-[#5b21b6]",
    title: "Confidentiality-first professionals",
    desc: "Trained to operate in C-suite environments with full discretion, professionalism, and zero compromise.",
    tag: "🔒 C-suite trained",
  },
  {
    icon: Activity,
    iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
    iconColor: "#22a06b",
    tagStyle: "bg-[#edfaf3] text-[#15794d]",
    title: "Flexible on your terms",
    desc: "Part-time, full-time, or on-demand surge — scale up or down instantly based on what your business needs right now.",
    tag: "↕ Scale anytime",
  },
];

const stats = [
  { num: "200", suffix: "+", label: "Businesses scaled" },
  { num: "48", suffix: "h", label: "To get started" },
  { num: "0", suffix: "%", label: "Long-term contracts" },
  { num: "15", suffix: "+", label: "Hours saved per week" },
];

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We map your workflow, tools, communication style, and ideal assistant profile.",
    done: true,
  },
  {
    num: "02",
    title: "We Match You",
    desc: "Within 48 hours, we present pre-vetted candidates aligned with your exact needs.",
    done: true,
  },
  {
    num: "03",
    title: "Onboard & Go",
    desc: "Your assistant is briefed and becomes operational - often within the same week.",
    done: true,
  },
  {
    num: "04",
    title: "Ongoing Support",
    desc: "Monthly check-ins. Replace the assistant if the fit isn't right - no questions asked.",
    done: false,
  },
];

function Executive() {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setActiveIdx(Math.round(progress * (points.length - 1)));
  };
  return (
    <>
      {/* Hero sections  */}
      <section
        className="relative w-full min-h-screen md:min-h-[600px] flex flex-col overflow-hidden bg-[#0b1c35]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Background image */}

        <img
          src={HeroExecutive}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 2 }}
        />
        {/* Strong left overlay so text is always readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(11,28,53,0.98) 0%, rgba(11,28,53,0.55) 50%)",
          }}
        />
        {/* ── Content wrapper ── */}
        <div className="relative z-10 flex flex-col justify-between flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
          {/* Top: main text block */}
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 m-8  ">
              <span className="w-6 h-px bg-[#C9A45C]" />
              <span
                className="text-[10px] font-semibold text-[#C9A45C] tracking-[3px] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Executive Support
              </span>
              <span className="w-6 h-px bg-[#C9A45C]" />
            </div>

            {/* Heading */}
            <h1
              className="text-[30px] sm:text-[38px] lg:text-[48px] font-bold leading-[1.15] text-white mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Your executive team,
              <br />
              <span className="text-[#C9A45C]">without the executive</span>
              <br />
              overhead.
            </h1>

            {/* Gold divider */}
            <div className="w-10 h-[2px] bg-[#C9A45C] rounded-full mb-7" />

            {/* Body */}
            <p
              className="text-[13px] sm:text-[14px] leading-[1.85] text-white/55 mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We place elite Executive and Virtual Assistants who operate as
              true partners - managing your time, communications, and business
              administration so you can focus on what only you can do.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <button
                className="text-[12.5px] font-semibold bg-[#C9A45C] text-white rounded-full px-7 py-3 hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Book a Free Call
              </button>
              <button
                className="text-[12.5px] font-medium text-white/65 border border-white/20 rounded-full px-7 py-3 hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors duration-200"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Explore Services →
              </button>
            </div>
          </div>

          {/* ── Stats — always below content, never overlapping ── */}
          <div className="mt-12 lg:mt-16 flex items-stretch gap-0 border-t border-white/10 pt-8">
            {[
              { num: "200", suffix: "+", label: "Businesses scaled" },
              { num: "0", suffix: "%", label: "Long-term contracts" },
              { num: "48", suffix: "h", label: "To get started" },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex-1 ${
                  i > 0 ? "border-l border-white/10 pl-6 ml-6" : ""
                }`}
              >
                <p
                  className="text-[26px] sm:text-[30px] font-bold text-white leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.num}
                  <span className="text-[#C9A45C]">{s.suffix}</span>
                </p>
                <p
                  className="text-[11px] text-white/35 mt-2 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we provide
       */}

      <section
        className="w-full bg-[#EEF4FB] py-20 px-6 sm:px-10 lg:px-16"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#C9A45C]" />
            <span
              className="text-[10px] font-semibold text-[#C9A45C] tracking-[3px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              What We Provide
            </span>
            <span className="w-6 h-px bg-[#C9A45C]" />
          </div>
          <h2
            className="text-[30px] sm:text-[36px] font-bold text-[#0b1c35] leading-[1.2] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Everything your executive{" "}
            <span className="text-[#C9A45C]">operations need</span>
          </h2>
          <p className="text-[14px] text-[#0b1c35]/45 max-w-[440px] mx-auto leading-relaxed">
            Senior-level support across every layer of your business — without
            the overhead of full-time hires.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group bg-white border border-[#dce8f5] rounded-2xl p-8 hover:border-[#C9A45C]/50 transition-all duration-200 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-[14px] flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(201,164,92,0.10)",
                    border: "0.5px solid rgba(201,164,92,0.25)",
                  }}
                >
                  <Icon size={30} color="#C9A45C" strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3
                  className="text-[15px] font-semibold text-[#0b1c35] mb-3 leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-[12.5px] text-[#0b1c35]/50 leading-[1.75] mb-5">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] text-[#C9A45C] px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(201,164,92,0.08)",
                        border: "0.5px solid rgba(201,164,92,0.22)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHy its work */}

      <section
        className="w-full bg-[#f8fafc] py-20 px-6 sm:px-10 lg:px-16"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#C9A45C]" />
            <span
              className="text-[10px] font-semibold text-[#C9A45C] tracking-[3px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Why It Works
            </span>
            <span className="w-8 h-px bg-[#C9A45C]" />
          </div>

          {/* Heading */}
          <h2
            className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-[#0b1c35] leading-[1.12] mb-5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Built for leaders
            <br />
            who move <span className="text-[#C9A45C]">fast.</span>
          </h2>
          <p className="text-[13.5px] text-[#64748b] max-w-[400px] mx-auto leading-[1.8]">
            Executive-grade support without the executive price tag — clarity,
            bandwidth, and speed, built in.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-white border border-[#e8f0fb] rounded-2xl p-7 flex items-start gap-5 hover:border-[#C9A45C] transition-all duration-200"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                {/* Icon */}
                <div
                  className={`w-[50px] h-[50px] rounded-[13px] flex items-center justify-center flex-shrink-0 ${p.iconStyle}`}
                >
                  <Icon size={21} color={p.iconColor} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[14px] font-semibold text-[#0b1c35] mb-2 leading-snug"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[12.5px] text-[#64748b] leading-[1.75] mb-3">
                    {p.desc}
                  </p>
                  <span
                    className={`inline-flex items-center text-[10.5px] font-medium rounded-md px-2.5 py-1 ${p.tagStyle}`}
                  >
                    {p.tag}
                  </span>
                  :text-
                </div>
              </div>
            );
          })}

          {/* Stats bar — full width */}
          <div
            className="sm:col-span-2 bg-white border border-[#e8f0fb] rounded-2xl px-8 py-6 flex items-center justify-between"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
          >
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="w-px h-10 bg-[#f0f4fa]" />}
                <div className="text-center flex-1">
                  <p
                    className="text-[22px] font-bold text-[#0b1c35] leading-none"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.num}
                    <span className="text-[#C9A45C]">{s.suffix}</span>
                  </p>
                  <p className="text-[11px] text-[#94a3b8] mt-1.5">{s.label}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            className="text-[12px] font-semibold bg-[#0b1c35] text-white rounded-full px-7 py-3 hover:bg-[#C9A45C] hover:text-white transition-colors duration-200"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Get Started →
          </button>
          <button
            className="text-[12px] font-medium bg-white text-[#64748b] border border-[#e2ecf6] rounded-full px-7 py-3 hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors duration-200"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* How its work  */}
      <section
        className="w-full bg-[#f8fafc] py-20 px-6 sm:px-10 lg:px-16"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-7 h-px bg-[#C9A45C]" />
            <span
              className="text-[10px] font-semibold text-[#C9A45C] tracking-[3px] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              How It Works
            </span>
            <span className="w-7 h-px bg-[#C9A45C]" />
          </div>
          <h2
            className="text-[32px] sm:text-[40px] font-bold text-[#0b1c35] leading-[1.14] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            From first call to fully
            <br />
            operational — in <span className="text-[#C9A45C]">days.</span>
          </h2>
          <p className="text-[13.5px] text-[#64748b] max-w-[420px] mx-auto leading-[1.8]">
            No long onboarding. No guesswork. Just a clean, fast process
            designed to get you the right support — immediately.
          </p>
        </div>

        {/* ── Desktop Timeline ── */}
        <div className="hidden sm:block max-w-6xl mx-auto">
          {/* Circles + line row */}
          <div className="flex items-center mb-8">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                {/* Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                  style={{
                    background: s.done ? "#C9A45C" : "#fff",
                    border: s.done ? "3px solid #C9A45C" : "2px solid #dce8f5",
                  }}
                >
                  <span
                    className="text-[14px] font-bold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: s.done ? "#fff" : "#cbd5e1",
                    }}
                  >
                    {s.num}
                  </span>
                </div>

                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div
                    className="flex-1 h-[2px]"
                    style={{ background: "#C9A45C" }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Cards row — full width with gap */}
          <div className="grid grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex flex-col transition-all duration-200 hover:border-[#C9A45C]"
                style={{
                  border: s.done ? "1px solid #C9A45C" : "1px solid #e8f0fb",
                  boxShadow: s.done
                    ? "0 4px 20px rgba(201,164,92,0.10)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <p
                  className="text-[10px] font-bold tracking-[2px] text-[#C9A45C] mb-3"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  STEP {s.num}
                </p>
                <h3
                  className="text-[15px] font-semibold text-[#0b1c35] mb-3 leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[12.5px] text-[#64748b] leading-[1.75]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile Timeline — vertical ── */}
        <div className="flex sm:hidden flex-col gap-0">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: s.done ? "#C9A45C" : "#fff",
                    border: s.done ? "3px solid #C9A45C" : "2px solid #dce8f5",
                  }}
                >
                  <span
                    className="text-[12px] font-bold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      color: s.done ? "#fff" : "#cbd5e1",
                    }}
                  >
                    {s.num}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-[2px] flex-1 mt-1"
                    style={{ background: "#C9A45C", minHeight: "40px" }}
                  />
                )}
              </div>

              <div
                className="flex-1 bg-white rounded-2xl p-5 mb-4"
                style={{
                  border: s.done ? "1px solid #C9A45C" : "1px solid #e8f0fb",
                  boxShadow: s.done
                    ? "0 4px 16px rgba(201,164,92,0.09)"
                    : "none",
                }}
              >
                <p
                  className="text-[10px] font-bold tracking-[2px] text-[#C9A45C] mb-1.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  STEP {s.num}
                </p>
                <h3
                  className="text-[14px] font-semibold text-[#0b1c35] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-[12px] text-[#64748b] leading-[1.7]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-3 mt-14">
          <button
            className="text-[12px] font-semibold bg-[#0b1c35] text-white rounded-full px-7 py-3 hover:bg-[#C9A45C] hover:text-[#0b1c35] transition-colors duration-200"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Book a Discovery Call →
          </button>
          <button
            className="text-[12px] font-medium bg-white text-[#64748b] border border-[#e2ecf6] rounded-full px-7 py-3 hover:border-[#C9A45C] hover:text-[#C9A45C] transition-colors duration-200"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Qoute */}

      <section
        className="w-full bg-[#EEF4FB] py-16 px-6 sm:px-10 lg:px-16"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-white rounded-2xl px-10 py-10 border-l-4 border-[#C9A45C]"
            style={{ boxShadow: "0 2px 16px rgba(11,28,53,0.06)" }}
          >
            {/* Quote mark */}
            <div
              className="text-[64px] leading-none text-[#C9A45C] mb-2 font-serif"
              style={{ fontFamily: "Georgia, serif", lineHeight: 1 }}
            >
              "
            </div>

            {/* Quote text */}
            <p
              className="text-[16px] sm:text-[18px] text-[#0b1c35] leading-[1.8] font-medium mb-8"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              AlphKnot gave me back my mornings. My EA handles everything from
              board deck prep to travel coordination — I've reclaimed 3 hours
              every day. It's the best operational decision I've made this year.
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              {/* Avatar initials */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(201,164,92,0.12)",
                  border: "1px solid rgba(201,164,92,0.25)",
                }}
              >
                <span
                  className="text-[13px] font-bold text-[#C9A45C]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  AK
                </span>
              </div>

              <div>
                <p
                  className="text-[13px] font-semibold text-[#0b1c35]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  CEO, AlphKnot
                </p>
                <p
                  className="text-[11.5px] text-[#64748b] mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Series B SaaS Company · Seattle, WA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Executive;
