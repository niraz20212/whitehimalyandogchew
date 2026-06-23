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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 shadow-[0_3px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <nav className="container relative flex h-[76px] max-w-5xl items-center justify-center" aria-label="Main navigation">
        <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-0" aria-label="White Himalayan Dog Chew home">
          <Image src="/logo.svg" alt="White Himalayan Dog Chew logo" width={98} height={83} priority className="h-16 w-auto" />
        </Link>

        <div className="hidden items-center gap-12 pl-48 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[15px] font-black text-black transition hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="absolute right-4 flex items-center gap-2 lg:hidden">
          <Button variant="outline" size="icon" aria-label="Open menu" onClick={() => setOpen((value) => !value)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container grid gap-2 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 font-medium hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
