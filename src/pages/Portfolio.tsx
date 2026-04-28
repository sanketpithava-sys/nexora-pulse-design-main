import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { portfolio, portfolioCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof portfolio[number] | null>(null);
  const items = filter === "All" ? portfolio : portfolio.filter(p => p.category === filter);

  return (
    <Layout>
      <PageHero
        eyebrow="Portfolio"
        title={<>Work we're <span className="gradient-text">proud of</span></>}
        subtitle="A peek at the products, platforms and brands we've helped build with our partners."
      />

      <section className="container py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all",
                filter === c
                  ? "gradient-button-bg text-primary-foreground shadow-elegant"
                  : "glass hover:text-primary"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <button
                onClick={() => setSelected(p)}
                className="group relative block aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-card text-left"
              >
                <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-primary-foreground">
                  <span className="text-[10px] uppercase tracking-[0.18em] opacity-80">{p.category}</span>
                  <h3 className="font-display font-semibold text-xl mt-1">{p.title}</h3>
                  <p className="text-xs mt-1 opacity-80 line-clamp-2">{p.description}</p>
                </div>
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-wider">{p.category}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-card rounded-3xl shadow-elegant max-w-3xl w-full overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-secondary z-10"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <img src={selected.image} alt={selected.title} className="w-full aspect-video object-cover" />
            <div className="p-8">
              <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">{selected.category} · {selected.client}</span>
              <h3 className="font-display text-3xl font-bold mt-2">{selected.title}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">{selected.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map(t => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <CTASection />
    </Layout>
  );
};

export default Portfolio;
