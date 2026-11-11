
import {
  Users,
  Store,
  ShoppingBag,
  Wallet,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "0",
    change: "Registered accounts",
    icon: Users,
  },
  {
    title: "Total Merchants",
    value: "0",
    change: "Approved sellers",
    icon: Store,
  },
  {
    title: "Total Orders",
    value: "0",
    change: "All platform orders",
    icon: ShoppingBag,
  },
  {
    title: "Total Revenue",
    value: "৳0",
    change: "Platform revenue",
    icon: Wallet,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-muted">Overview</p>
        <h2 className="mt-1 text-2xl font-bold text-foreground">
          Admin Dashboard
        </h2>
        <p className="mt-2 text-sm text-muted">
          Monitor and manage your Biznex marketplace.
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

              <p className="mt-2 text-xs text-muted">{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-6 xl:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">
              Marketplace Activity
            </h3>
            <TrendingUp size={20} className="text-brand-purple" />
          </div>

          <div className="flex min-h-64 flex-col items-center justify-center text-center">
            <TrendingUp size={38} className="text-muted" />
            <p className="mt-4 font-medium text-foreground">
              No activity data yet
            </p>
            <p className="mt-2 text-sm text-muted">
              Marketplace analytics will appear here once data is available.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-semibold text-foreground">Quick Actions</h3>

          <div className="mt-5 space-y-3">
            {[
              "Manage Users",
              "Review Merchants",
              "Manage Products",
              "View Orders",
            ].map((action) => (
              <button
                key={action}
                type="button"
                disabled
                className="flex w-full items-center justify-between rounded-xl border border-border px-4 py-3 text-left text-sm font-medium text-muted opacity-60"
              >
                {action}
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
