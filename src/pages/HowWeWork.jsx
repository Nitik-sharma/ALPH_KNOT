import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Initial Call",
    desc: "We begin with a quick call to understand your needs, goals, and expectations.",
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
  },
  {
    title: "Consultation Session",
    desc: "A deeper discussion to align strategy, scope, and execution plan.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Talent Matching",
    desc: "We carefully match you with top professionals suited to your requirements.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Execution & Scale",
    desc: "Your team starts delivering results with flexibility to scale anytime.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-white font-sans py-20">
      {/* 🔥 HEADING */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-sans text-[#1F2E4F]">
          How We Work
        </h2>
        <p className="text-[#1F2E4F]/60 mt-4 max-w-xl mx-auto">
          A seamless process designed for clarity, efficiency, and results.
        </p>
      </div>

      {/* 🔥 STEPS */}
      <div className="flex flex-col">
        {steps.map((step, index) => (
          <div key={index} className="grid md:grid-cols-2 items-center">
            {/* 🔥 IMAGE (conditionally left/right) */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`h-[300px] md:h-[400px] w-full ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 🔥 TEXT */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex items-center justify-center px-8 md:px-16 py-12 ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
            >
              <div className="max-w-md">
                <p className="text-sm text-[#C9A45C] mb-2">Step {index + 1}</p>

                <h3 className="text-2xl font-sans text-[#1F2E4F] mb-4">
                  {step.title}
                </h3>

                <p className="text-[#1F2E4F]/60 leading-relaxed">{step.desc}</p>

                <div className="mt-6 w-12 h-[2px] bg-[#C9A45C]"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
