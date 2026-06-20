import React from 'react';
import bgPattern from '../../assets/images/homepage/imgi_44_lineas-CSz1CbRe.png';

export default function PhilosophySection() {
  return (
    <section
      className="relative w-full py-12 flex items-center justify-center overflow-hidden bg-[#425462]"
    >
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-[#FF7A3D] text-[28px] md:text-[34px] font-bold mb-5 tracking-wide">
          Our Philosophy
        </h2>

        <p className="text-white text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed mb-8 font-light">
          Customer satisfaction drives everything we do. Every shipment is a promise, and we deliver it with precision, care, and
          professionalism. With expert resources, we ensure safe, timely transport, building lasting partnerships founded on trust and
          excellence.
        </p>

        <button
          className="group relative overflow-hidden bg-[#f06c30] text-white rounded-md font-medium text-[14px] md:text-[15px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-[150px] h-[42px] mx-auto block"
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
  );
}
