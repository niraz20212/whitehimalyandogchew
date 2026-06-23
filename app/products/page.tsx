import type { Metadata } from "next";
import { ProductFilter } from "@/components/product-filter";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Products",
  description: "Shop premium Himalayan yak chews by size, from extra small to jumbo.",
};

export default function ProductsPage() {
  return (
    <section className="container py-8 sm:py-12">
      <SectionHeading title="Our Products" />
      <div className="mt-7">
        <ProductFilter />
      </div>
    </section>
  );
}
