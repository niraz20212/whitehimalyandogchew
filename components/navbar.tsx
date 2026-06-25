"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/process", label: "Our Process" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <nav
            className="container relative flex h-[92px] max-w-6xl items-center justify-center"
            aria-label="Main navigation"
        >
          <Link
              href="/"
              className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-0"
              aria-label="White Himalayan Dog Chew home"
          >
            <Image
                src="/logo.svg"
                alt="White Himalayan Dog Chew logo"
                width={120}
                height={100}
                priority
                className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <div className="hidden items-center gap-14 pl-56 lg:flex">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="
                relative
                text-lg
                font-semibold
                tracking-wide
                text-[#2B2B2B]
                transition-all
                duration-300
                hover:text-[#8B5E3C]
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-[#8B5E3C]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
                >
                  {link.label}
                </Link>
            ))}
          </div>

          <div className="absolute right-4 flex items-center gap-2 lg:hidden">
            <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                  <X className="h-6 w-6" />
              ) : (
                  <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>

        {open && (
            <div className="border-t border-border bg-white lg:hidden">
              <div className="container grid gap-2 py-4">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="
                  rounded-xl
                  px-4
                  py-4
                  text-lg
                  font-semibold
                  text-[#2B2B2B]
                  transition-all
                  duration-300
                  hover:bg-[#F6EEE8]
                  hover:text-[#8B5E3C]
                "
                        onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                ))}
              </div>
            </div>
        )}
      </header>
  );
}