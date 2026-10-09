import React, { useState } from 'react';
import { FEATURED_PROJECTS, type ProjectData } from '../data/cvData';
import {
  CropAdvisoryDiagram,
  MultimodalEmotionDiagram,
  GanRestorationDiagram,
} from './ArchitectureDiagrams';
import { ExternalLink, ChevronDown, ChevronUp, Cpu, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>('crop-advisory');

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const renderProjectDiagram = (project: ProjectData) => {
    switch (project.type) {
      case 'crop-advisory':
        return <CropAdvisoryDiagram />;
      case 'multimodal-emotion':
        return <MultimodalEmotionDiagram />;
      case 'gan-restoration':
        return <GanRestorationDiagram />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 border-b border-[#252B32]/70 bg-[#080A0D] relative">
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
              SELECTED ENGINEERING WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F3F4F0] tracking-tight">
              Intelligence, applied.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] max-w-md">
            Architectural case studies across applied Generative AI, multimodal foundation encoders, and generative adversarial reconstruction.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          {FEATURED_PROJECTS.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            return (
              <article
                key={project.id}
                className="rounded-2xl border border-[#252B32] bg-[#0C1015] p-6 lg:p-9 shadow-xl relative overflow-hidden transition-all duration-300 hover:border-[#384350]"
              >
                {/* Top index & metadata ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#252B32]/70">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-[#161D26] text-[#C4F36B] border border-[#252B32] font-semibold">
                      PROJECT 0{index + 1}
                    </span>
                    <span className="text-xs font-mono-tech text-[#9BA3AD] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono-tech">
                    <span className="text-[#646E7A]">{project.year}</span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#12171E] border border-[#252B32] text-[#F3F4F0] hover:text-[#C4F36B] hover:border-[#C4F36B]/50 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3 text-[#646E7A]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Core Concept */}
                <div className="mt-6 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F3F4F0] tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-mono-tech text-[#C4F36B]">
                    {project.subtitle}
                  </p>
                  {project.architecturalPrinciple && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C4F36B]/10 border border-[#C4F36B]/30 text-xs font-mono-tech text-[#C4F36B]">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Principle: "{project.architecturalPrinciple}"</span>
                    </div>
                  )}
                </div>

                {/* Description & Overview */}
                <p className="text-sm sm:text-base text-[#9BA3AD] leading-relaxed mb-8 max-w-4xl">
                  {project.description}
                </p>

                {/* Interactive Technical Architecture Diagram Component */}
                <div className="mb-8">
                  {renderProjectDiagram(project)}
                </div>

                {/* Metrics Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {project.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-[#090C10] border border-[#252B32] text-left"
                    >
                      <div className="text-lg sm:text-xl font-bold font-mono-tech text-[#C4F36B]">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono-tech text-[#9BA3AD] mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expandable Engineering Deep Dive (Problem, Approach & Pipeline) */}
                <div className="pt-4 border-t border-[#252B32]/70">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="flex items-center justify-between w-full text-xs font-mono-tech text-[#9BA3AD] hover:text-[#F3F4F0] py-2 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#C4F36B]">
                        {isExpanded ? '[-]' : '[+]'}
                      </span>
                      <span>
                        {isExpanded
                          ? 'COLLAPSE DETAILED SPECIFICATION'
                          : 'EXPAND FULL PROBLEM & ARCHITECTURAL APPROACH'}
                      </span>
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-5 space-y-6 pt-2 animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-[#090D12] border border-[#202730]">
                          <h4 className="text-xs font-bold font-mono-tech text-[#F3F4F0] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                            THE CORE PROBLEM
                          </h4>
                          <p className="text-xs text-[#9BA3AD] leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#090D12] border border-[#202730]">
                          <h4 className="text-xs font-bold font-mono-tech text-[#F3F4F0] uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
                            ENGINEERED SOLUTION
                          </h4>
                          <p className="text-xs text-[#9BA3AD] leading-relaxed">
                            {project.approach}
                          </p>
                        </div>
                      </div>

                      {/* Step-by-Step Execution Pipeline */}
                      <div className="p-4 rounded-xl bg-[#090D12] border border-[#202730]">
                        <h4 className="text-xs font-bold font-mono-tech text-[#F3F4F0] uppercase tracking-wider mb-3">
                          END-TO-END EXECUTION PIPELINE
                        </h4>
                        <ol className="space-y-2 text-xs font-mono-tech text-[#9BA3AD]">
                          {project.pipeline.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5">
                              <CheckCircle className="w-3.5 h-3.5 text-[#C4F36B] shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="mt-6 pt-5 border-t border-[#252B32]/70 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono-tech text-[#646E7A] mr-2">
                    STACK:
                  </span>
                  {project.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[#131922] border border-[#252B32] text-xs font-mono-tech text-[#F3F4F0]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
