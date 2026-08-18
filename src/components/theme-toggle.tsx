"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  if (compact) {
    return (
      <button
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground",
          className
        )}
      >
        {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex h-10 items-center rounded-full border border-foreground/12 bg-foreground/[0.04] p-0.5",
        className
      )}
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        aria-label="Light mode"
        aria-pressed={mounted ? !isDark : undefined}
        onClick={() => setTheme("light")}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
          mounted && !isDark
            ? "bg-background text-foreground shadow-sm"
            : "text-foreground/45 hover:text-foreground"
        )}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Dark mode"
        aria-pressed={mounted ? isDark : undefined}
        onClick={() => setTheme("dark")}
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors",
          mounted && isDark
            ? "bg-background text-foreground shadow-sm"
            : "text-foreground/45 hover:text-foreground"
        )}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
