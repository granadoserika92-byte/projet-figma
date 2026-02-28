import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, TrendingUp, Calendar, Users, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FAQ } from '../components/FAQ';

export function GestionAirbnb() {
  const gestionAirbnbSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gestion Airbnb complète",
    "provider": organizationSchema,
    "description": "Service de gestion Airbnb 100% digitale à 239€/mois. Optimisation d'annonce, tarification dynamique, gestion voyageurs 7j/7, synchronisation multi-plateformes pour maximiser vos revenus locatifs.",
    "areaServed": ["FR", "GP", "MQ", "RE", "GF", "YT"],
    "offers": {
      "@type": "Offer",
      "price": "239",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "239",
        "priceCurrency": "EUR",
        "unitText": "MONTH"
      }
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Optimisation des revenus",
      description: "Tarification dynamique qui ajuste automatiquement vos prix selon la demande, les événements locaux et la concurrence"
    },
    {
      icon: Calendar,
      title: "Calendrier synchronisé",
      description: "Synchronisation automatique entre Airbnb, Booking et Abritel pour éviter les double-réservations"
    },
    {
      icon: Users,
      title: "Gestion voyageurs 7j/7",
      description: "Réponses rapides aux messages, gestion des demandes de réservation et suivi des voyageurs 7 jours sur 7"
    },
    {
      icon: Shield,
      title: "100% sans engagement",
      description: "Tarif fixe de 239€/mois sans commission sur vos réservations, résiliable à tout moment"
    }
  ];

  const included = [
    "Création et optimisation SEO de votre annonce",
    "Tarification dynamique intelligente",
    "Synchronisation multi-plateformes (Airbnb, Booking, Abritel)",
    "Gestion de la communication avec les voyageurs 7j/7",
    "Automatisation des messages (confirmation, instructions, avis)",
    "Optimisation du taux d'occupation",
    "Espace propriétaire avec statistiques en temps réel",
    "Ajustement des prix selon les événements locaux",
    "Support technique dédié",
    "Conseils personnalisés pour améliorer vos performances"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Gestion Airbnb à 239€/mois | Service Complet 100% Digital"
        description="Gestion Airbnb complète à 239€/mois sans commission. Tarification dynamique, optimisation SEO, gestion voyageurs 7j/7, synchronisation multi-plateformes. Maximisez vos revenus locatifs avec notre service 100% digital."
        keywords="gestion airbnb, gestion airbnb prix, gestion airbnb france, service gestion airbnb, gestion location airbnb, tarification dynamique airbnb, optimisation airbnb, gestion booking, multi-plateformes airbnb, automatisation airbnb, gestion locative digitale, conciergerie airbnb pas cher"
        canonical="https://www.lesclesducabanon.fr/gestion-airbnb"
        schema={gestionAirbnbSchema}
      />
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Gestion Airbnb Complète
              </h1>
              <p className="text-2xl mb-8 text-white/90">
                Maximisez vos revenus locatifs avec notre gestion 100% digitale à 239€/mois
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6"
                >
                  <a href="/#contact">
                    Demander un audit gratuit
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white text-lg px-8 py-6"
                >
                  <a href="tel:+33625401480">
                    (+33) 6 25 40 14 80
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What is Gestion Airbnb */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-center">
                Qu'est-ce que la gestion Airbnb ?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  La <strong>gestion Airbnb</strong> est un service complet qui prend en charge l'ensemble de 
                  l'optimisation et de la gestion quotidienne de votre location courte durée. Contrairement aux 
                  conciergeries traditionnelles qui facturent 15% à 30% de commission, notre solution 100% digitale 
                  vous permet de maximiser vos revenus avec un tarif fixe de <strong>239€/mois</strong>.
                </p>
                <p>
                  Notre service de gestion Airbnb inclut la création et l'optimisation SEO de votre annonce, 
                  la tarification dynamique qui ajuste automatiquement vos prix, la synchronisation entre toutes 
                  vos plateformes (Airbnb, Booking, Abritel), et la gestion complète de la communication avec vos 
                  voyageurs 7 jours sur 7.
                </p>
                <p>
                  Avec notre <strong>gestion Airbnb à distance</strong>, vous gardez le contrôle de votre bien 
                  tout en déléguant toute la partie technique et chronophage. Vous vous occupez uniquement du 
                  ménage local (facturé au voyageur), nous gérons tout le reste.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Les avantages de notre gestion Airbnb
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un service complet pour optimiser vos revenus sans les contraintes d'une conciergerie traditionnelle
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-amber-400 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">
                Tout ce qui est inclus dans votre gestion Airbnb
              </h2>
              
              <Card className="p-8 lg:p-12 bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-teal-200">
                <div className="grid md:grid-cols-2 gap-6">
                  {included.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-teal-200">
                  <p className="text-center text-2xl font-bold text-gray-900">
                    Tout ça pour <span className="text-teal-600">239€/mois</span>
                  </p>
                  <p className="text-center text-gray-600 mt-2">
                    Sans engagement • Sans commission sur vos réservations
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">
                Pourquoi choisir notre gestion Airbnb ?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-white border-2 border-gray-200">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Conciergerie traditionnelle
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span className="text-gray-600">15% à 30% de commission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span className="text-gray-600">400€ minimum par mois</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span className="text-gray-600">Frais cachés (ménage, linge)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">✗</span>
                      <span className="text-gray-600">Engagement longue durée</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-center text-xl font-bold text-red-600">
                      ~8 000€/an en plus
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-teal-600 to-amber-500 text-white border-2 border-teal-400 relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    Recommandé
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    Notre gestion 100% digitale
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Tarif fixe 239€/mois</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>0% de commission</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Transparent, sans frais cachés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Sans engagement</span>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-center text-xl font-bold">
                      Économisez 8 000€/an
                    </p>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Prêt à optimiser votre gestion Airbnb ?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Rejoignez des centaines de propriétaires qui ont augmenté leurs revenus de 30% en moyenne
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-10 py-6"
              >
                <a href="/#contact">
                  Demander mon audit gratuit
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}