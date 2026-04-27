import React, { useState, useEffect } from 'react';
import {
  ShieldAlert, Phone, Flame, Bell,
  CheckCircle, Star
} from 'lucide-react';
import StickyNav from '../components/StickyNav';
import WaitlistModal from '../components/WaitlistModal';

const testimonials = [
  {
    name: 'Sophie M.',
    dog: 'Milo, Labrador 4 ans',
    text: 'En 3 semaines, Milo a perdu 800g. L\'algorithme nutritionnel est bluffant — bien plus précis que ce que je faisais intuitivement.',
    avatar: '🐶',
  },
  {
    name: 'Julien R.',
    dog: 'Luna, Border Collie 2 ans',
    text: 'L\'alerte toxique m\'a sauvé la mise un dimanche soir. Luna avait avalé une raisin. Direction urgences en 10 minutes.',
    avatar: '🦮',
  },
  {
    name: 'Clara D.',
    dog: 'Noisette, Bouledogue 6 ans',
    text: 'La gamification change tout. Je n\'oublie plus un seul vaccin depuis 4 mois. Noisette a sa série en cours, on ne peut pas s\'arrêter !',
    avatar: '🐕',
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-cream text-deep-sage font-sans selection:bg-sage selection:text-white overflow-x-hidden flex flex-col">

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />

      {/* ── NAVBAR B2C ── */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center bg-cream/80 backdrop-blur-xl border-b border-sage/10 shadow-[0_1px_20px_rgb(0,0,0,0.03)]">
        <img
          src="/images/monogram_napoli.svg"
          alt="Napoli, l'application santé prédictive pour chiens"
          className="h-10 w-auto"
        />
        <button
          onClick={openModal}
          className="bg-sage text-white font-bold px-5 py-2.5 rounded-full hover:bg-deep-sage transition-colors duration-300 shadow-md text-sm"
        >
          Télécharger
        </button>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className={`flex-grow pt-24 md:pt-28 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* ── HERO ── */}
        <section
          className="relative rounded-[3rem] overflow-hidden mb-16 md:mb-24 min-h-[88vh] flex items-center"
          style={{ backgroundImage: "url('/images/bg-abstrait.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-cream/40 backdrop-blur-[2px]" />

          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-8 md:px-12 lg:px-16 py-16">

            {/* Colonne gauche */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 text-sage text-xs font-bold uppercase tracking-wider mb-6">
                Accès VIP Bêta ✨
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-deep-sage">
                L'amour n'est pas une <span className="text-sage">science</span> exacte. Sa santé, si.
              </h1>
              <p className="text-lg md:text-xl text-deep-sage/70 mb-8 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Le premier carnet de santé prédictif qui transforme les recommandations vétérinaires en une routine quotidienne simple, visuelle et motivante.
              </p>

              {/* Badges App Store & Google Play */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0 mb-8">
                {/* App Store */}
                <button
                  onClick={openModal}
                  className="flex items-center gap-3 bg-black text-white px-5 py-3.5 rounded-2xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-white shrink-0">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70 font-medium">Télécharger sur l'</div>
                    <div className="text-base font-bold leading-tight">App Store</div>
                  </div>
                </button>

                {/* Google Play */}
                <button
                  onClick={openModal}
                  className="flex items-center gap-3 bg-[#01875F] text-white px-5 py-3.5 rounded-2xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#01875F]/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-white shrink-0">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85A1.5 1.5 0 0 1 3 20.5m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27M20.16 10.81c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70 font-medium">Disponible sur</div>
                    <div className="text-base font-bold leading-tight">Google Play</div>
                  </div>
                </button>
              </div>

              {/* Preuve sociale */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 opacity-90">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-cream bg-sage/20 flex items-center justify-center text-sm shadow-sm">🐶</div>
                  <div className="w-10 h-10 rounded-full border-2 border-cream bg-taupe/20 flex items-center justify-center text-sm shadow-sm z-10">🐕</div>
                  <div className="w-10 h-10 rounded-full border-2 border-cream bg-terracotta/20 flex items-center justify-center text-sm shadow-sm z-20">🦮</div>
                  <div className="w-10 h-10 rounded-full border-2 border-cream bg-deep-sage/10 flex items-center justify-center text-sm shadow-sm z-30">🐩</div>
                </div>
                <div className="text-sm font-bold text-deep-sage/80 text-center sm:text-left">
                  <span className="text-terracotta tracking-widest text-base">★★★★★</span><br />
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
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Bento 1 : Harmony Rings */}
          <div className="md:col-span-1 md:row-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-sage/10 flex flex-col items-center gap-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div className="text-center z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage/10 text-sage text-xs font-bold uppercase tracking-wider mb-5">Vue d'ensemble</div>
              <h3 className="text-3xl font-extrabold mb-4">Les "Harmony Rings"</h3>
              <p className="text-deep-sage/70 text-lg font-medium leading-relaxed">
                Visualisez la santé de votre chien en un coup d'œil. Fermez vos 3 anneaux quotidiens (Nutrition, Activité, Soins) pour lui garantir la meilleure espérance de vie.
              </p>
            </div>
            <div className="flex justify-center z-10 mt-auto">
              <img
                src="/images/badge-bouclier.png"
                alt="Badge Harmony Rings"
                className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl group-hover:bg-sage/10 transition-colors duration-700 pointer-events-none"></div>
          </div>

          {/* Bento 2 : Scan & Nutrition */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-sage/10 relative overflow-hidden flex flex-col items-center md:items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <img
              src="/images/badge-gamelle.png"
              alt="Badge Nutrition"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 object-contain drop-shadow-lg hover:-translate-y-2 transition-transform duration-300 mb-6"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3">Scan & Nutrition</h3>
              <p className="text-deep-sage/70 font-medium leading-relaxed mb-6">Fini le doseur approximatif. Scannez, ajustez, et offrez-lui une nutrition sur-mesure digne d'un athlète.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-auto">
              <span className="bg-sage/10 text-deep-sage text-sm font-bold px-4 py-2 rounded-xl">Prot 38%</span>
              <span className="bg-taupe/10 text-deep-sage text-sm font-bold px-4 py-2 rounded-xl">Lip 12%</span>
              <span className="bg-cream text-deep-sage text-sm font-bold px-4 py-2 rounded-xl border border-black/5">Gluc 50%</span>
            </div>
          </div>

          {/* Bento 3 : La Pilule Dopamine */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-sage/10 relative overflow-hidden flex flex-col items-center md:items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <img
              src="/images/badge-sniffari.png"
              alt="Badge Gamification Sniffari"
              className="w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 object-contain drop-shadow-lg hover:-translate-y-2 transition-transform duration-300 mb-6"
            />
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold mb-3">La Pilule Dopamine</h3>
              <p className="text-deep-sage/70 font-medium leading-relaxed">Prendre soin de lui devient un jeu. Maintenez votre série d'activités et débloquez des trophées.</p>
            </div>
            <div className="bg-cream rounded-2xl p-4 flex items-center gap-4 mt-8 border border-black/5 w-full group-hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                <Flame className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="text-xs text-deep-sage/50 font-bold uppercase tracking-wider mb-0.5">Série : 12 Jours</p>
                <p className="font-bold text-[15px]">Expert Sniffari 🏆</p>
              </div>
            </div>
          </div>

          {/* Bento 4 : SOS & Toxiques */}
          <div className="bg-terracotta text-white rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-5">Urgence</div>
              <h3 className="text-2xl font-extrabold mb-3 flex items-center gap-3">
                <ShieldAlert className="w-7 h-7 shrink-0" /> SOS & Toxiques
              </h3>
              <p className="text-white/90 font-medium leading-relaxed">
                Encyclopédie toxique intégrée et guidage GPS vers la clinique de garde. La réponse médicale à un clic.
              </p>
            </div>
            <button
              onClick={openModal}
              className="mt-auto w-full bg-white text-terracotta px-6 py-4 rounded-2xl font-extrabold text-base flex justify-center items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/10 z-10"
            >
              <Phone className="w-5 h-5" /> Urgence Vétérinaire
            </button>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* Bento 5 : Rappels Intelligents */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-sage/10 relative overflow-hidden flex flex-col items-center md:items-start group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-deep-sage/10 flex items-center justify-center mb-6 shrink-0">
              <Bell className="w-8 h-8 text-deep-sage" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold mb-3">Rappels Intelligents</h3>
              <p className="text-deep-sage/70 font-medium leading-relaxed">Vaccins, vermifuges, contrôles annuels. Napoli anticipe chaque soin et vous prévient avant qu'il ne soit urgent.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-deep-sage/10 text-deep-sage text-sm font-bold px-3 py-1.5 rounded-xl">Vaccins ✓</span>
              <span className="bg-sage/10 text-deep-sage text-sm font-bold px-3 py-1.5 rounded-xl">Vermifuge ✓</span>
            </div>
          </div>

          {/* Bento 6 : Témoignages */}
          <div className="md:col-span-3 bg-deep-sage text-white rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-8">
                Ils nous font confiance
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 flex flex-col gap-4 hover:bg-white/15 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-sage text-sage" />
                      ))}
                    </div>
                    <p className="text-white/90 font-medium leading-relaxed text-sm flex-1">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{t.name}</p>
                        <p className="text-white/50 text-xs font-medium">{t.dog}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

        </div>

        {/* ── MISSION STATEMENT ── */}
        <section id="mission" className="mt-24 md:mt-32 bg-sage/5 rounded-[3rem] py-24 md:py-32 px-6 md:px-12 text-center border border-sage/10 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-deep-sage mb-8">
              Pourquoi Napoli ? 🐾
            </h2>
            <p className="text-lg md:text-xl text-deep-sage/80 leading-relaxed font-medium">
              Napoli n'est pas née dans la Silicon Valley. Elle est née d'une frustration : celle de naviguer à l'aveugle avec la santé de notre meilleur ami. Entre les tableaux Excel illisibles et les informations contradictoires sur internet, il manquait un outil. Un outil aussi précis que l'esprit d'un vétérinaire, et aussi simple qu'un jeu d'enfant. Napoli, c'est le chaînon manquant pour leur offrir la vie la plus longue et la plus saine possible.
            </p>
          </div>
        </section>

        {/* ── TARIFS B2C ── */}
        <section className="mt-24 md:mt-32 mb-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-sage/10 text-sage font-bold text-sm mb-6 uppercase tracking-wider">
            Offert pendant la Bêta
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-sage mb-12">
            Un investissement transparent.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {/* Tier Gratuit */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-sage/10 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-2">Essentiel</h3>
              <div className="text-4xl font-extrabold text-deep-sage mb-6">0€</div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage shrink-0" />
                  <span className="font-medium text-deep-sage/80">Carnet de santé complet</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage shrink-0" />
                  <span className="font-medium text-deep-sage/80">Suivi de poids régulier</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage shrink-0" />
                  <span className="font-medium text-deep-sage/80">Annuaire vétérinaire & SOS</span>
                </li>
              </ul>
              <button
                onClick={openModal}
                className="w-full bg-gray-100 text-deep-sage py-4 rounded-2xl font-bold border border-black/5 hover:bg-gray-200 transition-colors"
              >
                Commencer
              </button>
            </div>

            {/* Tier Premium */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-md border-2 border-sage flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sage text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Le plus choisi</div>
              <h3 className="text-2xl font-bold mb-2">Napoli Care+</h3>
              <div className="mb-2">
                <span className="text-xl text-gray-400 line-through font-medium mr-3">49,99€ / an</span>
                <span className="text-4xl font-extrabold text-sage">0€ <span className="text-lg font-bold">aujourd'hui</span></span>
              </div>
              <p className="text-sm text-deep-sage/60 font-medium mb-8">Soit ~4€/mois. Le prix d'un café pour allonger l'espérance de vie de son chien.</p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage shrink-0" />
                  <span className="font-medium text-deep-sage/80">Algorithme nutritionnel sur-mesure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage shrink-0" />
                  <span className="font-medium text-deep-sage/80">Scan toxique & ingrédients illimité</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage shrink-0" />
                  <span className="font-medium text-deep-sage/80">Trophées & Gamification (Dopamine)</span>
                </li>
              </ul>
              <button
                onClick={openModal}
                className="w-full bg-sage text-white py-4 rounded-2xl font-bold hover:bg-deep-sage transition-colors shadow-lg shadow-sage/20"
              >
                Débloquer Care+
              </button>
            </div>
          </div>
        </section>

        {/* ── FAQ B2C ── */}
        <section id="faq" className="mt-24 md:mt-32 mb-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-deep-sage mb-10 text-center">
            Vos questions, nos réponses
          </h2>
          <div className="space-y-4">
            <div className="bg-cream border border-sage/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
              <h4 className="text-lg md:text-xl font-bold text-deep-sage mb-3">L'application Napoli est-elle gratuite ?</h4>
              <p className="text-deep-sage/80 font-medium leading-relaxed">Oui ! Le carnet de santé, le suivi de poids et l'annuaire vétérinaire seront toujours gratuits. Pour le Calculateur de macros et la Gamification, nous proposerons plus tard l'abonnement Napoli Care+.</p>
            </div>
            <div className="bg-cream border border-sage/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
              <h4 className="text-lg md:text-xl font-bold text-deep-sage mb-3">Mon vétérinaire n'utilise pas Napoli. Puis-je quand même l'utiliser ?</h4>
              <p className="text-deep-sage/80 font-medium leading-relaxed">Absolument. L'application est autonome. Vous pourrez générer un "Rapport de Santé" PDF en un clic pour votre vétérinaire lors de vos consultations.</p>
            </div>
            <div className="bg-cream border border-sage/20 rounded-[2rem] p-6 md:p-8 shadow-sm">
              <h4 className="text-lg md:text-xl font-bold text-deep-sage mb-3">Comment calculez-vous les rations et calories ?</h4>
              <p className="text-deep-sage/80 font-medium leading-relaxed">Nos algorithmes utilisent les directives cliniques strictes (NRC) et se basent sur les données d'OpenFoodFacts, parfaitement ajustés selon l'âge, la race et l'activité de votre chien.</p>
            </div>
          </div>
        </section>

      </main>

      <StickyNav />

      {/* ── FOOTER ── */}
      <footer className="bg-[#2C302E] text-white pt-16 pb-8 px-6 md:px-12 mt-10 rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div>
            <img
              src="/images/logo_horizontal.svg"
              alt="Napoli"
              className="h-14 w-auto mb-3 brightness-0 invert"
            />
            <p className="text-white/60 text-sm md:text-base font-medium max-w-xs">
              L'application de santé prédictive qui prolonge leur espérance de vie.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base font-bold text-white/80">
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="mailto:hello@napolicare.com" className="hover:text-white transition-colors">Contact</a>
            <a href="mailto:presse@napolicare.com" className="hover:text-white transition-colors">Espace Presse</a>
            <a
              href="mailto:pro@napolicare.com"
              className="text-taupe hover:text-white transition-colors"
            >
              Espace Vétérinaires
            </a>
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
