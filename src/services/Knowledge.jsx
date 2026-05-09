import React from "react";
import HeroImage from "../assets/images/kp.avif";
import {
  HeroSection,
  WhatWeProvide,
  WhyItWorks,
  HowItWorks,
  QuoteSection,
} from "../../src/components/ServicePage";
import {
  AlertCircle,
  BarChart,
  BarChart2,
  BarChart3,
  ClipboardList,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Lightbulb,
  LineChart,
  Palette,
  RefreshCw,
  Repeat,
  Rocket,
  Scale,
  Settings,
  Shield,
  ShoppingCart,
  Target,
  Wrench,
  Zap,
} from "lucide-react";
const data = {
  hero: {
    eyebrow: "Knowledge Process",
    image: HeroImage,
    heading: {
      line1: "Insight and analysis",
      line2: "that drives better",
      line3: "decisions.",
    },
    body: "Our knowledge process professionals translate raw information into actionable intelligence  giving your leadership team the clarity to move with confidence.",

    stats: [
      {
        num: "2",
        suffix: "x",
        label: "Faster decision-making speed",
      },
      {
        num: "50",
        suffix: "%",
        label: "Reduction in research costs",
      },
      {
        num: "100",
        suffix: "%",
        label: "Data-driven insights delivered",
      },
    ],
  },

  whatWeProvide: {
    heading: {
      normal: "Insight-driven services powered by experts who understand",
      gold: "your data.",
    },
    subtext:
      "We transform research, analysis, and data into clear insights that help you make smarter business decisions.",

    services: [
      {
        icon: BarChart2,
        title: "Market Research",
        desc: "Competition analysis, industry landscapes, and market sizing to identify opportunities.",
        tags: ["Competitors", "Industry", "Market Size", "Insights"],
      },
      {
        icon: ClipboardList,
        title: "Business Analysis",
        desc: "Process mapping, gap analysis, and requirement definition for operational clarity.",
        tags: ["Gap Analysis", "Processes", "Requirements", "Optimization"],
      },
      {
        icon: Scale,
        title: "Legal Process Outsourcing",
        desc: "Contract review, documentation support, and legal research at scale.",
        tags: ["Contracts", "Legal Research", "Compliance", "Docs"],
      },
      {
        icon: LineChart,
        title: "Data Analytics",
        desc: "Dashboards, trend analysis, and reporting for actionable insights.",
        tags: ["Dashboards", "Trends", "Reports", "Insights"],
      },
    ],
  },

  whyItWorks: {
    heading: {
      normal: "Built for clarity, speed,",
      line2: "and confident",
      gold: "decision-making.",
    },
    subtext:
      "A research-driven approach that helps you reduce risk, uncover insights, and act faster.",

    points: [
      {
        icon: Target,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "Data-backed strategic decisions",
        desc: "Make decisions grounded in real market data and research insights.",
        tag: "🎯 Smart decisions",
      },
      {
        icon: AlertCircle,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Identify gaps early",
        desc: "Spot operational inefficiencies before they become costly problems.",
        tag: "⚠️ Risk reduced",
      },
      {
        icon: Scale,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Cost-effective legal support",
        desc: "Access legal research and documentation at a fraction of traditional costs.",
        tag: "⚖️ Cost efficient",
      },
      {
        icon: BarChart3,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Clear, actionable insights",
        desc: "Turn complex data into visual, easy-to-understand reports.",
        tag: "📊 Actionable",
      },
    ],
    stats: [
      {
        num: "2",
        suffix: "x",
        label: "Faster insight generation",
      },
      {
        num: "40",
        suffix: "%",
        label: "Improvement in operational efficiency",
      },
      {
        num: "95",
        suffix: "%",
        label: "Accuracy in data analysis and reporting",
      },
      {
        num: "60",
        suffix: "%",
        label: "Lower cost vs. in-house research teams",
      },
    ],
  },

  howItWorks: {
    heading: {
      normal: "From raw data to",
      line2: "actionable",
      gold: "insights  fast.",
    },
    subtext:
      "A structured process to collect, analyze, and deliver intelligence that drives better decisions.",

    steps: [
      {
        num: "01",
        title: "Requirement Discovery",
        desc: "We understand your business goals, data sources, and research needs.",
        done: true,
      },
      {
        num: "02",
        title: "Research & Data Collection",
        desc: "We gather and organize relevant market, business, and legal data.",
        done: true,
      },
      {
        num: "03",
        title: "Analysis & Insight Generation",
        desc: "We analyze data to uncover patterns, insights, and opportunities.",
        done: true,
      },
      {
        num: "04",
        title: "Reporting & Optimization",
        desc: "We deliver clear reports and continuously refine insights for better outcomes.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "They turned complex data into clear, actionable insights we could immediately use. Our decisions are now faster, smarter, and far more confident.",
    author: "Strategy Lead",
    sub: "Analytics Team · AlphKnot",
  },
};
function Knowledge() {
  return <>
   <HeroSection {...data.hero} />
        <WhatWeProvide {...data.whatWeProvide} />
        <WhyItWorks {...data.whyItWorks} />
        <HowItWorks {...data.howItWorks} />
        <QuoteSection {...data.quote} />
  </>;
}

export default Knowledge;
