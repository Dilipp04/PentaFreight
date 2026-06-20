import React, { useState, useRef, useCallback, useEffect } from 'react';
import logo1 from '../../assets/images/homepage/imgi_25_.png';
import logo2 from '../../assets/images/homepage/imgi_26_.png';
import logo3 from '../../assets/images/homepage/imgi_27_.png';
import logo4 from '../../assets/images/homepage/imgi_28_.png';
import logo5 from '../../assets/images/homepage/imgi_29_.png';
import logo6 from '../../assets/images/homepage/imgi_30_.png';
import logo7 from '../../assets/images/homepage/imgi_31_.png';
import logo8 from '../../assets/images/homepage/imgi_32_.png';
import logo9 from '../../assets/images/homepage/imgi_33_.png';
import logo10 from '../../assets/images/homepage/imgi_34_.png';
import logo11 from '../../assets/images/homepage/imgi_35_.png';
import logo12 from '../../assets/images/homepage/imgi_36_ (2).png';
import logo13 from '../../assets/images/homepage/imgi_37_.png';

const awardsData = [
  {
    logo: logo1,
    text: 'Top Cargo Agents, 2016/17\nTop Cargo Agents, 2005/06',
  },
  {
    logo: logo2,
    text: 'Top Revenue Performance,\n2002',
  },
  {
    logo: logo3,
    text: 'Mega Tonners, 2006/07',
  },
  {
    logo: logo4,
    text: 'CONCOR Exim Star, 2003/04',
  },
  {
    logo: logo5,
    text: 'Meritorious Performance,\n1999/2000',
  },
  {
    logo: logo6,
    text: 'Top Performance, 2008\nTop Performance, 2007',
  },
  {
    logo: logo7,
    text: 'Significant Support and\nContribution, 2007',
  },
  {
    logo: logo8,
    text: 'International Award for\nExcellence in Air Cargo,\nRegion India - Winner, 2018',
  },
  {
    logo: logo9,
    text: 'Best Performance, 2017\nExcellence Revenue\nPerformance, 2016\nBest Performance, 2014\nCargo Agency, 2013\nCargo Agency, 2011',
  },
  {
    logo: logo10,
    text: 'Top Cargo Agent, 2003/04\nTop Cargo Agent, 2002/03\nTop Cargo Agent, 2001/02\nTop Cargo Agent, 1999/2000',
  },
  {
    logo: logo11,
    text: 'Outstanding Performance,\n2007\nOutstanding Quality, 2007\nOutstanding Performance -\nQuality, 2007\nOutstanding performance,\n2006\nPremium Partner, 2017\nAsia Partner, 2014',
  },
  {
    logo: logo12,
    text: 'Best Business Mix, 2006/07\nSignificant Contribution,\n2000/01\nSignificant Contribution,\n1999/2000',
  },
  {
    logo: logo13,
    text: 'Significant Support and\nContribution, 2006/07',
  },
];

export default function AwardsSection() {
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const [highlight, setHighlight] = useState({ x: 0, y: 0, w: 0, h: 0, visible: false });

  const handleCardEnter = useCallback((index) => {
    const grid = gridRef.current;
    const card = cardRefs.current[index];
    if (!grid || !card) return;

    const gridRect = grid.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    setHighlight({
      x: cardRect.left - gridRect.left,
      y: cardRect.top - gridRect.top,
      w: cardRect.width,
      h: cardRect.height,
      visible: true,
    });
  }, []);

  const handleGridLeave = useCallback(() => {
    setHighlight((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <section id="awards-section" className="w-full bg-[#f8f9fa] border-t border-gray-200 py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 xl:px-14">

        {/* ── Section Header ───────────────────────────────────────── */}
        <div className="mb-12 flex flex-col items-start">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-gray-950 font-bold select-none text-base leading-none">•</span>
            <span className="text-[14px] sm:text-[15px] font-semibold text-gray-850 border border-gray-300 rounded-full px-6 py-2 bg-white shadow-sm">
              Awards
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-light text-gray-900 leading-[1.15] mb-2">
            Proudly Recognized with Prestigious
            <br />
            <span className="text-gray-400">Awards and Accolades.</span>
          </h2>
        </div>

        {/* ── Cards Grid ───────────────────────────────────────────── */}
        <div
          ref={gridRef}
          onMouseLeave={handleGridLeave}
          className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch"
        >
          {/* ── Floating Highlight Tile ──────────────────────────── */}
          <div
            className="absolute pointer-events-none z-0 rounded-3xl"
            style={{
              width: highlight.w + 16,
              height: highlight.h + 16,
              left: highlight.x - 8,
              top: highlight.y - 8,
              background: '#e8e8e8',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12),',
              opacity: highlight.visible ? 1 : 0,
              transform: highlight.visible ? 'scale(1)' : 'scale(0.92)',
              transition: 'left 400ms cubic-bezier(0.22, 1, 0.36, 1), top 400ms cubic-bezier(0.22, 1, 0.36, 1), width 400ms cubic-bezier(0.22, 1, 0.36, 1), height 400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 300ms ease, transform 300ms ease',
            }}
          />

          {awardsData.map((award, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={() => handleCardEnter(index)}
              className="relative z-10 bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-gray-100 p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer transition-shadow duration-300 ease-out hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="h-16 w-full flex items-center justify-center mb-6">
                <img
                  src={award.logo}
                  alt={`Award Logo ${index + 1}`}
                  className="max-h-full max-w-[85%] object-contain select-none pointer-events-none"
                />
              </div>

              <div className="w-full flex flex-col mt-2 ">
                {award.text.split('\n').map((line, i) => (
                  <div
                    key={i}
                    className="text-left block text-[12px] sm:text-[13px] text-gray-900  leading-relaxed"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
