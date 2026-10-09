import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { Mail, Phone, Send, Copy, Check, ArrowUpRight, Terminal, ShieldAlert } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide at least 15 characters describing your inquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest delivery: Compose client mailto draft with subject & body
    const emailSubject = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${formData.name} via Portfolio`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

    setSubmittedStatus('opening_client');
    window.open(mailtoUrl, '_blank');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#252B32]/70 bg-[#0A0D12] relative">
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
              LET'S BUILD SOMETHING MEANINGFUL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F3F4F0] tracking-tight">
              Have an interesting problem? Let's solve it.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] max-w-md">
            Open to meaningful conversations around applied AI, deep learning, Generative AI, research, and intelligent software systems.
          </p>
        </div>

        {/* 2 Columns: Contact Channels & Honest Validated Message Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-[#10141A] border border-[#252B32] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-[#646E7A] uppercase">
                  DIRECT EMAIL INBOX
                </span>
                <span className="text-xs font-mono-tech text-[#C4F36B]">PRIMARY</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#161D26] border border-[#252B32] flex items-center justify-center text-[#C4F36B]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base sm:text-lg font-bold font-mono-tech text-[#F3F4F0] hover:text-[#C4F36B] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-xs text-[#9BA3AD]">Checked daily for research &amp; engineering opportunities</p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#252B32] flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 py-2 rounded-lg bg-[#C4F36B] text-[#080A0D] text-xs font-mono-tech font-bold text-center hover:bg-[#b0df57] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                </a>

                <button
                  onClick={copyEmailToClipboard}
                  className="px-3 py-2 rounded-lg bg-[#141A23] border border-[#252B32] text-xs font-mono-tech text-[#9BA3AD] hover:text-[#F3F4F0] hover:border-[#C4F36B]/50 transition-colors flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C4F36B]" />
                      <span className="text-[#C4F36B]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone / Call */}
            <div className="p-5 rounded-2xl bg-[#10141A] border border-[#252B32] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#161D26] border border-[#252B32] flex items-center justify-center text-[#C4F36B]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-tech text-[#646E7A] block">PHONE // DIRECT LINE</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-bold font-mono-tech text-[#F3F4F0] hover:text-[#C4F36B] transition-colors"
                  >
                    {PERSONAL_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-xs font-mono-tech text-[#C4F36B] hover:underline"
              >
                Call
              </a>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#10141A] border border-[#252B32] hover:border-[#C4F36B]/40 hover:bg-[#131922] transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <LinkedinIcon className="w-4 h-4 text-[#C4F36B]" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#646E7A] group-hover:text-[#C4F36B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-xs font-bold font-mono-tech text-[#F3F4F0]">LinkedIn Profile</div>
                <div className="text-[10px] font-mono-tech text-[#9BA3AD] truncate">syam-gopal-meda</div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#10141A] border border-[#252B32] hover:border-[#C4F36B]/40 hover:bg-[#131922] transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <GithubIcon className="w-4 h-4 text-[#C4F36B]" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#646E7A] group-hover:text-[#C4F36B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-xs font-bold font-mono-tech text-[#F3F4F0]">Explore GitHub</div>
                <div className="text-[10px] font-mono-tech text-[#9BA3AD] truncate">@SyamGopal</div>
              </a>
            </div>

            {/* Availability Status Card */}
            <div className="p-4 rounded-xl bg-[#141B23]/70 border border-[#252B32] text-xs font-mono-tech text-[#9BA3AD] flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C4F36B] animate-pulse shrink-0" />
              <span>Status: {PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Right Column: Verified Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-6 lg:p-8 rounded-2xl bg-[#10141A] border border-[#252B32] relative">
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#252B32]/70 text-xs font-mono-tech">
                <span className="flex items-center gap-2 text-[#F3F4F0] font-semibold">
                  <Terminal className="w-4 h-4 text-[#C4F36B]" />
                  DISPATCH MESSAGE // DIRECT TRANSMISSION
                </span>
                <span className="text-[#646E7A]">SECURE CLIENT DRAFT</span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono-tech text-[#9BA3AD] mb-1.5">
                      Your Name <span className="text-[#C4F36B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Eleanor Vance"
                      className={`w-full bg-[#0A0D12] border rounded-lg px-3.5 py-2.5 text-xs font-mono-tech text-[#F3F4F0] placeholder-[#4F5966] focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#252B32] focus:border-[#C4F36B]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono-tech text-red-400 mt-1 flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono-tech text-[#9BA3AD] mb-1.5">
                      Your Email <span className="text-[#C4F36B]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@laboratory.org"
                      className={`w-full bg-[#0A0D12] border rounded-lg px-3.5 py-2.5 text-xs font-mono-tech text-[#F3F4F0] placeholder-[#4F5966] focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#252B32] focus:border-[#C4F36B]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono-tech text-red-400 mt-1 flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#9BA3AD] mb-1.5">
                    Topic / Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="ML Architecture Discussion / Research Collaboration"
                    className="w-full bg-[#0A0D12] border border-[#252B32] rounded-lg px-3.5 py-2.5 text-xs font-mono-tech text-[#F3F4F0] placeholder-[#4F5966] focus:outline-none focus:border-[#C4F36B] transition-colors"
                  />
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-mono-tech text-[#9BA3AD] mb-1.5">
                    Project Requirements / Message <span className="text-[#C4F36B]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We have an interesting challenge with multimodal calibration and model inference latency..."
                    className={`w-full bg-[#0A0D12] border rounded-lg px-3.5 py-2.5 text-xs font-mono-tech text-[#F3F4F0] placeholder-[#4F5966] focus:outline-none transition-colors ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#252B32] focus:border-[#C4F36B]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono-tech text-red-400 mt-1 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#C4F36B] text-[#080A0D] font-mono-tech text-xs sm:text-sm font-bold tracking-wide hover:bg-[#b0df57] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(196,243,107,0.2)] cursor-pointer"
                  >
                    <span>Send Message Draft to Syam Gopal</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Status Notice */}
              {submittedStatus && (
                <div className="mt-4 p-3.5 rounded-lg bg-[#141F1A] border border-[#C4F36B]/40 text-xs font-mono-tech text-[#C4F36B] flex items-start gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Email Client Triggered:</span> Your message has been prepared for <strong className="underline">syamgopalmeda@gmail.com</strong>. If your email application didn't open automatically, please send directly using the mail button above.
                  </div>
                </div>
              )}

              {/* Security & Authenticity Footnote */}
              <div className="mt-4 pt-3 border-t border-[#252B32]/60 text-[10px] font-mono-tech text-[#646E7A] flex items-center justify-between">
                <span>ZERO TRACKING COOKIES • DIRECT MAIL DISPATCH</span>
                <span>AUTHENTICITY GUARANTEED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
