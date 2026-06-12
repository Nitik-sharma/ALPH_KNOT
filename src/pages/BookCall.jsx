import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import book from "../assets/images/Book/book.avif";
import axios from "axios"

const BookCall = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

  // Conform booking function

  const confirmBooking = async () => {
    try {
      if (!name || !email || !selectedDate || !selectedTime) {
        alert("Please fill all fields");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/book-call`,
        {
          name,
          email,
          date: selectedDate,
          time: selectedTime,
        },
      );

      console.log(response.data);

      alert("Booking Confirmed Successfully!");

      setName("");
      setEmail("");
      setSelectedTime(null);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to book call");
    }
  };

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center px-6 py-20 overflow-x-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#F8FAFC] to-white" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Text */}
          <div>
            <p
              className="text-[#C9A45C] text-[11px] font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Free Consultation
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#1F2E4F] tracking-tight mb-4 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Book a <br />
              <span className="text-[#C9A45C]">Strategy Call</span>
            </h1>
            <div className="w-10 h-[2px] bg-[#C9A45C] mb-4" />
            <p className="text-[#1F2E4F]/60 text-[15px] leading-relaxed max-w-md font-light">
              Free 30-minute consultation. No commitment. Just a focused
              conversation about where you are and where you want to go.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden w-full h-[320px] md:h-[400px] group">
            <img
              src={book}
              alt="Book a call"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E4F]/50 to-transparent" />

            {/* Overlay badge */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div>
                <p
                  className="text-white text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Ready in
                </p>
                <p
                  className="text-[#C9A45C] text-2xl font-bold"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  72 Hours
                </p>
              </div>
              <div
                className="bg-[#C9A45C] text-white text-[11px] font-semibold px-4 py-2 rounded-full tracking-widest uppercase"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                No contracts
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="bg-white border border-[#1F2E4F]/10 rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto"
        >
          {/* DATE */}
          <label
            className="text-[#1F2E4F]/70 text-sm font-medium"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Select Date
          </label>
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
          <label
            className="text-[#1F2E4F]/70 text-sm font-medium"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Select Time
          </label>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full mb-3 p-3 text-black rounded-lg border border-[#1F2E4F]/20
            focus:border-[#C9A45C] outline-none transition"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full mb-4 p-3 text-black rounded-lg border border-[#1F2E4F]/20
            focus:border-[#C9A45C] outline-none transition"
          />

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#C9A45C] text-white font-semibold tracking-wide py-3 rounded-lg
            hover:shadow-[0px_8px_25px_rgba(201,164,92,0.3)] transition"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={confirmBooking}
          >
            Confirm Booking
          </motion.button>

          <p className="text-center text-[#1F2E4F]/40 text-xs mt-4">
            No credit card required · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
