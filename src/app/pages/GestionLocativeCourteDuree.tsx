import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Home, TrendingUp, Calendar, Shield, Clock, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FAQ } from '../components/FAQ';

export function GestionLocativeCourteDuree() {
  const gestionLocativeSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gestion locative courte durée",
    "provider": organizationSchema,
    "description": "Service de gestion locative courte durée 100% digitale à 239€/mois. Optimisation complète de vos locations saisonnières sur Airbnb, Booking et Abritel pour maximiser vos revenus locatifs.",
    "areaServed": ["FR", "GP", "MQ", "RE", "GF", "YT"],
    "serviceType": "Location management",
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

  const advantages = [
    {
      icon: DollarSign,
      title: "Revenus optimisés",
      description: "Augmentation moyenne de 30% de vos revenus locatifs grâce à notre tarification dynamique et optimisation SEO"
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Nous gérons 100% de la partie administrative et technique. Vous gardez uniquement le contrôle de votre bien"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Gestion professionnelle des voyageurs, vérification des profils et assurance de la qualité des locataires"
    },
    {
      icon: TrendingUp,
      title: "Taux d'occupation maximisé",
      description: "Synchronisation multi-plateformes et optimisation continue pour réduire les périodes de vacance"
    }
  ];

  const services = [
    "Création d'annonce optimisée SEO",
    "Photos professionnelles (option)",
    "Tarification dynamique intelligente",
    "Synchronisation Airbnb, Booking, Abritel",
    "Gestion de la communication voyageurs 7j/7",
    "Automatisation des messages",
    "Ajustement des prix selon événements locaux",
    "Analyse de la concurrence",
    "Optimisation du taux d'occupation",
    "Espace propriétaire en temps réel",
    "Support technique dédié",
    "Conseils personnalisés"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Audit gratuit",
      description: "Nous analysons votre bien et votre marché local pour définir la meilleure stratégie"
    },
    {
      step: "2",
      title: "Création de l'annonce",
      description: "Nous créons une annonce optimisée SEO qui attire les voyageurs et maximise votre visibilité"
    },
    {
      step: "3",
      title: "Lancement multi-plateformes",
      description: "Publication et synchronisation sur Airbnb, Booking et Abritel pour maximiser les réservations"
    },
    {
      step: "4",
      title: "Gestion quotidienne",
      description: "Nous gérons tout : communication voyageurs, tarifs, optimisation continue de votre performance"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Gestion Locative Courte Durée à 239€/mois | Location Saisonnière"
        description="Gestion locative courte durée complète à 239€/mois. Service 100% digital pour optimiser vos locations saisonnières sur Airbnb, Booking et Abritel. Augmentez vos revenus de 30% en moyenne sans commission."
        keywords="gestion locative courte durée, location courte durée, location saisonnière, gestion location saisonnière, conciergerie courte durée, gestion airbnb booking, optimisation location courte durée, revenus locatifs, tarification dynamique, multi-plateformes location"
        canonical="https://www.lesclesducabanon.fr/gestion-locative-courte-duree"
        schema={gestionLocativeSchema}
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
                Gestion Locative Courte Durée
              </h1>
              <p className="text-2xl mb-8 text-white/90">
                Optimisez vos locations saisonnières avec notre service 100% digital à 239€/mois
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

        {/* What is it */}
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
                Qu'est-ce que la gestion locative courte durée ?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  La <strong>gestion locative courte durée</strong> (aussi appelée location saisonnière ou 
                  location de vacances) est un service complet qui prend en charge l'ensemble de la gestion 
                  de votre bien loué sur des périodes courtes, généralement de quelques nuits à quelques semaines.
                </p>
                <p>
                  Contrairement à la location longue durée classique, la <strong>location courte durée</strong> nécessite 
                  une gestion active et quotidienne : optimisation des annonces, ajustement des tarifs en temps réel, 
                  communication constante avec les voyageurs, et synchronisation entre plusieurs plateformes (Airbnb, Booking, Abritel).
                </p>
                <p>
                  Notre service de <strong>gestion locative courte durée 100% digitale</strong> vous permet de profiter 
                  des revenus élevés de la location saisonnière (2 à 3 fois supérieurs à la location longue durée) 
                  sans les contraintes chronophages de la gestion quotidienne. Vous conservez le contrôle de votre bien, 
                  nous gérons tout le reste à distance pour un tarif fixe de <strong>239€/mois</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
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
                Pourquoi choisir la location courte durée ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des revenus locatifs 2 à 3 fois supérieurs à la location longue durée
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-amber-400 rounded-xl flex items-center justify-center mb-4">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Included */}
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
                Notre service de gestion locative courte durée
              </h2>
              
              <Card className="p-8 lg:p-12 bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-teal-200">
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-teal-200">
                  <p className="text-center text-2xl font-bold text-gray-900">
                    <span className="text-teal-600">239€/mois</span> • 0% de commission
                  </p>
                  <p className="text-center text-gray-600 mt-2">
                    Sans engagement • Résiliable à tout moment
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Comment ça fonctionne ?
              </h2>
              <p className="text-xl text-gray-600">
                Un processus simple en 4 étapes
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Revenue */}
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
                Location courte durée vs location longue durée
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 bg-gray-50 border-2 border-gray-200">
                  <div className="text-center mb-6">
                    <Home className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Location longue durée</h3>
                  </div>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center gap-3">
                      <span className="text-gray-600">Loyer fixe mensuel</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-gray-600">Gestion simple</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-gray-600">Revenus stables mais limités</span>
                    </li>
                  </ul>
                  <div className="pt-6 border-t border-gray-300">
                    <p className="text-center text-3xl font-bold text-gray-900">
                      800€<span className="text-lg font-normal text-gray-600">/mois</span>
                    </p>
                    <p className="text-center text-sm text-gray-500 mt-2">Exemple : T2 Paris</p>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-teal-600 to-amber-500 text-white border-2 border-teal-400 relative">
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    +150%
                  </div>
                  <div className="text-center mb-6">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Location courte durée</h3>
                  </div>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Tarifs optimisés en temps réel</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Gestion professionnelle incluse</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Revenus 2 à 3x supérieurs</span>
                    </li>
                  </ul>
                  <div className="pt-6 border-t border-white/20">
                    <p className="text-center text-3xl font-bold">
                      2 000€<span className="text-lg font-normal text-white/80">/mois</span>
                    </p>
                    <p className="text-center text-sm text-white/80 mt-2">Même bien avec notre gestion</p>
                  </div>
                </Card>
              </div>

              <p className="text-center text-gray-600 mt-8">
                * Estimation basée sur des cas réels. Les revenus peuvent varier selon la localisation et la saisonnalité.
              </p>
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
                Lancez votre location courte durée dès maintenant
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Multipliez vos revenus locatifs par 2 à 3 avec notre gestion professionnelle
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