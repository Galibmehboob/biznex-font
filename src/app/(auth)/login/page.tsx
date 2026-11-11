
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("Authentication API is not connected yet.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple text-xl font-bold text-white">
            B
          </div>
          <span className="text-2xl font-bold text-foreground">
            Biznex<span className="text-brand-gold">.</span>
          </span>
        </Link>

        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-9">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-secondary text-brand-purple">
              <ShoppingBag size={26} />
            </div>

            <h1 className="text-2xl font-bold text-foreground">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-muted">
              Sign in to continue your Biznex journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 focus-within:border-brand-purple">
                <Mail size={18} className="text-muted" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent py-3.5 text-sm text-foreground outline-none placeholder:text-muted"
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-brand-purple hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 focus-within:border-brand-purple">
                <LockKeyhole size={18} className="text-muted" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent py-3.5 text-sm text-foreground outline-none placeholder:text-muted"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="text-muted hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 accent-brand-purple"
              />
              Remember me
            </label>

            {error && (
              <p role="alert" className="text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Sign In
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted">OR</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-center text-sm text-muted">
            Don`t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-brand-purple hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          © 2026 Biznex. All rights reserved.
        </p>
      </div>
    </main>
  );
}
