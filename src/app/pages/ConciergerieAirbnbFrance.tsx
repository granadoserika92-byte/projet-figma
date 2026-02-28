import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { FAQ } from '../components/FAQ';

export function ConciergerieAirbnbFrance() {
  const cities = [
    {
      name: "Paris",
      region: "Île-de-France",
      description: "Capitale française, marché très dynamique avec forte demande touristique toute l'année",
      avgRevenue: "2 500€/mois",
      occupancy: "85%"
    },
    {
      name: "Lyon",
      region: "Auvergne-Rhône-Alpes",
      description: "Capitale de la gastronomie, forte demande professionnelle et touristique",
      avgRevenue: "1 800€/mois",
      occupancy: "78%"
    },
    {
      name: "Marseille",
      region: "Provence-Alpes-Côte d'Azur",
      description: "Deuxième ville de France, forte attractivité touristique et balnéaire",
      avgRevenue: "1 900€/mois",
      occupancy: "80%"
    },
    {
      name: "Bordeaux",
      region: "Nouvelle-Aquitaine",
      description: "Ville viticole mondialement connue, forte demande œnotouristique",
      avgRevenue: "1 700€/mois",
      occupancy: "76%"
    },
    {
      name: "Lille",
      region: "Hauts-de-France",
      description: "Proximité Belgique et Londres, demande professionnelle et touristique",
      avgRevenue: "1 500€/mois",
      occupancy: "74%"
    },
    {
      name: "Toulouse",
      region: "Occitanie",
      description: "Ville rose, hub aéronautique avec forte demande professionnelle",
      avgRevenue: "1 600€/mois",
      occupancy: "75%"
    },
    {
      name: "Nantes",
      region: "Pays de la Loire",
      description: "Ville dynamique, forte croissance touristique et étudiante",
      avgRevenue: "1 550€/mois",
      occupancy: "73%"
    },
    {
      name: "Guadeloupe",
      region: "DOM-TOM",
      description: "Destination paradisiaque des Caraïbes, forte demande saisonnière",
      avgRevenue: "2 200€/mois",
      occupancy: "82%"
    },
    {
      name: "Martinique",
      region: "DOM-TOM",
      description: "Île aux fleurs, destination prisée toute l'année",
      avgRevenue: "2 100€/mois",
      occupancy: "80%"
    },
    {
      name: "La Réunion",
      region: "DOM-TOM",
      description: "Île intense, tourisme nature et activités outdoor",
      avgRevenue: "2 000€/mois",
      occupancy: "78%"
    },
    {
      name: "Guyane",
      region: "DOM-TOM",
      description: "Territoire d'aventure, demande professionnelle et spatiale",
      avgRevenue: "1 800€/mois",
      occupancy: "72%"
    },
    {
      name: "Mayotte",
      region: "DOM-TOM",
      description: "Lagon exceptionnel, marché en développement",
      avgRevenue: "1 700€/mois",
      occupancy: "70%"
    }
  ];

  const conciergerieSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb en France et DOM-TOM",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb 100% digitale présente partout en France (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Nantes) et dans tous les DOM-TOM (Guadeloupe, Martinique, Réunion, Guyane, Mayotte). Tarif fixe 239€/mois.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Paris",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "City",
        "name": "Lyon",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "City",
        "name": "Marseille",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "City",
        "name": "Bordeaux",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "City",
        "name": "Lille",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "City",
        "name": "Toulouse",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "City",
        "name": "Nantes",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "State",
        "name": "Guadeloupe",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "State",
        "name": "Martinique",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "State",
        "name": "La Réunion",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "State",
        "name": "Guyane",
        "containedIn": { "@type": "Country", "name": "France" }
      },
      {
        "@type": "State",
        "name": "Mayotte",
        "containedIn": { "@type": "Country", "name": "France" }
      }
    ],
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
    "Gestion 100% digitale sans déplacement physique",
    "Présence nationale : France métropolitaine et DOM-TOM",
    "Tarif fixe unique de 239€/mois partout",
    "Optimisation locale adaptée à chaque marché",
    "Support 7j/7 pour tous nos propriétaires",
    "Expertise des spécificités locales de chaque ville"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb en France | Paris, Lyon, Marseille, DOM-TOM à 239€/mois"
        description="Conciergerie Airbnb 100% digitale partout en France : Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Nantes et DOM-TOM (Guadeloupe, Martinique, Réunion, Guyane, Mayotte). Gestion complète à 239€/mois sans commission."
        keywords="conciergerie airbnb paris, conciergerie airbnb lyon, conciergerie airbnb marseille, conciergerie airbnb bordeaux, conciergerie airbnb lille, conciergerie airbnb toulouse, conciergerie airbnb nantes, conciergerie airbnb guadeloupe, conciergerie airbnb martinique, conciergerie airbnb reunion, conciergerie airbnb guyane, conciergerie airbnb mayotte, gestion airbnb france, conciergerie france dom tom"
        canonical="https://www.lesclesducabanon.fr/conciergerie-airbnb-france"
        schema={conciergerieSchema}
      />
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-8 h-8" />
                <span className="text-xl font-semibold">Présence nationale</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Conciergerie Airbnb en France
              </h1>
              <p className="text-2xl mb-8 text-white/90">
                Gestion 100% digitale partout en France et DOM-TOM • 239€/mois sans commission
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6"
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

        {/* Introduction */}
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
                Une conciergerie Airbnb 100% digitale partout en France
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Que vous soyez propriétaire à <strong>Paris</strong>, <strong>Lyon</strong>, <strong>Marseille</strong>, 
                  <strong> Bordeaux</strong>, <strong>Lille</strong>, <strong>Toulouse</strong>, <strong>Nantes</strong> ou 
                  dans les <strong>DOM-TOM</strong> (Guadeloupe, Martinique, Réunion, Guyane, Mayotte), notre 
                  <strong> conciergerie Airbnb 100% digitale</strong> vous accompagne pour maximiser vos revenus locatifs.
                </p>
                <p>
                  Grâce à notre modèle de <strong>gestion à distance</strong>, nous offrons le même niveau de service 
                  professionnel partout en France au même tarif fixe de <strong>239€/mois</strong>, sans commission 
                  sur vos réservations. Notre expertise locale combinée à nos outils d'optimisation nous permet 
                  d'adapter notre stratégie à chaque marché spécifique.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">
                Pourquoi choisir notre conciergerie nationale ?
              </h2>

              <Card className="p-8 lg:p-12 bg-white border-2 border-indigo-200">
                <div className="grid md:grid-cols-2 gap-6">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Nos zones d'intervention
              </h2>
              <p className="text-xl text-gray-600">
                Présents dans les principales villes de France et tous les DOM-TOM
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-indigo-300">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                        <p className="text-sm text-gray-500">{city.region}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{city.description}</p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-500">Revenus moyens</p>
                        <p className="text-lg font-bold text-indigo-600">{city.avgRevenue}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Taux d'occupation</p>
                        <p className="text-lg font-bold text-green-600">{city.occupancy}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 mb-4">
                Votre ville n'est pas listée ? Pas de problème !
              </p>
              <p className="text-gray-700 font-semibold mb-6">
                Notre service 100% digital fonctionne partout en France
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
              >
                <a href="/#contact">
                  Contacter notre équipe
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* How Digital Management Works */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-center">
                Comment fonctionne notre gestion 100% digitale ?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Notre <strong>modèle 100% digital</strong> nous permet d'offrir le même niveau de service 
                  professionnel que vous soyez à Paris ou à la Réunion. Voici comment nous gérons votre bien 
                  à distance :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Optimisation locale :</strong> Nous analysons votre marché local (concurrence, 
                    événements, saisonnalité) pour adapter nos prix et notre stratégie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Tarification dynamique :</strong> Nos algorithmes ajustent automatiquement 
                    vos tarifs selon la demande de votre ville</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Communication 7j/7 :</strong> Notre équipe répond aux voyageurs dans votre 
                    fuseau horaire (adapté pour les DOM-TOM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>SEO local :</strong> Votre annonce est optimisée avec des mots-clés locaux 
                    pour attirer des voyageurs cherchant spécifiquement votre ville</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Gestion du ménage :</strong> Vous coordonnez le ménage localement, les frais 
                    sont facturés directement au voyageur</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Prêt à optimiser votre bien où que vous soyez en France ?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Rejoignez notre communauté de propriétaires partout en France et dans les DOM-TOM
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-10 py-6"
                >
                  <a href="/#contact">
                    Demander mon audit gratuit
                    <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6"
                >
                  <a href="tel:+33625401480">
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}