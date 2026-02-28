import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, serviceSchema } from '../components/SEO';

export function CreationAnnonce() {
  return (
    <>
      <SEO
        title="Création Annonce Airbnb Optimisée | Les Clés du Cabanon - France & DOM-TOM"
        description="Création et refonte professionnelle de votre annonce Airbnb et Booking. Titres optimisés, descriptions percutantes, photos valorisées. Service inclus dans le forfait 239€/mois. Disponible partout en France et DOM-TOM (Guadeloupe, Martinique, Réunion, Guyane, Mayotte)."
        keywords="création annonce airbnb, refonte annonce airbnb, annonce airbnb optimisée, annonce booking, description airbnb, titre airbnb, création annonce france, création annonce DOM TOM, annonce airbnb martinique, annonce airbnb guadeloupe, annonce airbnb réunion"
        canonical="https://www.lesclesducabanon.fr/services/creation-annonce"
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-teal-500 flex items-center justify-center mb-6`}>
                <Calendar className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Création / Refonte{' '}
                <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                  d'Annonce
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Votre annonce est votre vitrine. Nous la créons ou la retravaillons pour maximiser son attractivité 
                et sa visibilité sur toutes les plateformes.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Ce que nous faisons
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Rédaction du titre accrocheur</p>
                        <p className="text-sm text-gray-600">Ex: "Appartement lumineux avec vue mer à 5min des plages"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Description détaillée et engageante</p>
                        <p className="text-sm text-gray-600">Mise en valeur des points forts, ambiance, quartier</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Mise en avant des équipements</p>
                        <p className="text-sm text-gray-600">WiFi, parking, climatisation, lave-vaisselle...</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Traduction multilingue</p>
                        <p className="text-sm text-gray-600">Français, anglais, et autres langues selon votre cible</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Les résultats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📈</span>
                      <div>
                        <p className="font-medium text-gray-900">+40% de clics sur votre annonce</p>
                        <p className="text-sm text-gray-600">Titre optimisé = plus de visibilité</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <p className="font-medium text-gray-900">Meilleur taux de conversion</p>
                        <p className="text-sm text-gray-600">Visiteurs transformés en réservations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌍</span>
                      <div>
                        <p className="font-medium text-gray-900">Audience internationale</p>
                        <p className="text-sm text-gray-600">Traductions professionnelles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-medium text-gray-900">Prix perçus comme justifiés</p>
                        <p className="text-sm text-gray-600">Description valorisante = tarifs acceptés</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-teal-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Exemple concret
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-red-600 mb-2">❌ Avant (annonce basique)</p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="font-semibold text-gray-900 mb-2">Appartement 2 chambres</p>
                      <p className="text-sm text-gray-600">Appartement avec 2 chambres, cuisine, salle de bain. Proche centre-ville.</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-600 mb-2">✅ Après (annonce optimisée)</p>
                    <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                      <p className="font-semibold text-gray-900 mb-2">Charmant T3 Cosy avec Terrasse - Vue Dégagée - Parking Privé</p>
                      <p className="text-sm text-gray-600">
                        Découvrez ce magnifique appartement de 65m² entièrement rénové, idéalement situé à 5 minutes à pied 
                        du centre historique. Profitez d'une terrasse ensoleillée de 15m² avec vue imprenable, d'une cuisine 
                        équipée Bosch, de la climatisation, du WiFi fibre et d'un parking privé sécurisé. Parfait pour les 
                        couples et familles jusqu'à 4 personnes. Commerces et restaurants à proximité immédiate.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="mt-12 text-center">
                <a href="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 to-amber-500 hover:from-teal-700 hover:to-amber-600 text-white">
                    Optimiser mon annonce maintenant
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