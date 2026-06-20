import React from 'react';
import bgPattern from '../../assets/images/homepage/imgi_44_lineas-CSz1CbRe.png';

const indiaOffices = [
  {
    city: 'Mumbai',
    address: "902, 'A' Wing, Times Square,\nAndheri-Kurla Road, Marol,\nAndheri (East), Mumbai 400 059",
    phone: '+91 22-6222-6222',
  },
  {
    city: 'Ahmedabad',
    address: 'D21 The Address, True Value\nWest Gate, SG highway,\nAhmedabad 380 009',
    phone: '+91 7940227900',
  },
  {
    city: 'Bengaluru',
    address: '205, 2nd floor,\nConnection point H.A.L Airport\nExit Road, Bangalore 560 017 /',
    phone: '+91 80-4112-5590',
  },
  {
    city: 'Chennai',
    address: 'Flat no.A1, 1st floor,\nNo 24 Vembuli Amman koil Street,\nPalavanthangal Chennai- 600 114',
    phone: '+91-44-22241462/ 1464',
  },
  {
    city: 'Delhi',
    address: 'Penta Freight Pvt. Ltd. Khasra No.\n10/1/10/2, 11/5/1, No. 4, Samalkha,\nOld Delhi – Gurgaon Road, Opposite\nPrimary School, New Delhi – 110 037',
    phone: '+91 11-4078-2222',
  },
  {
    city: 'Hyderabad',
    address: 'G-27 & 28, Cargo Satellite Building,\nRajiv Gandhi International Airport,\nShamshabad 501 218, Telangana, India',
    phone: '+91 40-2400-4048',
  },
  {
    city: 'Kolkata',
    address: '131, Jangalpur Road, near airport,\nGate No. 3, Motilal Colony, P.O Rajbari,\nKolkata 700 081, West Bengal',
    phone: '+91 33-2514-7089',
  },
];

const usaOffice = {
  city: 'Chicago',
  address: 'Penta Freight Pvt.Ltd 5100 Newport Dr.\nSuite 4, Rolling Meadows, IL 60008 USA',
  phone: '+040 234 6559 / +224 434 2154',
};

export default function OfficeLocationsSection() {
  return (
    <section id="office-locations-section" className="relative w-full bg-white min-h-screen flex flex-col justify-center py-20 lg:py-24 overflow-hidden border-b border-gray-100">

      {/* ── Background Geometric Pattern Overlay (Lower-Left Area) ───── */}
      <div
        className="absolute bottom-0 left-0 w-2/3 h-2/3 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 xl:px-14">

        {/* ── Grid Container ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-16">

          {/* Row 1, Col 1: India Offices Intro */}
          <div className="flex flex-col justify-start">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[34px] font-semibold text-gray-900 leading-tight mb-4 lg:whitespace-nowrap">
              Our <span className="text-[#f06c30]">India</span> Offices
            </h2>
            <p className="text-gray-600 text-[14.5px] sm:text-[15px] lg:text-[15.5px] leading-relaxed font-normal">
              Penta Freight delivers seamless logistics across India, with branches in key cities for your convenience.
            </p>
          </div>

          {indiaOffices.map((office) => (
            <div key={office.city} className="flex flex-col justify-start">
              <h3 className="text-gray-900 font-semibold text-[19px] sm:text-[20px] lg:text-[21px] mb-2 leading-tight">
                {office.city}
              </h3>
              <p className="text-gray-500 mt-4 text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.65] font-normal whitespace-pre-line">
                {office.address}
                {"\n"}
                {office.phone}
              </p>
            </div>
          ))}

          {/* Row 3, Col 1: USA Office Intro */}
          <div className="flex flex-col justify-start pt-6 border-t border-gray-100 lg:border-0 lg:pt-0">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[34px] font-semibold text-gray-900 leading-tight mb-4 lg:whitespace-nowrap">
              Our <span className="text-[#f06c30]">USA</span> Office
            </h2>
            <p className="text-gray-600 text-[14.5px] sm:text-[15px] lg:text-[15.5px] leading-relaxed font-normal">
              Penta Freight has expanded its operations globally, beginning with the USA, to offer continuous support across continents.
            </p>
          </div>

          {/* Row 3, Col 2: Chicago */}
          <div className="flex flex-col justify-start pt-6 border-t border-gray-100 lg:border-0 lg:pt-0">
            <h3 className="text-gray-900 font-semibold text-[19px] sm:text-[20px] lg:text-[21px] mb-2 leading-tight">
              {usaOffice.city}
            </h3>
            <p className="text-gray-500 mt-4 text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-[1.65] font-normal whitespace-pre-line">
              {usaOffice.address}
              {"\n"}
              {usaOffice.phone}
            </p>
          </div>

          {/* Empty placeholders to align columns on desktop */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>

        </div>

      </div>
    </section>
  );
}
