import Image from "next/image";
import { cn } from "@/lib/utils";

export function OrganicImage({
  src,
  alt,
  className,
  priority,
  variant = "blob",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  variant?: "blob" | "soft" | "arch";
}) {
  return (
    <div className={cn("relative overflow-hidden", variant === "blob" && "organic-blob", variant === "arch" && "rounded-[2rem_2rem_8rem_2rem]", variant === "soft" && "rounded-xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
