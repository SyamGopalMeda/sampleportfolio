import React from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#06080B] border-t border-[#252B32]/80 py-12 relative overflow-hidden text-left">
      {/* Background Neural Circuit Echo */}
      <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-48 glow-spot-lime opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#252B32]/60">
          {/* Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#12171E] border border-[#252B32] flex items-center justify-center">
                <span className="font-mono-tech font-bold text-xs text-[#C4F36B]">
                  {PERSONAL_INFO.monogram}
                </span>
              </div>
              <h3 className="text-base font-bold font-display text-[#F3F4F0] tracking-tight">
                {PERSONAL_INFO.displayName}
              </h3>
            </div>
            <p className="text-xs font-mono-tech text-[#9BA3AD]">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-[11px] font-mono-tech text-[#646E7A]">
              Connecting deep learning research to resilient production systems.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#101419] border border-[#252B32] text-[#9BA3AD] hover:text-[#C4F36B] hover:border-[#C4F36B]/50 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#101419] border border-[#252B32] text-[#9BA3AD] hover:text-[#C4F36B] hover:border-[#C4F36B]/50 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#101419] border border-[#252B32] text-[#9BA3AD] hover:text-[#C4F36B] hover:border-[#C4F36B]/50 transition-colors"
              aria-label="Email address"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#161D26] border border-[#252B32] text-[#C4F36B] hover:bg-[#C4F36B] hover:text-[#080A0D] transition-colors ml-2 cursor-pointer"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Nav Links & Verified Notice */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-tech text-[#646E7A]">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#F3F4F0] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
            <span>Meda Syam Gopal • Deep Learning &amp; GenAI Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
