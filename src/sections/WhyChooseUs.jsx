import React,{useState} from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Settings,
  TrendingUp,
  Clock,
  Brain,
  UserCheck,
  DollarSign,
  Globe2,
} from "lucide-react";
import globe from "../assets/images/Background.png";
import image1 from "../assets/images/Home/time-zone-synced-execution-outsourcing.avif"
import image2 from "../assets/images/Home/strategic-talent-augmentation-services.avif"
import image3 from "../assets/images/Home/scalable-remote-execution-teams.avif"
import image4 from "../assets/images/Home/zero-hiring-friction-talent-solutions.png"
import image5 from "../assets/images/Home/cost-efficient-business-operations.avif"
import image6 from "../assets/images/Home/global-talent.png"
import image7 from "../assets/images/Home/angile.png"
import image8 from "../assets/images/Home/flexible.png"
import image9 from "../assets/images/Home/Execution.png"
import workforceImage from "../assets/images/Home/workforce.png"
import executionImage from "../assets/images/Home/Excecution.png"
import growthImage from "../assets/images/Home/Growth.png"
import DetailModal from "../components/common/DetailModal";

const data = [
  {
    icon: Globe,
    image: image7,
    title: "Dedicated Workforce",
    desc: "Dedicated professionals who integrate seamlessly and work like your in-house team.",
  },
  {
    icon: Settings,
    image: image8,
    title: "Reliable Execution",
    desc: "Consistent delivery through structured processes, accountability, and operational excellence.",
  },
  {
    icon: TrendingUp,
    image: image9,
    title: "Scalable Growth",
    desc: "Flexible workforce solutions built to support long-term business growth efficiently.",
  },
];

const whyChooseUs=[
  {
    image: workforceImage,
    title: "Reduced Business Risk",
    desc: "Minimize operational challenges through dedicated teams, structured processes, and dependable workforce support.",

    overview:
      "Business growth shouldn't come with unnecessary operational risk. AlphKnot helps reduce uncertainty by providing dedicated professionals, clearly defined workflows, and managed execution that keeps your business running efficiently.",

    highlights: [
      "Dedicated professionals aligned with your business",
      "Clearly defined processes and accountability",
      "Reduced hiring and operational risks",
      "Consistent business continuity",
    ],

    benefits: [
      "Lower operational risk",
      "Reliable workforce",
      "Business continuity",
      "Greater peace of mind",
    ],
  },

  {
    image: executionImage,
    title: "Reliable Execution",
    desc: "Consistent performance, transparent communication, and accountability across every business function.",

    overview:
      "Execution is what drives business success. Our dedicated teams become an extension of your organization, delivering work with transparency, consistency, and complete ownership so your operations continue to move forward without disruption.",

    highlights: [
      "Dedicated execution teams",
      "Transparent communication",
      "Defined KPIs and reporting",
      "Ownership of daily operations",
    ],

    benefits: [
      "Improved productivity",
      "Consistent delivery",
      "Greater accountability",
      "Operational efficiency",
    ],
  },

  {
    image: growthImage,
    title: "Scalable Growth",
    desc: "Flexible workforce solutions designed to support evolving business needs and long-term growth.",

    overview:
      "As your business grows, your workforce should grow with it. AlphKnot provides flexible workforce solutions that allow you to expand operations, add new capabilities, and support long-term business growth without the complexity of traditional hiring.",

    highlights: [
      "Flexible workforce expansion",
      "Custom teams for evolving needs",
      "Support across multiple business functions",
      "Built for long-term partnerships",
    ],

    benefits: [
      "Scale with confidence",
      "Lower operating costs",
      "Greater flexibility",
      "Sustainable business growth",
    ],
  },
];

const WhyChooseUs = () => {
  const [selected, setSelected] = useState(null)
  
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl text-[#04388b] tracking-tight mb-4"
        >
          Built for Growth{" "}
          <span className="text-[#bb7f14]">Optimized for Efficiency</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-sm md:text-xl text-[#1F2E4F]/55 tracking-tight mb-16"
        >
          AlphKnot provides dedicated teams that become an extension of your
          business. From business operations and customer support to finance,
          technology, and back-office execution, we handle the work that powers
          your growth so you can focus on strategy, innovation, and scaling with
          confidence.
        </motion.p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {data.map((item, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl border border-[#bb7f14]/20 bg-[#1F2E4F] shadow-lg shadow-[#1F2E4F]/10 hover:border-[#bb7f14]/55 hover:shadow-xl hover:shadow-[#1F2E4F]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line — grows full-width on hover */}
              <span className="absolute top-0 left-0 h-[3px] w-10 bg-[#bb7f14]/70 group-hover:w-full transition-all duration-500 z-10" />

              {/* IMAGE — no overlay, natural colors */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* BODY */}
              <div className="relative px-7 pb-8">
                {/* Floating icon badge — bridges image and text */}
                <div className="-mt-7 mb-5 w-14 h-14 rounded-full bg-[#bb7f14] border-4 border-[#1F2E4F] flex items-center justify-center shadow-md group-hover:bg-[#6db9d1] transition-colors duration-300">
                  <item.icon size={22} className="text-[#1F2E4F]" />
                </div>

                {/* Watermark index */}

                {/* TITLE */}
                <h3 className="text-xl text-white font-semibold mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DARK SECTION */}
        <section className="max-w-7xl  py-20 px-6">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#04388b] mb-3 leading-tight tracking-tight">
            Why Growing Companies Partner with{" "}
            <span className="text-[#bb7f14]">AlphKnot ?</span>
          </h2>

          <p className="text-center text-sm md:text-xl text-[#1F2E4F]/55  mb-16">
            A dedicated execution partner built to help you scale faster,
            operate smarter, and reduce operational costs.
          </p>

          {/* Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className=" w-full bg-[#1F2E4F] rounded-2xl overflow-hidden border border-[#bb7f14]/15  hover:border-[#bb7f14]/50 transition-all duration-300 group cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Divider */}

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-5">
                    <h4 className="text-white font-bold text-xl leading-snug group-hover:text-[#bb7f14] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <button onClick={()=>setSelected(item)} className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#04388b] hover:text-[#bb7f14] text-[#ffffff] text-lg font-bold shrink-0 transition-transform duration-300 hover:scale-110">
                      {"->"}
                    </button>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </section>
        <DetailModal item={selected} onClose={()=>{setSelected(null)}}/>
      </div>
    </section>
  );
};

export default WhyChooseUs;
