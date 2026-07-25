"use client";

import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export function ProductFilter() {
    return (
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-12">
            {products.map((product) => (
                <div
                    key={product.slug}
                    className="w-[260px] sm:w-[280px] lg:w-[300px]"
                >
                    <ProductCard product={product} compact />
                </div>
            ))}
        </div>
    );
}