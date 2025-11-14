"use client";

import { colorPalettes, PaletteKey } from "@/lib/color-palettes";

interface RotatedBrickProps {
  palette: PaletteKey;
  colorIndex: number;
  skew?: number;
  className?: string;
}

export function RotatedBrick({
  palette,
  colorIndex,
  skew = 10,
  className = "",
}: RotatedBrickProps) {
  const colors = colorPalettes[palette];
  const color = colors[colorIndex % colors.length];

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      <svg
        className="h-full aspect-square"
        viewBox="-25 0 150 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          x="0"
          y="0"
          width="50"
          height="110"
          fill={color}
          transform={`skewX(${skew})`}
        />
      </svg>
    </div>
  );
}
