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
              { icon: Mail, label: "Email", value: "inboxnexxora@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91-8320541447" },
              { icon: MapPin, label: "Office", value: "Ahmedabad, Gujarat, India" },
              { icon: Calendar, label: "Hours", value: "Mon – Fri · 9:00 AM to 7:00 PM" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
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
          </div>
        </div>
      </section>



      <CTASection title="Prefer email?" subtitle="Drop us a line at inboxnexxora@gmail.com — we read every message." />
    </Layout>
  );
};

export default Contact;
