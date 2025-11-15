"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { colorPalettes, type PaletteKey } from "@/lib/color-palettes";

interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  hasInitialSkew: boolean;
}

interface BrickBackgroundProps {
  palette?: string[] | PaletteKey;
  className?: string;
  seed?: number;
  blur?: boolean;
  gap?: number;
  backgroundColor?: string;
  animate?: boolean;
  skewPercentage?: number; // Percentage of bricks that start with skew (0-100)
}

export function BrickBackground({
  palette = "Aquarius",
  className = "",
  seed = 12345,
  blur = false,
  gap = 0,
  backgroundColor = "#E8E3D8",
  animate = false,
  skewPercentage = 30,
}: BrickBackgroundProps) {
  const [hoveredBrick, setHoveredBrick] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        const rect = containerRef.current!.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
        setIsReady(true);
      };
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  // Resolve palette name to colors array
  const colors = typeof palette === "string" ? colorPalettes[palette] : palette;
  const brickSkew = 15; // Skew angle in degrees for animation
  const bricks = useMemo(() => {
    const random = seededRandom(seed);
    const bricks: Brick[] = [];
    const containerWidth = dimensions.width;
    const containerHeight = dimensions.height;
    const brickWidth = 24; // Fixed pixel width
    const brickHeight = 44; // Fixed pixel height
    const gapSize = gap;

    // Calculate how many bricks fit
    const cols = Math.ceil(containerWidth / brickWidth);
    const rows = Math.ceil(containerHeight / brickHeight);

    for (let row = 0; row < rows; row++) {
      // Offset every other row by half a brick width for brick pattern
      const offset = row % 2 === 0 ? 0 : brickWidth / 2;

      for (let col = 0; col < cols + 1; col++) {
        const x = col * brickWidth - offset;

        // Skip bricks that are completely outside the container
        if (x + brickWidth < 0 || x > containerWidth) continue;

        const color = colors[Math.floor(random() * colors.length)];

        bricks.push({
          x: Math.max(0, x) + gapSize / 2,
          y: row * brickHeight + gapSize / 2,
          width:
            (x < 0
              ? brickWidth + x
              : Math.min(brickWidth, containerWidth - x)) - gapSize,
          height: brickHeight - gapSize,
          color,
          hasInitialSkew: random() * 100 < skewPercentage,
        });
      }
    }

    return bricks;
  }, [colors, seed, gap, dimensions, skewPercentage]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundColor,
        opacity: isReady ? 1 : 0,
        filter: isReady ? "blur(0px)" : "blur(10px)",
        transition: "opacity 0.5s ease-in, filter 0.5s ease-in",
      }}
    >
      {/* Background layer with blur */}
      {blur && (
        <svg
          className="w-full h-full absolute inset-0"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="none"
          shapeRendering="crispEdges"
          style={{ filter: "blur(1px)", opacity: 0.9, pointerEvents: "none" }}
        >
          {bricks.map((brick, index) => {
            const skew = animate
              ? hoveredBrick === index
                ? brick.hasInitialSkew
                  ? 0
                  : brickSkew * 5
                : brick.hasInitialSkew
                  ? brickSkew * 5
                  : 0
              : 0;
            // Calculate offset to keep brick centered during skew
            const centerY = brick.y + brick.height / 2;
            const skewOffset = Math.tan((skew * Math.PI) / 180) * centerY;

            return (
              <rect
                key={`blur-${index}`}
                x={brick.x}
                y={brick.y}
                width={brick.width}
                height={brick.height}
                fill={brick.color}
                transform={`translate(${-skewOffset} 0) skewX(${skew})`}
                style={{
                  transition:
                    hoveredBrick === index
                      ? "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      : "all 0.8s ease-out",
                }}
              />
            );
          })}
        </svg>
      )}
      {/* Interactive layer */}
      <svg
        className="w-full h-full absolute inset-0"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        style={{ pointerEvents: animate ? "auto" : "none" }}
      >
        {bricks.map((brick, index) => {
          const skew = animate
            ? hoveredBrick === index
              ? brick.hasInitialSkew
                ? 0
                : brickSkew
              : brick.hasInitialSkew
                ? brickSkew
                : 0
            : 0;
          // Calculate offset to keep brick centered during skew
          const centerY = brick.y + brick.height / 2;
          const skewOffset = Math.tan((skew * Math.PI) / 180) * centerY;

          return (
            <g
              key={index}
              onMouseEnter={() => setHoveredBrick(index)}
              onMouseLeave={() => setHoveredBrick(null)}
            >
              {/* Larger invisible hit area */}
              <rect
                x={brick.x - 0.5}
                y={brick.y - 0.5}
                width={brick.width + 1}
                height={brick.height + 1}
                fill="transparent"
                style={{ cursor: "pointer" }}
              />
              {/* Visual brick */}
              <rect
                x={brick.x}
                y={brick.y}
                width={brick.width}
                height={brick.height}
                fill={blur ? "transparent" : brick.color}
                transform={`translate(${-skewOffset} 0) skewX(${skew})`}
                style={{
                  pointerEvents: "none",
                  transition:
                    hoveredBrick === index
                      ? "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)"
                      : "all 0.8s ease-out",
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Seeded random number generator for consistent results
function seededRandom(seed: number) {
  let state = seed;
  return function () {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };
}
