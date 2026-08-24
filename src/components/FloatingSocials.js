import React, { useState } from 'react';

const FloatingSocials = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);

  const socials = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/237693992919?text=Bonjour%20Miguel,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20de%20Growth%20Marketing.',
      color: 'bg-[#25D366]',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.379 3.469 2.238 2.237 3.469 5.21 3.467 8.381-.004 6.535-5.33 11.859-11.861 11.859-2.006-.002-3.975-.51-5.727-1.479L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.316 0 9.647-4.33 9.65-9.65.001-2.578-1.002-5.002-2.825-6.825C16.338 2.308 13.913 1.303 11.86 1.303c-5.32 0-9.65 4.33-9.653 9.653-.001 1.65.488 3.26 1.414 4.673l-.993 3.626 3.731-.978-.312-.178z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mg-officiel-082978355?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      color: 'bg-[#0077B5]',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/19C4DxticA/?mibextid=wwXIfr',
      color: 'bg-[#1877F2]',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/magniticmg?igsi=MWVoODV1YjB4MzVibA%3D%3D&utm_source=qr',
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mg.ceo24?_r=1&_t=ZS-999VpNfLck3',
      color: 'bg-black border border-zinc-800',
      icon: (
        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.42-.43-.61-.67-.02 3.76-.01 7.52-.02 11.28-.03 2.06-.76 4.08-2.16 5.51-1.42 1.44-3.5 2.22-5.51 2.22-2.07-.03-4.14-.84-5.54-2.35-1.34-1.47-2.01-3.51-1.92-5.5.06-2.11.87-4.17 2.37-5.57 1.5-1.41 3.61-2.15 5.67-2.08v4.09c-1.05-.1-2.13.21-2.91.95-.78.78-1.15 1.92-1.02 3.01.12 1.09.77 2.06 1.7 2.58.93.52 2.11.49 3.02-.1.91-.59 1.42-1.66 1.39-2.73.02-6.53.01-13.06.02-19.59z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 print:hidden">
      {/* Social Sub-Buttons */}
      <div className={`flex flex-col items-center gap-3 transition-all duration-300 transform ${
        isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
      }`}>
        {socials.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className={`w-11 h-11 ${social.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Main FAB Toggle Button */}
      <button
        onClick={toggleOpen}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 hover:bg-blue-600 transition-all cursor-pointer"
        aria-label="Réseaux Sociaux"
      >
        <svg className={`w-6 h-6 fill-current transition-transform duration-300 ${isOpen ? 'rotate-135' : ''}`} viewBox="0 0 24 24">
          {isOpen ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          ) : (
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.2.8 4.22 2.1 5.82L3.3 22l4.58-1.5c1.25.5 2.63.8 4.12.8 5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
          )}
        </svg>
      </button>
    </div>
  );
};

export default FloatingSocials;
