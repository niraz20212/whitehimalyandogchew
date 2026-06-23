"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <Card className="mx-auto max-w-3xl overflow-hidden bg-card/90 p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <Quote className="h-8 w-8 text-accent" aria-hidden />
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous testimonial"
            onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label="Next testimonial"
            onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.28 }}
        >
          <p className="text-xl leading-8 text-foreground sm:text-2xl">"{active.quote}"</p>
          <div className="mt-6">
            <p className="font-semibold">{active.name}</p>
            <p className="text-sm text-muted-foreground">{active.detail}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </Card>
  );
}
