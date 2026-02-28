import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, TrendingUp, Users, Star, Check } from 'lucide-react';
import { Button } from '../components/ui/button';

const domTomZones = [
  {
    name: "Guadeloupe",
    emoji: "🏝️",
    slug: "guadeloupe",
    description: "Conciergerie Airbnb en Guadeloupe : Grande-Terre, Basse-Terre, Les Saintes, Marie-Galante",
    stats: {
      properties: "52",
      avgOccupation: "52%",
      avgRating: "4.9"
    },
    highlights: [
      "Spécialiste des locations balnéaires",
      "Gestion des villas de luxe",
      "Expertise tourisme tropical",
      "Réseau local de prestataires"
    ]
  },
  {
    name: "Martinique",
    emoji: "🌺",
    slug: "martinique",
    description: "Conciergerie Airbnb en Martinique : Fort-de-France, Les Trois-Îlets, Le Diamant, Sainte-Anne",
    stats: {
      properties: "48",
      avgOccupation: "61%",
      avgRating: "4.9"
    },
    highlights: [
      "Expertise locations de charme",
      "Gestion villas premium",
      "Connaissance du marché caribéen",
      "Partenaires locaux fiables"
    ]
  },
  {
    name: "La Réunion",
    emoji: "🌋",
    slug: "reunion",
    description: "Conciergerie Airbnb à La Réunion : Saint-Denis, Saint-Gilles, Saint-Pierre, Cilaos",
    stats: {
      properties: "42",
      avgOccupation: "49%",
      avgRating: "4.8"
    },
    highlights: [
      "Expertise locations insulaires",
      "Gestion écotourisme",
      "Clientèle nature & randonnée",
      "Marché toute l'année"
    ]
  },
  {
    name: "Guyane",
    emoji: "🌿",
    slug: "guyane",
    description: "Conciergerie Airbnb en Guyane : Cayenne, Kourou, Remire-Montjoly, Saint-Laurent-du-Maroni",
    stats: {
      properties: "28",
      avgOccupation: "42%",
      avgRating: "4.8"
    },
    highlights: [
      "Marché en forte croissance",
      "Clientèle affaires et tourisme",
      "Expertise location longue durée",
      "Partenaires CSG/Ariane"
    ]
  },
  {
    name: "Mayotte",
    emoji: "🐬",
    slug: "mayotte",
    description: "Conciergerie Airbnb à Mayotte : Mamoudzou, Dzaoudzi, Bandraboua",
    stats: {
      properties: "20",
      avgOccupation: "57%",
      avgRating: "4.7"
    },
    highlights: [
      "Marché émergent prometteur",
      "Expertise locations insulaires",
      "Clientèle diversifiée",
      "Développement rapide"
    ]
  }
];

const metropoleZones = [
  {
    name: "Paris & Île-de-France",
    emoji: "🗼",
    slug: "paris",
    description: "Conciergerie Airbnb à Paris : tous arrondissements, Versailles, Fontainebleau, La Défense",
    stats: {
      properties: "95",
      avgOccupation: "71%",
      avgRating: "4.9"
    },
    highlights: [
      "Leader du marché parisien",
      "Expertise réglementation stricte",
      "Clientèle internationale premium",
      "Réseau complet de prestataires"
    ]
  },
  {
    name: "Lyon & Auvergne-Rhône-Alpes",
    emoji: "🏔️",
    slug: "lyon",
    description: "Conciergerie Airbnb à Lyon : Presqu'île, Vieux Lyon, Part-Dieu, Confluence + stations de ski",
    stats: {
      properties: "58",
      avgOccupation: "63%",
      avgRating: "4.9"
    },
    highlights: [
      "Expertise ville + montagne",
      "Gestion locations ski",
      "Marché dynamique",
      "Forte demande toute l'année"
    ]
  },
  {
    name: "Marseille & PACA",
    emoji: "⛵",
    slug: "marseille",
    description: "Conciergerie Airbnb à Marseille : Vieux-Port, Calanques, Aix-en-Provence, Nice, Cannes",
    stats: {
      properties: "52",
      avgOccupation: "66%",
      avgRating: "4.9"
    },
    highlights: [
      "Spécialiste Côte d'Azur",
      "Gestion villas de luxe",
      "Clientèle haut de gamme",
      "Saison ultra-rentable"
    ]
  },
  {
    name: "Bordeaux & Nouvelle-Aquitaine",
    emoji: "🍷",
    slug: "bordeaux",
    description: "Conciergerie Airbnb à Bordeaux : Centre historique, Bassins à flot, Arcachon, Biarritz",
    stats: {
      properties: "45",
      avgOccupation: "67%",
      avgRating: "4.8"
    },
    highlights: [
      "Expertise œnotourisme",
      "Locations balnéaires",
      "Marché en croissance",
      "Clientèle qualitative"
    ]
  },
  {
    name: "Toulouse & Occitanie",
    emoji: "🛩️",
    slug: "toulouse",
    description: "Conciergerie Airbnb à Toulouse : Capitole, Saint-Cyprien, Montpellier, Carcassonne",
    stats: {
      properties: "38",
      avgOccupation: "68%",
      avgRating: "4.8"
    },
    highlights: [
      "Expertise clientèle affaires",
      "Gestion moyenne/longue durée",
      "Marché stable",
      "Demande constante"
    ]
  },
  {
    name: "Nice & Côte d'Azur",
    emoji: "🌊",
    slug: "nice",
    description: "Conciergerie Airbnb à Nice : Promenade des Anglais, Vieux-Nice, Monaco, Antibes, Saint-Tropez",
    stats: {
      properties: "35",
      avgOccupation: "67%",
      avgRating: "4.9"
    },
    highlights: [
      "Marché ultra-premium",
      "Clientèle internationale",
      "Revenus maximisés",
      "Expertise luxe"
    ]
  },
  {
    name: "Nantes & Pays de la Loire",
    emoji: "🏰",
    slug: "nantes",
    description: "Conciergerie Airbnb à Nantes : Centre-ville, Île de Nantes, La Baule, Les Sables-d'Olonne",
    stats: {
      properties: "30",
      avgOccupation: "65%",
      avgRating: "4.8"
    },
    highlights: [
      "Marché équilibré",
      "Locations littorales",
      "Clientèle familiale",
      "Croissance régulière"
    ]
  }
];

