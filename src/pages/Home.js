import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Hourly Rate Simulator States
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
    need: 'Audit de tunnels',
    budget: '1000€ - 3000€',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Bonjour Miguel, je souhaite collaborer sur un projet. Voici mes informations :
- *Nom* : ${formData.name}
- *Email* : ${formData.email}
- *Entreprise* : ${formData.company || 'Non spécifiée'}
- *Besoin Principal* : ${formData.need}
- *Budget Estimé* : ${formData.budget}
- *Détails du projet* : ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/237693992919?text=${encodedText}`;
    
    // Ouvrir WhatsApp avec le message structuré
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative flex-grow pt-32 pb-section-gap max-w-7xl mx-auto px-4 md:px-margin-desktop w-full flex flex-col gap-section-gap overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] tech-radial-glow pointer-events-none"></div>
      
      {/* SECTION HERO */}
      <section className="relative flex flex-col md:flex-row items-center gap-margin-desktop pt-16 z-10 print:hidden">
        <div className="flex-grow flex-shrink flex flex-col gap-stack-md min-w-0 md:w-1/2">
          <div className="inline-flex items-center gap-2 border border-border-gray px-3 py-1.5 bg-surface-container rounded w-fit mb-4 font-code-sm text-[12px] text-primary-fixed-dim">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{"Douala, Cameroun"}</span>
          </div>
          
          <h1 className="font-display-xl text-[44px] md:text-[60px] font-extrabold leading-[1.1] text-on-surface tracking-tight uppercase">
            Sonkoue Miguel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 text-glow">
              Growth Marketer.
            </span>
          </h1>
          
          <p className="font-body-md text-[13px] text-primary-fixed-dim uppercase tracking-wider font-bold mb-2">
            Acquisition • Funnel • Data • Product
          </p>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl border-l-2 border-primary pl-4 mt-2">
            Orienté acquisition et performance avec un profil hybride <strong>Tech × Marketing × Growth</strong>. Je conçois des stratégies globales reliant conversion, contenu, expérience utilisateur et données pour optimiser le parcours client.
          </p>
          
          <div className="flex gap-4 mt-8 flex-wrap font-body-md text-[13px] font-bold uppercase tracking-wider">
            <button
              onClick={scrollToContact}
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded transition-all shadow text-center"
            >
              Lancer un projet
            </button>
            <button
              onClick={() => navigate('/case-studies')}
              className="border border-border-gray text-on-surface bg-surface-container/50 px-8 py-4 rounded hover:bg-surface-container hover:border-zinc-700 transition-all text-center"
            >
              Voir mon parcours
            </button>
          </div>
        </div>

        {/* Telemetry card widget */}
        <div className="flex-grow md:w-1/2 relative w-full aspect-square md:aspect-auto md:h-[580px] border border-border-gray bg-surface-black/60 backdrop-blur-md p-6 rounded flex flex-col justify-between overflow-hidden group shadow-lg">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-border-gray/50 font-code-sm">
            <div className="flex items-center gap-2">
              <span className="tech-dot tech-dot-active"></span>
              <span className="text-primary-fixed-dim uppercase tracking-wider font-bold text-[12px]">Agent Optimization Loop</span>
            </div>
            <span className="text-zinc-500 text-[11px]">Skill: Tech x Marketing</span>
          </div>

          <div className="flex-grow flex flex-col justify-start gap-4 font-code-sm text-[12.5px] text-on-surface-variant relative z-10 my-2">
            <div className="space-y-1">
              <span className="text-primary-fixed-dim font-bold block">[THOUGHT]</span>
              <p className="pl-4 text-zinc-300">Analyser le tunnel d'acquisition e-commerce et identifier les déperditions de trafic.</p>
            </div>
            
            <div className="space-y-1">
              <span className="text-indigo-400 font-bold block">[ACTION]</span>
              <p className="pl-4 text-zinc-300">Mettre en place un tracking avancé (Meta Conversions API) côté serveur via Google Apps Script.</p>
            </div>
            
            <div className="space-y-1">
              <span className="text-growth-green font-bold block">[OBSERVATION]</span>
              <p className="pl-4 text-zinc-300">Récupération des données événementielles validée (Pixel match quality: 99.8%).</p>
            </div>
            
            <div className="space-y-1">
              <span className="text-amber-400 font-bold block">[DECISION]</span>
              <p className="pl-4 text-zinc-300 font-bold">Optimiser les audiences publicitaires et améliorer le ROI des campagnes.</p>
            </div>

            <div className="mt-4 p-4 border border-border-gray bg-zinc-950/20 rounded">
              <div className="flex justify-between text-[11px] mb-2 font-bold text-on-surface">
                <span>TUNNEL VELOCITY</span>
                <span className="text-primary-fixed-dim">React & APIs Integration</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[90%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="border-t border-border-gray/50 pt-3 flex justify-between items-center text-[10px] font-code-sm text-zinc-500">
            <span>PORTFOLIO STAT: ACTIVE</span>
            <span>CONTACT: +237 693 992 919</span>
          </div>
        </div>
      </section>

      {/* MODIFIÉ : SIMULATEUR DE PRESTATION HORAIRE (46$/H) */}
      <section className="relative z-10 bg-surface-container border border-border-gray p-8 rounded shadow-lg max-w-4xl mx-auto w-full space-y-8">
        <div>
          <span className="font-code-sm text-[11px] text-primary-fixed-dim uppercase tracking-wider block mb-2">{"// Budget Simulator"}</span>
          <h2 className="font-display-xl text-[28px] font-bold text-on-surface uppercase tracking-tight">
            Estimez Le Budget De Votre Prestation.
          </h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Ajustez le volume d'heures hebdomadaire et la durée du projet pour calculer le coût total estimé de mon accompagnement sur la base de <strong>46$ / heure</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Slide Hours per Week */}
            <div className="space-y-2">
              <div className="flex justify-between font-body-md text-[14px]">
                <span className="text-on-surface-variant">Heures par Semaine</span>
                <span className="text-on-surface font-bold font-code-sm">{hoursPerWeek} heures / semaine</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="5"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-primary"
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
                className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="pt-4 font-body-md text-[13px] text-zinc-500">
              * Taux horaire de base défini à <span className="text-on-surface font-bold">46$ / H</span>.
            </div>
          </div>

          {/* Results Block */}
          <div className="bg-black/40 border border-zinc-900 p-6 rounded flex flex-col justify-between text-center md:text-left h-full min-h-[220px]">
            <div>
              <span className="font-code-sm text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">Estimation Financière</span>
              <div className="space-y-1">
                <p className="font-body-md text-[13px] text-zinc-400">Budget Hebdomadaire : <span className="font-code-sm font-bold text-on-surface">{weeklyBudget.toLocaleString()} $</span></p>
                <p className="font-body-md text-[13px] text-zinc-400">Volume Total Estimé : <span className="font-code-sm font-bold text-primary">{totalHours.toLocaleString()} heures</span></p>
              </div>
            </div>

            <div className="border-t border-zinc-900/60 pt-4 mt-4">
              <span className="font-code-sm text-[10px] text-growth-green uppercase tracking-widest block mb-1">Budget Total Estimé</span>
              <span className="font-body-md text-[36px] font-black text-growth-green tracking-tight">{totalBudget.toLocaleString()} $</span>
            </div>
            
            <button
              onClick={scrollToContact}
              className="mt-6 w-full bg-zinc-900 hover:bg-zinc-800 text-on-surface text-center py-2.5 rounded font-body-md text-[12px] font-bold uppercase tracking-wider transition-all"
            >
              Réserver Cette Prestation
            </button>
          </div>
        </div>
      </section>

      {/* SECTION LOGOS D'ACQUISITION */}
      <section className="relative border-t border-b border-border-gray/50 py-12 flex flex-col items-center gap-8 bg-surface-black/30 backdrop-blur-sm z-10 rounded print:hidden">
        <h3 className="font-code-sm text-[12px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">{"// Technologies & Canaux d'Acquisition"}</h3>
        <div className="flex flex-wrap justify-center gap-8 text-[14px] font-code-sm text-on-surface-variant uppercase tracking-widest font-semibold py-4">
          <span>Meta Ads</span>
          <span>Google Analytics</span>
          <span>React.js</span>
          <span>Google Scripts</span>
          <span>Tracking Pixels</span>
          <span>Funnel Building</span>
        </div>
      </section>

      {/* SECTION FORMULAIRE DE CONTACT PROFESSIONNEL */}
      <section id="contact-form-section" className="relative z-10 max-w-xl mx-auto w-full bg-surface-container border border-border-gray p-8 rounded shadow-lg">
        <div className="text-center mb-8">
          <span className="font-code-sm text-[11px] text-primary-fixed-dim uppercase tracking-wider block mb-2">{"// Contact & Collaboration"}</span>
          <h2 className="font-display-xl text-[28px] font-bold text-on-surface uppercase tracking-tight">
            Discutons De Votre Croissance.
          </h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Entrez vos besoins pour recevoir une proposition d'audit ou d'intégration.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-black/20 border border-growth-green/30 p-8 rounded text-center space-y-4 animate-pulse">
            <svg className="w-12 h-12 text-growth-green mx-auto" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <h3 className="font-display-xl text-[18px] font-bold text-on-surface">Demande Envoyée Avec Succès !</h3>
            <p className="font-body-md text-on-surface-variant text-[14px]">
              Merci {formData.name}. Je prends connaissance de votre besoin ({formData.need}) et je vous recontacte sous 24h.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 font-body-md text-[14px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-on-surface-variant font-medium block">Nom Complet</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Votre nom"
                  className="w-full bg-zinc-950 border border-border-gray px-4 py-3 rounded text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-on-surface-variant font-medium block">Adresse E-mail</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="nom@entreprise.com"
                  className="w-full bg-zinc-950 border border-border-gray px-4 py-3 rounded text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-on-surface-variant font-medium block">Entreprise / Projet</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Nom de l'entreprise"
                  className="w-full bg-zinc-950 border border-border-gray px-4 py-3 rounded text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-on-surface-variant font-medium block">Budget Estimé</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-border-gray px-4 py-3 rounded text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option>&lt; 1000€</option>
                  <option>1000€ - 3000€</option>
                  <option>3000€ - 5000€</option>
                  <option>&gt; 5000€</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-on-surface-variant font-medium block">Votre Besoin Principal</label>
              <select
                name="need"
                value={formData.need}
                onChange={handleInputChange}
                className="w-full bg-zinc-950 border border-border-gray px-4 py-3 rounded text-on-surface focus:outline-none focus:border-primary/50 transition-colors"
              >
                <option>Audit de tunnels</option>
                <option>Tracking & Pixels (CAPI)</option>
                <option>Social Media & Acquisition</option>
                <option>Développement Web React</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-on-surface-variant font-medium block">Détails de Votre Projet</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Décrivez brièvement vos objectifs de croissance..."
                className="w-full bg-zinc-950 border border-border-gray px-4 py-3 rounded text-on-surface focus:outline-none focus:border-primary/50 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded uppercase tracking-wider transition-colors shadow"
            >
              Envoyer la Demande
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

export default Home;
