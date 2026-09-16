import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt3D from '../components/Tilt3D';

const Home = () => {
  const navigate = useNavigate();

  // Hourly Rate Simulator States (46$/h)
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [durationWeeks, setDurationWeeks] = useState(8);
  const hourlyRate = 46;

  // Calculations
  const totalHours = hoursPerWeek * durationWeeks;
  const weeklyBudget = hoursPerWeek * hourlyRate;
  const totalBudget = totalHours * hourlyRate;

  // Contact Form States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    need: 'Marketing d\'Influence & Acquisition (Alliance Agency)',
    budget: '1000€ - 3000€',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Bonjour Miguel, je souhaite échanger avec vous (Co-fondateur Alliance Agency) pour un projet. Voici mes détails :
- *Nom* : ${formData.name}
- *Email* : ${formData.email}
- *Entreprise* : ${formData.company || 'Non spécifiée'}
- *Besoin Principal* : ${formData.need}
- *Budget Estimé* : ${formData.budget}
- *Détails du projet* : ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/237693992919?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative flex-grow pt-28 pb-section-gap max-w-7xl mx-auto px-4 md:px-margin-desktop w-full flex flex-col gap-24 overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] tech-radial-glow pointer-events-none"></div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative flex flex-col md:flex-row items-center gap-margin-desktop pt-8 z-10 print:hidden">
        <div className="flex-grow flex-shrink flex flex-col gap-stack-md min-w-0 md:w-1/2">
          <div className="inline-flex items-center gap-2 border border-primary/30 px-3 py-1.5 bg-primary/10 rounded-full w-fit mb-2 font-code-sm text-[12px] text-primary-fixed-dim">
            <span className="tech-dot tech-dot-active"></span>
            <span className="font-bold uppercase tracking-wider">CO-FONDATEUR @ ALLIANCE AGENCY • DOUALA</span>
          </div>
          
          <h1 className="font-display-xl text-[42px] md:text-[58px] font-extrabold leading-[1.1] text-on-surface tracking-tight uppercase">
            Sonkoue Miguel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-400 text-glow">
              Growth Marketer & Co-fondateur Alliance.
            </span>
          </h1>
          
          <p className="font-body-md text-[13px] text-primary-fixed-dim uppercase tracking-wider font-bold">
            Acquisition • Marketing d'Influence • Funnels • Data Tracking
          </p>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl border-l-2 border-primary pl-4 my-2">
            Co-fondateur d'<strong>Alliance Agency</strong>, j'accompagne les entreprises et marques dans leur accélération commerciale. Je combine <strong>marketing d'influence</strong>, <strong>acquisition Meta/Google Ads</strong>, <strong>tracking server-side (Meta CAPI)</strong> et <strong>optimisation de conversion</strong> — renforcé par une compétence d'ingénierie web en annexe pour une exécution sans dépendance.
          </p>
          
          <div className="flex gap-4 mt-6 flex-wrap font-body-md text-[13px] font-bold uppercase tracking-wider">
            <button
              onClick={() => scrollToSection('contact-form-section')}
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl transition-all shadow-lg text-center flex items-center gap-2 transform hover:scale-105"
            >
              <span>Démarrer Un Projet</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button
              onClick={() => scrollToSection('services-section')}
              className="border border-border-gray text-on-surface bg-surface-container/60 px-8 py-4 rounded-xl hover:bg-surface-container hover:border-zinc-700 transition-all text-center transform hover:scale-105"
            >
              Découvrir Alliance & Offres
            </button>
          </div>
        </div>

        {/* Telemetry 3D Card Widget */}
        <Tilt3D intensity={14} className="flex-grow md:w-1/2 relative w-full aspect-square md:aspect-auto md:h-[540px]">
          <div className="w-full h-full border border-border-gray bg-surface-black/80 backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between overflow-hidden group shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-border-gray/50 font-code-sm">
              <div className="flex items-center gap-2">
                <span className="tech-dot tech-dot-active"></span>
                <span className="text-primary-fixed-dim uppercase tracking-wider font-bold text-[12px]">Alliance Agency Growth Engine</span>
              </div>
              <span className="text-zinc-500 text-[11px]">Role: Co-Founder & Growth</span>
            </div>

            <div className="flex-grow flex flex-col justify-start gap-3.5 font-code-sm text-[12.5px] text-on-surface-variant relative z-10 my-1">
              <div className="space-y-1">
                <span className="text-primary-fixed-dim font-bold block">[FONDATEUR & STRATÉGIE]</span>
                <p className="pl-4 text-zinc-300">Cadrage des leviers d'acquisition & partenariats créateurs (Alliance Agency).</p>
              </div>
              
              <div className="space-y-1">
                <span className="text-indigo-400 font-bold block">[INFLUENCE & ADS]</span>
                <p className="pl-4 text-zinc-300">Lancement des campagnes d'influence et amplification sur Meta/Google Ads.</p>
              </div>
              
              <div className="space-y-1">
                <span className="text-growth-green font-bold block">[TRACKING CAPI & FUNNEL]</span>
                <p className="pl-4 text-zinc-300">Fiabilisation des données de conversion (99.8% match rate server-side).</p>
              </div>
              
              <div className="space-y-1">
                <span className="text-amber-400 font-bold block">[ANNEXE TECHNIQUE]</span>
                <p className="pl-4 text-zinc-300 font-bold">Autonomie totale sur l'intégration code & modification de landing pages.</p>
              </div>

              <div className="mt-2 p-4 border border-border-gray bg-zinc-950/40 rounded-xl">
                <div className="flex justify-between text-[11px] mb-2 font-bold text-on-surface">
                  <span>CROISSANCE & ROAS CAMPAGNES</span>
                  <span className="text-growth-green">+140% ROAS Moyen</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-growth-green w-[94%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="border-t border-border-gray/50 pt-3 flex justify-between items-center text-[11px] font-code-sm text-zinc-400">
              <span>AGENCE: ALLIANCE AGENCY</span>
              <span className="text-primary font-bold">WHATSAPP: +237 693 992 919</span>
            </div>
          </div>
        </Tilt3D>
      </section>

      {/* ========================================================================= */}
      {/* 2. BANNIERE KPI 3D & PREUVE SOCIALE */}
      {/* ========================================================================= */}
      <section className="relative z-10 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Tilt3D intensity={16}>
            <div className="bg-surface-container/80 border border-border-gray p-6 rounded-2xl text-center space-y-1 hover:border-primary/50 transition-colors shadow-lg">
              <span className="font-display-xl text-[34px] md:text-[36px] font-black text-primary block tracking-tight">Co-Fondateur</span>
              <span className="font-body-md text-[13px] text-on-surface-variant font-medium">Alliance Agency</span>
            </div>
          </Tilt3D>

          <Tilt3D intensity={16}>
            <div className="bg-surface-container/80 border border-border-gray p-6 rounded-2xl text-center space-y-1 hover:border-growth-green/50 transition-colors shadow-lg">
              <span className="font-display-xl text-[34px] md:text-[36px] font-black text-growth-green block tracking-tight">+140%</span>
              <span className="font-body-md text-[13px] text-on-surface-variant font-medium">ROAS Moyen Campagnes</span>
            </div>
          </Tilt3D>

          <Tilt3D intensity={16}>
            <div className="bg-surface-container/80 border border-border-gray p-6 rounded-2xl text-center space-y-1 hover:border-indigo-400/50 transition-colors shadow-lg">
              <span className="font-display-xl text-[34px] md:text-[36px] font-black text-indigo-400 block tracking-tight">99.8%</span>
              <span className="font-body-md text-[13px] text-on-surface-variant font-medium">Match Rate Meta CAPI</span>
            </div>
          </Tilt3D>

          <Tilt3D intensity={16}>
            <div className="bg-surface-container/80 border border-border-gray p-6 rounded-2xl text-center space-y-1 hover:border-amber-400/50 transition-colors shadow-lg">
              <span className="font-display-xl text-[34px] md:text-[36px] font-black text-amber-400 block tracking-tight">-35%</span>
              <span className="font-body-md text-[13px] text-on-surface-variant font-medium">Réduction du CAC</span>
            </div>
          </Tilt3D>
        </div>

        <div className="border-t border-b border-border-gray/50 py-6 flex flex-col items-center gap-4 bg-surface-black/30 backdrop-blur-sm rounded-2xl">
          <h3 className="font-code-sm text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
            {"// EXPERTISES GROWTH & MAÎTRISE DES CANAUX DE CROISSANCE"}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[13px] font-code-sm text-zinc-300 uppercase tracking-widest font-semibold px-4">
            <span className="hover:text-primary transition-colors">Marketing d'Influence</span>
            <span className="text-zinc-600">•</span>
            <span className="hover:text-primary transition-colors">Meta Ads (FB/IG)</span>
            <span className="text-zinc-600">•</span>
            <span className="hover:text-growth-green transition-colors">Google Analytics 4</span>
            <span className="text-zinc-600">•</span>
            <span className="hover:text-growth-green transition-colors">Meta CAPI Server-Side</span>
            <span className="text-zinc-600">•</span>
            <span className="hover:text-indigo-400 transition-colors">Tunnels de Conversion</span>
            <span className="text-zinc-600">•</span>
            <span className="hover:text-amber-400 transition-colors text-zinc-400 font-normal">Code & Integration (En Annexe)</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OFFRES DE SERVICES COMMERCIALES 3D */}
      {/* ========================================================================= */}
      <section id="services-section" className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-code-sm text-[12px] text-primary-fixed-dim uppercase tracking-widest font-bold block">
            {"// Expertise Co-Fondateur Alliance Agency"}
          </span>
          <h2 className="font-display-xl text-[32px] md:text-[42px] font-black text-on-surface uppercase tracking-tight">
            Des Stratégies Growth Conçues Pour Générer Du Chiffre D'Affaires.
          </h2>
          <p className="font-body-md text-on-surface-variant text-[15px]">
            Un accompagnement orienté performance combinant puissance de l'influence, acquisition payante et optimisation des conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Tilt3D intensity={10} className="h-full">
            <div className="bg-surface-container border border-border-gray p-8 rounded-2xl flex flex-col justify-between hover:border-primary/50 transition-all shadow-2xl h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <div className="inline-block px-2.5 py-1 bg-primary/10 rounded font-code-sm text-[11px] text-primary font-bold">ALLIANCE AGENCY</div>
                <h3 className="font-display-xl text-[22px] font-bold text-on-surface uppercase">
                  1. Marketing d'Influence & Partenariats Créateurs
                </h3>
                <p className="font-body-md text-on-surface-variant text-[14px]">
                  Stratégie complète de partenariats créateurs de contenu via <strong>Alliance Agency</strong>. Sourcing, négociation, briefs créatifs et amplification média pour accroître votre notoriété et vos ventes.
                </p>
                <ul className="space-y-2 font-body-md text-[13px] text-zinc-300 pt-2 border-t border-border-gray/50">
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Sélection rigoureuse des créateurs & adéquation d'audience</li>
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Chartes graphiques, supports visuels & angles UGC</li>
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Mesure de l'impact direct sur les ventes & codes promo</li>
                </ul>
              </div>
              <button
                onClick={() => scrollToSection('contact-form-section')}
                className="mt-8 w-full bg-zinc-900 hover:bg-primary text-on-surface hover:text-white font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-[12px] text-center shadow"
              >
                Lancer Une Campagne d'Influence
              </button>
            </div>
          </Tilt3D>

          {/* Card 2 */}
          <Tilt3D intensity={10} className="h-full">
            <div className="bg-surface-container border border-border-gray p-8 rounded-2xl flex flex-col justify-between hover:border-growth-green/50 transition-all shadow-2xl h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-growth-green/10 border border-growth-green/20 rounded-xl flex items-center justify-center text-growth-green">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
                </div>
                <div className="inline-block px-2.5 py-1 bg-growth-green/10 rounded font-code-sm text-[11px] text-growth-green font-bold">ACQUISITION & ADS</div>
                <h3 className="font-display-xl text-[22px] font-bold text-on-surface uppercase">
                  2. Acquisition Média & Social Ads (Meta / Google)
                </h3>
                <p className="font-body-md text-on-surface-variant text-[14px]">
                  Conception et pilotage de campagnes publicitaires à haute rentabilité sur Meta (Facebook, Instagram) et Google. Scaling maîtrisé des budgets publicitaires et optimisation du CAC.
                </p>
                <ul className="space-y-2 font-body-md text-[13px] text-zinc-300 pt-2 border-t border-border-gray/50">
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Structure de compte ultra-performante & retargeting</li>
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Tests A/B sur les accroches & visuels publicitaires</li>
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Pilotage du ROAS & suivi quotidien des performances</li>
                </ul>
              </div>
              <button
                onClick={() => scrollToSection('contact-form-section')}
                className="mt-8 w-full bg-zinc-900 hover:bg-growth-green hover:text-zinc-950 text-on-surface font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-[12px] text-center shadow"
              >
                Scaler Mes Campagnes Ads
              </button>
            </div>
          </Tilt3D>

          {/* Card 3 */}
          <Tilt3D intensity={10} className="h-full">
            <div className="bg-surface-container border border-border-gray p-8 rounded-2xl flex flex-col justify-between hover:border-indigo-400/50 transition-all shadow-2xl h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                </div>
                <div className="inline-block px-2.5 py-1 bg-indigo-500/10 rounded font-code-sm text-[11px] text-indigo-400 font-bold">CONVERSION & UX</div>
                <h3 className="font-display-xl text-[22px] font-bold text-on-surface uppercase">
                  3. Audit & Optimisation de Tunnels de Vente
                </h3>
                <p className="font-body-md text-on-surface-variant text-[14px]">
                  Analyse stratégique de vos landing pages et entonnoirs. Suppression des frictions de commande, optimisation du copywriting et maximisation du taux de conversion.
                </p>
                <ul className="space-y-2 font-body-md text-[13px] text-zinc-300 pt-2 border-t border-border-gray/50">
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Diagnostic UX/UI complet & paniers abandonnés</li>
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Stratégie d'upsell et augmentation de la valeur panier</li>
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Intégration de captures de leads directes (WhatsApp)</li>
                </ul>
              </div>
              <button
                onClick={() => scrollToSection('contact-form-section')}
                className="mt-8 w-full bg-zinc-900 hover:bg-indigo-500 text-on-surface hover:text-white font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-[12px] text-center shadow"
              >
                Optimiser Mon Tunnel De Vente
              </button>
            </div>
          </Tilt3D>

          {/* Card 4 */}
          <Tilt3D intensity={10} className="h-full">
            <div className="bg-surface-container border border-border-gray p-8 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all shadow-2xl h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/20 rounded-xl flex items-center justify-center text-amber-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div className="inline-block px-2.5 py-1 bg-amber-400/10 rounded font-code-sm text-[11px] text-amber-400 font-bold">DATA & TRACKING</div>
                <h3 className="font-display-xl text-[22px] font-bold text-on-surface uppercase">
                  4. Tracking Server-Side & Meta CAPI
                </h3>
                <p className="font-body-md text-on-surface-variant text-[14px]">
                  Mise en place d'un tracking côté serveur (Meta Conversions API) pour restaurer jusqu'à 40% de données masquées par iOS 14+ et les bloqueurs de publicité.
                </p>
                <ul className="space-y-2 font-body-md text-[13px] text-zinc-300 pt-2 border-t border-border-gray/50">
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Meta CAPI via Google Apps Script ou Google Cloud</li>
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Configuration GA4 & Google Tag Manager</li>
                  <li className="flex items-center gap-2"><span className="text-growth-green font-bold">✓</span> Score de qualité du pixel (Match Rate &gt; 95%)</li>
                </ul>
              </div>
              <button
                onClick={() => scrollToSection('contact-form-section')}
                className="mt-8 w-full bg-zinc-900 hover:bg-amber-400 hover:text-zinc-950 text-on-surface font-bold py-3.5 rounded-xl transition-all uppercase tracking-wider text-[12px] text-center shadow"
              >
                Fiabiliser Mon Tracking Data
              </button>
            </div>
          </Tilt3D>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION DÉDIÉE 3D : DÉVELOPPEMENT WEB EN ANNEXE */}
      {/* ========================================================================= */}
      <Tilt3D intensity={8}>
        <section className="relative z-10 bg-gradient-to-r from-surface-container via-surface-black to-surface-container border border-border-gray/80 p-8 md:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="font-code-sm text-[11px] text-amber-400 uppercase tracking-widest font-bold block">
                {"// SOCLE TECHNIQUE EN ANNEXE"}
              </span>
              <h3 className="font-display-xl text-[24px] md:text-[28px] font-bold text-on-surface uppercase">
                Une Compétence De Développement Web En Annexe Pour Une Autonomie Totale.
              </h3>
              <p className="font-body-md text-zinc-400 text-[14px]">
                Le développement web n'est pas ma prestation principale, mais un <strong>atout technique stratégique en annexe</strong>. Grâce à ma maîtrise de <strong>React.js</strong>, de <strong>JavaScript</strong> et de l'intégration web, je suis capable d'éditer le code, d'intégrer des formulaires, de déployer des pixels et d'ajuster vos tunnels sans aucune dépendance technique.
              </p>
            </div>

            <div className="bg-zinc-950/80 border border-border-gray p-6 rounded-2xl w-full md:w-80 space-y-3 font-code-sm text-[12px] shadow-lg">
              <span className="text-growth-green font-bold block uppercase">[AVANTAGE CLIENT]</span>
              <ul className="space-y-1.5 text-zinc-300">
                <li className="flex items-center gap-2"><span>⚡</span> Intégration immédiate sans dev tiers</li>
                <li className="flex items-center gap-2"><span>🛠️</span> Code React & CSS sur-mesure</li>
                <li className="flex items-center gap-2"><span>🔗</span> Connexion API & Webhooks directe</li>
              </ul>
            </div>
          </div>
        </section>
      </Tilt3D>

      {/* ========================================================================= */}
      {/* 5. RESULTATS & ETUDES DE CAS 3D */}
      {/* ========================================================================= */}
      <section id="cases-section" className="relative z-10 space-y-10 bg-surface-black/40 border border-border-gray p-8 md:p-12 rounded-3xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border-gray/50 pb-6">
          <div className="space-y-2">
            <span className="font-code-sm text-[12px] text-growth-green uppercase tracking-widest font-bold block">
              {"// Preuve de Compétence & Cas Clients"}
            </span>
            <h2 className="font-display-xl text-[30px] md:text-[38px] font-black text-on-surface uppercase tracking-tight">
              Résultats Obtenus Pour Nos Clients.
            </h2>
          </div>
          <button
            onClick={() => navigate('/case-studies')}
            className="border border-border-gray text-on-surface hover:text-primary hover:border-primary/50 px-6 py-3 rounded-xl transition-all font-body-md text-[12px] font-bold uppercase tracking-wider whitespace-nowrap"
          >
            Voir Toutes Les Études De Cas →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Case 1 */}
          <Tilt3D intensity={12} className="h-full">
            <div className="bg-surface-container/90 border border-border-gray p-6 rounded-2xl space-y-4 hover:border-zinc-600 transition-colors shadow-xl h-full flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-code-sm text-[11px] text-primary uppercase font-bold block tracking-wider">Alliance Agency • Influence & Ads</span>
                <h4 className="font-display-xl text-[18px] font-bold text-on-surface">Campagne d'Influence & Amplification Média</h4>
                <p className="font-body-md text-zinc-400 text-[13px]">
                  Orchestration d'une campagne de partenariats créateurs amplifiée par des publicités Meta Ads ciblées.
                </p>
              </div>
              <div className="pt-2 border-t border-border-gray/50 flex justify-between items-center text-[12px] font-code-sm">
                <span className="text-zinc-500">Retour Sur Investissement</span>
                <span className="text-growth-green font-bold">ROAS de 3.8x</span>
              </div>
            </div>
          </Tilt3D>

          {/* Case 2 */}
          <Tilt3D intensity={12} className="h-full">
            <div className="bg-surface-container/90 border border-border-gray p-6 rounded-2xl space-y-4 hover:border-zinc-600 transition-colors shadow-xl h-full flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-code-sm text-[11px] text-indigo-400 uppercase font-bold block tracking-wider">Tracking Server-Side</span>
                <h4 className="font-display-xl text-[18px] font-bold text-on-surface">Restitution de 42% de Conversions Masquées sur Meta</h4>
                <p className="font-body-md text-zinc-400 text-[13px]">
                  Déploiement de Meta Conversions API via Google Apps Script sans abonnement SaaS coûteux.
                </p>
              </div>
              <div className="pt-2 border-t border-border-gray/50 flex justify-between items-center text-[12px] font-code-sm">
                <span className="text-zinc-500">Match Quality Score</span>
                <span className="text-growth-green font-bold">99.8% (Excellent)</span>
              </div>
            </div>
          </Tilt3D>

          {/* Case 3 */}
          <Tilt3D intensity={12} className="h-full">
            <div className="bg-surface-container/90 border border-border-gray p-6 rounded-2xl space-y-4 hover:border-zinc-600 transition-colors shadow-xl h-full flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-code-sm text-[11px] text-amber-400 uppercase font-bold block tracking-wider">Optimisation Tunnel & Conversion</span>
                <h4 className="font-display-xl text-[18px] font-bold text-on-surface">Tunnel de Capture Lead & Redirection WhatsApp</h4>
                <p className="font-body-md text-zinc-400 text-[13px]">
                  Refonte du parcours client avec qualification préalable et prise de contact instantanée.
                </p>
              </div>
              <div className="pt-2 border-t border-border-gray/50 flex justify-between items-center text-[12px] font-code-sm">
                <span className="text-zinc-500">Taux de Conversion</span>
                <span className="text-growth-green font-bold">Multiplié par 2.4</span>
              </div>
            </div>
          </Tilt3D>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EXPERTISE & STACK TECHNIQUE 3D */}
      {/* ========================================================================= */}
      <section id="stack-section" className="relative z-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-code-sm text-[12px] text-primary-fixed-dim uppercase tracking-widest font-bold block">
            {"// Écosystème & Stack Globale"}
          </span>
          <h2 className="font-display-xl text-[28px] md:text-[36px] font-bold text-on-surface uppercase tracking-tight">
            Les Outils & Compétences À Votre Service.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Tilt3D intensity={10} className="h-full">
            <div className="bg-surface-container border border-border-gray p-6 rounded-2xl space-y-4 shadow-lg h-full">
              <h4 className="font-code-sm text-[13px] font-bold uppercase tracking-wider text-primary border-b border-border-gray/50 pb-2">
                1. Growth & Influence
              </h4>
              <div className="flex flex-wrap gap-2 font-code-sm text-[12px]">
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Alliance Agency</span>
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Marketing d'Influence</span>
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Meta Ads (FB/IG)</span>
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Google Ads</span>
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Copywriting UX</span>
              </div>
            </div>
          </Tilt3D>

          <Tilt3D intensity={10} className="h-full">
            <div className="bg-surface-container border border-border-gray p-6 rounded-2xl space-y-4 shadow-lg h-full">
              <h4 className="font-code-sm text-[13px] font-bold uppercase tracking-wider text-growth-green border-b border-border-gray/50 pb-2">
                2. Data & Tracking
              </h4>
              <div className="flex flex-wrap gap-2 font-code-sm text-[12px]">
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Meta CAPI Server-Side</span>
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Google Analytics 4</span>
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Google Tag Manager</span>
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Hotjar</span>
                <span className="bg-zinc-950 border border-border-gray px-3 py-1.5 rounded-lg text-zinc-300">Attribution ROAS</span>
              </div>
            </div>
          </Tilt3D>

          <Tilt3D intensity={10} className="h-full">
            <div className="bg-surface-container border border-border-gray p-6 rounded-2xl space-y-4 border-dashed border-amber-400/40 shadow-lg h-full">
              <h4 className="font-code-sm text-[13px] font-bold uppercase tracking-wider text-amber-400 border-b border-border-gray/50 pb-2">
                3. Code Web (En Annexe)
              </h4>
              <div className="flex flex-wrap gap-2 font-code-sm text-[12px]">
                <span className="bg-zinc-950 border border-amber-400/20 px-3 py-1.5 rounded-lg text-amber-300">React.js 19</span>
                <span className="bg-zinc-950 border border-amber-400/20 px-3 py-1.5 rounded-lg text-amber-300">JavaScript ES6+</span>
                <span className="bg-zinc-950 border border-amber-400/20 px-3 py-1.5 rounded-lg text-amber-300">Tailwind CSS</span>
                <span className="bg-zinc-950 border border-amber-400/20 px-3 py-1.5 rounded-lg text-amber-300">Google Apps Script</span>
                <span className="bg-zinc-950 border border-amber-400/20 px-3 py-1.5 rounded-lg text-amber-300">APIs & Webhooks</span>
              </div>
            </div>
          </Tilt3D>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SIMULATEUR DE PRESTATION HORAIRE (46$/H) 3D */}
      {/* ========================================================================= */}
      <Tilt3D intensity={6}>
        <section id="simulator-section" className="relative z-10 bg-surface-container border border-border-gray p-8 md:p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto w-full space-y-8">
          <div>
            <span className="font-code-sm text-[12px] text-primary-fixed-dim uppercase tracking-wider block mb-2">{"// Estimateur Financier En Temps Réel"}</span>
            <h2 className="font-display-xl text-[28px] md:text-[34px] font-bold text-on-surface uppercase tracking-tight">
              Estimez Le Budget De Votre Projet.
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 text-[14px]">
              Ajustez le volume d'heures par semaine et la durée globale pour évaluer le coût estimé de mon accompagnement sur la base de <strong>46$ / heure</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {/* Slide Hours per Week */}
              <div className="space-y-2">
                <div className="flex justify-between font-body-md text-[14px]">
                  <span className="text-on-surface-variant">Heures par Semaine</span>
                  <span className="text-on-surface font-bold font-code-sm">{hoursPerWeek} heures / sem.</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* Slide Project Duration */}
              <div className="space-y-2">
                <div className="flex justify-between font-body-md text-[14px]">
                  <span className="text-on-surface-variant">Durée du Projet</span>
                  <span className="text-on-surface font-bold font-code-sm">{durationWeeks} semaines</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  step="1"
                  value={durationWeeks}
                  onChange={(e) => setDurationWeeks(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="pt-2 font-body-md text-[13px] text-zinc-500">
                * Taux horaire de base : <span className="text-on-surface font-bold">46$ / heure</span>.
              </div>
            </div>

            {/* Results Block */}
            <div className="bg-black/40 border border-zinc-900 p-6 rounded-xl flex flex-col justify-between text-center md:text-left h-full min-h-[220px]">
              <div>
                <span className="font-code-sm text-[11px] text-zinc-400 uppercase tracking-widest block mb-2">Synthèse Tarifaire</span>
                <div className="space-y-1">
                  <p className="font-body-md text-[13.5px] text-zinc-400">Budget Semaine : <span className="font-code-sm font-bold text-on-surface">{weeklyBudget.toLocaleString()} $</span></p>
                  <p className="font-body-md text-[13.5px] text-zinc-400">Total d'Heures : <span className="font-code-sm font-bold text-primary">{totalHours.toLocaleString()} heures</span></p>
                </div>
              </div>

              <div className="border-t border-zinc-900/80 pt-4 my-3">
                <span className="font-code-sm text-[11px] text-growth-green uppercase tracking-widest block mb-1">Budget Total Estimé</span>
                <span className="font-body-md text-[36px] font-black text-growth-green tracking-tight">{totalBudget.toLocaleString()} $</span>
              </div>
              
              <button
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    message: `Bonjour Miguel (Co-fondateur Alliance Agency), j'ai utilisé votre simulateur : je souhaite réserver un accompagnement de ${hoursPerWeek}h/semaine pendant ${durationWeeks} semaines (budget total estimé à environ ${totalBudget}$)...`
                  }));
                  scrollToSection('contact-form-section');
                }}
                className="w-full bg-primary hover:bg-blue-600 text-white text-center py-3.5 rounded-xl font-body-md text-[12px] font-bold uppercase tracking-wider transition-all shadow-md transform hover:scale-105"
              >
                Réserver Pour {totalBudget.toLocaleString()} $
              </button>
            </div>
          </div>
        </section>
      </Tilt3D>

      {/* ========================================================================= */}
      {/* 8. FORMULAIRE DE CONTACT PROFESSIONNEL 3D */}
      {/* ========================================================================= */}
      <Tilt3D intensity={5}>
        <section id="contact-form-section" className="relative z-10 max-w-2xl mx-auto w-full bg-surface-container border border-border-gray p-8 md:p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-8 space-y-2">
            <span className="font-code-sm text-[12px] text-primary-fixed-dim uppercase tracking-wider block">{"// Contact Direct & Alliance Agency"}</span>
            <h2 className="font-display-xl text-[28px] md:text-[34px] font-bold text-on-surface uppercase tracking-tight">
              Discutons De Vos Objectifs De Croissance.
            </h2>
            <p className="font-body-md text-on-surface-variant text-[14px]">
              Remplissez ce formulaire pour échanger avec moi directement sur WhatsApp.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-growth-green/10 border border-growth-green/40 p-8 rounded-2xl text-center space-y-4">
              <svg className="w-14 h-14 text-growth-green mx-auto" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3 className="font-display-xl text-[20px] font-bold text-on-surface uppercase">Message Transmis Sur WhatsApp !</h3>
              <p className="font-body-md text-on-surface-variant text-[14px]">
                Merci {formData.name}. Je prends connaissance de votre demande ({formData.need}) et je vous réponds rapidement.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 text-primary underline font-code-sm text-[12px] font-bold"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-body-md text-[14px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-on-surface-variant font-medium block text-[13px]">Votre Nom Complet *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="ex: Jean Dupont"
                    className="w-full bg-zinc-950 border border-border-gray px-4 py-3.5 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-on-surface-variant font-medium block text-[13px]">Adresse E-mail *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nom@entreprise.com"
                    className="w-full bg-zinc-950 border border-border-gray px-4 py-3.5 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-on-surface-variant font-medium block text-[13px]">Entreprise / Marque</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nom de votre entreprise"
                    className="w-full bg-zinc-950 border border-border-gray px-4 py-3.5 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-on-surface-variant font-medium block text-[13px]">Budget Envisagé</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-border-gray px-4 py-3.5 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option>&lt; 1000€</option>
                    <option>1000€ - 3000€</option>
                    <option>3000€ - 5000€</option>
                    <option>&gt; 5000€</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-on-surface-variant font-medium block text-[13px]">Votre Service Prioritaire *</label>
                <select
                  name="need"
                  value={formData.need}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-border-gray px-4 py-3.5 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option>Marketing d'Influence & Partenariats (Alliance Agency)</option>
                  <option>Acquisition Média & Social Ads (Meta / Google)</option>
                  <option>Audit & Optimisation de Tunnels de Vente</option>
                  <option>Tracking Server-Side (Meta CAPI & GA4)</option>
                  <option>Accompagnement Growth Global (Alliance Agency)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-on-surface-variant font-medium block text-[13px]">Détails De Votre Projet *</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Décrivez vos objectifs d'acquisition et vos attentes..."
                  className="w-full bg-zinc-950 border border-border-gray px-4 py-3.5 rounded-xl text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl uppercase tracking-wider transition-all shadow-lg text-[13px] flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <span>Contacter Sur WhatsApp</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.26-1.117z"/></svg>
              </button>
            </form>
          )}
        </section>
      </Tilt3D>
    </main>
  );
};

export default Home;
