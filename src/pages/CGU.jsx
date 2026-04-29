import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LAST_UPDATE = '29 avril 2026';

export default function CGU() {
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
          Conditions Générales d'Utilisation
        </h1>
        <p className="text-deep-sage/50 font-medium mb-12 text-sm">
          Dernière mise à jour : {LAST_UPDATE}
        </p>

        {/* ── DISCLAIMER MÉDICAL ── */}
        <div className="bg-terracotta/10 border-l-4 border-terracotta rounded-2xl p-6 mb-10">
          <p className="text-terracotta font-extrabold text-base mb-1">⚕️ Avertissement médical important</p>
          <p className="text-deep-sage/80 font-medium leading-relaxed text-sm">
            <strong>Napoli ne remplace pas un vétérinaire.</strong> Les informations, alertes et scores
            de santé fournis par l'application ont un caractère informatif et préventif. Ils ne
            constituent en aucun cas un diagnostic médical vétérinaire. En cas d'urgence ou de
            doute sur la santé de votre animal, consultez immédiatement un professionnel de santé
            vétérinaire qualifié.
          </p>
        </div>

        <div className="space-y-8">

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">1. Objet</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Les présentes Conditions Générales d'Utilisation (ci-après "CGU") régissent l'accès
              et l'utilisation de l'application mobile <strong>Napoli</strong> et du site{' '}
              <strong>napolicare.com</strong>, édités par Napoli App SAS (ci-après "Napoli").
              Toute utilisation de l'application implique l'acceptation pleine et entière des
              présentes CGU.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">2. Description du service</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed mb-4">
              Napoli est une application de santé prédictive pour chiens. Elle propose :
            </p>
            <ul className="list-disc list-inside text-deep-sage/70 font-medium leading-relaxed space-y-2 ml-2">
              <li>Un suivi quotidien de la santé et du comportement de votre chien.</li>
              <li>Des alertes préventives basées sur l'analyse de données comportementales.</li>
              <li>La fonctionnalité <strong>Sniffari</strong> de balade géolocalisée.</li>
              <li>Un espace de partage pour la <strong>co-parentalité</strong> (plusieurs gardiens).</li>
              <li>Une mise en relation avec des vétérinaires partenaires.</li>
            </ul>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">3. Offres et tarifs — Freemium & Pass Famille</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed mb-4">
              Napoli propose deux formules :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-extrabold text-deep-sage mb-2">3.1 Offre Freemium (gratuite)</h3>
                <p className="text-deep-sage/70 font-medium leading-relaxed">
                  Accessible à tous les utilisateurs sans engagement. Elle inclut les fonctionnalités
                  de base de suivi de santé pour un chien. Certaines fonctionnalités avancées
                  (alertes prédictives, rapports détaillés, Sniffari illimité) sont réservées aux
                  abonnés Premium.
                </p>
              </div>
              <div>
                <h3 className="font-extrabold text-deep-sage mb-2">3.2 Pass Famille (abonnement payant)</h3>
                <p className="text-deep-sage/70 font-medium leading-relaxed">
                  Le Pass Famille permet de gérer plusieurs chiens et de partager l'accès complet
                  entre plusieurs co-gardiens (membres de la famille, pension, dog-sitter). L'abonnement
                  est souscrit par le titulaire du compte et couvre l'ensemble des profils rattachés.
                  Le tarif est indiqué dans l'application et peut évoluer ; les abonnés en cours sont
                  notifiés 30 jours avant toute modification tarifaire.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">4. Co-parentalité — responsabilités partagées</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              La fonctionnalité de co-parentalité permet à plusieurs utilisateurs de partager le
              suivi d'un même chien (famille, pension, dog-sitter). Dans ce cadre :{' '}
            </p>
            <ul className="list-disc list-inside text-deep-sage/70 font-medium leading-relaxed space-y-2 ml-2 mt-4">
              <li>
                Le <strong>gardien principal</strong> (titulaire du profil) est responsable de
                l'exactitude des informations de santé renseignées.
              </li>
              <li>
                Chaque co-gardien invité est responsable des données qu'il saisit dans l'application.
              </li>
              <li>
                Napoli ne peut être tenu responsable des conflits ou erreurs résultant d'une saisie
                incorrecte ou contradictoire entre co-gardiens.
              </li>
              <li>
                Le gardien principal peut révoquer l'accès d'un co-gardien à tout moment depuis les
                paramètres du profil.
              </li>
            </ul>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">5. Limitation de responsabilité médicale</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Conformément à l'avertissement en tête de ces CGU,{' '}
              <strong>Napoli ne constitue pas un acte de soin vétérinaire</strong>. Les scores de
              santé, alertes et recommandations sont générés à titre informatif et préventif, sur
              la base de données déclaratives et comportementales. Napoli App SAS décline toute
              responsabilité en cas de préjudice résultant d'une interprétation médicale des données
              fournies par l'application.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">6. Obligations de l'utilisateur</h2>
            <ul className="list-disc list-inside text-deep-sage/70 font-medium leading-relaxed space-y-2 ml-2">
              <li>Fournir des informations exactes et à jour sur son chien.</li>
              <li>Ne pas utiliser l'application à des fins frauduleuses ou illicites.</li>
              <li>Ne pas partager ses identifiants de connexion avec des tiers non autorisés.</li>
              <li>Respecter les droits de propriété intellectuelle de Napoli App SAS.</li>
            </ul>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">7. Propriété intellectuelle</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              L'ensemble des contenus de l'application Napoli (algorithmes, design, textes, logos,
              iconographie) est la propriété exclusive de Napoli App SAS. Toute reproduction ou
              exploitation sans autorisation préalable est interdite.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">8. Résiliation et suppression de compte</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              L'utilisateur peut supprimer son compte à tout moment depuis les paramètres de
              l'application. La suppression entraîne l'effacement de toutes les données personnelles
              associées dans un délai de 30 jours, conformément à l'Art. 17 du RGPD (droit à
              l'effacement). Les données relatives à un abonnement actif sont conservées pour
              des obligations légales de facturation (5 ans).
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">9. Modification des CGU</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Napoli App SAS se réserve le droit de modifier les présentes CGU à tout moment.
              Les utilisateurs seront informés de toute modification substantielle par notification
              in-app ou email au moins 15 jours avant l'entrée en vigueur des nouvelles conditions.
              La poursuite de l'utilisation de l'application vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-sage/10">
            <h2 className="text-xl font-extrabold text-deep-sage mb-4">10. Droit applicable</h2>
            <p className="text-deep-sage/70 font-medium leading-relaxed">
              Les présentes CGU sont régies par le droit français. Tout litige relatif à leur
              interprétation ou exécution relève de la compétence exclusive des tribunaux
              français. Pour toute question, contactez-nous à{' '}
              <a href="mailto:hello@napolicare.com" className="text-sage hover:underline">
                hello@napolicare.com
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
