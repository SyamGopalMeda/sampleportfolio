import React from 'react';
import { PUBLICATIONS } from '../data/cvData';
import { BookOpen, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 border-b border-[#252B32]/70 bg-[#080B0F] relative">
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
              RESEARCH &amp; EXPLORATION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F3F4F0] tracking-tight">
              Investigating what intelligent systems can become.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] max-w-md">
            Peer-reviewed research and applied theoretical frameworks addressing sub-pixel super-resolution and uncertainty-calibrated multimodal fusion.
          </p>
        </div>

        {/* Featured Paper Card */}
        <div className="space-y-8">
          {PUBLICATIONS.map((pub, idx) => (
            <div
              key={idx}
              className="p-6 lg:p-9 rounded-2xl bg-[#0F1319] border border-[#252B32] hover:border-[#384452] transition-all relative overflow-hidden"
            >
              {/* Paper Category Banner */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#252B32]/70">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded bg-[#161D26] text-[#C4F36B] border border-[#252B32]">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono-tech text-[#C4F36B] font-semibold">
                    {pub.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#9BA3AD]">
                  <span>YEAR: {pub.year}</span>
                  <span className="text-[#646E7A]">•</span>
                  <span>{pub.category}</span>
                </div>
              </div>

              {/* Title & Venue */}
              <div className="mt-6 mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F3F4F0] tracking-tight">
                  {pub.title}
                </h3>
                <div className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] mt-1.5 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#C4F36B]" />
                  <span>{pub.venue}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-[#9BA3AD] leading-relaxed mb-6 max-w-4xl">
                {pub.summary}
              </p>

              {/* Verified Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {pub.results.map((res, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-3.5 rounded-xl bg-[#090C10] border border-[#252B32]"
                  >
                    <div className="text-xl font-bold font-mono-tech text-[#C4F36B]">
                      {res.value}
                    </div>
                    <div className="text-xs font-semibold text-[#F3F4F0] mt-1 font-mono-tech">
                      {res.metric}
                    </div>
                    <div className="text-[11px] text-[#646E7A] font-mono-tech mt-0.5">
                      {res.baseline}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Contributions */}
              <div className="p-4 rounded-xl bg-[#090D12] border border-[#202730] space-y-2.5">
                <h4 className="text-xs font-mono-tech text-[#F3F4F0] uppercase tracking-wider font-semibold">
                  KEY SCIENTIFIC &amp; TECHNICAL CONTRIBUTIONS:
                </h4>
                <ul className="space-y-2 text-xs text-[#9BA3AD]">
                  {pub.contributions.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C4F36B] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Research Companion: Quantum Multimodal Framework Spotlight */}
          <div className="p-6 lg:p-8 rounded-2xl bg-[#0F1319] border border-[#252B32] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#252B32]/70 text-xs font-mono-tech">
              <div className="flex items-center gap-2 text-[#C4F36B]">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">THEORETICAL FRAMEWORK // RESEARCH ADVANCE</span>
              </div>
              <span className="text-[#9BA3AD]">MULTIMODAL CALIBRATION STUDY</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F3F4F0]">
              Quantum-Inspired Entanglement for Cross-Modal Calibration
            </h3>

            <p className="text-sm text-[#9BA3AD] leading-relaxed">
              In parallel research, investigated density-matrix formulation for cross-modal fusion across speech (Wav2Vec 2.0), text (XLM-RoBERTa + MuRIL), and vision (EfficientNet + Swin). By replacing standard Euclidean concatenation with quantum phase modulation (QPM) and entanglement mapping (QEM), the system achieved an Expected Calibration Error of only 0.028 (a 66% reduction over uncalibrated neural baselines), demonstrating that probabilistic uncertainty can be preserved even across noisy code-mixed language distributions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono-tech text-[#C4F36B]">
              <span className="px-3 py-1 rounded bg-[#161D26] border border-[#252B32]">
                ECE: 0.028
              </span>
              <span className="px-3 py-1 rounded bg-[#161D26] border border-[#252B32]">
                94.8% Code-Mixed Accuracy
              </span>
              <span className="px-3 py-1 rounded bg-[#161D26] border border-[#252B32]">
                +3.5% over MuRIL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
