import Link from "next/link";
import type { products } from "@/lib/data";
import Image from "next/image";

type Product = (typeof products)[number];

function ChewGraphic({ product }: { product: Product }) {
    return (
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#f2e2bf]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.6),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.2),rgba(177,119,43,.12))]" />

            <Image
                src={product.image || "/placeholder.jpg"}
                alt={`White Himalayan ${product.name} ${product.category.toLowerCase()} yak milk dog chew`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    );
}

export function ProductCard({
                                product,
                                compact = false,
                            }: {
    product: Product;
    compact?: boolean;
}) {
    return (
        <Link
            href={`/products/${product.slug}`}
            className="group block text-center"
            aria-label={`View ${product.name}`}
        >
            <ChewGraphic product={product} />

            <p className="mt-4 min-h-4 text-[10px] text-muted-foreground">
                {product.size}
            </p>

            <h3
                className={
                    compact
                        ? "text-[12px] font-black leading-tight"
                        : "text-base font-black leading-tight"
                }
            >
                {product.name}
            </h3>
        </Link>
    );
}
