
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "../theme-toggle";



const navigation = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "#categories" },
  { label: "Products", href: "#products" },
  { label: "How It Works", href: "#how-it-works" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-purple text-lg font-bold text-white sm:h-10 sm:w-10 sm:text-xl">
            B
          </div>

          <span className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            Biznex<span className="text-brand-gold">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-purple"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="#products"
            aria-label="Shopping bag"
            className="rounded-lg border border-border p-2.5 text-foreground transition-colors hover:bg-surface-secondary"
          >
            <ShoppingBag size={19} />
          </Link>

          <Link
            href="#products"
            className="flex items-center gap-2 rounded-lg bg-brand-purple px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark lg:px-5"
          >
            Explore Store
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#products"
            aria-label="Shopping bag"
            className="rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-surface-secondary"
          >
            <ShoppingBag size={19} />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-border p-2 text-foreground"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background p-5 md:hidden"
        >
          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-sm font-medium text-foreground transition-colors hover:text-brand-purple"
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t border-border pt-4">
              <ThemeToggle />
            </div>

            <Link
              href="#products"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-purple px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark"
            >
              Explore Store
              <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
