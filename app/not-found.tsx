import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] max-w-2xl flex-col items-center justify-center py-20 text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">Not Found</p>
      <h1 className="mt-4 text-4xl font-black leading-tight">This chew wandered off the trail</h1>
      <p className="mt-5 text-base leading-7 text-muted-foreground">
        The page you are looking for is not available. Head back home or browse the product collection.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/products">Products</Link>
        </Button>
      </div>
    </section>
  );
}
