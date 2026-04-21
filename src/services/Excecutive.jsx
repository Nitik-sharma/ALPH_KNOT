import React from 'react'
import HeroImage from '../assets/images/ExecutiveHero.avif'
import { Clock, Shield, Lock, Activity } from "lucide-react";
import {
  CalendarDays,
  Monitor,
  Mail,
  BarChart2,
  User,
  Building2,
} from "lucide-react";
  
import {
  HeroSection,
  WhatWeProvide,
  WhyItWorks,
  HowItWorks,
  QuoteSection,
} from "../../src/components/ServicePage";
const data = {
  hero: {
    eyebrow: "Executive Support",
    image: HeroImage,
    heading: {
      line1: "Your executive team,",
      line2: "without the executive",
      line3: "overhead.",
    },
    body: "We place elite Executive and Virtual Assistants who operate as true partners — managing your time, communications, and business administration so you can focus on what only you can do.",
    stats: [
      { num: "200", suffix: "+", label: "Businesses scaled" },
      { num: "0", suffix: "%", label: "Long-term contracts" },
      { num: "48", suffix: "h", label: "To get started" },
    ],
  },
  whatWeProvide: {
    heading: { normal: "Everything your executive", gold: "operations need" },
    subtext:
      "Senior-level support across every layer of your business — without the overhead of full-time hires.",
    services: [
      {
        icon: CalendarDays,
        title: "Executive Assistant",
        desc: "Your right hand for high-level operations.",
        tags: ["Calendar", "Travel", "Communications", "Gatekeeper"],
      },
      {
        icon: Monitor,
        title: "Virtual Assistant",
        desc: "Remote-first support for day-to-day tasks.",
        tags: ["Remote Admin", "Research", "Errands", "Coordination"],
      },
      {
        icon: Mail,
        title: "Calendar & Email",
        desc: "Full ownership of your inbox and schedule.",
        tags: ["Inbox Zero", "Scheduling", "Priority Filter"],
      },
      {
        icon: BarChart2,
        title: "Research & Reporting",
        desc: "Actionable intelligence delivered fast.",
        tags: ["Competitive Intel", "Summaries", "Data Gathering"],
      },
      {
        icon: User,
        title: "Personal Admin Support",
        desc: "Life and business logistics handled together.",
        tags: ["Life Logistics", "Personal Errands", "Blended Support"],
      },
      {
        icon: Building2,
        title: "Business Admin Support",
        desc: "Operational backbone for your business.",
        tags: ["SOPs", "Vendor Coordination", "Internal Ops"],
      },
    ],
  },
  whyItWorks: {
    heading: { normal: "Built for leaders", line2: "who move", gold: "fast." },
    subtext: "Executive-grade support without the executive price tag.",
    points: [
      {
        icon: Clock,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "Reclaim 15+ hours every week",
        desc: "Hand off calendar, comms, and admin so you focus on work that moves the needle.",
        tag: "⚡ 15+ hrs/week saved",
      },
      {
        icon: Shield,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Consistent coverage, zero gaps",
        desc: "No disruption when your EA takes leave — seamless continuity from day one.",
        tag: "✓ Always covered",
      },
      {
        icon: Lock,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Confidentiality-first professionals",
        desc: "Trained for C-suite environments with full discretion and zero compromise.",
        tag: "🔒 C-suite trained",
      },
      {
        icon: Activity,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Flexible on your terms",
        desc: "Part-time, full-time, or on-demand surge — scale up or down instantly.",
        tag: "↕ Scale anytime",
      },
    ],
    stats: [
      { num: "200", suffix: "+", label: "Businesses scaled" },
      { num: "48", suffix: "h", label: "To get started" },
      { num: "0", suffix: "%", label: "Long-term contracts" },
      { num: "15", suffix: "+", label: "Hours saved per week" },
    ],
  },
  howItWorks: {
    heading: {
      normal: "From first call to fully",
      line2: "operational — in",
      gold: "days.",
    },
    subtext: "No long onboarding. No guesswork. Just a clean, fast process.",
    steps: [
      {
        num: "01",
        title: "Discovery Call",
        desc: "We map your workflow, tools, communication style, and ideal assistant profile.",
        done: true,
      },
      {
        num: "02",
        title: "We Match You",
        desc: "Within 48 hours, we present pre-vetted candidates aligned with your needs.",
        done: true,
      },
      {
        num: "03",
        title: "Onboard & Go",
        desc: "Your assistant is briefed and operational — often within the same week.",
        done: true,
      },
      {
        num: "04",
        title: "Ongoing Support",
        desc: "Monthly check-ins. Replace if the fit isn't right — no questions asked.",
        done: false,
      },
    ],
  },
  quote: {
    quote:
      "AlphKnot gave me back my mornings. My EA handles everything from board deck prep to travel coordination — I've reclaimed 3 hours every day.",
    author: "CEO, AlphKnot",
    sub: "Series B SaaS Company · Seattle, WA",
  },
};

function Excecutive() {
  return (
    <>
      <HeroSection {...data.hero} />
      <WhatWeProvide {...data.whatWeProvide} />
      <WhyItWorks {...data.whyItWorks} />
      <HowItWorks {...data.howItWorks} />
      <QuoteSection {...data.quote} />
    </>
  );
}

export default Excecutive