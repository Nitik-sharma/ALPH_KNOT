import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BookCall = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const generateSlots = (date) => {
    const slots = [];
    const now = new Date();
    const selected = new Date(date);

    for (let hour = 9; hour <= 17; hour++) {
      const slotTime = new Date(selected);
      slotTime.setHours(hour, 0, 0);

      if (date === getTodayDate() && slotTime <= now) continue;

      const formatted = slotTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      slots.push(formatted);
    }

    return slots;
  };

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    let defaultDate = new Date();

    if (currentHour >= 17) {
      defaultDate.setDate(defaultDate.getDate() + 1);
    }

    setSelectedDate(defaultDate.toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(generateSlots(selectedDate));
      setSelectedTime(null);
    }
  }, [selectedDate]);

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center px-6 py-20">
      {/* BG */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#F8FAFC] to-white"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl md:text-5xl text-[#1F2E4F] tracking-tight mb-4">
            Book a Strategy Call
          </h1>

          <p className="text-[#1F2E4F]/70 mb-6 max-w-md">
            Free 30-minute consultation. No commitment.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border border-[#1F2E4F]/10 rounded-2xl shadow-xl p-6 w-full max-w-md"
        >
          {/* DATE */}
          <label className="text-[#1F2E4F]/70 text-sm">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            min={getTodayDate()}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full mt-2 mb-4 p-3 rounded-lg border text-black 
            border-[#1F2E4F]/20 
            focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 
            outline-none transition"
          />

          {/* TIME */}
          <label className="text-[#1F2E4F]/70 text-sm">Select Time</label>
          <div className="grid grid-cols-3 gap-2 mt-2 mb-4">
            {timeSlots.length > 0 ? (
              timeSlots.map((time, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg border transition text-sm
                    ${
                      selectedTime === time
                        ? "bg-[#C9A45C] text-white border-[#C9A45C]"
                        : "bg-white text-[#1F2E4F] border-[#1F2E4F]/20 hover:border-[#C9A45C] hover:text-[#C9A45C]"
                    }
                  `}
                >
                  {time}
                </motion.button>
              ))
            ) : (
              <p className="text-sm text-[#1F2E4F]/50 col-span-3 text-center">
                No slots available
              </p>
            )}
          </div>

          {/* FORM */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 p-3 text-black rounded-lg border border-[#1F2E4F]/20 
            focus:border-[#C9A45C] outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 text-black rounded-lg border border-[#1F2E4F]/20 
            focus:border-[#C9A45C] outline-none"
          />

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#C9A45C] text-white font-medium tracking-wide py-3 rounded-lg 
            hover:shadow-[0px_8px_25px_rgba(201,164,92,0.3)] transition"
          >
            Confirm Booking
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
