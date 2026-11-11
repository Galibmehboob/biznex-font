
"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Mail, LockKeyhole } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Password reset API is not connected yet.");
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
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-secondary text-brand-purple">
            <LockKeyhole size={26} />
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-foreground">
              Forgot Password?
            </h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              Enter your email address. We will send you instructions to reset your password.
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

            {message && (
              <p role="status" className="text-sm text-muted">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Send Reset Instructions
              <ArrowRight size={17} />
            </button>
          </form>

          <Link
            href="/login"
            className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-brand-purple hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-muted">
          © 2026 Biznex. All rights reserved.
        </p>
      </div>
    </main>
  );
}
