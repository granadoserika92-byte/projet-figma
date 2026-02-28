import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { 
  Sparkles, Search, TrendingUp, Layers, MessageCircle, Zap, 
  BarChart3, Layout, CheckCircle, ArrowRight, Star 
} from 'lucide-react';
import { Button } from '../components/ui/button';

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Création & Refonte d'Annonce",
    shortDesc: "Annonces optimisées pour un taux de conversion maximal",
    fullDesc: "Nous créons des annonces professionnelles qui captent l'attention. Titres accrocheurs, descriptions détaillées, mise en avant des atouts uniques de votre bien. Optimisation continue basée sur les performances et les tendances du marché.",
    features: [
      "Titre accrocheur optimisé SEO",
      "Description détaillée et engageante", 
      "Mise en avant des équipements",
      "Règlement intérieur personnalisé",
      "Mise à jour régulière du contenu"
    ],
    href: "/services/creation-annonce"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Optimisation SEO Airbnb",
    shortDesc: "Première page des résultats garantie",
    fullDesc: "Votre annonce mérite d'être vue ! Nous optimisons chaque élément pour maximiser votre visibilité dans les recherches Airbnb. Mots-clés stratégiques, positionnement géographique, balises optimisées pour apparaître en top résultats.",
    features: [
      "Recherche de mots-clés pertinents",
      "Optimisation du titre et description",
      "Balises et catégories stratégiques",
      "Analyse de la concurrence locale",
      "Suivi des positions de recherche"
    ],
    href: "/services/optimisation-seo"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Tarification Dynamique Intelligente",
    shortDesc: "Prix ajustés en temps réel pour maximiser vos revenus",
    fullDesc: "Nos algorithmes analysent en permanence le marché, les événements locaux, la saisonnalité, la concurrence et la demande pour ajuster automatiquement vos tarifs. Maximisez votre taux d'occupation tout en optimisant vos revenus.",
    features: [
      "Ajustement automatique des prix",
      "Analyse de la demande en temps réel",
      "Prise en compte des événements locaux",
      "Tarifs week-end vs semaine",
      "Réductions stratégiques pour longue durée"
    ],
    href: "/services/tarification-dynamique"
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Synchronisation Multi-Plateformes",
    shortDesc: "Airbnb, Booking, Abritel... un seul calendrier",
    fullDesc: "Diffusez votre annonce sur toutes les plateformes majeures sans risque de double réservation. Calendrier centralisé, synchronisation instantanée, gestion simplifiée de vos disponibilités sur Airbnb, Booking.com, Abritel, Expedia et plus.",
    features: [
      "Calendrier unique synchronisé",
      "Airbnb, Booking, Abritel, Expedia",
      "Prévention des doubles réservations",
      "Mise à jour automatique des disponibilités",
      "Visibilité maximale sur le marché"
    ],
    href: "/services/multi-plateformes"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Gestion Voyageurs 7j/7",
    shortDesc: "Support réactif et professionnel",
    fullDesc: "Nos équipes répondent à vos voyageurs 7 jours sur 7. Réponse en moins de 30 minutes, gestion des demandes spéciales, résolution des problèmes, avis clients. Vous êtes libéré de la charge mentale, vos voyageurs sont enchantés.",
    features: [
      "Réponse sous 30 minutes maximum",
      "Gestion des arrivées et départs",
      "Support technique pour les voyageurs",
      "Gestion des demandes spéciales",
      "Sollicitation et gestion des avis 5 étoiles"
    ],
    href: "/services/gestion-voyageurs"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automatisation Complète",
    shortDesc: "Zéro tâche manuelle, 100% automatisé",
    fullDesc: "Libérez-vous de toutes les tâches répétitives. Messages automatiques personnalisés, instructions check-in/out, rappels automatiques, upsells intégrés. Tout fonctionne en pilote automatique. Le livret d'accueil numérique est disponible en option à +15€/mois.",
    features: [
      "Messages pré-arrivée automatiques",
      "Instructions de check-in personnalisées",
      "Rappels de check-out",
      "Upsells et services additionnels",
      "Livret d'accueil numérique (option +15€/mois)"
    ],
    href: "/services/automatisation"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Optimisation Taux d'Occupation",
    shortDesc: "Votre bien loué 300+ nuits par an",
    fullDesc: "Nous analysons vos performances et mettons en place des stratégies pour atteindre un taux d'occupation optimal. Ajustements tarifaires stratégiques, promotions ciblées, optimisation de la durée minimale de séjour selon les périodes.",
    features: [
      "Analyse des performances hebdomadaire",
      "Stratégies d'occupation personnalisées",
      "Promotions automatiques en basse saison",
      "Optimisation durée minimale de séjour",
      "Objectif: 80%+ d'occupation annuelle"
    ],
    href: "/services/optimisation-occupation"
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Espace Propriétaire Dédié",
    shortDesc: "Tableau de bord en temps réel",
    fullDesc: "Suivez toutes vos réservations, revenus, dépenses et performances depuis un tableau de bord moderne et intuitif. Statistiques détaillées, calendrier centralisé, rapports mensuels, accès 24/7 depuis n'importe quel appareil.",
    features: [
      "Tableau de bord en temps réel",
      "Calendrier de toutes vos réservations",
      "Suivi des revenus et dépenses",
      "Statistiques de performance détaillées",
      "Rapports mensuels automatiques"
    ],
    href: "/services/espace-proprietaire"
  }
];

