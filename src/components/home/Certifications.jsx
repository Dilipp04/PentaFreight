import React from 'react';
import bgPattern from '../../assets/images/homepage/imgi_44_lineas-CSz1CbRe.png';
import cert1 from '../../assets/images/homepage/imgi_11_.png';
import cert2 from '../../assets/images/homepage/imgi_12_.png';
import cert3 from '../../assets/images/homepage/imgi_13_.png';
import cert4 from '../../assets/images/homepage/imgi_14_.png';
import cert5 from '../../assets/images/homepage/imgi_15_.png';
import cert6 from '../../assets/images/homepage/imgi_16_.png';
import cert7 from '../../assets/images/homepage/imgi_17_.png';
import cert8 from '../../assets/images/homepage/imgi_18_.png';

const certLogos = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8];
const marqueeLogos = [...certLogos, ...certLogos, ...certLogos]; // Triple-buffered for ultra-smooth scrolling on extra-wide screens

const marqueeStyle = `
  @keyframes marquee-scroll {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-33.3333%, 0, 0);
    }
  }
  .cert-marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 30s linear infinite;
  }
`;

export default function CertificationsSection() {
  return (
    <section
      id="certifications-section"
      className="relative w-full py-16 overflow-hidden bg-[#425462] border-t border-b border-gray-700"
    >
      <style dangerouslySetInnerHTML={{ __html: marqueeStyle }} />

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8  lg:px-12">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-[#FF7A3D] text-[32px] md:text-[38px] font-semibold mb-4 tracking-wide">
            Certifications
          </h2>
          <p className="text-white text-[14.5px] md:text-[16px] leading-relaxed font-light max-w-2xl">
            Certified excellence, ensuring compliance, quality, and global logistics reliability.
          </p>
        </div>

        {/* ── Continuous Horizontal Marquee Container ───────────────── */}
        <div className="w-full overflow-hidden py-3">
          <div className="cert-marquee-track gap-6">
            {marqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="w-56 h-56 sm:w-60 sm:h-60 shrink-0 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 flex items-center justify-center transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1"
              >
                <img
                  src={logo}
                  alt={`Certification Logo ${index + 1}`}
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
