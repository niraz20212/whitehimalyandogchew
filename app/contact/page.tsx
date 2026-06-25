import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact White Himalayan Dog Chew for product questions, wholesale, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#f8efe4] py-14 sm:py-20">
      <div className="absolute inset-0 bone-bg opacity-[0.06]" aria-hidden="true" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a5794d]">Contact</p>

          <p className="mt-4 text-base leading-7 text-[#765d45] sm:text-lg">
            Get in touch with our team for wholesale, export, and private label solutions.
          </p>
        </div>

        <div className="mt-11 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
          <ContactForm />
          <aside className="grid gap-5">
            <div className="overflow-hidden rounded-lg border border-[#e5d7c4] bg-white shadow-[0_24px_70px_rgba(93,61,33,0.1)]">
              <div className="relative h-48">
                <Image
                  src="/churpi.jpg"
                  alt="Natural Himalayan dog chews"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d2919]/55 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f8dfbd]">Premium support</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-normal text-white">We are here for every chew question.</h2>
                </div>
              </div>
              <div className="grid gap-3 p-5">
                <ContactDetail
                  icon={<Mail className="h-5 w-5" aria-hidden="true" />}
                  label="Email"
                  value="whitehimalayandogchew@gmail.com"
                />
                <ContactDetail icon={<Phone className="h-5 w-5" aria-hidden="true" />} label="Phone" value="+977 9826152030,+977 9761819050" />
                <ContactDetail
                  icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
                  label="Location"
                  value="Birtamode-5, Jhapa, Nepal"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">


            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 border-b border-[#efe4d6] pb-4 last:border-b-0 last:pb-0">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f1dfc8] text-[#93683f]">{icon}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#a5794d]">{label}</p>
        <p className="mt-1 text-sm font-medium leading-6 text-[#4c3320]">{value}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, text, title }: { icon: ReactNode; text: string; title: string }) {
  return (
    <div className="rounded-lg border border-[#e5d7c4] bg-white/85 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4e6d4] text-[#93683f]">{icon}</span>
        <div>
          <h3 className="font-semibold text-[#3f2a1a]">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-[#765d45]">{text}</p>
        </div>
      </div>
    </div>
  );
}
