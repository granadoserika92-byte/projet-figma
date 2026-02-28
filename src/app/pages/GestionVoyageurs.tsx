import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, serviceSchema } from '../components/SEO';

export function GestionVoyageurs() {
  return (
    <>
      <SEO
        title="Gestion Voyageurs 7j/7 | Communication & Support H24 - France & DOM-TOM"
        description="Gestion complète de vos voyageurs Airbnb 7j/7 : réponse aux messages, accueil, assistance pendant le séjour. Communication professionnelle multilingue. Service inclus dans le forfait 239€/mois. Disponible partout en France et DOM-TOM."
        keywords="gestion voyageurs airbnb, communication voyageurs, réponse messages airbnb, support voyageurs 7j/7, accueil voyageurs, gestion messages booking, service client airbnb, communication multilingue, gestion voyageurs france, assistance voyageurs DOM TOM"
        canonical="https://www.lesclesducabanon.fr/services/gestion-voyageurs"
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-6`}>
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Gestion Voyageurs{' '}
                <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                  7j/7
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Communication professionnelle et réactive à distance avec vos voyageurs. 
                Support complet du premier message jusqu'au départ.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Ce que nous gérons
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Réponse aux messages en -2h</p>
                        <p className="text-sm text-gray-600">Disponible 7j/7, même le week-end et jours fériés</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Instructions check-in/out envoyées</p>
                        <p className="text-sm text-gray-600">Messages automatiques 24h avant avec toutes les infos pratiques</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Livret d'accueil digital (option)</p>
                        <p className="text-sm text-gray-600">WiFi, appareils, adresses utiles, recommandations (+15€/mois)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Support pendant le séjour</p>
                        <p className="text-sm text-gray-600">Réponse aux questions, résolution des problèmes</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Bénéfices pour vous
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⭐</span>
                      <div>
                        <p className="font-medium text-gray-900">Meilleurs avis garantis</p>
                        <p className="text-sm text-gray-600">Communication pro = 5 étoiles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">😌</span>
                      <div>
                        <p className="font-medium text-gray-900">Zéro stress pour vous</p>
                        <p className="text-sm text-gray-600">Plus besoin d'être disponible H24</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌍</span>
                      <div>
                        <p className="font-medium text-gray-900">Communication multilingue</p>
                        <p className="text-sm text-gray-600">Français, anglais et autres langues</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <p className="font-medium text-gray-900">Check-in 100% digital</p>
                        <p className="text-sm text-gray-600">Pas besoin d'être sur place</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-teal-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Parcours type d'un voyageur
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Demande de réservation</p>
                      <p className="text-sm text-gray-600">Réponse en moins de 2h avec message de bienvenue personnalisé</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">24h avant l'arrivée</p>
                      <p className="text-sm text-gray-600">Envoi automatique des instructions d'arrivée (adresse exacte, code d'accès, parking)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jour d'arrivée</p>
                      <p className="text-sm text-gray-600">Confirmation de l'arrivée et disponibilité pour toute question</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Pendant le séjour</p>
                      <p className="text-sm text-gray-600">Disponibles pour toute question ou problème technique</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Veille du départ</p>
                      <p className="text-sm text-gray-600">Rappel horaires check-out et consignes de départ</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                      6
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Après le départ</p>
                      <p className="text-sm text-gray-600">Message de remerciement et demande d'avis</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg border-2 border-teal-200">
                  <p className="text-sm text-gray-700">
                    <strong>💡 Option Livret d'accueil digital :</strong> Pour une expérience encore plus complète, 
                    nous pouvons créer un livret d'accueil personnalisé avec toutes les informations sur le logement 
                    (WiFi, utilisation des appareils, bonnes adresses du quartier, numéros utiles). 
                    <span className="font-semibold text-teal-600"> Disponible pour +15€/mois.</span>
                  </p>
                </div>
              </Card>

              <div className="mt-12 text-center">
                <a href="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 to-amber-500 hover:from-teal-700 hover:to-amber-600 text-white">
                    Déléguer la gestion voyageurs
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