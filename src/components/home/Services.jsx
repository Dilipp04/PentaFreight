import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import services from '../../data/Data';
import ServiceCard, { ServiceCardMobile } from './ServiceCard';

// ── Section Header ────────────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <div className="w-full max-w-295 mx-auto px-6 md:px-8 pt-14 md:pt-16 pb-0">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
            <span className="text-[16px] font-medium text-gray-800 border border-gray-400 rounded-full px-4 py-1">
              Services
            </span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] md:text-[35px] lg:text-[38px] font-light text-gray-900 leading-[1.15]">
            Seamless Solutions for
            <br />
            <div className='text-gray-500 mt-3'>
              Every Logistics Need
            </div>
          </h2>
        </div>

        <div className="lg:max-w-md lg:text-right pb-2" data-aos="fade-up" data-aos-delay="80">
          <p className="text-black font-medium text-[16px] md:text-[17.5px] leading-relaxed">
            Tailored logistics solutions for timely, cost-effective deliveries
            across air, sea, and multimodal transport.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // Scroll distance (px) the user has to scroll per card transition.
    const SCROLL_PER_CARD_DESKTOP = 900;
    const SCROLL_PER_CARD_MOBILE = 700;

    // How far the outgoing card shrinks + shifts up as it recedes backward.
    const RECEDE_SCALE = 0.92;
    const RECEDE_Y = '-8%';

    function setupStack({ heightCalc, scrollPerCard }) {
      const H = heightCalc();

      if (listRef.current) {
        listRef.current.style.top = `${(window.innerHeight - H) / 2}px`;
        listRef.current.style.height = `${H}px`;
      }

      // Every card fills the same rect exactly.
      gsap.set(cards, {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      });

      // First card is active (front, full size). Every other card waits
      // just below the bottom edge of the stack. zIndex increases with
      // index so later cards always stack above earlier ones.
      gsap.set(cards[0], { y: '0%', scale: 1, zIndex: 1 });
      cards.slice(1).forEach((card, i) => {
        gsap.set(card, { y: '100%', scale: 1, zIndex: i + 2 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${(cards.length - 1) * scrollPerCard}`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // For each transition: the incoming card rises into the front
      // position WHILE the outgoing card shrinks + shifts up to recede
      // backward — both tweened on the same label so they run in sync.
      cards.slice(1).forEach((card, i) => {
        const outgoing = cards[i]; // the card currently in front
        const label = `step-${i}`;

        tl.addLabel(label)
          .to(card, { y: '0%', ease: 'none', duration: 1 }, label)
          .to(outgoing, { y: RECEDE_Y, scale: RECEDE_SCALE, ease: 'none', duration: 1 }, label);
      });

      return tl;
    }

    // ── Desktop Layout (min-width: 1024px) ────────────────────────
    mm.add('(min-width: 1024px)', () => {
      const tl = setupStack({
        heightCalc: () => Math.min(Math.max(window.innerHeight * 0.78, 520), 680),
        scrollPerCard: SCROLL_PER_CARD_DESKTOP,
      });

      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    // ── Mobile Layout (max-width: 1023px) ────────────────────────
    mm.add('(max-width: 1023px)', () => {
      const tl = setupStack({
        heightCalc: () => Math.min(Math.max(window.innerHeight * 0.66, 420), 640),
        scrollPerCard: SCROLL_PER_CARD_MOBILE,
      });

      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="services-section" className="bg-white">
      {/* ── Header ───────────────────────────────────────────────── */}
      <SectionHeader />

      {/* ── Desktop & Mobile: pinned cover-reveal stack ───────────── */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div
          ref={listRef}
          className="absolute left-1/2 -translate-x-1/2 w-full max-w-295 px-4"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className=" w-full absolute left-0 top-0  rounded-[20px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
              style={{ transformOrigin: "center top", willChange: "tranform" }}
            >
              <div className="hidden lg:block h-full w-full">
                <ServiceCard service={service} index={index} />
              </div>
              <div className="block lg:hidden h-full w-full">
                <ServiceCardMobile service={service} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}