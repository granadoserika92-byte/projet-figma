import { motion } from 'motion/react';
import { ArrowLeft, Globe, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, serviceSchema } from '../components/SEO';

export function OptimisationSEO() {
  return (
    <>
      <SEO
        title="Optimisation SEO Airbnb & Booking | Meilleur Classement - France & DOM-TOM"
        description="Optimisation SEO professionnelle de votre annonce Airbnb et Booking pour apparaître en tête des résultats de recherche. Augmentez votre visibilité et vos réservations. Service inclus dans le forfait 239€/mois. France métropolitaine et DOM-TOM."
        keywords="optimisation SEO airbnb, référencement airbnb, classement airbnb, visibilité airbnb, SEO booking, optimisation annonce airbnb, premier résultats airbnb, SEO location courte durée, référencement naturel airbnb france, SEO airbnb DOM TOM"
        canonical="https://www.lesclesducabanon.fr/services/optimisation-seo"
        schema={serviceSchema}
      />
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/#services">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux services
              </Button>
            </a>

            <div className="max-w-4xl mx-auto">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-amber-500 flex items-center justify-center mb-6`}>
                <Globe className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Optimisation SEO{' '}
                <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                  Airbnb & Booking
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Être visible, c'est être réservé. Nous optimisons votre annonce pour qu'elle apparaisse en premier 
                dans les résultats de recherche de vos futurs voyageurs.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Notre stratégie SEO
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Mots-clés stratégiques</p>
                        <p className="text-sm text-gray-600">Ex: "vue mer", "piscine", "parking", "plage à pied"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Catégorisation optimale</p>
                        <p className="text-sm text-gray-600">Sélection des bonnes catégories (plage, centre-ville, romantique...)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Tags et attributs pertinents</p>
                        <p className="text-sm text-gray-600">Tous les équipements renseignés pour matcher les filtres</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Score de qualité maximisé</p>
                        <p className="text-sm text-gray-600">Réactivité, taux d'acceptation, avis positifs</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Impact sur votre visibilité
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔍</span>
                      <div>
                        <p className="font-medium text-gray-900">Position 1-3 dans les recherches</p>
                        <p className="text-sm text-gray-600">Apparition en haut des résultats</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">👁️</span>
                      <div>
                        <p className="font-medium text-gray-900">+300% de vues sur votre annonce</p>
                        <p className="text-sm text-gray-600">Plus de voyageurs voient votre bien</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-medium text-gray-900">Ciblage précis des voyageurs</p>
                        <p className="text-sm text-gray-600">Match parfait entre recherche et votre offre</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <p className="font-medium text-gray-900">Badge "Superhost" plus facile</p>
                        <p className="text-sm text-gray-600">Optimisation des critères de performance</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-teal-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Comment ça marche ?
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">1. Analyse de la concurrence</h4>
                    <p className="text-gray-600">
                      Nous étudions les 10 meilleures annonces de votre zone pour identifier les mots-clés qui fonctionnent.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">2. Optimisation des filtres de recherche</h4>
                    <p className="text-gray-600">
                      Exemple : Si un voyageur recherche "appartement avec piscine près de la plage", votre annonce 
                      apparaîtra si vous avez correctement renseigné ces critères.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">3. Amélioration continue du ranking</h4>
                    <p className="text-gray-600">
                      Notre gestion proactive (réponse rapide, pas d'annulation, bon taux d'acceptation) améliore 
                      constamment votre positionnement dans l'algorithme Airbnb/Booking.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">4. Suivi des performances</h4>
                    <p className="text-gray-600">
                      Rapport mensuel sur votre position, nombre de vues, taux de clic et conversions.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="mt-12 text-center">
                <a href="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 to-amber-500 hover:from-teal-700 hover:to-amber-600 text-white">
                    Booster ma visibilité maintenant
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}