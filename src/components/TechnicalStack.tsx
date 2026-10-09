import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/cvData';
import { Search, Terminal, Cpu, Sparkles, Sliders, Code2, Cloud, Database } from 'lucide-react';

export const TechnicalStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'deep-learning':
        return <Cpu className="w-4 h-4 text-[#C4F36B]" />;
      case 'generative-ai':
        return <Sparkles className="w-4 h-4 text-[#C4F36B]" />;
      case 'optimization':
        return <Sliders className="w-4 h-4 text-[#C4F36B]" />;
      case 'programming':
        return <Code2 className="w-4 h-4 text-[#C4F36B]" />;
      case 'cloud-mlops':
        return <Cloud className="w-4 h-4 text-[#C4F36B]" />;
      case 'fullstack-apis':
        return <Database className="w-4 h-4 text-[#C4F36B]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#C4F36B]" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.detail.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false;
    if (searchQuery.trim() !== '') return cat.skills.length > 0;
    return true;
  });

  return (
    <section id="expertise" className="py-24 border-b border-[#252B32]/70 bg-[#090C10] relative">
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
              THE ENGINEERING STACK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F3F4F0] tracking-tight">
              Tools for building intelligent systems.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] max-w-md">
            Categorized technical capabilities applied in production pipelines, research publications, and high-throughput systems. Zero synthetic progress bars.
          </p>
        </div>

        {/* Filter Controls: Tabs + Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#252B32]/70">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#C4F36B] text-[#080A0D] font-bold shadow-[0_0_12px_rgba(196,243,107,0.2)]'
                  : 'bg-[#12171E] text-[#9BA3AD] hover:text-[#F3F4F0] border border-[#252B32]'
              }`}
            >
              All Domains ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech whitespace-nowrap transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#C4F36B] text-[#080A0D] font-bold shadow-[0_0_12px_rgba(196,243,107,0.2)]'
                    : 'bg-[#12171E] text-[#9BA3AD] hover:text-[#F3F4F0] border border-[#252B32]'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#646E7A] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stack (e.g. Swin, Gemini, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12171E] border border-[#252B32] rounded-lg pl-9 pr-3 py-2 text-xs font-mono-tech text-[#F3F4F0] placeholder-[#646E7A] focus:outline-none focus:border-[#C4F36B] transition-colors"
            />
          </div>
        </div>

        {/* Categories Landscape Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-[#101419] border border-[#252B32] hover:border-[#333D47] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#252B32]/70">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-[#161D26] border border-[#252B32] flex items-center justify-center">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="text-sm font-bold font-mono-tech text-[#F3F4F0]">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#C4F36B] bg-[#C4F36B]/10 px-2 py-0.5 rounded border border-[#C4F36B]/20">
                    {cat.badge}
                  </span>
                </div>

                <p className="text-xs text-[#9BA3AD] mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Interactive List */}
                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-[#0C0F14] border border-[#20262E] hover:border-[#C4F36B]/40 hover:bg-[#141A22] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#F3F4F0] font-mono-tech">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono-tech text-[#646E7A]">
                          VERIFIED
                        </span>
                      </div>
                      <p className="text-[11px] text-[#9BA3AD] mt-0.5 leading-normal">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="mt-5 pt-3 border-t border-[#252B32]/60 text-[10px] font-mono-tech text-[#646E7A] flex items-center justify-between">
                <span>{cat.skills.length} TECHNOLOGIES LOADED</span>
                <span className="text-[#C4F36B]">SYSTEM READY</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 text-[#9BA3AD] font-mono-tech text-sm bg-[#101419] rounded-xl border border-[#252B32]">
            No technical skills found matching "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
