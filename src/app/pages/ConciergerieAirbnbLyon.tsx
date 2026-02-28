import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbLyon() {
  const lyonSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Lyon",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Lyon 239€/mois. Gestion Presqu'île, Vieux Lyon, Part-Dieu, Confluence. Tarification dynamique, +82% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Lyon",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressCountry": "FR"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "239",
      "priceCurrency": "EUR"
    }
  };

  const stats = [
    { label: "Revenus moyens", value: "1 900€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "82%", icon: Target },
    { label: "Prix moyen nuit", value: "105€", icon: Calendar },
    { label: "Clients gérés", value: "45+", icon: Users }
  ];

  const quartiers = [
    { name: "Presqu'île (2e)", description: "Hyper-centre, shopping, Place Bellecour. Mix tourisme/affaires", prix: "120€/nuit" },
    { name: "Vieux Lyon (5e)", description: "UNESCO, charme Renaissance, forte demande touristique", prix: "115€/nuit" },
    { name: "Part-Dieu (3e)", description: "Quartier d'affaires, gare TGV, clientèle pro", prix: "110€/nuit" },
    { name: "Confluence (2e)", description: "Quartier moderne, musées, architecture contemporaine", prix: "105€/nuit" },
    { name: "Croix-Rousse (4e)", description: "Village lyonnais, charme bohème, pentes prisées", prix: "100€/nuit" },
    { name: "Brotteaux-Tête d'Or (6e)", description: "Parc, familles, résidentiel chic", prix: "110€/nuit" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Lyon 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Lyon 239€/mois Presqu'île, Vieux Lyon, Part-Dieu, Confluence, Croix-Rousse. Tarification dynamique, gestion 7j/7, +82% taux occupation moyen."
        keywords="conciergerie airbnb lyon, gestion airbnb lyon, conciergerie presquile, gestion location lyon, airbnb vieux lyon, conciergerie part-dieu, location courte durée lyon, gestion appartement lyon"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-lyon"
        schema={lyonSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Lyon - Auvergne-Rhône-Alpes</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Lyon 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb complète à Lyon : Presqu'île, Vieux Lyon, Part-Dieu, Confluence. <strong>82% de taux d'occupation moyen</strong>.
              </p>
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">
                <a href="/#contact">Commencer maintenant <ArrowRight className="ml-2" /></a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Pourquoi Lyon est le marché #2 en France ?</h2>
              
              <p>
                <strong>Lyon</strong> est la deuxième ville de France et le deuxième marché Airbnb national (12% du volume). 
                Capitale de la gastronomie, ville UNESCO, hub économique Auvergne-Rhône-Alpes, Lyon attire <strong>6 millions 
                de visiteurs par an</strong> (touristes + clientèle d'affaires).
              </p>

              <p>
                Notre <strong>conciergerie Airbnb Lyon</strong> génère pour nos clients un <strong>taux d'occupation moyen de 82%</strong> 
                (vs 65% en gestion manuelle selon données AirDNA 2024). Un T2 bien situé et optimisé génère 1 800 à 2 400€ de 
                revenus mensuels, soit 21 600 à 28 800€ annuels.
              </p>

              <h2>Les quartiers lyonnais les plus rentables pour Airbnb</h2>

              <h3>Presqu'île (1er et 2e arrondissements)</h3>
              <p>
                Le <strong>cœur battant de Lyon</strong>, entre Rhône et Saône. Place Bellecour, rue de la République (shopping), 
                Hôtel de Ville, Opéra. Mix parfait tourisme + affaires. <strong>Tarif moyen : 120€/nuit</strong>. Taux d'occupation 
                exceptionnel : 88%. C'est le quartier le plus demandé par les voyageurs internationaux. Clientèle haut de gamme, 
                séjours courts (2-4 nuits). Forte demande week-ends et événements (Fête des Lumières, Nuits Sonores).
              </p>

              <h3>Vieux Lyon (5e arrondissement)</h3>
              <p>
                Quartier <strong>classé UNESCO</strong>, architecture Renaissance, traboules historiques. Très prisé des touristes 
                cherchant authenticité et charme. Proximité cathédrale Saint-Jean, basilique Fourvière. <strong>Tarif moyen : 
                115€/nuit</strong>. Taux d'occupation : 84%. Clientèle internationale (USA, Asie, Europe Nord). Attention : 
                immeubles anciens, vérifier possibilité location courte durée en copropriété.
              </p>

              <h3>Part-Dieu (3e arrondissement)</h3>
              <p>
                Le <strong>quartier d'affaires</strong> de Lyon. Gare TGV Part-Dieu (2h de Paris), tours de bureaux, centre 
                commercial. Clientèle majoritairement professionnelle : commerciaux, consultants, cadres en déplacement. 
                <strong>Tarif moyen : 110€/nuit</strong>. Taux d'occupation : 79%. Avantage : forte demande semaine, faible 
                saisonnalité. Séjours moyens-longs (3-7 nuits). Rentabilité stable toute l'année.
              </p>

              <h3>Confluence (2e arrondissement sud)</h3>
              <p>
                Quartier <strong>moderne et écologique</strong> au confluent Rhône-Saône. Architecture contemporaine, Musée des 
                Confluences, centre commercial, docks réhabilités. Clientèle familiale et jeunes couples. <strong>Tarif moyen : 
                105€/nuit</strong>. Marché en forte croissance (+22% en 2024). Prix plus accessibles qu'hyper-centre, appartements 
                modernes bien équipés très appréciés.
              </p>

              <h3>Croix-Rousse (1er et 4e arrondissements)</h3>
              <p>
                Le <strong>"village dans la ville"</strong>. Quartier bohème des canuts, pentes historiques, marché quotidien, 
                vie de quartier authentique. Très prisé des voyageurs cherchant expérience locale. <strong>Tarif moyen : 100€/nuit</strong>. 
                Taux d'occupation : 77%. Clientèle française et européenne. Attention aux pentes : mentionner clairement dans 
                l'annonce (escaliers, pas d'ascenseur souvent).
              </p>

              <h3>Brotteaux - Tête d'Or (6e arrondissement)</h3>
              <p>
                Quartier <strong>résidentiel chic</strong> près du Parc de la Tête d'Or (plus grand parc urbain de France). 
                Clientèle familiale, séjours détente. Proximité zoo gratuit, jardin botanique, lac. <strong>Tarif moyen : 
                110€/nuit</strong>. Forte demande printemps-été. Séjours moyens-longs (4-7 nuits). Calme et verdure appréciés.
              </p>

              <h2>Les événements lyonnais qui dopent les revenus</h2>

              <p>
                Notre <strong>tarification dynamique</strong> détecte automatiquement les événements majeurs lyonnais et ajuste 
                vos prix :
              </p>

              <ul>
                <li><strong>Fête des Lumières</strong> (début décembre, 4 jours) : +60-80% sur les tarifs. Événement #1 de 
                l'année, 2 millions de visiteurs. Réservez vos dates 6 mois à l'avance pour maximiser.</li>
                
                <li><strong>Nuits Sonores</strong> (mai, festival musique électronique) : +40-50%. Forte demande jeunes 
                18-35 ans, quartiers Guillotière/Confluence surchargés.</li>
                
                <li><strong>Biennale d'Art Contemporain</strong> (années impaires, septembre-janvier) : +20-30%. Clientèle 
                internationale CSP+.</li>
                
                <li><strong>Matchs OL Groupama Stadium</strong> (Décines, accessible métro) : +25-35% zones est Lyon.</li>
                
                <li><strong>Salons professionnels Eurexpo</strong> (toute l'année) : +20-30% sur périodes salons. Forte 
                demande professionnelle.</li>
                
                <li><strong>Quais du Polar</strong> (mars-avril, festival littéraire) : +15-20%.</li>
              </ul>

              <h2>Pourquoi 239€/mois est imbattable à Lyon ?</h2>

              <p>
                À Lyon, les conciergeries traditionnelles pratiquent :
              </p>

              <ul>
                <li><strong>UpperKey</strong> : 18-20% commission (340-400€/mois pour 2000€ revenus)</li>
                <li><strong>Luckey Homes</strong> : 20% (400€/mois)</li>
                <li><strong>Conciergeries locales lyonnaises</strong> : 18-25% (360-500€/mois)</li>
              </ul>

              <p>
                Notre forfait fixe <strong>239€/mois</strong> = économie de <strong>120 à 260€ par mois</strong> (1 440 à 3 120€ 
                par an). Pour un service identique incluant tarification dynamique IA, multi-diffusion, gestion 7j/7.
              </p>

              <h2>Ce qui est inclus - Forfait Lyon 239€/mois</h2>

              <ul>
                <li>✅ Création/optimisation annonce avec SEO local Lyon</li>
                <li>✅ Tarification dynamique (événements lyonnais, saisonnalité, concurrence locale)</li>
                <li>✅ Gestion voyageurs 7j/7 (réponses en moins d'1h)</li>
                <li>✅ Check-in/check-out digital (serrure connectée ou boîte à clés)</li>
                <li>✅ Multi-diffusion Airbnb + Booking + Abritel + 10 plateformes</li>
                <li>✅ Reporting mensuel détaillé</li>
                <li>✅ Coordination ménage (coût ménage à votre charge : 35-50€/ménage à Lyon)</li>
              </ul>

              <h2>Témoignage Lyon</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "Je possède un T2 Presqu'île que je louais 95€/nuit en tarif fixe. Depuis que Les Clés du Cabanon gère 
                  avec tarification dynamique, je vends 130€ les week-ends et 145€ pendant la Fête des Lumières. Mon revenu 
                  mensuel est passé de 1600€ à 2200€. Pour 239€/mois, c'est rentabilisé dès la première semaine !"
                </p>
                <p className="font-semibold">— Thomas D., propriétaire T2 Presqu'île, Lyon 2e</p>
              </div>

              <h2>Comment démarrer ?</h2>

              <ol>
                <li><strong>Audit gratuit</strong> (30 min visio) : Analyse bien + quartier + potentiel revenus</li>
                <li><strong>Estimation revenus Lyon</strong> : Simulation basée sur votre quartier précis</li>
                <li><strong>Installation accès digital</strong> : Serrure connectée recommandée (150-250€ one-time)</li>
                <li><strong>Création annonce</strong> : Rédaction SEO Lyon + mise en ligne multi-plateformes</li>
                <li><strong>Lancement</strong> : Premières réservations sous 7-10 jours</li>
              </ol>

              <h2>FAQ Lyon</h2>

              <h3>La réglementation location courte durée à Lyon ?</h3>
              <p>
                Lyon applique la <strong>loi Élan</strong> : obligation de déclaration en mairie (numéro d'enregistrement à 
                afficher sur l'annonce) + limitation 120 jours/an pour résidence principale. Résidence secondaire : pas de 
                limite de jours mais autorisation de changement d'usage obligatoire dans certaines zones. Nous vous accompagnons 
                dans les démarches.
              </p>

              <h3>Gérez-vous aussi Villeurbanne ?</h3>
              <p>
                Oui ! Villeurbanne (limitrophe Lyon) est incluse dans notre couverture. Quartiers Gratte-Ciel, Charpennes, 
                Flachet très demandés. Tarif identique 239€/mois.
              </p>

              <h2>Conclusion</h2>

              <p>
                Lyon offre un <strong>marché Airbnb exceptionnel</strong> : demande stable toute l'année (tourisme + affaires), 
                événements majeurs (Fête des Lumières), forte rentabilité (1 800-2 400€/mois pour un T2), et réglementation 
                claire. Notre gestion digitale à 239€/mois vous apporte l'optimisation professionnelle nécessaire pour maximiser 
                vos revenus tout en économisant 1 500-3 000€ par an par rapport aux conciergeries à commission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Quartiers lyonnais à fort potentiel</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {quartiers.map((q, idx) => (
                  <Card key={idx} className="p-6">
                    <MapPin className="w-5 h-5 text-teal-600 mb-3" />
                    <h3 className="text-lg font-bold mb-1">{q.name}</h3>
                    <div className="text-sm font-semibold text-teal-600 mb-2">{q.prix}</div>
                    <p className="text-gray-600 text-sm">{q.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Lyon</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 45+ propriétaires lyonnais qui nous font confiance</p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="/#contact">Démarrer maintenant <ArrowRight className="ml-2" /></a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}