import { motion } from 'motion/react';
import { ArrowLeft, TrendingUp, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, serviceSchema } from '../components/SEO';

export function OptimisationOccupation() {
  return (
    <>
      <SEO
        title="Optimisation Taux d'Occupation Airbnb | Maximisez vos Réservations - France & DOM-TOM"
        description="Optimisation du taux d'occupation de votre location Airbnb : stratégie de prix, visibilité maximale, promotion ciblée. Augmentez vos réservations et revenus. Service inclus dans le forfait 239€/mois. Disponible en France et DOM-TOM."
        keywords="optimisation taux occupation airbnb, augmenter réservations airbnb, remplissage calendrier airbnb, stratégie occupation location courte durée, maximiser revenus airbnb, taux occupation élevé, promotion airbnb, réservations airbnb france DOM TOM"
        canonical="https://www.lesclesducabanon.fr/services/optimisation-occupation"
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6`}>
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Optimisation{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Taux d'Occupation
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Stratégies intelligentes pour maximiser vos nuits louées. 
                Moins de vide = plus de revenus.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Nos stratégies
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Analyse des périodes creuses</p>
                        <p className="text-sm text-gray-600">Identification des trous dans le calendrier</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Promotions ciblées</p>
                        <p className="text-sm text-gray-600">Réductions intelligentes pour combler les vides</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Offres dernière minute</p>
                        <p className="text-sm text-gray-600">Prix attractifs pour dates proches</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Durée minimum ajustée</p>
                        <p className="text-sm text-gray-600">Flexibilité selon la demande</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Résultats mesurables
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <p className="font-medium text-gray-900">Taux d'occupation 75-85%</p>
                        <p className="text-sm text-gray-600">Vs 50-60% en gestion classique</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-medium text-gray-900">Revenus annuels maximisés</p>
                        <p className="text-sm text-gray-600">Plus de nuits louées = plus de gains</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📅</span>
                      <div>
                        <p className="font-medium text-gray-900">Moins de périodes vides</p>
                        <p className="text-sm text-gray-600">Calendrier toujours actif</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-medium text-gray-900">Stratégie data-driven</p>
                        <p className="text-sm text-gray-600">Décisions basées sur l'analyse</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Exemple concret
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">❌ Sans optimisation</h4>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-3">
                        Votre appartement à Nice - Mois de février (basse saison)
                      </p>
                      <div className="space-y-2 text-sm">
                        <p>• Prix fixe : 120€/nuit</p>
                        <p>• Durée minimum : 3 nuits</p>
                        <p>• Trou du 5 au 14 février : <span className="font-bold text-red-600">9 nuits vides</span></p>
                        <p>• Trou du 20 au 27 février : <span className="font-bold text-red-600">7 nuits vides</span></p>
                        <p className="font-bold text-red-600 pt-2 border-t">Perte : 1 920€</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Avec notre optimisation</h4>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-gray-700 mb-3">
                        Même appartement - Même mois
                      </p>
                      <div className="space-y-2 text-sm">
                        <p>• 5-7 fév : <strong>Promo -25%</strong> (90€/nuit) → 2 nuits louées = 180€</p>
                        <p>• 8-14 fév : <strong>Offre dernière minute</strong> (85€/nuit, min 1 nuit) → 5 nuits louées = 425€</p>
                        <p>• 15-19 fév : Prix normal maintenu → 4 nuits louées = 480€</p>
                        <p>• 20-24 fév : <strong>Réduction court séjour</strong> (95€/nuit) → 4 nuits louées = 380€</p>
                        <p>• 25-28 fév : Prix normal → 3 nuits louées = 360€</p>
                        <p className="font-bold text-green-600 pt-2 border-t">Gain supplémentaire : +1 825€</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg border-2 border-green-200">
                    <p className="text-gray-900 font-bold mb-1">💡 Analyse</p>
                    <p className="text-gray-700 text-sm">
                      Mieux vaut louer à 85-95€ que laisser vide. Ces "petits prix" stratégiques 
                      comblent les trous et rapportent bien plus que le vide (0€). Sur l'année, 
                      c'est des milliers d'euros supplémentaires !
                    </p>
                  </div>
                </div>
              </Card>

              <div className="mt-12 text-center">
                <a href="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    Maximiser mon taux d'occupation
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