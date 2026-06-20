import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import pentaVideo from '/videos/pentakulvid-Cg-CExBI.mp4';
import pelicanLogo from '../assets/images/pentakuhl/imgi_3_peli_logo_vertical_full_color-BSk9BalL.png';
import coolguardPcm from '../assets/images/pentakuhl/imgi_4_coolguardpcmlogo-CtHYIIUo.png';
import coolguardAdvance from '../assets/images/pentakuhl/imgi_5_coolguardadvancelogo-DCu16CWg.png';
import credoCube from '../assets/images/pentakuhl/imgi_6_credocubelogo-BE0dilDj.png';
import coolpall from '../assets/images/pentakuhl/imgi_7_coolpalllogo-B5O0ArqJ.png';
import coolpallAdvance from '../assets/images/pentakuhl/imgi_8_coolpalladvancelogo-CpFgiTwD.png';
import credoXtreme from '../assets/images/pentakuhl/imgi_9_credoextremelogo-BuGsJTKg.png';
import credoCargo from '../assets/images/pentakuhl/imgi_10_credocargologo-D9antN4U.png';
import ctaBg from '../assets/images/pentakuhl/imgi_16_pentakuhlparallax-D9t-BHPu.jpg';
import linesPattern from '../assets/images/homepage/imgi_44_lineas-CSz1CbRe.png';
import bgPattern from '../assets/images/homepage/imgi_44_lineas-CSz1CbRe.png';

gsap.registerPlugin(ScrollTrigger);

// ── Data Sets ─────────────────────────────────────────────────────────

const seriesData = [
  {
    id: 'SERIES 4',
    temp: '15°C - 25°C',
    usage: 'Covers a controlled room temperature range.',
    idealFor: 'Suitable for products that need to remain stable at standard room temperature, including certain medicines and cosmetics.'
  },
  {
    id: 'SERIES 22',
    temp: '2°C - 8°C',
    usage: 'Typical refrigeration range.',
    idealFor: 'Used for a large portion of biologics, vaccines, and certain pharmaceuticals that must be kept cold but not frozen.'
  },
  {
    id: 'SERIES 20M',
    temp: '-20°C',
    usage: 'Frozen transport.',
    idealFor: 'Necessary for specific vaccines, plasma, and other biologics that require freezing.'
  },
  {
    id: 'SERIES 50M',
    temp: '-50°C',
    usage: 'Deep-freeze transport.',
    idealFor: 'Used for highly sensitive materials, including advanced therapies and specialized biological samples.'
  }
];

const baseMarqueeRow1 = [
  "Robust\nLoad\nSecurity",
  "Expert\nLogistics\nSupport",
  "Tailored\nFreight\nSolutions",
  "End-to-End\nSupply\nChain\nManagement",
  "Flexible\nShipping\nSchedules",
  "Volume\nDiscounts"
];

// Split the original features into two rows for the opposing effect
const marqueeFeatures1 = [
  "Robust Load\nSecurity",
  "Expert Logistics\nSupport",
  "Tailored Freight\nSolutions"
];

const marqueeFeatures2 = [
  "End-to-End Supply Chain\nManagement",
  "Flexible Shipping\nSchedules",
  "Volume\nDiscounts"
];

const marqueeRow1 = Array(12).fill(marqueeFeatures1).flat();
const marqueeRow2 = Array(12).fill(marqueeFeatures2).flat();

const faqData = [
  {
    question: 'What is Penta Kuhl?',
    answer: 'Penta Kuhl is an innovative logistics solution that integrates technology to optimize supply chain management and enhance efficiency.'
  },
  {
    question: 'How does Penta Kuhl ensure cargo safety?',
    answer: 'We utilize advanced tracking systems, secure storage facilities, and stringent handling protocols to ensure the safety of your cargo.'
  },
  {
    question: 'What types of cargo can Penta Kuhl handle?',
    answer: 'Penta Kuhl is equipped to manage various cargo types, including perishable goods, heavy equipment, and general freight.'
  },
  {
    question: 'Is there customer support available for Penta Kuhl users?',
    answer: 'Yes, our dedicated customer support team is available to assist you with any inquiries or issues regarding our services.'
  }
];

