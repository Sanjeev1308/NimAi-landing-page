"use client";

import type React from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function AnimatedButton({
  children,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block px-10 py-3.5 text-lg font-medium uppercase tracking-widest text-muted-foreground dark:text-[#d0c9c9] bg-transparent overflow-hidden transition-all duration-300 ease-linear hover:text-foreground dark:hover:text-white group ${className} `}
    >
      {/* Top border that expands on hover */}
      <span className="absolute top-0 left-12 right-24 h-px bg-foreground/10 dark:bg-white/10 transition-all duration-500 ease-out group-hover:left-0 group-hover:right-0 group-hover:bg-foreground dark:group-hover:bg-white" />

      {/* Bottom border that expands on hover */}
      <span className="absolute bottom-0 left-24 right-12 h-px bg-foreground/10 dark:bg-white/10 transition-all duration-500 ease-out group-hover:left-0 group-hover:right-0 group-hover:bg-foreground dark:group-hover:bg-white" />

      {/* Left border that expands on hover */}
      <span className="absolute top-12 bottom-24 left-0 w-px bg-foreground/10 dark:bg-white/10 transition-all duration-500 ease-out group-hover:top-0 group-hover:bottom-0 group-hover:bg-foreground dark:group-hover:bg-white" />

      {/* Right border that expands on hover */}
      <span className="absolute top-24 bottom-12 right-0 w-px bg-foreground/10 dark:bg-white/10 transition-all duration-500 ease-out group-hover:top-0 group-hover:bottom-0 group-hover:bg-foreground dark:group-hover:bg-white" />

      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
