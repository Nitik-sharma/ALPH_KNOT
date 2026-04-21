import React from "react";

function WhatWeProvide({ heading, subtext, services }) {
  return (
    <section
      className="w-full bg-[#EEF4FB] py-20 px-6 sm:px-10 lg:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 h-px bg-[#C9A45C]" />
          <span
            className="text-[10px] font-semibold text-[#C9A45C] tracking-[3px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What We Provide
          </span>
          <span className="w-6 h-px bg-[#C9A45C]" />
        </div>
        <h2
          className="text-[30px] sm:text-[36px] font-bold text-[#0b1c35] leading-[1.2] mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {heading.normal}{" "}
          <span className="text-[#C9A45C]">{heading.gold}</span>
        </h2>
        <p className="text-[14px] text-[#0b1c35]/45 max-w-[440px] mx-auto leading-relaxed">
          {subtext}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="group bg-white border border-[#dce8f5] rounded-2xl p-8 hover:border-[#C9A45C]/50 transition-all duration-200 cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-[14px] flex items-center justify-center mb-6"
                style={{
                  background: "rgba(201,164,92,0.10)",
                  border: "0.5px solid rgba(201,164,92,0.25)",
                }}
              >
                <Icon size={30} color="#C9A45C" strokeWidth={1.6} />
              </div>
              <h3
                className="text-[15px] font-semibold text-[#0b1c35] mb-3 leading-snug"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-[12.5px] text-[#0b1c35]/50 leading-[1.75] mb-5">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10.5px] text-[#C9A45C] px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(201,164,92,0.08)",
                      border: "0.5px solid rgba(201,164,92,0.22)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhatWeProvide;
