import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Himalayan yak chews, sizing, ingredients, and safety.",
};

export default function FaqPage() {
  return (
    <section className="container max-w-4xl py-14 sm:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Answers before your dog starts chewing"
        text="Everything from sizing and safety to ingredients and farmer sourcing."
      />
      <div className="mt-10">
        <FaqList />
      </div>
    </section>
  );
}
