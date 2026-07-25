import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const instagramUrl =
    "https://www.instagram.com/white_himalayan?igsh=MWJsMHV4eTZuMXJzMg%3D%3D";

const facebookUrl =
    "https://www.facebook.com/share/19Hf9BmujK/?mibextid=wwXIfr";

export function Footer() {
  return (
      <footer className="relative overflow-hidden bg-[#294f78] text-white">
        <div
            className="absolute left-8 top-6 h-56 w-56 opacity-10 paw-bg"
            aria-hidden
        />

        <div className="container grid max-w-4xl gap-12 py-12 text-base md:grid-cols-3">
          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold">Contact</h3>

            <div className="mt-5 grid gap-4 text-base text-white/90">
              <p className="flex items-start gap-3 leading-7">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>Birtamode-5, Jhapa, Nepal</span>
              </p>

              <p className="flex items-start gap-3 leading-7">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>+977 9826152030, +977 9761819050</span>
              </p>

              <p className="flex items-start gap-3 leading-7">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>whitehimalayan4@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl font-bold">Links</h3>

            <div className="mt-5 flex flex-col gap-3 text-base text-white/90">
              <Link
                  href="/about"
                  className="transition-colors duration-200 hover:text-white"
              >
                About Us
              </Link>

              <Link
                  href="/products"
                  className="transition-colors duration-200 hover:text-white"
              >
                Products
              </Link>

              <Link
                  href="/faq"
                  className="transition-colors duration-200 hover:text-white"
              >
                FAQ
              </Link>

              <Link
                  href="/process"
                  className="transition-colors duration-200 hover:text-white"
              >
                Our Process
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">
              White Himalayan Dog Chew Pvt. Ltd
            </h3>

            <p className="mt-5 max-w-sm text-base leading-8 text-white/90">
              Authentic Himalayan Dog Chew, direct from the source. From the
              Himalayas to happy dogs worldwide. Nutritious, long-lasting, and
              naturally delicious.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit White Himalayan on Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black transition-transform hover:scale-105"
              >
                <Instagram className="h-6 w-6" />
              </Link>

              <Link
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit White Himalayan on Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black transition-transform hover:scale-105"
              >
                <Facebook className="h-6 w-6" />
              </Link>

              <Link
                  href="mailto:whitehimalayan4@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email White Himalayan"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black transition-transform hover:scale-105"
              >
                <Mail className="h-6 w-6 text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-base text-white/85">
          Copyright &copy; 2026 White Himalayan Dog Chew. All rights reserved.
        </div>
      </footer>
  );
}