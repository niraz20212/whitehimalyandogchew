import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/15551234567?text=Hi%20White%20Himalayan%20Dog%20Chew%2C%20I%20have%20a%20question."
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#2f6f4f] text-white shadow-soft transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
