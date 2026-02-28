import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Shield, CheckCircle, ArrowRight, Calendar, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbGuadeloupe() {
  const guadeloupeSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Guadeloupe",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb 100% digitale en Guadeloupe à 239€/mois. Gestion complète de votre location saisonnière : tarification dynamique, optimisation SEO, multi-plateformes, gestion voyageurs 7j/7.",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Guadeloupe",
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
    { label: "Revenus moyens", value: "2 200€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "82%", icon: Target },
    { label: "Prix moyen nuit", value: "120€", icon: Calendar },
    { label: "Clients gérés", value: "45+", icon: Users }
  ];

  const zones = [
    { name: "Sainte-Anne", description: "Plages paradisiaques, forte demande touristique toute l'année" },
    { name: "Saint-François", description: "Destination premium, clientèle haut de gamme" },
    { name: "Le Gosier", description: "Centre touristique, mix familial et jeunes couples" },
    { name: "Deshaies", description: "Côte sous-le-vent, calme et authenticité" },
    { name: "Grande-Terre", description: "Plages de sable blanc, snorkeling, plongée" },
    { name: "Basse-Terre", description: "Nature luxuriante, randonnées, cascades" }
  ];

  const advantages = [
    {
      icon: "🏝️",
      title: "Destination paradisiaque",
      description: "La Guadeloupe attire 600 000 touristes par an avec une demande constante de locations saisonnières premium."
    },
    {
      icon: "✈️",
      title: "Vols directs depuis Paris",
      description: "Accessible en 8h depuis la métropole, la Guadeloupe bénéficie d'une clientèle française fidèle."
    },
    {
      icon: "🌴",
      title: "Saison haute étendue",
      description: "De décembre à avril, les taux d'occupation atteignent 95% avec des prix premium."
    },
    {
      icon: "💰",
      title: "Rentabilité élevée",
      description: "Un T3 bien géré génère 2 200€/mois en moyenne, soit 26 400€/an de revenus locatifs."
    }
  ];

  const included = [
    "Création annonce optimisée pour la Guadeloupe",
    "Tarification dynamique adaptée à la saisonnalité caribéenne",
    "Synchronisation Airbnb, Booking, Abritel, HomeAway",
    "Gestion voyageurs 7j/7 (français, anglais, créole)",
    "Optimisation SEO : 'villa Guadeloupe', 'location Sainte-Anne'",
    "Ajustement prix selon événements locaux (Carnaval, Route du Rhum)",
    "Statistiques temps réel dans votre espace propriétaire",
    "Conseils spécifiques marché guadeloupéen"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Guadeloupe à 239€/mois | Gestion Location Saisonnière"
        description="Conciergerie Airbnb Guadeloupe 239€/mois. Gestion complète Sainte-Anne, Saint-François, Gosier. Tarification dynamique, +82% taux occupation. Sans commission."
        keywords="conciergerie airbnb guadeloupe, gestion airbnb guadeloupe, conciergerie sainte anne, gestion location guadeloupe, airbnb saint françois, conciergerie gosier, location saisonnière guadeloupe, gestion villa guadeloupe, conciergerie DOM TOM"
        canonical="https://www.lesclesducabanon.fr/conciergerie-airbnb-guadeloupe"
        schema={guadeloupeSchema}
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
                <span className="text-sm font-medium">Guadeloupe - DOM-TOM</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Conciergerie Airbnb Guadeloupe à 239€/mois
              </h1>
              
              <p className="text-xl mb-8 text-teal-50 leading-relaxed">
                La première conciergerie Airbnb 100% digitale en Guadeloupe. Gérez votre location saisonnière 
                à Sainte-Anne, Saint-François, Gosier ou Deshaies sans contrainte. <strong>82% de taux d'occupation moyen</strong>.
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

        {/* Pourquoi la Guadeloupe */}
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
                  Pourquoi investir en location courte durée en Guadeloupe ?
                </h2>
                <p className="text-xl text-gray-600">
                  Un marché touristique dynamique avec une rentabilité exceptionnelle
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
                  Nos zones d'intervention en Guadeloupe
                </h2>
                <p className="text-xl text-gray-600">
                  Nous gérons des locations saisonnières sur toute l'île
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
                  Services inclus pour la Guadeloupe
                </h2>
                <p className="text-xl text-gray-600">
                  Tout ce dont vous avez besoin pour réussir en location saisonnière
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
                      MC
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "J'ai une villa à Saint-François et je vis en métropole. Les Clés du Cabanon gèrent tout à distance : 
                      les réservations, les messages, les prix. Mon taux d'occupation est passé de 65% à 85% en 3 mois. 
                      Je gagne 600€ de plus par mois qu'avant pour seulement 239€ de forfait. Le meilleur investissement !"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">Marie-Claire D.</div>
                      <div className="text-sm text-gray-600">Propriétaire villa 4 chambres - Saint-François, Guadeloupe</div>
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
                Prêt à optimiser votre location en Guadeloupe ?
              </h2>
              <p className="text-xl mb-8 text-teal-50">
                Rejoignez les 45+ propriétaires guadeloupéens qui nous font confiance
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
