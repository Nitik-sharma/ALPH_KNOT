import React from "react";
import HeroImage from "../assets/images/industry.avif";
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
  BookOpen,
  ClipboardList,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Heart,
  Lightbulb,
  LineChart,
  Palette,
  RefreshCw,
  Repeat,
  Rocket,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
const data = {
  hero: {
    eyebrow: "Industry-Specific Solutions",
    image: HeroImage,
    heading: {
      line1: "Outsourced support that speaks",
      line2: "your industry's",
      line3: "language.",
    },
    body: "We go beyond general staffing  providing professionals trained in the workflows, compliance requirements, and customer expectations of your specific industry.",

    stats: [
      {
        num: "100",
        suffix: "%",
        label: "Industry-trained professionals",
      },
      {
        num: "0",
        suffix: "%",
        label: "Ramp-up time required",
      },
      {
        num: "3",
        suffix: "x",
        label: "Faster operational readiness",
      },
    ],
  },

  whatWeProvide: {
    heading: {
      normal: "Specialized support tailored to",
      gold: "your industry.",
    },
    subtext:
      "We provide trained professionals who understand your domain, workflows, and compliance requirements from day one.",

    services: [
      {
        icon: Heart,
        title: "Healthcare Support",
        desc: "Medical admin, patient coordination, and billing support.",
        tags: ["Patient Care", "Billing", "Coordination", "Compliance"],
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Operations",
        desc: "Product listings, returns management, and fulfillment support.",
        tags: ["Listings", "Returns", "Fulfillment", "Orders"],
      },
      {
        icon: Truck,
        title: "Logistics & Supply Chain",
        desc: "Tracking, vendor coordination, and dispatch support.",
        tags: ["Tracking", "Vendors", "Dispatch", "Logistics"],
      },
      {
        icon: BookOpen,
        title: "EdTech Support",
        desc: "Tutoring coordination, student support, and LMS administration.",
        tags: ["Students", "LMS", "Coordination", "Support"],
      },
    ],
  },

  whyItWorks: {
    heading: {
      normal: "Built for domain expertise",
      line2: "and operational",
      gold: "efficiency.",
    },
    subtext:
      "Industry-trained teams that integrate quickly and deliver results without the learning curve.",

    points: [
      {
        icon: UserCheck,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "No ramp-up time required",
        desc: "Professionals are trained in your industry workflows from day one.",
        tag: "⚡ Instant productivity",
      },
      {
        icon: ShieldCheck,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Compliance-ready operations",
        desc: "Support aligned with industry regulations and standards.",
        tag: "🛡 Fully compliant",
      },
      {
        icon: TrendingUp,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Scalable with your demand",
        desc: "Easily scale operations during seasonal or business growth periods.",
        tag: "📈 Scalable",
      },
      {
        icon: Users,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Deep industry understanding",
        desc: "Specialists who understand your customers and workflows instantly.",
        tag: "🎯 Domain experts",
      },
    ],

    stats: [
      {
        num: "100",
        suffix: "%",
        label: "Industry-trained professionals",
      },
      {
        num: "0",
        suffix: "%",
        label: "Ramp-up time",
      },
      {
        num: "2",
        suffix: "x",
        label: "Faster onboarding speed",
      },
      {
        num: "50",
        suffix: "%",
        label: "Reduction in operational delays",
      },
    ],
  },

  howItWorks: {
    heading: {
      normal: "From industry needs to",
      line2: "fully aligned",
      gold: "operations  fast.",
    },
    subtext:
      "A structured process to deploy domain-trained teams that integrate seamlessly into your workflows.",

    steps: [
      {
        num: "01",
        title: "Industry & Workflow Analysis",
        desc: "We understand your industry requirements, workflows, and compliance needs.",
        done: true,
      },
      {
        num: "02",
        title: "Specialist Team Matching",
        desc: "We assign professionals trained specifically for your domain and operations.",
        done: true,
      },
      {
        num: "03",
        title: "System Integration",
        desc: "Our team integrates into your tools and processes with minimal disruption.",
        done: true,
      },
      {
        num: "04",
        title: "Ongoing Optimization",
        desc: "We monitor performance and continuously improve efficiency and outcomes.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "What impressed us most was how quickly the team understood our industry. There was no learning curve  they delivered value from day one.",
    author: "Operations Director",
    sub: "Enterprise Team · AlphKnot",
  },
};

function IndustrySolutions() {
    return <>
    <HeroSection {...data.hero} />
            <WhatWeProvide {...data.whatWeProvide} />
            <WhyItWorks {...data.whyItWorks} />
            <HowItWorks {...data.howItWorks} />
            <QuoteSection {...data.quote} />
    </>;
}

export default IndustrySolutions;
