import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LAST_UPDATE = '29 avril 2026';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-cream text-deep-sage font-sans flex flex-col">

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center bg-cream/80 backdrop-blur-xl border-b border-sage/10 shadow-[0_1px_20px_rgb(0,0,0,0.03)]">
        <Link to="/">
          <img
            src="/images/monogram_napoli.svg"
            alt="Napoli, l'application santé prédictive pour chiens"
            className="h-10 w-auto"
          />
        </Link>
        <Link
          to="/"
          className="bg-sage text-white font-bold px-5 py-2.5 rounded-full hover:bg-deep-sage transition-colors duration-300 shadow-md text-sm"
        >
          Télécharger
        </Link>
      </header>

      {/* ── CONTENT ── */}
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-deep-sage mb-4">
          Mentions légales
        </h1>
        <p className="text-deep-sage/50 font-medium mb-12 text-sm">
          Dernière mise à jour : {LAST_UPDATE}
        </p>

        <div className="space-y-8">

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">1. Éditeur du site</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Le site <strong>napolicare.com</strong> est édité par la société{' '}
              <strong>Napoli App SAS</strong>, au capital de [X] €, immatriculée au Registre
              du Commerce et des Sociétés de [Ville] sous le numéro [SIREN].<br /><br />
              <strong>Siège social :</strong> [Adresse]<br />
              <strong>Directeur de la publication :</strong> [Nom du dirigeant]<br />
              <strong>Email :</strong>{' '}
              <a href="mailto:hello@napolicare.com" className="text-sage hover:underline">
                hello@napolicare.com
              </a>
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">2. Hébergement</h2>
            <div className="space-y-4 text-deep-sage/70 font-medium leading-relaxed">
              <div>
                <p className="font-extrabold text-deep-sage mb-1">Site web (napolicare.com)</p>
                <p>
                  <strong>Netlify, Inc.</strong><br />
                  44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis.<br />
                  <a
                    href="https://www.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage hover:underline"
                  >
                    www.netlify.com
                  </a>
                </p>
              </div>
              <div>
                <p className="font-extrabold text-deep-sage mb-1">Application mobile & données de santé</p>
                <p>
                  <strong>Google Ireland Limited</strong> (Google Cloud Platform — GCP),
                  certifié <strong>Hébergeur de Données de Santé (HDS)</strong> conformément
                  à l'article L.1111-8 du Code de la santé publique.<br />
                  Gordon House, Barrow Street, Dublin 4, Irlande.<br />
                  <a
                    href="https://cloud.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage hover:underline"
                  >
                    cloud.google.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">3. Délégué à la Protection des Données (DPO)</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Napoli App SAS a désigné un Délégué à la Protection des Données. Pour toute
              question relative au traitement de vos données personnelles ou pour exercer
              vos droits RGPD, vous pouvez le contacter à :{' '}
              <a href="mailto:privacy@napolicare.com" className="text-sage hover:underline">
                privacy@napolicare.com
              </a>
              <br /><br />
              Vous avez également le droit d'introduire une réclamation auprès de la{' '}
              <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong>{' '}
              — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">www.cnil.fr</a>.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">4. Propriété intellectuelle</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes,
              iconographie) est la propriété exclusive de Napoli App SAS ou de ses partenaires.
              Toute reproduction, représentation ou diffusion, en tout ou partie, sans
              l'autorisation expresse et préalable de Napoli App SAS est interdite et
              constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants
              du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">5. Données personnelles & RGPD</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Napoli App SAS s'engage à protéger la vie privée de ses utilisateurs. Les données
              collectées via l'application mobile sont utilisées exclusivement dans le but de
              fournir le service de suivi de santé animale. Elles ne sont jamais revendues à
              des tiers.<br /><br />
              Pour en savoir plus sur nos pratiques en matière de protection des données,
              consultez notre{' '}
              <Link to="/politique-confidentialite" className="text-sage hover:underline font-bold">
                Politique de Confidentialité
              </Link>
              .
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">6. Cookies</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies
              techniques strictement nécessaires au bon fonctionnement du site peuvent être
              déposés. Ils ne font l'objet d'aucun traitement de données personnelles.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">7. Limitation de responsabilité</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Les informations fournies par l'application Napoli ont un caractère informatif
              et de suivi quotidien. <strong>Elles ne remplacent en aucun cas l'avis d'un
              vétérinaire diplômé.</strong> En cas d'urgence médicale pour votre animal,
              contactez immédiatement un professionnel de santé vétérinaire.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">8. Droit applicable</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Les présentes mentions légales sont régies par le droit français. En cas de
              litige, les tribunaux compétents sont ceux du ressort de [Ville], France.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
