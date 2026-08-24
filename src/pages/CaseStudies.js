import React from 'react';

const renderPhaseIcon = (icon) => {
  switch (icon) {
    case 'analytics':
      return (
        <svg className="w-8 h-8 fill-current text-zinc-500 group-hover:text-primary transition-colors" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      );
    case 'account_tree':
      return (
        <svg className="w-8 h-8 fill-current text-zinc-500 group-hover:text-primary transition-colors" viewBox="0 0 24 24">
          <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10H9v-3H2v8h7v-3h2v3h7v-8h-7v-3h2v-2h2v3h7z"/>
        </svg>
      );
    case 'terminal':
      return (
        <svg className="w-8 h-8 fill-current text-zinc-500 group-hover:text-primary transition-colors" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1H6v-2h12v2zm-7-3H6v-2h5v2z"/>
        </svg>
      );
    case 'speed':
      return (
        <svg className="w-8 h-8 fill-current text-zinc-500 group-hover:text-primary transition-colors" viewBox="0 0 24 24">
          <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 12 6a7.92 7.92 0 0 1 6.82 3.82l1.56-1.56C18.8 6.55 15.56 5 12 5a9.985 9.985 0 0 0-7.85 16.16c.38.5.99.84 1.66.84h12.38c.67 0 1.28-.34 1.66-.84A9.985 9.985 0 0 0 22 12c0-1.25-.26-2.45-.73-3.53l-.89 1.1zM10 12c0-1.1.9-2 2-2s2 .9 2 2-1.1 2-2 2c-.5 0-.96-.18-1.31-.49l-4.54 4.54-1.41-1.41 4.54-4.54c-.31-.35-.49-.81-.49-1.31z"/>
        </svg>
      );
    default:
      return null;
  }
};

