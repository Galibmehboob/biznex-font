import Link from "next/link";
import {
  UserPlus,
  Store,
  Package,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Register on Biznex and get started with your marketplace journey.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Become a Seller",
    description: "Apply for merchant or reseller access and complete verification.",
    icon: Store,
  },
  {
    number: "03",
    title: "Add Your Products",
    description: "List your products, manage inventory and showcase your offerings.",
    icon: Package,
  },
  {
    number: "04",
    title: "Grow Your Business",
    description: "Receive orders, serve customers and grow through Biznex.",
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-surface-secondary/40 px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">
              Start Your Journey
            </p>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Turn Your Ideas Into a Growing Business.
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-muted">
              Whether you are a merchant with products or a reseller looking
              for opportunities, Biznex gives you a place to start.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Free seller registration",
                "Merchant and reseller opportunities",
                "Dedicated seller dashboard",
                "Manage products and orders",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="shrink-0 text-success" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/register"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-brand-purple px-6 py-3.5 font-semibold text-white transition hover:bg-brand-purple-dark"
            >
              Start Selling
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-brand-purple/10 blur-2xl" />

            <div className="relative rounded-3xl border border-border bg-surface p-6 shadow-xl sm:p-8">
              <h3 className="mb-7 text-xl font-bold text-foreground">
                How Biznex Works
              </h3>

              <div className="space-y-7">
                {steps.map(({ number, title, description, icon: Icon }, index) => (
                  <div key={number} className="relative flex gap-5">
                    {index !== steps.length - 1 && (
                      <div className="absolute left-6 top-14 h-12 w-px bg-border" />
                    )}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                      <Icon size={23} />
                    </div>

                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold tracking-widest text-brand-gold">
                          STEP {number}
                        </span>
                      </div>

                      <h4 className="mt-1 font-semibold text-foreground">
                        {title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-muted">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}