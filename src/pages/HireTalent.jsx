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
      setStep(2);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      {/* 🔥 CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white border border-[#1F2E4F]/10 rounded-2xl shadow-lg p-10"
      >
        {/* STEP INDICATOR */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div
            className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-[#C9A45C]" : "border border-gray-300"}`}
          />
          <div className="w-10 h-[2px] bg-gray-300"></div>
          <div
            className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-[#C9A45C]" : "border border-gray-300"}`}
          />
          <div className="w-10 h-[2px] bg-gray-300"></div>
          <div className="w-3 h-3 border border-gray-300 rounded-full"></div>
        </div>

        {/* HEADING (Poppins auto) */}
        <h2 className="text-2xl font-semibold text-[#1F2E4F] text-center mb-2 tracking-tight">
          Ready to scale your team?
        </h2>

        <p className="text-[#1F2E4F]/60 text-center mb-8 text-sm">
          Tell us about your needs and we’ll match you with top-tier talent.
        </p>

        {/* FORM */}
        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* FIRST NAME */}
            <div>
              <label className="text-[#1F2E4F]/70 text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2 
                focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 
                outline-none transition"
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="text-[#1F2E4F]/70 text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2 
                focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 
                outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-[#1F2E4F]/70 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full mt-2 border border-gray-300 rounded-lg px-3 py-2 
                focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 
                outline-none transition"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#C9A45C] text-white py-3 rounded-lg font-medium tracking-wide mt-4 
              hover:shadow-[0px_8px_25px_rgba(201,164,92,0.3)] transition"
            >
              Next Step →
            </motion.button>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#1F2E4F] tracking-tight">
              Before we get started,
              <br /> we just need to know what brings you here
            </h2>

            <div className="border border-[#C9A45C]/40 rounded-xl p-6 space-y-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="w-full bg-[#C9A45C] text-white py-3 rounded-lg font-medium tracking-wide"
              >
                I WANT TO HIRE Alph Knot
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                className="w-full border border-[#1F2E4F]/20 text-[#1F2E4F] py-3 rounded-lg font-medium 
                hover:border-[#C9A45C] hover:text-[#C9A45C] transition"
              >
                I WANT Alph Knot TO HIRE ME
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HireTalent;
