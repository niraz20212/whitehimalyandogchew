import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Premium Himalayan Yak Chews`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["Himalayan dog chew", "yak chew", "natural dog treats", "grain free dog chew", "premium dog wellness"],
  openGraph: {
    title: `${site.name} | Premium Himalayan Yak Chews`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
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
