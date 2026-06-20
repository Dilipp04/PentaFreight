import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import icon3 from '../assets/images/industries/imgi_3_default.png';
import icon4 from '../assets/images/industries/imgi_4_default.png';
import icon5 from '../assets/images/industries/imgi_5_default.png';
import icon6 from '../assets/images/industries/imgi_6_default.png';
import icon7 from '../assets/images/industries/imgi_7_default.png';
import icon8 from '../assets/images/industries/imgi_8_default.png';
import icon9 from '../assets/images/industries/imgi_9_default.png';
import icon10 from '../assets/images/industries/imgi_10_default.png';
import icon11 from '../assets/images/industries/imgi_11_default.png';
import ctaBg from '../assets/images/industries/imgi_15_ctabg-B8yapHMO.jpg';
import FAQ from '../components/common/FAQ';

const industriesData = [
  {
    icon: icon3,
    title: 'Pharmaceuticals',
    description: 'The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.',
  },
  {
    icon: icon4,
    title: 'Chemicals',
    description: 'We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.',
  },
  {
    icon: icon5,
    title: 'Textiles',
    description: 'We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.',
  },
  {
    icon: icon6,
    title: 'Energy',
    description: 'As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.',
  },
  {
    icon: icon7,
    title: 'Automobile',
    description: 'Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.',
  },
  {
    icon: icon8,
    title: 'Packaging',
    description: 'The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.',
  },
  {
    icon: icon9,
    title: 'Time Critical Cargo',
    description: 'We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.',
  },
  {
    icon: icon10,
    title: 'Glassware',
    description: 'Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.',
  },
  {
    icon: icon11,
    title: 'Electronics',
    description: 'We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.',
  },
];

const faqData = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve various industries including pharmaceuticals, chemicals, energy, packaging, textiles, and more, offering tailored logistics solutions for each.',
  },
  {
    question: 'How do you handle temperature-sensitive shipments?',
    answer: 'We provide temperature-controlled solutions to ensure the safe transport of sensitive goods, especially for the pharmaceutical industry.',
  },
  {
    question: 'What sets your logistics apart?',
    answer: 'We offer customized, transparent solutions with competitive rates and a deep understanding of industry-specific needs.',
  },
  {
    question: 'How do you ensure compliance with regulations?',
    answer: 'We comply with international guidelines, working closely with authorities to ensure smooth and legal shipments.',
  },
];

const IndustryCard = ({ item }) => (
  <div className="industry-card-inner w-full h-[390px] bg-gradient-to-br from-[#F59B6A] to-[#F26D2D] rounded-[24px] p-8 lg:py-16 flex flex-col justify-center text-white shadow-lg border border-white/10 hover:shadow-[0_40px_80px_rgba(242,109,45,0.5)] hover:-translate-y-[8px] hover:scale-[1.01] cursor-pointer overflow-hidden transform-gpu will-change-transform origin-center transition-all duration-500 ease-out">
    <div className="absolute inset-0 bg-white/[0.05] opacity-0 hover:opacity-100 transition-opacity duration-500" />

    <div className="flex items-center gap-5 mb-4">
      <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 transition-all duration-500 flex-shrink-0 group-hover:bg-white/20 group-hover:scale-105">
        <img
          src={item.icon}
          alt={item.title}
          className="w-8 h-8 object-contain filter brightness-0 invert"
        />
      </div>
      <h3 className="text-[24px] md:text-[26px] font-extrabold text-white leading-tight">
        {item.title}
      </h3>
    </div>

    <p className="text-[13px] leading-relaxed text-white/95 font-light">
      {item.description}
    </p>
  </div>
);

