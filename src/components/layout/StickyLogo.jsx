import React from 'react';
import brandingImg from '../../assets/images/homepage/imgi_2_vertical-branding.png';

export default function StickyLogo() {
  return (
    <a
      href="/"
      className="fixed left-0 top-[40%] z-35 block focus:outline-none transition-transform duration-300 hover:scale-[1.02] -translate-y-5"
      aria-label="Penta Freight Home"
    >
      <img
        src={brandingImg}
        alt="Penta Freight"
        className="w-[28px] h-[200px] md:w-[37px] md:h-[280px] object-contain"
      />
    </a>
  );
}
