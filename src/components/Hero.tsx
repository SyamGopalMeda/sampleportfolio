import React from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Award, BookOpen, Layers } from 'lucide-react';
import { NeuralCanvas } from './NeuralCanvas';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 lg:pt-36 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] glow-spot-lime pointer-events-none opacity-50" />
      <div className="absolute top-1/3 -left-48 w-[600px] h-[400px] glow-spot-ambient pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Technical Metadata Tag */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12171E]/90 border border-[#252B32] mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#C4F36B] animate-ping" />
          <span className="text-[11px] font-mono-tech tracking-wider text-[#C4F36B] uppercase font-semibold">
            AI ENGINEERING • DEEP LEARNING • GENERATIVE AI
          </span>
          <span className="text-[11px] font-mono-tech text-[#646E7A] hidden md:inline">
            // LEAD ML ARCHITECT
          </span>
        </div>

        {/* Grid Layout: Left Editorial, Right Interactive Neural Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] uppercase tracking-widest mb-2">
                MEDA SYAM GOPAL
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F3F4F0] leading-[1.08] font-display">
                Building Intelligence.{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C4F36B] via-[#E2FBB1] to-[#99E335]">
                  Engineering Impact.
                </span>
              </h1>
            </div>

            <div className="inline-block px-3 py-1 rounded bg-[#161D26] border border-[#252B32] text-xs font-mono-tech text-[#C4F36B]">
              From neural networks to production AI systems.
            </div>

            <p className="text-base sm:text-lg text-[#9BA3AD] leading-relaxed max-w-xl font-normal">
              I build intelligent systems that connect deep learning research with real-world applications—from computer vision and multimodal learning to Generative AI and production-grade ML infrastructure.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-lg bg-[#C4F36B] text-[#080A0D] font-mono-tech text-xs sm:text-sm font-bold tracking-wide hover:bg-[#b5e759] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(196,243,107,0.25)] hover:shadow-[0_0_28px_rgba(196,243,107,0.4)] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-lg bg-[#12171E] border border-[#252B32] text-[#F3F4F0] font-mono-tech text-xs sm:text-sm font-semibold hover:border-[#C4F36B]/60 hover:text-[#C4F36B] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#C4F36B]" />
              </button>
            </div>

            {/* Credential Micro Badges */}
            <div className="pt-4 border-t border-[#252B32]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono-tech text-[#9BA3AD]">
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C4F36B]" />
                <span>AWS Certified ML Engineer (MLA-C01)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#C4F36B]" />
                <span>Published Researcher (IJMTST, 2024)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#C4F36B]" />
                <span>5+ Production Models</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Neural Network Interactive Visual */}
          <div className="lg:col-span-6 w-full">
            <NeuralCanvas />
            {/* Quick caption under canvas */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono-tech text-[#646E7A] px-2">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#C4F36B]" />
                INTERACTIVE NEURAL SYSTEM MAPPING
              </span>
              <span>FEEDFORWARD FLOW • HOVER TO ACTIVATE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex items-center justify-between text-xs font-mono-tech text-[#646E7A]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
          <span>PRODUCTION WORKLOADS &amp; ARCHITECTURAL IMPACT</span>
        </div>
        <button
          onClick={() => scrollTo('impact')}
          className="flex items-center gap-1.5 text-[#9BA3AD] hover:text-[#C4F36B] transition-colors cursor-pointer"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
