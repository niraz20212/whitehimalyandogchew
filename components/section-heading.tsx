import { Badge } from "@/components/ui/badge";

export function SectionHeading({
                                 eyebrow,
                                 title,
                                 text,
                                 align = "center",
                               }: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
      <div
          className={
            align === "center"
                ? "mx-auto max-w-3xl text-center"
                : "max-w-2xl"
          }
      >
        {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}

        <h2 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h2>

        {text ? (
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              {text}
            </p>
        ) : null}
      </div>
  );
}