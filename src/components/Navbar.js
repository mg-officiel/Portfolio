import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'STACK', path: '/stack' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CASE STUDIES', path: '/case-studies' },
    { name: 'NETWORK', path: '/' }
  ];

  const handleContactClick = () => {
    if (window.location.hash !== '#/') {
      window.location.href = '#/';
      setTimeout(() => {
        const element = document.getElementById('contact-form-section');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const element = document.getElementById('contact-form-section');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0f19]/80 backdrop-blur-md border-b border-b-border-gray">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop h-20 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
          <img
            alt="MG Logo"
            className="h-9 w-auto invert opacity-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN-lg4LNFE_DEy2RqOlKlbwvEYAYfpIYJFx4n6Rvvvid4lKsSkqhs5tsG4IJLxofNd79GzGHCkE2NyxjgphJ0wiKAzJM3qiPcqgXqfiE9f0yQa3dNFFSXGCNoXWelLMWfOCV_KDyWFZY7syrvD5jLEI50RdI-UD2iOjydbroMrkX5q9OO8Hf8TMJU9mclnmjUHuIgR2J9LaBdycnwn_97-43Vvx30PlfEZ_uu_WF0sQcNGl9xUV3XPqaFHhm1c_g"
          />
          <span className="font-display-xl text-lg font-black tracking-widest text-on-surface">MG</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-label-caps text-[12px] tracking-widest font-semibold">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-200 py-1 border-b-2 ${
                path === link.path
                  ? 'text-primary-fixed-dim border-primary-fixed-dim'
                  : 'text-on-surface-variant border-transparent hover:text-on-surface'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleContactClick}
            className="bg-primary hover:bg-blue-600 text-white font-label-caps text-[12px] font-bold px-6 py-2.5 rounded transition-all uppercase tracking-wider shadow-sm"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Burger Button */}
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="md:hidden text-on-surface focus:outline-none z-50 p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            ) : (
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu Panel */}
      {isOpen && (
        <div className="fixed top-[84px] right-6 w-72 max-h-[calc(100vh-100px)] bg-[#0b0f19]/95 backdrop-blur-lg z-40 flex flex-col gap-3 p-5 rounded-2xl border border-border-gray shadow-2xl overflow-y-auto md:hidden">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-label-caps text-[13px] font-semibold tracking-widest px-4 py-3 rounded-xl transition-all ${
                path === link.path
                  ? 'text-primary bg-primary/10'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-[1px] bg-border-gray my-1" />
          <button
            onClick={() => {
              setIsOpen(false);
              handleContactClick();
            }}
            className="bg-primary hover:bg-blue-600 text-white font-label-caps text-[12px] font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider shadow-sm w-full text-center"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
