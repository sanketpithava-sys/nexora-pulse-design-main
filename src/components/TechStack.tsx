import { useState } from "react";
import {
  Atom, Server, Smartphone, Cloud, Database,
  Code2, Flame, Layers, Boxes, Zap, Globe, Wind, Hexagon, Cpu, CircleDot, Triangle, Square
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Tech = { name: string; icon: any; color: string };

const tabs: { key: string; label: string; icon: any; items: Tech[] }[] = [
  {
    key: "frontend",
    label: "Frontend",
    icon: Atom,
    items: [
      { name: "React", icon: Atom, color: "from-sky-400 to-cyan-400" },
      { name: "Next.js", icon: Triangle, color: "from-slate-700 to-slate-900" },
      { name: "Angular", icon: Hexagon, color: "from-rose-500 to-red-600" },
      { name: "Vue", icon: Layers, color: "from-emerald-400 to-green-600" },
      { name: "TypeScript", icon: Code2, color: "from-blue-500 to-indigo-600" },
      { name: "Tailwind", icon: Wind, color: "from-cyan-400 to-sky-500" },
      { name: "Svelte", icon: Flame, color: "from-orange-500 to-red-500" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: Hexagon, color: "from-green-500 to-emerald-600" },
      { name: ".NET", icon: Square, color: "from-violet-500 to-purple-700" },
      { name: "Laravel", icon: Flame, color: "from-rose-500 to-red-600" },
      { name: "Python", icon: Code2, color: "from-yellow-400 to-blue-500" },
      { name: "Go", icon: Zap, color: "from-sky-400 to-blue-600" },
      { name: "NestJS", icon: Boxes, color: "from-rose-600 to-pink-700" },
      { name: "GraphQL", icon: CircleDot, color: "from-pink-500 to-fuchsia-600" },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    icon: Smartphone,
    items: [
      { name: "React Native", icon: Atom, color: "from-sky-400 to-cyan-500" },
      { name: "Flutter", icon: Triangle, color: "from-sky-400 to-blue-600" },
      { name: "Swift", icon: Zap, color: "from-orange-500 to-red-500" },
      { name: "Kotlin", icon: Hexagon, color: "from-violet-500 to-purple-600" },
      { name: "Expo", icon: Globe, color: "from-slate-700 to-slate-900" },
    ],
  },
  {
    key: "cloud",
    label: "Cloud",
    icon: Cloud,
    items: [
      { name: "AWS", icon: Cloud, color: "from-amber-500 to-orange-600" },
      { name: "Azure", icon: Cloud, color: "from-sky-500 to-blue-700" },
      { name: "GCP", icon: Cloud, color: "from-blue-500 to-emerald-500" },
      { name: "Firebase", icon: Flame, color: "from-amber-500 to-orange-600" },
      { name: "Docker", icon: Boxes, color: "from-sky-500 to-blue-600" },
      { name: "Kubernetes", icon: Hexagon, color: "from-blue-500 to-indigo-700" },
      { name: "Vercel", icon: Triangle, color: "from-slate-700 to-slate-900" },
    ],
  },
  {
    key: "database",
    label: "Database",
    icon: Database,
    items: [
      { name: "MongoDB", icon: Database, color: "from-emerald-500 to-green-700" },
      { name: "MySQL", icon: Database, color: "from-sky-500 to-orange-500" },
      { name: "PostgreSQL", icon: Database, color: "from-sky-600 to-indigo-700" },
      { name: "Redis", icon: Cpu, color: "from-rose-500 to-red-700" },
      { name: "Supabase", icon: Database, color: "from-emerald-500 to-teal-600" },
      { name: "SQLite", icon: Database, color: "from-slate-500 to-slate-700" },
    ],
  },
];

const TechStack = () => {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;
  // duplicate items for seamless marquee
  const loop = [...current.items, ...current.items];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-soft-bg" />
      <div className="blob bg-primary-glow/25 h-80 w-80 -top-20 -left-10 floating" />
      <div className="blob bg-accent/20 h-72 w-72 bottom-0 right-10 floating-delayed" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Tech Stack</span></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
              Powered by a <span className="gradient-text">modern</span> tech stack
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-muted-foreground mt-4">
              We pick the right tool for the job — battle-tested frameworks across every layer of the stack.
            </p>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = t.key === active;
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                    isActive
                      ? "gradient-button-bg text-primary-foreground shadow-elegant scale-105"
                      : "glass text-foreground/70 hover:text-primary hover:-translate-y-0.5"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {t.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Horizontal scroller */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden py-6">
            <div
              key={active}
              className="flex gap-6 w-max marquee"
              style={{ animationDuration: "35s" }}
            >
              {loop.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${i}`}
                    className="group relative shrink-0 w-44 h-44 rounded-3xl glass shadow-soft hover-lift flex flex-col items-center justify-center gap-3 cursor-default overflow-hidden"
                  >
                    {/* glow border on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{ boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.5)" }} />
                    <div className={cn(
                      "h-16 w-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-card transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
                      tech.color
                    )}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="font-display font-semibold text-sm text-foreground">{tech.name}</div>
                    <div className="absolute inset-x-0 bottom-0 h-1 gradient-button-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
