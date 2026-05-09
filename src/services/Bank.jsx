import React from 'react'
import HeroImage from "../assets/images/BackOffice.avif";

import { HiOutlineMicrophone } from "react-icons/hi";

import {
  ClipboardType, // Data entry & processing
  Users, // CRM management
  ShoppingBag, // Order processing
  FileCheck, // Documentation & verification
  MonitorCog, // Operations support
  BadgeCheck, // Quality assurance
  RefreshCcwDot, // Eliminate repetitive workload
  Target, // High data accuracy
  Scaling, // Scale operations instantly
  Workflow, // Remove operational bottlenecks
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
    eyebrow: "Back Office & Operations",
    image: HeroImage,
    heading: {
      line1: "The behind the scenes engine , ",
      line2: "that keeps your business moving.",
      line3: "",
    },
    body: "Accurate, efficient, and quietly essential - our back office specialists handle the operational workload that clogs your team’s calendar and slows down decisions.",
    stats: [
      {
        num: "40",
        suffix: "%",
        label: "Avg. reduction in operational bottlenecks",
      },
      {
        num: "99",
        suffix: "%",
        label: "Data accuracy rate across client accounts",
      },
      {
        num: "Day",
        suffix: "1",
        label: "Operational from first week of engagement",
      },
    ],
  },
  whatWeProvide: {
    heading: {
      normal: "Everything your back office",
      gold: "needs to run smoothly",
    },
    subtext:
      "From data management to operational execution  we handle the workflows that keep your business efficient and scalable.",

    services: [
      {
        icon: ClipboardType,
        title: "Data Entry & Processing",
        desc: "Accurate data handling at scale  from cleaning to structured database management.",
        tags: ["Data Input", "Data Cleaning", "Formatting", "Bulk Processing"],
      },
      {
        icon: Users,
        title: "CRM Management",
        desc: "Keep your CRM clean, updated, and actionable across all platforms.",
        tags: ["HubSpot", "Salesforce", "Zoho", "Pipeline Tracking"],
      },
      {
        icon: ShoppingBag,
        title: "Order Processing",
        desc: "Seamless order handling from fulfillment to customer updates.",
        tags: ["Order Tracking", "Fulfillment", "Exceptions", "Updates"],
      },
      {
        icon: FileCheck,
        title: "Documentation & Verification",
        desc: "Ensure compliance, accuracy, and secure record handling.",
        tags: ["KYC", "Compliance", "Contracts", "Verification"],
      },
      {
        icon: MonitorCog,
        title: "Operations Support",
        desc: "Optimize workflows and execute SOPs with precision.",
        tags: ["SOP Execution", "Coordination", "Vendors", "Optimization"],
      },
      {
        icon: BadgeCheck,
        title: "Quality Assurance",
        desc: "Maintain high standards with audits and performance checks.",
        tags: ["Audits", "Error Checking", "Reporting", "Accuracy"],
      },
      
    ],
  },
  whyItWorks: {
  heading: { 
    normal: "Built to streamline your", 
    line2: "operations and eliminate", 
    gold: "inefficiencies." 
  },
  subtext:
    "We take on the operational load so your core team can focus on growth, strategy, and high-impact work.",

  points: [
    {
      icon: RefreshCcwDot,
      iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
      iconColor: "#C9A45C",
      tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
      title: "Eliminate repetitive workload",
      desc: "Offload time-consuming operational tasks and free your internal team to focus on strategic priorities.",
      tag: "⚡ Productivity boost",
    },
    {
      icon: Target,
      iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
      iconColor: "#3b7dd8",
      tagStyle: "bg-[#eef4ff] text-[#2563c0]",
      title: "High data accuracy across systems",
      desc: "Maintain clean, reliable, and structured data across every platform your business depends on.",
      tag: "📊 Data integrity",
    },
    {
      icon: Scaling,
      iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
      iconColor: "#7c3aed",
      tagStyle: "bg-[#f3effe] text-[#5b21b6]",
      title: "Scale operations instantly",
      desc: "Adapt to peak demand without delays  scale capacity up or down as your business evolves.",
      tag: "↕ Flexible scaling",
    },
    {
      icon: Workflow,
      iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
      iconColor: "#22a06b",
      tagStyle: "bg-[#edfaf3] text-[#15794d]",
      title: "Remove operational bottlenecks",
      desc: "Streamline workflows to accelerate decisions, improve delivery speed, and reduce friction.",
      tag: "🚀 Faster execution",
    },
  ],

  stats: [
    { num: "40", suffix: "%", label: "Less operational friction" },
    { num: "99", suffix: "%", label: "Data accuracy" },
    { num: "3", suffix: "x", label: "Faster processing" },
    { num: "0", suffix: "%", label: "Operational delays" },
  ],
},

howItWorks: {
  heading: {
    normal: "From messy workflows to",
    line2: "fully optimized",
    gold: "operations.",
  },
  subtext:
    "A structured approach to transform your back-office into a high-efficiency engine.",

  steps: [
    {
      num: "01",
      title: "Operations Audit",
      desc: "We analyze your current workflows, systems, and identify high-friction and repetitive tasks.",
      done: true,
    },
    {
      num: "02",
      title: "Role & Workflow Design",
      desc: "We define roles, processes, and output expectations tailored to your operational needs.",
      done: true,
    },
    {
      num: "03",
      title: "Staff & System Training",
      desc: "Specialists are onboarded into your tools and trained to follow your SOPs precisely.",
      done: true,
    },
    {
      num: "04",
      title: "Monitor & Optimize",
      desc: "Continuous tracking, reporting, and workflow improvements to maintain peak efficiency.",
      done: false,
    },
  ],
},

quote: {
  quote:
    "Our CRM went from a mess of duplicates and dead contacts to a clean, reliable pipeline. We closed three deals in the first month just from data we already had.",
  author: "VP of Sales",
  sub: "Logistics Company · Chicago, IL",
},
};

function Bank() {
  return (
    <>
      <HeroSection {...data.hero} />
              <WhatWeProvide {...data.whatWeProvide} />
              <WhyItWorks {...data.whyItWorks} />
              <HowItWorks {...data.howItWorks} />
              <QuoteSection {...data.quote} />
            
    </>
  )
}

export default Bank