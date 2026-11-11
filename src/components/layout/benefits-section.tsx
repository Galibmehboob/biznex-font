import {
  ShieldCheck,
  Wallet,
  Users,
  Store,
  Truck,
  Headset,
} from "lucide-react";

const benefits = [
  {
    title: "Trusted Marketplace",
    description:
      "A connected marketplace designed to make shopping and selling more convenient.",
    icon: ShieldCheck,
  },
  {
    title: "Budget-Friendly Shopping",
    description:
      "Explore products across different categories and find options within your budget.",
    icon: Wallet,
  },
  {
    title: "Community Driven",
    description:
      "Connect with a growing community of students, customers and entrepreneurs.",
    icon: Users,
  },
  {
    title: "Seller Opportunities",
    description:
      "Build your merchant or reseller journey through one marketplace.",
    icon: Store,
  },
  {
    title: "Convenient Delivery",
    description:
      "Get your orders delivered through the Biznex delivery process.",
    icon: Truck,
  },
  {
    title: "Customer Support",
    description:
      "Get assistance with your shopping and marketplace experience.",
    icon: Headset,
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-background px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">
            Why Biznex
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            More Than Just a Marketplace
          </h2>

          <p className="mt-4 leading-7 text-muted">
            A platform designed to create opportunities for customers,
            merchants and resellers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-purple/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                <Icon size={24} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}