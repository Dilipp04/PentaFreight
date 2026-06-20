import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-100">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-[13px] text-gray-500 font-light relative">

          <div className=" text-black text-center md:text-left flex-1">
            <span>© 2026 Penta Freight. All Rights Reserved Developed by Nipralo</span>
          </div>

          {/* Center: LinkedIn Icon (Desktop Only) */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <a
              href="https://www.linkedin.com/company/penta-freight-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#f06c30] hover:text-white hover:border-[#f06c30] transition-all duration-200 shrink-0"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Right: Social and Links */}
          <div className="flex flex-row flex-wrap justify-center md:justify-end items-center gap-3 text-center flex-1">
            {/* LinkedIn Icon (Mobile Only) */}
            <a
              href="https://www.linkedin.com/company/penta-freight-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#f06c30] hover:text-white hover:border-[#f06c30] transition-all duration-200 shrink-0 md:hidden"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a href="#" className="text-black hover:text-[#f06c30] transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-gray-300">•</span>
            <a href="#" className="text-black hover:text-[#f06c30] transition-colors duration-200">
              Terms and Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
