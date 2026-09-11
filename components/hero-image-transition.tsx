"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroImageTransition({
  firstImage,
  secondImage,
  alt,
  delay = 3000,
}: {
  firstImage: string;
  secondImage: string;
  alt: string;
  delay?: number;
}) {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecond(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="relative h-full w-full cursor-pointer"
      onClick={() => setShowSecond((prev) => !prev)}
    >
      <Image
        src={firstImage}
        alt={alt}
        fill
        priority
        className={`object-cover object-center transition-opacity duration-700 ease-in-out ${showSecond ? "opacity-0" : "opacity-100"}`}
      />
      <Image
        src={secondImage}
        alt={alt}
        fill
        className={`object-cover object-center transition-opacity duration-700 ease-in-out ${showSecond ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
