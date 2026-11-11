
import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  BookOpen,
  Shirt,
  Smartphone,
  Store,
} from "lucide-react";

const categories = [
  { name: "Fashion", icon: Shirt },
  { name: "Gadgets", icon: Smartphone },
  { name: "Books", icon: BookOpen },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-purple/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28 lg:px-8">

        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-purple/20 bg-brand-purple/10 px-4 py-2 text-sm font-medium text-brand-purple">
            <Sparkles size={16} />
            Discover the Biznex Marketplace
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Discover More.
            <br />
            Shop <span className="text-brand-purple">Smarter.</span>
            <br />
            Grow Together.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-muted sm:text-lg">
            Explore products, discover new merchants, and find
            opportunities in one connected marketplace.
            Your next discovery starts here.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 font-semibold text-white transition hover:bg-brand-purple-dark"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 font-semibold text-foreground transition hover:bg-surface-secondary"
            >
              <Store size={18} />
              Become a Seller
            </Link>
          </div>

          {/* Category Shortcuts */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Explore Categories
            </p>

            <div className="flex flex-wrap gap-3">
              {categories.map(({ name, icon: Icon }) => (
                <Link
                  key={name}
                  href="#categories"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-brand-purple hover:text-brand-purple"
                >
                  <Icon size={16} />
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-lg">

          <div className="absolute inset-8 rounded-full bg-brand-purple/15 blur-3xl" />

          <div className="relative rounded-3xl border border-border bg-surface p-5 shadow-2xl sm:p-7">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">
                  Welcome to
                </p>
                <h2 className="text-2xl font-bold text-foreground">
                  Biznex<span className="text-brand-gold">.</span>
                </h2>
              </div>

              <div className="rounded-xl bg-brand-purple/10 p-3 text-brand-purple">
                <ShoppingBag size={23} />
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-gradient-to-br from-[#312E81] to-[#8B6CF6] p-6 text-white">
              <span className="text-xs font-medium uppercase tracking-widest text-white/70">
                Marketplace
              </span>

              <h3 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
                One Place.
                <br />
                Many Possibilities.
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                Shop, discover and explore a world of products.
              </p>

              <div className="mt-6 flex h-28 items-center justify-center">
                <ShoppingBag
                  size={82}
                  strokeWidth={1}
                  className="text-white/80"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {categories.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-background p-3"
                >
                  <Icon size={22} className="text-brand-purple" />
                  <span className="text-xs font-medium text-foreground">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-border p-4">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Your marketplace journey
                </p>
                <p className="mt-1 text-xs text-muted">
                  Starts with one discovery.
                </p>
              </div>

              <Sparkles className="text-brand-gold" size={24} />
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-surface px-4 py-3 shadow-xl sm:-left-8">
            <p className="text-xs font-medium text-muted">
              Your Marketplace
            </p>
            <p className="text-sm font-bold text-brand-gold">
              Your Opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
