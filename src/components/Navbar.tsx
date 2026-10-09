import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection detection for active section
      const sections = ['home', 'about', 'expertise', 'projects', 'experience', 'research', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080A0D]/85 backdrop-blur-md border-b border-[#252B32]/70 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#C4F36B] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-[#12171E] border border-[#252B32] group-hover:border-[#C4F36B]/60 transition-colors flex items-center justify-center relative overflow-hidden">
              <span className="font-mono-tech font-bold text-sm text-[#F3F4F0] group-hover:text-[#C4F36B] transition-colors">
                {PERSONAL_INFO.monogram}
              </span>
              <div className="absolute inset-0 bg-[#C4F36B]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-[#F3F4F0] group-hover:text-white transition-colors">
                {PERSONAL_INFO.displayName}
              </span>
              <span className="text-[10px] font-mono-tech text-[#9BA3AD] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B] inline-block animate-pulse" />
                DL & GenAI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101419]/80 border border-[#252B32]/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1 text-xs font-mono-tech transition-all rounded-full ${
                    isActive
                      ? 'text-[#080A0D] bg-[#C4F36B] font-semibold shadow-[0_0_10px_rgba(196,243,107,0.3)]'
                      : 'text-[#9BA3AD] hover:text-[#F3F4F0] hover:bg-[#182029]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-2 text-xs font-mono-tech px-4 py-2 rounded-lg bg-[#141A22] border border-[#252B32] text-[#F3F4F0] hover:border-[#C4F36B]/50 hover:bg-[#1A232E] hover:text-[#C4F36B] transition-all group shadow-sm"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C4F36B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-[#101419] border border-[#252B32] text-[#9BA3AD] hover:text-[#F3F4F0] focus:outline-none focus:ring-1 focus:ring-[#C4F36B]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0D12] border-b border-[#252B32] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#252B32]/50 text-xs font-mono-tech text-[#9BA3AD]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#C4F36B]" />
              NAVIGATION_MENU
            </span>
            <span className="text-[#C4F36B]">ACTIVE: #{activeSection}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-xs font-mono-tech rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#C4F36B] text-[#080A0D] font-bold'
                      : 'bg-[#12171E] text-[#9BA3AD] hover:text-[#F3F4F0] hover:bg-[#182029]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="pt-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-mono-tech py-2.5 rounded-lg bg-[#C4F36B] text-[#080A0D] font-semibold hover:bg-[#b0df57] transition-colors"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
