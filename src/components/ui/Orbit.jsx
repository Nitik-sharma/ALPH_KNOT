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
import image from "../../assets/images/Heero.avif";

const services = [Brain, Users, Briefcase, BarChart3, Settings, Cpu];

const Orbit = () => {
  const radius = 170;

  return (
    <div className="relative w-[450px] h-[450px] flex items-center justify-center">
      {/* IMAGE */}
      <img
        src={image}
        alt="person working"
        className="w-60 h-60 object-cover rounded-xl z-10 shadow-xl"
      />

      {/* SVG CLIP (SCREEN AREA) */}
      <svg className="absolute w-full h-full z-20 pointer-events-none">
        <defs>
          <clipPath id="screenClip">
            {/* 👉 Adjust this EXACTLY to your screen */}
            <rect x="210" y="170" width="110" height="75" rx="8" />
          </clipPath>
        </defs>

        <g clipPath="url(#screenClip)">
          {services.map((Icon, i) => (
            <foreignObject key={i} x="200" y="150" width="120" height="120">
              <motion.div
                initial={{
                  y: 60,
                  scale: 0.3,
                  opacity: 0,
                }}
                animate={{
                  y: -60,
                  scale: [0.3, 1.5, 1],
                  opacity: 1,
                }}
                transition={{
                  delay: i * 0.9,
                  duration: 1.3,
                  ease: "easeOut",
                }}
                className="flex items-center justify-center"
              >
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <Icon size={18} className="text-[#3FA7B3]" />
                </div>
              </motion.div>
            </foreignObject>
          ))}
        </g>
      </svg>

      {/* ORBIT GUIDE */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-[#1F2E4F]/10" />

      {/* ORBIT ANIMATION */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
        className="absolute w-full h-full"
      >
        {services.map((Icon, i) => {
          const angle = (i / services.length) * 360;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 + i * 0.2 }}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              <div className="bg-white p-3 rounded-xl shadow-lg border border-[#1F2E4F]/10">
                <Icon size={20} className="text-[#3FA7B3]" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Orbit;
