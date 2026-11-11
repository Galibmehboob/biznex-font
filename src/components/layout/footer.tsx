import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import {LogoFacebook , LogoLinkedin} from '@gravity-ui/icons';
import { FaInstagram } from "react-icons/fa";
import { BackToTop } from "./back-to-top";

const CURRENT_YEAR = 2026;

const footerLinks = {
  Marketplace: [
    { label: "All Products", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Shopping Cart", href: "/cart" },
  ],
  "For Sellers": [
    { label: "Become a Seller", href: "/register" },
    { label: "Merchant", href: "/register" },
    { label: "Reseller", href: "/register" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block text-3xl font-bold text-foreground">
              Biznex<span className="text-brand-gold">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              Your Marketplace. Your Opportunity. Discover products,
              connect with merchants and explore new business opportunities
              with Biznex.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/"
                aria-label="Facebook"
                className="rounded-lg border border-border p-2.5 text-muted transition hover:border-brand-purple hover:text-brand-purple"
              >
                <LogoFacebook width={18} height={18} />
              </Link>

              <Link
                href="/"
                aria-label="Instagram"
                className="rounded-lg border border-border p-2.5 text-muted transition hover:border-brand-purple hover:text-brand-purple"
              >
                <FaInstagram width={18} height={18} />
              </Link>

              <Link
                href="/"
                aria-label="LinkedIn"
                className="rounded-lg border border-border p-2.5 text-muted transition hover:border-brand-purple hover:text-brand-purple"
              >
                <LogoLinkedin width={18} height={18} />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 font-semibold text-foreground">
                {title}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition hover:text-brand-purple"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-10 h-px bg-border" />

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div>
            <h3 className="font-semibold text-foreground">
              Get in Touch
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:gap-6">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                support@biznex.com
              </p>

              <p className="flex items-center gap-2">
                <Phone size={16} />
                Contact information coming soon
              </p>

              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

        <BackToTop />
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
         <p>© {CURRENT_YEAR} Biznex. All rights reserved.</p>
          <p>Built for a world of opportunities.</p>
        </div>
      </div>
    </footer>
  );
}