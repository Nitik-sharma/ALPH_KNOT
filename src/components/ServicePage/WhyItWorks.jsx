import React from "react";

function WhyItWorks({ heading, subtext, points, stats }) {
  return (
    <section
      className="w-full bg-[#f8fafc] py-20 px-6 sm:px-10 lg:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#C9A45C]" />
          <span
            className="text-[10px] font-semibold text-[#C9A45C] tracking-[3px] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Why It Works
          </span>
          <span className="w-8 h-px bg-[#C9A45C]" />
        </div>
        <h2
          className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-[#0b1c35] leading-[1.12] mb-5"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {heading.normal}
          <br />
          {heading.line2} <span className="text-[#C9A45C]">{heading.gold}</span>
        </h2>
        <p className="text-[13.5px] text-[#64748b] max-w-[400px] mx-auto leading-[1.8]">
          {subtext}
        </p>
      </div>

      {/* Points grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {points.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={i}
              className="bg-white border border-[#e8f0fb] rounded-2xl p-7 flex items-start gap-5 hover:border-[#C9A45C] transition-all duration-200"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <div
                className={`w-[50px] h-[50px] rounded-[13px] flex items-center justify-center flex-shrink-0 ${p.iconStyle}`}
              >
                <Icon size={21} color={p.iconColor} strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-[14px] font-semibold text-[#0b1c35] mb-2 leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[12.5px] text-[#64748b] leading-[1.75] mb-3">
                  {p.desc}
                </p>
                <span
                  className={`inline-flex items-center text-[10.5px] font-medium rounded-md px-2.5 py-1 ${p.tagStyle}`}
                >
                  {p.tag}
                </span>
              </div>
            </div>
          );
        })}

        {/* Stats bar */}
        <div
          className="sm:col-span-2 bg-white border border-[#e8f0fb] rounded-2xl px-8 py-6 flex items-center justify-between"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px h-10 bg-[#f0f4fa]" />}
              <div className="text-center flex-1">
                <p
                  className="text-[22px] font-bold text-[#0b1c35] leading-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.num}
                  <span className="text-[#C9A45C]">{s.suffix}</span>
                </p>
                <p className="text-[11px] text-[#94a3b8] mt-1.5">{s.label}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyItWorks;
