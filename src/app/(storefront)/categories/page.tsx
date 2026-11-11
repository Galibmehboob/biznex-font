import Link from "next/link";
import {
  Shirt,
  Smartphone,
  BookOpen,
  Sparkles,
  Utensils,
  Heart,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    name: "Fashion & Clothing",
    description: "Discover everyday fashion and clothing.",
    icon: Shirt,
    color: "bg-purple-100 text-purple-700",
    slug: "fashion",
  },
  {
    name: "Gadgets & Accessories",
    description: "Explore useful gadgets and accessories.",
    icon: Smartphone,
    color: "bg-blue-100 text-blue-700",
    slug: "gadgets",
  },
  {
    name: "Books & Stationery",
    description: "Books and essentials for your studies.",
    icon: BookOpen,
    color: "bg-amber-100 text-amber-700",
    slug: "books",
  },
  {
    name: "Lifestyle",
    description: "Products for your everyday lifestyle.",
    icon: Sparkles,
    color: "bg-pink-100 text-pink-700",
    slug: "lifestyle",
  },
  {
    name: "Food & Beverages",
    description: "Discover food and daily treats.",
    icon: Utensils,
    color: "bg-orange-100 text-orange-700",
    slug: "food",
  },
  {
    name: "Beauty & Personal Care",
    description: "Explore beauty and personal care products.",
    icon: Heart,
    color: "bg-rose-100 text-rose-700",
    slug: "beauty",
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border bg-surface px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple">
            Explore Biznex
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Explore All Categories
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Find the products you need from different categories, all in one
            marketplace.
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Browse Categories
            </h2>
            <p className="mt-2 text-sm text-muted">
              Choose a category to explore its products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.slug}
                  href={`/products?category=${category.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.color}`}
                    >
                      <Icon size={26} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-muted transition group-hover:translate-x-1 group-hover:text-brand-purple"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {category.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-brand-purple">
                    Explore Products
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}