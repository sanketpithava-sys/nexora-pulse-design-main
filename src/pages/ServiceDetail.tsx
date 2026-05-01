import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  return (
    <Layout>
      <PageHero
        eyebrow="Service"
        title={<><span className="gradient-text">{service.title}</span></>}
        subtitle={service.description}
      >
        <Button asChild variant="hero" size="lg"><Link to="/contact">Start a project <ArrowRight className="h-4 w-4" /></Link></Button>
        <Button asChild variant="glass" size="lg"><Link to="/services">All services</Link></Button>
      </PageHero>

      {/* Features */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">What's included</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Outcomes you can <span className="gradient-text">measure</span></h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">We tailor every engagement to your context. Here's what most {service.title.toLowerCase()} projects with Nexora include.</p>
          </Reveal>
          <div className="space-y-3">
            {service.features.map((f, i) => (
              <Reveal key={f} delay={i*80}>
                <div className="glass rounded-2xl p-5 flex items-start gap-4 hover-lift shadow-soft">
                  <div className="h-9 w-9 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm md:text-base font-medium">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Process</span></Reveal>
          <Reveal delay={80}><h2 className="font-display text-4xl font-bold mt-3">How we deliver</h2></Reveal>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {service.process.map((p,i)=>(
            <Reveal key={p.step} delay={i*120}>
              <div className="text-center relative">
                <div className="mx-auto h-16 w-16 rounded-2xl gradient-button-bg flex items-center justify-center text-primary-foreground font-display font-bold text-xl shadow-elegant">
                  {p.step}
                </div>
                <h3 className="font-display font-semibold text-lg mt-5">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="container py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal><span className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Tech stack</span></Reveal>
          <Reveal delay={80}><h2 className="font-display text-4xl font-bold mt-3">Tools we love for this</h2></Reveal>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {service.technologies.map((t,i)=>(
            <Reveal key={t} delay={i*60}>
              <span className="glass rounded-full px-5 py-2.5 text-sm font-medium hover:gradient-button-bg hover:text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-glow cursor-default">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="container py-20">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold">Other services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.filter(s=>s.slug!==service.slug).map(s=>(
            <Link key={s.slug} to={`/services/${s.slug}`} className="group gradient-border bg-card p-5 hover-lift shadow-soft">
              <div className="h-10 w-10 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground mb-3">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection title={`Have a ${service.title.toLowerCase()} project in mind?`} subtitle="Tell us about it — we'll bring the craft." />
    </Layout>
  );
};

export default ServiceDetail;
