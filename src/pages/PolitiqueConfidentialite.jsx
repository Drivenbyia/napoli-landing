import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LAST_UPDATE = '29 avril 2026';

export default function PolitiqueConfidentialite() {
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
          Politique de Confidentialité
        </h1>
        <p className="text-deep-sage/50 font-medium mb-12 text-sm">
          Dernière mise à jour : {LAST_UPDATE}
        </p>

        <div className="space-y-8">

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">1. Responsable du traitement</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Le responsable du traitement des données est <strong>Napoli App SAS</strong>,
              dont le siège social est situé à [Adresse]. Pour toute question relative à la
              protection de vos données, vous pouvez contacter notre Délégué à la Protection
              des Données (DPO) à l'adresse :{' '}
              <a href="mailto:privacy@napolicare.com" className="text-sage hover:underline">
                privacy@napolicare.com
              </a>
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">2. Données collectées</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed mb-4">
              Dans le cadre de l'utilisation de l'application Napoli, nous collectons les
              catégories de données suivantes :
            </p>
            <ul className="list-disc list-inside text-deep-sage/70 font-medium leading-relaxed space-y-2 ml-2">
              <li>
                <strong>Données d'identification</strong> : prénom, adresse email, photo de
                profil (optionnelle).
              </li>
              <li>
                <strong>Données relatives à votre chien</strong> : nom, race, âge, poids,
                historique de santé, vaccinations.
              </li>
              <li>
                <strong>Données comportementales</strong> : fréquence des repas, activité
                physique, qualité du sommeil, selles.
              </li>
              <li>
                <strong>Données de géolocalisation</strong> : activées <em>uniquement</em>{' '}
                pendant une session <strong>Sniffari</strong> (balade géolocalisée) et
                exclusivement avec votre consentement explicite. Napoli ne collecte jamais
                votre position en arrière-plan.
              </li>
              <li>
                <strong>Données analytiques</strong> : comportements d'usage via{' '}
                <strong>Firebase Analytics</strong> (Google) pour améliorer l'expérience
                utilisateur. Ces données sont anonymisées et agrégées.
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">3. Finalités du traitement</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed mb-4">
              Vos données sont traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside text-deep-sage/70 font-medium leading-relaxed space-y-2 ml-2">
              <li>Fournir le service de suivi de santé prédictive pour votre chien.</li>
              <li>Générer des alertes et recommandations personnalisées.</li>
              <li>Permettre la co-parentalité entre co-gardiens autorisés.</li>
              <li>Améliorer les algorithmes de détection préventive.</li>
              <li>
                Mettre en relation avec des vétérinaires partenaires (avec votre consentement
                préalable).
              </li>
              <li>Respecter nos obligations légales et comptables.</li>
            </ul>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">4. Hébergement et sécurité des données</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed mb-4">
              Les données de l'application mobile sont hébergées sur l'infrastructure{' '}
              <strong>Google Cloud Platform (GCP)</strong>, certifiée{' '}
              <strong>Hébergeur de Données de Santé (HDS)</strong> conformément à l'article
              L.1111-8 du Code de la santé publique français. Cette certification garantit un
              niveau de sécurité et de confidentialité adapté au traitement de données de
              santé animale.
            </p>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Le site web <strong>napolicare.com</strong> est hébergé par{' '}
              <strong>Netlify, Inc.</strong> (44 Montgomery Street, Suite 300, San Francisco,
              CA 94104, États-Unis). Les données de formulaire (liste d'attente) transitent
              via Netlify Forms et sont soumises à la politique de confidentialité de Netlify.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">5. Durée de conservation</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Les données personnelles sont conservées pendant toute la durée d'activité du
              compte, puis supprimées dans un délai de 30 jours après la fermeture du compte.
              Les données de facturation sont conservées 5 ans conformément aux obligations
              légales comptables.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">6. Vos droits RGPD</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous
              disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-deep-sage/70 font-medium leading-relaxed space-y-2 ml-2">
              <li>
                <strong>Droit d'accès</strong> (Art. 15) : obtenir une copie de vos données.
              </li>
              <li>
                <strong>Droit de rectification</strong> (Art. 16) : corriger des données
                inexactes.
              </li>
              <li>
                <strong>Droit à l'effacement</strong> (Art. 17) : demander la suppression de
                votre compte et de l'ensemble de vos données. Cette procédure est également
                accessible directement depuis les paramètres de l'application (
                <em>Paramètres → Mon compte → Supprimer mon compte</em>).
              </li>
              <li>
                <strong>Droit à la portabilité</strong> (Art. 20) : recevoir vos données dans
                un format structuré et lisible par machine.
              </li>
              <li>
                <strong>Droit d'opposition</strong> (Art. 21) : vous opposer à certains
                traitements, notamment à des fins de prospection.
              </li>
            </ul>
            <p className="text-deep-sage/70 font-medium leading-relaxed mt-4">
              Pour exercer ces droits, contactez notre DPO à{' '}
              <a href="mailto:privacy@napolicare.com" className="text-sage hover:underline">
                privacy@napolicare.com
              </a>
              . Vous avez également le droit d'introduire une réclamation auprès de la{' '}
              <strong>CNIL</strong> (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:underline"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">7. Partage des données</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Napoli App SAS ne vend jamais vos données personnelles à des tiers. Les données
              peuvent être partagées avec des sous-traitants techniques (GCP, Firebase, Netlify)
              dans le strict cadre de la fourniture du service, et avec des vétérinaires
              partenaires uniquement avec votre consentement explicite.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">8. Cookies</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Le site <strong>napolicare.com</strong> n'utilise pas de cookies de traçage ou
              publicitaires. Seuls des cookies techniques strictement nécessaires au bon
              fonctionnement du site peuvent être déposés. Ils ne font l'objet d'aucun
              traitement de données personnelles.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
