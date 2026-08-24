import React from 'react';

const Services = () => {
  return (
    <main className="pt-32 pb-section-gap max-w-7xl mx-auto px-4 md:px-margin-desktop bg-grid-pattern relative">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] tech-radial-glow pointer-events-none"></div>

      <header className="mb-20 max-w-3xl">
        <div className="inline-flex items-center gap-2 border border-border-gray px-3 py-1.5 bg-surface-container rounded w-fit mb-4 font-code-sm text-[12px] text-primary-fixed-dim">
          <span>{"// Growth & Performance"}</span>
        </div>
        <h1 className="font-display-xl text-[40px] md:text-[56px] font-extrabold leading-tight text-on-surface uppercase tracking-tight">
          Services & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Savoir-Faire.
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
          Je relie technique et marketing pour concevoir des parcours d'acquisition fluides, mesurables et optimisés pour la conversion.
        </p>
      </header>

      <section className="mb-20">
        <h2 className="font-display-xl text-[20px] font-bold mb-8 uppercase tracking-widest text-zinc-400 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-primary"></span>
          01 / Domaines d'Intervention
        </h2>
        
        <div className="bg-surface-black/60 backdrop-blur-md border border-border-gray p-8 rounded relative overflow-hidden group shadow">
          <div className="absolute inset-0 opacity-[0.02] font-display-xl text-[200px] leading-none pointer-events-none z-0 text-on-surface font-black flex items-center justify-center">MG</div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            
            <div className="bg-zinc-950 border border-border-gray p-6 rounded flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300">
              <span className="font-code-sm text-[10px] text-zinc-500 mb-2">[STRAT_01]</span>
              <svg className="w-9 h-9 fill-current text-growth-green mb-4" viewBox="0 0 24 24">
                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
              </svg>
              <h3 className="font-label-caps text-[13px] font-bold mb-2 text-primary-fixed-dim uppercase tracking-wider">Acquisition</h3>
              <p className="font-body-md text-[11px] text-on-surface-variant">Campagnes de trafic payant et achat média ciblé (Meta Ads).</p>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-6 h-6 fill-current text-zinc-700 text-glow" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
            
            <div className="bg-zinc-950 border border-border-gray p-6 rounded flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300">
              <span className="font-code-sm text-[10px] text-zinc-500 mb-2">[STRAT_02]</span>
              <svg className="w-9 h-9 fill-current text-primary mb-4" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2zm0 8H7v-2h10v2z"/>
              </svg>
              <h3 className="font-label-caps text-[13px] font-bold mb-2 text-primary uppercase tracking-wider">Tracking & Pixels</h3>
              <p className="font-body-md text-[11px] text-on-surface-variant">Installation avancée d'APIs de tracking et pixels de conversion.</p>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <svg className="w-6 h-6 fill-current text-zinc-700 text-glow" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </div>
            
            <div className="bg-zinc-950 border border-border-gray p-6 rounded flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 relative">
              <div className="absolute top-2 right-2 w-2 h-2 bg-growth-green rounded-full shadow-[0_0_8px_#10b981]"></div>
              <span className="font-code-sm text-[10px] text-zinc-500 mb-2">[STRAT_03]</span>
              <svg className="w-9 h-9 fill-current text-growth-green mb-4" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
              </svg>
              <h3 className="font-label-caps text-[13px] font-bold mb-2 text-primary uppercase tracking-wider">Tunnel Building</h3>
              <p className="font-body-md text-[11px] text-on-surface-variant">Conception de pages de vente et parcours d'onboarding optimisés.</p>
            </div>
            
          </div>
        </div>
      </section>

      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container border border-border-gray p-8 rounded hover:border-zinc-800 transition-all">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display-xl text-[20px] font-bold flex items-center gap-2">
              <svg className="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
              Développement Front-End & Logiciel
            </h3>
            <span className="font-code-sm text-[11px] text-zinc-400 font-semibold bg-zinc-900 px-2 py-0.5 rounded">{"// Tech × Product"}</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Avec mon cursus en Génie Logiciel, j'intègre des composants dynamiques (React, interfaces JavaScript) et des automatisations (Google Scripts) pour améliorer l'expérience utilisateur et lier les fonctionnalités produit à vos besoins marketing.
          </p>
          <div className="bg-black p-4 font-code-sm text-[13px] text-primary border border-border-gray rounded overflow-x-auto">
            <pre><code>{`// Intégration marketing produit
import React from 'react';
import { trackPixelEvent } from './tracking';

export const PurchaseButton = ({ productId }) => (
  <button onClick={() => trackPixelEvent('Purchase', { id: productId })} />
);`}</code></pre>
          </div>
        </div>

        <div className="bg-surface-container border border-border-gray p-8 rounded hover:border-zinc-800 transition-all border-t-2 border-t-primary">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display-xl text-[20px] font-bold flex items-center gap-2">
              <svg className="w-[22px] h-[22px] fill-current text-growth-green" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.8 2.04.8 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
              </svg>
              Social Media & Influence
            </h3>
            <span className="font-code-sm text-[11px] text-growth-green font-semibold bg-zinc-900 px-2 py-0.5 rounded">{"// Acquisition"}</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Co-fondateur d'Alliance, agence de marketing d'influence, et fort de plusieurs expériences de Social Media Manager. Je conçois des chartes graphiques, des supports visuels impactants et des stratégies de partenariats de créateurs de contenu.
          </p>
          <div className="flex gap-2 flex-wrap mt-8">
            <span className="font-code-sm text-[11px] bg-zinc-950 px-3 py-1.5 border border-border-gray text-on-surface rounded font-medium">
              &gt; Influencer Campaigns
            </span>
            <span className="font-code-sm text-[11px] bg-zinc-950 px-3 py-1.5 border border-border-gray text-on-surface rounded font-medium">
              &gt; Brand Identity
            </span>
            <span className="font-code-sm text-[11px] bg-zinc-950 px-3 py-1.5 border border-border-gray text-on-surface rounded font-medium">
              &gt; Content Curation
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-black border border-border-gray p-8 rounded flex flex-col hover:border-zinc-800 transition-all">
          <span className="font-code-sm text-[10px] text-zinc-500 font-bold uppercase mb-2">{"// CONSULTING"}</span>
          <h3 className="font-display-xl text-[24px] font-bold mb-2 text-on-surface">Audit & Stratégie</h3>
          <div className="text-[32px] font-bold font-code-sm text-on-surface mb-6">Sur Devis</div>
          <ul className="space-y-4 mb-8 flex-1 font-body-md text-[13px] text-on-surface-variant">
            <li className="flex items-start gap-2">
              <svg className="w-[18px] h-[18px] fill-current text-growth-green shrink-0 mt-0.5" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Audit pro de votre présence web</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-[18px] h-[18px] fill-current text-growth-green shrink-0 mt-0.5" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Définition du positionnement de marque</span>
            </li>
          </ul>
          <a href="mailto:mgofficiel0208@gmail.com" className="w-full text-center bg-transparent border border-border-gray hover:border-zinc-500 hover:bg-zinc-900 text-on-surface py-3 rounded font-code-sm text-[12px] font-bold uppercase tracking-wider transition-all">
            Réserver un Audit
          </a>
        </div>

        <div className="bg-surface-container border border-primary p-8 rounded flex flex-col relative shadow-[0_0_30px_rgba(59,130,246,0.05)]">
          <div className="absolute -top-3 left-6 bg-primary text-white px-3 py-0.5 rounded font-code-sm text-[10px] font-bold uppercase tracking-widest">
            RECOMMENDED
          </div>
          <span className="font-code-sm text-[10px] text-zinc-400 font-bold uppercase mb-2 mt-2">{"// FULL SET"}</span>
          <h3 className="font-display-xl text-[24px] font-bold mb-2">Tunnel & Acquisition</h3>
          <div className="text-[32px] font-bold font-code-sm text-primary mb-6">Sur Devis</div>
          <ul className="space-y-4 mb-8 flex-1 font-body-md text-[13px] text-on-surface-variant">
            <li className="flex items-start gap-2">
              <svg className="w-[18px] h-[18px] fill-current text-growth-green shrink-0 mt-0.5" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Création complète de tunnels de vente</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-[18px] h-[18px] fill-current text-growth-green shrink-0 mt-0.5" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Mise en place de pixels de tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-[18px] h-[18px] fill-current text-growth-green shrink-0 mt-0.5" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Lancement et suivi de campagnes média</span>
            </li>
          </ul>
          <a href="mailto:mgofficiel0208@gmail.com" className="w-full text-center bg-primary hover:bg-blue-600 text-white py-3 rounded font-code-sm text-[12px] font-bold uppercase tracking-wider transition-all">
            Lancer un Projet
          </a>
        </div>

        <div className="bg-surface-black border border-border-gray p-8 rounded flex flex-col hover:border-zinc-800 transition-all">
          <span className="font-body-md text-[10px] text-zinc-500 font-bold uppercase mb-2">{"// BRANDING & SOCIAL"}</span>
          <h3 className="font-display-xl text-[24px] font-bold mb-2">Social & Création</h3>
          <div className="text-[32px] font-bold font-code-sm text-on-surface mb-6">Sur Devis</div>
          <ul className="space-y-4 mb-8 flex-1 font-body-md text-[13px] text-on-surface-variant">
            <li className="flex items-start gap-2">
              <svg className="w-[18px] h-[18px] fill-current text-growth-green shrink-0 mt-0.5" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Animation et gestion des réseaux sociaux</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-[18px] h-[18px] fill-current text-growth-green shrink-0 mt-0.5" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Création de chartes graphiques et contenus</span>
            </li>
          </ul>
          <a href="mailto:mgofficiel0208@gmail.com" className="w-full text-center bg-transparent border border-border-gray hover:border-zinc-500 hover:bg-zinc-900 text-on-surface py-3 rounded font-code-sm text-[12px] font-bold uppercase tracking-wider transition-all">
            Nous Contacter
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
