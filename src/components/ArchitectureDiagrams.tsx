import { useState } from 'react';
import { Layers, Cpu, Database, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const CropAdvisoryDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      id: 0,
      title: "1. Multi-Source Ingestion",
      type: "Inputs",
      badge: "Edge & Telemetry",
      summary: "Mobile field imagery + live weather telemetry + soil test measurements.",
      details: [
        "Farmer camera image uploaded via React UI",
        "Open-Meteo REST API: Temperature, humidity, 7-day precipitation forecast",
        "Soil chemical parameters: Nitrogen (N), Phosphorus (P), Potassium (K), pH level",
        "OTP-authenticated secure mobile session",
      ],
    },
    {
      id: 1,
      title: "2. Edge Vision Model",
      type: "Vision",
      badge: "MobileNetV2 (38 Classes)",
      summary: "High-speed inverted residual CNN for crop disease classification.",
      details: [
        "Lightweight MobileNetV2 architecture with depthwise separable convolutions",
        "Trained across 38 specific agricultural leaf disease classes",
        "Outputs probability distribution with calibrated softmax confidence scores",
        "Latency optimized for edge and low-bandwidth rural conditions",
      ],
    },
    {
      id: 2,
      title: "3. Deterministic Decision Engine",
      type: "Core Logic",
      badge: "Algorithms Decide",
      summary: "Zero-hallucination agronomic engine computing prescribed treatments.",
      details: [
        "Strict rule-based evaluation matrix matching disease class with verified agronomic science",
        "Calculates exact fertilizer balancing and irrigation schedule using soil + weather telemetry",
        "Prevents LLM hallucination: treatment dosages and chemicals are determined mathematically",
        "Market pricing trend calculations for harvest timing",
      ],
    },
    {
      id: 3,
      title: "4. LLM Grounded Explanation",
      type: "Generative AI",
      badge: "Google Gemini 2.5 Flash",
      summary: "Grounded natural language synthesis strictly conditioned on engine outputs.",
      details: [
        "Prompt strictly injects the deterministic engine's mathematical decisions",
        "Google Gemini 2.5 Flash acts solely as an explanatory and contextualizing agent",
        "Translates technical agronomy into clear, localized farming guidance",
        "Zero hallucination risk because recommendations are pre-verified by engine",
      ],
    },
    {
      id: 4,
      title: "5. Multilingual Delivery",
      type: "Output",
      badge: "7 Regional Languages",
      summary: "Localized advisory delivered to farmers via React frontend with OTP verification.",
      details: [
        "Localized into Telugu, Hindi, Tamil, Kannada, Malayalam, Marathi, and English",
        "Clear step-by-step application schedule with dosage warnings",
        "FastAPI async backend streaming responses for minimal user latency",
        "Secure record persistence for seasonal advisory tracking",
      ],
    },
  ];

  return (
    <div className="rounded-xl border border-[#252B32] bg-[#0E1217] p-5 lg:p-6 text-left">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#252B32]/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#C4F36B]/10 border border-[#C4F36B]/30 flex items-center justify-center text-[#C4F36B]">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#F3F4F0] font-mono-tech tracking-wide">
              SYSTEM ARCHITECTURE: DUAL-TIER ENGINE
            </h4>
            <p className="text-xs text-[#9BA3AD]">Principle: "Algorithms decide. AI explains."</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B] bg-[#C4F36B]/10 px-2.5 py-1 rounded-full border border-[#C4F36B]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERACTIVE STAGES (CLICK TO INSPECT)</span>
        </div>
      </div>

      {/* Visual Pipeline Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 my-6">
        {steps.map((s, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-lg text-left transition-all duration-200 border relative ${
                isSelected
                  ? 'bg-[#161D26] border-[#C4F36B] shadow-[0_0_15px_rgba(196,243,107,0.15)] ring-1 ring-[#C4F36B]/40'
                  : 'bg-[#101419] border-[#252B32] hover:border-[#38434F] hover:bg-[#131920]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-[10px] font-mono-tech uppercase px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-[#C4F36B] text-[#080A0D] font-bold' : 'bg-[#1E252E] text-[#9BA3AD]'
                  }`}
                >
                  STEP 0{idx + 1}
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-[#646E7A] hidden lg:block -mr-1" />
                )}
              </div>
              <p className="text-xs font-semibold text-[#F3F4F0] truncate">{s.title.split('. ')[1]}</p>
              <p className="text-[11px] font-mono-tech text-[#C4F36B] mt-1 truncate">{s.badge}</p>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Inspector */}
      <div className="rounded-lg bg-[#080A0D] border border-[#252B32] p-4 lg:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-[#252B32]/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-tech text-[#C4F36B] font-semibold">
              STAGE DETAILS // {steps[activeStep].title.toUpperCase()}
            </span>
          </div>
          <span className="text-xs font-mono-tech text-[#9BA3AD] bg-[#161D26] px-2 py-0.5 rounded border border-[#252B32]">
            {steps[activeStep].badge}
          </span>
        </div>
        <p className="text-sm text-[#F3F4F0] mb-3 leading-relaxed">{steps[activeStep].summary}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#9BA3AD]">
          {steps[activeStep].details.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C4F36B] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const MultimodalEmotionDiagram: React.FC = () => {
  const [activeModality, setActiveModality] = useState<'text' | 'speech' | 'facial' | 'quantum'>('quantum');

  const modalities = {
    text: {
      title: "Text Encoders: XLM-RoBERTa + MuRIL",
      badge: "Code-Mixed NLP",
      description:
        "Tackles multilingual and code-mixed Telugu-Hindi-English transcripts. MuRIL specializes in Indic syntactic structures while XLM-RoBERTa provides deep cross-lingual contextual token embeddings.",
      specs: [
        "Dual transformer encoder representations",
        "Handles informal social media code-mixing with high fidelity",
        "94.8% accuracy on Telugu-Hindi-English test evaluations",
        "+3.5% performance improvement over standalone MuRIL baseline",
      ],
    },
    speech: {
      title: "Acoustic Stream: Wav2Vec 2.0",
      badge: "Raw Waveform Representations",
      description:
        "Extracts dense acoustic speech representations directly from raw 16kHz audio waveforms, capturing prosody, pitch variations, and emotional inflection without requiring manual spectrogram hand-crafting.",
      specs: [
        "Self-supervised pre-trained temporal CNN latent feature encoder",
        "Transformer context network extracting contextualized speech representations",
        "Captures subtle paralinguistic cues and emotional urgency",
        "Robust to ambient microphone noise and room reverberation",
      ],
    },
    facial: {
      title: "Visual Stream: EfficientNet-B4 + Swin Transformer",
      badge: "Spatial & Temporal Facial Dynamics",
      description:
        "Analyzes dynamic facial micro-expressions. EfficientNet-B4 isolates fine-grained local facial action units (AUs), while Swin Transformer captures hierarchical spatial relationships with shifted windows.",
      specs: [
        "Compound-scaled EfficientNet-B4 for localized facial landmark extraction",
        "Shifted Window (Swin) Transformer for multi-scale attention across frames",
        "Isolates subtle micro-expressions and gaze cues",
        "Temporal pooling across video frame sequences",
      ],
    },
    quantum: {
      title: "Quantum-Inspired Fusion: QPM, QEM, QDMN & QAN",
      badge: "Calibrated Multimodal Synthesis",
      description:
        "The core mathematical breakthrough: replaces standard concatenation or uncalibrated cross-attention with quantum-inspired density matrices and entanglement operators, slashing Expected Calibration Error (ECE) by 66%.",
      specs: [
        "QPM (Quantum Phase Modulation): Encodes unimodal states into complex Hilbert spaces",
        "QEM (Quantum Entanglement Mapping): Models cross-modal non-linear correlations",
        "QDMN (Quantum Decision Making Network): Reconciles conflicting modal signals",
        "QAN (Quantum Attention Network): Dynamically weights reliable modalities",
        "Verified 88.7% fusion accuracy with ultra-low calibration error (ECE: 0.028)",
      ],
    },
  };

  return (
    <div className="rounded-xl border border-[#252B32] bg-[#0E1217] p-5 lg:p-6 text-left">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#252B32]/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#C4F36B]/10 border border-[#C4F36B]/30 flex items-center justify-center text-[#C4F36B]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#F3F4F0] font-mono-tech tracking-wide">
              TRI-MODAL RESEARCH ARCHITECTURE
            </h4>
            <p className="text-xs text-[#9BA3AD]">Text (Code-Mixed) • Speech Audio • Facial Video Fusion</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#C4F36B]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C4F36B] animate-pulse" />
          ECE: 0.028 (66% Lower Error)
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5">
        {(['quantum', 'text', 'speech', 'facial'] as const).map((key) => {
          const isSelected = activeModality === key;
          const labels = {
            quantum: 'Quantum Fusion (QPM/QEM)',
            text: 'Text (XLM-R + MuRIL)',
            speech: 'Speech (Wav2Vec 2.0)',
            facial: 'Vision (EfficientNet+Swin)',
          };
          return (
            <button
              key={key}
              onClick={() => setActiveModality(key)}
              className={`p-2.5 rounded-lg text-left text-xs font-mono-tech transition-all border ${
                isSelected
                  ? 'bg-[#161D26] border-[#C4F36B] text-[#F3F4F0] shadow-[0_0_12px_rgba(196,243,107,0.15)]'
                  : 'bg-[#101419] border-[#252B32] text-[#9BA3AD] hover:border-[#38434F]'
              }`}
            >
              <div className="text-[10px] text-[#646E7A] uppercase mb-1">
                {key === 'quantum' ? 'CORE BREAKTHROUGH' : 'STREAM ENCODER'}
              </div>
              <div className="font-semibold truncate">{labels[key]}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Spec Card */}
      <div className="rounded-lg bg-[#080A0D] border border-[#252B32] p-4 lg:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-[#252B32]/60">
          <span className="text-xs font-mono-tech text-[#C4F36B] font-semibold">
            {modalities[activeModality].title}
          </span>
          <span className="text-[11px] font-mono-tech text-[#9BA3AD] bg-[#161D26] px-2 py-0.5 rounded border border-[#252B32]">
            {modalities[activeModality].badge}
          </span>
        </div>
        <p className="text-sm text-[#F3F4F0] mb-3 leading-relaxed">
          {modalities[activeModality].description}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#9BA3AD]">
          {modalities[activeModality].specs.map((spec, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C4F36B] shrink-0 mt-0.5" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const GanRestorationDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'loss' | 'metrics'>('flow');

  return (
    <div className="rounded-xl border border-[#252B32] bg-[#0E1217] p-5 lg:p-6 text-left">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#252B32]/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#C4F36B]/10 border border-[#C4F36B]/30 flex items-center justify-center text-[#C4F36B]">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#F3F4F0] font-mono-tech tracking-wide">
              ADVERSARIAL RECONSTRUCTION PIPELINE
            </h4>
            <p className="text-xs text-[#9BA3AD]">Trained on 25,000 Paired Images • 89.4% SSIM Achieved</p>
          </div>
        </div>
        <div className="flex gap-1.5 bg-[#101419] p-1 rounded-lg border border-[#252B32]">
          {(['flow', 'loss', 'metrics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded text-xs font-mono-tech uppercase transition-all ${
                activeTab === tab
                  ? 'bg-[#C4F36B] text-[#080A0D] font-bold'
                  : 'text-[#9BA3AD] hover:text-[#F3F4F0]'
              }`}
            >
              {tab === 'flow' ? 'Network Flow' : tab === 'loss' ? 'Loss Objective' : 'Results'}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'flow' && (
        <div className="mt-5 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-[#080A0D] border border-[#252B32]">
              <span className="text-[10px] font-mono-tech text-[#C4F36B] uppercase block mb-1">STAGE 1</span>
              <h5 className="text-xs font-semibold text-[#F3F4F0] mb-1">Encoder Subnet</h5>
              <p className="text-xs text-[#9BA3AD] leading-relaxed">
                Progressive downsampling convolutional blocks extracting contextual multi-scale features from corrupted and watermarked regions.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#080A0D] border border-[#252B32]">
              <span className="text-[10px] font-mono-tech text-[#C4F36B] uppercase block mb-1">STAGE 2</span>
              <h5 className="text-xs font-semibold text-[#F3F4F0] mb-1">Dilated Bottleneck</h5>
              <p className="text-xs text-[#9BA3AD] leading-relaxed">
                Dilated residual blocks expanding the receptive field to infer surrounding structural patterns without losing high-frequency detail.
              </p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#080A0D] border border-[#252B32]">
              <span className="text-[10px] font-mono-tech text-[#C4F36B] uppercase block mb-1">STAGE 3</span>
              <h5 className="text-xs font-semibold text-[#F3F4F0] mb-1">Decoder & Skip Synthesis</h5>
              <p className="text-xs text-[#9BA3AD] leading-relaxed">
                Transposed convolutions coupled with dense skip connections restoring sharp textural boundaries and natural gradients.
              </p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-[#141A22] border border-[#252B32] flex items-center justify-between text-xs font-mono-tech text-[#9BA3AD]">
            <span className="text-[#C4F36B]">DISCRIMINATOR: PatchGAN</span>
            <span>Evaluates 70×70 overlapping patches to penalize unrealistic artifacts</span>
          </div>
        </div>
      )}

      {activeTab === 'loss' && (
        <div className="mt-5 p-4 rounded-lg bg-[#080A0D] border border-[#252B32] space-y-3 text-xs">
          <p className="text-sm text-[#F3F4F0] font-mono-tech">
            L_total = L_adv(G, D) + λ_1 · L_1(G) + λ_perc · L_perceptual(G)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[#9BA3AD]">
            <div className="p-2.5 rounded bg-[#101419] border border-[#252B32]">
              <span className="text-[#C4F36B] font-mono-tech font-semibold block mb-1">L_adv (Adversarial)</span>
              Forces the generator to produce outputs indistinguishable from clean unwatermarked distributions.
            </div>
            <div className="p-2.5 rounded bg-[#101419] border border-[#252B32]">
              <span className="text-[#C4F36B] font-mono-tech font-semibold block mb-1">L_1 (Pixel Consistency)</span>
              Minimizes mean absolute pixel deviation to preserve ground-truth color geometry.
            </div>
            <div className="p-2.5 rounded bg-[#101419] border border-[#252B32]">
              <span className="text-[#C4F36B] font-mono-tech font-semibold block mb-1">L_perceptual</span>
              VGG feature activations to ensure high-frequency perceptual coherence and sharpness.
            </div>
          </div>
        </div>
      )}

      {activeTab === 'metrics' && (
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-lg bg-[#080A0D] border border-[#252B32]">
            <div className="text-xl font-bold font-mono-tech text-[#C4F36B]">89.4%</div>
            <div className="text-[11px] text-[#9BA3AD] mt-1 font-mono-tech">Structural Similarity (SSIM)</div>
          </div>
          <div className="p-3 rounded-lg bg-[#080A0D] border border-[#252B32]">
            <div className="text-xl font-bold font-mono-tech text-[#F3F4F0]">25,000</div>
            <div className="text-[11px] text-[#9BA3AD] mt-1 font-mono-tech">Paired Training Images</div>
          </div>
          <div className="p-3 rounded-lg bg-[#080A0D] border border-[#252B32]">
            <div className="text-xl font-bold font-mono-tech text-[#F3F4F0]">500+</div>
            <div className="text-[11px] text-[#9BA3AD] mt-1 font-mono-tech">Images Reconstructed</div>
          </div>
          <div className="p-3 rounded-lg bg-[#080A0D] border border-[#252B32]">
            <div className="text-xl font-bold font-mono-tech text-[#C4F36B]">95%</div>
            <div className="text-[11px] text-[#9BA3AD] mt-1 font-mono-tech">User Satisfaction Rate</div>
          </div>
        </div>
      )}
    </div>
  );
};
