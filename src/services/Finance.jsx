import React from "react";
import HeroImage from "../assets/images/finance.avif";

import { HiOutlineMicrophone } from "react-icons/hi";

import {
  BookOpen,
  CreditCard,
  ReceiptText,
  Users,
  BarChart3,
  ShieldCheck,
  AlertCircle,
  FileCheck,
  Coins,
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
    eyebrow: "Finance & Accounting Support",
    image: HeroImage,
    heading: {
      line1: "Financial clarity,",
      line2: "delivered by professionals",
      line3: "who know the numbers.",
    },
    body: "We provide trained bookkeepers and accounting professionals who keep your finances clean, compliant, and decision-ready - without the cost of a full in-house finance team.",
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
      normal: "Financial clarity, delivered by experts who understand",
      gold: "your numbers.",
    },
    subtext:
      "From daily bookkeeping to strategic reporting — we ensure your finances are accurate, compliant, and always decision-ready.",

    services: [
      {
        icon: BookOpen,
        title: "Bookkeeping",
        desc: "Accurate daily transaction recording and reconciliation to keep your books clean and up to date.",
        tags: ["Transactions", "Reconciliation", "Ledgers", "Accuracy"],
      },
      {
        icon: CreditCard,
        title: "Accounts Payable",
        desc: "Streamlined vendor payments and invoice processing to maintain smooth cash flow.",
        tags: ["Invoices", "Vendor Payments", "Processing", "Tracking"],
      },
      {
        icon: ReceiptText,
        title: "Accounts Receivable",
        desc: "Efficient invoicing and collections to improve cash flow and reduce outstanding balances.",
        tags: ["Invoicing", "Collections", "Aging Reports", "Cash Flow"],
      },
      {
        icon: Users,
        title: "Payroll Processing",
        desc: "Accurate and timely payroll management ensuring compliance and employee satisfaction.",
        tags: ["Payroll Runs", "Compliance", "Salaries", "Taxes"],
      },
      {
        icon: BarChart3,
        title: "Financial Reporting",
        desc: "Clear insights through P&L, balance sheets, and cash flow reporting for smarter decisions.",
        tags: ["P&L", "Balance Sheet", "Cash Flow", "Insights"],
      },
    ],
  },
  whyItWorks: {
    heading: {
      normal: "Built for financial clarity",
      line2: "and zero",
      gold: "compromise.",
    },
    subtext:
      "Reliable, compliant, and insight-driven finance operations — without the overhead of an in-house team.",

    points: [
      {
        icon: ShieldCheck,
        iconStyle: "bg-[#fdf6e9] border border-[#f0ddb0]",
        iconColor: "#C9A45C",
        tagStyle: "bg-[#fdf6e9] text-[#a87b2a]",
        title: "Always audit-ready books",
        desc: "Maintain accurate, up-to-date financial records that are fully prepared for audits at any time.",
        tag: "📊 Audit ready",
      },
      {
        icon: AlertCircle,
        iconStyle: "bg-[#eef4ff] border border-[#c7d9f8]",
        iconColor: "#3b7dd8",
        tagStyle: "bg-[#eef4ff] text-[#2563c0]",
        title: "Minimize costly financial errors",
        desc: "Reduce inaccuracies and compliance risks that can lead to penalties or lost revenue.",
        tag: "⚠️ Risk reduced",
      },
      {
        icon: FileCheck,
        iconStyle: "bg-[#f3effe] border border-[#cdb8f8]",
        iconColor: "#7c3aed",
        tagStyle: "bg-[#f3effe] text-[#5b21b6]",
        title: "Clear, decision-ready reporting",
        desc: "Access structured financial insights that help you make faster and smarter business decisions.",
        tag: "📈 Smart insights",
      },
      {
        icon: Coins,
        iconStyle: "bg-[#edfaf3] border border-[#b6e8cf]",
        iconColor: "#22a06b",
        tagStyle: "bg-[#edfaf3] text-[#15794d]",
        title: "Cost-efficient finance operations",
        desc: "Get expert financial support at a fraction of the cost of hiring a full-time accounting team.",
        tag: "💰 Cost effective",
      },
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
      normal: "From setup to",
      line2: "fully optimized",
      gold: "support — in days.",
    },
    subtext:
      "A proven, frictionless process to launch, scale, and continuously improve your customer operations.",

    steps: [
      {
        num: "01",
        title: "Deep Dive & Brand Alignment",
        desc: "We immerse ourselves in your product, tone, workflows, and customer expectations to ensure every interaction feels native to your brand.",
        done: true,
      },
      {
        num: "02",
        title: "Dedicated Team Assembly",
        desc: "We handpick and train a specialized support team aligned with your channels, tools, and service standards.",
        done: true,
      },
      {
        num: "03",
        title: "Seamless System Integration",
        desc: "Our agents plug directly into your helpdesk and workflows — ensuring zero disruption and immediate productivity.",
        done: true,
      },
      {
        num: "04",
        title: "Live Operations & Optimization",
        desc: "We continuously monitor CSAT, SLA, and performance metrics — optimizing workflows to deliver better outcomes over time.",
        done: false,
      },
    ],
  },

  quote: {
    quote:
      "We cut response times from hours to minutes almost overnight. Customer satisfaction improved instantly, and our support now feels like a true extension of our brand.",
    author: "Head of Operations",
    sub: "D2C E-commerce Brand · Portland, OR",
  },
};

function Finance() {
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

export default Finance;
