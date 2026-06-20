import React from 'react';
import mapImg from '../../assets/images/homepage/imgi_38_.webp';
import bgPattern from '../../assets/images/homepage/imgi_44_lineas-CSz1CbRe.png';


export default function GlobalFootprintSection() {

  return (
    <section
      id="global-footprint-section"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#425462] border-t border-b border-gray-700"
    >

      {/* ── Background Line Pattern Overlay ───────────────────────── */}
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 xl:px-28 flex flex-col items-center">
        <h2 className="text-[#FF7A3D] text-[32px] md:text-[38px] font-semibold mb-12 tracking-wide text-center">
          Our Global Footprint
        </h2>

        {/* ── World Map Visual with Pulsing Pins Overlay ───────────── */}
        <div className="global-footprint-content relative w-full max-w-5xl mx-auto flex justify-center">
          <div className="relative inline-block w-full">
            <img
              src={mapImg}
              alt="Penta Freight World Map"
              className="w-full h-auto select-none pointer-events-none"
            />


          </div>
        </div>
      </div>
    </section>
  );
}
