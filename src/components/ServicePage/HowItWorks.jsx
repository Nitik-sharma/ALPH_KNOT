import React from "react";

function HowItWorks({ heading, subtext, steps }) {
  return (
    <section
      className="w-full bg-[#f8fafc] py-20 px-6 sm:px-10 lg:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-7 h-px bg-[#C9A45C]" />
          <span
            className="text-[16px] font-semibold text-[#C9A45C] tracking-[3px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            How It Works
          </span>
          <span className="w-7 h-px bg-[#C9A45C]" />
        </div>
        <h2
          className="text-[32px] sm:text-[40px] font-bold text-[#0b1c35] leading-[1.14] mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {heading.normal}
          <br />
          {heading.line2} <span className="text-[#C9A45C]">{heading.gold}</span>
        </h2>
        <p className="text-[13.5px] text-[#64748b] max-w-[420px] mx-auto leading-[1.8]">
          {subtext}
        </p>
      </div>

      {/* Desktop timeline */}
      <div className="hidden sm:block max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                style={{
                  background: s.done ? "#C9A45C" : "#fff",
                  border: s.done ? "3px solid #C9A45C" : "2px solid #dce8f5",
                }}
              >
                <span
                  className="text-[14px] font-bold"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: s.done ? "#fff" : "#cbd5e1",
                  }}
                >
                  {s.num}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="flex-1 h-[2px]"
                  style={{ background: "#C9A45C" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex flex-col transition-all duration-200 hover:border-[#C9A45C]"
              style={{
                border: s.done ? "1px solid #C9A45C" : "1px solid #e8f0fb",
                boxShadow: s.done
                  ? "0 4px 20px rgba(201,164,92,0.10)"
                  : "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <p
                className="text-[10px] font-bold tracking-[2px] text-[#C9A45C] mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                STEP {s.num}
              </p>
              <h3
                className="text-[15px] font-semibold text-[#0b1c35] mb-3 leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-[12.5px] text-[#64748b] leading-[1.75]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile timeline */}
      <div className="flex sm:hidden flex-col gap-0">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: s.done ? "#C9A45C" : "#fff",
                  border: s.done ? "3px solid #C9A45C" : "2px solid #dce8f5",
                }}
              >
                <span
                  className="text-[12px] font-bold"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: s.done ? "#fff" : "#cbd5e1",
                  }}
                >
                  {s.num}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="w-[2px] flex-1 mt-1"
                  style={{ background: "#C9A45C", minHeight: "40px" }}
                />
              )}
            </div>
            <div
              className="flex-1 bg-white rounded-2xl p-5 mb-4"
              style={{
                border: s.done ? "1px solid #C9A45C" : "1px solid #e8f0fb",
                boxShadow: s.done ? "0 4px 16px rgba(201,164,92,0.09)" : "none",
              }}
            >
              <p
                className="text-[10px] font-bold tracking-[2px] text-[#C9A45C] mb-1.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                STEP {s.num}
              </p>
              <h3
                className="text-[14px] font-semibold text-[#0b1c35] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-[12px] text-[#64748b] leading-[1.7]">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
