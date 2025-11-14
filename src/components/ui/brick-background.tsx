"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { colorPalettes, type PaletteKey } from "@/lib/color-palettes";

interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

interface BrickBackgroundProps {
  palette?: string[] | PaletteKey;
  className?: string;
  seed?: number;
  blur?: boolean;
  orientation?: "horizontal" | "vertical";
  gap?: number;
  backgroundColor?: string;
  animate?: boolean;
}

export function BrickBackground({
  palette = "Aquarius",
  className = "",
  seed = 12345,
  blur = true,
  orientation = "horizontal",
  gap = 0,
  backgroundColor = "#E8E3D8",
  animate = false,
}: BrickBackgroundProps) {
  const [hoveredBrick, setHoveredBrick] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        const rect = containerRef.current!.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      };
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  // Resolve palette name to colors array
  const colors = typeof palette === "string" ? colorPalettes[palette] : palette;
  const bricks = useMemo(() => {
    const random = seededRandom(seed);
    const bricks: Brick[] = [];
    const containerWidth = dimensions.width;
    const containerHeight = dimensions.height;

    const baseWidth = 24; // Fixed pixel width
    const baseHeight = 44; // Fixed pixel height
    if (orientation === "horizontal") {
      // Horizontal stacking with fixed brick size
      const brickWidth = baseWidth; // Fixed pixel width
      const brickHeight = baseHeight; // Fixed pixel height
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
          });
        }
      }
    } else {
      // Vertical stacking with fixed brick size
      const brickWidth = baseHeight; // Fixed pixel width
      const brickHeight = baseWidth; // Fixed pixel height
      const gapSize = gap;

      // Calculate how many bricks fit
      const cols = Math.ceil(containerWidth / brickWidth);
      const rows = Math.ceil(containerHeight / brickHeight);

      for (let col = 0; col < cols; col++) {
        // Offset every other column by half a brick height for brick pattern
        const offset = col % 2 === 0 ? 0 : brickHeight / 2;

        for (let row = 0; row < rows + 1; row++) {
          const y = row * brickHeight - offset;

          // Skip bricks that are completely outside the container
          if (y + brickHeight < 0 || y > containerHeight) continue;

          const color = colors[Math.floor(random() * colors.length)];

          bricks.push({
            x: col * brickWidth + gapSize / 2,
            y: Math.max(0, y) + gapSize / 2,
            width: brickWidth - gapSize,
            height:
              (y < 0
                ? brickHeight + y
                : Math.min(brickHeight, containerHeight - y)) - gapSize,
            color,
          });
        }
      }
    }

    return bricks;
  }, [colors, seed, orientation, gap, dimensions]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ backgroundColor }}
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
            const centerX = brick.x + brick.width / 2;
            const centerY = brick.y + brick.height / 2;
            const rotation = animate && hoveredBrick === index ? 5 : 0;

            return (
              <rect
                key={`blur-${index}`}
                x={brick.x}
                y={brick.y}
                width={brick.width}
                height={brick.height}
                fill={brick.color}
                transform={`rotate(${rotation} ${centerX} ${centerY})`}
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
          const centerX = brick.x + brick.width / 2;
          const centerY = brick.y + brick.height / 2;
          const rotation = animate && hoveredBrick === index ? 5 : 0;

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
                transform={`rotate(${rotation} ${centerX} ${centerY})`}
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
