"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const MONO = "var(--font-plex-mono)";
const NODE_W = 150;
const NODE_H = 62;
const NODE_X = 55;
const INK = "#111111";
const PAPER = "#ffffff";
const STROKE = "#8a8d88";
const LINE = "#dfe0dc";
const MUTED = "#8a8d88";
const TERRA = "#c46a3a";

type NodeDef = { label: string; sub: string; y: number; x?: number; accent?: boolean };

const stackNodes: NodeDef[] = [
  { label: "LEARN", sub: "skills · experience", y: 20 },
  { label: "BUILD", sub: "products · systems", y: 130 },
  { label: "RESEARCH", sub: "inquiry · evidence", y: 240 },
];

function Node({ node, index, reduce }: { node: NodeDef; index: number; reduce: boolean }) {
  const nodeX = node.x ?? NODE_X;
  const cx = nodeX + NODE_W / 2;
  const entrance = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.25 + index * 0.15, duration: 0.5, ease: "easeOut" as const },
      };
  return (
    <motion.g {...entrance}>
      <rect
        x={nodeX}
        y={node.y}
        width={NODE_W}
        height={NODE_H}
        rx="2"
        fill={node.accent ? INK : PAPER}
        stroke={node.accent ? INK : LINE}
      />
      <text
        x={cx}
        y={node.y + 27}
        textAnchor="middle"
        style={{ fontFamily: MONO }}
        fontSize="12"
        letterSpacing="0.14em"
        fontWeight={500}
        fill={node.accent ? PAPER : INK}
      >
        {node.label}
      </text>
      <text
        x={cx}
        y={node.y + 46}
        textAnchor="middle"
        style={{ fontFamily: MONO }}
        fontSize="8"
        letterSpacing="0.06em"
        fill={node.accent ? "rgba(250,250,248,0.65)" : MUTED}
      >
        {node.sub}
      </text>
    </motion.g>
  );
}

/**
 * Minimal technical schematic: LEARN → BUILD → RESEARCH ↘ INNOVATION.
 * Thin lines, nodes, restrained entrance animation and a very subtle
 * cursor parallax. No particles, no 3D, no glow.
 */
export function HeroDiagram() {
  const reduce = Boolean(useReducedMotion());
  const mx = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 10);
  }

  const lineAnim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: { delay, duration: 0.9, ease: "easeOut" as const },
        };

  return (
    <div
      className="relative border border-line bg-white"
      onMouseMove={onMove}
      onMouseLeave={() => mx.set(0)}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
          Fig. 01
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
          Ecosystem schematic
        </span>
      </div>

      <div className="dotted-grid">
        <svg
          viewBox="0 0 340 500"
          className="h-auto w-full"
          role="img"
          aria-label="Diagram: Learn flows into Build, Build flows into Research, and Research leads on to Innovation."
        >
          <defs>
            <marker
              id="arrow-stroke"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6.5"
              markerHeight="6.5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={STROKE} />
            </marker>
            <marker
              id="arrow-terra"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6.5"
              markerHeight="6.5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={TERRA} />
            </marker>
          </defs>

          <motion.g style={{ x: sx }}>
            <motion.g
              animate={reduce ? undefined : { y: [0, -3, 0] }}
              transition={
                reduce
                  ? undefined
                  : { repeat: Infinity, duration: 8, ease: "easeInOut" }
              }
            >
              {/* Vertical connectors */}
              <motion.path
                d="M 130 82 L 130 126"
                fill="none"
                stroke={STROKE}
                strokeWidth="1.5"
                markerEnd="url(#arrow-stroke)"
                {...lineAnim(0.35)}
              />
              <motion.path
                d="M 130 192 L 130 236"
                fill="none"
                stroke={STROKE}
                strokeWidth="1.5"
                markerEnd="url(#arrow-stroke)"
                {...lineAnim(0.55)}
              />
              {/* Research ↘ Innovation */}
              <motion.path
                d="M 205 271 L 255 360"
                fill="none"
                stroke={TERRA}
                strokeWidth="1.5"
                markerEnd="url(#arrow-terra)"
                {...lineAnim(0.75)}
              />
              {/* Joint dots */}
              <circle cx="130" cy="130" r="2.5" fill={STROKE} />
              <circle cx="130" cy="240" r="2.5" fill={STROKE} />

              {stackNodes.map((node, i) => (
                <Node key={node.label} node={node} index={i} reduce={reduce} />
              ))}
              <Node
                node={{
                  label: "INNOVATION",
                  sub: "new value · impact",
                  y: 368,
                  x: 180,
                  accent: true,
                }}
                index={3}
                reduce={reduce}
              />
            </motion.g>
          </motion.g>
        </svg>
      </div>

      <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-secondary">
          Students · Businesses · Researchers
        </span>
        <span className="size-1.5 rounded-full bg-sage" aria-hidden />
      </div>
    </div>
  );
}