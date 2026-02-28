import { motion } from 'motion/react';
import { ArrowLeft, BarChart3, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, serviceSchema } from '../components/SEO';

export function MultiPlateformes() {
  return (
    <>
      <SEO
        title="Synchronisation Multi-Plateformes | Airbnb, Booking, Abritel & +50 Sites"
        description="Diffusez votre annonce sur plus de 50 plateformes simultanément : Airbnb, Booking, Abritel, Vrbo, Expedia... Calendrier synchronisé en temps réel pour éviter les doubles réservations. Forfait 239€/mois. Service disponible en France et DOM-TOM."
        keywords="multi-plateformes location, synchronisation calendrier airbnb, booking calendar sync, gestionnaire de canaux, channel manager, airbnb booking abritel, multi diffusion annonce, éviter double réservation, synchronisation temps réel, gestion multi-plateformes france"
        canonical="https://www.lesclesducabanon.fr/services/multi-plateformes"
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6`}>
                <BarChart3 className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Synchronisation{' '}
                <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                  Multi-Plateformes
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Votre bien visible sur plus de 50 plateformes simultanément avec un calendrier unifié. 
                Zéro double réservation, gestion centralisée.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Plateformes connectées
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Airbnb, Booking, Abritel</p>
                        <p className="text-sm text-gray-600">Les 3 leaders du marché</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Calendrier unifié en temps réel</p>
                        <p className="text-sm text-gray-600">Synchronisation instantanée des disponibilités</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Pas de double réservation</p>
                        <p className="text-sm text-gray-600">Protection automatique garantie</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Une seule interface de gestion</p>
                        <p className="text-sm text-gray-600">Tout centralisé au même endroit</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Avantages pour vous
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌍</span>
                      <div>
                        <p className="font-medium text-gray-900">Visibilité maximale</p>
                        <p className="text-sm text-gray-600">50+ plateformes = des millions de voyageurs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⏱️</span>
                      <div>
                        <p className="font-medium text-gray-900">Gain de temps énorme</p>
                        <p className="text-sm text-gray-600">Plus besoin de tout gérer manuellement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🛡️</span>
                      <div>
                        <p className="font-medium text-gray-900">Sécurité garantie</p>
                        <p className="text-sm text-gray-600">Technologie anti-surbooking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <p className="font-medium text-gray-900">Comparaison des performances</p>
                        <p className="text-sm text-gray-600">Analytics par plateforme</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-teal-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Comment ça marche en pratique ?
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">1. Configuration initiale</h4>
                    <p className="text-gray-600">
                      Nous créons ou connectons votre annonce sur Airbnb, Booking, Abritel et 
                      toutes les plateformes pertinentes pour votre zone.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">2. Synchronisation automatique</h4>
                    <p className="text-gray-600">
                      <strong>Exemple :</strong> Un voyageur réserve sur Airbnb du 15 au 20 mars. 
                      Immédiatement, ces dates sont bloquées sur Booking, Abritel et toutes les 
                      autres plateformes. Temps de synchronisation : moins de 30 secondes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">3. Gestion unifiée</h4>
                    <p className="text-gray-600">
                      Tous vos messages, réservations et paiements centralisés dans une seule 
                      interface. Plus besoin de jongler entre 10 applications différentes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">4. Optimisation continue</h4>
                    <p className="text-gray-600">
                      Nous analysons quelle plateforme performe le mieux pour votre bien et 
                      ajustons les prix en conséquence.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="mt-12 text-center">
                <a href="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-teal-600 to-amber-500 hover:from-teal-700 hover:to-amber-600 text-white">
                    Diffuser mon annonce partout
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