import React from 'react';
import { TEACHING_MENTORSHIP } from '../data/cvData';
import { Users, GraduationCap, Code2, CheckCircle } from 'lucide-react';

export const Mentorship: React.FC = () => {
  return (
    <section id="mentorship" className="py-24 border-b border-[#252B32]/70 bg-[#090C11] relative">
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
              KNOWLEDGE SHARING
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F3F4F0] tracking-tight">
              {TEACHING_MENTORSHIP.headline}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] max-w-md">
            {TEACHING_MENTORSHIP.summary}
          </p>
        </div>

        {/* 3 Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TEACHING_MENTORSHIP.tracks.map((track, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#101419] border border-[#252B32] hover:border-[#333D48] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#252B32]/70">
                  <div className="w-8 h-8 rounded-lg bg-[#161D26] border border-[#252B32] flex items-center justify-center text-[#C4F36B]">
                    {idx === 0 ? (
                      <Users className="w-4 h-4" />
                    ) : idx === 1 ? (
                      <Code2 className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#C4F36B] bg-[#C4F36B]/10 px-2 py-0.5 rounded border border-[#C4F36B]/20">
                    {track.organization}
                  </span>
                </div>

                <div className="text-xs font-mono-tech text-[#9BA3AD] mb-1">
                  {track.role}
                </div>
                <h3 className="text-lg font-bold font-display text-[#F3F4F0] mb-2">
                  {track.title}
                </h3>
                <div className="text-xs font-mono-tech text-[#646E7A] mb-4 pb-3 border-b border-[#252B32]/40">
                  TARGET: {track.audience}
                </div>

                <ul className="space-y-2.5 text-xs text-[#9BA3AD]">
                  {track.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C4F36B] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-[#252B32]/60 text-[10px] font-mono-tech text-[#646E7A]">
                PEDAGOGY: THEORY → IMPLEMENTATION → PRODUCTION
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
