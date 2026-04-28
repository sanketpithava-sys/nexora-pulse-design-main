import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const Reveal = ({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        "transition-all",
        visible ? "animate-fade-up" : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </As>
  );
};

export default Reveal;
