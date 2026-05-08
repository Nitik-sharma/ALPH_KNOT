import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/Our Philosophy/problem.jpeg";
import img2 from "../assets/images/Our Philosophy/Belief.jpeg";
import img3 from "../assets/images/Our Philosophy/ourPeople.jpeg";
import img6 from "../assets/images/Our Philosophy/promise.jpeg";
import img4 from "../assets/images/Our Philosophy/cost.jpeg";
import img5 from "../assets/images/Our Philosophy/planning.avif";
import bgImage from "../assets/images/Our Philosophy/bgimage1.jpeg";

const sections = [
  {
    tag: "The Problem We Solve",
    badge: "The Problem",
    num: "02",
    hero: `Skilled support should never be out of reach.`,
    sub: `The gap between who you need and who you can afford shouldn't exist. For too long, access to skilled, reliable professionals has been gated behind expensive salaries, benefits packages, and lengthy contracts that only enterprise companies could absorb.`,
    core: `Opportunity should never be a function of budget. We built Alph Knot to prove it.`,
    img: img1,
    flip: false,
    bg: "bg-white",
  },
  {
    tag: "Our Core Belief",
    badge: "Core Belief",
    num: "03",
    hero: `We don't believe in one-size-fits-all. We believe in right-sized.`,
    sub: `Every business is at a different stage, moving at a different pace, with different gaps to fill. A structure that works for a 200-person company shouldn't be forced onto a 12-person startup. Right-sized talent matched to your exact moment is what we deliver.`,
    core: `A bespoke suit and a borrowed one both cover you. Only one was made for you.`,
    img: img2,
    flip: true,
    bg: "bg-[#F7F4EF]",
  },
  {
    tag: "How We Think About People",
    badge: "Our People",
    num: "04",
    hero: `Our reputation walks in the door with them.`,
    sub: `We treat every professional we place like they represent us — because they do. Our reputation lives in the quality of the people we put in front of you. Every candidate has been vetted not just for skills, but for reliability, communication, and the character that makes a team better. We don't place people we wouldn't hire ourselves.`,
    core: `The right person doesn't just fill a role. They quietly raise the standard of everyone around them.`,
    img: img3,
    flip: false,
    bg: "bg-white",
  },
  {
    tag: "Cost as a Strategic Tool",
    badge: "Cost Strategy",
    num: "05",
    hero: `Every dollar should earn its place here.`,
    sub: `We help you spend like the company you're becoming, not the one you were. Early-stage companies move fast and stay lean. Mid-growth companies often bloat before they scale cleanly. We help businesses at every stage keep their team structure intentional — so their spending always reflects where they're going, not where they've been.`,
    core: `Every dollar freed from overhead is a dollar that gets to chase something worth chasing.`,
    img: img4,
    flip: true,
    bg: "bg-[#F7F4EF]",
  },
  {
    tag: "Our Promise",
    badge: "Our Promise",
    num: "06",
    hero: `Straightforward by design. Reliable by commitment.`,
    sub: `No hidden markups. No confusing tier structures. No fine print that changes the deal. We believe working with a talent partner should feel like working with someone who's genuinely in your corner — because that's exactly what we intend to be.`,
    core: `Promises are easy. Showing up month after month, role after role — that's the real one.`,
    img: img6,
    flip: false,
    bg: "bg-white",
  },
];

const stats = [
  { value: "500+", label: "Businesses Onboarded" },
  { value: "72hrs", label: "Average Launch Time" },
  { value: "98%", label: "Client Retention Rate" },
  { value: "11", label: "Service Categories" },
];

