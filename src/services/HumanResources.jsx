import React from "react";
import HeroImage from "../assets/images/hummanResources.avif";

import { HiOutlineMicrophone } from "react-icons/hi";

import {
  
  Users,
 UserPlus,
  FileSearch,
  Calendar,
  UserCheck2,
  Briefcase,
  Zap,
  Clock,
 
  ShieldCheck,
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
    eyebrow: "Human Resource Services",
    image: HeroImage,
    heading: {
      line1: "Build your team faster, ",
      line2: "smarter, and with less friction.",
      line3: "",
    },
    body: "From sourcing to onboarding, our HR professionals support every stage of the talent lifecycle — helping you grow your team without growing your overhead.",
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
      normal: "End-to-end HR support built for teams that value",
      gold: "precision and growth.",
    },
    subtext:
      "We manage hiring, onboarding, and HR operations with structure and consistency — so you can focus on building a high-performing organization.",
    services: [
      {
        icon: Users,
        title: "Recruitment Support",
        desc: "End-to-end hiring support from sourcing to pipeline management.",
        tags: ["Job Posting", "Sourcing", "Talent Pipeline", "Hiring"],
      },
      {
        icon: FileSearch,
        title: "Resume Screening",
        desc: "Efficient candidate shortlisting and qualification to find the right fit faster.",
        tags: ["Screening", "Shortlisting", "Scoring", "Filtering"],
      },
      {
        icon: Calendar,
        title: "Interview Coordination",
        desc: "Seamless scheduling and coordination for a smooth candidate experience.",
        tags: ["Scheduling", "Reminders", "Panels", "Coordination"],
      },
      {
        icon: UserCheck2,
        title: "Onboarding Coordination",
        desc: "Structured onboarding to ensure new hires are ready from day one.",
        tags: ["Documentation", "Orientation", "Onboarding", "Setup"],
      },
      {
        icon: Briefcase,
        title: "HR Operations",
        desc: "Reliable management of policies, employee records, and compliance.",
        tags: ["Compliance", "Records", "Policies", "HR Admin"],
      },
    ],
  },
  whyItWorks: {
    heading: {
      normal: "Designed to make hiring",
      line2: "faster, smoother, and",
      gold: "risk-free.",
    },
    subtext:
      "We simplify HR processes so you can focus on building a high-performing team.",

    points: [
      {
        icon: Zap,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "Faster hiring pipeline",
        desc: "Fill open roles quickly with a structured and proactive sourcing approach.",
        tag: "⚡ Faster hiring",
      },
      {
        icon: Clock,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Reduced time-to-hire",
        desc: "Cut hiring timelines by up to 40% with coordinated recruitment workflows.",
        tag: "⏱ Time saved",
      },
      {
        icon: UserPlus,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Consistent onboarding experience",
        desc: "Deliver a smooth, structured onboarding journey that improves retention.",
        tag: "📈 Better retention",
      },
      {
        icon: ShieldCheck,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Compliance handled end-to-end",
        desc: "Stay compliant with policies, documentation, and regulations — without risk.",
        tag: "🛡 Risk-free HR",
      },
    ],

    stats: [
      {
        num: "40",
        suffix: "%",
        label: "Faster time-to-hire with structured recruitment",
      },
      {
        num: "3",
        suffix: "x",
        label: "Stronger candidate pipeline quality",
      },
      {
        num: "95",
        suffix: "%",
        label: "Successful onboarding completion rate",
      },
      {
        num: "60",
        suffix: "%",
        label: "Lower HR operational overhead vs. in-house",
      },
    ],
  },

  howItWorks: {
    heading: {
      normal: "From hiring needs to",
      line2: "fully structured",
      gold: "HR operations - fast.",
    },
    subtext:
      "A streamlined process to attract, hire, and onboard the right talent while ensuring compliance and consistency.",

    steps: [
      {
        num: "01",
        title: "Hiring & Role Discovery",
        desc: "We understand your hiring needs, role requirements, company culture, and ideal candidate profile.",
        done: true,
      },
      {
        num: "02",
        title: "Sourcing & Screening",
        desc: "We build a qualified candidate pipeline and shortlist top talent through structured screening.",
        done: true,
      },
      {
        num: "03",
        title: "Interview & Selection",
        desc: "We coordinate interviews, manage communication, and help streamline the selection process.",
        done: true,
      },
      {
        num: "04",
        title: "Onboarding & HR Support",
        desc: "We ensure smooth onboarding, documentation, and ongoing HR operations with full compliance.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "Their HR support brought structure and consistency to our entire hiring process. From candidate screening to onboarding, every step feels professional and aligned with our standards.",
    author: "VP of Operations",
    sub: "Enterprise Tech Company ·  USA",
  },
};
function HumanResources() {
  return (
    <div>
      <>
        <HeroSection {...data.hero} />
        <WhatWeProvide {...data.whatWeProvide} />
        <WhyItWorks {...data.whyItWorks} />
        <HowItWorks {...data.howItWorks} />
        <QuoteSection {...data.quote} />
      </>
    </div>
  );
}

export default HumanResources;
