import React from "react";
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

const data = [
  {
    icon: Globe,
    image: image7,
    title: "Dedicated Workforce That Works as Your Team",
    desc: "AlphKnot provides dedicated professionals who become a seamless extension of your organization. From daily operations to specialized business functions, our workforce works alongside your internal teams with accountability, consistency, and long-term commitment.",
  },
  {
    icon: Settings,
    image: image8,
    title: "Operational Support That Drives Growth",
    desc: "Our managed teams handle administrative, operational, customer, finance, marketing, technology, and back-office functions so your business can focus on innovation, customers, and strategic growth while we execute the work that keeps your company moving.",
  },
  {
    icon: TrendingUp,
    image: image9,
    title: "Fast Execution. Greater Efficiency. Lower Operating Costs.",
    desc: "Speed matters in business. Our experienced teams deliver high-quality execution with streamlined processes, helping you reduce operational costs, improve productivity, and scale confidently without the expense and delays of traditional hiring.",
  },
];

const WhyChooseUs = () => {
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
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
        <section className="w-full bg-[#f4f8fb] py-20 px-6">
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
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: workforceImage,

                title: "Dedicated Teams. Real Ownership.",
                desc: "Our professionals become an extension of your business, taking ownership of operations and delivering consistent execution that drives long-term growth.",
              },
              {
                image: executionImage,

                title: "Fast Execution Without Hiring Delays",
                desc: "Skip recruitment, onboarding, and management overhead. We deploy experienced teams that integrate quickly and keep your business moving forward.",
              },
              {
                image: growthImage,

                title: "Scale Smarter. Operate More Efficiently.",
                desc: "Expand your workforce as your business grows while reducing operational costs, improving productivity, and maintaining exceptional quality.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1F2E4F] rounded-2xl overflow-hidden border border-[#bb7f14]/15 hover:-translate-y-1 hover:border-[#bb7f14]/50 transition-all duration-300 group cursor-pointer flex flex-col"
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
                  <h4 className="text-white font-bold  text-xl leading-snug mb-2 group-hover:text-[#bb7f14] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-white/[0.06] text-[#bb7f14] text-[10px] font-bold uppercase tracking-widest">
                    Learn more
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default WhyChooseUs;
