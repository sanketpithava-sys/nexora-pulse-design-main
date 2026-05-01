import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Quote, Play, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import CTASection from "@/components/CTASection";
import TechStack from "@/components/TechStack";
import ProcessTimeline from "@/components/ProcessTimeline";
import { services } from "@/data/services";
import { clients, stats, testimonials } from "@/data/site";
import { portfolio } from "@/data/portfolio";
import logo from "@/assets/nexora-logo.jpeg";
import aboutImg from "@/assets/about-team.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero-bg" />
        <div className="blob bg-primary-glow/40 h-96 w-96 -top-20 -left-20 floating" />
        <div className="blob bg-accent/30 h-80 w-80 top-40 right-10 floating-delayed" />
        <div className="blob bg-brand-violet/30 h-96 w-96 bottom-0 left-1/3" />

        <div className="container relative pt-12 pb-24 md:pt-20 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-6 shadow-soft">
                  <Sparkles className="h-3.5 w-3.5 text-accent" /> Premium IT Studio
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                  Turning <span className="gradient-text">ideas</span> into <span className="gradient-text">innovation</span>.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Nexora is a multidisciplinary studio designing and engineering web apps, cloud platforms, and ERP solutions for ambitious teams.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="hero" size="lg">
                    <Link to="/contact">Start a project <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                  <Button asChild variant="glass" size="lg">
                    <Link to="/portfolio"><Play className="h-4 w-4" /> See our work</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {["from-brand-blue to-brand-violet", "from-brand-violet to-accent", "from-accent to-brand-blue", "from-primary to-brand-blue"].map((g, i) => (
                      <div key={i} className={`h-10 w-10 rounded-full bg-gradient-to-br ${g} ring-2 ring-background`} />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Trusted by 22+ teams worldwide</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[520px]">
                {/* Glow halos */}
                <div className="absolute h-[420px] w-[420px] rounded-full gradient-bg blur-3xl opacity-30 animate-glow-pulse" />
                <div className="absolute h-[320px] w-[320px] rounded-full bg-accent/30 blur-3xl floating-delayed" />

                {/* Orbital rings */}
                <div className="absolute h-[440px] w-[440px] rounded-full border border-primary/15" />
                <div className="absolute h-[340px] w-[340px] rounded-full border border-accent/20" />

                {/* Logo card */}
                <div
                  className="relative z-10 floating"
                  style={{ animationDuration: "7s" }}
                >
                  <div className="absolute -inset-8 rounded-[3rem] gradient-bg blur-2xl opacity-40" />
                  <div className="relative glass rounded-[2.5rem] p-10 md:p-14 shadow-elegant ring-1 ring-primary/10">
                    <img
                      src={logo}
                      alt="Nexora logo"
                      className="h-44 w-44 md:h-56 md:w-56 object-contain drop-shadow-[0_10px_30px_hsl(var(--primary-glow)/0.45)]"
                    />
                  </div>
                </div>

                {/* Floating stat cards */}
                <div className="absolute top-4 left-2 md:left-0 glass rounded-2xl p-4 shadow-card floating z-20">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Uptime</div>
                  <div className="font-display font-bold text-2xl gradient-text">99.99%</div>
                </div>
                <div className="absolute bottom-4 right-2 md:right-0 glass rounded-2xl p-4 shadow-card floating-delayed z-20">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Projects</div>
                  <div className="font-display font-bold text-2xl gradient-text">22+</div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 glass rounded-2xl px-4 py-3 shadow-card floating z-20" style={{ animationDelay: "-3s" }}>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Clients</div>
                  <div className="font-display font-bold text-xl gradient-text">12+</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="py-12 border-y border-border bg-secondary/40 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">Trusted by industry leaders</p>
        <div className="relative">
          <div className="marquee animate-marquee gap-16">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground/60 hover:text-primary transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">What we do</span></Reveal>
          <Reveal delay={80}><h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Services that move the needle</h2></Reveal>
          <Reveal delay={160}><p className="text-muted-foreground mt-4">From idea to launch, we cover every layer of the modern product stack.</p></Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link
                to={`/services/${s.slug}`}
                className="group relative block h-full gradient-border bg-card p-7 hover-lift shadow-soft"
              >
                <div className="h-12 w-12 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 gradient-bg rounded-3xl blur-2xl opacity-20" />
              <img src={aboutImg} alt="Nexora team collaborating" className="relative rounded-3xl shadow-elegant w-full" loading="lazy" width={1280} height={960} />
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-card max-w-[200px]">
                <div className="text-3xl font-display font-bold gradient-text"><Counter end={1} suffix="+" /></div>
                <div className="text-xs text-muted-foreground mt-1">years of crafting digital products</div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">About Nexora</span></Reveal>
            <Reveal delay={80}><h2 className="font-display text-4xl md:text-5xl font-bold mt-3">A team that ships <span className="gradient-text">remarkable</span> products</h2></Reveal>
            <Reveal delay={160}><p className="text-muted-foreground mt-5 leading-relaxed">We're 10+ designers, engineers and strategists obsessed with the craft of building software. We partner with founders, scale-ups and enterprises to design, build and scale the products that matter.</p></Reveal>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.slice(0, 4).map((s, i) => (
                <Reveal key={s.label} delay={200 + i * 80}>
                  <div className="glass rounded-2xl p-5 shadow-soft">
                    <div className="font-display text-3xl font-bold gradient-text"><Counter end={s.value} suffix={s.suffix} /></div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={520}>
              <Button asChild variant="outlineGradient" className="mt-8">
                <Link to="/about">More about us <ChevronRight className="h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="container py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Portfolio</span></Reveal>
            <Reveal delay={80}><h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Selected work</h2></Reveal>
          </div>
          <Reveal delay={160}>
            <Button asChild variant="ghost"><Link to="/portfolio">View all <ArrowRight className="h-4 w-4" /></Link></Button>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.slice(0, 6).map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <Link to="/portfolio" className="group relative block aspect-[4/3] rounded-3xl overflow-hidden shadow-card">
                <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-primary-foreground">
                  <span className="text-[10px] uppercase tracking-[0.18em] opacity-80">{p.category}</span>
                  <h3 className="font-display font-semibold text-xl mt-1">{p.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <ProcessTimeline />

      {/* Technologies */}
      <TechStack />

      {/* Testimonials Marquee */}
      <section className="py-24 overflow-hidden relative">
        <div className="container mb-12 text-center">
          <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Kind words from our partners</span></Reveal>
          <Reveal delay={80}><h2 className="font-display text-4xl md:text-5xl font-bold mt-3">Trusted by teams <span className="gradient-text">worldwide</span></h2></Reveal>
        </div>

        <div className="relative flex flex-col gap-8">
          {/* First Row: Scrolling Right to Left */}
          <div className="flex marquee-container overflow-hidden">
            <div className="marquee animate-marquee gap-6">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="w-[350px] md:w-[450px] glass rounded-[2rem] p-8 shadow-card flex flex-col justify-between border border-primary/5 hover:border-primary/20 transition-colors group shrink-0"
                >
                  <div className="flex items-center gap-1 text-accent mb-6">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="h-3.5 w-3.5 fill-current" />))}
                  </div>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed italic whitespace-normal">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-display font-bold text-primary text-xs ring-1 ring-primary/10">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row: Scrolling Left to Right (Reverse) */}
          <div className="flex marquee-container overflow-hidden">
            <div className="marquee animate-marquee-reverse gap-6">
              {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
                <div
                  key={i}
                  className="w-[350px] md:w-[450px] glass rounded-[2rem] p-8 shadow-card flex flex-col justify-between border border-primary/5 hover:border-primary/20 transition-colors group shrink-0"
                >
                  <div className="flex items-center gap-1 text-accent mb-6">
                    {[...Array(5)].map((_, i) => (<Star key={i} className="h-3.5 w-3.5 fill-current" />))}
                  </div>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed italic whitespace-normal">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center font-display font-bold text-primary text-xs ring-1 ring-primary/10">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Home;
