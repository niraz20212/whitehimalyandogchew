import type { Metadata } from "next";
import Image from "next/image";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Process",
  description: "See the eight-step process behind our premium Himalayan yak chews.",
};

export default function ProcessPage() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      <div className="absolute right-0 top-24 h-[620px] w-[320px] rounded-l-[50%] bg-[#f8f3ee]" aria-hidden />
      <div className="container relative max-w-3xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">Our Process</p>
          <h1 className="mt-3 text-3xl font-black leading-tight">
            Step-by-Step Manufacturing Process
          </h1>
          <p className="mt-5 text-[13px] leading-6 text-[#333]">
            We take pride in preserving Himalayan tradition while following a careful manufacturing process for safe, consistent, long-lasting dog chews.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl gap-11">
          {processSteps.map((step, index) => {
            const image = "image" in step ? step.image : undefined;
            const imageBlock = (
              <div className="relative h-36 overflow-hidden rounded-xl">
                {image ? <Image src={image} alt={step.title} fill sizes="320px" className="object-cover" /> : null}
              </div>
            );
            const textBlock = (
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Step {index + 1}</p>
                <h2 className="mt-2 text-base font-black">{step.title}</h2>
                <p className="mt-4 text-[12px] leading-6 text-[#333]">{step.text}</p>
              </div>
            );

            return (
              <div key={step.title} className="grid gap-7 md:grid-cols-2 md:items-center">
                {index % 2 === 0 ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
