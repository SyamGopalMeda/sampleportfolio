import React from 'react';
import { EXPERIENCES } from '../data/cvData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-[#252B32]/70 bg-[#090D12] relative">
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
              ENGINEERING IN PRACTICE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F3F4F0] tracking-tight">
              From experimentation to production.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] max-w-md">
            Chronological engineering track record spanning leadership of production ML systems, cybersecurity threat algorithms, and edge vision models.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#252B32] ml-4 md:ml-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090D12] border-2 border-[#252B32] group-hover:border-[#C4F36B] transition-colors flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Experience Card */}
              <div className="p-6 lg:p-8 rounded-2xl bg-[#10141A] border border-[#252B32] hover:border-[#333D49] transition-all">
                {/* Meta Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-[#252B32]/70">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono-tech text-[#C4F36B] font-semibold">
                        {exp.type}
                      </span>
                      <span className="text-[#646E7A] text-xs font-mono-tech">•</span>
                      <span className="text-xs font-mono-tech text-[#9BA3AD] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F3F4F0]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono-tech text-[#C4F36B] mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    {/* Period */}
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#9BA3AD] bg-[#161D26] px-3 py-1.5 rounded-lg border border-[#252B32]">
                      <Calendar className="w-3.5 h-3.5 text-[#C4F36B]" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Highlight Metric Pill */}
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#080A0D] bg-[#C4F36B] px-3 py-1.5 rounded-lg font-semibold shadow-[0_0_12px_rgba(196,243,107,0.2)]">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{exp.highlightMetric.value}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-[#9BA3AD] mt-4 mb-6 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono-tech text-[#F3F4F0] uppercase tracking-wider font-semibold">
                    MEASURABLE ACHIEVEMENTS &amp; SYSTEM RESPONSIBILITIES:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9BA3AD]">
                        <CheckCircle2 className="w-4 h-4 text-[#C4F36B] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-4 border-t border-[#252B32]/70 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono-tech text-[#646E7A] mr-2 flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    ENVIRONMENT:
                  </span>
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-xs font-mono-tech bg-[#141A23] border border-[#252B32] text-[#F3F4F0]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
