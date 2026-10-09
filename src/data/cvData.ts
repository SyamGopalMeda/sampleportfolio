export interface MetricItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  context: string;
  category: 'production' | 'optimization' | 'efficiency';
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  architecturalPrinciple?: string;
  problem: string;
  approach: string;
  pipeline: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'crop-advisory' | 'multimodal-emotion' | 'gan-restoration';
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  techStack: string[];
  highlightMetric: { value: string; label: string };
}

export interface PublicationItem {
  title: string;
  venue: string;
  year: string;
  category: string;
  summary: string;
  contributions: string[];
  results: { metric: string; value: string; baseline: string }[];
  status: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  code?: string;
  year?: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  focus: string;
}

export const PERSONAL_INFO = {
  name: "Meda Syam Gopal",
  displayName: "Syam Gopal",
  monogram: "SG",
  title: "Deep Learning & Generative AI Practitioner",
  secondaryTitle: "Lead Machine Learning Architect | AI Researcher | Technical Educator",
  summary:
    "Deep Learning practitioner and technical educator with 3+ years of experience designing, training, optimizing, and deploying neural networks for computer vision, NLP, and multimodal learning, including generative models (GANs) and LLM-powered applications (Google Gemini). Lead Machine Learning Architect with 5+ production models serving 200,000+ monthly API requests, mentor to ML engineers, and freelance technical trainer.",
  email: "syamgopalmeda@gmail.com",
  phone: "+91-9502524924",
  phoneDisplay: "+91 95025 24924",
  location: "India",
  github: "https://github.com/SyamGopal",
  linkedin: "https://linkedin.com/in/syam-gopal-meda-9b3967232",
  status: "Available for Lead ML Architect & AI Research Roles",
};

export const SIGNATURE_METRICS: MetricItem[] = [
  {
    id: "models",
    value: "5+",
    numericValue: 5,
    suffix: "+",
    label: "Production ML Models",
    sublabel: "Deployed in high-availability environments",
    context: "Live in production serving real-time inference",
    category: "production",
  },
  {
    id: "requests",
    value: "200K+",
    numericValue: 200,
    suffix: "K+",
    label: "Monthly API Requests",
    sublabel: "Across distributed healthcare & finance services",
    context: "Sustained high-throughput inference workload",
    category: "production",
  },
  {
    id: "uptime",
    value: "98.7%",
    numericValue: 98.7,
    suffix: "%",
    label: "Production System Uptime",
    sublabel: "Resilient containerized cloud infrastructure",
    context: "Continuous SLA tracking under enterprise load",
    category: "production",
  },
  {
    id: "latency",
    value: "45%",
    numericValue: 45,
    suffix: "%",
    label: "Latency Reduction",
    sublabel: "Through TensorFlow model quantization & pruning",
    context: "Cut prediction latency while maintaining high precision",
    category: "optimization",
  },
  {
    id: "pipeline",
    value: "12x",
    numericValue: 12,
    suffix: "x",
    label: "CI/CD Pipeline Acceleration",
    sublabel: "Reduced deployment turnaround from 3 days to 6 hours",
    context: "Automated Docker-based continuous deployment",
    category: "efficiency",
  },
];

