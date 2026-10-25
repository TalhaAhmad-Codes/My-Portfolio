import { useEffect, useRef } from "react";

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  style,
  ...props
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Respect the user's motion preferences.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add("is-visible");
      return;
    }

    // Keep content visible if IntersectionObserver is unavailable.
    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    // Enable scroll-reveal styling only after JavaScript is ready.
    document.documentElement.classList.add("has-scroll-reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");

          // Reveal once instead of observing forever.
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Component
      {...props}
      ref={elementRef}
      className={`scroll-reveal ${className}`.trim()}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export default ScrollReveal;
