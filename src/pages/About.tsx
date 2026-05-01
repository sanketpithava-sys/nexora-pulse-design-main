import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTASection from "@/components/CTASection";
import { stats } from "@/data/site";



const timeline = [
  { year: "2024", title: "The Beginning", desc: "Nexora started its journey in 2024 with a small team of just two people, driven by a vision to build innovative digital solutions." },
  { year: "2025", title: "First Client", desc: "In 2025, we secured our first client, marking the beginning of our professional journey." },
  { year: "2025", title: "Going Global", desc: "Later in 2025, we took a significant step forward by closing our first international client, expanding beyond local boundaries." },
  { year: "2025", title: "First ERP System", desc: "We also developed our first ERP system, demonstrating our ability to handle complex and scalable solutions." },
  { year: "2026", title: "Growth Phase", desc: "In 2026, Nexora is in a strong growth phase, having completed 20+ projects and continuously improving our processes, quality, and client relationships." },
];

const About = () => (
  <Layout>
    <PageHero
      eyebrow="About Nexora"
      title={<>We design, build and scale <span className="gradient-text">remarkable software</span></>}
      subtitle="A multidisciplinary studio of designers, engineers and strategists turning bold ideas into the products that move industries forward."
    />

    {/* Founder Section */}
    <section className="container py-24 max-w-4xl">
      <div className="text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Leadership</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Sanket Pithava</h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="text-primary font-medium text-lg mt-2 uppercase tracking-wider">Founder & CEO</div>
        </Reveal>
        
        <div className="mt-12 space-y-8">
          <Reveal delay={240}>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Nexora was born out of a desire to bridge the gap between complex engineering and human-centered design. Under Sanket's leadership, the studio has grown into a multidisciplinary team that partners with ambitious founders to build products that define their categories.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <p className="text-muted-foreground text-xl leading-relaxed">
              With a deep focus on technical excellence and aesthetic precision, Sanket ensures that every project Nexora ships is not just functional, but remarkable.
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="pt-10 flex justify-center gap-16 border-t border-border mt-10">
              {stats.slice(0, 2).map((s, i) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-bold gradient-text"><Counter end={s.value} suffix={s.suffix} /></div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Journey Map (Timeline) */}
    <section className="container py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Our Journey</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">The Roadmap of Innovation</h2>
        </Reveal>
      </div>
      
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        {timeline.map((t, i) => (
          <Reveal key={t.year} delay={i * 100}>
            <div className={`relative grid md:grid-cols-2 gap-6 mb-12 ${i % 2 === 0 ? "" : "md:[&>:first-child]:order-2"}`}>
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="font-display text-2xl font-bold gradient-text">{t.year}</div>
                <h3 className="font-display font-semibold text-lg mt-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.desc}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full gradient-button-bg ring-4 ring-background shadow-glow" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CTASection title="Want to build something with us?" subtitle="Tell us about your idea — we'll bring the craft." />
  </Layout>
);

export default About;