export default function Industries() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const sectionRef = useRef(null);
  const titleWrapperRef = useRef(null);
  const titleHeadingRef = useRef(null);
  const titleTextRef = useRef(null);
  const leftCardsRef = useRef([]);
  const rightCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const faqRefs = useRef([]);
  const ctaBgRef = useRef(null);
  const ctaTextRef = useRef(null);

  const [openIndices, setOpenIndices] = useState([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // ── Desktop Premium Awwwards Style Stacked Scroll Animation ────────────────
    mm.add("(min-width: 1024px)", () => {
      const leftCards = leftCardsRef.current.filter(Boolean);
      const rightCards = rightCardsRef.current.filter(Boolean);

      // Order them sequentially: Left 0, Right 0, Left 1, Right 1, Left 2, Right 2, ...
      const sequentialCards = [];
      const maxLength = Math.max(leftCards.length, rightCards.length);
      for (let i = 0; i < maxLength; i++) {
        if (leftCards[i]) {
          sequentialCards.push({ card: leftCards[i], side: 'left' });
        }
        if (rightCards[i]) {
          sequentialCards.push({ card: rightCards[i], side: 'right' });
        }
      }

      // Initial state: Card 0 and Card 1 are partially visible at bottom, all others hidden
      sequentialCards.forEach((item, index) => {
        if (index === 0 || index === 1) {
          gsap.set(item.card, { y: "55vh", scale: 0.95, opacity: 0.8, x: 0, rotation: 0 });
        } else {
          gsap.set(item.card, { y: "100vh", scale: 0.9, opacity: 0, x: 0, rotation: 0 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500", // Shorter scroll distance for faster, snappier animations
          pin: true,
          scrub: 2, // Smooth, buttery follow-through on scroll
          invalidateOnRefresh: true,
        }
      });

      // Step 1: Heading and description fade down and disappear completely
      tl.to(titleHeadingRef.current, { y: -100, opacity: 0 }, 0)
        .to(titleTextRef.current, { y: -100, opacity: 0 }, 0);

      // Card 0 moves to center focus
      if (sequentialCards[0]) {
        tl.to(sequentialCards[0].card, { y: 0, scale: 1.06, opacity: 1, ease: "power2.out" }, 0);
      }

      // Pause for active focus state of Card 0
      tl.to({}, { duration: 0.4 });

      // Step 2: Loop to animate exit of card i and entrance of card i+1
      for (let i = 0; i < sequentialCards.length - 1; i++) {
        const label = `card-${i}-transition`;
        const currentItem = sequentialCards[i];
        const nextItem = sequentialCards[i + 1];

        // Exit card i
        const exitX = currentItem.side === 'left' ? -350 : 350;
        const exitRot = currentItem.side === 'left' ? -10 : 10;

        tl.to(currentItem.card, {
          y: "100vh",
          x: exitX,
          rotation: exitRot,
          opacity: 0,
          scale: 0.85,
          ease: "power2.in"
        }, label);

        // Enter card i + 1
        tl.to(nextItem.card, {
          y: 0,
          scale: 1.06,
          opacity: 1,
          ease: "power2.out"
        }, label);

        // Pause for active focus state of Card i + 1
        tl.to({}, { duration: 0.4 });
      }

      // Exit the last card at the end
      const lastItem = sequentialCards[sequentialCards.length - 1];
      if (lastItem) {
        const exitX = lastItem.side === 'left' ? -350 : 350;
        const exitRot = lastItem.side === 'left' ? -10 : 10;
        tl.to(lastItem.card, {
          y: "100vh",
          x: exitX,
          rotation: exitRot,
          opacity: 0,
          scale: 0.85,
          ease: "power2.in"
        }, `last-exit`);
      }
    });

    // ── Mobile Standard List Animation ───────────────────────────
    mm.add("(max-width: 1023px)", () => {
      const mCards = mobileCardsRef.current.filter(Boolean);
      if (mCards.length > 0) {
        gsap.fromTo(mCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#industries-grid-mobile',
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    });

    // ── CTA Banner Cinematic Parallax ───────────────────────────────────────
    if (ctaBgRef.current && ctaTextRef.current) {
      gsap.fromTo(ctaBgRef.current,
        { y: -300 },
        {
          y: 300,
          ease: "none",
          scrollTrigger: {
            trigger: "#cta-banner",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      gsap.fromTo(ctaTextRef.current,
        { y: 60 },
        {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: "#cta-banner",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="flex-grow bg-[#fbfcfd]">

      {/* ── Desktop Continuous Track Section ─────────────── */}
      <section ref={sectionRef} className="hidden lg:block relative w-full h-screen bg-[#fbfcfd] overflow-clip">

        <div
          ref={titleWrapperRef}
          className="absolute inset-0 flex flex-col items-center justify-center -translate-y-16 z-0 pointer-events-none"
        >
          <div className="w-full text-center px-6">
            <h2
              ref={titleHeadingRef}
              className=" text-gray-500 inline-block font-sans font-medium text-[48px] leading-[64px] tracking-[0.5px]  uppercase"
            >
              Industries
            </h2>
            <p
              ref={titleTextRef}
              className="font-sans text-lg leading-[1.7] text-gray-500 max-w-[500px] mx-auto mt-6"
            >
              Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center gap-[80px] xl:gap-[120px] w-full max-w-[1200px] mx-auto z-10 pointer-events-none">

          <div className="relative w-[420px] h-[390px] pointer-events-auto">
            {industriesData.filter((_, i) => i % 2 === 0).map((item, index) => (
              <div
                key={`left-${index}`}
                ref={el => leftCardsRef.current[index] = el}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: index }}
              >
                <IndustryCard item={item} />
              </div>
            ))}
          </div>

          <div className="relative w-[420px] h-[390px] mt-[60px] pointer-events-auto">
            {industriesData.filter((_, i) => i % 2 !== 0).map((item, index) => (
              <div
                key={`right-${index}`}
                ref={el => rightCardsRef.current[index] = el}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: index }}
              >
                <IndustryCard item={item} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Desktop Static 3x3 Grid Section ── */}
      <section className="hidden lg:block w-full py-24 bg-[#fbfcfd] border-t border-gray-100/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-x-10 gap-y-12">
            {industriesData.map((item, index) => (
              <div key={index} className="w-full">
                <IndustryCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile Static Flow Section ─────────────── */}
      <section className="lg:hidden w-full py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block font-sans font-bold text-[36px] leading-[54px] tracking-[0.5px] text-[#1f2937] uppercase border-b-[3px] border-[#f06c30] pb-2 mb-8">
            Industries
          </h2>
          <p className="font-sans font-medium text-[16px] leading-[1.6] text-[#4b5563] max-w-lg mx-auto">
            Over the past two decades we have been coming up with innovative ways to enable global trade across various industries.
          </p>
        </div>
        <div id="industries-grid-mobile" className="flex flex-col gap-8 max-w-lg mx-auto">
          {industriesData.map((item, index) => (
            <div key={index} ref={el => mobileCardsRef.current[index] = el} className="w-full">
              <IndustryCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Frequently Asked Questions Section (reusable) ───────────── */}
      <FAQ
        faqs={faqData}
        intro={"Find answers to common industry questions, ensuring clarity on our services, processes, and solutions."}
      />

      {/* ── CTA Banner Cinematic Parallax Section ──────────────────────── */}
      <section id="cta-banner" className="relative w-full h-[350px] md:h-[450px] overflow-hidden flex items-center justify-center bg-[#111] border-t border-gray-200">

        <div
          ref={ctaBgRef}
          className="absolute inset-0 w-full h-[140%] -top-[10%] pointer-events-none will-change-transform"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        >
          <img
            src={ctaBg}
            alt="Penta Freight Industry CTA"
            className="w-full h-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div
          ref={ctaTextRef}
          className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center will-change-transform -mt-8"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-2 leading-tight drop-shadow-lg font-sans">
            Tailored Logistics for Every Industry
          </h2>
          <p className="text-white text-[16px] md:text-[20px] font-normal leading-relaxed mb-8 drop-shadow-md font-sans">
            Delivering tailored supply chain solutions to meet the unique needs of industries worldwide.
          </p>
          <button
            className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-md font-medium text-[16px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[190px] h-[48px]"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Contact Us Today
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Let's go!
            </span>
          </button>
        </div>
      </section>



    </div>
  );
}