const notIncluded = [
  {
    title: "Frais de ménage",
    description: "Facturés directement au voyageur (70-150€ selon la taille)",
    icon: "🧹"
  },
  {
    title: "Linge de maison",
    description: "Fourni par vous ou service externe (optionnel)",
    icon: "🛏️"
  },
  {
    title: "Consommables",
    description: "Gel douche, café, thé, épices de base, etc.",
    icon: "🧴"
  },
  {
    title: "Réparations & Maintenance",
    description: "Plomberie, électricité, entretien chaudière, etc.",
    icon: "🔧"
  },
  {
    title: "Check-in/Check-out physique",
    description: "Remise de clés en personne (automatisé via boîte à clés ou serrure connectée recommandée)",
    icon: "🔑"
  }
];

const additionalServices = [
  {
    title: "Photos Professionnelles",
    price: "À partir de 170€",
    description: "Shooting photo professionnel de votre bien (15-30 photos retouchées)",
    features: ["Photographe expérimenté", "Retouches incluses", "Livraison sous 48h", "Propriété des fichiers"]
  },
  {
    title: "Home Staging Virtuel",
    price: "Sur devis",
    description: "Valorisation digitale de votre bien avant photos",
    features: ["Retouches avancées", "Mise en scène virtuelle", "Amélioration de la luminosité"]
  }
];

export function NosServices() {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Nos Services de Gestion Airbnb - Les Clés du Cabanon"
        description="Découvrez tous nos services inclus dans notre forfait de gestion Airbnb à 239€/mois : création d'annonce, SEO, tarification dynamique, multi-plateformes, gestion voyageurs 7j/7, automatisation complète et plus."
        canonical="https://www.clesducabanon.fr/nos-services"
        keywords="services conciergerie airbnb, gestion airbnb complète, création annonce airbnb, optimisation seo airbnb, tarification dynamique, multi-plateformes, gestion voyageurs"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-yellow-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                Tout inclus à 239€/mois
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Nos Services de{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Conciergerie Airbnb
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Une gestion complète, professionnelle et automatisée de votre location courte durée. 
                Tout ce dont vous avez besoin, sans surprise, sans frais cachés.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/inscription">
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6">
                    Commencer maintenant
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                8 Services Inclus dans le Forfait
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une offre tout-en-un pensée pour maximiser vos revenus locatifs et minimiser votre charge de travail
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-teal-500 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-teal-600 font-semibold mb-4">
                    {service.shortDesc}
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    {service.fullDesc}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={service.href}
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold group/link"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's NOT Included */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Ce qui N'est PAS Inclus
                </h2>
                <p className="text-xl text-gray-600">
                  Transparence totale : voici ce qui reste à votre charge ou est facturé au voyageur
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notIncluded.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-teal-50 border border-teal-200 rounded-xl p-6">
                <p className="text-gray-700 text-center">
                  <strong className="text-teal-700">Note importante :</strong> Les frais de ménage sont systématiquement facturés aux voyageurs. 
                  Vous choisissez votre prestataire de ménage, nous gérons la coordination et les paiements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Services Optionnels sur Devis
                </h2>
                <p className="text-xl text-gray-600">
                  Des prestations complémentaires pour maximiser l'attractivité de votre annonce
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {additionalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-2xl p-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg font-bold text-sm">
                        {service.price}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <a href="/#contact">
                  <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white text-lg px-8 py-6">
                    Demander un devis
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à Optimiser Votre Location Airbnb ?
              </h2>
              <p className="text-xl mb-8 text-teal-50">
                Rejoignez les centaines de propriétaires qui ont choisi Les Clés du Cabanon 
                pour gérer leur location courte durée en toute sérénité.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/inscription">
                  <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Commencer gratuitement
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="/methode">
                  <Button variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10">
                    Découvrir notre méthode
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