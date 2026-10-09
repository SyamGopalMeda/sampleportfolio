import React, { useEffect, useState, useRef } from 'react';
import { SIGNATURE_METRICS } from '../data/cvData';
import { Activity, ShieldCheck, Zap, GitCommit, Layers } from 'lucide-react';

export const ImpactMetrics: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'models':
        return <Layers className="w-4 h-4 text-[#C4F36B]" />;
      case 'requests':
        return <Activity className="w-4 h-4 text-[#C4F36B]" />;
      case 'uptime':
        return <ShieldCheck className="w-4 h-4 text-[#C4F36B]" />;
      case 'latency':
        return <Zap className="w-4 h-4 text-[#C4F36B]" />;
      case 'pipeline':
        return <GitCommit className="w-4 h-4 text-[#C4F36B]" />;
      default:
        return <Activity className="w-4 h-4 text-[#C4F36B]" />;
    }
  };

  return (
    <section id="impact" ref={sectionRef} className="py-20 border-y border-[#252B32]/70 bg-[#0A0D12] relative">
      <div className="absolute inset-0 tech-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4F36B]" />
              MEASURED PRODUCTION IMPACT
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#F3F4F0] tracking-tight">
              Engineering Reliability at Scale
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-tech text-[#9BA3AD] max-w-md">
            Verified performance claims across deployed production microservices, high-concurrency inference endpoints, and automated CI/CD pipelines.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5">
          {SIGNATURE_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="group p-5 rounded-xl bg-[#101419] border border-[#252B32] hover:border-[#C4F36B]/40 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C4F36B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-7 h-7 rounded-md bg-[#161D26] border border-[#252B32] flex items-center justify-center">
                    {getMetricIcon(metric.id)}
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#646E7A] uppercase">
                    CV_VERIFIED
                  </span>
                </div>

                {/* Animated / styled number display */}
                <div className="text-3xl sm:text-4xl font-bold font-mono-tech text-[#F3F4F0] tracking-tight mb-1 group-hover:text-[#C4F36B] transition-colors">
                  <AnimatedCounter
                    target={metric.numericValue}
                    suffix={metric.suffix}
                    trigger={hasAnimated}
                  />
                </div>

                <div className="text-xs font-semibold text-[#F3F4F0] mb-1.5">
                  {metric.label}
                </div>

                <p className="text-[11px] text-[#9BA3AD] leading-relaxed">
                  {metric.sublabel}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#252B32]/60 text-[10px] font-mono-tech text-[#646E7A] flex items-center justify-between">
                <span>{metric.context}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-8 p-4 rounded-xl bg-[#12171F]/60 border border-[#252B32]/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-[#9BA3AD] text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C4F36B]" />
            <span className="text-[#F3F4F0]">Enterprise Domain Experience:</span>
            <span>Applied AI products for Healthcare &amp; Financial Analytics ($150K+ ARR, 87% retention)</span>
          </div>
          <div className="text-[#646E7A]">
            LATENCY OPTIMIZATION VIA TENSORFLOW QUANTIZATION &amp; PRUNING
          </div>
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  target: number;
  suffix: string;
  trigger: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix, trigger }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!trigger) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const duration = 1200;
    const steps = 40;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // easeOutQuad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const val = target * easedProgress;

      if (target % 1 !== 0) {
        setCount(Number(val.toFixed(1)));
      } else {
        setCount(Math.round(val));
      }

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};
