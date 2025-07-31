import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Theme from "../../Components/theme/Theme";

// Custom animated underline component
const AnimatedUnderline = ({ active }) => (
  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#98dad9] to-[#5f9ea0] transition-all duration-300 ease-out ${active ? 'w-full' : 'group-hover:w-full'}`}></span>
);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  const handleChange = () => {
    setMenu(!menu);
    if (!menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setMenu(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [scrolled]);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/blogs", label: "Blogs" },
    { to: "/certification", label: "Certification" },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-white dark:bg-gray-900 py-3'
      } px-4 sm:px-8 lg:px-16 xl:px-24 border-b border-gray-200 dark:border-gray-700`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex flex-row items-center">
          <Link 
            to="/" 
            className="group relative overflow-hidden"
            onMouseEnter={() => setHoveredLink('home')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#98dad9] via-[#7ac5c4] to-[#5f9ea0] bg-clip-text text-transparent transition-all duration-500 group-hover:opacity-90 flex items-center">
              <div className="relative group">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 100 100" 
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  <defs>
                    <linearGradient id="gradientA" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#98dad9" />
                      <stop offset="100%" stopColor="#5f9ea0" />
                    </linearGradient>
                    <path 
                      id="letterA"
                      d="M50 10 L90 90 L80 90 L60 50 L40 50 L20 90 L10 90 Z M35 70 L65 70"
                      fill="none" 
                      stroke="url(#gradientA)" 
                      strokeWidth="8" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </defs>
                  
                  <use href="#letterA" className="transition-all duration-500" />
                  
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="5 50 50"
                    dur="3s"
                    repeatCount="indefinite"
                    additive="sum"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="-5 50 50"
                    dur="4s"
                    repeatCount="indefinite"
                    additive="sum"
                  />
                </svg>
                <span className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#98dad9] to-[#5f9ea0] transform -translate-x-1/2 transition-all duration-500 ${hoveredLink === 'home' ? 'w-full' : 'w-0'}`}></span>
              </div>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`group relative px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
                onMouseEnter={() => setHoveredLink(link.to)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className="relative z-10 flex items-center">
                  {link.label}
                  {isActive && (
                    <span className="ml-2 w-1.5 h-1.5 rounded-full bg-[#98dad9] animate-pulse"></span>
                  )}
                </span>
                <AnimatedUnderline active={isActive} />
                {(hoveredLink === link.to || isActive) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#98dad910] to-[#5f9ea010] rounded-lg -z-10"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          {/* Theme Switcher */}
          <div className="hidden md:block">
            <Theme />
          </div>
          
          {/* Contact Button */}
          <Link 
            to="/contact" 
            className="group relative overflow-hidden"
            onMouseEnter={() => setHoveredLink('contact')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <button className="relative px-6 py-2.5 font-medium text-white bg-gradient-to-r from-[#98dad9] to-[#5f9ea0] rounded-lg overflow-hidden group-hover:shadow-lg group-hover:shadow-[#98dad950] transition-all duration-500">
              <span className="relative z-10 flex items-center">
                Let's Talk
                <svg 
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <span className={`absolute -bottom-1 left-1/2 w-4/5 h-0.5 bg-white/50 transform -translate-x-1/2 transition-all duration-500 ${hoveredLink === 'contact' ? 'scale-x-100' : 'scale-x-0'}`}></span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={handleChange}
            className="relative group p-2 rounded-lg focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${menu ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${menu ? 'opacity-0' : 'opacity-100 translate-y-2'}`}></span>
              <span className={`absolute left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${menu ? '-rotate-45 translate-y-2' : 'translate-y-4'}`}></span>
            </div>
            <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mt-14 lg:hidden fixed inset-0 z-40 bg-gradient-to-br from-[#1a2a32] to-[#2e424d] transform transition-all duration-500 ease-in-out ${
          menu ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          clipPath: menu ? 'circle(150% at 90% 5%)' : 'circle(0% at 90% 5%)',
          transition: 'clip-path 0.8s ease-in-out, opacity 0.5s ease-in-out'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-5 space-y-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`relative text-2xl font-medium transition-all duration-500 transform hover:translate-x-2 ${
                  isActive 
                    ? 'text-[#98dad9] scale-105' 
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute -left-4 top-1/2 w-2 h-2 bg-[#98dad9] rounded-full transform -translate-y-1/2"></span>
                )}
                {link.label}
                <AnimatedUnderline active={isActive} />
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-8 px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#98dad9] to-[#5f9ea0] rounded-xl hover:shadow-lg hover:shadow-[#98dad950] transition-all duration-500 transform hover:-translate-y-1 flex items-center"
          >
            Get In Touch
            <svg 
              className="ml-3 w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;