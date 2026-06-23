import Link from "next/link";
import type { products } from "@/lib/data";

type Product = (typeof products)[number];

function ChewGraphic({ product }: { product: Product }) {
  const color = product.color ?? "#d3923e";
  const pieces = product.shape === "waffle" ? 5 : product.shape === "puffs" ? 9 : 4;

  return (
    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md bg-[#f2e2bf]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.6),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.2),rgba(177,119,43,.12))]" />
      {product.shape === "puffs" ? (
        <div className="relative grid grid-cols-3 gap-2">
          {Array.from({ length: pieces }).map((_, index) => (
            <span
              key={index}
              className="block h-9 w-10 rotate-12 rounded-[12px] shadow-[inset_5px_5px_8px_rgba(255,255,255,.25),0_8px_14px_rgba(80,45,10,.18)]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      ) : product.shape === "waffle" ? (
        <div className="relative grid grid-cols-2 gap-3">
          {Array.from({ length: pieces }).map((_, index) => (
            <span key={index} className="grid h-16 w-14 rotate-12 grid-cols-3 gap-1 rounded-md p-1 shadow-[0_8px_14px_rgba(80,45,10,.18)]" style={{ backgroundColor: color }}>
              {Array.from({ length: 9 }).map((__, cell) => (
                <i key={cell} className="rounded-sm bg-black/10" />
              ))}
            </span>
          ))}
        </div>
      ) : (
        <div className="relative h-28 w-40">
          {Array.from({ length: pieces }).map((_, index) => (
            <span
              key={index}
              className="absolute left-4 top-10 block h-8 w-32 rounded-md shadow-[inset_6px_6px_10px_rgba(255,255,255,.22),0_10px_16px_rgba(80,45,10,.22)]"
              style={{
                backgroundColor: color,
                transform: `translate(${index * 12}px, ${index % 2 === 0 ? index * 6 : index * 3}px) rotate(${index % 2 === 0 ? -12 : 13}deg)`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block text-center" aria-label={`View ${product.name}`}>
      <ChewGraphic product={product} />
      <p className="mt-4 min-h-4 text-[10px] text-muted-foreground">{product.size}</p>
      <h3 className={compact ? "text-[12px] font-black" : "text-base font-black"}>{product.name}</h3>
    </Link>
  );
}