function SplitSection({ section }) {
  const { tag, badge, num, hero, sub, core, img, flip, bg } = section;

  const ImagePanel = (
    <motion.div
      initial={{ opacity: 0, x: flip ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="relative overflow-hidden min-h-[380px] md:min-h-[500px] group"
    >
      <img
        src={img}
        alt={tag}
        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className={`absolute inset-0 ${
          flip
            ? "bg-gradient-to-l from-[#1F2E4F]/50 to-transparent"
            : "bg-gradient-to-r from-[#1F2E4F]/50 to-transparent"
        }`}
      />
      <div
        className="absolute bottom-5 left-5 text-[80px] font-bold leading-none text-white/[0.07] select-none"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {num}
      </div>
      <div
        className="absolute top-5 left-5 bg-[#C9A45C] text-white text-[10px] font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {badge}
      </div>
    </motion.div>
  );

  const TextPanel = (
    <motion.div
      initial={{ opacity: 0, x: flip ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`flex items-center justify-center px-8 md:px-14 py-14 ${bg}`}
    >
      <div className="max-w-md w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[#C9A45C] text-[10px] font-semibold tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {tag}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-[#1F2E4F] text-2xl md:text-[26px] font-bold leading-snug mb-4 tracking-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {hero}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-9 h-[2px] bg-[#C9A45C] mb-5 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[#1F2E4F]/55 text-sm leading-[1.85] mb-6 font-light"
        >
          {sub}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-[#1F2E4F]/80 text-[13px] italic leading-relaxed border-l-2 border-[#C9A45C] pl-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {core}
        </motion.p>
      </div>
    </motion.div>
  );

  return (
    <div className="grid md:grid-cols-2 border-t border-[#1F2E4F]/[0.07] overflow-hidden">
      {flip ? (
        <>
          <div className="md:order-1">{TextPanel}</div>
          <div className="md:order-2">{ImagePanel}</div>
        </>
      ) : (
        <>
          {ImagePanel}
          {TextPanel}
        </>
      )}
    </div>
  );
}

const Philosophy = () => {
  return (
    <div
      className="bg-[#F7F4EF] w-full overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── HERO ── */}
      <section
        className="relative min-h-[88vh] w-full flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1F2E4F]/82" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#C9A45C] text-[11px] font-semibold tracking-[0.22em] uppercase mb-6"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our Philosophy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl md:text-[56px] font-bold text-white leading-[1.13] mb-6 tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Great execution doesn't require
            <br />
            <span className="text-[#C9A45C]">a great overhead.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base md:text-lg font-light leading-[1.8] max-w-2xl mx-auto mb-8"
          >
            World-class doesn't have to cost world-class. You don't need a
            hundred-person team to run a world-class operation. You need the
            right people, in the right seats, at the right moment. That's not a
            compromise. That's a strategy.
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="inline-block text-[#C9A45C] text-[13px] italic border border-[#C9A45C]/40 px-6 py-3 rounded-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            The right few will always outrun the expensive many.
          </motion.span>
        </div>
      </section>

      {/* ── SPLIT SECTIONS ── */}
      {sections.map((section, i) => (
        <SplitSection key={i} section={section} />
      ))}

      {/* ── FOUNDER QUOTE ── */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="bg-[#1F2E4F] py-20 px-6 text-center overflow-hidden"
      >
        <p
          className="text-[#C9A45C]/25 text-[72px] leading-none mb-6 select-none"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          "
        </p>
        <p
          className="text-white/90 text-xl md:text-[24px] font-light italic leading-[1.65] max-w-2xl mx-auto mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Every ambitious CEO deserves a team that moves as fast as their
          thinking. We built Alph Knot so that the team doesn't have to cost a
          fortune to exist.
        </p>
        <p
          className="text-[#C9A45C] text-[13px] tracking-widest"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          ~ A Founder to A Alph-Knot.
        </p>
      </motion.section>

      {/* ── STATS STRIP ── */}
      <section className="bg-white border-y border-[#1F2E4F]/[0.07] py-14 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <p
                className="text-[#C9A45C] text-3xl font-bold mb-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {s.value}
              </p>
              <p className="text-[#1F2E4F]/50 text-[12px] tracking-wide">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
