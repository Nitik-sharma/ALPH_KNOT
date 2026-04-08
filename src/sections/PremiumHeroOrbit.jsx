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
import image from "../assets/images/Heero.avif";

const services = [
  { icon: Brain },
  { icon: Users },
  { icon: Briefcase },
  { icon: BarChart3 },
  { icon: Settings },
  { icon: Cpu },
];

const PremiumHeroOrbit = () => {
  const radius = 220; // Increased radius slightly to clear the image corners

  return (
    <div className="relative w-[600px] h-[600px] flex items-center justify-center bg-white">
      {/* 🧑‍💻 CENTER IMAGE */}
      <div className="relative z-10">
        <img
          src={image}
          alt="Person working"
          className="w-72 h-72 object-cover rounded-3xl shadow-2xl border-4 border-white relative z-10"
        />
        <motion.div
          animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-[#D4AF37] blur-3xl rounded-full z-0"
        />
      </div>

      {/* 🔵 ORBIT GUIDE LINE */}
      <div className="absolute w-[440px] h-[440px] rounded-full border border-gray-100" />

      {/* 🔥 THE ANIMATION ENGINE */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
        <defs>
          <clipPath id="screenClip">
            {/* Align this with the screen center of your monitor in the image */}
            <rect x="230" y="240" width="140" height="90" rx="8" />
          </clipPath>
        </defs>

        {services.map((service, i) => {
          const finalAngle = (i / services.length) * 360;
          const xFinal = Math.cos((finalAngle * Math.PI) / 180) * radius;
          const yFinal = Math.sin((finalAngle * Math.PI) / 180) * radius;
          const delay = i * 0.9;

          return (
            <g key={i}>
              {/* PHASE 1: MASKED (Only visible inside screen, then disappears) */}
              <g clipPath="url(#screenClip)">
                <foreignObject x="0" y="0" width="600" height="600">
                  <div className="w-full h-full flex items-center justify-center">
                    <motion.div
                      initial={{ y: 60, opacity: 0, scale: 0.3 }}
                      animate={{
                        y: [60, 0, -60],
                        opacity: [0, 1, 1, 0], // ADDED 0 AT THE END TO HIDE IT
                        scale: [0.3, 1.4, 1.2, 1],
                      }}
                      transition={{
                        delay: delay,
                        duration: 1.5,
                        ease: "easeOut",
                        times: [0, 0.2, 0.8, 1], // Timing the opacity drop at the very end
                      }}
                      className="bg-white p-3 rounded-xl shadow-lg border border-gray-100"
                    >
                      <service.icon size={22} className="text-[#D4AF37]" />
                    </motion.div>
                  </div>
                </foreignObject>
              </g>

              {/* PHASE 2 & 3: TRAVEL & ORBIT (Starts hidden, appears outside screen) */}
              <foreignObject x="0" y="0" width="600" height="600">
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    className="absolute"
                    initial={{ x: 0, y: -60, opacity: 0, scale: 1.2 }}
                    animate={{
                      x: [0, xFinal],
                      y: [-60, yFinal],
                      opacity: [0, 1], // Fades in as it starts moving to orbit
                      scale: [1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      x: { delay: delay + 1.2, duration: 1.2, ease: "easeOut" },
                      y: { delay: delay + 1.2, duration: 1.2, ease: "easeOut" },
                      opacity: { delay: delay + 1.2, duration: 0.3 },
                      scale: { delay: delay + 1.2, duration: 1.2 },
                      rotate: {
                        delay: delay + 2.4,
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    style={{
                      transformOrigin: `${-xFinal}px ${-yFinal}px`,
                    }}
                  >
                    <div className="relative group translate-x-[-50%] translate-y-[-50%]">
                      <div className="bg-white p-3 rounded-xl shadow-2xl border border-gray-50 flex items-center justify-center">
                        <service.icon
                          size={22}
                          className="text-[#D4AF37]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/5 blur-md rounded-full" />
                    </div>
                  </motion.div>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PremiumHeroOrbit;
