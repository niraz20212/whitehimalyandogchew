import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Process",
  description: "See the eight-step process behind our premium Himalayan yak chews.",
};

const manufacturingSteps = [
  {
    step: "STEP 1",
    title: "Fresh Yak and Cow Milk Collection",
    text: "Our process begins with sourcing fresh yak and cow milk from local Himalayan farmers. We use fresh, wholesome, high SNF milk from grass-fed yaks and cows. This natural beginning helps preserve the authentic quality and character of our Himalayan cheese.",
    image: "/step1.PNG",
    imageClass: "",
  },
  {
    step: "STEP 2",
    title: "Milk Processing",
    text: "The fresh milk is naturally filtered using cheesecloth and gently heated to around 30-40° Celsius. Then it is passed through cream separator to remove cream. Then the filtered milk is carefully heated to approximately 85–90°C, creating the optimal conditions for the coagulation process that follows. Generations of expertise help us preserve the milk’s natural qualities.",
    image: "/step2.PNG",
    imageClass: "",
  },
  {
    step: "STEP 3",
    title: "Curd Formation",
    text: "The milk is naturally coagulated using lime juice to form fresh curds. This traditional process separates the curds from the whey. The natural curds become the foundation of our Himalayan dog chews. No artificial additives or preservatives are used during the process.",
    image: "/step3.PNG",
    imageClass: "",
  },
  {
    step: "STEP 4",
    title: "Pressing & Shaping",
    text: "Once the curds are prepared, they are carefully wrapped and placed under dense weights. The curds are gently compressed over several days, allowing moisture to leave gradually and naturally. This slow, time-honored process creates the firm, dense structure that makes our chews naturally long-lasting. Passed down through generations, this traditional craftsmanship remains an essential part of our Himalayan cheese-making heritage.",
    image: "/step4.PNG",
    imageClass: "",
  },
  {
    step: "STEP 5",
    title: "Cutting and sizing",
    text: "The pressed blocks are then unwrapped and kept in light natural smoke for 3-4 days and carefully cut into different sizes and shapes. Each piece is prepared according to the required chew size. The process preserves the natural texture and character of the yak cheese chew.",
    image: "/step5.PNG",
    imageClass: "",
  },
  {
    step: "STEP 6",
    title: "Drying & Aging",
    text: "The cheese chews are traditionally dried and naturally aged to gradually reduce moisture and develop their characteristic dense, firm texture. Our time-honored smoke-drying process adds a distinctive natural character while supporting the chew’s long-lasting quality. No artificial flavors, preservatives, or additives are used.",
    image: "/step6.PNG",
    imageClass: "",
  },
  {
    step: "STEP 7",
    title: "Quality Inspection",
    text: "Every batch is carefully inspected by our experienced quality control staff for quality, size, and texture, and consistency. Strict quality and food-safety checks are maintained throughout the production process. Only chews that meet our established standards proceed to the next stage.",
    image: "/step7.PNG",
    imageClass: "md:max-w-md",
  },
  {
    step: "STEP 8",
    title: "Cleaning & Packaging",
    text: "The selected chews are naturally cleaned with pure water, dried (moisture ≤ 14%) and prepared for packaging. They are carefully sized, inspected, and securely packed. The result is a natural, protein-rich, long-lasting chew made with only 3 natural ingredients which is loved by dogs worldwide.",
    image: "/step8.PNG",
    imageClass: "",
  },
] as const;

const galleryPhotos = [
  { src: "/step1.PNG", alt: "Step 1" },
  { src: "/step11.PNG", alt: "Gallery 1" },
  { src: "/step2.PNG", alt: "Step 2" },
  { src: "/step12.PNG", alt: "Gallery 2" },
  { src: "/step3.PNG", alt: "Step 3" },
  { src: "/step4.PNG", alt: "Step 4" },
  { src: "/step10.PNG", alt: "Gallery 3" },
  { src: "/step5.PNG", alt: "Step 5" },
  { src: "/step6.PNG", alt: "Step 6" },
  { src: "/step7.PNG", alt: "Step 7" },
  { src: "/step8.PNG", alt: "Step 8" },
] as const;

export default function ProcessPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-[#a87948] mb-4">Our Process</p>
          <h1 className="text-4xl font-bold text-[#3f2a1a] sm:text-5xl mb-6">
            The Crafting Process Behind Our Himalayan Yak Chews
          </h1>
          <p className="text-lg text-[#765d45] leading-relaxed">
            At White Himalayan Dog Chew, we take pride in preserving time-honored Himalayan traditions to craft authentic, nutritious dog chews. Every stage of our process blends traditional craftsmanship with modern quality standards, ensuring a product that is both naturally authentic and carefully made for safety and quality.
          </p>
        </div>

        <div className="space-y-24">
          {manufacturingSteps.map((step, index) => (
            <div 
              key={step.step} 
              className={`flex flex-col gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className={`w-full md:w-1/2 flex ${step.imageClass ? 'justify-center' : ''}`}>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`h-auto w-full rounded-2xl bg-gray-100 shadow-lg ${step.imageClass}`}
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-[#a87948]">
                  {step.step}
                </p>
                <h2 className="text-3xl font-bold text-[#3f2a1a] sm:text-4xl">
                  {step.title}
                </h2>
                <p className="text-lg text-[#765d45] leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[#a87948] mb-4">Our Gallery</p>
            <h2 className="text-4xl font-bold text-[#3f2a1a] sm:text-5xl">100% Natural, Handmade and Organic</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.slice(0, 8).map((photo) => (
              <div key={photo.src} className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {galleryPhotos.slice(8).map((photo) => (
              <div key={photo.src} className="relative aspect-square w-[calc(50%-8px)] overflow-hidden rounded-2xl bg-gray-100 shadow-sm md:w-[calc(25%-12px)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
