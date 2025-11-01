"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";

interface IntersectionObserverProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export function IntersectionObserver({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
}: IntersectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? "animate-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
