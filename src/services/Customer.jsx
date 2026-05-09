import React from 'react'
import HeroImage from "../assets/images/heroCustomer.avif";


import { HiOutlineMicrophone } from "react-icons/hi";

import {
  Mail,
  UserCheck,
  TrendingUp,
  PhoneOutgoing,
  MonitorCog,
  MessageCircle,
  PhoneIncoming,
  BadgeCheck,
  Scaling,
  Globe,
  Workflow,
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
    eyebrow: "Customer Operations",
    image: HeroImage,
    heading: {
      line1: "Every customer interaction, ",
      line2: "handled with care",
      line3: "and consistency.",
    },
    body: "From first contact to final resolution, our trained agents become the voice of your brand  delivering responsive, empathetic support across chat, email, and phone.",
    stats: [
      {
        num: "3",
        suffix: "X",
        label: "Faster average response vs. in-house teams",
      },
      { num: "24", suffix: "/7", label: "Coverage across time zones" },
      { num: "94", suffix: "%", label: "Average client satisfaction score" },
    ],
  },
  whatWeProvide: {
    heading: {
      normal: "Everything your customer",
      gold: "operations need",
    },
    subtext:
      "Deliver seamless, high-quality customer experiences across every touchpoint  with scalable support designed to grow with your business.",

    services: [
      {
        icon: MessageCircle,
        title: "Chat Support",
        desc: "Real-time assistance for instant customer engagement.",
        tags: [
          "Live Chat",
          "Proactive Support",
          "Ticket Routing",
          "First Response",
        ],
      },
      {
        icon: Mail,
        title: "Email Support",
        desc: "Efficient inbox management with timely responses.",
        tags: ["Inbox Handling", "SLA Response", "Escalation", "Templates"],
      },
      {
        icon: HiOutlineMicrophone,
        title: "Voice Support",
        desc: "Professional call handling with empathy and clarity.",
        tags: [
          "Inbound Calls",
          "Issue Resolution",
          "De-escalation",
          "Customer Care",
        ],
      },
      {
        icon: PhoneIncoming,
        title: "Inbound Call Center",
        desc: "Scalable solutions for high-volume customer queries.",
        tags: ["Order Queries", "Account Help", "FAQs", "Tier 1 Support"],
      },
      {
        icon: PhoneOutgoing,
        title: "Outbound Call Center",
        desc: "Strategic outbound communication to nurture leads and strengthen customer relationships.",
        tags: ["Cold Calling", "Lead Nurturing", "Upselling", "Re-engagement"],
      },
      {
        icon: MonitorCog,
        title: "Technical Support",
        desc: "Expert assistance to resolve technical issues بسرعة and ensure seamless user experience.",
        tags: [
          "Diagnostics",
          "Issue Resolution",
          "System Monitoring",
          "User Assistance",
        ],
      },
    ],
  },
  whyItWorks: {
    heading: {
      normal: "Built for brands that",
      line2: "obsess over",
      gold: "customer experience.",
    },
    subtext:
      "Enterprise-grade customer support designed to scale, adapt, and deliver consistently exceptional experiences.",

    points: [
      {
        icon: BadgeCheck,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "Brand-trained support agents",
        desc: "Every agent is trained to reflect your tone, values, and voice  delivering a seamless in-house experience.",
        tag: "🎯 Brand-aligned",
      },
      {
        icon: Scaling,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Scale instantly, without friction",
        desc: "Ramp teams up or down based on demand  without hiring delays or operational overhead.",
        tag: "⚡ On-demand scaling",
      },
      {
        icon: Globe,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "24/7 global coverage",
        desc: "Multi-timezone support ensures your customers are never waiting  day or night.",
        tag: "🌍 Always available",
      },
      {
        icon: Workflow,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Reduce support costs significantly",
        desc: "Lower operational expenses by up to 60% while improving service quality and response times.",
        tag: "💰 Cost optimized",
      },
    ],

    stats: [
      { num: "3", suffix: "x", label: "Faster response time" },
      { num: "24/7", suffix: "", label: "Global coverage" },
      { num: "94", suffix: "%", label: "CSAT score" },
      { num: "60", suffix: "%", label: "Cost reduction" },
    ],
  },

  howItWorks: {
    heading: {
      normal: "From onboarding to",
      line2: "fully optimized",
      gold: "support  fast.",
    },
    subtext:
      "A streamlined process designed to launch and scale your customer operations without friction.",

    steps: [
      {
        num: "01",
        title: "Brand & Support Audit",
        desc: "We deep dive into your product, tone of voice, workflows, and common customer interactions.",
        done: true,
      },
      {
        num: "02",
        title: "Team Setup & Training",
        desc: "We assemble and train a dedicated support team aligned with your tools and service channels.",
        done: true,
      },
      {
        num: "03",
        title: "System Integration",
        desc: "Our agents integrate seamlessly with your helpdesk (Zendesk, Freshdesk, Intercom, etc.).",
        done: true,
      },
      {
        num: "04",
        title: "Live & Continuous Optimization",
        desc: "We monitor CSAT, SLA, and performance weekly  continuously improving outcomes.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "We reduced response times from 6 hours to under 45 minutes almost overnight. Customer satisfaction improved instantly, and our support feels truly world-class now.",
    author: "Head of Operations",
    sub: "D2C E-commerce Brand · Portland, OR",
  },
};

function Customer() {
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

export default Customer