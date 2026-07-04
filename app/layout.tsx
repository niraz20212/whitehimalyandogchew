import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "White Himalayan Churpi Yak Milk Dog Chew",
    template: `%s | ${site.name}`,
  },
  description:
    "Shop White Himalayan dog chew from Nepal: churpi, premium Himalayan yak chew, and natural long lasting dog chews from a trusted supplier.",

  keywords: [
    "White Himalayan",
    "White Himalayan Dog Chew",
    "churpi",
    "churpi dog chew",
    "himalayan churpi",
    "yak milk dog chew",
    "himalayan yak chew",
    "Himalayan dog chew suppliers from Nepal",
    "premium Himalayan yak chew from Nepal",
    "best chew supplier",
    "best chew supplier in Nepal",
    "best dog chew",
    "top supplier of dog chew",
    "supplier of dog chew",
    "natural dog chew",
    "long lasting dog chew",
  ],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: "White Himalayan Churpi Yak Milk Dog Chew",
    description:
      "Shop White Himalayan churpi dog chews from Nepal from a trusted dog chew supplier of premium yak milk chews.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "White Himalayan yak milk churpi dog chew from Nepal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Himalayan Churpi Yak Milk Dog Chew",
    description:
      "Discover White Himalayan dog chew products from Nepal: churpi, premium yak chew, and natural dog chews.",
    images: ["/hero-image.jpg"],
  },
  icons : {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
