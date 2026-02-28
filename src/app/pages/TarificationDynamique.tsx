import { motion } from 'motion/react';
import { ArrowLeft, DollarSign, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, serviceSchema } from '../components/SEO';

export function TarificationDynamique() {
  return (
    <>
      <SEO
        title="Tarification Dynamique Airbnb | Optimisez vos Revenus Locatifs - France & DOM-TOM"
        description="Tarification dynamique Airbnb automatique qui s'ajuste chaque jour selon la demande, événements locaux et concurrence. Maximisez vos revenus locatifs avec un algorithme intelligent. Disponible partout en France et DOM-TOM. Inclus dans le forfait 239€/mois."
        keywords="tarification dynamique airbnb, prix airbnb automatique, optimisation revenus airbnb, prix dynamique booking, algorithme pricing airbnb, yield management location courte durée, tarification intelligente france, prix airbnb DOM TOM, revenus locatifs optimisés"
        canonical="https://www.lesclesducabanon.fr/services/tarification-dynamique"
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-6`}>
                <DollarSign className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Stratégie Tarifaire{' '}
                <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                  Dynamique Quotidienne
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Vos prix s'ajustent automatiquement tous les jours selon la demande en temps réel, 
                les événements locaux et la concurrence. Un tarif différent chaque jour pour maximiser vos revenus.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Comment ça fonctionne
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Prix variables selon saison</p>
                        <p className="text-sm text-gray-600">Haute saison = prix augmentés, basse saison = prix compétitifs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Ajustement événements locaux</p>
                        <p className="text-sm text-gray-600">Festival, concert, salon pro = tarifs majorés</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Prix week-end vs semaine</p>
                        <p className="text-sm text-gray-600">Différenciation selon la demande</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Tarifs durée de séjour</p>
                        <p className="text-sm text-gray-600">Réductions pour séjours longs, tarifs optimisés pour courts séjours</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Impact sur vos revenus
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📈</span>
                      <div>
                        <p className="font-medium text-gray-900">+30% de revenus en moyenne</p>
                        <p className="text-sm text-gray-600">Par rapport à un prix fixe</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-medium text-gray-900">Taux d'occupation optimisé</p>
                        <p className="text-sm text-gray-600">Prix attractifs en période creuse</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🤖</span>
                      <div>
                        <p className="font-medium text-gray-900">100% automatique</p>
                        <p className="text-sm text-gray-600">Ajustements quotidiens sans intervention, un tarif différent chaque jour</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-medium text-gray-900">Prix toujours compétitifs</p>
                        <p className="text-sm text-gray-600">Analyse en temps réel de la concurrence</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-teal-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Exemple concret : une semaine type
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Votre appartement à Nice - Juillet 2025</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Les prix sont recalculés chaque jour pour s'adapter à la demande réelle :
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-teal-50 p-3 rounded">
                        <p className="text-teal-600 font-semibold">Lundi 7 juillet</p>
                        <p className="text-gray-600">Début semaine, peu de demande</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">125€/nuit</p>
                      </div>
                      <div className="bg-amber-50 p-3 rounded">
                        <p className="text-amber-600 font-semibold">Mardi 8 juillet</p>
                        <p className="text-gray-600">Demande légèrement en hausse</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">138€/nuit</p>
                      </div>
                      <div className="bg-pink-50 p-3 rounded">
                        <p className="text-pink-600 font-semibold">Mercredi 9 juillet</p>
                        <p className="text-gray-600">Recherches en augmentation</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">152€/nuit</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded">
                        <p className="text-orange-600 font-semibold">Jeudi 10 juillet</p>
                        <p className="text-gray-600">Forte demande détectée</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">165€/nuit</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="text-green-600 font-semibold">Vendredi 11 juillet</p>
                        <p className="text-gray-600">Week-end, pic de demande</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">189€/nuit</p>
                      </div>
                      <div className="bg-teal-50 p-3 rounded">
                        <p className="text-teal-600 font-semibold">Samedi 12 juillet</p>
                        <p className="text-gray-600">Demande maximale</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">215€/nuit</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-blue-600 font-semibold">Dimanche 13 juillet</p>
                        <p className="text-gray-600">Festival Jazz annoncé</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">245€/nuit</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    💡 <strong>Résultat :</strong> Au lieu d'un prix fixe à 150€/nuit toute la semaine (= 1 050€), 
                    vous gagnez 1 229€ grâce à l'ajustement quotidien automatique. 
                    <strong> Soit +17% de revenus sur une seule semaine !</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Les prix sont recalculés tous les matins en fonction de centaines de critères : 
                    demande du marché, taux d'occupation de la zone, prix de la concurrence, événements, 
                    météo, tendances de recherche, historique de réservation...
                  </p>
                </div>
              </Card>

              <div className="mt-12 text-center">
                <a href="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 to-amber-500 hover:from-teal-700 hover:to-amber-600 text-white">
                    Optimiser mes tarifs maintenant
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