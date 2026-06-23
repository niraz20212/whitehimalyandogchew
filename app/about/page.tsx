import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

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

const team = [
  ["Amit Khetan", "Managing Director", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"],
  ["Nishi Khetan", "Sales & Marketing Director", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"],
  ["Dinesh Dhakal", "Finance Manager", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"],
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute left-24 top-28 h-40 w-40 section-bone opacity-60" aria-hidden />
      <div className="absolute right-0 top-80 h-[640px] w-[360px] soft-blob bg-[#f8f3ee]" aria-hidden />

      <div className="container relative grid max-w-4xl gap-10 py-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">Our Story</p>
          <h1 className="mt-4 text-4xl font-black leading-tight">Handmade & Organic</h1>
          <div className="mt-6 space-y-5 text-[13px] leading-7">
            <p>
              At The Mountain Pet Company, we believe dogs deserve better: better nutrition, better ingredients, and better care. Founded on the principle that every chew should be as wholesome as nature intended, we craft premium churpi using time-honored Himalayan traditions.
            </p>
            <p>
              Our journey began when we recognized a gap in the pet industry: too many chews were mass-produced with additives and questionable sourcing. In response, we partnered directly with Nepalese herders and farmers to create natural, protein-rich yak churpi from free-range, grass-fed animals.
            </p>
            <p>
              Every product is carefully prepared in our USDA-registered facility in Kathmandu, where we combine generations of artisanal knowledge with rigorous quality testing.
            </p>
          </div>
        </div>
        <div className="relative h-[360px]">
          <span className="absolute -right-16 top-10 h-44 w-44 rounded-full bg-[#f8f3ee]" aria-hidden />
          <span className="absolute -right-8 bottom-20 h-12 w-12 rounded-full bg-[#ffb83f]" aria-hidden />
          <Image
            src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80"
            alt="Rows of Himalayan yak chews"
            fill
            priority
            sizes="40vw"
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="container relative grid max-w-3xl grid-cols-2 gap-5 py-8 md:grid-cols-4">
        {stats.map(([number, label, color]) => (
          <div key={label} className="paw-bg rounded-md border bg-[#f8f3ee] p-6" style={{ borderColor: color }}>
            <p className="text-3xl font-black">{number}</p>
            <p className="mt-1 text-[11px] text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      <div className="container relative max-w-5xl py-16 text-center">
        <SectionHeading title="Purity, Ethics & Tradition" text="Because when it comes to your dog's health, only the purest will do." />
        <div className="mx-auto mt-8 max-w-5xl space-y-5 text-[12px] leading-7">
          <p>At The Mountain Pet Company, we believe that great health begins with great ingredients and every chew is crafted with a steadfast commitment to purity, ethics, and Himalayan tradition.</p>
          <p>We go beyond just making treats - we build trust. Our churpi is made using time-honored Himalayan methods, with milk sourced ethically from local yak and cow herders. No fillers. No artificial preservatives. No common allergens.</p>
          <p>Every chew supports more than just pet health - it uplifts local Himalayan communities and helps preserve an ancient tradition that has stood the test of time.</p>
        </div>
      </div>

      <div className="container relative max-w-4xl pb-20">
        <SectionHeading title="Our Team" />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {team.map(([member, role, image]) => (
            <div key={member} className="text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-[#e9e4df]">
                <Image src={image} alt={member} fill sizes="128px" className="object-cover" />
              </div>
              <span className="mx-auto -mt-3 block h-7 w-7 rounded-full border-4 border-white bg-white shadow" />
              <h3 className="mt-3 font-black">{member}</h3>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#294f78]">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
