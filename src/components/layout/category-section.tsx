import Link from "next/link";
import {
  Shirt,
  Smartphone,
  BookOpen,
  Heart,
  Sparkles,
  Utensils,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    name: "Fashion & Clothing",
    description: "Discover everyday fashion and style.",
    icon: Shirt,
    color: "bg-purple-500/10 text-purple-500",
    href: "/categories/fashion",
  },
  {
    name: "Gadgets & Accessories",
    description: "Explore useful tech and accessories.",
    icon: Smartphone,
    color: "bg-blue-500/10 text-blue-500",
    href: "/categories/gadgets",
  },
  {
    name: "Books & Education",
    description: "Find books and learning essentials.",
    icon: BookOpen,
    color: "bg-amber-500/10 text-amber-500",
    href: "/categories/books",
  },
  {
    name: "Beauty & Cosmetics",
    description: "Explore beauty and personal care.",
    icon: Sparkles,
    color: "bg-pink-500/10 text-pink-500",
    href: "/categories/beauty",
  },
  {
    name: "Lifestyle",
    description: "Discover products for daily life.",
    icon: Heart,
    color: "bg-rose-500/10 text-rose-500",
    href: "/categories/lifestyle",
  },
  {
    name: "Food & Snacks",
    description: "Explore food and everyday treats.",
    icon: Utensils,
    color: "bg-orange-500/10 text-orange-500",
    href: "/categories/food",
  },
];

export function CategorySection() {
  return (
    <section id="categories" className="bg-surface-secondary/40 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">
              Explore Biznex
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explore by Category
            </h2>

            <p className="mt-3 max-w-xl text-muted">
              Find what you need from a growing collection of products and categories.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple transition hover:text-brand-purple-dark"
          >
            View All Categories
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ name, description, icon: Icon, color, href }) => (
            <Link
              key={name}
              href={href}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-purple/50 hover:shadow-lg"
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${color}`}>
                <Icon size={27} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground transition group-hover:text-brand-purple">
                  {name}
                </h3>

                <p className="mt-1 text-sm leading-6 text-muted">
                  {description}
                </p>
              </div>

              <ArrowUpRight
                size={19}
                className="shrink-0 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-purple"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}