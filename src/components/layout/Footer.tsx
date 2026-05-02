import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
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
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588888901910" },
                { Icon: Instagram, href: "https://www.instagram.com/nexxora.tech/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/nexxoratech/?viewAsMember=true" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:gradient-button-bg hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                  aria-label="social"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://wa.me/918320541447"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg glass flex items-center justify-center hover:gradient-button-bg hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                aria-label="whatsapp"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
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
