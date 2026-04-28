import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const Services = () => (
  <Layout>
    <PageHero
      eyebrow="Services"
      title={<>End-to-end <span className="gradient-text">product services</span> for ambitious teams</>}
      subtitle="From discovery to launch and beyond, we cover every layer of the modern product stack."
    >
      <Button asChild variant="hero" size="lg"><Link to="/contact">Start a project</Link></Button>
    </PageHero>

    <section className="container py-20">
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 80}>
            <Link
              to={`/services/${s.slug}`}
              className="group relative block gradient-border bg-card p-8 hover-lift shadow-soft h-full"
            >
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl gradient-button-bg flex items-center justify-center text-primary-foreground shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-2xl mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                  <ul className="mt-5 space-y-2">
                    {s.features.slice(0,3).map(f=>(
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary">
                    Explore service <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Services;
