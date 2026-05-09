import React from "react";
import HeroImage from "../assets/images/finance.avif";

import { HiOutlineMicrophone } from "react-icons/hi";

import {
 
  BarChart3,
  Repeat,
  Search,
  Share2,
  Target,
  TrendingUp,
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
    eyebrow: "Digital Growth Services",
    image: HeroImage,
    heading: {
      line1: "Grow your digital presence ",
      line2: "without growing",
      line3: "  your internal team.",
    },
    body: "Our digital specialists execute the strategies that turn your online channels into a consistent source of leads, trust, and revenue.",
    stats: [
      {
        num: "40",
        suffix: "%",
        label: "Reduction in financial errors and rework",
      },
      {
        num: "3",
        suffix: "x",
        label: "Faster invoice and payment processing",
      },
      {
        num: "24",
        suffix: "/7",
        label: "Continuous financial operations support",
      },
    ],
  },
  whatWeProvide: {
    heading: {
      normal: "Digital growth, driven by experts who understand",
      gold: "your audience.",
    },
    subtext:
      "From content to campaigns, we turn your digital channels into a consistent engine for leads, engagement, and revenue.",
    services: [
      {
        icon: Share2,
        title: "Social Media Management",
        desc: "Consistent content and community engagement to build your brand presence.",
        tags: ["Content Calendar", "Posting", "Engagement", "Community"],
      },
      {
        icon: TrendingUp,
        title: "Performance Marketing",
        desc: "Data-driven campaigns optimized for conversions and ROI.",
        tags: ["Ad Campaigns", "ROAS", "Optimization", "Reporting"],
      },
      {
        icon: Search,
        title: "SEO & Content",
        desc: "Search-optimized content that drives long-term organic growth.",
        tags: ["SEO", "Keywords", "Blogs", "On-page"],
      },
      {
        icon: Target,
        title: "Lead Generation",
        desc: "Build and nurture a steady pipeline of high-quality prospects.",
        tags: ["Prospects", "Outreach", "Funnels", "Pipeline"],
      },
    ],
  },
  whyItWorks: {
    heading: {
      normal: "Built for consistent growth",
      line2: "and measurable",
      gold: "results.",
    },
    subtext:
      "A performance-focused approach that combines content, data, and strategy to drive real business outcomes.",

    points: [
      {
        icon: Repeat,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "Consistent content, zero burnout",
        desc: "Maintain a steady content pipeline without overloading your internal team.",
        tag: "⚡ Always active",
      },
      {
        icon: BarChart3,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Performance-driven campaigns",
        desc: "Data-backed strategies that continuously improve ROAS and conversion rates.",
        tag: "📊 ROI focused",
      },
      {
        icon: TrendingUp,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Compounding organic growth",
        desc: "SEO strategies that build long-term visibility and sustainable traffic.",
        tag: "📈 Long-term growth",
      },
      {
        icon: Target,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Consistent lead pipeline",
        desc: "Generate qualified leads every month to fuel your sales pipeline.",
        tag: "🎯 Quality leads",
      },
      ,
    ],

    stats: [
      { num: "3", suffix: "x", label: "Faster first-response time" },
      { num: "24/7", suffix: "", label: "Always-on global support coverage" },
      { num: "94", suffix: "%", label: "Average customer satisfaction (CSAT)" },
      {
        num: "60",
        suffix: "%",
        label: "Lower support costs vs. in-house teams",
      },
    ],
  },

  howItWorks: {
    heading: {
      normal: "From strategy to",
      line2: "fully optimized",
      gold: "growth  fast.",
    },
    subtext:
      "A structured, data-driven approach to launch, scale, and continuously improve your digital performance.",

    steps: [
      {
        num: "01",
        title: "Strategy & Channel Audit",
        desc: "We analyze your brand, audience, competitors, and current channels to identify growth opportunities.",
        done: true,
      },
      {
        num: "02",
        title: "Content & Campaign Planning",
        desc: "We build a tailored roadmap covering content, SEO, and paid campaigns aligned with your goals.",
        done: true,
      },
      {
        num: "03",
        title: "Execution & Optimization",
        desc: "Our team executes across channels while continuously optimizing for performance and conversions.",
        done: true,
      },
      {
        num: "04",
        title: "Tracking & Scaling",
        desc: "We monitor key metrics like traffic, leads, and ROAS  scaling what works for sustained growth.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "They didn’t just manage our marketing -they built a system for growth. Our brand presence, lead flow, and overall performance have never been stronger.",
    author: "VP of Growth",
    sub: "Digital Team · AlphKnot",
  },
};

function DigitalGrowth() {
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

export default DigitalGrowth;
