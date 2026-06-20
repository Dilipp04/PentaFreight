import React from 'react';
import icon1 from '../../assets/images/homepage/imgi_5_.png';
import icon2 from '../../assets/images/homepage/imgi_6_.png';
import icon3 from '../../assets/images/homepage/imgi_7_.png';

export default function WhyChooseComp() {
  const features = [
    {
      icon: icon1,
      title: 'Comprehensive Solutions',
      description: 'Full-spectrum logistics services including air, sea, and multimodal transport for seamless handling of your cargo.',
    },
    {
      icon: icon2,
      title: 'Expertise and Experience',
      description: 'Over 30+ years of experience with skilled customs agents ensuring accurate clearance and secure delivery.',
    },
    {
      icon: icon3,
      title: 'State-of-the-Art Facilities',
      description: 'Advanced transit warehouse with specialized storage and a fleet of reefer and general trucks for efficient nationwide transport.',
    },
  ];

  return (
    <section id="why-choose-section" className="w-full bg-white border-b border-gray-200">
      <div className="w-full max-w-340 mx-auto px-6 md:px-10 lg:px-12 xl:px-14 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

          {/* ── Heading Block (Column 1) ────────────────────────────── */}
          <div className="pb-8 lg:pb-0 lg:pr-8 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
              <span className="text-[13px] font-medium text-gray-800 border border-gray-300 rounded-full px-4 py-1 bg-white/50">
                Why us
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[40px] font-light text-gray-900 leading-[1.2]">
              Why choose
              <br />
              <span className="text-gray-400">Penta Freight.</span>
            </h2>
          </div>

          {/* ── Features Block (Columns 2, 3, 4) ────────────────────── */}
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="py-8 lg:py-0 lg:px-8 first:pt-8 last:pb-0 lg:first:pt-0 lg:last:pb-0 flex flex-col justify-start"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-14 h-14 object-contain mb-5"
              />
              <h3 className="text-gray-900 font-semibold text-[17px] sm:text-[18px] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
