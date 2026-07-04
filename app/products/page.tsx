import type { Metadata } from "next";
import { ProductFilter } from "@/components/product-filter";

export const metadata: Metadata = {
    title: "Churpi Dog Chews",
    description:
        "Shop White Himalayan dog chew products from a Nepal supplier, including premium Himalayan yak chew, natural churpi, and best dog chew options.",
};

export default function ProductsPage() {
    return (
        <section className="container py-8 sm:py-12">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                    White Himalayan Churpi Dog Chews
                </h1>
            </div>

            <p className="mt-2 text-center text-sm text-muted-foreground">
                Himalayan yak chew churpi and cheese puff from one of the top suppliers of dog chew in Nepal
            </p>

            <div className="mt-7">
                <ProductFilter />
            </div>
        </section>
    );
}
