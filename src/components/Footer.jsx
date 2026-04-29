import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
          <a
            href="https://pro.napolicare.com/#/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-taupe hover:text-white transition-colors"
          >
            Espace Vétérinaires
          </a>
          <Link to="/mentions-legales" className="hover:text-white transition-colors">
            Mentions légales
          </Link>
          <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
            Politique de confidentialité
          </Link>
          <Link to="/cgu" className="hover:text-white transition-colors">
            CGU
          </Link>
          <a href="mailto:hello@napolicare.com" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="mailto:presse@napolicare.com" className="hover:text-white transition-colors">
            Espace Presse
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-xs md:text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Napoli App. Tous droits réservés.</p>
        <p>Fait avec ❤️ pour nos chiens.</p>
      </div>
    </footer>
  );
}
