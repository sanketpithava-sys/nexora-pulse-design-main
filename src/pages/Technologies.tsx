import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { technologies } from "@/data/site";

const Technologies = () => (
  <Layout>
    <PageHero
      eyebrow="Technologies"
      title={<>The <span className="gradient-text">stack</span> we ship with</>}
      subtitle="A modern, battle-tested toolkit selected for performance, reliability and developer joy."
    />

    <section className="container py-16 space-y-12">
      {technologies.map((cat, i) => (
        <Reveal key={cat.category} delay={i*80}>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-1 rounded-full gradient-button-bg" />
              <h2 className="font-display text-2xl md:text-3xl font-bold">{cat.category}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((t, idx) => (
                <Reveal key={t} delay={idx*30}>
                  <div className="group glass rounded-2xl px-6 py-4 hover-lift shadow-soft hover:shadow-glow transition-all cursor-default">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg gradient-button-bg flex items-center justify-center text-primary-foreground font-display font-bold text-sm group-hover:scale-110 transition-transform">
                        {t.charAt(0)}
                      </div>
                      <span className="font-medium">{t}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>

    <CTASection title="Need a stack recommendation?" subtitle="We'll match the right tools to your problem — no fad-chasing." />
  </Layout>
);

export default Technologies;
