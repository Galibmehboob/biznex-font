
import {
  ShoppingBag,
  Package,
  Wallet,
  TrendingUp,
  Plus,
  ArrowRight,
  Users,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Imported Products",
    value: "0",
    description: "Products in your catalog",
    icon: Package,
  },
  {
    title: "Total Orders",
    value: "0",
    description: "Customer orders",
    icon: ShoppingBag,
  },
  {
    title: "Total Earnings",
    value: "৳0",
    description: "Your reseller profit",
    icon: Wallet,
  },
  {
    title: "Customers",
    value: "0",
    description: "People who purchased",
    icon: Users,
  },
];

export default function ResellerDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-muted">Reseller Center</p>
          <h2 className="mt-1 text-2xl font-bold text-foreground">
            Reseller Dashboard
          </h2>
          <p className="mt-2 text-sm text-muted">
            Manage your catalog, customer orders and earnings.
          </p>
        </div>

        <button
          type="button"
          disabled
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-purple px-5 py-3 text-sm font-semibold text-white opacity-60"
        >
          <Plus size={18} />
          Import Products
        </button>
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

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-6 xl:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">
              Recent Customer Orders
            </h3>
            <ShoppingBag size={19} className="text-brand-purple" />
          </div>

          <div className="flex min-h-56 flex-col items-center justify-center text-center">
            <Package size={38} className="text-muted" />
            <p className="mt-4 font-medium text-foreground">
              No orders yet
            </p>
            <p className="mt-2 text-sm text-muted">
              Orders from your customers will appear here.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-semibold text-foreground">Reseller Tools</h3>

          <div className="mt-5 space-y-3">
            {["Product Catalog", "Manage Orders", "Earnings Overview"].map(
              (action) => (
                <button
                  key={action}
                  type="button"
                  disabled
                  className="flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-left text-sm font-medium text-muted opacity-60"
                >
                  {action}
                  <ArrowRight size={16} />
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
