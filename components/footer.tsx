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
              <MapPin className="h-3 w-3 text-primary" /> Budhanilkantha-8, Kathmandu, Nepal
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-primary" /> +977 9801230000
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-primary" /> info@whitehimalayandogchew.com
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
          <p className="font-black">Mountain Pet Company</p>
          <p className="mt-4 max-w-xs leading-6 text-white/90">
            Premium Himalayan dog chews using centuries-old traditions and modern quality standards. We deliver natural, long-lasting nutrition that keeps tails wagging.
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
            {[ Twitter, Mail].map((Icon, index) => (
              <span key={index} className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                <Icon className="h-3 w-3" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-5 text-center text-[11px] text-white/85">
        Copyright &copy; 2026 White Himalayan Dog Chew. All rights reserved.
      </div>
    </footer>
  );
}
