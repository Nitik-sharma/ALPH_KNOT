import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BookCall = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  // 🔥 Generate Slots (9 AM → 5 PM)
  const generateSlots = (date) => {
    const slots = [];
    const now = new Date();
    const selected = new Date(date);

    for (let hour = 9; hour <= 17; hour++) {
      const slotTime = new Date(selected);
      slotTime.setHours(hour, 0, 0);

      // ✅ Remove past time if today
      if (date === getTodayDate() && slotTime <= now) {
        continue;
      }

      const formatted = slotTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      slots.push(formatted);
    }

    return slots;
  };

  // 🔥 Auto-select date
  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    let defaultDate = new Date();

    if (currentHour >= 17) {
      defaultDate.setDate(defaultDate.getDate() + 1);
    }

    const formatted = defaultDate.toISOString().split("T")[0];
    setSelectedDate(formatted);
  }, []);

  // 🔥 Update slots when date changes
  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(generateSlots(selectedDate));
      setSelectedTime(null); // reset time on date change
    }
  }, [selectedDate]);

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#F5F8FF] to-white"></div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-sans text-[#1F2E4F] mb-4">
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
            className="w-full mt-2 mb-4 p-3 rounded-lg border text-black border-[#1F2E4F]/20 focus:border-[#4A90E2] outline-none"
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
                  className={`p-2 rounded-lg border transition 
                    ${
                      selectedTime === time
                        ? "bg-[#1F2E4F] text-white border-[#1F2E4F]"
                        : "bg-white text-[#1F2E4F] border-[#1F2E4F]/20 hover:border-[#4A90E2] hover:text-[#4A90E2]"
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
            className="w-full mb-3 p-3 text-black rounded-lg border border-[#1F2E4F]/20"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 text-black rounded-lg border border-[#1F2E4F]/20"
          />

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#C9A45C] text-black font-semibold py-3 rounded-lg"
          >
            Confirm Booking
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
