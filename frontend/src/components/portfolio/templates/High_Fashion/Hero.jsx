import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import data from '../../../../data/dummy_data.json';

const F = {
  bg:       '#faf9f7',
  surface:  '#f2efe9',
  dark:     '#0a0a0a',
  charcoal: '#1a1a1a',
  muted:    '#6b6b6b',
  subtle:   '#b0b0b0',
  gold:     '#c9a84c',
  goldLight:'#e8c96e',
  cream:    '#f7f3ed',
  border:   '#e0dbd4',
};

const TAGS = ['Full Stack', 'Creative Tech', 'Open Source', 'React', 'Node.js', 'TypeScript', 'Design Systems', 'Cloud'];

function Ticker() {
  return (
    <div className="overflow-hidden" style={{ borderTop: `1px solid ${F.border}`, borderBottom: `1px solid ${F.border}`, background: F.dark }}>
      <motion.div
        className="flex gap-12 whitespace-nowrap py-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}>
        {[...TAGS, ...TAGS].map((t, i) => (
          <span key={i} className="text-xs font-bold uppercase tracking-widest flex items-center gap-3"
            style={{ color: i % 2 === 0 ? F.gold : '#fff' }}>
            {i % 4 === 0 && <span style={{ color: F.gold }}>✦</span>}
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const words = data.personal.title.split(' & ');

  return (
    <section style={{ background: F.bg, fontFamily: "'Inter', sans-serif" }}>

      {/* ── Top editorial bar ── */}
      <div className="flex items-center justify-between px-8 md:px-16 py-4"
        style={{ borderBottom: `1px solid ${F.border}` }}>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: F.gold }} />
          <span className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: F.charcoal }}>
            Portfolio
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={10} style={{ color: F.gold }} />
          <span className="text-xs uppercase tracking-widest" style={{ color: F.muted }}>
            {data.personal.location}
          </span>
        </div>
        <span className="text-xs uppercase tracking-widest" style={{ color: F.subtle }}>
          § 00
        </span>
      </div>

      {/* ── Main hero split ── */}
      <div className="grid lg:grid-cols-2 min-h-[600px]">

        {/* Left — large name + tagline */}
        <div className="flex flex-col justify-between px-8 md:px-16 py-14"
          style={{ borderRight: `1px solid ${F.border}` }}>

          <div>
            <motion.p
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-black uppercase tracking-[0.3em] mb-8"
              style={{ color: F.gold }}>
              — Creative Technologist
            </motion.p>

            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '100%' }} animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: F.charcoal, letterSpacing: '-0.03em' }}>
                {data.personal.name.split(' ')[0]}
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: '100%' }} animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-black leading-none italic"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  letterSpacing: '-0.03em',
                  background: `linear-gradient(135deg, ${F.gold}, ${F.goldLight})`,
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                {data.personal.name.split(' ')[1]}
              </motion.h1>
            </div>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ height: 2, background: `linear-gradient(90deg, ${F.gold}, transparent)`, transformOrigin: 'left', marginBottom: '2rem' }} />

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: F.muted }}>
              {data.personal.bio.split('.')[0]}.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 mt-8">
            <span className="text-xs uppercase tracking-widest font-bold" style={{ color: F.muted }}>
              Scroll to explore
            </span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowDown size={12} style={{ color: F.gold }} />
            </motion.div>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
          <motion.img
            src={data.personal.avatar}
            alt={data.personal.name}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="w-full h-full object-cover object-top absolute inset-0"
            style={{ filter: 'contrast(1.04) saturate(0.8)' }}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(250,249,247,0.15), transparent)' }} />

          {/* Gold corner frame */}
          <div className="absolute top-6 right-6 w-16 h-16 pointer-events-none"
            style={{ border: `2px solid ${F.gold}`, borderLeft: 'none', borderBottom: 'none', opacity: 0.7 }} />
          <div className="absolute bottom-6 left-6 w-10 h-10 pointer-events-none"
            style={{ border: `2px solid rgba(255,255,255,0.35)`, borderRight: 'none', borderTop: 'none' }} />

          {/* Floating role tag */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-8 right-8 px-4 py-3"
            style={{ background: F.dark, borderLeft: `3px solid ${F.gold}` }}>
            <p className="text-xs uppercase tracking-widest font-black" style={{ color: F.gold }}>
              Available for
            </p>
            <p className="text-sm font-semibold mt-0.5" style={{ color: '#fff' }}>
              New Projects
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <Ticker />

      {/* ── Stats bar ── */}
      <div className="grid grid-cols-3 divide-x" style={{ borderTop: `1px solid ${F.border}`, borderBottom: `1px solid ${F.border}` }}>
        {[
          { value: `${data.stats.yearsExperience}+`, label: 'Years Experience' },
          { value: `${data.stats.projectsCompleted}+`, label: 'Projects Shipped' },
          { value: `${data.stats.happyClients}+`, label: 'Happy Clients' },
        ].map(({ value, label }, i) => (
          <motion.div key={label}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex flex-col items-center py-6"
            style={{ borderRight: i < 2 ? `1px solid ${F.border}` : 'none' }}>
            <span className="text-3xl font-black tracking-tight" style={{ color: i === 0 ? F.gold : F.charcoal }}>
              {value}
            </span>
            <span className="text-xs uppercase tracking-widest mt-1" style={{ color: F.muted }}>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
