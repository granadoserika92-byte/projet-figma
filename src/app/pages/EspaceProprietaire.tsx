import { motion } from 'motion/react';
import { ArrowLeft, BarChart, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, serviceSchema } from '../components/SEO';

export function EspaceProprietaire() {
  return (
    <>
      <SEO
        title="Espace Propriétaire Dédié | Tableau de Bord & Analytics - France & DOM-TOM"
        description="Accédez à votre espace propriétaire dédié : tableau de bord complet, statistiques détaillées, calendrier en temps réel, historique réservations et paiements. Suivi transparent de votre location Airbnb. Service inclus dans le forfait 239€/mois."
        keywords="espace propriétaire airbnb, dashboard location courte durée, statistiques airbnb, suivi réservations, analytics airbnb, tableau de bord propriétaire, plateforme gestion airbnb, avantio, espace client conciergerie"
        canonical="https://www.lesclesducabanon.fr/services/espace-proprietaire"
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6`}>
                <BarChart className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Espace Propriétaire{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Dédié
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Dashboard complet pour suivre vos performances en temps réel. 
                Transparence totale, données claires, contrôle à distance.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Fonctionnalités disponibles
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Calendrier des réservations</p>
                        <p className="text-sm text-gray-600">Vue en temps réel de toutes vos dates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Statistiques de revenus</p>
                        <p className="text-sm text-gray-600">Graphiques mensuels, annuels, par plateforme</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Historique des voyageurs</p>
                        <p className="text-sm text-gray-600">Qui a séjourné, quand, combien</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Rapports de performance</p>
                        <p className="text-sm text-gray-600">Taux d'occupation, RevPAR, évolution</p>
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
                      <span className="text-2xl">👁️</span>
                      <div>
                        <p className="font-medium text-gray-900">Transparence totale</p>
                        <p className="text-sm text-gray-600">Accès à toutes les données 24h/24</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <p className="font-medium text-gray-900">Accessible partout</p>
                        <p className="text-sm text-gray-600">Sur ordinateur, tablette ou smartphone</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <p className="font-medium text-gray-900">KPIs en un coup d'œil</p>
                        <p className="text-sm text-gray-600">Dashboard synthétique et clair</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="font-medium text-gray-900">Notifications importantes</p>
                        <p className="text-sm text-gray-600">Nouvelles réservations, avis, alertes</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Ce que vous pouvez voir en temps réel
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-indigo-600 mb-4">📅 Vue Calendrier</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Réservations confirmées avec nom du voyageur</p>
                      <p>• Montants encaissés par séjour</p>
                      <p>• Dates disponibles et bloquées</p>
                      <p>• Taux d'occupation du mois</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-4">💰 Tableau de revenus</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Revenus du mois en cours : 3 450€</p>
                      <p>• Comparaison vs mois dernier : +15%</p>
                      <p>• Revenus année : 28 340€</p>
                      <p>• Projection fin d'année : 42 500€</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-pink-600 mb-4">📊 Statistiques de performance</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Taux d'occupation : 78%</p>
                      <p>• Durée moyenne de séjour : 4,2 nuits</p>
                      <p>• Prix moyen par nuit : 127€</p>
                      <p>• Note moyenne : 4,9/5 ⭐</p>
                      <p>• Nombre total d'avis : 87</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-600 mb-4">🎯 Répartition par plateforme</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Airbnb : 65% des réservations (18 420€)</p>
                      <p>• Booking : 28% des réservations (7 935€)</p>
                      <p>• Abritel : 7% des réservations (1 985€)</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-4">🔔 Dernières notifications</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>• Nouvelle réservation : Sophie M. du 15 au 18 mars</p>
                      <p>• Nouvel avis 5⭐ : "Appartement parfait !"</p>
                      <p>• Paiement reçu : 340€ pour séjour du 8 au 11 mars</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="mt-12 text-center">
                <a href="https://app.avantio.pro/index.php?url=&module=Usuarios&action=Login&return_module=Home&return_action=index&avs=ZTUveE1tcVJ1YXU2RHM2NDl3UjVJeGx0K0xjK0oyK3BiK0tMa3RxaXIvZ1dscHJndXVMdDl6YUJHN09lRjVORGkrTUlpTUpOdnEvSE5KM21HanZ5bDd2cWpBQm4xRkJXd1N3aENaWFRyS2M9" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                    Accéder à mon espace propriétaire
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