import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatField = ({ id, label, type = "text", textarea, value, onChange }: any) => (
  <div className="relative">
    {textarea ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={5}
        placeholder=" "
        className="peer w-full rounded-2xl bg-background border border-border px-4 pt-6 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
      />
    ) : (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full rounded-2xl bg-background border border-border px-4 pt-6 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
      />
    )}
    <label
      htmlFor={id}
      className="absolute left-4 top-2 text-[10px] uppercase tracking-wider text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-primary"
    >
      {label}
    </label>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent ✨", description: "We'll get back to you within 1 business day." });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's <span className="gradient-text">build</span> something together</>}
        subtitle="Tell us about your project. We typically reply within one business day."
      />

      <section className="container py-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          <Reveal>
            <form onSubmit={submit} className="glass rounded-3xl p-8 md:p-10 shadow-card space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <FloatField id="name" label="Your name" value={form.name} onChange={(e:any)=>setForm({...form, name: e.target.value})} />
                <FloatField id="email" label="Email" type="email" value={form.email} onChange={(e:any)=>setForm({...form, email: e.target.value})} />
              </div>
              <FloatField id="company" label="Company (optional)" value={form.company} onChange={(e:any)=>setForm({...form, company: e.target.value})} />
              <FloatField id="message" label="Tell us about your project" textarea value={form.message} onChange={(e:any)=>setForm({...form, message: e.target.value})} />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-button-bg text-primary-foreground px-6 py-3.5 font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <div className="space-y-5">
            {[
              { icon: Mail, label: "Email", value: "hello@nexora.studio" },
              { icon: Phone, label: "Phone", value: "+1 (555) 010-2024" },
              { icon: MapPin, label: "Office", value: "221B Innovation Ave, Tech City" },
              { icon: Calendar, label: "Hours", value: "Mon – Fri · 9:00 to 18:00" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i*80}>
                <div className="glass rounded-2xl p-5 flex items-start gap-4 hover-lift shadow-soft">
                  <div className="h-11 w-11 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    <div className="font-medium mt-0.5">{item.value}</div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <a href="#" className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift shadow-soft group">
                <div className="h-11 w-11 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold group-hover:text-primary transition-colors">Live chat</div>
                  <div className="text-xs text-muted-foreground">Usually replies in minutes</div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container pb-16">
        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <iframe
              title="Nexora office location"
              className="w-full h-[400px] grayscale-[20%]"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.5%2C-0.08%2C51.52&layer=mapnik"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>

      <CTASection title="Prefer email?" subtitle="Drop us a line at hello@nexora.studio — we read every message." />
    </Layout>
  );
};

export default Contact;
