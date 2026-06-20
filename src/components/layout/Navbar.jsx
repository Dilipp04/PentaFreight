import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/images/homepage/imgi_1_pentakuhl-logo.png";
// ─── Dropdown data ────────────────────────────────────────────────────────────
const SERVICES_ITEMS = [
  { label: 'Ocean Freight', href: '#' },
  { label: 'Air Freight', href: '#' },
  { label: 'Land Freight', href: '#' },
  { label: 'Customs Clearance', href: '#' },
  { label: 'Warehousing', href: '#' },
  { label: 'Project Cargo', href: '#' },
];

const PENTAKUHL_ITEMS = [
  { label: 'Parcel Shippers' },
  { label: 'Pallet Shippers' },
];

// ─── Dropdown Component ───────────────────────────────────────────────────────
function DropdownMenu({ items, isOpen }) {
  const location = useLocation();
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-7 p-3 rounded-2xl w-52 bg-white shadow-xl border border-gray-100 z-50 transition-all duration-200 origin-top ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
    >
      {items.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.label}
            to={item.href}
            className={`block text-black px-5 py-3 rounded-xl text-[13px] font-medium border-b border-gray-50 last:border-0 transition-colors duration-150 ${isActive ? 'text-[#f06c30] bg-orange-50/50' : 'text-gray-700 hover:text-[#f06c30] hover:bg-orange-50'
              }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pentakuhlOpen, setPentakuhlOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePentakuhlOpen, setMobilePentakuhlOpen] = useState(false);

  const location = useLocation();
  const servicesRef = useRef(null);
  const pentakuhlRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (pentakuhlRef.current && !pentakuhlRef.current.contains(e.target)) {
        setPentakuhlOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setPentakuhlOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state (for backdrop blur and soft shadow)
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/Show navbar on scroll direction change
      if (currentScrollY <= 50) {
        setVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setVisible(false); // scrolling down
        } else {
          setVisible(true); // scrolling up
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isHomeActive = location.pathname === '/' && location.hash === '';
  const isAboutActive = location.pathname === '/' && location.hash === '#about-section';
  const isIndustriesActive = location.pathname === '/industries';
  const isPentakuhlActive = location.pathname.startsWith('/pentakuhl');

  const getLinkClass = (isActiveItem) => {
    const base = 'font-sans text-[13px] font-semibold leading-[21px] tracking-[0px] uppercase transition-colors duration-200 hover:text-[#f06c30] whitespace-nowrap';
    const color = isActiveItem ? 'text-[#f06c30]' : 'text-black';
    return `${base} ${color}`;
  };

  const headerCls = `fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'
    } ${scrolled
      ? 'bg-white/85 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.04)] border-b border-gray-100/50'
      : 'bg-white shadow-sm'
    }`;

  const navHeightCls = `max-w-7xl mx-auto px-6 flex items-center justify-center transition-all duration-300 ease-in-out ${scrolled ? 'h-[52px]' : 'h-[64px]'
    }`;

  return (
    <>
      {/* ── Desktop Navbar ─────────────────────────────────────────────── */}
      <header className={headerCls}>
        <nav className={navHeightCls}>

          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-xs">

            <li >
              <Link

                to="/"
                className={getLinkClass(isHomeActive)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/#about-section" className={getLinkClass(isAboutActive)}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/#services-section" className={getLinkClass(location.pathname === '/' && location.hash === '#services-section')}>
                Services
              </Link>
            </li>

            {/* PENTAKUHL (dropdown, special branding) */}
            <li
              className="relative flex items-center gap-1"
              ref={pentakuhlRef}
              onMouseEnter={() => setPentakuhlOpen(true)}
            >
              <NavLink
                to="/pentakuhl"
                className={() =>
                  `flex items-baseline gap-0 whitespace-nowrap leading-none transition-opacity ${isPentakuhlActive ? 'opacity-100' : ''}`
                }
              >
                <img src={logo} className='w-20 h-4' alt="" />
              </NavLink>
              <button
                className={`bg-transparent border-0 cursor-pointer p-0 flex items-center justify-center`}
                onClick={() => setPentakuhlOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={pentakuhlOpen}
              >
                <svg
                  className={`w-3 h-3 transition-transform duration-200 text-gray-800 ${pentakuhlOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                onMouseEnter={() => setPentakuhlOpen(true)}
                onMouseLeave={() => setPentakuhlOpen(false)}
              >
                <DropdownMenu items={PENTAKUHL_ITEMS} isOpen={pentakuhlOpen} />
              </div>
            </li>

            <li>
              <Link
                to="/industries"
                className={getLinkClass(isIndustriesActive)}
              >
                Industries
              </Link>
            </li>

            <li>
              <a href="#" className={getLinkClass(false)}>Careers</a>
            </li>

            <li>
              <a href="#" className={getLinkClass(false)}>Contact</a>
            </li>

          </ul>

          <div className="flex lg:hidden w-full items-center justify-between">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2 text-[13px] font-semibold text-white bg-[#f06c30] hover:bg-[#e05c20] rounded-md transition-colors duration-200"
            >
              Contact
            </a>

            {/* Hamburger / Close toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 text-gray-800 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </nav>
      </header>

      {/* ── Mobile Overlay ─────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile Slide-in Menu ────────────────────────────────────────── */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 text-[13px] font-semibold text-white bg-[#f06c30] hover:bg-[#e05c20] rounded-md transition-colors duration-200"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 text-gray-700 hover:text-gray-900"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="divide-y divide-gray-100">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `flex items-center px-6 py-4 text-[15px] font-semibold uppercase tracking-wide transition-colors ${isActive ? 'text-[#f06c30]' : 'text-gray-800 hover:text-[#f06c30]'
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <a href="#" className="flex items-center px-6 py-4 text-[15px] font-semibold uppercase tracking-wide text-gray-800 hover:text-[#f06c30] transition-colors">
                About Us
              </a>
            </li>

            <li>
              <Link to="/#services-section" className="flex items-center px-6 py-4 text-[15px] font-semibold uppercase tracking-wide text-gray-800 hover:text-[#f06c30] transition-colors">
                Services
              </Link>
            </li>

            {/* PentaKÜHL with sub-menu */}
            <li className="flex flex-col">
              <div className="w-full flex items-center justify-between pl-6 pr-4">
                <Link
                  to="/pentakuhl"
                  className="flex-1 flex items-baseline gap-0 py-4 transition-colors group"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-[15px] font-semibold uppercase tracking-wide text-gray-800 group-hover:text-[#f06c30] transition-colors">Penta</span>
                  <span className="text-[15px] font-semibold uppercase tracking-wide text-[#00bcd4] group-hover:text-[#f06c30] transition-colors">KÜHL</span>
                </Link>
                <button
                  className="p-4 transition-colors"
                  onClick={() => setMobilePentakuhlOpen((o) => !o)}
                  aria-label="Toggle PentaKÜHL menu"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 text-gray-800 ${mobilePentakuhlOpen ? 'rotate-90' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {mobilePentakuhlOpen && (
                <ul className="bg-gray-50 border-t border-gray-100">
                  {PENTAKUHL_ITEMS.map((item) => (
                    <li key={item.label}>
                      <Link to={item.href} className="block px-10 py-3 text-[13px] text-gray-700 hover:text-[#f06c30] transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `flex items-center px-6 py-4 text-[15px] font-semibold uppercase tracking-wide transition-colors ${isActive ? 'text-[#f06c30]' : 'text-gray-800 hover:text-[#f06c30]'
                  }`
                }
              >
                Industries
              </NavLink>
            </li>

            <li>
              <a href="#" className="flex items-center px-6 py-4 text-[15px] font-semibold uppercase tracking-wide text-gray-800 hover:text-[#f06c30] transition-colors">
                Careers
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center px-6 py-4 text-[15px] font-semibold uppercase tracking-wide text-gray-800 hover:text-[#f06c30] transition-colors">
                Contact
              </a>
            </li>
          </ul>

          <div className="px-6 pt-8 pb-6 border-t border-gray-100 mt-2">
            <h4 className="text-[15px] font-bold text-gray-900 mb-4">Contact Info</h4>
            <a
              href="tel:+912262226222"
              className="block text-[13.5px] text-gray-700 underline underline-offset-2 hover:text-[#f06c30] mb-3 transition-colors"
            >
              +91 22-6222-6222
            </a>
            <a
              href="https://maps.google.com/?q=902,+A+Wing,+Times+Square,+Andheri-Kurla+Road,+Marol,+Andheri+East,+Mumbai+400+059"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13.5px] text-gray-700 underline underline-offset-2 hover:text-[#f06c30] leading-relaxed transition-colors"
            >
              902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059
            </a>
          </div>
        </nav>
      </aside>

      <div className="h-[64px] w-full flex-shrink-0" />
    </>
  );
}
