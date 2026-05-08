import { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function useFade() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-5");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Fade({ children, delay = 0, className = "" }) {
  const ref = useFade();
  return (
    <div
      ref={ref}
      className={"opacity-0 translate-y-5 transition-all duration-700 ease-out " + className}
      style={{ transitionDelay: delay + "s" }}
    >
      {children}
    </div>
  );
}

function GoldBar({ center = false }) {
  return (
    <div className={"w-10 h-1 bg-[#C9A45C] rounded-full mb-3 " + (center ? "mx-auto" : "")} />
  );
}

function SectionLabel({ text, center = false }) {
  return (
    <div className={center ? "flex justify-center" : ""}>
      <span className="inline-flex items-center gap-2 bg-[#C9A45C]/10 text-[#C9A45C] border border-[#C9A45C]/30 rounded-full px-4 py-1.5 text-xs font-medium mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] flex-shrink-0" />
        {text}
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="10" fill="#C9A45C" fillOpacity="0.15" />
      <path d="M6 10.5l2.5 2.5 5.5-5.5" stroke="#C9A45C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuoteSVG() {
  return (
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none">
      <path
        d="M0 36V22.5C0 9.9 7.2 2.1 21.6 0l2.4 4.2C16.2 6 11.4 10.2 10.2 16.8H18V36H0zm24 0V22.5C24 9.9 31.2 2.1 45.6 0L48 4.2C40.2 6 35.4 10.2 34.2 16.8H42V36H24z"
        fill="#C9A45C"
        fillOpacity="0.22"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Fade delay={0.07}>
              <h1 className="font-sans text-5xl font-semibold text-[#1F2E4F] leading-tight tracking-tight mb-5">
                Global Talent.{" "}
                <span className="text-[#C9A45C]">Structured Execution.</span>{" "}
                Real Results.
              </h1>
            </Fade>
            <Fade delay={0.14}>
              <p className="text-[#6B7280] text-base leading-relaxed max-w-lg mb-8">
                Alph Knot helps businesses scale with global teams across
                operations, finance, tech, and growth so you can focus on what
                matters most.
              </p>
            </Fade>
            <Fade delay={0.26}>
              <div className="flex flex-wrap gap-2">
                {[
                  "3x Faster Execution",
                  "60% Cost Reduction",
                  "90%+ Satisfaction",
                  "24/7 Support",
                ].map((s) => (
                  <span
                    key={s}
                    className="inline-block bg-[#F7F3EE] border border-[#E8E8E8] rounded-full px-4 py-1.5 text-xs text-[#6B7280] font-medium whitespace-nowrap"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Fade>
          </div>

          <Fade delay={0.15}>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden h-[520px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85"
                  alt="Team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-7 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-[#E8E8E8] z-10">
                <p className="text-xs text-[#6B7280] mb-1">Teams active in</p>
                <p className="text-xl font-semibold text-[#1F2E4F]">12+ Countries</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  const pillars = [
    { icon: "🌍", title: "Global Reach", body: "Access top talent across time zones, cultures, and disciplines." },
    { icon: "⚙️", title: "Structured Process", body: "Onboarding, SOPs, and workflows built for clarity from day one." },
    { icon: "📈", title: "Scalable Growth", body: "Expand your team as fast as you grow — no friction, no delays." },
  ];

  return (
    <section className="bg-[#F7F3EE] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <GoldBar center />
            <h2 className="text-3xl font-semibold text-[#1F2E4F] tracking-tight mb-4">Our Mission</h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              Most companies struggle not because of bad strategy but execution gaps.
              Alph Knot was built to close that gap: connecting businesses with
              pre-vetted global professionals embedded into your workflows.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Fade key={p.title} delay={i * 0.09}>
              <div className="bg-white border border-[#E8E8E8] rounded-2xl p-7 transition-all duration-300 hover:border-[#C9A45C]/40 hover:shadow-lg hover:-translate-y-1">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="font-semibold text-[#1F2E4F] text-sm mb-2">{p.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{p.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderQuote() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Fade delay={0}>
            <QuoteSVG />
            <blockquote className="text-xl font-medium text-[#1F2E4F] leading-relaxed mt-5 mb-7">
              Behind every successful business is a team that executes with
              clarity and consistency. Alph Knot gives companies more than
              talent{" "}
              <span className="text-[#C9A45C]">we deliver execution.</span>
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1F2E4F] flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm">
                AK
              </div>
              <div>
                <p className="font-semibold text-[#1F2E4F] text-sm">Founder, Alph Knot</p>
                <p className="text-[#6B7280] text-xs mt-0.5">Visionary · Builder · Operator</p>
              </div>
            </div>
          </Fade>

          <Fade delay={0.12}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[440px] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=85"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-5 bg-[#F7F3EE] border border-[#E8E8E8] rounded-xl px-5 py-3 shadow-md">
                <p className="text-xs text-[#6B7280]">Est. 2020 · Global Partner</p>
                <p className="font-semibold text-[#1F2E4F] text-sm mt-0.5">Execution-First Company</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

function BuiltToSolve() {
  return (
    <section className="bg-[#F7F3EE] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Fade delay={0}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[420px] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-5 -right-4 bg-[#C9A45C] rounded-xl px-5 py-3 text-white shadow-lg">
                <p className="text-xs opacity-90">Teams across</p>
                <p className="font-semibold text-lg">12+ Countries</p>
              </div>
            </div>
          </Fade>

          <Fade delay={0.12}>
            <GoldBar />
            <h2 className="text-3xl font-semibold text-[#1F2E4F] tracking-tight mb-4">
              Built to Solve a Real Problem
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed mb-4">
              Modern businesses face a paradox: talent is everywhere, but great
              execution is rare. Hiring takes months, onboarding takes more, and
              misaligned teams cost companies more than they realize.
            </p>
            <p className="text-[#6B7280] text-base leading-relaxed mb-7">
              Alph Knot was designed to collapse that gap, connecting you with
              professionals who integrate into your goals from day one.
            </p>
            <div className="bg-white border-l-4 border-[#C9A45C] rounded-r-xl px-5 py-4 shadow-sm">
              <p className="font-medium text-[#1F2E4F] italic text-base">
                Talent is global. Execution should be seamless.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

const DIFFS = [
  { label: "Execution-first approach", desc: "We don't just place talent, we build systems around them." },
  { label: "Pre-vetted talent", desc: "Rigorous vetting ensures every hire is ready to perform." },
  { label: "Global scalability", desc: "Scale teams up or down across continents without friction." },
  { label: "Flexible engagement", desc: "Part-time, full-time, or project-based, you decide the model." },
  { label: "Dedicated support", desc: "A success manager with you from kickoff to long-term growth." },
  { label: "Cost-efficient operations", desc: "Premium talent without the overhead of traditional hiring." },
];

function WhyDifferent() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Fade delay={0}>
            <div className="lg:sticky lg:top-24">
              <GoldBar />
              <h2 className="text-3xl font-semibold text-[#1F2E4F] tracking-tight mb-4">
                Why Alph Knot Is Different
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed max-w-sm mb-7">
                We have reimagined what a global staffing partner should be, less
                transactional, more transformational.
              </p>
              <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85"
                  alt="Global team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Fade>

          <div className="flex flex-col gap-3">
            {DIFFS.map((d, i) => (
              <Fade key={d.label} delay={0.04 * i}>
                <div className="bg-[#F7F3EE] border border-[#E8E8E8] rounded-2xl p-5 transition-all duration-300 hover:border-[#C9A45C]/40 hover:bg-white hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckIcon />
                    <div>
                      <p className="font-semibold text-[#1F2E4F] text-sm mb-1">{d.label}</p>
                      <p className="text-[#6B7280] text-xs leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobalHuman() {
  return (
    <section className="bg-[#F7F3EE] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Fade delay={0}>
            <GoldBar />
            <h2 className="text-3xl font-semibold text-[#1F2E4F] tracking-tight mb-4">
              Global by Design.{" "}
              <span className="text-[#C9A45C]">Human by Nature.</span>
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed mb-4">
              We operate across continents, but our relationships are built one
              person at a time. Every professional in our network is more than a
              resume, they are a trusted collaborator.
            </p>
            <p className="text-[#6B7280] text-base leading-relaxed mb-10">
              Our account managers, talent leads, and operations team stay close
              to both sides ensuring the human thread never gets lost in the scale.
            </p>
            <div className="flex gap-10">
              {[["12+", "Countries"], ["200+", "Professionals"], ["98%", "Retention"]].map(
                ([n, l]) => (
                  <div key={l}>
                    <p className="font-semibold text-[#C9A45C] text-3xl">{n}</p>
                    <p className="text-[#6B7280] text-xs mt-1">{l}</p>
                  </div>
                )
              )}
            </div>
          </Fade>

          <Fade delay={0.12}>
            <div className="rounded-2xl overflow-hidden h-[440px] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85"
                alt="Global collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  {
    name: "Aryan Kapoor",
    role: "CEO & Co-Founder",
    bio: "Visionary leader with 15+ years building global operations. Passionate about connecting world-class talent with high-growth businesses.",
    linkedin: "https://linkedin.com/in/aryan-kapoor",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Priya Mehta",
    role: "Chief Operations Officer",
    bio: "Operations expert specializing in remote team management, process design, and scaling talent pipelines across time zones.",
    linkedin: "https://linkedin.com/in/priya-mehta",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "James OBrien",
    role: "Head of Talent",
    bio: "10+ years matching world-class professionals to high-growth companies across the U.S., UK, and Asia-Pacific regions.",
    linkedin: "https://linkedin.com/in/james-obrien",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Sara Lin",
    role: "Head of Client Success",
    bio: "Client success champion ensuring every partnership delivers measurable ROI. Trusted advisor to 50+ enterprise accounts.",
    linkedin: "https://linkedin.com/in/sara-lin",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

function FlipCard({ member, index }) {
  const cardRef = useRef(null);

  function handleEnter() {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(180deg)";
    }
  }

  function handleLeave() {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0deg)";
    }
  }

  return (
    <Fade delay={index * 0.08}>
      <div
        className="h-80 cursor-pointer"
        style={{ perspective: "1000px" }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div
          ref={cardRef}
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-[#E8E8E8] bg-white"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            <div className="h-56 overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top"
                style={{ filter: "grayscale(15%)" }}
              />
            </div>
            <div className="bg-[#F7F3EE] px-4 py-4">
              <p className="font-semibold text-[#1F2E4F] text-sm">{member.name}</p>
              <p className="text-[#6B7280] text-xs mt-1">{member.role}</p>
            </div>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden bg-[#1F2E4F] border border-[#C9A45C]/30 flex flex-col items-center justify-center px-5 py-6 text-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#C9A45C] mb-3"
            />
            <p className="font-bold text-white text-base leading-tight">{member.name}</p>
            <p className="text-[#C9A45C] text-xs font-bold uppercase tracking-widest mt-1 mb-3">
              {member.role}
            </p>
            <div className="w-8 h-px bg-[#C9A45C]/30 mb-3" />
            <p className="text-white/50 text-xs leading-relaxed mb-4">{member.bio}</p>
            
           <Link  href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 bg-[#C9A45C] text-[#1F2E4F] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#d4b06a] transition-colors duration-200"
            >
              <LinkedInIcon />
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}

function Team() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <div className="text-center mb-14">
            <GoldBar center />
            <h2 className="text-3xl font-semibold text-[#1F2E4F] tracking-tight mb-3">
              The People Behind the Platform
            </h2>
            <p className="text-[#6B7280] text-base">
              Operators. Builders. People who have been in your shoes.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m, i) => (
            <FlipCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const CULTURE = [
  { v: "200+", l: "Global Team", s: "Professionals worldwide" },
  { v: "98%", l: "High Retention", s: "Year-over-year retention" },
  { v: "12+", l: "Countries", s: "Multi-country presence" },
  { v: "25yrs", l: "Leadership", s: "Combined experience" },
];

function CultureStats() {
  return (
    <section className="bg-[#F7F3EE] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <div className="text-center mb-14">
            <GoldBar center />
            <h2 className="text-3xl font-semibold text-[#1F2E4F] tracking-tight mb-3">
              Culture of Excellence
            </h2>
            <p className="text-[#6B7280] text-base">The numbers behind the mission.</p>
          </div>
        </Fade>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {CULTURE.map((s, i) => (
            <Fade key={s.l} delay={i * 0.07}>
              <div className="bg-white border border-[#E8E8E8] rounded-2xl p-8 text-center transition-all duration-300 hover:border-[#C9A45C]/40 hover:shadow-lg hover:-translate-y-1">
                <p className="font-semibold text-[#C9A45C] text-4xl">{s.v}</p>
                <p className="font-semibold text-[#1F2E4F] text-sm mt-2">{s.l}</p>
                <p className="text-[#6B7280] text-xs mt-1">{s.s}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

const RESULTS = [
  { m: "3x", l: "Faster Execution", d: "Companies onboard and deploy teams 3x faster with Alph Knot." },
  { m: "60%", l: "Cost Reduction", d: "Average savings vs. traditional full-time hiring models." },
  { m: "24/7", l: "Support Coverage", d: "Round-the-clock support across all major time zones." },
  { m: "90%+", l: "Satisfaction Rate", d: "Clients who consistently rate Alph Knot as their top partner." },
];

function Results() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <div className="text-center mb-14">
            <GoldBar center />
            <h2 className="text-3xl font-semibold text-[#1F2E4F] tracking-tight mb-3">
              Numbers That Speak
            </h2>
            <p className="text-[#6B7280] text-base">
              Measurable impact for every company we partner with.
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {RESULTS.map((r, i) => (
            <Fade key={r.l} delay={i * 0.07}>
              <div className="bg-[#F7F3EE] border border-[#E8E8E8] rounded-2xl p-7 transition-all duration-300 hover:border-[#C9A45C]/40 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                <p className="font-semibold text-[#C9A45C] text-4xl tracking-tight">{r.m}</p>
                <p className="font-semibold text-[#1F2E4F] text-sm mt-3">{r.l}</p>
                <p className="text-[#6B7280] text-xs leading-relaxed mt-2">{r.d}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-[#F7F3EE] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <div className="bg-white border border-[#E8E8E8] rounded-3xl px-12 py-16 text-center shadow-xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-[#C9A45C]/15 pointer-events-none" />
            <div className="absolute -bottom-9 -left-9 w-36 h-36 rounded-full border border-[#C9A45C]/10 pointer-events-none" />

            <SectionLabel text="Lets Build Together" center />

            <h2 className="text-4xl font-semibold text-[#1F2E4F] tracking-tight mb-4">
              Ready to scale with a{" "}
              <span className="text-[#C9A45C]">global team?</span>
            </h2>

            <p className="text-[#6B7280] text-base max-w-md mx-auto leading-relaxed mb-10">
              Join hundreds of companies that trust Alph Knot to power their
              operations, growth, and execution from day one.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <NavLink to="/contact-us">
                <button className="bg-[#C9A45C] text-white px-8 py-3.5 rounded-xl font-medium text-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
                  Get Started
                </button>
              </NavLink>
              <NavLink to="/book-call">
                <button className="bg-transparent text-[#1F2E4F] px-8 py-3.5 rounded-xl font-medium text-sm border border-[#E8E8E8] cursor-pointer transition-all duration-200 hover:border-[#C9A45C] hover:text-[#C9A45C] whitespace-nowrap">
                  Book a Call
                </button>
              </NavLink>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default function AlphKnotAbout() {
  return (
    <div className="bg-white text-[#1A1A1A] antialiased">
      <Hero />
      <Mission />
      <Team />
      <BuiltToSolve />
      <WhyDifferent />
      <GlobalHuman />
      <FounderQuote />
      <CultureStats />
      <Results />
      <FinalCTA />
    </div>
  );
}