import React from 'react';
import { Brain, Cpu, Server, Users, ArrowRight, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-[#C4F36B]" />,
      title: "Deep Learning & Multimodal Research",
      description:
        "Designing specialized neural architectures across computer vision (MobileNetV2, EfficientNet-B4, Swin Transformer), natural language processing (XLM-RoBERTa, MuRIL), and speech acoustic representations (Wav2Vec 2.0).",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#C4F36B]" />,
      title: "Grounded Generative AI Systems",
      description:
        "Engineering generative models with deterministic safety boundaries. Integrating Google Gemini 2.5 Flash and GANs where mathematical engines verify decisions and foundation models synthesize explainable, multilingual outputs.",
    },
    {
      icon: <Server className="w-5 h-5 text-[#C4F36B]" />,
      title: "Model Optimization & Production MLOps",
      description:
        "Converting heavy PyTorch and TensorFlow research graphs into low-latency production endpoints via weight quantization, structural pruning, Dockerized containerization, and AWS SageMaker deployment.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#C4F36B]" />,
      title: "Technical Leadership & Mentorship",
      description:
        "Guiding engineering teams from theoretical formulations to production execution. Mentored 4 ML engineers at GloomDev while conducting technical instruction across Java, Spring Boot, and modern full-stack architectures.",
    },
  ];

  return (
    <section id="about" className="py-24 border-b border-[#252B32]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-3 text-left">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
          BEHIND THE MODELS
        </div>

        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-left">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F3F4F0] tracking-tight leading-[1.15]">
              Research-driven thinking.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4F36B] to-[#9AE630]">
                Production-focused engineering.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-sm sm:text-base text-[#9BA3AD] leading-relaxed">
              Bridging the gap between cutting-edge neural architectures and bulletproof production software. I treat model weights as software artifacts—measured by accuracy, calibration, inference latency, and uptime.
            </p>
          </div>
        </div>

        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Left Column: Narrative & Philosophical Framework */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101419] border border-[#252B32] space-y-5">
              <h3 className="text-lg font-bold text-[#F3F4F0] font-mono-tech flex items-center gap-2">
                <span className="text-[#C4F36B]">01 //</span> CORE ENGINEERING PHILOSOPHY
              </h3>

              <p className="text-sm sm:text-base text-[#9BA3AD] leading-relaxed">
                As a Deep Learning practitioner and Lead Machine Learning Architect with over three years of dedicated experience, my focus centers on designing systems that do not break under real-world constraints. Too many AI proofs-of-concept fail when confronted with latency budgets, noisy sensor feeds, or out-of-distribution client data.
              </p>

              <p className="text-sm sm:text-base text-[#9BA3AD] leading-relaxed">
                My architectural ethos adheres strictly to deterministic grounding:{' '}
                <strong className="text-[#F3F4F0] font-medium">"Algorithms decide. AI explains."</strong> Whether architecting agricultural diagnostics, cross-modal emotion recognition, or medical grayscale super-resolution, statistical guarantees and rigorous evaluation always precede generative presentation.
              </p>

              <div className="pt-4 border-t border-[#252B32] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono-tech">
                <div>
                  <span className="text-[#646E7A] block">EXPERIENCE</span>
                  <span className="text-[#F3F4F0] font-semibold">3+ Years Practical ML</span>
                </div>
                <div>
                  <span className="text-[#646E7A] block">PRIMARY FRAMEWORKS</span>
                  <span className="text-[#C4F36B] font-semibold">PyTorch • TensorFlow</span>
                </div>
                <div>
                  <span className="text-[#646E7A] block">CLOUD PLATFORM</span>
                  <span className="text-[#F3F4F0] font-semibold">AWS SageMaker &amp; EC2</span>
                </div>
              </div>
            </div>

            {/* Quick Quote / Callout */}
            <div className="p-5 rounded-xl bg-[#0B0F14] border-l-2 border-[#C4F36B] border-y border-r border-[#252B32]/70 text-xs sm:text-sm text-[#9BA3AD] italic">
              "A model is only as valuable as its reliability in the field. If an inference cannot be served within latency limits or explained transparently to human operators, the engineering is incomplete."
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-5 space-y-3.5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#101419] border border-[#252B32] hover:border-[#C4F36B]/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#161D26] border border-[#252B32] flex items-center justify-center group-hover:border-[#C4F36B]/50 transition-colors">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-[#F3F4F0] group-hover:text-[#C4F36B] transition-colors font-mono-tech">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-[#9BA3AD] leading-relaxed pl-11">
                  {pillar.description}
                </p>
              </div>
            ))}

            {/* Verified Credentials Anchor */}
            <div className="p-4 rounded-xl bg-[#141B23]/70 border border-[#252B32] flex items-center justify-between text-xs font-mono-tech">
              <div className="flex items-center gap-2 text-[#9BA3AD]">
                <ShieldCheck className="w-4 h-4 text-[#C4F36B]" />
                <span>AWS Certified MLA-C01 Verified</span>
              </div>
              <a
                href="#education"
                className="text-[#C4F36B] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