const CaseStudies = () => (
  <main className="flex-grow pt-32 pb-section-gap px-4 md:px-margin-desktop max-w-7xl mx-auto w-full bg-grid-pattern relative">
    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] tech-radial-glow pointer-events-none"></div>

    {/* Section Profil & Entête */}
    <section className="mb-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 border border-border-gray px-3 py-1.5 bg-surface-container rounded w-fit mb-2 font-code-sm text-[12px] text-primary-fixed-dim">
            <span>{"// Parcours & Expériences"}</span>
          </div>
          <h1 className="font-display-xl text-[40px] md:text-[56px] font-extrabold leading-tight text-on-surface uppercase tracking-tight">
            Expériences & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Réalisations.
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Découvrez mon parcours professionnel reliant marketing à la performance, ingénierie de vente et développement web.
          </p>
          <div className="pt-2 flex gap-4 print:hidden">
            <button
              onClick={() => window.print()}
              className="bg-primary hover:bg-blue-600 text-white font-body-md text-[13px] font-bold px-8 py-4 rounded transition-all uppercase tracking-wider shadow"
            >
              Imprimer / Exporter en PDF
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative h-80 w-full border border-border-gray rounded overflow-hidden shadow bg-surface-black/60 p-8 flex flex-col justify-between">
          <div>
            <span className="font-code-sm text-[11px] text-primary-fixed-dim block mb-1">{"// LANGUES & COMPÉTENCES"}</span>
            <div className="space-y-4 mt-4 font-body-md text-[14px]">
              <div>
                <strong className="text-on-surface block">Langues :</strong>
                <span className="text-on-surface-variant">Français (Maternelle), Anglais (Intermédiaire)</span>
              </div>
              <div>
                <strong className="text-on-surface block">Centres d'intérêt :</strong>
                <span className="text-on-surface-variant">Musique • Sport • Cinéma • Littérature</span>
              </div>
            </div>
          </div>
          <div className="border-t border-border-gray/50 pt-4 flex gap-4 font-code-sm text-[11px] text-zinc-500">
            <span>Douala, Cameroun</span>
            <span>+237 693 992 919</span>
          </div>
        </div>
      </div>
    </section>

    {/* Section Chronologie des Expériences */}
    <section className="mb-20 relative z-10">
      <div className="mb-12 border-b border-border-gray pb-4">
        <h2 className="font-display-xl text-[20px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
          <span className="w-6 h-[1px] bg-primary"></span>
          01 / Expériences Professionnelles
        </h2>
      </div>
      
      <div className="space-y-8 max-w-4xl">
        {[
          {
            title: "CTO / Projet Web",
            date: "Depuis Juin 2026",
            desc: "Création du site web officiel, contribution à la stratégie de communication digitale, audits professionnels d'entreprises sur leur présence en ligne, conception de tunnels de conversion et optimisation UX."
          },
          {
            title: "Growth & Marketing Digital",
            date: "2024 — 2026",
            desc: "Création et développement de présences digitales, gestion de réseaux sociaux, création de supports de communication, construction et optimisation de tunnels d'acquisition et pages de vente, mise en place de campagnes publicitaires avec tracking avancé."
          },
          {
            title: "E-commerce & Marketing Digital",
            date: "2022 — 2026",
            desc: "Création de chartes graphiques, mise en valeur d'offres produits, élaboration de stratégies de communication, création de campagnes d'acquisition et optimisation de trafic à l'aide de pixels de suivi."
          },
          {
            title: "Co-fondateur — Agence ALLIANCE",
            date: "2024 — 2026",
            desc: "Développement d'une agence de marketing d'influence. Mise en relation entre marques et créateurs de contenu, et développement de stratégies digitales de croissance pour nos partenaires."
          },
          {
            title: "Community / Social Media Manager (Freelance)",
            date: "Freelance",
            desc: "Gestion et animation des réseaux sociaux, création de contenus et élaboration de stratégies de communication digitale pour Sims BTP et Wine and Dine."
          }
        ].map((exp, idx) => (
          <div key={idx} className="bg-surface-container border border-border-gray p-6 rounded flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-all duration-300 shadow">
            <div className="space-y-2">
              <span className="font-code-sm text-[11px] text-primary-fixed-dim bg-zinc-950 px-2 py-0.5 rounded font-bold">{exp.date}</span>
              <h3 className="font-display-xl text-[18px] font-bold text-on-surface uppercase tracking-wide">{exp.title}</h3>
              <p className="font-body-md text-[14px] text-on-surface-variant leading-relaxed max-w-2xl">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Section Formation & Certifications */}
    <section className="relative z-10 print:hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-8 border-b border-border-gray pb-4">
            <h2 className="font-display-xl text-[20px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-primary"></span>
              02 / Formations
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container border border-border-gray p-6 rounded shadow bg-surface-black">
              <div className="flex justify-between items-start gap-4">
                {renderPhaseIcon('analytics')}
                <span className="font-code-sm text-[10px] text-zinc-400 font-bold tracking-wider">PHASE_01</span>
              </div>
              <h3 className="font-display-xl text-[16px] font-bold text-on-surface uppercase tracking-wider mt-4">AUDIT</h3>
            </div>
            <div className="bg-surface-container border border-border-gray p-6 rounded shadow bg-surface-black">
              <div className="flex justify-between items-start gap-4">
                {renderPhaseIcon('account_tree')}
                <span className="font-code-sm text-[10px] text-zinc-400 font-bold tracking-wider">PHASE_02</span>
              </div>
              <h3 className="font-display-xl text-[16px] font-bold text-on-surface uppercase tracking-wider mt-4">ARCHITECTURE</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8 border-b border-border-gray pb-4">
            <h2 className="font-display-xl text-[20px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-primary"></span>
              03 / Certifications & Spécifications
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container border border-border-gray p-6 rounded shadow bg-surface-black">
              <div className="flex justify-between items-start gap-4">
                {renderPhaseIcon('terminal')}
                <span className="font-code-sm text-[10px] text-zinc-400 font-bold tracking-wider">PHASE_03</span>
              </div>
              <h3 className="font-display-xl text-[16px] font-bold text-on-surface uppercase tracking-wider mt-4">IMPLEMENTATION</h3>
            </div>
            <div className="bg-surface-container border border-border-gray p-6 rounded shadow bg-surface-black">
              <div className="flex justify-between items-start gap-4">
                {renderPhaseIcon('speed')}
                <span className="font-code-sm text-[10px] text-zinc-400 font-bold tracking-wider">PHASE_04</span>
              </div>
              <h3 className="font-display-xl text-[16px] font-bold text-on-surface uppercase tracking-wider mt-4">OPTIMIZATION</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Formations Académiques Réelles */}
    <section className="mt-20 relative z-10 border-t border-border-gray/50 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-8 border-b border-border-gray pb-4">
            <h2 className="font-display-xl text-[20px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-primary"></span>
              Formations Académiques
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container border border-border-gray p-6 rounded shadow">
              <span className="font-code-sm text-[11px] text-primary-fixed-dim font-bold block mb-1">2026</span>
              <h4 className="font-display-xl text-[16px] font-bold text-on-surface uppercase tracking-wide">BTS — Génie Logiciel</h4>
              <p className="font-body-md text-[14px] text-on-surface-variant">IUC de Logbessou</p>
            </div>
            <div className="bg-surface-container border border-border-gray p-6 rounded shadow">
              <span className="font-code-sm text-[11px] text-primary-fixed-dim font-bold block mb-1">2023</span>
              <h4 className="font-display-xl text-[16px] font-bold text-on-surface uppercase tracking-wide">Baccalauréat C</h4>
              <p className="font-body-md text-[14px] text-on-surface-variant">Lycée du Génie</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8 border-b border-border-gray pb-4">
            <h2 className="font-display-xl text-[20px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-primary"></span>
              Certifications Professionnelles
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container border border-border-gray p-6 rounded shadow flex items-center justify-between">
              <div>
                <h4 className="font-display-xl text-[16px] font-bold text-on-surface uppercase tracking-wide">Certification Growth</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Formation avancée</p>
              </div>
              <span className="font-code-sm text-[11px] bg-amber-950/40 text-amber-400 border border-amber-900/50 px-2 py-0.5 rounded uppercase font-bold">En cours</span>
            </div>
            <div className="bg-surface-container border border-border-gray p-6 rounded shadow flex items-center justify-between">
              <div>
                <h4 className="font-display-xl text-[16px] font-bold text-on-surface uppercase tracking-wide">Google Certification</h4>
                <p className="font-body-md text-[14px] text-on-surface-variant">Analytics & Tracking credentials</p>
              </div>
              <span className="font-code-sm text-[11px] bg-amber-950/40 text-amber-400 border border-amber-900/50 px-2 py-0.5 rounded uppercase font-bold">En cours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default CaseStudies;
