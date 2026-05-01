import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/nexora-logo.jpeg";
import { services } from "@/data/services";

const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden">
      <div className="absolute inset-0 gradient-soft-bg" />
      <div className="blob bg-primary-glow/20 h-72 w-72 -top-20 -left-20" />
      <div className="blob bg-accent/20 h-72 w-72 -bottom-20 -right-20" />

      <div className="container relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center h-11 shrink-0">
                <img src={logo} alt="Nexora logo" className="h-full w-auto object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl gradient-text">NEXORA</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Innovation Studio</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Turning ideas into innovation. We build digital products that scale — from concept to launch and beyond.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:gradient-button-bg hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Ahmedabad, Gujarat, India</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> inboxnexxora@gmail.com</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> +91-8320541447</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nexora. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Crafted with care · Turning ideas into innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
