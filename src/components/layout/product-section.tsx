import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Headphones,
  Shirt,
  ShoppingBag,
  Smartphone,
  Star,
  Watch,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Casual T-Shirt",
    category: "Fashion",
    price: 450,
    oldPrice: 600,
    badge: "Popular",
    icon: Shirt,
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Gadgets",
    price: 1250,
    oldPrice: 1500,
    badge: "Trending",
    icon: Headphones,
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: 3,
    name: "Everyday Backpack",
    category: "Lifestyle",
    price: 890,
    oldPrice: null,
    badge: null,
    icon: ShoppingBag,
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    id: 4,
    name: "Smart Digital Watch",
    category: "Gadgets",
    price: 1850,
    oldPrice: 2200,
    badge: "New",
    icon: Watch,
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    id: 5,
    name: "Academic Study Book",
    category: "Books",
    price: 320,
    oldPrice: null,
    badge: null,
    icon: BookOpen,
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    id: 6,
    name: "Mobile Accessories Set",
    category: "Accessories",
    price: 650,
    oldPrice: 800,
    badge: "Popular",
    icon: Smartphone,
    color: "from-pink-500/20 to-pink-500/5",
  },
];

export function ProductSection() {
  return (
    <section id="products" className="bg-background px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">
              Handpicked for You
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 max-w-xl text-muted">
              Explore interesting products from the Biznex marketplace.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple transition hover:text-brand-purple-dark"
          >
            View All Products
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${product.color}`}
                >
                  {product.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-brand-purple shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  <Icon
                    size={82}
                    strokeWidth={1.2}
                    className="text-foreground/60 transition duration-300 group-hover:scale-110"
                  />

                  <Link
                    href={`/products/${product.id}`}
                    aria-label={`View ${product.name}`}
                    className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-foreground shadow-md transition hover:bg-brand-purple hover:text-white"
                  >
                    <ArrowUpRight size={19} />
                  </Link>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    {product.category}
                  </p>

                  <h3 className="mt-2 font-semibold text-foreground">
                    {product.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-1 text-brand-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-medium text-muted">
                      Sample product
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-lg font-bold text-foreground">
                      ৳{product.price.toLocaleString("en-BD")}
                    </span>

                    {product.oldPrice && (
                      <span className="text-sm text-muted line-through">
                        ৳{product.oldPrice.toLocaleString("en-BD")}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 font-semibold text-white transition hover:bg-brand-purple-dark"
          >
            Explore All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}