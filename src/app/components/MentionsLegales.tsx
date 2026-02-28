import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Header } from './Header';
import { Footer } from './Footer';

export function MentionsLegales() {
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
              <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                Mentions Légales
              </h1>

              <div className="space-y-8 text-gray-700 leading-relaxed">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Éditeur du site
                  </h2>
                  <p className="mb-2">
                    <strong>Raison sociale :</strong> Les Clés du Cabanon
                  </p>
                  <p className="mb-2">
                    <strong>SIRET :</strong> 929 924 983 00026
                  </p>
                  <p className="mb-2">
                    <strong>Email :</strong>{' '}
                    <a href="mailto:contact@lesclesducabanon.fr" className="text-teal-600 hover:underline">
                      contact@lesclesducabanon.fr
                    </a>
                  </p>
                  <p className="mb-2">
                    <strong>Téléphone :</strong>{' '}
                    <a href="tel:+33625401480" className="text-teal-600 hover:underline">
                      (+33) 6 25 40 14 80
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. Hébergement
                  </h2>
                  <p>
                    Le site est hébergé par un prestataire d'hébergement professionnel garantissant
                    la disponibilité et la sécurité des données.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Propriété intellectuelle
                  </h2>
                  <p>
                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, etc.)
                    est la propriété exclusive de Les Clés du Cabanon ou fait l'objet d'une
                    autorisation d'utilisation.
                  </p>
                  <p className="mt-4">
                    Toute reproduction, représentation, modification, publication ou adaptation
                    totale ou partielle des éléments du site, quel que soit le moyen ou le procédé
                    utilisé, est interdite, sauf autorisation écrite préalable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Protection des données personnelles
                  </h2>
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                    loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification,
                    de suppression et d'opposition aux données personnelles vous concernant.
                  </p>
                  <p className="mt-4">
                    Pour exercer ces droits, vous pouvez nous contacter à l'adresse :{' '}
                    <a href="mailto:contact@lesclesducabanon.fr" className="text-teal-600 hover:underline">
                      contact@lesclesducabanon.fr
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Cookies
                  </h2>
                  <p>
                    Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et
                    réaliser des statistiques de visite. Vous pouvez configurer votre navigateur
                    pour refuser les cookies, mais certaines fonctionnalités du site pourraient
                    être limitées.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Responsabilité
                  </h2>
                  <p>
                    Les Clés du Cabanon s'efforce d'assurer l'exactitude et la mise à jour des
                    informations diffusées sur ce site. Toutefois, Les Clés du Cabanon ne peut
                    garantir l'exactitude, la précision ou l'exhaustivité des informations mises
                    à disposition sur ce site.
                  </p>
                  <p className="mt-4">
                    Les Clés du Cabanon ne pourra être tenue responsable des dommages directs ou
                    indirects résultant de l'accès au site ou de l'utilisation du site, y compris
                    l'inaccessibilité, les pertes de données, détériorations, destructions ou virus
                    qui pourraient affecter votre équipement informatique.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. Droit applicable
                  </h2>
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de
                    litige, et à défaut d'accord amiable, le litige sera porté devant les
                    tribunaux français conformément aux règles de compétence en vigueur.
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