export const SKILL_CATEGORIES = [
  {
    id: "deep-learning",
    name: "Deep Learning",
    badge: "Architectures & Encoders",
    description: "Multi-layered neural architectures, vision backbones, and audio-text transformers.",
    skills: [
      { name: "CNNs", detail: "Convolutional neural networks for feature extraction" },
      { name: "RNNs", detail: "Recurrent networks for sequential signal modeling" },
      { name: "Transformers", detail: "Self-attention and cross-attention architectures" },
      { name: "BERT", detail: "Bidirectional encoder representations for NLP" },
      { name: "XLM-RoBERTa", detail: "Cross-lingual language representation modeling" },
      { name: "Swin Transformer", detail: "Hierarchical vision transformer via shifted windows" },
      { name: "EfficientNet-B4", detail: "Compound scaled visual feature extractor" },
      { name: "MobileNetV2", detail: "Inverted residual lightweight edge vision model" },
      { name: "Wav2Vec 2.0", detail: "Self-supervised acoustic speech representations" },
      { name: "Multimodal Fusion", detail: "Cross-attention & tensor fusion across text, audio, image" },
    ],
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    badge: "Foundation Models & LLMs",
    description: "LLM grounding, generative architectures, and structured domain explanations.",
    skills: [
      { name: "GANs", detail: "Generative Adversarial Networks for image reconstruction" },
      { name: "Large Language Models", detail: "Prompt engineering, context grounding & orchestrations" },
      { name: "Google Gemini 2.5 Flash", detail: "High-speed multi-lingual explanation generation layer" },
      { name: "LLM API Integration", detail: "Production streaming APIs & structured JSON output pipelines" },
      { name: "Grounded AI Explanations", detail: "Coupling deterministic algorithms with narrative explanations" },
      { name: "Multilingual AI Applications", detail: "Localized advisory delivery across 7 regional languages" },
    ],
  },
  {
    id: "optimization",
    name: "Model Optimization",
    badge: "Compression & Performance",
    description: "Techniques for low-latency inference, model compression, and edge deployment.",
    skills: [
      { name: "Quantization", detail: "Post-training INT8 / FP16 weight quantization" },
      { name: "Pruning", detail: "Structured & unstructured weight pruning for sparse models" },
      { name: "Inference Optimization", detail: "Latency reduction (2.1s to 0.3s) for field edge devices" },
      { name: "Super-Resolution", detail: "Grayscale image reconstruction (3.2 dB PSNR gain)" },
      { name: "Anomaly Detection", detail: "High-precision traffic threat anomaly classification (95%)" },
      { name: "Model Evaluation", detail: "Calibration error (ECE), SSIM, PSNR, and precision-recall" },
    ],
  },
  {
    id: "programming",
    name: "Programming & Frameworks",
    badge: "Core Engineering",
    description: "Scientific computing, machine learning frameworks, and robust software engineering.",
    skills: [
      { name: "Python", detail: "Primary scientific computing & model engineering language" },
      { name: "Java", detail: "Enterprise systems, Spring Boot training & backend services" },
      { name: "C", detail: "Low-level computing fundamentals & system architecture" },
      { name: "SQL", detail: "Relational database queries, schemas & data pipelines" },
      { name: "JavaScript", detail: "Interactive client applications & Node.js runtimes" },
      { name: "TensorFlow", detail: "Production model training, SavedModel & optimization" },
      { name: "Keras", detail: "High-level neural network prototyping and training" },
      { name: "PyTorch", detail: "Research experimentation, custom layers & multimodal fusion" },
      { name: "Scikit-learn", detail: "Classical machine learning, preprocessing & evaluations" },
      { name: "OpenCV", detail: "Computer vision image preprocessing & matrix operations" },
    ],
  },
  {
    id: "cloud-mlops",
    name: "Cloud & MLOps",
    badge: "Scale & Reliability",
    description: "Continuous integration, containerized deployment, and AWS cloud ML services.",
    skills: [
      { name: "AWS SageMaker", detail: "Managed training jobs and real-time endpoint hosting" },
      { name: "AWS Lambda", detail: "Serverless event-driven inference triggers" },
      { name: "Amazon EC2", detail: "GPU/CPU compute instances for inference servers" },
      { name: "Amazon S3", detail: "Scalable object storage for model artifacts and datasets" },
      { name: "Docker", detail: "Containerized reproducible training & deployment images" },
      { name: "Git", detail: "Version control, code reviews & branch workflows" },
      { name: "CI/CD", detail: "Automated pipelines cutting deployment from 3 days to 6 hrs" },
      { name: "Linux", detail: "Server administration, shell scripting & performance profiling" },
      { name: "MLOps", detail: "Model lifecycle tracking, versioning & automated rollouts" },
    ],
  },
  {
    id: "fullstack-apis",
    name: "Full-Stack & APIs",
    badge: "Interfaces & Data",
    description: "REST API architectures, modern frontend interfaces, and database persistence.",
    skills: [
      { name: "React", detail: "Component-driven responsive interfaces for AI applications" },
      { name: "Node.js", detail: "Asynchronous server runtimes & backend services" },
      { name: "FastAPI", detail: "High-performance async Python APIs for ML serving" },
      { name: "Flask", detail: "Lightweight microservices for model endpoints" },
      { name: "Spring / Spring MVC", detail: "Enterprise Java backend architectures" },
      { name: "REST APIs", detail: "Clean contract design, JWT authentication & error handling" },
      { name: "PostgreSQL", detail: "Relational database with strong ACID guarantees" },
      { name: "MongoDB", detail: "NoSQL document store for unstructured telemetry" },
      { name: "MySQL", detail: "Structured transactional relational database" },
      { name: "SQLite", detail: "Lightweight embedded database for edge applications" },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: "crop-advisory",
    title: "Smart Crop Advisory System",
    subtitle: "Deterministic Crop Intelligence with Generative AI Explanation Layer",
    category: "Generative AI • Computer Vision • Applied AI",
    year: "2024",
    architecturalPrinciple: "Algorithms decide. AI explains.",
    description:
      "An end-to-end agricultural platform integrating computer vision disease diagnostics with a deterministic crop engine and Google Gemini 2.5 Flash. Rather than allowing an unconstrained LLM to hallucinate farming advice, deterministic scoring engines evaluate soil nutrients, season, and real-time weather, while the LLM synthesizes clear, grounded advisories in 7 regional languages.",
    problem:
      "Smallholder farmers require actionable agronomic advice but often face language barriers, inaccurate diagnosis, and unpredictable hallucinations from general-purpose chatbots.",
    approach:
      "Engineered a dual-stage architecture: MobileNetV2 handles edge visual classification across 38 crop disease classes. Telemetry from Open-Meteo feeds a deterministic scoring engine that computes prescriptive recommendations. Google Gemini 2.5 Flash acts exclusively as an explanation and translation layer, strictly conditioned on engine outputs.",
    pipeline: [
      "Field Crop Imagery Input (Mobile Capture)",
      "MobileNetV2 Inference (38 Disease Classes)",
      "Soil Chemistry & Open-Meteo Telemetry Ingestion",
      "Deterministic Agronomic Scoring Engine",
      "Google Gemini 2.5 Flash Grounded Synthesis",
      "Multilingual Advisory Delivery (7 Languages) & OTP Auth",
    ],
    metrics: [
      { label: "Disease Classes", value: "38" },
      { label: "Regional Languages", value: "7" },
      { label: "Architecture", value: "Deterministic + LLM" },
      { label: "Telemetry", value: "Real-time Weather & Market" },
    ],
    technologies: [
      "Python",
      "Google Gemini 2.5 Flash",
      "MobileNetV2",
      "FastAPI",
      "React",
      "Open-Meteo API",
      "OTP Auth",
    ],
    githubUrl: "https://github.com/SyamGopal",
    type: "crop-advisory",
  },
  {
    id: "multimodal-emotion",
    title: "Quantum-Inspired Multimodal Emotion Recognition",
    subtitle: "Tri-Modal Acoustic, Visual, and Textual Fusion Framework",
    category: "Multimodal AI • NLP • Speech • Research",
    year: "2024",
    description:
      "A research-grade multimodal emotion recognition framework leveraging pretrained transformer encoders across text, speech, and facial video representations, coupled with quantum-inspired fusion mechanisms (QPM, QEM, QDMN, QAN) to dramatically reduce calibration errors and outperform prior benchmarks on complex code-mixed dialects.",
    problem:
      "Standard multimodal fusion networks struggle with high calibration error and degrade drastically when processing code-mixed South Asian languages (Telugu-Hindi-English).",
    approach:
      "Unified unimodal feature extractors (XLM-RoBERTa & MuRIL for text, Wav2Vec 2.0 for raw audio waveforms, EfficientNet-B4 & Swin Transformer for facial micro-expressions) into quantum-inspired projection and entanglement layers (QPM, QEM, QDMN, QAN) to maintain uncertainty calibration under noisy cross-modal environments.",
    pipeline: [
      "Tri-Modal Stream: Text (Code-Mixed), Speech Audio, Facial Video",
      "Text Encoders: XLM-RoBERTa + MuRIL Representations",
      "Acoustic Encoder: Wav2Vec 2.0 Feature Projections",
      "Visual Encoders: EfficientNet-B4 + Swin Transformer Embeddings",
      "Quantum-Inspired Layers: QPM, QEM, QDMN & QAN Fusion",
      "Calibrated Emotion Prediction & Uncertainty Estimation",
    ],
    metrics: [
      { label: "Fusion Accuracy", value: "88.7%" },
      { label: "Calibration Error Reduction", value: "66% lower (ECE: 0.028)" },
      { label: "Code-Mixed Accuracy", value: "94.8%" },
      { label: "Benchmark Gain", value: "+3.5% over MuRIL" },
    ],
    technologies: [
      "PyTorch",
      "XLM-RoBERTa",
      "MuRIL",
      "Wav2Vec 2.0",
      "EfficientNet-B4",
      "Swin Transformer",
      "Quantum-Inspired Modules",
    ],
    githubUrl: "https://github.com/SyamGopal",
    type: "multimodal-emotion",
  },
  {
    id: "gan-restoration",
    title: "Generative Image Restoration Using GANs",
    subtitle: "High-Fidelity Watermark Reconstruction & Inpainting",
    category: "Generative Models • Computer Vision",
    year: "2023",
    description:
      "A deep convolutional Generative Adversarial Network engineered to reconstruct corrupted and watermarked image regions. Trained across 25,000 paired image samples with perceptual loss formulations, achieving high structural similarity (SSIM) and clean boundary recovery.",
    problem:
      "Classical interpolation and heuristic inpainting introduce blurring, texture discontinuities, and unnatural artifacts across high-frequency visual content.",
    approach:
      "Formulated an adversarial generator-discriminator objective. The generator utilizes an encoder-decoder architecture with dense skip connections to preserve global spatial context, while the patch-level discriminator enforces photorealistic texture continuity, penalized by joint L1 and structural loss.",
    pipeline: [
      "Masked / Watermarked Image Input",
      "Encoder Downsampling with Contextual Feature Maps",
      "Residual Bottleneck with Dilated Convolutions",
      "Decoder Upsampling with Skip Feature Merging",
      "PatchGAN Adversarial Discriminator & Perceptual Loss",
      "Reconstructed High-Fidelity Output (89.4% SSIM)",
    ],
    metrics: [
      { label: "Training Pairs", value: "25,000" },
      { label: "Structural Similarity (SSIM)", value: "89.4%" },
      { label: "Images Processed", value: "500+" },
      { label: "User Satisfaction", value: "95%" },
    ],
    technologies: [
      "TensorFlow",
      "Keras",
      "Generative Adversarial Networks (GANs)",
      "OpenCV",
      "Python",
      "Perceptual Loss",
    ],
    githubUrl: "https://github.com/SyamGopal",
    type: "gan-restoration",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "GloomDev Pvt. Ltd.",
    role: "Lead Machine Learning Architect",
    period: "January 2024 – Present",
    location: "Vijayawada, India",
    type: "Full-time Leadership",
    summary:
      "Directing machine learning architecture, production inference pipelines, and technical strategy. Leading ML deployments serving 200,000+ monthly requests and mentoring the engineering team.",
    achievements: [
      "Deployed 5+ production ML models serving 200,000+ monthly API requests with 98.7% uptime.",
      "Cut prediction latency by 45% via TensorFlow model optimization (quantization, graph freezing, and tensor pruning).",
      "Architected Docker-based CI/CD pipelines, slashing deployment turnaround time from 3 days to 6 hours while maintaining 99.2% model accuracy.",
      "Launched 3 AI SaaS products for healthcare and finance, generating $150K+ ARR with 87% client retention and 92% satisfaction in 12 months.",
      "Mentored a team of 4 ML engineers, establishing code review standards, evaluation benchmarks, and MLOps workflows.",
    ],
    techStack: ["TensorFlow", "Docker", "AWS", "FastAPI", "Python", "CI/CD", "MLOps"],
    highlightMetric: { value: "200K+", label: "Monthly API Requests at 98.7% Uptime" },
  },
  {
    company: "Spypro Security Solutions Pvt. Ltd.",
    role: "Cyber Security Intern",
    period: "May 2023 – July 2023",
    location: "Remote",
    type: "Internship",
    summary:
      "Developed machine learning threat detection models and security infrastructure to protect high-volume web endpoints.",
    achievements: [
      "Built an ML anomaly detection algorithm in Python detecting 95% of malicious traffic while reducing false positive rates by 60%.",
      "Blocked 1,200+ cyber attacks monthly through real-time traffic classification.",
      "Engineered AES-256 encryption and OAuth 2.0 authentication for a web scraping platform handling 50,000+ daily requests.",
      "Maintained zero security data breaches over the 3-month operational deployment period.",
    ],
    techStack: ["Python", "Scikit-learn", "OAuth 2.0", "AES-256", "Anomaly Detection"],
    highlightMetric: { value: "95%", label: "Malicious Traffic Threat Detection" },
  },
  {
    company: "Indian Servers",
    role: "Machine Learning Intern",
    period: "May 2022 – July 2022",
    location: "Remote",
    type: "Internship",
    summary:
      "Trained and compressed computer vision models for agricultural disease classification on edge mobile devices.",
    achievements: [
      "Trained a convolutional neural network (CNN) on 15,000 images using TensorFlow/Keras, achieving 94.3% classification accuracy across 7 distinct mango crop diseases.",
      "Demonstrated measurable farm impact, reducing crop loss by 30% for participating agricultural partners.",
      "Applied weight quantization and structural pruning, cutting per-image inference latency from 2.1s to 0.3s.",
      "Enabled real-time, low-latency mobile edge deployment accessible to 500+ agricultural field workers.",
    ],
    techStack: ["TensorFlow", "Keras", "OpenCV", "Quantization", "Model Pruning", "CNN"],
    highlightMetric: { value: "2.1s → 0.3s", label: "Inference Latency Compression" },
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "Deep Learning Super-Resolution for Grayscale Images",
    venue: "International Journal of Modern Trends in Science and Technology (IJMTST)",
    year: "2024",
    category: "Peer-Reviewed Publication",
    summary:
      "Proposed a specialized deep convolutional neural network architecture engineered to restore high-frequency spatial details and resolve sub-pixel features in low-resolution grayscale imagery, with critical applicability to medical diagnostic scans.",
    contributions: [
      "Formulated an end-to-end convolutional mapping from low-resolution grayscale inputs to super-resolved feature spaces.",
      "Demonstrated a verified 3.2 dB PSNR improvement over standard bicubic interpolation benchmarks on the Set5 test dataset.",
      "Validated architectural stability and reconstruction fidelity on a cohort of 500+ real-world medical imaging samples.",
    ],
    results: [
      { metric: "PSNR Gain (Set5)", value: "+3.2 dB", baseline: "vs. Bicubic Interpolation" },
      { metric: "Validation Dataset", value: "500+ Samples", baseline: "Medical Imaging Cohort" },
      { metric: "Resolution Domain", value: "Grayscale / Diagnostic", baseline: "Sub-pixel feature reconstruction" },
    ],
    status: "Published (IJMTST, 2024)",
  },
];

export const TEACHING_MENTORSHIP = {
  headline: "Engineering intelligence. Enabling engineers.",
  summary:
    "Bridging theoretical deep learning and scalable production implementation through structured mentorship and hands-on technical instruction.",
  tracks: [
    {
      title: "ML Team Mentorship",
      role: "Lead ML Architect & Mentor",
      organization: "GloomDev Pvt. Ltd.",
      audience: "Team of 4 Machine Learning Engineers",
      points: [
        "Mentored 4 ML engineers through production model lifecycle, loss optimization, and evaluation methodologies.",
        "Instituted rigorous code reviews, automated CI/CD validation gates, and latency profiling workflows.",
        "Guided transition of experimental PyTorch notebooks into containerized microservices running on AWS.",
      ],
    },
    {
      title: "Technical Training: Java & Spring Boot",
      role: "Freelance Technical Trainer",
      organization: "Industry & Academic Workshops",
      audience: "Aspiring Software Engineers & Developers",
      points: [
        "Delivered hands-on curriculum in Core Java, Object-Oriented Design, and Spring Boot enterprise architectures.",
        "Emphasized production REST API design, transactional persistence, and enterprise design patterns.",
      ],
    },
    {
      title: "Full-Stack Development (MERN Stack)",
      role: "Technical Educator",
      organization: "Hands-on Practical Program",
      audience: "Full-Stack & Applied AI Developers",
      points: [
        "Teaching modern web development using React, Node.js, Express, and MongoDB.",
        "Bridging frontend applications with backend machine learning APIs and real-time streaming interfaces.",
      ],
    },
  ],
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "RVR & JC College of Engineering",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    period: "2021 – 2024",
    location: "Guntur, India",
    score: "7.5 / 10",
    scoreLabel: "CGPA",
    focus: "Deep Learning, Algorithms, Distributed Computing, Database Systems",
  },
  {
    institution: "A.A.N.M & V.V.R.S.R Polytechnic College",
    degree: "Diploma in Computer Management Engineering",
    period: "2018 – 2021",
    location: "Gudlavalleru, India",
    score: "83.67%",
    scoreLabel: "Aggregate",
    focus: "Foundational Computer Science, Programming, Data Structures, Networking",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    code: "MLA-C01",
    year: "Verified",
    description:
      "Validates expertise in model deployment, MLOps pipelines, AWS SageMaker endpoint hosting, Lambda serverless triggers, EC2 compute sizing, and S3 data architecture.",
    tags: ["AWS SageMaker", "MLOps", "Model Deployment", "AWS Lambda", "EC2", "S3"],
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    year: "Verified",
    description:
      "Demonstrates core competencies in Python automation, enterprise IP routing & switching, network security infrastructure, and wireless fundamentals.",
    tags: ["Network Security", "Python Automation", "Enterprise Routing", "Infrastructure"],
  },
  {
    title: "NPTEL — IIT Kharagpur Elite Certifications",
    issuer: "IIT Kharagpur / NPTEL",
    year: "2022",
    description:
      "Advanced academic certifications in Programming in Java, Principles of Management, and Cloud Computing with a 78% average composite score.",
    tags: ["Programming in Java", "Cloud Computing", "Principles of Management", "78% Avg"],
  },
];