export function NosZones() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Nos Zones d'Intervention - Conciergerie Airbnb France & DOM-TOM"
        description="Conciergerie Airbnb disponible dans toute la France métropolitaine et les DOM-TOM : Guadeloupe, Martinique, Réunion, Guyane, Mayotte, Paris, Lyon, Marseille, Nice, Bordeaux, Toulouse, Nantes et plus."
        canonical="https://www.clesducabanon.fr/nos-zones"
        keywords="conciergerie airbnb france, gestion airbnb dom-tom, conciergerie guadeloupe, conciergerie martinique, gestion airbnb paris, conciergerie nice, gestion airbnb lyon"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="w-12 h-12 text-teal-600" />
                <span className="text-3xl">🇫🇷</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Présents Partout en{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  France & DOM-TOM
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Une conciergerie Airbnb 100% digitale qui gère vos locations courte durée 
                où que soit votre bien en France métropolitaine et dans les Outre-mer.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/inscription">
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6">
                    Commencer l'inscription
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">543</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">12</div>
                <div className="text-gray-600">Régions couvertes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">62%</div>
                <div className="text-gray-600">Taux d'occupation moyen</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Note moyenne clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* DOM-TOM Zones */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🌴 Conciergerie Airbnb dans les DOM-TOM
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Spécialistes de la gestion locative dans les territoires d'Outre-mer. 
                Une expertise unique du marché tropical et insulaire.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {domTomZones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-500 hover:shadow-xl transition-all group"
                >
                  <div className="text-5xl mb-4">{zone.emoji}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {zone.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm">
                    {zone.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 bg-teal-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-600">{zone.stats.properties}</div>
                      <div className="text-xs text-gray-600">Biens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-600">{zone.stats.avgOccupation}</div>
                      <div className="text-xs text-gray-600">Occupation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-teal-600">{zone.stats.avgRating}</div>
                      <div className="text-xs text-gray-600">Note</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {zone.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`/conciergerie-airbnb-${zone.slug}`}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group/link w-full justify-center py-3 border-2 border-teal-200 rounded-lg hover:bg-teal-50 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Métropole Zones */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                🏙️ Conciergerie Airbnb en France Métropolitaine
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Présents dans toutes les grandes villes de France et leurs régions. 
                Une expertise locale doublée d'outils digitaux performants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {metropoleZones.map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-cyan-200 hover:border-cyan-500 hover:shadow-xl transition-all group"
                >
                  <div className="text-5xl mb-4">{zone.emoji}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {zone.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm">
                    {zone.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 bg-cyan-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-600">{zone.stats.properties}</div>
                      <div className="text-xs text-gray-600">Biens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-600">{zone.stats.avgOccupation}</div>
                      <div className="text-xs text-gray-600">Occupation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-600">{zone.stats.avgRating}</div>
                      <div className="text-xs text-gray-600">Note</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {zone.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`/conciergerie-airbnb-${zone.slug}`}
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold group/link w-full justify-center py-3 border-2 border-cyan-200 rounded-lg hover:bg-cyan-50 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Guarantee */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
                <MapPin className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-6">
                  Votre Zone N'est Pas Listée ?
                </h2>
                <p className="text-xl mb-8 text-teal-50">
                  Aucun problème ! Notre service 100% digital fonctionne partout en France. 
                  Que vous soyez en Bretagne, en Alsace, en Corse ou ailleurs, nous gérons votre location.
                </p>
                <a href="/inscription">
                  <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Démarrer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Prêt à Maximiser Vos Revenus Locatifs ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Rejoignez les 543 propriétaires qui nous font confiance \n                pour gérer leur location Airbnb partout en France.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/inscription">
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6">
                    Commencer l'inscription
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}