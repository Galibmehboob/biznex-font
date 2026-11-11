
import { Suspense } from "react";
import ProductDetails from "./product-details";

export default function ProductDetailsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-muted">
          Loading product details...
        </div>
      }
    >
      <ProductDetails />
    </Suspense>
  );
}
