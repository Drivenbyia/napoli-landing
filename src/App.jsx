import React, { useState, useEffect } from 'react';
import {
  ShieldAlert, Phone, Flame, ChevronRight,
  ScanLine, MapPin, Pill, Activity, HeartPulse, CheckCircle
} from 'lucide-react';

// --- DESIGN SYSTEM NAPOLI 2026 ---
// Sage Green:    #8A9A86 (Primary & Rings)
// Deep Sage:     #4A5D4E (Text & Dark Accents)
// Warm Taupe:    #B5A397 (Secondary backgrounds)
// Terracotta:    #E27D60 (Alerts & SOS)
// Cream:         #FAF9F6 (Main Background)

export default function App() {
  const [isVetMode, setIsVetMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#4A5D4E] font-sans selection:bg-[#8A9A86] selection:text-white transition-colors duration-500 overflow-x-hidden flex flex-col">

      {/* ── FLOATING HEADER & TOGGLE ── */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 py-4 md:py-6 flex justify-center pointer-events-none">
        <div className="bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#8A9A86]/10 rounded-full p-1.5 flex items-center pointer-events-auto">
          <button
            onClick={() => setIsVetMode(false)}
            className={`relative flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              !isVetMode ? 'text-white bg-[#8A9A86] shadow-md scale-100' : 'text-[#4A5D4E]/60 hover:text-[#4A5D4E] scale-95'
            }`}
          >
            <span className="text-lg">🐶</span>
            <span className="hidden sm:inline">Je suis Maître</span>
            <span className="sm:hidden">Maître</span>
          </button>
          <button
            onClick={() => setIsVetMode(true)}
            className={`relative flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              isVetMode ? 'text-[#4A5D4E] bg-white shadow-md border border-[#8A9A86]/10 scale-100' : 'text-[#4A5D4E]/60 hover:text-[#4A5D4E] scale-95'
            }`}
          >
            <span className="text-lg">🩺</span>
            <span className="hidden sm:inline">Je suis Vétérinaire</span>
            <span className="sm:hidden">Vétérinaire</span>
          </button>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className={`flex-grow pt-24 md:pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* ── A. HERO HEADER ── */}
        <section
          className="relative rounded-[3rem] overflow-hidden mb-16 md:mb-24 min-h-[88vh] flex items-center"
          style={{ backgroundImage: "url('/images/bg-abstrait.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay léger pour lisibilité */}
          <div className="absolute inset-0 bg-[#FAF9F6]/40 backdrop-blur-[2px]" />

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-8 md:px-12 lg:px-16 py-16">

            {/* Colonne gauche : texte + CTA */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-[#4A5D4E]">
                {isVetMode ? (
                  <>La prolongation de votre <span className="text-[#8A9A86] inline-block relative">expertise<div className="absolute -bottom-2 left-0 w-full h-2 bg-[#8A9A86]/20 rounded-full"></div></span>, dans la poche de vos clients.</>
                ) : (
                  <>L'amour n'est pas une <span className="text-[#8A9A86]">science exacte.</span> Sa santé, si.</>
                )}
              </h1>
              <p className="text-lg md:text-xl text-[#4A5D4E]/70 mb-10 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {isVetMode
                  ? "Napoli garantit l'observance de vos traitements complexes. Intégrez vos outils de prise de RDV existants et prescrivez des objectifs caloriques stricts à distance."
                  : "Le premier carnet de santé prédictif qui transforme les recommandations vétérinaires en une routine quotidienne simple, visuelle et motivante."
                }
              </p>

              <button className="bg-[#4A5D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8A9A86] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#4A5D4E]/20 flex items-center gap-2 mx-auto lg:mx-0 mb-8">
                {isVetMode ? "Découvrir l'Espace Clinique" : "Rejoindre la liste d'attente"}
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Preuve sociale */}
              <div className="flex flex-col items-center lg:items-start justify-center gap-2 opacity-90">
                {!isVetMode ? (
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] bg-[#8A9A86]/20 flex items-center justify-center text-sm shadow-sm">🐶</div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] bg-[#B5A397]/20 flex items-center justify-center text-sm shadow-sm z-10">🐕</div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] bg-[#E27D60]/20 flex items-center justify-center text-sm shadow-sm z-20">🦮</div>
                      <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] bg-[#4A5D4E]/10 flex items-center justify-center text-sm shadow-sm z-30">🐩</div>
                    </div>
                    <div className="text-sm font-bold text-[#4A5D4E]/80 text-center sm:text-left">
                      <span className="text-[#E27D60] tracking-widest text-base">★★★★★</span><br/>
                      Rejoint par +500 maîtres passionnés
                    </div>
                  </div>
                ) : (
                  <div className="text-sm font-bold text-[#4A5D4E]/80 text-center lg:text-left">
                    <span className="text-[#E27D60] tracking-widest text-base mb-1 block">★★★★★</span>
                    Déjà 50+ cliniques partenaires
                  </div>
                )}
              </div>
            </div>

            {/* Colonne droite : iPhone flottant */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/images/iphone-napoli.png"
                alt="Application Napoli sur iPhone"
                className="w-full max-w-xs md:max-w-sm lg:max-w-lg object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ── B. BENTO GRID : B2C (MAÎTRE) ── */}
        {!isVetMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

            {/* Bento 1 : Harmony Rings — badge-bouclier.png */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col-reverse md:flex-row items-center gap-10 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              {/* Texte (affiché après l'image sur mobile grâce à flex-col-reverse) */}
              <div className="flex-1 z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8A9A86]/10 text-[#8A9A86] text-xs font-bold uppercase tracking-wider mb-5">Vue d'ensemble</div>
                <h3 className="text-3xl font-extrabold mb-4">Les "Harmony Rings"</h3>
                <p className="text-[#4A5D4E]/70 text-lg font-medium leading-relaxed">
                  Visualisez la santé de votre chien en un coup d'œil. Fermez vos 3 anneaux quotidiens (Nutrition, Activité, Soins) pour lui garantir la meilleure espérance de vie.
                </p>
              </div>
              {/* Badge bouclier (affiché en premier sur mobile) */}
              <div className="flex-1 flex justify-center z-10">
                <img
                  src="/images/badge-bouclier.png"
                  alt="Badge Harmony Rings"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#8A9A86]/5 rounded-full blur-3xl group-hover:bg-[#8A9A86]/10 transition-colors duration-700 pointer-events-none"></div>
            </div>

            {/* Bento 2 : Scan & Nutrition — badge-gamelle.png */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 relative overflow-hidden flex flex-col items-center md:items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <img
                src="/images/badge-gamelle.png"
                alt="Badge Nutrition"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 object-contain drop-shadow-lg hover:-translate-y-2 transition-transform duration-300 mb-6"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">Scan & Nutrition</h3>
                <p className="text-[#4A5D4E]/70 font-medium leading-relaxed mb-6">Fini le doseur approximatif. Scannez, ajustez, et offrez-lui une nutrition sur-mesure digne d'un athlète.</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-auto">
                <span className="bg-[#8A9A86]/10 text-[#4A5D4E] text-sm font-bold px-4 py-2 rounded-xl">Prot 38%</span>
                <span className="bg-[#B5A397]/10 text-[#4A5D4E] text-sm font-bold px-4 py-2 rounded-xl">Lip 12%</span>
                <span className="bg-[#FAF9F6] text-[#4A5D4E] text-sm font-bold px-4 py-2 rounded-xl border border-black/5">Gluc 50%</span>
              </div>
            </div>

            {/* Bento 3 : La Pilule Dopamine — badge-sniffari.png */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 relative overflow-hidden flex flex-col items-center md:items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <img
                src="/images/badge-sniffari.png"
                alt="Badge Gamification Sniffari"
                className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 object-contain drop-shadow-lg hover:-translate-y-2 transition-transform duration-300 mb-6"
              />
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold mb-3">La Pilule Dopamine</h3>
                <p className="text-[#4A5D4E]/70 font-medium leading-relaxed">Prendre soin de lui devient un jeu. Maintenez votre série d'activités et débloquez des trophées.</p>
              </div>
              <div className="bg-[#FAF9F6] rounded-2xl p-4 flex items-center gap-4 mt-8 border border-black/5 w-full group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-[#E27D60]/10 flex items-center justify-center shrink-0">
                  <Flame className="w-6 h-6 text-[#E27D60]" />
                </div>
                <div>
                  <p className="text-xs text-[#4A5D4E]/50 font-bold uppercase tracking-wider mb-0.5">Série : 12 Jours</p>
                  <p className="font-bold text-[15px]">Expert Sniffari 🏆</p>
                </div>
              </div>
            </div>

            {/* Bento 4 : SOS & Toxiques — fond Terracotta */}
            <div className="lg:col-span-2 bg-[#E27D60] text-white rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="flex-1 z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-5">Urgence</div>
                <h3 className="text-3xl font-extrabold mb-4 flex items-center justify-center md:justify-start gap-3">
                  <ShieldAlert className="w-8 h-8" /> SOS & Toxiques
                </h3>
                <p className="text-white/90 text-lg font-medium leading-relaxed">
                  L'esprit léger. En cas de doute sur un aliment (encyclopédie toxique intégrée) ou d'urgence absolue, la réponse médicale est à un clic avec guidage GPS vers la clinique de garde.
                </p>
              </div>
              <div className="flex-none z-10 w-full md:w-auto">
                <button className="w-full md:w-auto bg-white text-[#E27D60] px-8 py-5 rounded-2xl font-extrabold text-lg flex justify-center items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/10">
                  <Phone className="w-6 h-6" /> Urgence Vétérinaire
                </button>
              </div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>

          </div>
        )}

        {/* ── BENTO GRID : B2B (VÉTÉRINAIRE) ── */}
        {isVetMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">

            {/* B2B Bento 1 : Smart Split */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#8A9A86]/10 flex flex-col md:flex-row items-center gap-12 group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B5A397]/10 text-[#B5A397] text-xs font-bold uppercase tracking-wider mb-5">Acquisition</div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#4A5D4E]">Le "Smart Split" <br className="hidden md:block" />(RDV Intégrés)</h3>
                <p className="text-[#4A5D4E]/70 text-lg font-medium leading-relaxed">
                  Acquisition client sans friction. Ne changez pas vos habitudes : vos clients prennent rendez-vous sur votre logiciel habituel (<span className="text-[#4A5D4E] font-bold">Doctolib, CaptainVet, Pilepoils</span>) via notre WebView, sans jamais quitter l'application Napoli.
                </p>
              </div>
              <div className="flex-1 bg-[#FAF9F6] rounded-3xl p-6 md:p-8 border border-black/5 w-full shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B5A397]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-black/5 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                    <MapPin className="text-[#8A9A86] w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-extrabold text-[#4A5D4E] text-lg">Clinique des Lilas</p>
                    <p className="text-sm text-[#4A5D4E]/60 font-medium">À 2.4 km • Ouvert</p>
                  </div>
                </div>
                <button className="w-full bg-[#4A5D4E] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#8A9A86] transition-colors shadow-md relative z-10">
                  Prendre RDV (via CaptainVet)
                </button>
              </div>
            </div>

            {/* B2B Bento 2 : Surcharge Calorique */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div>
                <div className="w-14 h-14 bg-[#8A9A86]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8A9A86]/20 transition-colors">
                  <Activity className="w-7 h-7 text-[#8A9A86]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Surcharge Calorique Manuelle</h3>
                <p className="text-[#4A5D4E]/70 font-medium leading-relaxed mb-8">
                  Vous avez le dernier mot médical. Prescrivez un objectif calorique strict pour vos patients pathologiques (insuffisance rénale, obésité). L'application recalcule les rations en temps réel.
                </p>
              </div>
              <div className="bg-[#FAF9F6] p-5 rounded-2xl border border-black/5">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-xs text-[#4A5D4E]/60 font-bold uppercase tracking-wider">Objectif Prescrit (MER)</span>
                  <span className="text-[#8A9A86] font-extrabold text-xl">450 <span className="text-sm font-medium">kcal/j</span></span>
                </div>
                <div className="w-full bg-gray-200/60 rounded-full h-3 overflow-hidden">
                  <div className="bg-[#8A9A86] h-full rounded-full w-full"></div>
                </div>
              </div>
            </div>

            {/* B2B Bento 3 : Pilulier & Observance */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div>
                <div className="w-14 h-14 bg-[#E27D60]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E27D60]/20 transition-colors">
                  <Pill className="w-7 h-7 text-[#E27D60]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Pilulier Intelligent & Observance</h3>
                <p className="text-[#4A5D4E]/70 font-medium leading-relaxed mb-8">
                  Boostez l'observance de vos traitements. Fini les antibiotiques arrêtés en cours de route. Napoli envoie des pushs dynamiques et le maître valide chaque prise.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-[#FAF9F6] p-5 rounded-2xl border border-black/5">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#8A9A86] flex items-center justify-center text-white shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <span className="font-bold text-[#4A5D4E] block">Cortisone</span>
                      <span className="text-xs text-[#4A5D4E]/60 font-medium">Matin (8h00)</span>
                    </div>
                  </div>
                  <span className="bg-[#8A9A86]/10 text-[#8A9A86] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Validé</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ── MISSION STATEMENT ── */}
        <section className="mt-20 md:mt-28 bg-[#8A9A86]/5 rounded-[3rem] py-20 px-6 md:px-12 text-center border border-[#8A9A86]/10 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A5D4E] mb-8">
              Pourquoi Napoli ? 🐾
            </h2>
            <p className="text-lg md:text-xl text-[#4A5D4E]/80 leading-relaxed font-medium">
              Napoli n'est pas née dans la Silicon Valley. Elle est née d'une frustration : celle de naviguer à l'aveugle avec la santé de notre meilleur ami. Entre les tableaux Excel illisibles et les informations contradictoires sur internet, il manquait un outil. Un outil aussi précis que l'esprit d'un vétérinaire, et aussi simple qu'un jeu d'enfant. Napoli, c'est le chaînon manquant pour leur offrir la vie la plus longue et la plus saine possible.
            </p>
          </div>
        </section>

        {/* ── C. TARIFS ── */}
        <section className="mt-20 md:mt-28 mb-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#8A9A86]/10 text-[#8A9A86] font-bold text-sm mb-6 uppercase tracking-wider">
            Offert pendant la Bêta
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A5D4E] mb-12">
            Un investissement transparent.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {!isVetMode ? (
              <>
                {/* Tier Gratuit */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2">Essentiel</h3>
                  <div className="text-4xl font-extrabold text-[#4A5D4E] mb-6">0€</div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Carnet de santé complet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Suivi de poids régulier</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Annuaire vétérinaire & SOS</span>
                    </li>
                  </ul>
                  <button className="w-full bg-gray-100 text-[#4A5D4E] py-4 rounded-2xl font-bold border border-black/5 hover:bg-gray-200 transition-colors">Commencer</button>
                </div>

                {/* Tier Premium */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-md border-2 border-[#8A9A86] flex flex-col relative transform md:-translate-y-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8A9A86] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Le plus choisi</div>
                  <h3 className="text-2xl font-bold mb-2">Napoli Care+</h3>
                  <div className="mb-2">
                    <span className="text-xl text-gray-400 line-through font-medium mr-3">49,99€ / an</span>
                    <span className="text-4xl font-extrabold text-[#8A9A86]">0€ <span className="text-lg font-bold">aujourd'hui</span></span>
                  </div>
                  <p className="text-sm text-[#4A5D4E]/60 font-medium mb-8">Soit ~4€/mois. Le prix d'un café pour allonger l'espérance de vie de son chien.</p>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Algorithme nutritionnel sur-mesure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Scan toxique & ingrédients illimité</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Trophées & Gamification (Dopamine)</span>
                    </li>
                  </ul>
                  <button className="w-full bg-[#8A9A86] text-white py-4 rounded-2xl font-bold hover:bg-[#4A5D4E] transition-colors shadow-lg shadow-[#8A9A86]/20">Débloquer Care+</button>
                </div>
              </>
            ) : (
              <>
                {/* B2B Tier Gratuit */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2">Clinique Référencée</h3>
                  <div className="text-4xl font-extrabold text-[#4A5D4E] mb-6">0€</div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Présence dans l'annuaire GPS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Visibilité locale accrue</span>
                    </li>
                  </ul>
                  <button className="w-full bg-gray-100 text-[#4A5D4E] py-4 rounded-2xl font-bold border border-black/5 hover:bg-gray-200 transition-colors">Référencer ma clinique</button>
                </div>

                {/* B2B Tier Premium */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-md border-2 border-[#8A9A86] flex flex-col relative transform md:-translate-y-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#8A9A86] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Partenaire Actif</div>
                  <h3 className="text-2xl font-bold mb-2">Board Médical / Partenaire</h3>
                  <div className="mb-2">
                    <span className="text-xl text-gray-400 line-through font-medium mr-3">59€ / mois</span>
                    <span className="text-4xl font-extrabold text-[#8A9A86]">0€ <span className="text-lg font-bold">aujourd'hui</span></span>
                  </div>
                  <p className="text-sm text-[#4A5D4E]/60 font-medium mb-8">Accès complet aux outils de suivi thérapeutique pendant toute la durée de la bêta.</p>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Dashboard d'observance des patients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Module de Surcharge Calorique Manuelle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[#8A9A86] shrink-0" />
                      <span className="font-medium text-[#4A5D4E]/80">Tag NFC de prescription pour le bureau</span>
                    </li>
                  </ul>
                  <button className="w-full bg-[#8A9A86] text-white py-4 rounded-2xl font-bold hover:bg-[#4A5D4E] transition-colors shadow-lg shadow-[#8A9A86]/20">Rejoindre le Board</button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── C. FAQ DYNAMIQUE ── */}
        <section className="mt-24 mb-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A5D4E] mb-10 text-center">
            Vos questions, nos réponses
          </h2>
          <div className="space-y-4">
            {!isVetMode ? (
              <>
                <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
                  <h4 className="text-lg md:text-xl font-bold text-[#4A5D4E] mb-3">L'application Napoli est-elle gratuite ?</h4>
                  <p className="text-[#4A5D4E]/80 font-medium leading-relaxed">Oui ! Le carnet de santé, le suivi de poids et l'annuaire vétérinaire seront toujours gratuits. Pour le Calculateur de macros et la Gamification, nous proposerons plus tard l'abonnement Napoli Care+.</p>
                </div>
                <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
                  <h4 className="text-lg md:text-xl font-bold text-[#4A5D4E] mb-3">Mon vétérinaire n'utilise pas Napoli. Puis-je quand même l'utiliser ?</h4>
                  <p className="text-[#4A5D4E]/80 font-medium leading-relaxed">Absolument. L'application est autonome. Vous pourrez générer un "Rapport de Santé" PDF en un clic pour votre vétérinaire lors de vos consultations.</p>
                </div>
                <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
                  <h4 className="text-lg md:text-xl font-bold text-[#4A5D4E] mb-3">Comment calculez-vous les rations et calories ?</h4>
                  <p className="text-[#4A5D4E]/80 font-medium leading-relaxed">Nos algorithmes utilisent les directives cliniques strictes (NRC) et se basent sur les données d'OpenFoodFacts, parfaitement ajustés selon l'âge, la race et l'activité de votre chien.</p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
                  <h4 className="text-lg md:text-xl font-bold text-[#4A5D4E] mb-3">Cela va-t-il me rajouter du travail en consultation ?</h4>
                  <p className="text-[#4A5D4E]/80 font-medium leading-relaxed">Au contraire. La prescription prend 10 secondes (via un tag NFC sur votre bureau). C'est le maître qui fait le travail à la maison. Vous ne faites que consulter le dashboard de suivi.</p>
                </div>
                <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
                  <h4 className="text-lg md:text-xl font-bold text-[#4A5D4E] mb-3">Faut-il changer de logiciel de prise de rendez-vous ?</h4>
                  <p className="text-[#4A5D4E]/80 font-medium leading-relaxed">Non. Napoli intègre un "Smart Split" (WebView). Si vous utilisez Doctolib ou CaptainVet, vos clients réserveront via ces plateformes directement depuis l'application Napoli.</p>
                </div>
                <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
                  <h4 className="text-lg md:text-xl font-bold text-[#4A5D4E] mb-3">Napoli est-elle conforme au RGPD ?</h4>
                  <p className="text-[#4A5D4E]/80 font-medium leading-relaxed">Totalement. Les données de santé animales et humaines sont strictement anonymisées, cryptées et hébergées sur des serveurs sécurisés en Europe.</p>
                </div>
              </>
            )}
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2C302E] text-white pt-16 pb-8 px-6 md:px-12 mt-10 rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Napoli 🐾</h2>
            <p className="text-white/60 text-sm md:text-base font-medium max-w-xs">
              L'application de santé prédictive qui prolonge leur espérance de vie.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base font-bold text-white/80">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Espace Presse</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-xs md:text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Napoli App. Tous droits réservés.</p>
          <p>Fait avec ❤️ pour nos chiens.</p>
        </div>
      </footer>

    </div>
  );
}
