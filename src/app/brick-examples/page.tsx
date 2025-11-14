import { BrickBackground } from "@/components/ui/brick-background";
import { colorPalettes, type PaletteKey } from "@/lib/color-palettes";

export default function BrickExamplesPage() {
  const palettes = Object.keys(colorPalettes) as PaletteKey[];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">BrickBackground Examples</h1>
          <p className="text-muted-foreground mt-1">
            Full-width brick backgrounds for all zodiac color palettes
          </p>
        </div>
      </header>

      {/* Examples Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {palettes.map((palette) => (
          <div key={palette} className="space-y-4">
            {/* Palette Name and Colors */}
            <div>
              <h2 className="text-xl font-semibold mb-2">{palette}</h2>
              <div className="flex gap-2 mb-4">
                {colorPalettes[palette].map((color, idx) => (
                  <div key={idx} className="space-y-1">
                    <div
                      className="w-12 h-12 rounded border border-border"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                    <p className="text-xs text-muted-foreground text-center font-mono">
                      {color}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Width BrickBackground */}
            <div className="w-full h-[400px] relative">
              <BrickBackground
                palette={palette}
                orientation="horizontal"
                gap={10}
                blur={false}
                backgroundColor="white"
                animate={true}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
          <p>
            Hover over the bricks to see the animation effect. Each palette
            represents a zodiac sign.
          </p>
        </div>
      </footer>
    </div>
  );
}
