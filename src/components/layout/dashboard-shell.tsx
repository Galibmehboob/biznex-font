
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Store,
  ShoppingBag,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";

const roleConfig = {
  admin: { title: "Admin Panel", subtitle: "Administration" },
  customer: { title: "Customer Panel", subtitle: "My Account" },
  merchant: { title: "Merchant Panel", subtitle: "Seller Center" },
  reseller: { title: "Reseller Panel", subtitle: "Reseller Center" },
};

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const role = pathname.split("/")[1] as keyof typeof roleConfig;
  const config = roleConfig[role] ?? roleConfig.customer;

  const navigation = [
    {
      label: "Overview",
      href: `/${role}/dashboard`,
      icon: LayoutDashboard,
    },
    {
      label: "Marketplace",
      href: "/products",
      icon: ShoppingBag,
    },
    {
      label: "Visit Store",
      href: "/",
      icon: Store,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-surface transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-border px-6">
          <Link href="/" className="text-2xl font-bold text-foreground">
            Biznex<span className="text-brand-gold">.</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close sidebar"
            className="text-muted lg:hidden"
          >
            <X size={21} />
          </button>
        </div>

        <div className="border-b border-border px-6 py-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Workspace
          </p>
          <h2 className="mt-2 font-semibold text-foreground">
            {config.title}
          </h2>
          <p className="mt-1 text-xs text-muted">{config.subtitle}</p>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-brand-purple text-white"
                    : "text-muted hover:bg-surface-secondary hover:text-foreground"
                }`}
              >
                <Icon size={19} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-surface-secondary hover:text-foreground"
          >
            <ArrowLeft size={18} />
            Back to Website
          </Link>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-border bg-surface/95 px-5 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open sidebar"
              className="rounded-lg p-2 text-foreground hover:bg-surface-secondary lg:hidden"
            >
              <Menu size={22} />
            </button>

            <div>
              <h1 className="text-base font-semibold text-foreground">
                Dashboard
              </h1>
              <p className="text-xs text-muted">{config.title}</p>
            </div>
          </div>

          <Link
            href="/"
            className="text-sm font-medium text-brand-purple hover:underline"
          >
            Visit Website
          </Link>
        </header>

        <main className="p-5 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
