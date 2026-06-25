import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact White Himalayan Dog Chew for product questions, wholesale, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <section className="container py-14 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Questions about sizing, wholesale, or sourcing?"
        text="Send a note and our team will help you find the right next step."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <form className="grid gap-4 rounded-lg border border-border bg-card p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="First name" aria-label="First name" />
            <Input placeholder="Last name" aria-label="Last name" />
          </div>
          <Input type="email" placeholder="Email address" aria-label="Email address" />
          <Input placeholder="Subject" aria-label="Subject" />
          <textarea
            className="min-h-36 rounded-lg border border-input bg-background p-4 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="How can we help?"
            aria-label="Message"
          />
          <Button type="submit" className="sm:w-fit">
            Send Message
          </Button>
        </form>
        <div className="space-y-5">
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="text-xl font-semibold">Business Information</h2>
            <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
               whitehimalayandogchew.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                +977 9826152030
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                Birtamode-5,Jhapa,Nepal
              </p>
            </div>
          </div>
          {/*<div className="overflow-hidden rounded-lg border border-border bg-card">*/}
          {/*  <iframe*/}
          {/*    title="Google map showing Denver, Colorado"*/}
          {/*    src="https://www.google.com/maps?q=Denver%20Colorado&output=embed"*/}
          {/*    className="h-72 w-full"*/}
          {/*    loading="lazy"*/}
          {/*    referrerPolicy="no-referrer-when-downgrade"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
