import { useState } from "react";
import { Compass, Map, Layout as LayoutIcon, Code2, ShieldCheck, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "01",
    title: "Discovery & Alignment",
    icon: Compass,
    points: ["Business Goals", "Functional Requirements", "Ideation Workshop"],
  },
  {
    num: "02",
    title: "Strategy & Planning",
    icon: Map,
    points: ["Product Roadmap", "Scope Definition", "Timeline & Milestones"],
  },
  {
    num: "03",
    title: "Architecture & Design",
    icon: LayoutIcon,
    points: ["System Architecture", "User Flow Mapping", "Technology Stack"],
  },
  {
    num: "04",
    title: "Development & Integration",
    icon: Code2,
    points: ["Feature Development", "API & Integrations", "AI / Automation Setup"],
  },
  {
    num: "05",
    title: "Testing & Quality",
    icon: ShieldCheck,
    points: ["Functional Testing", "Performance Review", "Security Validation"],
  },
  {
    num: "06",
    title: "Launch & Support",
    icon: Rocket,
    points: ["Production Deployment", "Monitoring & Optimization", "Ongoing Support"],
  },
];

const ProcessTimeline = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="blob bg-primary-glow/15 h-96 w-96 -top-24 right-0 floating-delayed" />
      <div className="blob bg-accent/10 h-80 w-80 bottom-0 -left-20 floating" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">How we deliver</span></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
              Our <span className="gradient-text">Process</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-muted-foreground mt-4">
              A transparent, milestone-driven journey — from first idea to a thriving product.
            </p>
          </Reveal>
        </div>

        {/* Timeline rail */}
        <div className="relative">
          {/* Background line */}
          <div className="hidden lg:block absolute top-10 left-[6%] right-[6%] h-[2px] bg-border rounded-full" />
          {/* Active gradient line */}
          <div
            className="hidden lg:block absolute top-10 left-[6%] h-[2px] gradient-button-bg rounded-full transition-all duration-700 ease-out"
            style={{ width: `calc((${active} / ${steps.length - 1}) * 88%)` }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === active;
              const isDone = i < active;
              return (
                <Reveal key={s.num} delay={i * 100}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "group relative w-full text-left rounded-3xl p-5 transition-all duration-500",
                      "glass shadow-soft hover:-translate-y-2 hover:shadow-elegant",
                      isActive && "shadow-elegant -translate-y-2"
                    )}
                  >
                    {/* Numbered circle on the rail */}
                    <div className="flex justify-center -mt-12 mb-4">
                      <div
                        className={cn(
                          "relative h-20 w-20 rounded-full flex items-center justify-center font-display font-bold text-white text-lg transition-all duration-500",
                          (isActive || isDone)
                            ? "gradient-button-bg shadow-glow scale-110"
                            : "bg-gradient-to-br from-slate-300 to-slate-400"
                        )}
                      >
                        <Icon className="h-7 w-7" />
                        <span className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-background text-primary text-xs flex items-center justify-center font-bold ring-2 ring-primary/30 shadow-soft">
                          {i + 1}
                        </span>
                        {isActive && (
                          <span className="absolute inset-0 rounded-full animate-ping opacity-30 gradient-button-bg" />
                        )}
                      </div>
                    </div>

                    <h3 className={cn(
                      "font-display font-semibold text-base text-center mb-3 transition-colors",
                      isActive ? "gradient-text" : "text-foreground"
                    )}>
                      {s.title}
                    </h3>

                    <ul className={cn(
                      "space-y-1.5 text-xs text-muted-foreground transition-all duration-500 overflow-hidden",
                      isActive ? "max-h-40 opacity-100" : "max-h-40 sm:max-h-0 sm:opacity-0 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100"
                    )}>
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full gradient-button-bg shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
