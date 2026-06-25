import type { Metadata } from "next";
import { BadgeCheck, Droplets, Flame, Leaf, Milk, PackageCheck, Scissors, ShieldCheck, SlidersHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Process",
  description: "See the eight-step process behind our premium Himalayan yak chews.",
};

const manufacturingSteps = [
  {
    title: "Milk Collection",
    text: "Fresh yak and cow milk is sourced from local Himalayan farmers.",
    icon: Milk,
  },
  {
    title: "Milk Processing",
    text: "The milk is filtered, heated, and combined with a small amount of salt and lime.",
    icon: Droplets,
  },
  {
    title: "Curd Formation",
    text: "The mixture is naturally coagulated to separate curds from whey.",
    icon: Leaf,
  },
  {
    title: "Pressing & Shaping",
    text: "The curds are pressed between metallic plates to remove moisture and shaped into blocks.",
    icon: SlidersHorizontal,
  },
  {
    title: "Cutting",
    text: "The blocks are cut into various chew sizes and shapes as per order.",
    icon: Scissors,
  },
  {
    title: "Drying & Aging",
    text: "The chews are traditionally smoke-dried to enhance durability, flavor, and shelf life.",
    icon: Flame,
  },
  {
    title: "Quality Inspection",
    text: "Each batch undergoes strict quality and safety checks.",
    icon: ShieldCheck,
  },
  {
    title: "Cleaning and Packaging",
    text: "Selected chew blocks are naturally cleaned with pure water, expertly sized, and securely packaged to ensure a premium-quality Himalayan dog chew that is safe, protein-rich, long-lasting, and made with only 3 natural ingredients.",
    icon: PackageCheck,
  },
] as const;

export default function ProcessPage() {
  return (
    <section className="relative overflow-hidden bg-[#fff8ee] py-14 sm:py-20">
      <div className="absolute inset-0 bone-bg opacity-[0.05]" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#f2dfc2]/60 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-[#ead0aa]/50 blur-3xl" aria-hidden="true" />

      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a87948]">Our Process</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-normal text-[#3f2a1a] sm:text-5xl">
              Himalayan Yak Chew Manufacturing Process
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#765d45]">
            Fresh yak and cow milk is sourced from local Himalayan farmers and transformed into premium Himalayan yak chews for dogs using traditional methods.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
          <aside className="rounded-lg border border-[#ead9c1] bg-white/80 p-6 shadow-[0_20px_60px_rgba(96,64,35,0.1)] backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#9b6b3e] text-white">
              <BadgeCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-normal text-[#3f2a1a]">Made with care, not shortcuts.</h2>
            <p className="mt-4 text-sm leading-7 text-[#765d45]">
              Our process keeps the recipe simple and traditional: milk, salt, and lime, transformed through careful pressing, cutting, drying, inspection, and packaging.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-[#5b4029]">
              <div className="rounded-lg bg-[#f8ead8] px-4 py-3">3 natural ingredients</div>
              <div className="rounded-lg bg-[#f8ead8] px-4 py-3">Protein-rich texture</div>
              <div className="rounded-lg bg-[#f8ead8] px-4 py-3">Long-lasting chew</div>
            </div>
          </aside>

          <div className="relative">
            <div className="absolute left-6 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#d6ad7a] via-[#ead0aa] to-transparent md:block" aria-hidden="true" />
            <div className="grid gap-5">
              {manufacturingSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="relative rounded-lg border border-[#ead9c1] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(96,64,35,0.12)] md:ml-16"
                  >
                    <div className="absolute -left-16 top-5 hidden h-12 w-12 items-center justify-center rounded-lg border border-[#e6d2b6] bg-[#fff8ee] text-[#9b6b3e] shadow-sm md:flex">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f3e0c5] text-[#8d5f34] md:hidden">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b08359]">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-normal text-[#3f2a1a]">{step.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[#765d45]">{step.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
