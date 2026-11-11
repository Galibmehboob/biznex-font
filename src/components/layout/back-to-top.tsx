"use client";

import { ArrowUpRight } from "lucide-react";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-purple transition hover:text-brand-purple-dark"
    >
      Back to Top
      <ArrowUpRight size={16} />
    </button>
  );
}