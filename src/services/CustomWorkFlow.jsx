import React, { Activity } from "react";
import HeroImage from "../assets/images/custom.avif";
import {
  HeroSection,
  WhatWeProvide,
  WhyItWorks,
  HowItWorks,
  QuoteSection,
} from "../../src/components/ServicePage";
import {
  ActivitySquare,
  AlertCircle,
  BarChart,
  BarChart2,
  BarChart3,
  BookOpen,
  ClipboardList,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Heart,
  Layers,
  Lightbulb,
  LineChart,
  Palette,
  RefreshCw,
  Repeat,
  Rocket,
  Scale,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  UserPlus,
  Users,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
const data= {
  hero: {
    eyebrow: "Custom Workforce Solutions",
    image: HeroImage,
    heading: {
      line1: "Your team, built exactly",
      line2: "the way your business",
      line3: "needs it.",
    },
    body: "No template. No one-size-fits-all package. We design and deploy custom talent configurations that match your unique operations, culture, and growth stage.",

    stats: [
      {
        num: "100",
        suffix: "%",
        label: "Custom-built team structures",
      },
      {
        num: "0",
        suffix: "%",
        label: "Generic roles or templates",
      },
      {
        num: "2",
        suffix: "x",
        label: "Faster team deployment",
      },
    ],
  },

  whatWeProvide: {
    heading: {
      normal: "Tailored workforce solutions designed around",
      gold: "your business.",
    },
    subtext:
      "We build flexible, scalable teams aligned with your workflows, goals, and operational needs.",

    services: [
      {
        icon: Search,
        title: "Talent Needs Assessment",
        desc: "Discovery call, role mapping, and gap analysis to define your exact requirements.",
        tags: ["Discovery", "Gap Analysis", "Planning", "Strategy"],
      },
      {
        icon: Layers,
        title: "Custom Role Design",
        desc: "Hybrid roles built around your real workflows and operational needs.",
        tags: ["Custom Roles", "Workflow", "Hybrid", "Design"],
      },
      {
        icon: UserPlus,
        title: "Dedicated Hiring",
        desc: "We source and vet talent specifically for your business requirements.",
        tags: ["Hiring", "Sourcing", "Screening", "Talent"],
      },
      {
        icon: ActivitySquare,
        title: "Ongoing Management Support",
        desc: "Performance tracking, regular check-ins, and replacement guarantees.",
        tags: ["Performance", "Tracking", "Support", "Retention"],
      },
      {
        icon: TrendingUp,
        title: "Flexible Scaling",
        desc: "Easily add or reduce headcount based on your business needs.",
        tags: ["Scaling", "Flexibility", "Growth", "Demand"],
      },
    ],
  },

  whyItWorks: {
    heading: {
      normal: "Built for flexibility, precision,",
      line2: "and scalable",
      gold: "growth.",
    },
    subtext:
      "Every team is purpose-built to align with your workflows, ensuring better performance and long-term success.",

    points: [
      {
        icon: Settings,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "No cookie-cutter solutions",
        desc: "Every engagement is fully customized to your business needs.",
        tag: "⚡ Fully tailored",
      },
      {
        icon: Workflow,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Roles built around your workflows",
        desc: "Custom roles aligned with your processes — not generic job descriptions.",
        tag: "🔧 Workflow aligned",
      },
      {
        icon: UserCheck,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Single point of contact",
        desc: "A dedicated manager who understands your full operational picture.",
        tag: "👤 Dedicated support",
      },
      {
        icon: Rocket,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Scale at your pace",
        desc: "Start small, scale fast — our model grows with your business.",
        tag: "🚀 Scalable",
      },
    ],

    stats: [
      {
        num: "100",
        suffix: "%",
        label: "Custom-built workforce solutions",
      },
      {
        num: "2",
        suffix: "x",
        label: "Faster team deployment",
      },
      {
        num: "50",
        suffix: "%",
        label: "Reduction in hiring overhead",
      },
      {
        num: "0",
        suffix: "%",
        label: "Dependency on rigid hiring models",
      },
    ],
  },

  howItWorks: {
    heading: {
      normal: "From requirements to",
      line2: "fully deployed",
      gold: "teams — fast.",
    },
    subtext:
      "A flexible approach to design, build, and manage teams that fit your business perfectly.",

    steps: [
      {
        num: "01",
        title: "Needs Assessment",
        desc: "We analyze your operations, workflows, and talent gaps.",
        done: true,
      },
      {
        num: "02",
        title: "Role & Team Design",
        desc: "We design custom roles and team structures tailored to your needs.",
        done: true,
      },
      {
        num: "03",
        title: "Hiring & Deployment",
        desc: "We recruit, onboard, and integrate talent into your workflows.",
        done: true,
      },
      {
        num: "04",
        title: "Ongoing Optimization",
        desc: "We monitor performance and scale your team as your business grows.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "What stood out was how tailored everything felt. The team was built exactly around our workflows, and scaling was seamless as we grew.",
    author: "Founder",
    sub: "Operations Team · AlphKnot",
  },
}

function CustomWorkFlow() {
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

export default CustomWorkFlow;
