import { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 gradient-hero-bg" />
      <div className="blob bg-primary-glow/30 h-80 w-80 -top-10 -left-10 floating" />
      <div className="blob bg-accent/30 h-72 w-72 top-20 right-0 floating-delayed" />
      <div className="blob bg-brand-violet/20 h-96 w-96 -bottom-32 left-1/3" />

      <div className="container relative py-24 md:py-32 text-center">
        {eyebrow && (
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-6 shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={160}>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default PageHero;
