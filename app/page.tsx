import Image from "next/image";
import Link from "next/link";
import { Award, Dumbbell, HandHeart, Leaf, Play, Tags, WheatOff } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { OrganicImage } from "@/components/organic-image";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/data";

const heroImage = "/hero-image.jpg";
const setApartBelowImages="/sectioningredients.jpg"
const videoImage = "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=1300&q=85";
const storyImage = "/kukur1.jpg";
const bannerImage = "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=900&q=85";
const instagramUrl = "https://www.instagram.com/white_himalayan?igsh=MWJsMHV4eTZuMXJzMg%3D%3D";
const galleryImages = [
  "https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581092335397-9fa3411086d4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=80",
];

const apart = [
  {
    title: "100% Natural",
    text: "Made from simple, natural ingredients with no artificial additives, preservatives, or chemicals.",
    icon: Leaf,
  },
  {
    title: "Premium Quality",
    text: "Crafted in Nepal using traditional methods and high-quality milk to ensure superior taste, safety, and consistency.",
    icon: Award,
  },
  {
    title: "High Protein",
    text: "Naturally rich in protein to support strong muscles, healthy teeth, and overall well-being.",
    icon: Dumbbell,
  },
  {
    title: "Supporting Farming Communities",
    text: "We work closely with local dairy farmers, ensuring fair trade, better livelihoods, and a stronger rural economy.",
    icon: HandHeart,
  },
  {
    title: "Private Label",
    text: "Custom branding and packaging solutions tailored for your business. Build your brand with our trusted quality.",
    icon: Tags,
  },
  {
    title: "Gluten Free",
    text: "Naturally gluten free, making it a safe and healthy chew for dogs with sensitivities.",
    icon: WheatOff,
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            description: site.description,
          }),
        }}
      />

      <section className="relative min-h-[610px] overflow-hidden bg-white">
        <div className="absolute left-0 top-0 h-full w-[300px] opacity-70 paw-bg" aria-hidden />
        <div className="absolute right-[18%] top-0 h-[600px] w-[600px] rounded-full bg-[#f7f2ec]" aria-hidden />
        <div className="container relative grid min-h-[610px] max-w-5xl items-center gap-10 py-10 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionReveal>
            <div>
              <h1 className="max-w-[420px] text-[44px] font-black leading-[1.18] tracking-normal text-[#242424] sm:text-[56px]">
                Authentic Himalayan Dog Chews
              </h1>
              <p className="mt-7 max-w-[430px] text-[22px] leading-9 text-[#2f2f2f]">
                Crafted in the heart of the Himalayas, White Himalayan Dog Chews are made from yak and cow milk using generations of expertise, creating a 100% natural, protein-rich, and long-lasting chew trusted by pet owners and loved by dogs worldwide.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9]">

              {/* Decorative elements (optional keep/remove) */}
              <span className="absolute left-14 top-36 h-24 w-16 rounded-full bg-primary" />
              <span className="absolute bottom-4 right-20 h-16 w-24 rotate-12 rounded-full bg-[#ffbd3e]" />
              {/*<span className="absolute bottom-0 left-48 h-36 w-72 -rotate-12 rounded-[50%] bg-[#0793a7]" />*/}

              {/* IMAGE FRAME */}
              <div className="relative w-full aspect-[3/4] max-h-[420px] md:max-h-[585px]">
                <div className="absolute inset-0 overflow-hidden rounded-xl border-2 md:border-4 lg:border-8 border-white/20">
                  <Image
                      src={heroImage}
                      alt="Dog enjoying a Himalayan chew"
                      fill
                      className="object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </MotionReveal>
        </div>
      </section>

      {/*<section className="py-24">*/}
      {/*  <div className="container max-w-4xl">*/}
      {/*    <div className="relative mx-auto aspect-video max-w-[880px] overflow-hidden bg-black">*/}
      {/*      <Image src={videoImage} alt="Dog chewing churpi" fill sizes="900px" className="object-cover opacity-75" />*/}
      {/*      <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white text-white" aria-label="Play video">*/}
      {/*        <Play className="h-7 w-7 fill-current" />*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section className="relative overflow-hidden py-20">
        <div className="container max-w-7xl px-6 grid gap-16 lg:grid-cols-2 lg:items-center">
          <MotionReveal>
            <Image
                src={storyImage}
                alt="Small dog being offered a natural chew"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
            />
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <p className="text-2xl font-black uppercase tracking-[0.25em] text-primary">
              About White Himalayan Dog Chew
            </p>
            <p className="mt-7 text-xl leading-10">
              White Himalayan Dog Chew is a premium, all-natural dog chew crafted in
              Himalayas of Nepal using traditional Himalayan cheesemaking techniques
              passed down through generations. Made from pure, high-quality milk
              with no artificial additives or preservatives, it offers a safe and
              nutritious chewing experience for dogs. It is naturally rich in
              protein and highly durable supporting dental health. Each chew is
              carefully crafted and slowly dried to ensure long-lasting enjoyment.
              Rooted in Himalayan heritage, our product reflects authenticity,
              purity, and craftsmanship in every piece. Loved by dogs worldwide, it
              is a healthy and satisfying natural treat.
            </p>
            <Button asChild className="mt-8 rounded-full px-9 text-lg">
              <Link href="/about">Read More</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>



      <section className="py-20">
        <SectionHeading title="What sets us apart" />

        {/* Rectangle Image */}
        <div className="container mt-16 flex justify-center">
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl">
            <Image
                src={setApartBelowImages}
                alt="What sets us apart"
                width={1200}
                height={500}
                className="h-auto w-full object-contain"
                priority
            />
          </div>
        </div>

        <div className="container mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apart.map((item) => (
              <div
                  key={item.title}
                  className="group min-h-[300px] rounded-xl bg-[#f8f3ee] px-8 py-10 text-center text-[#282828] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6F4E37] hover:shadow-lg"
              >
  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary shadow-[0_10px_28px_rgba(0,0,0,.08)] transition-all duration-300 group-hover:bg-[#8B5E3C] group-hover:text-white">
    <item.icon className="h-10 w-10" />
  </span>

                <h3 className="mt-6 text-2xl font-black leading-tight transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-base font-medium leading-7 text-[#333] transition-colors duration-300 group-hover:text-white">
                  {item.text}
                </p>
              </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="relative mx-auto grid max-w-4xl items-center gap-6 overflow-visible rounded-xl bg-[#294f78] px-8 py-9 text-white md:grid-cols-[1fr_1.2fr_auto]">
          <div>
            {/*<p className="text-xs font-black tracking-[0.2em]">Handmade with love</p>*/}
            <h2 className="mt-3 text-4xl font-black leading-tight">Discover our products</h2>
          </div>
          <div className="relative hidden h-40 md:block">
            {/*<Image src={bannerImage} alt="Happy dogs product banner" fill sizes="40vw" className="object-contain object-bottom" />*/}
            {/*<span className="absolute left-0 top-14 rounded-full bg-white px-5 py-4 text-xl font-black text-[#333]">Yummy</span>*/}
          </div>
          <Button asChild className="rounded-full px-9">
            <Link href="/products">View Products</Link>
          </Button>
        </div>
      </section>
      <section className="container py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black text-white">Our Company</h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { name: "White Himalayan Dog Chew", logo: "/whitehimalayan.jpg" },
            { name: "Green Hill Multitraders", logo: "gh.jpg" },
            { name: "Mahalaxmi Dairy Udhyog", logo: "mt.jpg" },
            { name: "ML Agri", logo: "ml.jpg" },
          ].map((company, i) => (
              <div
                  key={i}
                  className="group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-48 w-full items-center justify-center rounded-xl bg-gray-50 p-2">
                  <img
                      src={company.logo}
                      alt={company.name}
                      className="h-full w-auto max-w-full object-contain transition group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-semibold text-gray-700">
                  {company.name}
                </p>
              </div>
          ))}
        </div>
      </section>

      {/*<section className="py-16">*/}
      {/*  <div className="grid gap-3 px-0 md:grid-cols-5">*/}
      {/*    {galleryImages.map((src, index) => (*/}
      {/*      <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-md">*/}
      {/*        <Image src={src} alt={`Mountain Pet Company process ${index + 1}`} fill sizes="20vw" className="object-cover" />*/}
      {/*        {index === 1 ? <div className="absolute inset-0 flex items-center justify-center bg-primary/90 text-2xl text-white">+</div> : null}*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*  <div className="mt-6 text-center">*/}
      {/*    <Button asChild size="sm" className="rounded-full px-8 text-[10px]">*/}
      {/*      <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">*/}
      {/*        View on Instagram*/}
      {/*      </Link>*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
}
