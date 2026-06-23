import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about White Himalayan Dog Chew, our mission, farmer partnerships, and sustainability values.",
};

const stats = [
  ["9+", "Years of Experience", "#0697c7"],
  ["7+", "Global Distributors", "#ffb33d"],
  ["35+", "Farmers", "#5dbb43"],
  ["70+", "Employees", "#64bc46"],
];

export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="border-b border-[#f1ebe5] bg-[#fbf8f5]">
        <div className="container grid max-w-6xl gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-[#202124] sm:text-5xl">
              Handmade & Organic Himalayan Chews
            </h1>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#303030]">
              <p>
                At The Mountain Pet Company, we believe dogs deserve better nutrition, better ingredients, and better care. Every chew is made to be as wholesome as nature intended.
              </p>
              <p>
                We partner directly with Nepalese herders and farmers to create natural, protein-rich yak churpi from free-range, grass-fed animals. The result is a simple, durable chew with a clear origin and a purpose behind it.
              </p>
              <p>
                Each product is carefully prepared in Kathmandu, where generations of artisanal knowledge meet strict quality testing and modern food safety standards.
              </p>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-[#f1dfbd] shadow-[0_18px_50px_rgba(40,33,25,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1000&q=85"
              alt="Rows of Himalayan yak chews"
              fill
              priority
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container grid max-w-4xl grid-cols-2 gap-5 py-12 md:grid-cols-4">
        {stats.map(([number, label, color]) => (
          <div key={label} className="rounded-lg border-2 bg-white p-6 text-center shadow-[0_12px_30px_rgba(0,0,0,0.05)]" style={{ borderColor: color }}>
            <p className="text-4xl font-black text-[#202124]">{number}</p>
            <p className="mt-2 text-sm font-semibold leading-5 text-[#555]">{label}</p>
          </div>
        ))}
      </div>

      <div className="container max-w-5xl py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black leading-tight text-[#202124]">Purity, Ethics & Tradition</h2>
          <p className="mt-4 text-base leading-7 text-[#555]">
            Because when it comes to your dog's health, only the purest will do.
          </p>
        </div>
        <div className="mt-10 grid gap-6 text-base leading-8 text-[#303030] md:grid-cols-3">
          <div className="rounded-lg bg-[#fbf8f5] p-6">
            <h3 className="text-lg font-black text-[#202124]">Pure Ingredients</h3>
            <p className="mt-3">
              Our churpi is made using time-honored Himalayan methods with milk sourced ethically from local yak and cow herders.
            </p>
          </div>
          <div className="rounded-lg bg-[#fbf8f5] p-6">
            <h3 className="text-lg font-black text-[#202124]">No Hidden Fillers</h3>
            <p className="mt-3">
              No artificial preservatives, no common allergens, and no unnecessary fillers. Just a clean chew dogs can enjoy.
            </p>
          </div>
          <div className="rounded-lg bg-[#fbf8f5] p-6">
            <h3 className="text-lg font-black text-[#202124]">Community Impact</h3>
            <p className="mt-3">
              Every chew supports Himalayan communities and helps preserve an ancient tradition that has stood the test of time.
            </p>
          </div>
        </div>
      </div>

      <div className="pb-10" />
    </section>
  );
}
