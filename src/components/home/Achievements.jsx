import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgPattern from '../../assets/images/homepage/imgi_44_lineas-CSz1CbRe.png';

export default function AchievementsSection() {
  const achievementsRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const counters = counterRefs.current.filter(Boolean);
    if (counters.length === 0) return;

    const ctx = gsap.context(() => {
      // Count-up animation for numeric values
      counters.forEach((el) => {
        const targetVal = parseInt(el.getAttribute('data-target'), 10);
        const countObj = { val: 0 };

        gsap.to(countObj, {
          val: targetVal,
          duration: 2,
          ease: 'power2.out',
          snap: { val: 1 },
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          onUpdate: () => {
            el.textContent = countObj.val;
          }
        });
      });
    }, achievementsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={achievementsRef}
      id="achievements-section"
      className="relative w-full py-16 md:py-20 overflow-hidden bg-[#425462]"
    >
      {/* Background Line Pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0 "
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4,
          filter: 'invert(1)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-340 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left Column (Title & Description) ───────────────────── */}
        <div>
          <h2 className="text-[#FF7A3D] text-[32px] md:text-[38px] font-semibold mb-5 tracking-wide">
            Our Achievements
          </h2>
          <p className="text-white text-[14.5px] md:text-[16px] leading-relaxed font-light max-w-md">
            Over 31+ years of excellence, trusted globally, delivering reliable logistics solutions with precision.
          </p>
        </div>

        {/* ── Right Column (2x2 Metrics Grid) ─────────────────────── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12">

          {/* Strategic Domestic Offices */}
          <div className="metric-item flex flex-col justify-start">
            <span className="text-[54px] md:text-[68px] font-light text-white leading-none mb-3">
              <span ref={(el) => (counterRefs.current[0] = el)} data-target="7">0</span>+
            </span>
            <span className="text-[13.5px] md:text-[15px] text-white font-medium">
              Strategic Domestic Offices
            </span>
          </div>

          <div className="metric-item flex flex-col justify-start">
            <span className="text-[54px] md:text-[68px] font-light text-white leading-none mb-3">
              USA
            </span>
            <span className="text-[13.5px] md:text-[15px] text-white font-medium">
              Global presence
            </span>
          </div>

          <div className="metric-item flex flex-col justify-start">
            <span className="text-[54px] md:text-[68px] font-light text-white leading-none mb-3">
              <span ref={(el) => (counterRefs.current[1] = el)} data-target="200">0</span>+
            </span>
            <span className="text-[13.5px] md:text-[15px] text-white font-medium">
              Logistics Experts
            </span>
          </div>

          <div className="metric-item flex flex-col justify-start">
            <span className="text-[54px] md:text-[68px] font-light text-white leading-none mb-3">
              <span ref={(el) => (counterRefs.current[2] = el)} data-target="50">0</span>+
            </span>
            <span className="text-[13.5px] md:text-[15px] text-white font-medium">
              Awards & Accolades
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
