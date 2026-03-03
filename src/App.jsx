import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, Activity, Phone, Flame, ChevronRight, Award, 
  ScanLine, MapPin, Pill, CalendarCheck, HeartPulse
} from 'lucide-react';

// --- DESIGN SYSTEM NAPOLI ---
// Sage Green: #8A9A86 (Primary & Rings)
// Deep Sage: #4A5D4E (Text & Dark Accents)
// Warm Taupe: #B5A397 (Secondary backgrounds)
// Terracotta: #E27D60 (Alerts & SOS)
// Cream: #FAF9F6 (Main Background)

export default function App() {
  const [isVetMode, setIsVetMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { 
    setIsLoaded(true); 
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#4A5D4E] font-sans selection:bg-[#8A9A86] selection:text-white transition-colors duration-500 overflow-x-hidden">
      
      {/* FLOATING HEADER & TOGGLE */}
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

      <main className={`pt-32 md:pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* HERO TITLES */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
           <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15] text-[#4A5D4E]">
              {isVetMode ? (
                <>La prolongation de votre <span className="text-[#8A9A86] inline-block relative">expertise<div className="absolute -bottom-2 left-0 w-full h-2 bg-[#8A9A86]/20 rounded-full"></div></span>, dans la poche de vos clients.</>
              ) : (
                <>Prolongez l'espérance de vie de votre chien. <span className="text-[#8A9A86] block mt-2">Sans y penser.</span></>
              )}
            </h1>
            <p className="text-lg md:text-xl text-[#4A5D4E]/70 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
              {isVetMode 
                ? "Napoli garantit l'observance de vos traitements complexes. Intégrez vos outils de prise de RDV existants et prescrivez des objectifs caloriques stricts à distance."
                : "La première application de santé prédictive qui transforme les recommandations vétérinaires en une routine quotidienne simple, visuelle et motivante."
              }
            </p>
            <button className="bg-[#4A5D4E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8A9A86] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#4A5D4E]/20 flex items-center gap-2 mx-auto">
              {isVetMode ? "Découvrir l'Espace Clinique" : "Rejoindre la liste d'attente"}
              <ChevronRight className="w-5 h-5" />
            </button>
        </div>

        {/* --- BENTO GRID: B2C (MAÎTRE) --- */}
        {!isVetMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            
            {/* Bento 1: Harmony Rings (Large) - Spans 2 cols */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group hover:shadow-lg transition-shadow duration-500">
              <div className="flex-1 z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8A9A86]/10 text-[#8A9A86] text-xs font-bold uppercase tracking-wider mb-5">Vue d'ensemble</div>
                <h3 className="text-3xl font-extrabold mb-4">Les "Harmony Rings"</h3>
                <p className="text-[#4A5D4E]/70 text-lg font-medium leading-relaxed">
                  Visualisez la santé de votre chien en un coup d'œil. Fermez vos 3 anneaux quotidiens (Nutrition, Activité, Soins) pour lui garantir la meilleure espérance de vie.
                </p>
              </div>
              <div className="flex-1 flex justify-center z-10 w-full">
                {/* Simulated SVG Rings */}
                <div className="relative w-56 h-56 bg-[#FAF9F6] rounded-full flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-700">
                   <div className="absolute w-48 h-48 rounded-full border-[14px] border-[#8A9A86] border-t-transparent rotate-45 transition-all duration-1000 ease-out"></div>
                   <div className="absolute w-32 h-32 rounded-full border-[14px] border-[#B5A397] border-l-transparent rotate-12 transition-all duration-1000 delay-100 ease-out"></div>
                   <div className="absolute w-16 h-16 rounded-full border-[14px] border-[#E27D60] border-b-transparent -rotate-12 transition-all duration-1000 delay-200 ease-out"></div>
                   <HeartPulse className="w-6 h-6 text-[#8A9A86] animate-pulse" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#8A9A86]/5 rounded-full blur-3xl group-hover:bg-[#8A9A86]/10 transition-colors duration-700"></div>
            </div>

            {/* Bento 2: Scan & Nutrition - Spans 1 col */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 relative overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500">
              <div>
                <div className="w-14 h-14 bg-[#B5A397]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#B5A397]/20 transition-colors">
                  <ScanLine className="w-7 h-7 text-[#B5A397]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Scan & Nutrition</h3>
                <p className="text-[#4A5D4E]/70 font-medium leading-relaxed">Fini le doseur approximatif. Scannez, ajustez, et offrez-lui une nutrition sur-mesure digne d'un athlète.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="bg-[#8A9A86]/10 text-[#4A5D4E] text-sm font-bold px-4 py-2 rounded-xl">Prot 38%</span>
                <span className="bg-[#B5A397]/10 text-[#4A5D4E] text-sm font-bold px-4 py-2 rounded-xl">Lip 12%</span>
                <span className="bg-[#FAF9F6] text-[#4A5D4E] text-sm font-bold px-4 py-2 rounded-xl border border-black/5">Gluc 50%</span>
              </div>
            </div>

            {/* Bento 3: Gamification - Spans 1 col */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 relative overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500">
              <div>
                <div className="w-14 h-14 bg-[#8A9A86]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8A9A86]/20 transition-colors">
                  <Award className="w-7 h-7 text-[#8A9A86]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">La Pilule Dopamine</h3>
                <p className="text-[#4A5D4E]/70 font-medium leading-relaxed">Prendre soin de lui devient un jeu. Maintenez votre série d'activités et débloquez des trophées.</p>
              </div>
              <div className="bg-[#FAF9F6] rounded-2xl p-4 flex items-center gap-4 mt-8 border border-black/5 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-[#E27D60]/10 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-[#E27D60]" />
                </div>
                <div>
                  <p className="text-xs text-[#4A5D4E]/50 font-bold uppercase tracking-wider mb-0.5">Série : 12 Jours</p>
                  <p className="font-bold text-[15px]">Expert Sniffari 🏆</p>
                </div>
              </div>
            </div>

            {/* Bento 4: SOS & Toxiques - Spans 2 cols */}
            <div className="lg:col-span-2 bg-[#E27D60] text-white rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-10 hover:shadow-xl transition-shadow duration-500">
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
              
              {/* Background Decoration */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        )}

        {/* --- BENTO GRID: B2B (VÉTÉRINAIRE) --- */}
        {isVetMode && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            
            {/* B2B Bento 1: Smart Split / Prise de RDV */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#8A9A86]/10 flex flex-col md:flex-row items-center gap-12 group hover:shadow-lg transition-shadow duration-500">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B5A397]/10 text-[#B5A397] text-xs font-bold uppercase tracking-wider mb-5">Acquisition</div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#4A5D4E]">Le "Smart Split" <br className="hidden md:block" />(RDV Intégrés)</h3>
                <p className="text-[#4A5D4E]/70 text-lg font-medium leading-relaxed">
                  Acquisition client sans friction. Ne changez pas vos habitudes : vos clients prennent rendez-vous sur votre logiciel habituel (<span className="text-[#4A5D4E] font-bold">Doctolib, CaptainVet, Pilepoils</span>) via notre WebView, sans jamais quitter l'application Napoli.
                </p>
              </div>
              <div className="flex-1 bg-[#FAF9F6] rounded-3xl p-6 md:p-8 border border-black/5 w-full shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B5A397]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
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

            {/* B2B Bento 2: Surcharge Calorique */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500">
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
                    <div className="bg-[#8A9A86] h-full rounded-full w-[100%]"></div>
                 </div>
              </div>
            </div>

            {/* B2B Bento 3: Pilulier & Observance */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500">
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
      </main>
    </div>
  );
}


