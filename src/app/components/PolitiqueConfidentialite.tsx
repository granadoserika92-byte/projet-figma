import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Header } from './Header';
import { Footer } from './Footer';

export function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              className="mb-8"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Politique de Confidentialité
              </h1>

              <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Collecte des données personnelles
                  </h2>
                  <p className="mb-4">
                    Les Clés du Cabanon (SIRET : 929 924 983 00026) collecte et traite vos
                    données personnelles dans le cadre de la fourniture de ses services de
                    conciergerie.
                  </p>
                  <p className="mb-2">
                    <strong>Les données collectées comprennent :</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Identité (nom, prénom)</li>
                    <li>Coordonnées (email, téléphone, adresse)</li>
                    <li>Informations relatives au bien immobilier</li>
                    <li>Données de navigation sur le site</li>
                    <li>Informations bancaires pour les paiements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Finalités du traitement
                  </h2>
                  <p className="mb-2">Vos données sont utilisées pour :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>La gestion de votre compte client</li>
                    <li>L'exécution des services de conciergerie</li>
                    <li>La communication avec les voyageurs</li>
                    <li>La facturation et le suivi des paiements</li>
                    <li>L'amélioration de nos services</li>
                    <li>L'envoi d'informations commerciales (avec votre consentement)</li>
                    <li>Le respect de nos obligations légales et réglementaires</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Base légale du traitement
                  </h2>
                  <p>
                    Le traitement de vos données personnelles est fondé sur :
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>L'exécution du contrat de prestation de services</li>
                    <li>Votre consentement (notamment pour les communications marketing)</li>
                    <li>Le respect d'obligations légales</li>
                    <li>Notre intérêt légitime à améliorer nos services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Destinataires des données
                  </h2>
                  <p className="mb-2">
                    Vos données peuvent être transmises à :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Notre équipe interne pour la gestion du service</li>
                    <li>Les plateformes de location (Airbnb, Booking, etc.)</li>
                    <li>Nos prestataires techniques (hébergement, paiement, etc.)</li>
                    <li>Les autorités compétentes en cas d'obligation légale</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Durée de conservation
                  </h2>
                  <p>
                    Vos données sont conservées pendant la durée de notre relation contractuelle,
                    puis archivées conformément aux obligations légales (généralement 3 à 10 ans
                    selon la nature des données).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Vos droits
                  </h2>
                  <p className="mb-4">
                    Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des
                    droits suivants :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données</li>
                    <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                    <li><strong>Droit à l'effacement :</strong> Supprimer vos données dans certaines conditions</li>
                    <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                    <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                    <li><strong>Droit de retirer votre consentement :</strong> À tout moment</li>
                  </ul>
                  <p className="mt-4">
                    Pour exercer ces droits, contactez-nous à :{' '}
                    <a href="mailto:contact@lesclesducabanon.fr" className="text-indigo-600 hover:underline">
                      contact@lesclesducabanon.fr
                    </a>
                  </p>
                  <p className="mt-2">
                    Vous disposez également du droit d'introduire une réclamation auprès de la
                    CNIL (Commission Nationale de l'Informatique et des Libertés).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Sécurité des données
                  </h2>
                  <p>
                    Nous mettons en œuvre toutes les mesures techniques et organisationnelles
                    appropriées pour protéger vos données contre la perte, l'utilisation abusive,
                    l'accès non autorisé, la divulgation, l'altération ou la destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Cookies
                  </h2>
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience de navigation
                    et réaliser des statistiques de visite. Vous pouvez configurer votre navigateur
                    pour refuser les cookies, mais certaines fonctionnalités pourraient être
                    limitées.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Modifications
                  </h2>
                  <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à
                    tout moment. Toute modification sera publiée sur cette page avec une date de
                    mise à jour.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    10. Contact
                  </h2>
                  <p className="mb-2">
                    Pour toute question concernant cette politique de confidentialité ou vos
                    données personnelles :
                  </p>
                  <p>
                    <strong>Les Clés du Cabanon</strong>
                  </p>
                  <p>SIRET : 929 924 983 00026</p>
                  <p>
                    Email :{' '}
                    <a href="mailto:contact@lesclesducabanon.fr" className="text-indigo-600 hover:underline">
                      contact@lesclesducabanon.fr
                    </a>
                  </p>
                  <p>
                    Téléphone :{' '}
                    <a href="tel:+33625401480" className="text-indigo-600 hover:underline">
                      (+33) 6 25 40 14 80
                    </a>
                  </p>
                </section>

                <section className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Dernière mise à jour : Février 2026
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}