import React, { useState } from "react";
import { motion } from "framer-motion";

const HireTalent = () => {
  const [step, setStep] = useState(1);
 const [data, setData] = useState({
   firstName: "",
   lastName: "",
   email: "",
 });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.firstName && data.lastName && data.email) {
      setStep(2); // 👉 move to next screen
    } else {
      alert("Please fill all fields");
    }
  };
  return (
    <section className="relative min-h-screen bg-[#0B0B0F] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* 🔥 BACKGROUND ANIMATION */}

      {/* Glow Orb 1 */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#C9A45C]/10 blur-[140px] rounded-full"
      />

      {/* Glow Orb 2 */}
      <motion.div
        animate={{ x: [0, -120, 0], y: [0, 60, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#C9A45C]/5 blur-[140px] rounded-full"
      />

      {/* Subtle Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C9A45C]/5 to-transparent" />

      {/* 🔥 CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
      >
        {/* STEP INDICATOR */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {/* Step 1 */}
          <div
            className={`w-3 h-3 rounded-full ${
              step >= 1 ? "bg-[#C9A45C]" : "border border-white/40"
            }`}
          />

          <div className="w-10 h-[2px] bg-white/20"></div>

          {/* Step 2 */}
          <div
            className={`w-3 h-3 rounded-full ${
              step >= 2 ? "bg-[#C9A45C]" : "border border-white/40"
            }`}
          />

          <div className="w-10 h-[2px] bg-white/20"></div>

          {/* Step 3 */}
          <div className="w-3 h-3 border border-white/40 rounded-full"></div>
        </div>

        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-white text-center mb-2">
          Ready to scale your team?
        </h2>

        <p className="text-white/50 text-center mb-8 text-sm">
          Tell us about your needs and we’ll match you with top-tier talent.
        </p>

        {/* FORM */}
        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white/60 text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                className="w-full mt-2 bg-transparent border-b border-white/20 focus:border-[#C9A45C] outline-none py-2 text-white"
              />
            </div>

            <div>
              <label className="text-white/60 text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                className="w-full mt-2 bg-transparent border-b border-white/20 focus:border-[#C9A45C] outline-none py-2 text-white"
              />
            </div>

            <div>
              <label className="text-white/60 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full mt-2 bg-transparent border-b border-white/20 focus:border-[#C9A45C] outline-none py-2 text-white"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#C9A45C] text-black py-3 rounded-lg font-semibold mt-4"
            >
              Next Step →
            </motion.button>
          </form>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Before we get started,
              <br /> we just need to know what brings you here
            </h2>

            <div className="border border-[#C9A45C]/40 rounded-xl p-6 space-y-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="w-full bg-[#C9A45C] text-black py-3 rounded-lg font-semibold"
              >
                I WANT TO HIRE TALENT
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                className="w-full bg-[#C9A45C] text-black py-3 rounded-lg font-semibold"
              >
                I WANT TALENT TO HIRE ME
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HireTalent;
