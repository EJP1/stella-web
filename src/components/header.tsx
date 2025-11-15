"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetNavLink } from "@/components/ui/sheet";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">
          {/* Left: Logo */}
          <a href="/" className="text-xl sm:text-2xl font-bold flex-shrink-0">
            Stella
          </a>

          {/* Center: Nav links (Desktop only) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 pointer-events-none">
            <a
              href="/#features"
              className="text-sm font-medium hover:text-primary transition-colors pointer-events-auto"
            >
              Features
            </a>
            <a
              href="/mission"
              className="text-sm font-medium hover:text-primary transition-colors pointer-events-auto"
            >
              Mission
            </a>
            <a
              href="/#pricing"
              className="text-sm font-medium hover:text-primary transition-colors pointer-events-auto"
            >
              Pricing
            </a>
          </div>

          {/* Right: CTA and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Button className="text-sm sm:text-base px-3 sm:px-4 py-2">Get Started</Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent onClose={() => setMobileMenuOpen(false)}>
          <nav className="py-4">
            <SheetNavLink href="/#features" onClick={() => setMobileMenuOpen(false)}>
              Features
            </SheetNavLink>
            <SheetNavLink href="/mission" onClick={() => setMobileMenuOpen(false)}>
              Mission
            </SheetNavLink>
            <SheetNavLink href="/#pricing" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </SheetNavLink>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
