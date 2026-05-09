import React from 'react'
import HeroImage from "../assets/images/tech.avif"
import {
  HeroSection,
  WhatWeProvide,
  WhyItWorks,
  HowItWorks,
  QuoteSection,
} from "../../src/components/ServicePage";
import { BarChart, Cloud, Code, Cpu, Database, Globe, Lightbulb, Palette, RefreshCw, Repeat, Rocket, Settings, Shield, ShoppingCart, Wrench, Zap } from 'lucide-react';
const data = {
  hero: {
    eyebrow: "Tech & Development",
    image: HeroImage,
    heading: {
      line1: "Build scalable technology",
      line2: "without expanding",
      line3: "your internal team.",
    },
    body: "Our developers design, build, and automate systems that power your business  from websites to custom software and AI-driven workflows.",

    stats: [
      {
        num: "2",
        suffix: "x",
        label: "Faster development and deployment cycles",
      },
      {
        num: "50",
        suffix: "%",
        label: "Reduction in manual processes through automation",
      },
      {
        num: "99",
        suffix: "%",
        label: "System reliability and uptime",
      },
    ],
  },
  whatWeProvide: {
    heading: {
      normal: "Technical solutions, built by experts who understand",
      gold: "your systems.",
    },
    subtext:
      "From web development to custom software and AI automation, we build and optimize technology that scales with your business.",

    services: [
      {
        icon: Globe,
        title: "Web Development",
        desc: "High-performance websites and landing pages built for speed, scalability, and conversion.",
        tags: ["React", "Webflow", "WordPress", "Landing Pages"],
      },
      {
        icon: Code,
        title: "Software Development",
        desc: "Custom-built applications, APIs, and backend systems tailored to your business needs.",
        tags: ["Custom Apps", "APIs", "Backend", "Architecture"],
      },
      {
        icon: Cpu,
        title: "AI Solutions & Automation",
        desc: "Automate workflows and integrate AI tools to improve efficiency and reduce manual work.",
        tags: ["Automation", "GPT", "Bots", "Integrations"],
      },
      {
        icon: Settings,
        title: "IT Support",
        desc: "Reliable system management, troubleshooting, and ongoing technical support.",
        tags: ["System Admin", "Support", "Monitoring", "Maintenance"],
      },

      {
        icon: Palette,
        title: "UI/UX Design",
        desc: "User-centered designs that enhance engagement, usability, and overall product experience.",
        tags: ["Figma", "Wireframes", "Prototyping", "Design Systems"],
      },
      {
        icon: Cloud,
        title: "Cloud & Deployment",
        desc: "Scalable cloud infrastructure and seamless deployment for fast, secure, and reliable applications.",
        tags: ["AWS", "Vercel", "Render", "Cloud Hosting"],
      },
      {
        icon: Shield,
        title: "Cybersecurity",
        desc: "Protect your applications and data with robust security practices and vulnerability prevention.",
        tags: ["Security", "JWT", "OAuth", "Data Protection"],
      },
      {
        icon: Database,
        title: "Database Management",
        desc: "Efficient data storage, optimization, and management for high-performance applications.",
        tags: ["MongoDB", "MySQL", "Optimization", "Data Modeling"],
      },
      {
        icon: BarChart,
        title: "Data Analytics",
        desc: "Turn raw data into actionable insights with dashboards and analytics solutions.",
        tags: ["Dashboards", "Visualization", "Insights", "Reports"],
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Development",
        desc: "Build secure and scalable online stores with seamless user experience and payment integration.",
        tags: ["Shopify", "Payment Gateway", "Cart", "Checkout"],
      },
      {
        icon: Wrench,
        title: "Maintenance & Support",
        desc: "Ongoing updates, performance optimization, and technical support to keep your systems running smoothly.",
        tags: ["Updates", "Bug Fixes", "Optimization", "Monitoring"],
      },
      {
        icon: Lightbulb,
        title: "IT Consulting",
        desc: "Strategic guidance to help you choose the right technology and scale your digital products.",
        tags: ["Strategy", "MVP", "Architecture", "Consulting"],
      },
    ],
  },
  whyItWorks: {
    heading: {
      normal: "Built for speed, reliability,",
      line2: "and long-term",
      gold: "scalability.",
    },
    subtext:
      "A flexible, execution-focused approach that ensures your tech projects are delivered efficiently and without friction.",

    points: [
      {
        icon: Zap,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "No-gap technical delivery",
        desc: "Developers are available exactly when you need them  ensuring continuous progress.",
        tag: "⚡ Always available",
      },
      {
        icon: Rocket,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Faster time-to-launch",
        desc: "Accelerate product development with dedicated technical capacity and streamlined workflows.",
        tag: "🚀 Faster launch",
      },
      {
        icon: Repeat,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Automation-driven efficiency",
        desc: "Eliminate repetitive tasks and save hundreds of operational hours through automation.",
        tag: "🤖 Time saved",
      },
      {
        icon: RefreshCw,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Flexible engagement models",
        desc: "Work with us on a project basis or as an ongoing extension of your technical team.",
        tag: "🔄 Flexible",
      },
      ,
    ],

    stats: [
      { num: "2", suffix: "x", label: "Faster development cycles" },
      { num: "50", suffix: "%", label: "Reduction in manual processes" },
      { num: "99", suffix: "%", label: "System reliability uptime" },
      { num: "0", suffix: "%", label: "Project delivery delays" },
    ],
  },

  howItWorks: {
    heading: {
      normal: "From idea to",
      line2: "fully deployed",
      gold: "solutions  fast.",
    },
    subtext:
      "A streamlined development process designed to build, launch, and scale your technology efficiently.",

    steps: [
      {
        num: "01",
        title: "Requirement Discovery",
        desc: "We understand your goals, technical requirements, and system architecture needs.",
        done: true,
      },
      {
        num: "02",
        title: "Solution Design",
        desc: "We design scalable architecture, workflows, and technical roadmap for execution.",
        done: true,
      },
      {
        num: "03",
        title: "Development & Integration",
        desc: "Our team builds, tests, and integrates solutions into your existing systems.",
        done: true,
      },
      {
        num: "04",
        title: "Deployment & Optimization",
        desc: "We launch, monitor, and continuously improve performance and scalability.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "They didn’t just build our product  they created a scalable system that supports our growth. Everything runs faster, smoother, and far more efficiently now.",
    author: "CTO",
    sub: "Tech Team · AlphKnot",
  },
};

function TechDevelopment() {
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

export default TechDevelopment