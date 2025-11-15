import { colorPalettes, type PaletteKey } from "@/lib/color-palettes";

interface GradientBackgroundProps {
  palette?: string[] | PaletteKey;
  className?: string;
}

export function GradientBackground({
  palette = "Aquarius",
  className = "",
}: GradientBackgroundProps) {
  // Resolve palette name to colors array
  const colors = typeof palette === "string" ? colorPalettes[palette] : palette;

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 30%, ${colors[0]} 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 80% 70%, ${colors[2]} 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors[1]} 0%, transparent 60%)`,
        }}
      />
    </>
  );
}
