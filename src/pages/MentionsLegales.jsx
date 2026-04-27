import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-cream text-deep-sage font-sans flex flex-col">

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center bg-cream/80 backdrop-blur-xl border-b border-sage/10 shadow-[0_1px_20px_rgb(0,0,0,0.03)]">
        <a href="/">
          <img
            src="/images/monogram_napoli.svg"
            alt="Napoli, l'application santé prédictive pour chiens"
            className="h-10 w-auto"
          />
        </a>
        <a
          href="/"
          className="bg-sage text-white font-bold px-5 py-2.5 rounded-full hover:bg-deep-sage transition-colors duration-300 shadow-md text-sm"
        >
          Télécharger
        </a>
      </header>

      {/* ── CONTENT ── */}
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-deep-sage mb-4">
          Mentions légales
        </h1>
        <p className="text-deep-sage/50 font-medium mb-12 text-sm">Dernière mise à jour : {new Date().getFullYear()}</p>

        <div className="space-y-10">

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">1. Éditeur du site</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Le site <strong>napolicare.com</strong> est édité par la société <strong>Napoli App</strong>, SAS au capital de [X] €,<br />
              immatriculée au Registre du Commerce et des Sociétés de [Ville] sous le numéro [SIREN].<br /><br />
              <strong>Siège social :</strong> [Adresse]<br />
              <strong>Email :</strong>{' '}
              <a href="mailto:hello@napolicare.com" className="text-sage hover:underline">
                hello@napolicare.com
              </a>
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">2. Hébergement</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Ce site est hébergé par <strong>Netlify, Inc.</strong><br />
              44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis.<br />
              <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">
                www.netlify.com
              </a>
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">3. Propriété intellectuelle</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, iconographie) est la propriété exclusive de Napoli App ou de ses partenaires. Toute reproduction, représentation ou diffusion, en tout ou partie, sans l'autorisation expresse et préalable de Napoli App est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">4. Données personnelles & RGPD</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Napoli App s'engage à protéger la vie privée de ses utilisateurs. Les données collectées via l'application mobile sont utilisées exclusivement dans le but de fournir le service de suivi de santé animale. Elles ne sont jamais revendues à des tiers.<br /><br />
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:privacy@napolicare.com" className="text-sage hover:underline">
                privacy@napolicare.com
              </a>
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">5. Cookies</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés. Ils ne font l'objet d'aucun traitement de données personnelles.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">6. Limitation de responsabilité</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Les informations fournies par l'application Napoli ont un caractère informatif et de suivi quotidien. Elles ne remplacent en aucun cas l'avis d'un vétérinaire diplômé. En cas d'urgence médicale pour votre animal, contactez immédiatement un professionnel de santé vétérinaire.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">7. Droit applicable</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents sont ceux du ressort de [Ville], France.
            </p>
          </section>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#2C302E] text-white pt-16 pb-8 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[4rem]">
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
