"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

const categories = ["All", "Churpi", "Flavored Churpi", "Waffle", "Puff"];

export function ProductFilter() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((product) => product.category === active)),
    [active],
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-7 overflow-x-auto pb-2 text-[11px]" aria-label="Product categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? "shrink-0 border-b border-black pb-1 font-semibold text-black" : "shrink-0 pb-1 text-muted-foreground hover:text-black"}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mx-auto grid max-w-[700px] grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} compact />
        ))}
      </div>
    </div>
  );
}
