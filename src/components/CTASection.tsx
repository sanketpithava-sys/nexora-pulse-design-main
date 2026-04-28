import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const CTASection = ({
  title = "Ready to turn your idea into innovation?",
  subtitle = "Let's design, build and scale something remarkable together.",
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <section className="container my-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-10 md:p-16 text-center text-primary-foreground shadow-elegant">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:24px_24px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
              <Sparkles className="h-3.5 w-3.5" /> Let's build
            </span>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/85 max-w-xl mx-auto">{subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:-translate-y-0.5 transition-all">
                <Link to="/contact">Start a project <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white border border-white/30 hover:bg-white/10 hover:text-white">
                <Link to="/portfolio">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTASection;
