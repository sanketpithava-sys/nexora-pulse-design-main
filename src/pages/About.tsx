import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTASection from "@/components/CTASection";
import { stats, team } from "@/data/site";
import aboutImg from "@/assets/about-team.jpg";
import { Target, Eye, Heart } from "lucide-react";

const timeline = [
  { year: "2014", title: "Founded in Stockholm", desc: "Nexora opens its doors with a 4-person team and a big idea." },
  { year: "2017", title: "First enterprise client", desc: "We deliver our first multi-region cloud platform." },
  { year: "2020", title: "Scaling globally", desc: "Offices in 3 countries, serving teams across 4 continents." },
  { year: "2023", title: "ERP practice launch", desc: "We open a dedicated ERP practice serving 14 markets." },
  { year: "2026", title: "AI-native era", desc: "Rolling out AI-native engineering across every project." },
];

const About = () => (
  <Layout>
    <PageHero
      eyebrow="About Nexora"
      title={<>We design, build and scale <span className="gradient-text">remarkable software</span></>}
      subtitle="A multidisciplinary studio of designers, engineers and strategists turning bold ideas into the products that move industries forward."
    />

    {/* Intro */}
    <section className="container py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <img src={aboutImg} alt="Nexora team" className="rounded-3xl shadow-elegant w-full" loading="lazy" width={1280} height={960} />
        </Reveal>
        <div>
          <Reveal><h2 className="font-display text-3xl md:text-4xl font-bold">Who we are</h2></Reveal>
          <Reveal delay={80}><p className="text-muted-foreground mt-5 leading-relaxed">Nexora is a 60+ person studio with a relentless focus on craft. We partner with ambitious teams — from seed-stage startups to global enterprises — to deliver products that customers love and businesses depend on.</p></Reveal>
          <Reveal delay={160}><p className="text-muted-foreground mt-4 leading-relaxed">We believe great software is the product of clear thinking, deliberate design and disciplined engineering. Every project we take on starts with the question: what does "remarkable" look like here?</p></Reveal>
        </div>
      </div>
    </section>

    {/* Mission Vision Values */}
    <section className="container py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Mission", desc: "To turn ambitious ideas into innovative software that creates lasting impact." },
          { icon: Eye, title: "Vision", desc: "A world where every team has access to world-class product craftsmanship." },
          { icon: Heart, title: "Values", desc: "Craft, candor, curiosity and care — in everything we make and every relationship we build." },
        ].map((v, i) => (
          <Reveal key={v.title} delay={i*100}>
            <div className="glass rounded-3xl p-8 hover-lift shadow-soft h-full">
              <div className="h-12 w-12 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground mb-5">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="container py-20">
      <div className="glass rounded-3xl p-10 md:p-14 shadow-card grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s,i)=>(
          <Reveal key={s.label} delay={i*80}>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text"><Counter end={s.value} suffix={s.suffix} /></div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Team */}
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">The Team</span></Reveal>
        <Reveal delay={80}><h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Meet the people behind Nexora</h2></Reveal>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((m,i)=>(
          <Reveal key={m.name} delay={i*80}>
            <div className="group glass rounded-3xl p-7 text-center hover-lift shadow-soft">
              <div className="mx-auto h-24 w-24 rounded-2xl gradient-button-bg flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shadow-elegant group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {m.initials}
              </div>
              <h3 className="font-display font-semibold text-lg mt-5">{m.name}</h3>
              <div className="text-sm text-primary font-medium">{m.role}</div>
              <p className="text-sm text-muted-foreground mt-3">{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Timeline */}
    <section className="container py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Our Journey</span></Reveal>
        <Reveal delay={80}><h2 className="font-display text-4xl md:text-5xl font-bold mt-3">A decade of building</h2></Reveal>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        {timeline.map((t,i)=>(
          <Reveal key={t.year} delay={i*100}>
            <div className={`relative grid md:grid-cols-2 gap-6 mb-10 ${i%2===0 ? "" : "md:[&>:first-child]:order-2"}`}>
              <div className={`pl-12 md:pl-0 ${i%2===0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="font-display text-2xl font-bold gradient-text">{t.year}</div>
                <h3 className="font-display font-semibold text-lg mt-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full gradient-button-bg ring-4 ring-background" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CTASection title="Want to build something with us?" subtitle="Tell us about your idea — we'll bring the craft." />
  </Layout>
);

export default About;
