import React from 'react';
import { EDUCATION_LIST, CERTIFICATIONS } from '../data/cvData';
import { Award, GraduationCap, Calendar, MapPin, ShieldCheck } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 border-b border-[#252B32]/70 bg-[#080A0E] relative">
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
              CREDENTIALS &amp; ACADEMICS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F3F4F0] tracking-tight">
              Foundations &amp; Industry Standards
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] max-w-md">
            Formal computer science engineering degrees paired with industry-recognized cloud and network engineering certifications.
          </p>
        </div>

        {/* 2 Columns: Certifications & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Industry Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 mb-2 text-xs font-mono-tech text-[#9BA3AD]">
              <span className="flex items-center gap-2 text-[#C4F36B]">
                <ShieldCheck className="w-4 h-4" />
                PROFESSIONAL CERTIFICATIONS
              </span>
              <span>VERIFIED CREDENTIALS</span>
            </div>

            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#10141A] border border-[#252B32] hover:border-[#C4F36B]/40 transition-all group"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-[#161D26] border border-[#252B32] flex items-center justify-center text-[#C4F36B] group-hover:border-[#C4F36B]/50">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-[#F3F4F0] group-hover:text-[#C4F36B] transition-colors">
                        {cert.title}
                      </h3>
                      <div className="text-xs font-mono-tech text-[#9BA3AD]">
                        {cert.issuer} {cert.code && `// ${cert.code}`}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#C4F36B] bg-[#C4F36B]/10 px-2 py-0.5 rounded border border-[#C4F36B]/20">
                    {cert.year}
                  </span>
                </div>

                <p className="text-xs text-[#9BA3AD] mt-3 mb-4 leading-relaxed pl-9">
                  {cert.description}
                </p>

                <div className="pl-9 flex flex-wrap gap-1.5">
                  {cert.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono-tech bg-[#141A23] border border-[#252B32] text-[#F3F4F0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Academic Degrees */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 mb-2 text-xs font-mono-tech text-[#9BA3AD]">
              <span className="flex items-center gap-2 text-[#C4F36B]">
                <GraduationCap className="w-4 h-4" />
                ACADEMIC DEGREES
              </span>
              <span>ENGINEERING FOUNDATIONS</span>
            </div>

            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#10141A] border border-[#252B32] hover:border-[#333D48] transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#9BA3AD] mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C4F36B]" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#646E7A]" />
                    {edu.location}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-[#F3F4F0] mb-1">
                  {edu.degree}
                </h3>
                <div className="text-xs font-mono-tech text-[#C4F36B] mb-3">
                  {edu.institution}
                </div>

                <div className="p-3 rounded-lg bg-[#0A0D12] border border-[#20262E] mb-3 flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-[#9BA3AD]">
                    {edu.scoreLabel}
                  </span>
                  <span className="text-sm font-bold font-mono-tech text-[#F3F4F0]">
                    {edu.score}
                  </span>
                </div>

                <p className="text-xs text-[#9BA3AD] leading-relaxed">
                  <strong className="text-[#F3F4F0]">Core Focus:</strong> {edu.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