export default function Pentakuhl() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  const marqueeSectionRef = useRef(null);
  const marqueeRow1Ref = useRef(null);
  const marqueeRow2Ref = useRef(null);

  const ctaBgRef = useRef(null);
  const ctaTextRef = useRef(null);

  const [activeSeries, setActiveSeries] = useState(seriesData[0].id);
  const [openIndices, setOpenIndices] = useState([]);
  const faqRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // GSAP ScrollTrigger for Product Solutions
    const ctx = gsap.context(() => {

      // Set initial states explicitly via GSAP to prevent flash of content
      gsap.set(headingRef.current, { opacity: 1, scale: 1 });

      // Cards start small and pushed outwards
      gsap.set(leftCardRef.current, { scale: 0.6, x: -300, opacity: 0.5 });
      gsap.set(rightCardRef.current, { scale: 0.6, x: 300, opacity: 0.5 });

      gsap.set(".left-card-item", { opacity: 0, y: 40 });
      gsap.set(".right-card-item", { opacity: 0, y: 40 });

      // Create a timeline that scrubs with scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2500', // Extended pin duration for storytelling feel
          pin: true,
          scrub: 1, // Smooth scrubbing
          anticipatePin: 1
        }
      });

      // Stage 1: Fade out heading while cards slide and scale in simultaneously
      tl.to(headingRef.current, { opacity: 0, scale: 0.95, duration: 1 })
        .to(leftCardRef.current, { scale: 1, x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, "<")
        .to(rightCardRef.current, { scale: 1, x: 0, opacity: 1, duration: 1, ease: 'power2.out' }, "<")

        // Stage 2: Sequentially stagger in Left Card Content
        .to(".left-card-item", { opacity: 1, duration: 1.5, stagger: 0.4, ease: 'power2.out' }, "-=0.2")

        // Stage 3: Sequentially stagger in Right Card Content
        .to(".right-card-item", { opacity: 1, duration: 1.5, stagger: 0.4, ease: 'power2.out' });

      // ── CTA Banner Cinematic Parallax ───────────────────────────────────────
      if (ctaBgRef.current && ctaTextRef.current) {
        // Background image slides downward (slower than scroll) to create deep background parallax
        gsap.fromTo(ctaBgRef.current,
          { y: -120 },
          {
            y: 120,
            ease: "none",
            scrollTrigger: {
              trigger: "#cta-banner",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );

        // Content layer slides upward (faster than scroll) to create premium foreground offset
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

      // ── Features Marquee Scroll-Linked Animation ───────────────────────────
      if (marqueeSectionRef.current && marqueeRow1Ref.current && marqueeRow2Ref.current) {
        gsap.fromTo(marqueeRow1Ref.current,
          { x: 0 },
          {
            x: -760, // 2 * 380px (slower, reduced speed by ~33.3% for smooth readability)
            ease: "none",
            scrollTrigger: {
              trigger: marqueeSectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );

        gsap.fromTo(marqueeRow2Ref.current,
          { x: -760 },
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: marqueeSectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );
      }

    });

    // Refresh ScrollTrigger to ensure correct pin heights
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert(); // Cleanup GSAP
      clearTimeout(refreshTimer);
    };
  }, []);

  const activeSeriesContent = seriesData.find(s => s.id === activeSeries) || seriesData[0];

  return (
    <div className="w-full bg-white min-h-screen font-sans">

      {/* ── 1. Hero Video Banner ─────────────────────────────────────── */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900 border-b border-gray-800">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"

        >
          <source src={pentaVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45 z-10"></div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12">

          <h1
            className="text-[34px] sm:text-[42px] md:text-[48px] font-medium text-white leading-[1.2] mb-10 max-w-5xl tracking-wide drop-shadow-md"
            data-aos="fade-up"
          >
            Ensuring Safe Transport for <br className="hidden md:block " /> Temperature-Sensitive Products
          </h1>

          <div
            className="w-full max-w-[900px] h-[1px] bg-white/40 mb-8"
            data-aos="fade-up"
            data-aos-delay="150"
          ></div>

          <div
            className="flex flex-col md:flex-row items-center justify-between w-full max-w-[900px] gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-white text-[14px] md:text-[18px] font-normal leading-relaxed text-left max-w-[500px]">
              Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features
            </p>

            <button className="flex items-center gap-2 bg-[#f26d2d] text-white px-7 py-3.5 rounded-[4px] font-medium text-[15px] transition-colors duration-300 hover:bg-[#d95c22] shadow-[0_4px_14px_rgba(242,109,45,0.3)] whitespace-nowrap">
              Explore
              <svg className="w-4 h-4 mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* ── 2. About Penta Kuhl ──────────────────────────────────────── */}
      <section className="py-20 bg-white relative z-30">
        <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-center">

            <div className="w-full md:w-[30%] flex flex-col items-center md:items-end pr-0 md:pr-10 pt-2">
              <div className="flex flex-col items-center text-center">
                <span className="text-[#f26d2d] font-bold text-[22px] tracking-wider inline-block border-b-[2.5px] border-[#f26d2d] pb-3 mb-3 px-8">
                  ABOUT
                </span>
                <h2 className="text-[#f26d2d] font-bold text-[22px] tracking-wider mt-1">
                  PENTA KUHL
                </h2>
              </div>
            </div>

            <div className="w-full md:w-[65%]">
              <p
                className="text-[#425462] text-[20px] leading-[28px] font-light"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                At <strong className="font-bold text-[#425462]">Pentakuhl</strong>, we specialize in providing durable, effective packaging solutions that maintain temperature <strong className="font-bold text-[#425462]">stability</strong> during transit, <strong className="font-bold text-[#425462]">protecting</strong> your valuable products. Our innovative designs cater to various industries, including pharmaceuticals, food, and biotechnology.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Pelican BioThermal Showcase ────────────────────────────── */}
      <section className="relative py-16 bg-[#425463] overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url(${linesPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
            filter: 'invert(1)'
          }}
        ></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

          <div
            className="bg-white rounded-xl py-6 px-10 mb-8 shadow-2xl border border-gray-100"
          >
            <img
              src={pelicanLogo}
              alt="Pelican BioThermal"
              className="w-[140px] md:w-[160px] object-contain"
            />
          </div>

          <h2
            className="text-[24px] md:text-[32px] font-normal text-white mb-10 tracking-wide"
          >
            Authorized Distributors for Pelican BioThermal™ Products
          </h2>

          <button
            className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-md font-medium text-[16px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[160px] h-[48px]"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Read more
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Let's go!
            </span>
          </button>

        </div>
      </section>

      {/* ── 4. Product Solutions (Pinned GSAP Animation) ────────────── */}
      <section ref={sectionRef} className="relative w-full h-screen min-h-[750px] bg-[#fbfbfb] overflow-hidden border-t border-gray-100 flex flex-col items-center justify-center">

        <h2 ref={headingRef} className="absolute z-10 text-[38px] md:text-[48px] text-gray-900 font-medium tracking-wide">
          Product Solutions
        </h2>

        <div className="w-full max-w-[1550px] mx-auto px-4 md:px-8 xl:px-12 flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-10 z-20 h-[600px] mt-10 pointer-events-none">

          <div ref={leftCardRef} className="w-full md:w-[49%] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-[#e5e7eb] p-10  flex flex-col items-center pointer-events-auto rounded-sm">
            <div ref={leftContentRef} className="flex flex-col w-full h-full">
              <h3 className="left-card-item text-[40px] md:text-[48px] font-normal text-gray-900 text-center mb-4 tracking-wide">Parcel Shippers</h3>
              <p className="left-card-item text-gray-800 text-center text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-[500px] mx-auto">
                We understand the unique challenges faced by parcel shippers and offer tailored solutions for seamless shipping.
              </p>

              <div className="left-card-item flex flex-col gap-0 w-full mb-6">
                <div className="flex items-stretch border-b border-gray-100 w-full min-h-[100px]">
                  <div className="w-[30%] flex items-center pr-4">
                    <span className="text-[24px] md:text-[26px] font-medium text-gray-900">Single Use</span>
                  </div>
                  <div className="w-[35%] flex items-center justify-center border-l border-gray-100 px-4">
                    <img src={coolguardPcm} alt="Coolguard PCM" className="h-[40px] md:h-[50px] object-contain" />
                  </div>
                  <div className="w-[35%] flex items-center justify-center border-l border-gray-100 px-4">
                    <img src={coolguardAdvance} alt="Coolguard Advance" className="h-[40px] md:h-[50px] object-contain" />
                  </div>
                </div>
                <div className="flex items-stretch w-full min-h-[100px]">
                  <div className="w-[30%] flex items-center pr-4">
                    <span className="text-[24px] md:text-[26px] font-medium text-gray-900">Reusable</span>
                  </div>
                  <div className="w-[70%] flex items-center justify-start border-l border-gray-100 pl-[12%]">
                    <img src={credoCube} alt="Credo Cube" className="h-[45px] md:h-[55px] object-contain" />
                  </div>
                </div>
                <div className="left-card-item flex justify-center mt-auto pt-2">
                  <button
                    className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-md font-semibold text-[16px] md:text-[18px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[200px] h-[52px] shadow-sm"
                  >
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Parcel Shippers</span>
                    <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">Let's go!</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          <div ref={rightCardRef} className="w-full md:w-[49%] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-[#e5e7eb] p-10  flex flex-col items-center pointer-events-auto rounded-sm">
            <div ref={rightContentRef} className="flex flex-col w-full h-full">
              <h3 className="right-card-item text-[40px] md:text-[48px] font-normal text-gray-900 text-center mb-4 tracking-wide">Pallet Shippers</h3>
              <p className="right-card-item text-gray-800 text-center text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-[500px] mx-auto">
                We provide tailored services for pallet shippers, ensuring your cargo arrives safely and efficiently.
              </p>

              <div className="right-card-item flex flex-col gap-0 w-full mb-6">
                <div className="flex items-stretch border-b border-gray-100 w-full min-h-[100px]">
                  <div className="w-[30%] flex items-center pr-4">
                    <span className="text-[24px] md:text-[26px] font-medium text-gray-900">Single Use</span>
                  </div>
                  <div className="w-[35%] flex items-center justify-center border-l border-gray-100 px-4">
                    <img src={coolpall} alt="Coolpall Vertos" className="h-[45px] md:h-[55px] object-contain" />
                  </div>
                  <div className="w-[35%] flex items-center justify-center border-l border-gray-100 px-4">
                    <img src={coolpallAdvance} alt="Coolpall Advance" className="h-[45px] md:h-[55px] object-contain" />
                  </div>
                </div>
                <div className="flex items-stretch w-full min-h-[100px]">
                  <div className="w-[30%] flex items-center pr-4">
                    <span className="text-[24px] md:text-[26px] font-medium text-gray-900">Reusable</span>
                  </div>
                  <div className="w-[35%] flex items-center justify-center border-l border-gray-100 px-4">
                    <img src={credoXtreme} alt="Credo Xtreme" className="h-[45px] md:h-[55px] object-contain" />
                  </div>
                  <div className="w-[35%] flex items-center justify-center border-l border-gray-100 px-4">
                    <img src={credoCargo} alt="Credo Cargo" className="h-[45px] md:h-[55px] object-contain" />
                  </div>
                </div>

                <div className="right-card-item flex justify-center mt-auto pt-2">
                  <button
                    className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-md font-semibold text-[16px] md:text-[18px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[200px] h-[52px] shadow-sm"
                  >
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">Pallet Shippers</span>
                    <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">Let's go!</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. Series Guide Section ──────────────────────────────────── */}
      <section className="w-full py-24 bg-white relative z-30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center">

          <h2 className="text-[36px] md:text-[44px] font-medium text-gray-900 mb-4 tracking-tight">
            Series <span className="text-gray-400 font-light">Guide</span>
          </h2>

          <p className="text-center text-gray-600 text-[16px] md:text-[17px] max-w-4xl leading-relaxed mb-14">
            This guide outlines temperature-controlled packaging solutions designed for the safe transport and storage of sensitive products, like vaccines and biologics, across various thermal conditions, from refrigerated to deep-freeze.
          </p>

          <div className="w-full bg-white border border-gray-100 rounded-sm shadow-sm flex justify-between flex-wrap overflow-x-auto mb-10 divide-x divide-gray-100">
            {seriesData.map((series) => (
              <button
                key={series.id}
                onClick={() => setActiveSeries(series.id)}
                onMouseEnter={() => setActiveSeries(series.id)}
                className={`flex-1 py-5 px-6 min-w-[150px] text-center transition-all duration-300 ease-out font-medium text-[15px] tracking-wide cursor-pointer ${activeSeries === series.id
                  ? 'text-[#f26d2d] font-bold '
                  : 'text-gray-800 hover:text-[#f26d2d] hover:bg-gray-50'
                  }`}
              >
                {series.id}
              </button>
            ))}
          </div>

          <div className="w-full bg-white border border-gray-100 rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 md:p-12 min-h-[180px] transition-opacity duration-500">
            <div key={activeSeriesContent.id} className="animate-fade-in flex flex-col gap-4">
              <p className="text-[16px] text-gray-800 font-normal">
                <strong className="font-bold text-gray-900">Temperature Range:</strong> {activeSeriesContent.temp}
              </p>
              <p className="text-[16px] text-gray-800 font-normal">
                <strong className="font-bold text-gray-900">Usage & Applications:</strong> {activeSeriesContent.usage}
              </p>
              <p className="text-[16px] text-gray-800 font-normal">
                <strong className="font-bold text-gray-900">Ideal For:</strong> {activeSeriesContent.idealFor}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. Features Marquee Section ──────────────────────────────── */}
      <section ref={marqueeSectionRef} className="w-full py-20 bg-white relative overflow-hidden z-30 flex flex-col gap-8">

        {/* Row 1: Right to Left */}
        <div className="w-full relative flex overflow-hidden border-t border-b border-gray-200">
          <div
            ref={marqueeRow1Ref}
            className="flex will-change-transform"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {marqueeRow1.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-12 py-6 w-[380px] h-[135px] flex-shrink-0 bg-white border-r border-gray-200"
              >
                <span
                  className="text-[24px] leading-[36px] font-medium text-[#222222] text-center whitespace-pre-line"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="w-full relative flex overflow-hidden border-t border-b border-gray-200">
          <div
            ref={marqueeRow2Ref}
            className="flex will-change-transform"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {marqueeRow2.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-12 py-6 w-[380px] h-[135px] flex-shrink-0 bg-white border-r border-gray-200"
              >
                <span
                  className="text-[24px] leading-[36px] font-medium text-[#222222] text-center whitespace-pre-line"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── 7. Frequently Asked Questions Section ────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100 overflow-hidden relative z-30">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 xl:px-14">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

            <div className="w-full lg:w-[45%] lg:pr-8">
              <h2 className="text-[28px] lg:text-[40px] font-medium text-gray-900 leading-[1.2] tracking-tight mb-4 whitespace-nowrap">
                Frequently Asked <span className="text-gray-400 font-light">Questions</span>
              </h2>
              <p className="text-gray-500 text-[15px] lg:text-[16px] leading-relaxed font-normal max-w-[450px]">
                Explore our frequently asked questions to gain clarity about Penta Kuhl's services and features.
              </p>
            </div>

            <div className="w-full lg:w-[55%]">
              <div className="border-t border-gray-200">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200">

                    <button
                      onClick={() => toggleIndex(index)}
                      className={`w-full flex items-center justify-between text-left select-none focus:outline-none group cursor-pointer transition-colors duration-300 min-h-[60px] hover:bg-gray-50/50 ${openIndices.includes(index) ? 'pt-5 pb-1' : 'py-5'
                        }`}
                      aria-expanded={openIndices.includes(index)}
                    >
                      <span className="text-[15px] sm:text-[16px] font-semibold text-gray-900 transition-colors duration-200 group-hover:text-[#f26d2d]">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 ml-4">
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ease-in-out ${openIndices.includes(index) ? 'rotate-180 text-gray-600' : 'group-hover:text-gray-600'
                            }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    <div
                      ref={(el) => (faqRefs.current[index] = el)}
                      className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                      style={{
                        maxHeight: openIndices.includes(index)
                          ? (faqRefs.current[index] ? `${faqRefs.current[index]?.scrollHeight + 24}px` : '500px')
                          : '0px',
                      }}
                    >
                      <div
                        className={`transition-all duration-300 ease-in-out pb-5 ${openIndices.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                          }`}
                      >
                        <p className="text-gray-500 font-normal text-[14px] leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. CTA Banner Cinematic Parallax Section ─────────────────── */}
      <section id="cta-banner" className="relative w-full h-[280px] md:h-[360px] overflow-hidden flex items-center justify-center bg-[#111] border-t border-gray-200">

        <div
          ref={ctaBgRef}
          className="absolute inset-0 w-full h-[180%] -top-[40%] pointer-events-none will-change-transform"
          style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        >
          <img
            src={ctaBg}
            alt="Protecting What Matters Most"
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
            Protecting What Matters Most
          </h2>
          <p className="text-white text-[16px] md:text-[20px] font-normal leading-relaxed mb-8 drop-shadow-md font-sans">
            Get in touch to ensure safe and temperature-stable transit for your sensitive products.
          </p>
          <button
            className="group relative overflow-hidden bg-[#f26d2d] text-white rounded-[4px] font-medium text-[15px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[160px] h-[42px]"
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
