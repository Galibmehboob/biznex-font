
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Truck,
  Tag,
} from "lucide-react";

const initialCart = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Gadgets",
    price: 1850,
    quantity: 1,
  },
  {
    id: 2,
    name: "Casual Cotton T-Shirt",
    category: "Fashion",
    price: 650,
    quantity: 2,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = cartItems.length > 0 ? 80 : 0;
  const grandTotal = subtotal + deliveryCharge;

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-brand-purple"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>

        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">
            Your Shopping Bag
          </p>

          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-3 text-sm text-muted">
            Review your items before proceeding to checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-border bg-surface px-5 py-20 text-center">
            <ShoppingBag
              size={48}
              strokeWidth={1}
              className="mx-auto text-muted"
            />

            <h2 className="mt-5 text-xl font-semibold text-foreground">
              Your cart is empty
            </h2>

            <p className="mt-2 text-sm text-muted">
              Discover products and add your favorites to the cart.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-purple px-5 py-3 text-sm font-semibold text-white hover:bg-brand-purple-dark"
            >
              Explore Products
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-5 lg:col-span-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-5 sm:flex-row sm:items-center"
                >
                  <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-surface-secondary text-brand-purple sm:w-28">
                    <ShoppingBag size={36} strokeWidth={1} />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-xs font-medium text-brand-purple">
                        {item.category}
                      </p>

                      <h3 className="mt-2 font-semibold text-foreground">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-sm font-bold text-foreground">
                        ৳{item.price.toLocaleString("en-BD")}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end">
                      <div className="flex items-center gap-4 rounded-lg border border-border px-3 py-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                          className="text-muted hover:text-brand-purple"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="text-sm font-semibold text-foreground">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                          className="text-muted hover:text-brand-purple"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 text-xs font-medium text-danger transition hover:opacity-70"
                      >
                        <Trash2 size={15} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <aside className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-lg font-bold text-foreground">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-border pb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium text-foreground">
                    ৳{subtotal.toLocaleString("en-BD")}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted">
                    <Truck size={16} />
                    Delivery Charge
                  </span>

                  <span className="font-medium text-foreground">
                    ৳{deliveryCharge.toLocaleString("en-BD")}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <span className="font-semibold text-foreground">
                  Grand Total
                </span>

                <span className="text-xl font-bold text-brand-purple">
                  ৳{grandTotal.toLocaleString("en-BD")}
                </span>
              </div>

              <div className="mt-6 flex gap-3 rounded-xl bg-surface-secondary p-4">
                <Tag size={18} className="shrink-0 text-brand-purple" />

                <p className="text-xs leading-5 text-muted">
                  Delivery charges may vary depending on the merchant
                  and delivery location.
                </p>
              </div>

              <button
                type="button"
                disabled
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple px-5 py-4 text-sm font-semibold text-white opacity-60"
              >
                Proceed to Checkout
                <ArrowRight size={17} />
              </button>

              <p className="mt-4 text-center text-xs text-muted">
                Secure ordering through Biznex
              </p>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
