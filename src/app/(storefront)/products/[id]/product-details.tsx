
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-brand-purple"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-border bg-surface-secondary sm:min-h-[500px]">
            <div className="text-center">
              <ShoppingBag
                size={64}
                strokeWidth={1}
                className="mx-auto text-muted"
              />
              <p className="mt-4 text-sm text-muted">
                Product image will appear here
              </p>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-purple">
              Product Details
            </p>

            <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Product Name
            </h1>

            <p className="mt-3 text-sm leading-7 text-muted">
              Product description will be displayed here. Customers
              will be able to explore product information before
              placing an order.
            </p>

            {/* Price */}
            <div className="mt-7 border-b border-border pb-7">
              <p className="text-3xl font-bold text-foreground">
                ৳0.00
              </p>
              <p className="mt-2 text-xs text-muted">
                Demo price — actual price will come from the product database.
              </p>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-foreground">
                Quantity
              </p>

              <div className="flex w-fit items-center gap-5 rounded-lg border border-border px-4 py-2.5">
                <button type="button" disabled aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>

                <span className="text-sm font-semibold text-foreground">
                  1
                </span>

                <button type="button" disabled aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                disabled
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-purple px-6 py-4 text-sm font-semibold text-white opacity-60"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>

              <button
                type="button"
                disabled
                aria-label="Add to wishlist"
                className="flex items-center justify-center rounded-xl border border-border p-4 text-muted opacity-60"
              >
                <Heart size={20} />
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-10 space-y-5 border-t border-border pt-7">
              <div className="flex items-center gap-3">
                <Truck size={20} className="text-brand-purple" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Delivery Information
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Delivery charges will be shown at checkout.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-brand-purple" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Secure Ordering
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Order through your Biznex account.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <RotateCcw size={20} className="text-brand-purple" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Return Information
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Return policy will be available with product details.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-7 text-xs text-muted">
              Product reference: {id}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
