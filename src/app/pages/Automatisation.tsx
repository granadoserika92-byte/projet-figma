import { motion } from 'motion/react';
import { ArrowLeft, Shield, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, serviceSchema } from '../components/SEO';

export function Automatisation() {
  return (
    <>
      <SEO
        title="Automatisation Airbnb Complète | Messages & Ventes Additionnelles - France & DOM-TOM"
        description="Automatisation complète de votre location Airbnb : messages automatiques, gestion calendrier, ventes additionnelles personnalisables, optimisation complète. Service inclus dans le forfait 239€/mois. Disponible en France et DOM-TOM."
        keywords="automatisation airbnb, messages automatiques airbnb, vente additionnelle airbnb, automatisation location courte durée, workflow airbnb, optimisation temps gestion, services additionnels airbnb, automatisation france DOM TOM"
        canonical="https://www.lesclesducabanon.fr/services/automatisation"
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-6`}>
                <Shield className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Automatisation{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Complète
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Système intelligent qui gère votre location en pilote automatique. 
                Gain de temps maximal, revenus optimisés, zéro oubli.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Processus automatisés
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Messages automatiques personnalisés</p>
                        <p className="text-sm text-gray-600">Confirmation, instructions, remerciements... au bon moment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Rappels paiements</p>
                        <p className="text-sm text-gray-600">Suivi automatique des échéances</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Demande d'avis automatisée</p>
                        <p className="text-sm text-gray-600">Collecte systématique des avis positifs (inclus dans livret d'accueil si option prise)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Vente additionnelle automatique</p>
                        <p className="text-sm text-gray-600">Proposition services supplémentaires (check-in/out tardif, kit bébé, chaise haute...)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Rapports mensuels automatiques</p>
                        <p className="text-sm text-gray-600">Analytics complets envoyés chaque mois</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Gain pour vous
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⏰</span>
                      <div>
                        <p className="font-medium text-gray-900">-95% de temps de gestion</p>
                        <p className="text-sm text-gray-600">Tout roule sans intervention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-medium text-gray-900">Zéro oubli possible</p>
                        <p className="text-sm text-gray-600">Le système ne dort jamais</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💼</span>
                      <div>
                        <p className="font-medium text-gray-900">Image ultra-professionnelle</p>
                        <p className="text-sm text-gray-600">Communication toujours au top</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📈</span>
                      <div>
                        <p className="font-medium text-gray-900">Performance optimisée</p>
                        <p className="text-sm text-gray-600">Actions au moment idéal</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Exemple de scénario automatisé
                </h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-semibold text-indigo-600 mb-3">Quand un voyageur réserve...</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <div>
                          <p className="font-medium">Immédiatement : Message de confirmation personnalisé</p>
                          <p className="text-gray-600">"Bonjour Sophie, nous sommes ravis de vous accueillir..."</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <div>
                          <p className="font-medium">J-3 : Proposition services additionnels</p>
                          <p className="text-gray-600">Check-in/out tardif (+20€), kit lit bébé (+30€), chaise haute (+15€)... Vous choisissez ce que vous proposez</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <div>
                          <p className="font-medium">J-1 : Instructions détaillées check-in</p>
                          <p className="text-gray-600">Adresse GPS, code porte, place parking, heure flexible</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <div>
                          <p className="font-medium">Jour d'arrivée : Accès livret d'accueil (si option prise)</p>
                          <p className="text-gray-600">WiFi, appareils, numéros urgence, bons plans quartier</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-green-600 font-bold">✓</span>
                        <div>
                          <p className="font-medium">Veille départ : Rappel check-out et remerciements</p>
                          <p className="text-gray-600">Horaires, consignes départ, demande feedback</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    💡 <strong>Résultat :</strong> Expérience voyageur parfaite, avis 5 étoiles garantis, 
                    et vous n'avez rien eu à faire manuellement !
                  </p>
                </div>
              </Card>

              <div className="mt-12 text-center">
                <a href="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    Automatiser ma location maintenant
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