"use client";

import { useMemo } from "react";
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
}

export function BrickBackground({
  palette = "Aquarius",
  className = "",
  seed = Math.random(),
  blur = true,
  orientation = "horizontal",
  gap = 0,
  backgroundColor = "#E8E3D8",
}: BrickBackgroundProps) {
  // Resolve palette name to colors array
  const colors = typeof palette === "string" ? colorPalettes[palette] : palette;
  const bricks = useMemo(() => {
    const random = seededRandom(seed);
    const bricks: Brick[] = [];
    const containerWidth = 100; // percentage
    const containerHeight = 100; // percentage

    if (orientation === "horizontal") {
      // Horizontal stacking (original behavior)
      const brickWidth = 4;
      const brickHeight = 15;
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
      // Vertical stacking
      const brickWidth = 15;
      const brickHeight = 4;
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
  }, [colors, seed, orientation, gap]);

  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{ backgroundColor }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        shapeRendering="crispEdges"
        style={blur ? { filter: "blur(2px)", opacity: 0.9 } : undefined}
      >
        {bricks.map((brick, index) => (
          <rect
            key={index}
            x={brick.x}
            y={brick.y}
            width={brick.width}
            height={brick.height}
            fill={brick.color}
          />
        ))}
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
