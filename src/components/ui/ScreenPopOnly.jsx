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

const services = [
  { icon: Brain },
  { icon: Users },
  { icon: Briefcase },
  { icon: BarChart3 },
  { icon: Settings },
  { icon: Cpu },
];

const ScreenPopOnly = () => {
  // Center of your SVG/Container
  const centerX = 225;
  const centerY = 225;

  return (
    <div className="relative w-[450px] h-[450px] flex items-center justify-center bg-white">
      {/* 🧑‍💻 THE DEVICE IMAGE */}
      <div className="relative z-10">
        <img
          src={image}
          alt="Person working"
          className="w-64 h-64 object-cover rounded-2xl shadow-2xl border border-gray-100"
        />

        {/* LIGHT BURST EFFECT (Triggers behind the icons) */}
        <motion.div
          animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-[#D4AF37] blur-[50px] rounded-full z-0"
        />
      </div>

      {/* 🔥 SVG MASKING SYSTEM */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
        <defs>
          <clipPath id="screenClip">
            {/* 🎯 ADJUST RECT: This should match the exact 'screen' area of your image */}
            <rect x="175" y="190" width="100" height="60" rx="4" />
          </clipPath>
        </defs>

        {/* 1. LAYERED MASK: The "Inside Screen" Phase */}
        <g clipPath="url(#screenClip)">
          {services.map((service, i) => (
            <foreignObject key={`in-${i}`} x="0" y="0" width="450" height="450">
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ y: 40, opacity: 0, scale: 0.5 }}
                  animate={{
                    y: [40, 0, -60], // Moves from bottom of screen to top, then out
                    opacity: [0, 1, 1],
                    scale: [0.5, 1, 1.2],
                  }}
                  transition={{
                    delay: i * 1.2,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: (services.length - 1) * 1.2,
                    ease: "easeInOut",
                  }}
                  className="bg-white p-3 rounded-xl shadow-lg border border-gray-100"
                >
                  <service.icon size={24} className="text-[#D4AF37]" />
                </motion.div>
              </div>
            </foreignObject>
          ))}
        </g>

        {/* 2. OVERLAY: The "Popped Out" Phase (No Clip) */}
        {/* We use a duplicate loop without the clipPath for the part where it floats away */}
        {services.map((service, i) => (
          <foreignObject key={`out-${i}`} x="0" y="0" width="450" height="450">
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ y: 0, opacity: 0, scale: 1.2 }}
                animate={{
                  y: [-30, -120], // Continues the upward flight outside the screen
                  opacity: [0, 1, 0], // Fades in as it exits, then disappears
                  scale: [1.2, 1.4, 0.8],
                }}
                transition={{
                  delay: i * 1.2 + 0.8, // Timed to start exactly as the masked version hits the top
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: (services.length - 1) * 1.2 + 0.5,
                  ease: "easeOut",
                }}
                className="bg-white p-3 rounded-xl shadow-2xl border border-[#D4AF37]/20"
              >
                <service.icon size={24} className="text-[#D4AF37]" />
                {/* Soft shadow under floating icon */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-6 h-1 bg-black/5 blur-sm rounded-full" />
              </motion.div>
            </div>
          </foreignObject>
        ))}
      </svg>
    </div>
  );
};

export default ScreenPopOnly;
