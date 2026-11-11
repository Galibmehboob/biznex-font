
import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">
            Explore Marketplace
          </p>

          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Discover Products
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
            Explore products from different categories and discover
            something that matches your needs.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
            <Search size={19} className="text-muted" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
            />
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition hover:bg-surface-secondary"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-3">
          {[
            "All Products",
            "Fashion",
            "Gadgets",
            "Books",
            "Lifestyle",
            "Food",
            "Beauty",
          ].map((category) => (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                category === "All Products"
                  ? "border-brand-purple bg-brand-purple text-white"
                  : "border-border bg-surface text-muted hover:border-brand-purple hover:text-brand-purple"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Results Header */}
        <div className="flex flex-col justify-between gap-3 border-b border-border pb-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-semibold text-foreground">
              All Products
            </h2>
            <p className="mt-1 text-xs text-muted">
              Explore our marketplace collection
            </p>
          </div>

          <select
            defaultValue="featured"
            className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none"
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Empty Product State */}
        <div className="py-24 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-secondary text-brand-purple">
            <Search size={28} />
          </div>

          <h3 className="text-lg font-semibold text-foreground">
            No products available yet
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">
            Products will appear here when merchants start listing
            their products on Biznex.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center rounded-lg bg-brand-purple px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-purple-dark"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
