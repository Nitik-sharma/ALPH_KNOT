import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Users,
  Briefcase,
  BarChart3,
  Settings,
  Cpu,
} from "lucide-react";

// Placeholder image URL - replace with your local asset
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800";

const services = [
  { icon: Brain, label: "AI Solutions" },
  { icon: Users, label: "Team Management" },
  { icon: Briefcase, label: "Business Growth" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Customization" },
  { icon: Cpu, label: "Cloud Infra" },
];

const PremiumHero = () => {
  const radius = 190; // Orbital distance
  const iconCount = services.length;

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-12 overflow-hidden font-sans">
      {/* LEFT CONTENT: TEXT & CTA */}
      <div className="z-10 max-w-xl">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4 block"
        >
          Next-Gen Solutions
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-slate-900 leading-tight mb-6"
        >
          Elevate Your Business <br />
          <span className="text-[#D4AF37]">With Digital Intelligence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-lg mb-8"
        >
          A seamless ecosystem of services designed to scale your operations
          from the screen to the world.
        </motion.p>
        <div className="flex gap-4">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg">
            Get Started
          </button>
          <button className="border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all">
            Watch Demo
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT: THE ANIMATION ENGINE */}
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        {/* 1. ORBIT GUIDE LINE */}
        <div className="absolute w-[380px] h-[380px] rounded-full border border-gray-100 z-0" />

        {/* 2. MAIN IMAGE CONTAINER */}
        <div className="relative z-20 group">
          {/* Subtle Screen Glow when icons emerge */}
          <motion.div
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#D4AF37] blur-3xl rounded-full scale-75"
          />
          <img
            src={HERO_IMAGE}
            alt="Person working"
            className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-white relative z-20"
          />
        </div>

        {/* 3. ICON ANIMATION LAYER */}
        <div className="absolute inset-0 z-30">
          {services.map((service, i) => {
            const angle = (i / iconCount) * 360;
            const xFinal = Math.cos((angle * Math.PI) / 180) * radius;
            const yFinal = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2"
                initial={{
                  x: 0,
                  y: 10, // Start inside screen area
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  // Step 1: Pop Out from Screen
                  // Step 2: Move to Orbital Position
                  x: [0, 0, xFinal],
                  y: [10, -80, yFinal],
                  opacity: [0, 1, 1],
                  scale: [0.3, 1.4, 1],
                  // Step 3: Constant Rotation (Once in position)
                  rotate: [0, 360],
                }}
                transition={{
                  // The "Pop and Move" sequence
                  x: {
                    times: [0, 0.4, 1],
                    duration: 2,
                    delay: i * 0.6,
                    ease: "easeOut",
                  },
                  y: {
                    times: [0, 0.4, 1],
                    duration: 2,
                    delay: i * 0.6,
                    ease: "easeOut",
                  },
                  opacity: { times: [0, 0.2, 1], duration: 2, delay: i * 0.6 },
                  scale: { times: [0, 0.4, 1], duration: 2, delay: i * 0.6 },
                  // The Perpetual Orbiting
                  rotate: {
                    delay: i * 0.6 + 2,
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{ originX: `${-xFinal}px`, originY: `${-yFinal}px` }}
              >
                {/* ICON BOX */}
                <div className="relative group -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center transition-transform hover:scale-110">
                    <service.icon
                      size={24}
                      className="text-[#D4AF37]"
                      strokeWidth={1.5}
                    />

                    {/* Tooltip on hover */}
                    <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap uppercase tracking-tighter">
                      {service.label}
                    </span>
                  </div>
                  {/* Subtle soft shadow under icon */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/5 blur-md rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0" />
    </section>
  );
};

export default PremiumHero;
