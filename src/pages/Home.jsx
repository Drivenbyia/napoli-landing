import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert, Phone, Flame, ChevronRight,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#4A5D4E] font-sans selection:bg-[#8A9A86] selection:text-white overflow-x-hidden flex flex-col">

      {/* ── FLOATING HEADER ── */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 py-4 md:py-6 flex justify-center pointer-events-none">
        <div className="bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#8A9A86]/10 rounded-full p-1.5 flex items-center pointer-events-auto">
          <div className="relative flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#8A9A86] shadow-md">
            <span className="text-lg">🐶</span>
            <span className="hidden sm:inline">Je suis Maître</span>
            <span className="sm:hidden">Maître</span>
          </div>
          <Link
            to="/pro"
            className="relative flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-full text-sm font-bold text-[#4A5D4E]/60 hover:text-[#4A5D4E] transition-all duration-300"
          >
            <span className="text-lg">🩺</span>
            <span className="hidden sm:inline">Je suis Vétérinaire</span>
            <span className="sm:hidden">Vétérinaire</span>
          </Link>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className={`flex-grow pt-24 md:pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* ── HERO ── */}
        <section
          className="relative rounded-[3rem] overflow-hidden mb-16 md:mb-24 min-h-[88vh] flex items-center"
          style={{ backgroundImage: "url('/images/bg-abstrait.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-[#FAF9F6]/40 backdrop-blur-[2px]" />

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-8 md:px-12 lg:px-16 py-16">

            {/* Colonne gauche */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-[#4A5D4E]">
                L'amour n'est pas une <span className="text-[#8A9A86]">science exacte.</span> Sa santé, si.
              </h1>
              <p className="text-lg md:text-xl text-[#4A5D4E]/70 mb-8 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Le premier carnet de santé prédictif qui transforme les recommandations vétérinaires en une routine quotidienne simple, visuelle et motivante.
              </p>

              {/* Formulaire Netlify — Lead Magnet */}
              <form
                name="b2c-leads"
                method="POST"
                data-netlify="true"
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 mb-8"
              >
                <input type="hidden" name="form-name" value="b2c-leads" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Votre adresse email..."
                  className="flex-1 px-4 py-3 rounded-xl border border-[#8A9A86]/30 bg-white/80 focus:outline-none focus:border-[#8A9A86] focus:ring-2 focus:ring-[#8A9A86]/20 text-[#4A5D4E] placeholder-[#4A5D4E]/40 font-medium"
                />
                <button
                  type="submit"
                  className="bg-[#4A5D4E] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#8A9A86] hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-[#4A5D4E]/20 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Rejoindre la liste <ChevronRight className="w-4 h-4" />
                </button>
              </form>

              {/* Preuve sociale */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 opacity-90">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] bg-[#8A9A86]/20 flex items-center justify-center text-sm shadow-sm">🐶</div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] bg-[#B5A397]/20 flex items-center justify-center text-sm shadow-sm z-10">🐕</div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] bg-[#E27D60]/20 flex items-center justify-center text-sm shadow-sm z-20">🦮</div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] bg-[#4A5D4E]/10 flex items-center justify-center text-sm shadow-sm z-30">🐩</div>
                </div>
                <div className="text-sm font-bold text-[#4A5D4E]/80 text-center sm:text-left">
                  <span className="text-[#E27D60] tracking-widest text-base">★★★★★</span><br />
                  Rejoint par +500 maîtres passionnés
                </div>
              </div>
            </div>

            {/* Colonne droite : iPhone */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/images/iphone-napoli.png"
                alt="Application Napoli sur iPhone"
                className="w-full max-w-xs md:max-w-sm lg:max-w-lg object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ── BENTO GRID B2C ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

          {/* Bento 1 : Harmony Rings */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#8A9A86]/10 flex flex-col-reverse md:flex-row items-center gap-10 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div className="flex-1 z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8A9A86]/10 text-[#8A9A86] text-xs font-bold uppercase tracking-wider mb-5">Vue d'ensemble</div>
              <h3 className="text-3xl font-extrabold mb-4">Les "Harmony Rings"</h3>
              <p className="text-[#4A5D4E]/70 text-lg font-medium leading-relaxed">
                Visualisez la santé de votre chien en un coup d'œil. Fermez vos 3 anneaux quotidiens (Nutrition, Activité, Soins) pour lui garantir la meilleure espérance de vie.
              </p>
            </div>
            <div className="flex-1 flex justify-center z-10">
              <img
                src="/images/badge-bouclier.png"
                alt="Badge Harmony Rings"
                className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#8A9A86]/5 rounded-full blur-3xl group-hover:bg-[#8A9A86]/10 transition-colors duration-700 pointer-events-none"></div>
          </div>

          {/* Bento 2 : Scan & Nutrition */}
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

          {/* Bento 3 : La Pilule Dopamine */}
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

          {/* Bento 4 : SOS & Toxiques */}
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

        {/* ── TARIFS B2C ── */}
        <section className="mt-20 md:mt-28 mb-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#8A9A86]/10 text-[#8A9A86] font-bold text-sm mb-6 uppercase tracking-wider">
            Offert pendant la Bêta
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A5D4E] mb-12">
            Un investissement transparent.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
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
          </div>
        </section>

        {/* ── FAQ B2C ── */}
        <section className="mt-24 mb-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A5D4E] mb-10 text-center">
            Vos questions, nos réponses
          </h2>
          <div className="space-y-4">
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
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="mailto:hello@napolicare.com" className="hover:text-white transition-colors">Contact</a>
            <a href="mailto:presse@napolicare.com" className="hover:text-white transition-colors">Espace Presse</a>
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
