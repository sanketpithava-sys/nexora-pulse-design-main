import { useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Mail, MapPin, Phone, Send, Calendar } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) {
      toast({ variant: "destructive", title: "Name is required", description: "Please enter your full name." });
      return;
    }
    if (!form.email.trim()) {
      toast({ variant: "destructive", title: "Email is required", description: "Please enter your email address." });
      return;
    }
    if (form.email.toLowerCase() === "test@gmail.com") {
      toast({ variant: "destructive", title: "Invalid email", description: "Please use a valid professional email address." });
      return;
    }
    if (!form.message.trim()) {
      toast({ variant: "destructive", title: "Message is required", description: "Please tell us about your project." });
      return;
    }

    setIsSubmitting(true);

    try {
      // SMTP Implementation via EmailJS
      // You can connect your Gmail/SMTP server in the EmailJS dashboard
      const result = await emailjs.send(
        "service_ogfafhm", // Replace with your Service ID
        "template_0p7xi1s", // Replace with your Template ID
        {
          name: form.name,           // Matches {{name}} in your template
          from_name: form.name,      // Matches {{from_name}} in your template
          from_email: form.email,    // Matches {{from_email}} in your template
          message: form.message,     // Matches {{message}} in your template
          company: form.company,     // Optional: add {{company}} to your template if needed
          title: "New Website Inquiry", // Matches {{title}} in your subject line
        },
        "sIL0ShXfqmx3nIo7F" // Replace with your Public Key
      );

      if (result.status === 200) {
        toast({
          title: "Message sent ✨",
          description: "Thank you for reaching out! We'll get back to you within 1 business day."
        });
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Something went wrong. Please try again or email us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <FloatField id="name" label="Your name *" value={form.name} onChange={(e: any) => setForm({ ...form, name: e.target.value })} />
                <FloatField id="email" label="Email *" type="email" value={form.email} onChange={(e: any) => setForm({ ...form, email: e.target.value })} />
              </div>
              <FloatField id="company" label="Company (optional)" value={form.company} onChange={(e: any) => setForm({ ...form, company: e.target.value })} />
              <FloatField id="message" label="Tell us about your project *" textarea value={form.message} onChange={(e: any) => setForm({ ...form, message: e.target.value })} />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-button-bg text-primary-foreground px-6 py-3.5 font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"} <Send className={isSubmitting ? "animate-pulse" : "h-4 w-4"} />
              </button>
            </form>
          </Reveal>

          <div className="space-y-5">
            {[
              { icon: Mail, label: "Email", value: "inboxnexxora@gmail.com", href: "mailto:inboxnexxora@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91-8320541447", href: "tel:+918320541447" },
              { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India", href: "https://maps.google.com/?q=Ahmedabad,Gujarat,India" },
              { icon: Calendar, label: "Hours", value: "Mon – Fri · 10:00 AM to 7:00 PM" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                {item.href ? (
                  <a 
                    href={item.href} 
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass rounded-2xl p-5 flex items-start gap-4 hover-lift shadow-soft group block"
                  >
                    <div className="h-11 w-11 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.label}</div>
                      <div className="font-medium mt-0.5 group-hover:text-primary transition-colors">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="glass rounded-2xl p-5 flex items-start gap-4 hover-lift shadow-soft">
                    <div className="h-11 w-11 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.label}</div>
                      <div className="font-medium mt-0.5">{item.value}</div>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
            <Reveal delay={320}>
              <a 
                href="https://wa.me/918320541447" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-start gap-4 hover-lift shadow-soft group block"
              >
                <div className="h-11 w-11 rounded-xl gradient-button-bg flex items-center justify-center text-primary-foreground shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-medium mt-0.5 group-hover:text-primary transition-colors">Message us on WhatsApp</div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>



      <CTASection title="Prefer email?" subtitle="Drop us a line at inboxnexxora@gmail.com — we read every message." />
    </Layout>
  );
};

export default Contact;
