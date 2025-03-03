
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    "fade-in" | 
    "slide-up" | 
    "slide-down" | 
    "scale-in" | 
    "blur-in";
  delay?: "none" | "100" | "200" | "300" | "400" | "500";
  threshold?: number;
}

export const Motion = ({
  children,
  className,
  animation = "fade-in",
  delay = "none",
  threshold = 0.1,
}: MotionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClass = `animate-${animation}`;
  const delayClass = delay !== "none" ? `animate-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animationClass : "opacity-0",
        isVisible && delayClass,
        className
      )}
      style={{ 
        willChange: "transform, opacity",
        animationFillMode: "forwards"
      }}
    >
      {children}
    </div>
  );
};

export const RevealOnScroll = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={ref} className={cn("reveal-on-scroll", className)}>
      {children}
    </div>
  );
};
