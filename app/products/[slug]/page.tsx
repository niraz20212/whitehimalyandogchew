import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, site } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  const description = `${product.description} A White Himalayan yak milk dog chew from Nepal for natural, long lasting chewing.`;
  return {
    title: `White Himalayan ${product.name} Churpi Dog Chew`,
    description,
    openGraph: {
      title: `White Himalayan ${product.name} Churpi Dog Chew | ${site.name}`,
      description,
      images: [
        {
          url: product.image,
          alt: `White Himalayan ${product.name} yak milk churpi dog chew`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `White Himalayan ${product.name} Churpi Dog Chew`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const productDescription = `${product.description} A White Himalayan yak milk dog chew from Nepal for natural, long lasting chewing.`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `White Himalayan ${product.name} Churpi Dog Chew`,
    description: productDescription,
    image: `${site.url}${product.image}`,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    category: "Dog Chew",
    sku: product.slug,
  };
  const highlights = [
    { text: "Naturally high protein and grain free", icon: CheckCircle2 },
    { text: "Low lactose through traditional aging", icon: ShieldCheck },
    { text: "Packed fresh and ready to ship", icon: Truck },
  ];

  return (
    <section className="container grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-start">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
        <Image
          src={product.image}
          alt={`White Himalayan ${product.name} yak milk churpi dog chew`}
          width={1000}
          height={800}
          priority
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div>
        <Badge>{product.category}</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-normal">{`White Himalayan Churpi Dog Chew - ${product.name}`}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{product.size}</p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{productDescription}</p>
        <div className="mt-8 grid gap-3">
          {highlights.map(({ text, icon: Icon }) => (
            <div key={text} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <Icon className="h-5 w-5 text-primary" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Add to Cart</Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
