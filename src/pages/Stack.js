import React from 'react';

const Stack = () => (
  <main className="pt-32 pb-section-gap px-4 md:px-margin-desktop max-w-7xl mx-auto space-y-20 bg-grid-pattern relative">
    <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] tech-radial-glow pointer-events-none"></div>

    <header className="space-y-4 pt-12 max-w-3xl relative z-10">
      <div className="inline-flex items-center gap-2 border border-border-gray px-3 py-1.5 bg-surface-container rounded w-fit mb-2 font-code-sm text-[12px] text-primary-fixed-dim">
        <span>{"// Technical Skillset"}</span>
      </div>
      <h1 className="font-display-xl text-[40px] md:text-[56px] font-extrabold leading-tight text-on-surface uppercase tracking-tight">
        Stack & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
          Outils Growth.
        </span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 border-l-2 border-border-gray pl-4">
        Intégration d'outils analytiques avancés, de pixels de conversion côté client et de scripts d'automatisation côté serveur.
      </p>
    </header>

    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min relative z-10">
      <div className="md:col-span-8 bg-surface-container/60 backdrop-blur-md border border-border-gray p-8 rounded relative overflow-hidden group hover:border-primary/40 transition-all duration-300 shadow">
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div>
            <h3 className="font-display-xl text-[20px] font-bold text-on-surface uppercase tracking-wider">React Development</h3>
            <p className="font-body-md text-[13px] text-on-surface-variant">Création d'interfaces web rapides et réactives.</p>
          </div>
          <svg className="w-8 h-8 fill-current text-primary/50" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 12.03c0 2.21-1.79 4-4 4-2.21 0-4-1.79-4-4v-1h2v1c0 1.1.9 2 2 2s2-.9 2-2V9h2v5.03zm5 0c0 2.21-1.79 4-4 4-2.21 0-4-1.79-4-4V9h2v5.03c0 1.1.9 2 2 2s2-.9 2-2V9h2v5.03z"/>
          </svg>
        </div>
        
        <div className="bg-black border border-border-gray rounded overflow-hidden relative z-10">
          <div className="flex items-center px-4 py-2 border-b border-border-gray bg-zinc-950 gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
            <span className="ml-4 font-code-sm text-[10px] text-zinc-500 font-bold uppercase tracking-widest">App.js</span>
          </div>
          <div className="p-6 font-code-sm text-[13px] text-on-surface-variant overflow-x-auto">
            <pre><code>{`import React, { useEffect } from 'react';
import { initializeMetaPixel } from './pixels';

function MainApp() {
  useEffect(() => {
    initializeMetaPixel("YOUR_PIXEL_ID");
  }, []);
  return <HomeScreen />;
}`}</code></pre>
          </div>
        </div>
      </div>

      <div className="md:col-span-4 bg-surface-container/60 backdrop-blur-md border border-border-gray p-8 rounded relative flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 shadow">
        <div>
          <div className="w-12 h-12 bg-black border border-border-gray flex items-center justify-center rounded mb-6">
            <svg className="w-6 h-6 fill-current text-primary" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
          <h3 className="font-display-xl text-[20px] font-bold text-on-surface uppercase tracking-wider">Tracking Pixels</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Capture robuste des signaux de conversion (Meta Pixel, Google Analytics 4, Server-Side CAPI).
          </p>
        </div>
        
        <div className="bg-black border border-border-gray p-4 rounded font-code-sm text-[12px]">
          <div className="flex justify-between items-center mb-3">
            <span className="text-zinc-500">TRACKING_STATUS</span>
            <span className="text-growth-green font-bold flex items-center gap-1.5">
              <span className="tech-dot tech-dot-active"></span>
              CAPI_SYNC
            </span>
          </div>
          <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[95%] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-t border-border-gray pt-16 relative z-10">
      <h2 className="font-display-xl text-[20px] font-bold mb-10 uppercase tracking-widest text-zinc-400 flex items-center gap-2">
        <span className="w-6 h-[1px] bg-primary"></span>
        02 / Compétences Clés & Outils
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border-gray border border-border-gray rounded overflow-hidden">
        
        <div className="bg-black p-8 flex flex-col justify-between min-h-[140px]">
          <span className="font-code-sm text-[11px] text-zinc-500 uppercase tracking-wider font-bold">Funnels</span>
          <span className="font-body-md text-[20px] md:text-[24px] font-bold text-on-surface">Sales Pages & Capture</span>
        </div>
        
        <div className="bg-black p-8 flex flex-col justify-between min-h-[140px]">
          <span className="font-code-sm text-[11px] text-zinc-500 uppercase tracking-wider font-bold">Acquisition</span>
          <span className="font-body-md text-[20px] md:text-[24px] font-bold text-on-surface">Meta Ads / Media Buying</span>
        </div>
        
        <div className="bg-black p-8 flex flex-col justify-between min-h-[140px]">
          <span className="font-code-sm text-[11px] text-zinc-500 uppercase tracking-wider font-bold">Social Media</span>
          <span className="font-body-md text-[20px] md:text-[24px] font-bold text-on-surface">Influence & Content</span>
        </div>
        
        <div className="bg-black p-8 flex flex-col justify-between min-h-[140px]">
          <span className="font-code-sm text-[11px] text-zinc-500 uppercase tracking-wider font-bold">Tech Stack</span>
          <span className="font-body-md text-[20px] md:text-[24px] font-bold text-primary">React / JS / HTML / CSS</span>
        </div>
        
      </div>
    </section>
  </main>
);

export default Stack;
