import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScroll — Lenis-based smooth scrolling wrapper.
 *
 * This component initialises Lenis and wires it into GSAP's
 * ScrollTrigger so that every existing ScrollTrigger-driven
 * animation keeps working without any code changes.
 *
 * How it works:
 *  1. Lenis overrides the native scroll with a momentum-based
 *     smooth scroll (purely on the window – no wrapper div).
 *  2. On every Lenis scroll event we call ScrollTrigger.update()
 *     so GSAP always sees the latest scroll position.
 *  3. The RAF loop is driven by gsap.ticker so Lenis and GSAP
 *     share the same frame, preventing any desync.
 *  4. After Lenis initialises we fire ScrollTrigger.refresh()
 *     to recalculate all trigger positions.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,           // scroll smoothness duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll position → GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's shared ticker (keeps them in sync)
    const tickerCallback = (time) => {
      lenis.raf(time * 1000); // gsap.ticker gives seconds, Lenis expects ms
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0); // prevent lag-compensation from breaking scroll

    // Give Lenis a frame to settle, then refresh all ScrollTriggers
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return children;
}
