import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/nexora-logo.jpeg";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", dropdown: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500",
            scrolled ? "glass shadow-card" : "bg-transparent"
          )}
        >
          <Link to="/" className="flex items-center gap-3 group py-1">
            <div className="flex items-center justify-center h-8 md:h-10 shrink-0 group-hover:scale-105 transition-transform">
              <img src={logo} alt="Nexora logo" className="h-full w-auto object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg tracking-tight gradient-text">NEXORA</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Innovation Studio</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </NavLink>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 pt-3 w-72 animate-fade-in">
                      <div className="glass shadow-elegant rounded-2xl p-2">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                          >
                            <div className="h-9 w-9 rounded-lg gradient-button-bg flex items-center justify-center text-primary-foreground shrink-0">
                              <s.icon className="h-4.5 w-4.5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</div>
                              <div className="text-xs text-muted-foreground line-clamp-1">{s.short}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors relative",
                      isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="sm">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-elegant animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-3 rounded-xl text-sm font-medium",
                      isActive ? "bg-secondary text-primary" : "text-foreground/80"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="grid grid-cols-1 gap-1 ml-3 mt-1 border-l-2 border-border pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="text-xs text-muted-foreground hover:text-primary py-1.5"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
              <Button asChild variant="hero" className="mt-3">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
