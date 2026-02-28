import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Shield, CheckCircle, ArrowRight, Calendar, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbMartinique() {
  const martiniqueSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Martinique",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb 100% digitale en Martinique à 239€/mois. Gestion complète location saisonnière : tarification dynamique, optimisation SEO, multi-plateformes, gestion voyageurs 7j/7.",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Martinique",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR"
      }
    },
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

  const stats = [
    { label: "Revenus moyens", value: "2 100€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "80%", icon: Target },
    { label: "Prix moyen nuit", value: "115€", icon: Calendar },
    { label: "Clients gérés", value: "38+", icon: Users }
  ];

  const zones = [
    { name: "Les Trois-Îlets", description: "Zone touristique premium, plages et golf" },
    { name: "Le Diamant", description: "Plage mythique, paysages spectaculaires" },
    { name: "Sainte-Luce", description: "Calme et authenticité, familles" },
    { name: "Fort-de-France", description: "Centre économique, clientèle affaires" },
    { name: "Saint-Pierre", description: "Histoire et culture, tourisme culturel" },
    { name: "Le François", description: "Fonds blancs, activités nautiques" }
  ];

  const advantages = [
    {
      icon: "🌺",
      title: "L'île aux fleurs",
      description: "La Martinique accueille 500 000 visiteurs annuels, avec une forte demande de locations haut de gamme."
    },
    {
      icon: "🏖️",
      title: "Diversité des paysages",
      description: "Plages de sable blanc au sud, nature luxuriante au nord : deux marchés complémentaires."
    },
    {
      icon: "📅",
      title: "Saison longue",
      description: "Haute saison de décembre à avril, mais demande soutenue toute l'année grâce au climat."
    },
    {
      icon: "💎",
      title: "Clientèle premium",
      description: "Un T3 bien situé génère 2 100€/mois en moyenne, avec des pics à 3 500€ en haute saison."
    }
  ];

  const included = [
    "Création annonce optimisée pour la Martinique",
    "Tarification dynamique adaptée au marché caribéen",
    "Synchronisation Airbnb, Booking, Abritel, Vrbo",
    "Gestion voyageurs 7j/7 (français, anglais, créole)",
    "Optimisation SEO : 'villa Martinique', 'location Trois-Îlets'",
    "Ajustement prix selon événements (Carnaval, Tour de la Martinique)",
    "Analyse concurrence locale temps réel",
    "Conseils spécifiques marché martiniquais"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Martinique à 239€/mois | Gestion Location Saisonnière"
        description="Conciergerie Airbnb Martinique 239€/mois. Gestion Trois-Îlets, Diamant, Sainte-Luce. Tarification dynamique, +80% taux occupation. Sans commission."
        keywords="conciergerie airbnb martinique, gestion airbnb martinique, conciergerie trois ilets, gestion location martinique, airbnb diamant, conciergerie sainte luce, location saisonnière martinique, gestion villa martinique, conciergerie DOM TOM"
        canonical="https://www.lesclesducabanon.fr/conciergerie-airbnb-martinique"
        schema={martiniqueSchema}
      />
      <Header />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Martinique - DOM-TOM</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Conciergerie Airbnb Martinique à 239€/mois
              </h1>
              
              <p className="text-xl mb-8 text-teal-50 leading-relaxed">
                Conciergerie Airbnb 100% digitale en Martinique. Gérez votre location aux Trois-Îlets, 
                au Diamant ou à Sainte-Luce sans contrainte. <strong>80% de taux d'occupation moyen</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg"
                >
                  <a href="/inscription">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  <a href="/#contact">
                    Audit gratuit
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                    <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi la Martinique */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Pourquoi investir en location courte durée en Martinique ?
                </h2>
                <p className="text-xl text-gray-600">
                  L'île aux fleurs offre une rentabilité exceptionnelle
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-4">{advantage.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Zones populaires */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Nos zones d'intervention en Martinique
                </h2>
                <p className="text-xl text-gray-600">
                  Du nord au sud, nous gérons vos locations partout sur l'île
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {zones.map((zone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                      <div className="flex items-start gap-3 mb-3">
                        <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                        <h3 className="text-lg font-bold text-gray-900">{zone.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{zone.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services inclus */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Services inclus pour la Martinique
                </h2>
                <p className="text-xl text-gray-600">
                  Tout pour réussir en location saisonnière sur l'île aux fleurs
                </p>
              </div>

              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <div className="inline-flex items-center gap-3 bg-teal-50 px-6 py-3 rounded-full">
                    <Shield className="w-5 h-5 text-teal-600" />
                    <span className="font-semibold text-teal-900">
                      239€/mois - Sans engagement - Sans commission
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Témoignage local */}
        <section className="py-20 bg-teal-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-8 lg:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                      JM
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "Je possède un appartement aux Trois-Îlets et je vis à Paris. Avant, je galérais à gérer les messages 
                      et les prix. Depuis que Les Clés du Cabanon s'en occupent, mon taux d'occupation est stable à 85% et 
                      je gagne 500€ de plus par mois. Pour 239€, c'est rentable dès le premier mois !"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">Jean-Marc L.</div>
                      <div className="text-sm text-gray-600">Propriétaire T3 - Les Trois-Îlets, Martinique</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Prêt à optimiser votre location en Martinique ?
              </h2>
              <p className="text-xl mb-8 text-teal-50">
                Rejoignez les 38+ propriétaires martiniquais qui nous font confiance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg"
                >
                  <a href="/inscription">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  <a href="/#contact">
                    Demander un audit gratuit
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
