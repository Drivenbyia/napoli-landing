import React from 'react';
import { Home, Sparkles, Heart, HelpCircle } from 'lucide-react';

export default function StickyNav() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white/90 backdrop-blur-md rounded-full shadow-lg flex justify-between items-center px-6 py-3 z-50">

      {/* Logo Napoli */}
      <div className="font-extrabold text-deep-sage text-lg shrink-0">
        Napoli 🐾
      </div>

      {/* Menu icons — cachés sur xs */}
      <nav className="hidden sm:flex items-center gap-1 md:gap-2">
        <a
          href="#"
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full text-deep-sage/50 hover:text-deep-sage hover:bg-sage/10 transition-all duration-200"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Accueil</span>
        </a>
        <a
          href="#features"
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full text-deep-sage/50 hover:text-deep-sage hover:bg-sage/10 transition-all duration-200"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] font-bold">Fonctionnalités</span>
        </a>
        <a
          href="#mission"
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full text-deep-sage/50 hover:text-deep-sage hover:bg-sage/10 transition-all duration-200"
        >
          <Heart className="w-5 h-5" />
          <span className="text-[10px] font-bold">Mission</span>
        </a>
        <a
          href="#faq"
          className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full text-deep-sage/50 hover:text-deep-sage hover:bg-sage/10 transition-all duration-200"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="text-[10px] font-bold">FAQ</span>
        </a>
      </nav>

      {/* CTA Button */}
      <button
        onClick={() => {}}
        className="bg-deep-sage text-white font-bold px-4 py-2.5 rounded-full hover:bg-sage transition-colors duration-300 shadow-md text-sm whitespace-nowrap shrink-0"
      >
        Télécharger maintenant
      </button>
    </div>
  );
}
