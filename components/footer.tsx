import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const instagramUrl = "https://www.instagram.com/white_himalayan?igsh=MWJsMHV4eTZuMXJzMg%3D%3D";
const facebookUrl = "https://www.facebook.com/share/19Hf9BmujK/?mibextid=wwXIfr";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#294f78] text-white">
      <div className="absolute left-8 top-6 h-56 w-56 opacity-10 paw-bg" aria-hidden />
      <div className="container grid max-w-4xl gap-12 py-11 text-[11px] md:grid-cols-3">
        <div>
          <p className="font-black">Contact</p>
          <div className="mt-4 grid gap-2 text-white/90">
            <p className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-primary" /> Birtamode-5,Jhapa,Nepal
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-primary" /> +977 9826152030 , +977 9761819050
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-primary" /> whitehimalayan4@gmail.com
            </p>
          </div>
        </div>
        <div>
          <p className="font-black">Links</p>
          <div className="mt-4 grid gap-2 text-white/90">
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/process">Our Process</Link>
          </div>
        </div>
        <div>
          <p className="font-black">White Himalayan Dog Chew Pvt. Ltd</p>
          <p className="mt-4 max-w-xs leading-6 text-white/90">
            Authentic Himalayan Dog Chew,Direct from the source. From the Himalayan to Happy Dogs WorldWide. Nutritious, Long-
            Lasting, and Naturally Delicious
          </p>
          <div className="mt-5 flex gap-3">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit White Himalayan on Instagram"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-black"
            >
              <Instagram className="h-3 w-3" />
            </Link>
            <Link
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit White Himalayan on Facebook"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-black"
            >
              <Facebook className="h-3 w-3" />
            </Link>
            <Link
                href="mailto:whitehimalayan4@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email White Himalayan"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-black"
            >
              <Mail className="h-3 w-3 text-white" />
            </Link>

          </div>
        </div>
      </div>
      <div className="pb-5 text-center text-[11px] text-white/85">
        Copyright &copy; 2026 White Himalayan Dog Chew. All rights reserved.
      </div>
    </footer>
  );
}
