
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";


export const metadata: Metadata = {
  title: "Biznex | Your Marketplace",
  description:
    "Discover products, explore merchants, and shop smarter with Biznex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
