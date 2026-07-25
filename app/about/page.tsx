import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About White Himalayan Churpi",
  description:
    "Learn why White Himalayan Yak CheeseChew is a trusted chew supplier in Nepal for natural churpi and yakcheese chews.",
};

const stats = [
  ["18+", "Years of Experience", "#0697c7"],
  ["3+", "Global Distributors", "#ffb33d"],
  ["2600+", "Farmers", "#5dbb43"],
  ["30+", "Employees", "#64bc46"],
];

export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="border-b border-[#f1ebe5] bg-[#fbf8f5]">
        <div className="container grid max-w-6xl gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-3xl font-black uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-[#202124] sm:text-5xl">
              White Himalayan Churpi - Natural Dog Chews from Nepal
            </h1>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#303030]">
              <p className="text-2xl leading-9">
                White Himalayan Dog Chew was born from over 32 years of expertise in crafting traditional Himalayan chhurpi in Ilam, Nepal. Rooted in generations of dairy craftsmanship, our journey began with a deep respect for natural methods and the cultural heritage of the Himalayas. Over time, this traditional knowledge evolved into a vision to create premium, natural dog chews that reflect authenticity, purity, and quality.
              </p>

              <p className="text-2xl leading-9">
                With our own production centers and modern processing facility in Jhapa, Nepal, we proudly bring authentic, manufacturer-direct Himalayan dog chews to the global market. Every step of production is carefully controlled from sourcing fresh, high-quality yak and cow milk from local dairy communities to shaping each chew using time-honored techniques combined with strict hygiene standards, helping us serve as a best chew supplier in Nepal for quality-focused buyers.
              </p>

              <p className="text-2xl leading-9">
                Each chew represents the rich culture of the Himalayas, the dedication of local farmers and dairy communities, and our commitment to sustainable craftsmanship. As Himalayan dog chew suppliers from Nepal, we continue to share Nepal's finest natural dog chew with pet owners, wholesalers, and private label partners worldwide as one of the top suppliers of dog chew.
              </p>

            </div>
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(40,33,25,0.12)]">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(40,33,25,0.12)]">
              <Image
                  src="/churpi.jpeg"
                  alt="Rows of White Himalayan churpi yakcheese chews"
                  fill
                  className="object-cover object-center mix-blend-multiply"
              />
            </div>
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
