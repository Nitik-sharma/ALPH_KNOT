import React, { Activity } from "react";
import HeroImage from "../assets/images/team.avif";
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
  Briefcase,
  ClipboardList,
  Cloud,
  Code,
  Cpu,
  Database,
  DollarSign,
  FileText,
  Globe,
  Headphones,
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
    eyebrow: "Dedicated Team Pods",
    image: HeroImage,
    heading: {
      line1: "A full operational team,",
      line2: "ready to deploy",
      line3: "as one unit.",
    },
    body: "Why hire role by role when you can activate a pre-coordinated team? Our Team Pods bundle complementary roles into a single, cost-efficient package  so your new team hits the ground running together.",

    stats: [
      {
        num: "2",
        suffix: "x",
        label: "Faster time-to-productivity",
      },
      {
        num: "1",
        suffix: "",
        label: "Single contract and point of contact",
      },
      {
        num: "40",
        suffix: "%",
        label: "Lower cost vs. individual hiring",
      },
    ],
  },

  whatWeProvide: {
    heading: {
      normal: "Pre-built teams designed to deliver",
      gold: "results from day one.",
    },
    subtext:
      "Each pod combines complementary roles into a cohesive unit  aligned, efficient, and ready to perform.",

    services: [
      {
        icon: Briefcase,
        title: "Executive Pod",
        desc: "EA + Research Analyst + Admin Coordinator",
        tags: ["Executive Support", "Research", "Admin"],
      },
      {
        icon: Headphones,
        title: "Customer Success Pod",
        desc: "CS Lead + Chat Agent + Email Support Rep",
        tags: ["Support", "CS", "Communication"],
      },
      {
        icon: TrendingUp,
        title: "Growth Pod",
        desc: "Social Manager + SEO Writer + Lead Gen Specialist",
        tags: ["Marketing", "SEO", "Leads"],
      },
      {
        icon: DollarSign,
        title: "Finance Pod",
        desc: "Bookkeeper + AP/AR Specialist + Payroll Admin",
        tags: ["Finance", "Accounts", "Payroll"],
      },
      {
        icon: Settings,
        title: "Ops Pod",
        desc: "Data Entry + CRM Manager + Ops Coordinator",
        tags: ["Operations", "CRM", "Admin"],
      },
      {
        icon: Cpu,
        title: "Tech Pod",
        desc: "Web Developer + IT Support + Automation Specialist",
        tags: ["Development", "IT", "Automation"],
      },
    ],
  },

  whyItWorks: {
    heading: {
      normal: "Built for speed, efficiency,",
      line2: "and seamless",
      gold: "collaboration.",
    },
    subtext:
      "Pre-coordinated teams that work together from day one  eliminating friction and accelerating results.",

    points: [
      {
        icon: Zap,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "Faster time-to-productivity",
        desc: "Team members are already aligned and ready to work as a unit.",
        tag: "⚡ Instant start",
      },
      {
        icon: FileText,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Single contract simplicity",
        desc: "One agreement, one invoice, and one point of contact.",
        tag: "📄 Simplified",
      },
      {
        icon: DollarSign,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Lower overall cost",
        desc: "Significantly more cost-effective than hiring each role independently.",
        tag: "💰 Cost efficient",
      },
      {
        icon: Users,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Cross-trained teams",
        desc: "Team members cover each other during absences, ensuring continuity.",
        tag: "🔄 Always covered",
      },
    ],

    stats: [
      {
        num: "2",
        suffix: "x",
        label: "Faster team productivity",
      },
      {
        num: "1",
        suffix: "",
        label: "Unified contract & management",
      },
      {
        num: "40",
        suffix: "%",
        label: "Lower hiring costs",
      },
      {
        num: "100",
        suffix: "%",
        label: "Team collaboration readiness",
      },
    ],
  },

  howItWorks: {
    heading: {
      normal: "From requirement to",
      line2: "fully operational",
      gold: "team  fast.",
    },
    subtext:
      "A streamlined process to deploy pre-coordinated teams aligned with your business needs.",

    steps: [
      {
        num: "01",
        title: "Needs Assessment",
        desc: "We understand your business goals and required team structure.",
        done: true,
      },
      {
        num: "02",
        title: "Pod Selection & Customization",
        desc: "We match or customize a pod based on your workflow and needs.",
        done: true,
      },
      {
        num: "03",
        title: "Deployment",
        desc: "Your team is onboarded and integrated into your systems quickly.",
        done: true,
      },
      {
        num: "04",
        title: "Ongoing Optimization",
        desc: "We monitor performance and continuously improve efficiency.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "Instead of hiring role by role, we deployed a full team instantly. Everything just worked —communication, execution, and results were seamless from day one.",
    author: "COO",
    sub: "Operations Team · AlphKnot",
  },
}

function TeamPods() {
  return (
    <>
      <>
        <HeroSection {...data.hero} />
        <WhatWeProvide {...data.whatWeProvide} />
        <WhyItWorks {...data.whyItWorks} />
        <HowItWorks {...data.howItWorks} />
        <QuoteSection {...data.quote} />
      </>
    </>
  );
}

export default TeamPods;
