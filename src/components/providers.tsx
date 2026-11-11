
"use client";

import { ThemeProvider } from "next-themes";
import { QueryProvider } from "@/providers/query-provider";
import { Toaster } from "sonner";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
  scriptProps={{ type: "application/json" }}
>
      <QueryProvider>
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
        />
      </QueryProvider>
    </ThemeProvider>
  );
}
