import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  layer: number;
  radius: number;
  color: string;
  pulsePhase: number;
}

interface Synapse {
  from: number;
  to: number;
  weight: number;
  active: boolean;
  pulseProgress: number;
  pulseSpeed: number;
}

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeTelemetry, setActiveTelemetry] = useState({
    activeNeurons: 48,
    synapticFlow: '98.4%',
    sparsity: '45.0%',
    inferenceLatency: '1.4ms',
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let mouseX = -1000;
    let mouseY = -1000;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let synapses: Synapse[] = [];

    const setupTopology = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // 5 Layers: Input, Representation, Latent Bottleneck, Cross-Attention, Projection
      const layerCounts = [6, 8, 10, 8, 5];
      const layerSpacing = width / (layerCounts.length + 1);

      nodes = [];
      synapses = [];

      let nodeIdx = 0;
      const layerStartIndices: number[] = [];

      layerCounts.forEach((count, lIdx) => {
        layerStartIndices.push(nodeIdx);
        const x = layerSpacing * (lIdx + 1);
        const ySpacing = height / (count + 1);

        for (let i = 0; i < count; i++) {
          const y = ySpacing * (i + 1);
          // Highlight bottleneck / latent layer with lime accent
          const isBottleneck = lIdx === 2;
          const isAttention = lIdx === 3;
          const color = isBottleneck ? '#C4F36B' : isAttention ? '#A4E845' : '#8892B0';

          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            layer: lIdx,
            radius: isBottleneck ? 3.5 : 2.5,
            color,
            pulsePhase: Math.random() * Math.PI * 2,
          });
          nodeIdx++;
        }
      });

      // Connect adjacent layers with selective sparsity
      for (let l = 0; l < layerCounts.length - 1; l++) {
        const startCurrent = layerStartIndices[l];
        const countCurrent = layerCounts[l];
        const startNext = layerStartIndices[l + 1];
        const countNext = layerCounts[l + 1];

        for (let i = 0; i < countCurrent; i++) {
          for (let j = 0; j < countNext; j++) {
            // Apply 45% sparsity to reflect real optimized deep learning graphs
            if (Math.random() > 0.42) {
              synapses.push({
                from: startCurrent + i,
                to: startNext + j,
                weight: 0.2 + Math.random() * 0.8,
                active: Math.random() > 0.3,
                pulseProgress: Math.random(),
                pulseSpeed: 0.006 + Math.random() * 0.009,
              });
            }
          }
        }
      }
    };

    setupTopology();

    const handleResize = () => {
      setupTopology();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    let frame = 0;
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      frame++;
      ctx.clearRect(0, 0, width, height);

      // Render Synapses
      synapses.forEach((syn) => {
        const fromNode = nodes[syn.from];
        const toNode = nodes[syn.to];
        if (!fromNode || !toNode) return;

        // Mouse proximity interaction: if cursor is near either node, highlight synapse
        const distFrom = Math.hypot(mouseX - fromNode.x, mouseY - fromNode.y);
        const distTo = Math.hypot(mouseX - toNode.x, mouseY - toNode.y);
        const isHovered = distFrom < 70 || distTo < 70;

        // Base line
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);

        if (isHovered) {
          ctx.strokeStyle = `rgba(196, 243, 107, ${0.45 * syn.weight})`;
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = `rgba(45, 55, 72, ${0.28 * syn.weight})`;
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();

        // Feedforward pulse traveling across synapse
        syn.pulseProgress += syn.pulseSpeed;
        if (syn.pulseProgress > 1) {
          syn.pulseProgress = 0;
        }

        if (syn.active || isHovered) {
          const px = fromNode.x + (toNode.x - fromNode.x) * syn.pulseProgress;
          const py = fromNode.y + (toNode.y - fromNode.y) * syn.pulseProgress;

          ctx.beginPath();
          ctx.arc(px, py, isHovered ? 2.2 : 1.3, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? '#C4F36B' : 'rgba(196, 243, 107, 0.75)';
          ctx.fill();
        }
      });

      // Render Neurons
      nodes.forEach((node) => {
        // Subtle organic float
        const floatOffset = Math.sin(frame * 0.02 + node.pulsePhase) * 1.5;
        node.y = node.baseY + floatOffset;

        // Mouse reaction: gentle repulsion/attraction
        const dist = Math.hypot(mouseX - node.x, mouseY - node.y);
        let currentRadius = node.radius;

        if (dist < 80) {
          const force = (80 - dist) / 80;
          node.x = node.baseX + (mouseX - node.baseX) * force * 0.12;
          node.y = node.baseY + (mouseY - node.baseY) * force * 0.12;
          currentRadius += force * 2.5;
        } else {
          node.x += (node.baseX - node.x) * 0.05;
        }

        // Outer glow
        const glowRadius = currentRadius * 3.5;
        const grad = ctx.createRadialGradient(node.x, node.y, 1, node.x, node.y, glowRadius);
        grad.addColorStop(0, node.layer === 2 ? 'rgba(196, 243, 107, 0.35)' : 'rgba(136, 146, 176, 0.18)');
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core neuron
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = dist < 80 ? '#C4F36B' : node.color;
        ctx.fill();
      });

      // Periodic subtle telemetry update
      if (frame % 120 === 0) {
        setActiveTelemetry({
          activeNeurons: 48,
          synapticFlow: (97.8 + Math.random() * 1.5).toFixed(1) + '%',
          sparsity: '45.0%',
          inferenceLatency: (1.3 + Math.random() * 0.2).toFixed(1) + 'ms',
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] rounded-2xl overflow-hidden border border-[#252B32]/70 bg-[#0A0D12]/90 shadow-2xl"
    >
      {/* Background technical grid and radial glow */}
      <div className="absolute inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 glow-spot-lime pointer-events-none opacity-40" />

      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block cursor-crosshair" />

      {/* Engineering Overlay HUD Labels */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono-tech text-[#9BA3AD] pointer-events-none border-b border-[#252B32]/60 pb-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C4F36B] animate-pulse" />
          <span className="text-[#F3F4F0] font-semibold tracking-wider">NEURAL_GRAPH_V2.5</span>
          <span className="text-[#646E7A] hidden sm:inline">• [TOPOLOGY: MULTI-STAGE ENCODER-FUSION]</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#646E7A] hidden md:inline">SPARSITY: {activeTelemetry.sparsity}</span>
          <span className="text-[#C4F36B] font-medium">LATENCY: {activeTelemetry.inferenceLatency}</span>
        </div>
      </div>

      {/* Layer architectural markers */}
      <div className="absolute bottom-3 left-4 right-4 hidden sm:flex items-center justify-between text-[10px] font-mono-tech text-[#646E7A] pointer-events-none border-t border-[#252B32]/60 pt-2">
        <span>L0: INPUT TOKENS</span>
        <span>L1: ENCODER MAP</span>
        <span className="text-[#C4F36B]">L2: LATENT BOTTLENECK</span>
        <span>L3: CROSS-ATTENTION</span>
        <span>L4: PROJECTION</span>
      </div>

      {/* Live hover instruction watermark */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[10px] font-mono-tech text-[#646E7A]/60 -rotate-90 origin-left pointer-events-none select-none tracking-widest hidden md:block">
        INTERACTIVE SYNAPSE MAPPING
      </div>
    </div>
  );
};
