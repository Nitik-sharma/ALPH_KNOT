import React from "react";

function QuoteSection({ quote, author, sub }) {
  return (
    <section
      className="w-full bg-[#EEF4FB] py-16 px-6 sm:px-10 lg:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="bg-white rounded-2xl px-10 py-10 border-l-4 border-[#C9A45C]"
          style={{ boxShadow: "0 2px 16px rgba(11,28,53,0.06)" }}
        >
          <div
            className="text-[64px] text-[#C9A45C] mb-2"
            style={{ fontFamily: "Georgia, serif", lineHeight: 1 }}
          >
            "
          </div>
          <p
            className="text-[16px] sm:text-[18px] text-[#0b1c35] leading-[1.8] font-medium mb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {quote}
          </p>
          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(201,164,92,0.12)",
                border: "1px solid rgba(201,164,92,0.25)",
              }}
            >
              <span
                className="text-[13px] font-bold text-[#C9A45C]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                AK
              </span>
            </div>
            <div>
              <p
                className="text-[13px] font-semibold text-[#0b1c35]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {author}
              </p>
              <p
                className="text-[11.5px] text-[#64748b] mt-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {sub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
