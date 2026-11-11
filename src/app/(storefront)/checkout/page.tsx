
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  User,
  Phone,
  Truck,
  ShoppingBag,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <Link
          href="/cart"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand-purple"
        >
          <ArrowLeft size={16} />
          Back to Cart
        </Link>

        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">
            Almost There
          </p>

          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm text-muted">
            Provide your delivery information to complete your order.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {/* Customer Information */}
          <div className="space-y-7 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-lg bg-surface-secondary p-2.5 text-brand-purple">
                  <User size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-foreground">
                    Customer Information
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    Your contact details
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-purple"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-purple"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-purple"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-lg bg-surface-secondary p-2.5 text-brand-purple">
                  <MapPin size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-foreground">
                    Delivery Address
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    District
                  </label>
                  <select
                    defaultValue=""
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-purple"
                  >
                    <option value="" disabled>
                      Select district
                    </option>
                    <option>Dhaka</option>
                    <option>Gazipur</option>
                    <option>Narayanganj</option>
                    <option>Chattogram</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Area / City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your area"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-purple"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Full Address
                  </label>
                  <textarea
                    rows={4}
                    placeholder="House, road, block, apartment and other details..."
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-purple"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Delivery Note (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Any special delivery instructions?"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-brand-purple"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="rounded-lg bg-surface-secondary p-2.5 text-brand-purple">
                  <CreditCard size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-foreground">
                    Payment Method
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    Select your preferred payment method
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPaymentMethod("cod")}
                className={`flex w-full items-center justify-between rounded-xl border p-5 text-left transition ${
                  paymentMethod === "cod"
                    ? "border-brand-purple bg-surface-secondary"
                    : "border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Truck size={22} className="text-brand-purple" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Cash on Delivery
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Pay when your order arrives.
                    </p>
                  </div>
                </div>

                <span
                  className={`h-4 w-4 rounded-full border-2 ${
                    paymentMethod === "cod"
                      ? "border-brand-purple bg-brand-purple"
                      : "border-muted"
                  }`}
                />
              </button>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-border p-5 opacity-50">
                <CreditCard size={22} className="text-muted" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Online Payment
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-lg font-bold text-foreground">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-border pb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Demo Product × 1</span>
                <span className="font-medium text-foreground">
                  ৳1,850
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted">Demo Product × 2</span>
                <span className="font-medium text-foreground">
                  ৳1,300
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted">Delivery Charge</span>
                <span className="font-medium text-foreground">
                  ৳80
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <span className="font-semibold text-foreground">
                Total Payable
              </span>

              <span className="text-xl font-bold text-brand-purple">
                ৳3,230
              </span>
            </div>

            <button
              type="button"
              disabled
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple px-5 py-4 text-sm font-semibold text-white opacity-60"
            >
              Place Order
            </button>

            <div className="mt-5 flex items-start gap-3 rounded-xl bg-surface-secondary p-4">
              <ShieldCheck
                size={19}
                className="shrink-0 text-brand-purple"
              />
              <p className="text-xs leading-5 text-muted">
                Your order information will be handled securely by Biznex.
              </p>
            </div>

            <p className="mt-5 text-center text-xs text-muted">
              By placing your order, you agree to our terms and policies.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
