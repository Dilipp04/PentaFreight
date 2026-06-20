import React, { useRef, useState } from 'react';
import scrollImg from '../../assets/images/homepage/imgi_3_default.png';

/**
 * HeroSection - Homepage Hero
 *
 * Matches PentaFreight.com hero:
 * - Full-screen (100vh) video background
 * - Scroll-down indicator using image imgi_3_default.png
 * - Mute / Unmute circular button at bottom-right
 * - Dark overlay over the video
 */

// ── Scroll-down indicator ────────────────────────────────────────────────────
function ScrollIndicator({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Scroll to next section"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[99] w-[120px] md:w-[250px] lg:w-[300px] cursor-pointer focus:outline-none hover:opacity-95 transition-opacity duration-300"
    >
      <img
        src={scrollImg}
        alt="Scroll Down"
        className="w-full h-auto block"
      />
    </button>
  );
}

// ── Mute Button ──────────────────────────────────────────────────────────────
function MuteButton({ muted, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={muted ? 'Unmute video' : 'Mute video'}
      className="absolute bottom-8 right-6 md:right-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f06c30] hover:bg-[#e05c20] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 z-10 opacity-90 hover:opacity-100"
    >
      {muted ? (
        // Muted icon (speaker with X)
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ) : (
        // Unmuted icon (speaker with waves)
        <svg className='w-5 h-5' viewBox="0 0 16 16" fill="#ffffff">
          <path strokeLinecap="round" strokeLinejoin="round" fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.83h2.79L8.15 1l.85.35v13l-.85.33-3.86-3.85H1.5l-.5-.5v-5l.5-.5zM4.85 10L8 13.14V2.56L4.85 5.68l-.35.15H2v4h2.5l.35.17zM15 7.83a6.97 6.97 0 0 1-1.578 4.428l-.712-.71A5.975 5.975 0 0 0 14 7.83c0-1.4-.48-2.689-1.284-3.71l.712-.71A6.971 6.971 0 0 1 15 7.83zm-2 0a4.978 4.978 0 0 1-1.002 3.004l-.716-.716A3.982 3.982 0 0 0 12 7.83a3.98 3.98 0 0 0-.713-2.28l.716-.716c.626.835.997 1.872.997 2.996zm-2 0c0 .574-.16 1.11-.44 1.566l-.739-.738a1.993 1.993 0 0 0 .005-1.647l.739-.739c.276.454.435.988.435 1.558z" />
        </svg>
      )}
    </button>
  );
}

// ── Main Hero Section ─────────────────────────────────────────────────────────

export default function HeroSection({
  videoSrc = '/videos/hero.mp4',
  posterSrc = '',
}) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const scrollToNext = () => {
    const hero = document.getElementById('hero-section');
    if (hero) {
      const nextSectionTop = hero.offsetTop + hero.offsetHeight;
      window.scrollTo({ top: nextSectionTop, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden md:h-[calc(100vh-64px)] min-h-[300px] md:min-h-[500px]"
    >
      {/* ── Background Video ─────────────────────────────────────────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"

      />

      {/* ── Dark Overlay ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* ── Scroll Down Indicator (bottom-center) ────────────────────── */}
      <ScrollIndicator onClick={scrollToNext} />

      {/* ── Mute/Unmute Button (bottom-right) ────────────────────────── */}
      <MuteButton muted={muted} onClick={toggleMute} />
    </section>
  );
}
