import { motion } from 'motion/react';
import { Check, X, Zap, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const includedFeatures = [
  'Création / refonte annonce',
  'Optimisation SEO Airbnb & Booking',
  'Stratégie tarifaire dynamique quotidienne',
  'Synchronisation multi-plateformes (+ de 50 plateformes)',
  'Gestion voyageurs 7j/7',
  'Automatisation complète',
  'Optimisation taux d\'occupation',
  'Espace propriétaire dédié',
];

const notIncludedFeatures = [
  'Frais de ménage (facturés au voyageur)',
  'Linge de maison',
  'Consommables (savon, café, etc.)',
  'Réparations et maintenance du bien',
  'Gestion check-in/check-out sur place',
];

export function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 bg-teal-300/30 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Une tarification{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              simple et transparente
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un forfait tout-compris sans surprise. Pas de frais cachés.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden border-4 border-teal-200 shadow-2xl">
            {/* Popular badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-bl-2xl flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span className="font-semibold text-sm">POPULAIRE</span>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Forfait Gestion Digitale
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    180€
                  </span>
                  <span className="text-2xl text-gray-600">/mois</span>
                </div>
                <p className="text-gray-600">
                  Sans engagement • Annulation gratuite
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {/* Ce qui est inclus */}
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-4">
                    ✨ Ce qui est inclus
                  </h4>
                  <div className="space-y-3">
                    {includedFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Options supplémentaires */}
                <div className="pt-6 border-t border-teal-200">
                  <h4 className="font-semibold text-lg text-gray-900 mb-4">
                    ➕ Options supplémentaires
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-700">Livret d'accueil digital</span>
                      </div>
                      <span className="font-bold text-amber-600">+15€/mois</span>
                    </div>
                    <div className="flex items-center gap-3 bg-teal-50 p-3 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-700">Shooting photo professionnel</span>
                      </div>
                      <span className="font-bold text-teal-600">À partir de 170€</span>
                    </div>
                  </div>
                </div>

                {/* Ce qui n'est pas inclus */}
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-lg text-gray-900 mb-4">
                    ℹ️ Non inclus dans le forfait
                  </h4>
                  <div className="space-y-3">
                    {notIncludedFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <X className="w-4 h-4 text-gray-500" strokeWidth={2} />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <a href="/inscription">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-6 text-lg font-semibold"
                >
                  Commencer maintenant
                </Button>
              </a>

              <p className="text-center text-sm text-gray-500 mt-6">
                💳 Sans engagement • 🎁 Audit gratuit
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Pourquoi nous sommes différents */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Pourquoi nous sommes{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              différents ?
            </span>
          </h3>
          <Card className="p-8 bg-white border-2 border-teal-100">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-3">💻</div>
                <h4 className="font-semibold text-gray-900 mb-2">100% Digital</h4>
                <p className="text-sm text-gray-600">
                  Gestion à distance, pas d'intervention sur place
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">💰</div>
                <h4 className="font-semibold text-gray-900 mb-2">Prix fixe toute l'année</h4>
                <p className="text-sm text-gray-600">
                  180€/mois, même en haute saison
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🏠</div>
                <h4 className="font-semibold text-gray-900 mb-2">Même tarif pour tous</h4>
                <p className="text-sm text-gray-600">
                  Appartement ou villa, c'est le même prix
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Comparatifs tarifs */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Comparatif avec la{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              concurrence
            </span>
          </h3>

          {/* Comparatif Appartements */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              🏢 Appartements
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Sans conciergerie */}
              <Card className="p-6 bg-gray-50 border-2 border-gray-200">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">😰</div>
                  <h5 className="font-bold text-gray-900 mb-2">Sans conciergerie</h5>
                </div>
                <div className="space-y-3 text-sm mb-4">
                  <p className="text-gray-700">✓ Vous gérez tout vous-même</p>
                  <p className="text-gray-700">✓ Disponible 24/7 pour les voyageurs</p>
                  <p className="text-gray-700">✓ Création annonces</p>
                  <p className="text-gray-700">✓ Gestion des prix</p>
                  <p className="text-red-600 font-semibold">✗ Chronophage</p>
                  <p className="text-red-600 font-semibold">✗ Stressant</p>
                </div>
                <div className="text-center pt-4 border-t border-gray-300">
                  <p className="text-2xl font-bold text-gray-900">0€/mois</p>
                  <p className="text-xs text-gray-600">Mais votre temps n'a pas de prix</p>
                </div>
              </Card>

              {/* Conciergerie classique */}
              <Card className="p-6 bg-red-50 border-2 border-red-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏢</div>
                  <h5 className="font-bold text-gray-900 mb-2">Conciergerie classique</h5>
                </div>
                <div className="space-y-3 text-sm mb-4">
                  <p className="text-gray-700">✓ Gestion complète</p>
                  <p className="text-gray-700">✓ Présence sur place</p>
                  <p className="text-gray-700">✓ Check-in/out physique</p>
                  <p className="text-red-600 font-semibold">✗ Commission 15-20%</p>
                  <p className="text-red-600 font-semibold">✗ Prix variables</p>
                  <p className="text-red-600 font-semibold">✗ Minimum 300€/mois</p>
                </div>
                <div className="text-center pt-4 border-t border-red-300">
                  <p className="text-2xl font-bold text-red-600">300-450€/mois</p>
                  <p className="text-xs text-gray-600">Commission sur vos revenus</p>
                  <p className="text-sm text-gray-700 mt-2">Sur revenus de 2000€/mois</p>
                </div>
              </Card>

              {/* Notre offre */}
              <Card className="p-6 bg-gradient-to-br from-teal-50 to-amber-50 border-4 border-teal-300 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-600 to-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  IMBATTABLE
                </div>
                <div className="text-center mb-4 mt-2">
                  <div className="text-4xl mb-2">🚀</div>
                  <h5 className="font-bold text-gray-900 mb-2">Les Clés du Cabanon</h5>
                </div>
                <div className="space-y-3 text-sm mb-4">
                  <p className="text-green-600 font-semibold">✓ Même tarif qu'un appartement</p>
                  <p className="text-green-600 font-semibold">✓ Technologie de pointe</p>
                  <p className="text-green-600 font-semibold">✓ Gestion professionnelle</p>
                  <p className="text-green-600 font-semibold">✓ Optimisation maximale</p>
                  <p className="text-green-600 font-semibold">✓ Support premium</p>
                  <p className="text-green-600 font-semibold">✓ 0% de commission</p>
                </div>
                <div className="text-center pt-4 border-t border-teal-300">
                  <p className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                    180€/mois
                  </p>
                  <p className="text-xs text-gray-600">Prix unique toute l'année</p>
                  <div className="mt-4 bg-green-100 border-2 border-green-300 rounded-lg p-3">
                    <p className="text-green-700 font-bold text-sm">Économie :</p>
                    <p className="text-green-700 text-xs">Jusqu'à 8 000€/an vs concurrence</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Comparatif Villas */}
          <div>
            <h4 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              🏡 Villas & Maisons
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Sans conciergerie */}
              <Card className="p-6 bg-gray-50 border-2 border-gray-200">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">😓</div>
                  <h5 className="font-bold text-gray-900 mb-2">Sans conciergerie</h5>
                </div>
                <div className="space-y-3 text-sm mb-4">
                  <p className="text-gray-700">✓ Gestion autonome</p>
                  <p className="text-gray-700">✓ Contrôle total</p>
                  <p className="text-red-600 font-semibold">✗ Très chronophage</p>
                  <p className="text-red-600 font-semibold">✗ Expertise requise</p>
                  <p className="text-red-600 font-semibold">✗ Gestion complexe</p>
                  <p className="text-red-600 font-semibold">✗ Manque à gagner important</p>
                </div>
                <div className="text-center pt-4 border-t border-gray-300">
                  <p className="text-2xl font-bold text-gray-900">0€/mois</p>
                  <p className="text-xs text-gray-600">Mais perte de revenus potentiels</p>
                </div>
              </Card>

              {/* Conciergerie classique */}
              <Card className="p-6 bg-red-50 border-2 border-red-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💸</div>
                  <h5 className="font-bold text-gray-900 mb-2">Conciergerie haut de gamme</h5>
                </div>
                <div className="space-y-3 text-sm mb-4">
                  <p className="text-gray-700">✓ Service complet</p>
                  <p className="text-gray-700">✓ Conciergerie sur place</p>
                  <p className="text-gray-700">✓ Services premium</p>
                  <p className="text-red-600 font-semibold">✗ Tarifs prohibitifs</p>
                  <p className="text-red-600 font-semibold">✗ Commissions jusqu'à 30%</p>
                  <p className="text-red-600 font-semibold">✗ Coût en haute saison</p>
                </div>
                <div className="text-center pt-4 border-t border-red-300">
                  <p className="text-2xl font-bold text-red-600">1 200€/mois</p>
                  <p className="text-xs text-gray-600">en basse saison</p>
                  <p className="text-3xl font-bold text-red-700 mt-2">2 000€/mois</p>
                  <p className="text-xs text-gray-600">en haute saison (min.)</p>
                </div>
              </Card>

              {/* Notre offre */}
              <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-4 border-indigo-300 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  IMBATTABLE
                </div>
                <div className="text-center mb-4 mt-2">
                  <div className="text-4xl mb-2">🚀</div>
                  <h5 className="font-bold text-gray-900 mb-2">Les Clés du Cabanon</h5>
                </div>
                <div className="space-y-3 text-sm mb-4">
                  <p className="text-green-600 font-semibold">✓ Même tarif qu'un appartement</p>
                  <p className="text-green-600 font-semibold">✓ Technologie de pointe</p>
                  <p className="text-green-600 font-semibold">✓ Gestion professionnelle</p>
                  <p className="text-green-600 font-semibold">✓ Optimisation maximale</p>
                  <p className="text-green-600 font-semibold">✓ Support premium</p>
                  <p className="text-green-600 font-semibold">✓ 0% de commission</p>
                </div>
                <div className="text-center pt-4 border-t border-indigo-300">
                  <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    180€/mois
                  </p>
                  <p className="text-xs text-gray-600">Prix unique toute l'année</p>
                  <div className="mt-4 bg-green-100 border-2 border-green-300 rounded-lg p-3">
                    <p className="text-green-700 font-bold text-sm">Économie :</p>
                    <p className="text-green-700 text-xs">Jusqu'à 8 000€/an vs concurrence</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* Section éducative : Arrivées autonomes */}
        <motion.div
          className="max-w-5xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-teal-200">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🔑</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Arrivées autonomes :{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Un atout majeur
                </span>
              </h3>
              <p className="text-lg text-gray-600">
                Comprendre pourquoi l'arrivée autonome augmente vos réservations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Avantages pour la conversion */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Augmente vos réservations</h4>
                    <p className="text-gray-600 text-sm">
                      Les voyageurs préfèrent l'arrivée autonome : flexibilité d'horaires, 
                      pas d'attente, arrivée tardive possible. Cela augmente significativement 
                      votre taux de conversion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Attractif pour l'international</h4>
                    <p className="text-gray-600 text-sm">
                      Vols décalés, décalages horaires... Les voyageurs internationaux 
                      privilégient massivement les logements avec arrivée autonome.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Liberté totale</h4>
                    <p className="text-gray-600 text-sm">
                      Check-in 24h/24, 7j/7 sans contrainte d'horaires. 
                      Un critère de plus en plus recherché par les voyageurs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Protection en cas de dégradation */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <span className="text-xl">🛡️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Protection contre les dégradations</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 font-bold text-xs">1</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">14 jours pour réclamer</p>
                        <p className="text-xs text-gray-600">
                          Vous avez 14 jours après le départ du voyageur pour déclarer 
                          un litige sur Airbnb ou Booking
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 font-bold text-xs">2</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">30 jours pour les documents</p>
                        <p className="text-xs text-gray-600">
                          Vous disposez ensuite de 30 jours pour envoyer tous les 
                          justificatifs (photos, factures, devis)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-600 font-bold text-xs">3</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Protection totale</p>
                        <p className="text-xs text-gray-600">
                          Les plateformes offrent une garantie hôte jusqu'à 1 000 000€. 
                          Pas besoin d'être présent physiquement pour être protégé !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-6 text-white text-center">
              <p className="text-lg font-semibold mb-2">
                💡 Le saviez-vous ?
              </p>
              <p className="text-sm opacity-90">
                Les logements avec arrivée autonome ont en moyenne <strong>23% de réservations en plus</strong> 
                et des notes supérieures grâce à la flexibilité offerte aux voyageurs.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4">
            Des questions ? Nos équipes sont disponibles 24/7
          </p>
          <a href="#contact">
            <Button variant="outline" size="lg">
              Nous contacter
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}