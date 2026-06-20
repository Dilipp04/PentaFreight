import React from 'react';

export default function ServiceCard({ service, index }) {
  const isContentRight = index % 2 === 0;

  return (
    <div className="relative w-full rounded-4xl  overflow-hidden bg-black shadow-2xl h-full">
      {/* Darkening overlay for stacked card depth */}
      <div
        className="absolute inset-0 bg-black pointer-events-none z-30 card-dark-overlay"
        style={{ opacity: 0 }}
      />

      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div
        className="absolute z-20 flex flex-col justify-center px-4 xl:px-6 w-[42%] max-h-[90%]"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          right: isContentRight ? '8%' : 'auto',
          left: isContentRight ? 'auto' : '8%',
        }}
      >
        <h3 className="text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-gray-900 mb-5 leading-tight">
          {service.title}
        </h3>

        <div className="space-y-2 mb-4">
          {service.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-gray-700 text-[13.5px] lg:text-[14.5px] xl:text-[16px] leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-2 text-[12px] lg:text-[13px] xl:text-[13.5px] font-medium text-gray-700 border border-gray-300 rounded-full bg-white/50 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <button
            className="group relative overflow-hidden bg-[#f06c30] text-white rounded-lg font-semibold text-[14px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 w-37.5 h-10.5"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              Read More
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Let's go!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function ServiceCardMobile({ service, index }) {
  const isImageLeft = index % 2 === 0;

  return (
    <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-lg flex flex-col justify-between p-6 sm:p-8">
      <img
        src={service.image}
        alt={service.title}
        className={`absolute inset-0 w-full h-full object-cover z-0 ${isImageLeft ? 'object-left' : 'object-right'
          }`}
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/65 to-black/40 z-10" />

      <div className="relative z-20 flex flex-col h-full justify-between text-white">
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-wide">
            {service.title}
          </h3>
          <div className="space-y-3">
            {service.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-gray-200 text-[13px] sm:text-[14px] leading-relaxed font-light"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-4">
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] sm:text-[12px] font-medium text-white border border-white/20 rounded-full bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <button
              className="group relative overflow-hidden bg-[#f06c30] text-white rounded-lg font-semibold text-[13px] transition-colors duration-300 hover:bg-[#a1a1aa] hover:text-gray-900 border-0 w-35 h-10"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                Read More
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Let's go!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
