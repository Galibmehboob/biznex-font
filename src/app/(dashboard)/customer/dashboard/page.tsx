
import {
  ShoppingBag,
  Package,
  Heart,
  Wallet,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Total Orders",
    value: "0",
    description: "All your orders",
    icon: ShoppingBag,
  },
  {
    title: "Active Orders",
    value: "0",
    description: "Currently processing",
    icon: Package,
  },
  {
    title: "Wishlist",
    value: "0",
    description: "Saved products",
    icon: Heart,
  },
  {
    title: "Total Spent",
    value: "৳0",
    description: "Your purchase history",
    icon: Wallet,
  },
];

export default function CustomerDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-muted">My Account</p>
        <h2 className="mt-1 text-2xl font-bold text-foreground">
          Welcome to Your Dashboard
        </h2>
        <p className="mt-2 text-sm text-muted">
          Manage your orders, wishlist and shopping activity.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted">
                  {stat.title}
                </p>
                <div className="rounded-xl bg-surface-secondary p-3 text-brand-purple">
                  <Icon size={20} />
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-foreground">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs text-muted">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Recent Orders</h3>
            <Clock size={19} className="text-brand-purple" />
          </div>

          <div className="flex min-h-48 flex-col items-center justify-center text-center">
            <ShoppingBag size={36} className="text-muted" />
            <p className="mt-4 font-medium text-foreground">
              No orders yet
            </p>
            <p className="mt-2 text-sm text-muted">
              Your recent purchases will appear here.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-semibold text-foreground">Start Shopping</h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            Explore products from different merchants and discover affordable
            deals on Biznex.
          </p>

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-purple px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Explore Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
