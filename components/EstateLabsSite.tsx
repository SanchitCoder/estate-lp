'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, type Variants, type Transition } from 'framer-motion';
import Image from 'next/image';

// ─── Animation helpers ────────────────────────────────────────────────────────

const smoothTransition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

const fadeRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeRise}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function StaggerReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

// ─── Gold divider ─────────────────────────────────────────────────────────────

function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`mx-auto rounded-full ${className}`}
      style={{ width: 48, height: 3, background: '#C9A24B' }}
    />
  );
}

// ─── Section label ────────────────────────────────────────────────────────────

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
      style={{
        color: '#C9A24B',
        background: light ? 'rgba(201,162,75,0.10)' : 'rgba(201,162,75,0.12)',
        border: '1px solid rgba(201,162,75,0.28)',
        borderRadius: 999,
        padding: '4px 16px',
      }}
    >
      {children}
    </span>
  );
}

// ─── Gold CTA Button ──────────────────────────────────────────────────────────

function GoldButton({
  children,
  onClick,
  large = false,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  large?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ${className}`}
      style={{
        background: '#C9A24B',
        color: '#0E2A22',
        padding: large ? '16px 36px' : '12px 28px',
        fontSize: large ? '1.05rem' : '0.95rem',
        boxShadow: '0 4px 20px rgba(201,162,75,0.35)',
        letterSpacing: '-0.01em',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px rgba(201,162,75,0.5)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(201,162,75,0.35)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
      }}
    >
      {children}
    </button>
  );
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'The Problem', id: 'problem' },
    { label: 'What We Build', id: 'solution' },
    { label: 'Results', id: 'results' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(14,42,34,0.97)' : '#0E2A22',
        borderBottom: scrolled ? '1px solid rgba(201,162,75,0.15)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 select-none"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span
              className="font-el-serif font-bold text-xl tracking-tight"
              style={{ color: '#F5F0E6' }}
            >
              Estate <span style={{ color: '#C9A24B' }}>Labs</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: '#7E9587' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#F5F0E6')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#7E9587')}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile burger */}
          <div className="flex items-center gap-3">
            <GoldButton onClick={() => scrollTo('book')} className="hidden sm:inline-flex">
              Book a Free Strategy Call
            </GoldButton>
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: '#F5F0E6' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {menuOpen ? (
                  <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 flex flex-col gap-1"
            style={{ borderTop: '1px solid rgba(201,162,75,0.12)' }}
          >
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-left px-2 py-3 text-sm font-medium transition-colors"
                style={{ color: '#7E9587' }}
              >
                {l.label}
              </button>
            ))}
            <GoldButton onClick={() => scrollTo('book')} className="mt-2 w-full">
              Book a Free Strategy Call
            </GoldButton>
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 pb-20 overflow-hidden"
      style={{ background: '#0E2A22' }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 40%, rgba(201,162,75,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>AI Sales Systems for Real Estate · India &amp; UAE</SectionLabel>
        </motion.div>

        <motion.h1
          className="font-el-serif mt-4 mb-6 leading-tight tracking-tight"
          style={{
            color: '#F5F0E6',
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 700,
            lineHeight: 1.12,
          }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Turn the leads you already<br className="hidden sm:block" /> pay for into booked site visits.
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: '#7E9587' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          We install a done-for-you AI sales engine that responds in 60 seconds, qualifies every lead,
          and books site visits 24/7 — so your team only closes.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <GoldButton onClick={() => scrollTo('book')} large>
            Book a Free Strategy Call
          </GoldButton>
        </motion.div>

        <motion.p
          className="mt-4 text-sm"
          style={{ color: '#7E9587' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          30-minute call · no obligation · we&apos;ll map your biggest lead leak live.
        </motion.p>

        <motion.div
          className="mt-12 pt-8"
          style={{ borderTop: '1px solid rgba(201,162,75,0.15)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-0" style={{ color: '#7E9587' }}>
            Trusted by real estate firms and developers across India &amp; the UAE
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Trust Bar / Client Chips ─────────────────────────────────────────────────

const clients = [
  'Raizing Group',
  'Pluto Travels',
  'Wingsway',
  'Jaypore Homes',
  'Ahuja Property Talks',
  'Doon Buildcon',
];

function TrustBar() {
  return (
    <section style={{ background: '#0c2419', borderTop: '1px solid rgba(201,162,75,0.12)', borderBottom: '1px solid rgba(201,162,75,0.12)' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {clients.map((c) => (
            <span
              key={c}
              className="text-sm font-medium rounded-full px-4 py-1.5 transition-colors duration-150"
              style={{
                color: '#7E9587',
                background: 'rgba(201,162,75,0.06)',
                border: '1px solid rgba(201,162,75,0.14)',
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#C9A24B" strokeWidth="1.6">
        <path d="M9 19V6l12-3v13" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="19" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: 'Portal dependency',
    body:
      'The same lead is sold to 8–12 agents. You are one of twelve. Price becomes the only differentiator.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#C9A24B" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" />
      </svg>
    ),
    title: 'The follow-up graveyard',
    body:
      '92% of agents quit after the 4th follow-up. But deals close on the 5th–12th. Your next sale is dying in your CRM right now.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="#C9A24B" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Wasted closer time',
    body:
      'Your best salespeople spend 70% of their day on cold, unqualified leads instead of closing warm ones.',
  },
];

function ProblemSection() {
  return (
    <section id="problem" style={{ background: '#F5F0E6' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel light>The Problem</SectionLabel>
          <h2
            className="font-el-serif mt-2 font-bold leading-tight"
            style={{ color: '#0E2A22', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            You don&apos;t have a lead problem.<br className="hidden sm:block" /> You have a follow-up problem.
          </h2>
          <GoldDivider className="mt-5" />
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeRise}
              className="rounded-2xl p-8 transition-all duration-300"
              style={{
                background: '#fff',
                border: '1px solid rgba(14,42,34,0.08)',
                boxShadow: '0 2px 16px rgba(14,42,34,0.06)',
              }}
              whileHover={{ y: -4, boxShadow: '0 10px 32px rgba(14,42,34,0.10)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(201,162,75,0.10)' }}
              >
                {p.icon}
              </div>
              <h3
                className="font-el-serif font-bold text-xl mb-3"
                style={{ color: '#0E2A22' }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5a6b5f' }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </StaggerReveal>

        <Reveal className="text-center">
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed font-medium"
            style={{ color: '#0E2A22' }}
          >
            More ad spend into a leaky bucket only wastes more money. The fix isn&apos;t more leads
            — it&apos;s a system that never drops one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Solution Section ─────────────────────────────────────────────────────────

const features = [
  {
    title: '60-Second Lead Response',
    body: 'Every new enquiry gets a personal reply within 60 seconds, 24/7, across WhatsApp, SMS and email.',
    icon: '⚡',
  },
  {
    title: 'AI Qualification Agent',
    body: 'A human-sounding AI (English & Hinglish) qualifies budget, timeline and intent — and scores every lead.',
    icon: '🎯',
  },
  {
    title: 'Site-Visit Booking',
    body: 'Qualified buyers are booked straight into your team\'s calendar. No manual coordination.',
    icon: '📅',
  },
  {
    title: 'Dead-Lead Reactivation',
    body: 'The AI re-engages your old, cold database and revives deals you\'d written off.',
    icon: '🔁',
  },
  {
    title: 'Missed-Call Text-Back',
    body: 'Every missed call triggers an instant WhatsApp, so no enquiry is ever lost.',
    icon: '📲',
  },
  {
    title: 'Long-Cycle Nurture',
    body: 'Buyers who aren\'t ready get nurtured for 90+ days automatically, so you\'re there when they are.',
    icon: '🌱',
  },
  {
    title: 'Owner Dashboard',
    body: 'One clear view of every lead, score, and booking — so you always know what\'s working.',
    icon: '📊',
  },
];

function SolutionSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="solution" style={{ background: '#0E2A22' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel>The Estate Labs AI Sales Engine</SectionLabel>
          <h2
            className="font-el-serif mt-2 font-bold leading-tight"
            style={{ color: '#F5F0E6', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            One system. Every lead handled. Automatically.
          </h2>
          <GoldDivider className="mt-5" />
          <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#7E9587' }}>
            We install a complete AI sales engine into your business. Here&apos;s what it does, the moment it goes live:
          </p>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeRise}
              className="rounded-2xl p-6 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,162,75,0.14)',
              }}
              whileHover={{
                background: 'rgba(201,162,75,0.07)',
                borderColor: 'rgba(201,162,75,0.30)',
                y: -3,
              }}
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3
                className="font-el-serif font-bold text-base mb-2 leading-snug"
                style={{ color: '#F5F0E6' }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#7E9587' }}>
                {f.body}
              </p>
            </motion.div>
          ))}

          {/* Last card: CTA nudge */}
          <motion.div
            variants={fadeRise}
            className="rounded-2xl p-6 flex flex-col items-start justify-between"
            style={{
              background: 'rgba(201,162,75,0.10)',
              border: '1px solid rgba(201,162,75,0.28)',
            }}
          >
            <p className="font-el-serif text-base font-semibold leading-snug mb-6" style={{ color: '#F5F0E6' }}>
              Ready to see it working on your leads?
            </p>
            <GoldButton onClick={() => scrollTo('book')}>
              Book Your Audit
            </GoldButton>
          </motion.div>
        </StaggerReveal>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    title: 'We map your leaks',
    body: 'On your strategy call, we find exactly where leads are slipping through today.',
  },
  {
    num: '02',
    title: 'We build your engine',
    body: 'Done-for-you. We install and configure the entire AI system on your business — typically live in weeks, not months.',
  },
  {
    num: '03',
    title: 'You close',
    body: 'Your team wakes up to a calendar of pre-qualified, pre-warmed site visits. You do what you do best.',
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{ background: '#F5F0E6' }}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel light>How It Works</SectionLabel>
          <h2
            className="font-el-serif mt-2 font-bold leading-tight"
            style={{ color: '#0E2A22', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            From enquiry to site visit<br className="hidden sm:block" /> — without a single dropped lead.
          </h2>
          <GoldDivider className="mt-5" />
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={fadeRise}
              className="relative rounded-2xl p-8"
              style={{
                background: '#fff',
                border: '1px solid rgba(14,42,34,0.07)',
                boxShadow: '0 2px 16px rgba(14,42,34,0.05)',
              }}
            >
              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[52px] left-[calc(100%+0px)] w-6 h-px"
                  style={{ background: 'rgba(201,162,75,0.25)' }}
                />
              )}
              <span
                className="font-el-serif font-bold text-5xl leading-none block mb-4"
                style={{ color: '#C9A24B', opacity: 0.5 }}
              >
                {s.num}
              </span>
              <h3
                className="font-el-serif font-bold text-xl mb-3"
                style={{ color: '#0E2A22' }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5a6b5f' }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </StaggerReveal>

        <Reveal className="text-center">
          <p
            className="max-w-2xl mx-auto text-sm leading-relaxed"
            style={{
              color: '#7E9587',
              background: 'rgba(14,42,34,0.05)',
              border: '1px solid rgba(14,42,34,0.08)',
              borderRadius: 14,
              padding: '14px 24px',
              display: 'inline-block',
            }}
          >
            AI handles awareness, response, qualification, and nurture. Your humans handle the meeting
            and the close — where humans win.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Results ──────────────────────────────────────────────────────────────────

const results = [
  {
    client: 'Jaypore Homes',
    metric: '₹800 → ₹320',
    label: 'Cost per lead',
  },
  {
    client: 'Ahuja Property Talks',
    metric: '3×',
    label: 'Increase in conversion',
  },
  {
    client: 'Raizing Group',
    metric: '70%+',
    label: 'Reduction in cost per lead',
  },
  {
    client: 'Pluto Travels (Dubai)',
    metric: '3 BDRs',
    label: 'Replaced by one AI voice agent',
  },
  {
    client: 'Wingsway',
    metric: '18%',
    label: 'Inactive database reactivated',
  },
];

function ResultsSection() {
  return (
    <section id="results" style={{ background: '#0E2A22' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel>Real Numbers</SectionLabel>
          <h2
            className="font-el-serif mt-2 font-bold leading-tight"
            style={{ color: '#F5F0E6', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Real systems. Real numbers.
          </h2>
          <GoldDivider className="mt-5" />
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {results.map((r) => (
            <motion.div
              key={r.client}
              variants={fadeRise}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,162,75,0.14)',
              }}
              whileHover={{
                background: 'rgba(201,162,75,0.06)',
                borderColor: 'rgba(201,162,75,0.28)',
              }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#7E9587' }}>
                {r.client}
              </p>
              <p
                className="font-el-serif font-bold leading-none mb-2"
                style={{ color: '#C9A24B', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                {r.metric}
              </p>
              <p className="text-sm" style={{ color: '#F5F0E6', opacity: 0.7 }}>
                {r.label}
              </p>
            </motion.div>
          ))}
        </StaggerReveal>

        <Reveal className="text-center">
          <p
            className="max-w-xl mx-auto text-base font-medium italic"
            style={{ color: '#7E9587' }}
          >
            &ldquo;Show rates moved from 25% to 75% once only qualified buyers reached the calendar.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Why Estate Labs ──────────────────────────────────────────────────────────

const whyPoints = [
  {
    title: 'Done-for-you',
    body: 'You don\'t learn software. We build, install, and hand you a working machine.',
    icon: '🔧',
  },
  {
    title: 'Built for India & the UAE',
    body: 'Hinglish-native AI, WhatsApp-first, tuned for how property actually sells here.',
    icon: '🌏',
  },
  {
    title: 'Operator-led',
    body: 'Built by people who run real lead systems daily, not theorists.',
    icon: '⚙️',
  },
  {
    title: 'You own it',
    body: 'The system, the data, the pipeline. Yours.',
    icon: '🔐',
  },
];

function WhySection() {
  return (
    <section style={{ background: '#F5F0E6' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel light>Why Estate Labs</SectionLabel>
          <h2
            className="font-el-serif mt-2 font-bold leading-tight"
            style={{ color: '#0E2A22', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Why firms choose Estate Labs
          </h2>
          <GoldDivider className="mt-5" />
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyPoints.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeRise}
              className="flex gap-5 rounded-2xl p-7"
              style={{
                background: '#fff',
                border: '1px solid rgba(14,42,34,0.07)',
                boxShadow: '0 2px 16px rgba(14,42,34,0.04)',
              }}
              whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(14,42,34,0.09)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: 'rgba(201,162,75,0.10)' }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-el-serif font-bold text-lg mb-1.5" style={{ color: '#0E2A22' }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5a6b5f' }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

// ─── Founder Section ──────────────────────────────────────────────────────────

function FounderSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{ background: '#0E2A22' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Portrait */}
          <Reveal className="flex-shrink-0">
            <div
              className="w-52 md:w-64 rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(201,162,75,0.18)' }}
            >
              <Image
                src="/images/mentor-hero.png"
                alt="Paras Arora — Founder, Estate Labs"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1}>
            <SectionLabel>Founder</SectionLabel>
            <h2
              className="font-el-serif font-bold mt-2 mb-5 leading-tight"
              style={{ color: '#F5F0E6', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
            >
              Built by Paras Arora
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-7" style={{ color: '#7E9587' }}>
              Paras Arora is the founder of Estate Labs and Exponential World AI. He has built AI
              training and automation systems for institutions and real estate firms across India and
              the UAE — helping them cut lead costs, reactivate dead pipelines, and book more site
              visits with less manual work. Estate Labs is his done-for-you arm: the same systems,
              installed directly into your business.
            </p>
            <GoldButton onClick={() => scrollTo('book')}>
              Book a call with Paras&apos;s team
            </GoldButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Section ──────────────────────────────────────────────────────────

const tiers = [
  {
    name: 'Lead Recovery Sprint',
    price: 'From ₹49,000',
    desc: 'A focused 14-day build to reactivate your dead leads and plug the biggest leak.',
    highlight: false,
  },
  {
    name: 'AI Sales Engine',
    price: 'From ₹1,75,000',
    desc: 'The complete system: all seven components, installed and live in ~30 days.',
    sub: '+ monthly management',
    highlight: true,
  },
  {
    name: 'AI Growth Partner',
    price: 'Custom scope',
    desc: 'For developers and high-volume teams. A custom, fully-managed growth system.',
    highlight: false,
  },
];

function PricingSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{ background: '#F5F0E6' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel light>Ways to Work With Us</SectionLabel>
          <h2
            className="font-el-serif mt-2 font-bold leading-tight"
            style={{ color: '#0E2A22', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Ways to work with us
          </h2>
          <GoldDivider className="mt-5" />
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeRise}
              className="rounded-2xl p-8 flex flex-col"
              style={
                t.highlight
                  ? {
                      background: '#0E2A22',
                      border: '1.5px solid rgba(201,162,75,0.50)',
                      boxShadow: '0 8px 32px rgba(14,42,34,0.18)',
                    }
                  : {
                      background: '#fff',
                      border: '1px solid rgba(14,42,34,0.07)',
                      boxShadow: '0 2px 16px rgba(14,42,34,0.05)',
                    }
              }
              whileHover={{ y: -4 }}
            >
              {t.highlight && (
                <span
                  className="text-xs font-semibold tracking-widest uppercase mb-4 inline-block"
                  style={{ color: '#C9A24B' }}
                >
                  Most Popular
                </span>
              )}
              <h3
                className="font-el-serif font-bold text-xl mb-2"
                style={{ color: t.highlight ? '#F5F0E6' : '#0E2A22' }}
              >
                {t.name}
              </h3>
              <p
                className="font-el-serif text-2xl font-bold mb-1"
                style={{ color: '#C9A24B' }}
              >
                {t.price}
              </p>
              {t.sub && (
                <p className="text-xs mb-4" style={{ color: '#7E9587' }}>
                  {t.sub}
                </p>
              )}
              {!t.sub && <div className="mb-4" />}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: t.highlight ? '#7E9587' : '#5a6b5f' }}
              >
                {t.desc}
              </p>
              <div className="mt-6">
                <GoldButton onClick={() => scrollTo('book')} className="w-full">
                  Book a Strategy Call
                </GoldButton>
              </div>
            </motion.div>
          ))}
        </StaggerReveal>

        <Reveal className="text-center">
          <p className="text-sm" style={{ color: '#7E9587' }}>
            Not sure which fits? That&apos;s what the strategy call is for. We&apos;ll recommend
            the right starting point for your business.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Do I need to be technical?',
    a: 'No. This is fully done-for-you. If you can use WhatsApp, you can run what we build.',
  },
  {
    q: 'How long until it\'s live?',
    a: 'Most systems go live in weeks. The Lead Recovery Sprint is 14 days.',
  },
  {
    q: 'Will it work for my market / city?',
    a: 'Yes — it\'s built for Indian and UAE real estate specifically, and adapts to your projects and audience.',
  },
  {
    q: 'Do you replace my sales team?',
    a: 'No. We free them. AI handles response, qualification and nurture; your team handles meetings and closing.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends on scope. We\'ll give you a clear recommendation and price on your strategy call.',
  },
  {
    q: 'What happens on the strategy call?',
    a: 'We map exactly where you\'re losing leads today and show you what an AI engine would recover — whether or not you work with us.',
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: '#0E2A22' }} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2
            className="font-el-serif mt-2 font-bold leading-tight"
            style={{ color: '#F5F0E6', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            Common questions
          </h2>
          <GoldDivider className="mt-5" />
        </Reveal>

        <StaggerReveal className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeRise}
              className="rounded-2xl overflow-hidden"
              style={{
                border: open === i ? '1px solid rgba(201,162,75,0.30)' : '1px solid rgba(201,162,75,0.10)',
                background: open === i ? 'rgba(201,162,75,0.06)' : 'rgba(255,255,255,0.03)',
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-medium text-sm sm:text-base pr-4"
                  style={{ color: '#F5F0E6' }}
                >
                  {f.q}
                </span>
                <span
                  className="flex-shrink-0 text-lg leading-none transition-transform duration-300"
                  style={{
                    color: '#C9A24B',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#7E9587' }}>
                    {f.a}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

// ─── Final CTA / Booking ──────────────────────────────────────────────────────

function BookingSection() {
  return (
    <section
      id="book"
      style={{ background: '#0a2019' }}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          <SectionLabel>Book a Free Strategy Call</SectionLabel>
          <h2
            className="font-el-serif mt-2 font-bold leading-tight"
            style={{ color: '#F5F0E6', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
          >
            Let&apos;s find your biggest lead leak — free.
          </h2>
          <GoldDivider className="mt-5" />
          <p className="mt-6 max-w-xl mx-auto text-base leading-relaxed" style={{ color: '#7E9587' }}>
            Book a 30-minute strategy call. We&apos;ll map where your leads are leaking and exactly
            how an AI sales engine would fix it. No obligation.
          </p>
        </Reveal>

        {/* Calendar embed placeholder */}
        <Reveal>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,162,75,0.18)',
              minHeight: 480,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '48px 32px',
              gap: 20,
            }}
          >
            {/* ↓↓↓ Replace this div with your GoHighLevel or Calendly embed ↓↓↓ */}
            <div style={{ color: '#7E9587', textAlign: 'center' }}>
              <svg
                className="mx-auto mb-6"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect x="6" y="10" width="36" height="34" rx="4" stroke="#C9A24B" strokeWidth="2" />
                <path d="M6 22h36" stroke="#C9A24B" strokeWidth="2" />
                <path d="M16 6v8M32 6v8" stroke="#C9A24B" strokeWidth="2" strokeLinecap="round" />
                <rect x="14" y="28" width="6" height="6" rx="1" fill="#C9A24B" opacity="0.6" />
                <rect x="28" y="28" width="6" height="6" rx="1" fill="#C9A24B" opacity="0.4" />
              </svg>
              <p
                className="font-el-serif font-semibold text-lg mb-2"
                style={{ color: '#F5F0E6' }}
              >
                Booking Calendar
              </p>
              <p className="text-sm mb-8" style={{ color: '#7E9587' }}>
                [ GoHighLevel / Calendly widget goes here ]
              </p>
              <GoldButton
                large
                onClick={() => window.open('https://wa.me/917017538193', '_blank')}
              >
                Book a Free Strategy Call
              </GoldButton>
            </div>
            {/* ↑↑↑ End embed placeholder ↑↑↑ */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: '#161A18' }} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(201,162,75,0.10)' }}>
          {/* Brand */}
          <div>
            <span className="font-el-serif font-bold text-2xl" style={{ color: '#F5F0E6' }}>
              Estate <span style={{ color: '#C9A24B' }}>Labs</span>
            </span>
            <p className="text-sm mt-1" style={{ color: '#7E9587' }}>
              AI sales systems for real estate. India &amp; UAE.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 text-sm" style={{ color: '#7E9587' }}>
            <span>
              India:{' '}
              <a
                href="tel:+917017538193"
                className="transition-colors hover:text-el-cream"
                style={{ color: '#F5F0E6' }}
              >
                +91 70175 38193
              </a>
            </span>
            <span>
              UAE:{' '}
              <a
                href="tel:+971502876260"
                className="transition-colors hover:text-el-cream"
                style={{ color: '#F5F0E6' }}
              >
                +971 50 287 6260
              </a>
            </span>
            <span>
              <a
                href="mailto:hello@estatelabs.in"
                className="transition-colors"
                style={{ color: '#C9A24B' }}
              >
                hello@estatelabs.in
              </a>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-sm" style={{ color: '#7E9587' }}>
            <a
              href="https://exponentialworld.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: '#C9A24B' }}
            >
              exponentialworld.ai ↗
            </a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
          </div>
        </div>

        <p className="text-xs text-center" style={{ color: '#7E9587', opacity: 0.6 }}>
          © Estate Labs. A venture by Exponential World AI.
        </p>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float ───────────────────────────────────────────────────────────

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917017538193"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 sm:bottom-8 sm:right-7"
      style={{
        width: 54,
        height: 54,
        background: '#25D366',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Inline CTA Strip ─────────────────────────────────────────────────────────

function CtaStrip() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      className="py-10 px-4 text-center"
      style={{ background: '#0c2419', borderTop: '1px solid rgba(201,162,75,0.10)', borderBottom: '1px solid rgba(201,162,75,0.10)' }}
    >
      <GoldButton onClick={() => scrollTo('book')} large>
        Book Your Free Lead Leak Audit →
      </GoldButton>
      <p className="mt-3 text-xs" style={{ color: '#7E9587' }}>
        30-minute call · no obligation
      </p>
    </div>
  );
}

// ─── Root Component ───────────────────────────────────────────────────────────

export default function EstateLabsSite() {
  return (
    <div style={{ background: '#0E2A22', fontFamily: 'Inter, sans-serif' }}>
      <Nav />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <CtaStrip />
      <SolutionSection />
      <HowItWorksSection />
      <CtaStrip />
      <ResultsSection />
      <WhySection />
      <FounderSection />
      <PricingSection />
      <CtaStrip />
      <FAQSection />
      <BookingSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
