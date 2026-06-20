import React, { useRef, useState } from 'react';

export default function FAQ({ faqs = [], title = 'Frequently Asked Questions', intro = '', className = '' }) {
    const [openIndices, setOpenIndices] = useState([]);
    const faqRefs = useRef([]);

    const toggleIndex = (index) => {
        setOpenIndices(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className={`py-12 lg:py-16 bg-white border-t border-gray-100 overflow-hidden relative z-30 ${className}`}>
            <div className="w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 xl:px-14">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

                    <div className="w-full lg:w-[45%] lg:pr-8">
                        <h2 className="text-[28px] lg:text-[40px] font-medium text-gray-900 leading-[1.2] tracking-tight mb-4 whitespace-nowrap">
                            {title.split(' ')[0]} <span className="text-gray-400 font-light">{title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        {intro ? (
                            <p className="text-gray-500 text-[15px] lg:text-[16px] leading-relaxed font-normal max-w-[450px]">
                                {intro}
                            </p>
                        ) : null}
                    </div>

                    <div className="w-full lg:w-[55%]">
                        <div className="border-t border-gray-200">
                            {faqs.map((faq, index) => (
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
    );
}
