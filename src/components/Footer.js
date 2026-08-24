import React from 'react';

const Footer = () => (
  <footer className="bg-surface-black border-t border-border-gray w-full py-12 mt-auto">
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-margin-desktop py-4 gap-stack-md max-w-7xl mx-auto w-full">
      <div className="font-display-xl text-lg font-black tracking-widest text-on-surface flex items-center gap-2">
        MG
      </div>
      <div className="font-body-md text-[13px] text-on-surface-variant text-center md:text-left tracking-wide">
        © 2024 MG • Sonkoue Miguel • Douala, Cameroun • mgofficiel0208@gmail.com
      </div>
      <div className="flex flex-wrap justify-center gap-6 font-body-md text-[13px] tracking-wider uppercase font-semibold">
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:mgofficiel0208@gmail.com">Email</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="tel:+237693992919">Tél</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/mg-officiel-082978355?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/magniticmg?igsi=MWVoODV1YjB4MzVibA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
