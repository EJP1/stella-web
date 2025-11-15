"use client";

import * as React from "react";
import { X } from "lucide-react";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={() => onOpenChange(false)}
      />
      
      {/* Sheet */}
      <div
        className={`fixed inset-y-0 left-0 w-full bg-background border-r border-border z-50 shadow-xl transition-transform duration-300 ${
          open ? "animate-slide-in-left" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}

interface SheetContentProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function SheetContent({ children, onClose }: SheetContentProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header with close button */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="text-2xl font-bold">Stella</div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

interface SheetNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function SheetNavLink({ href, children, onClick }: SheetNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-6 py-4 text-lg font-medium hover:bg-muted transition-colors border-b border-border"
    >
      {children}
    </a>
  );
}
