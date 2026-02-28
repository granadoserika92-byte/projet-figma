import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Header } from './Header';
import { Footer } from './Footer';

export function CGV() {
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
            <a href="/">
              <Button
                variant="outline"
                className="mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            </a>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Conditions Générales de Vente
              </h1>

              <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Objet
                  </h2>
                  <p>
                    Les présentes Conditions Générales de Vente (CGV) régissent les relations
                    contractuelles entre Les Clés du Cabanon (SIRET : 929 924 983 00026) et ses
                    clients dans le cadre de la fourniture de services de conciergerie pour
                    locations de courte durée.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Description des services
                  </h2>
                  <p className="mb-4">
                    <strong>Forfait Gestion Complète à 180€/mois incluant :</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Création et refonte d'annonce</li>
                    <li>Optimisation SEO Airbnb & Booking</li>
                    <li>Stratégie tarifaire dynamique quotidienne</li>
                    <li>Synchronisation multi-plateformes (+ de 50 plateformes)</li>
                    <li>Gestion voyageurs 7j/7</li>
                    <li>Automatisation complète</li>
                    <li>Optimisation du taux d'occupation</li>
                    <li>Espace propriétaire dédié</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Services non inclus :</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Frais de ménage (facturés au voyageur)</li>
                    <li>Linge de maison</li>
                    <li>Consommables (savon, café, etc.)</li>
                    <li>Réparations et maintenance du bien</li>
                    <li>Gestion check-in/check-out sur place</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Services optionnels :</strong> Photos professionnelles disponibles
                    sur devis à partir de 170€.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Tarifs et modalités de paiement
                  </h2>
                  <p className="mb-4">
                    Le forfait mensuel est de 180€ HT par bien géré, payable mensuellement par
                    prélèvement automatique ou virement bancaire.
                  </p>
                  <p>
                    Les tarifs sont susceptibles d'être révisés avec un préavis de 30 jours.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Durée du contrat
                  </h2>
                  <p>
                    Le contrat est conclu pour une durée indéterminée. Il peut être résilié par
                    l'une ou l'autre des parties avec un préavis de 30 jours par lettre recommandée
                    avec accusé de réception ou email.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Obligations du client
                  </h2>
                  <p className="mb-2">Le client s'engage à :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fournir toutes les informations nécessaires à la gestion du bien</li>
                    <li>Maintenir le bien en bon état de fonctionnement</li>
                    <li>Respecter la législation en vigueur concernant les locations courte durée</li>
                    <li>Informer Les Clés du Cabanon de tout changement concernant le bien</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Obligations du prestataire
                  </h2>
                  <p className="mb-2">Les Clés du Cabanon s'engage à :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fournir les services décrits avec professionnalisme</li>
                    <li>Optimiser le taux d'occupation du bien</li>
                    <li>Assurer une communication réactive avec les voyageurs</li>
                    <li>Fournir des rapports mensuels détaillés</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Responsabilité
                  </h2>
                  <p>
                    Les Clés du Cabanon ne saurait être tenu responsable des dommages causés au
                    bien par les voyageurs, des pertes financières liées à des annulations, ou
                    des modifications de réglementation affectant la location courte durée.
                  </p>
                  <p className="mt-4">
                    Le client est responsable de la souscription d'une assurance adaptée couvrant
                    son bien et les risques liés à la location courte durée.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Protection des données
                  </h2>
                  <p>
                    Les données personnelles collectées sont traitées conformément au RGPD et à
                    la loi Informatique et Libertés. Elles sont utilisées uniquement dans le
                    cadre de la prestation de services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Droit applicable et juridiction
                  </h2>
                  <p>
                    Les présentes CGV sont soumises au droit français. Tout litige relatif à
                    leur interprétation ou leur exécution relève de la compétence exclusive des
                    tribunaux français.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    10. Contact
                  </h2>
                  <p>
                    Pour toute question concernant ces CGV, vous pouvez nous contacter :
                  </p>
                  <p className="mt-2">
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