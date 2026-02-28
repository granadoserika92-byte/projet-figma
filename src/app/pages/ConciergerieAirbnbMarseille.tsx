import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbMarseille() {
  const marseilleSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Marseille",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Marseille 239€/mois. Gestion Vieux-Port, Panier, Corniche, Endoume, Saint-Victor. 80% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Marseille",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marseille",
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
    { label: "Revenus moyens", value: "1 800€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "80%", icon: Target },
    { label: "Prix moyen nuit", value: "95€", icon: Calendar },
    { label: "Clients gérés", value: "38+", icon: Users }
  ];

  const quartiers = [
    { name: "Vieux-Port (1er)", description: "Cœur historique, forte demande touristique, vue port", prix: "110€/nuit" },
    { name: "Le Panier (2e)", description: "Quartier pittoresque, ruelles colorées, charme provençal", prix: "100€/nuit" },
    { name: "Notre-Dame-du-Mont (6e)", description: "Résidentiel calme, proximité centre, familles", prix: "90€/nuit" },
    { name: "Endoume-Corniche (7e)", description: "Vue mer, plages Prado, quartier prisé", prix: "105€/nuit" },
    { name: "Saint-Victor (7e)", description: "Authentique, proximité Vieux-Port, local life", prix: "95€/nuit" },
    { name: "Joliette-Docks (2e)", description: "Moderne, MuCEM, réhabilitation urbaine", prix: "100€/nuit" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Marseille 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Marseille 239€/mois Vieux-Port, Panier, Corniche, Endoume. Tarification dynamique, gestion 7j/7, +80% taux occupation moyen. Expertise locale PACA."
        keywords="conciergerie airbnb marseille, gestion airbnb marseille, conciergerie vieux port, gestion location marseille, airbnb panier marseille, conciergerie corniche, location courte durée marseille"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-marseille"
        schema={marseilleSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Marseille - PACA</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Marseille 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb complète à Marseille : Vieux-Port, Panier, Corniche, Endoume. <strong>80% de taux d'occupation moyen</strong>.
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
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
              <h2>Marseille : 3e marché Airbnb de France</h2>
              
              <p>
                <strong>Marseille</strong>, deuxième ville de France et capitale de la Méditerranée, représente le <strong>3e marché 
                Airbnb national</strong> (9% du volume). Avec <strong>5 millions de visiteurs par an</strong>, un ensoleillement 
                exceptionnel (300 jours/an), et des prix plus accessibles que Paris ou la Côte d'Azur, Marseille attire une clientèle 
                variée toute l'année.
              </p>

              <p>
                Notre <strong>conciergerie Airbnb Marseille</strong> génère un <strong>taux d'occupation moyen de 80%</strong> pour 
                nos clients marseillais (vs 62% en gestion manuelle). Un T2 bien situé et optimisé génère 1 600 à 2 200€ de revenus 
                mensuels, soit 19 200 à 26 400€ annuels.
              </p>

              <h2>Les quartiers marseillais les plus rentables pour Airbnb</h2>

              <h3>Vieux-Port et alentours (1er arrondissement)</h3>
              <p>
                Le <strong>cœur touristique de Marseille</strong>. Vue iconique sur le Vieux-Port, proximité Canebière, restaurants 
                de poisson, animations permanentes. <strong>Tarif moyen : 110€/nuit</strong>. Taux d'occupation exceptionnel : 86%. 
                Clientèle internationale cherchant l'expérience marseillaise authentique. Forte demande week-ends et vacances scolaires. 
                Attention : bruit possible (bars, terrasses).
              </p>

              <h3>Le Panier (2e arrondissement)</h3>
              <p>
                Le <strong>quartier historique pittoresque</strong>. Ruelles colorées, street art, charme provençal, artisanat local. 
                Très prisé Instagram et voyageurs recherchant authenticité. <strong>Tarif moyen : 100€/nuit</strong>. Taux d'occupation : 
                82%. Clientèle jeune (25-45 ans), européenne et française. Proximité MuCEM, Vieille Charité. Immeubles anciens = 
                vérifier possibilité location courte durée.
              </p>

              <h3>Notre-Dame-du-Mont - Cours Julien (6e arrondissement)</h3>
              <p>
                Quartier <strong>bohème et branché</strong>. Street art, bars alternatifs, vie nocturne, marché bio. Clientèle jeune 
                et branchée. <strong>Tarif moyen : 90€/nuit</strong>. Taux d'occupation : 78%. Excellente alternative au Vieux-Port : 
                prix plus abordables, ambiance locale, calme résidentiel en retrait de l'agitation touristique. Séjours moyens (4-6 nuits).
              </p>

              <h3>Endoume - Corniche Kennedy (7e arrondissement)</h3>
              <p>
                Quartier <strong>balnéaire chic</strong>. Vue mer, Corniche Kennedy (route panoramique), plages du Prado, calanques 
                accessibles. Clientèle familiale haut de gamme. <strong>Tarif moyen : 105€/nuit</strong>. Forte demande été (juin-septembre). 
                Calme, résidentiel, sécurisé. Parfait pour séjours détente mer + ville. Éloigné centre (bus/voiture nécessaire).
              </p>

              <h3>Saint-Victor - Pharo (7e arrondissement)</h3>
              <p>
                Quartier <strong>authentique proche centre</strong>. Proximité Vieux-Port à pied, moins touristique, vie locale. 
                <strong>Tarif moyen : 95€/nuit</strong>. Taux d'occupation : 77%. Bon rapport qualité-prix. Clientèle cherchant 
                authenticité sans sur-tourisme. Bars et restaurants locaux, marché Noailles à 10 min.
              </p>

              <h3>Joliette - Docks Village (2e arrondissement)</h3>
              <p>
                Quartier <strong>moderne réhabilité</strong>. Docks transformés, MuCEM, Terrasses du Port (shopping), Villa Méditerranée. 
                Architecture contemporaine. <strong>Tarif moyen : 100€/nuit</strong>. Marché en croissance (+28% en 2024). Clientèle 
                jeune, familles, voyageurs d'affaires (gare Saint-Charles proche). Appartements modernes, bien équipés, parking souvent disponible.
              </p>

              <h2>Saisonnalité et événements marseillais</h2>

              <p>
                Marseille a une <strong>forte saisonnalité été</strong> (mai-septembre = 65% des revenus annuels) mais reste rentable 
                hiver grâce à la clientèle d'affaires et au climat doux.
              </p>

              <ul>
                <li><strong>Mai-septembre</strong> (haute saison) : Tourisme balnéaire, calanques, soleil. Tarifs +30-50% vs hiver. 
                Taux d'occupation : 90-95%.</li>
                
                <li><strong>Octobre-décembre</strong> (mi-saison) : Arrière-saison encore agréable, clientèle française. Tarifs standard. 
                Taux d'occupation : 70-75%.</li>
                
                <li><strong>Janvier-avril</strong> (basse saison) : Clientèle affaires, city breaks, météo douce. Tarifs -15-20%. 
                Taux d'occupation : 60-70%.</li>
              </ul>

              <p>
                <strong>Événements majeurs</strong> détectés par notre tarification dynamique :
              </p>

              <ul>
                <li><strong>Classique OM</strong> (OM vs PSG, 2x/an au Stade Vélodrome) : +40-60% sur tarifs. Forte demande supporters.</li>
                <li><strong>Festival de Marseille</strong> (juin-juillet, arts de la scène) : +25-30%.</li>
                <li><strong>Fiesta des Suds</strong> (octobre, musiques du monde) : +20-25%.</li>
                <li><strong>Marathon de Marseille</strong> (avril) : +15-20%.</li>
                <li><strong>Croisières (port passagers)</strong> : Départs/arrivées croisiéristes = demande ponctuelle forte.</li>
              </ul>

              <h2>Pourquoi 239€/mois est imbattable à Marseille ?</h2>

              <p>
                Conciergeries traditionnelles marseillaises :
              </p>

              <ul>
                <li><strong>GuestReady</strong> : 18-20% commission (320-400€/mois pour 1 800€ revenus)</li>
                <li><strong>Conciergeries locales</strong> : 18-25% (320-450€/mois)</li>
                <li><strong>Luckey Homes</strong> : 20% (360€/mois)</li>
              </ul>

              <p>
                Notre forfait fixe <strong>239€/mois</strong> = économie de <strong>80 à 210€ par mois</strong> (960 à 2 520€ par an). 
                Service équivalent incluant tarification dynamique, multi-diffusion, gestion 7j/7.
              </p>

              <h2>Ce qui est inclus - Forfait Marseille 239€/mois</h2>

              <ul>
                <li>✅ Création/optimisation annonce SEO Marseille</li>
                <li>✅ Tarification dynamique (saisonnalité forte, événements marseillais)</li>
                <li>✅ Gestion voyageurs 7j/7 (réponses en moins d'1h)</li>
                <li>✅ Check-in/check-out digital (serrure connectée recommandée)</li>
                <li>✅ Multi-diffusion Airbnb + Booking + Abritel + 10 plateformes</li>
                <li>✅ Reporting mensuel</li>
                <li>✅ Coordination ménage (coût ménage à votre charge : 30-45€/ménage à Marseille)</li>
              </ul>

              <h2>Témoignage Marseille</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "Je possède un T2 vue Vieux-Port. Avant, je le louais 85€/nuit fixe et j'étais à 70% d'occupation. Depuis que 
                  Les Clés du Cabanon gère avec tarification dynamique, je vends 120€ les week-ends d'été et 90€ en semaine hiver. 
                  Mon revenu mensuel est passé de 1 400€ à 1 950€. Le forfait 239€ se rentabilise en 10 jours !"
                </p>
                <p className="font-semibold">— Nadia K., propriétaire T2 Vieux-Port, Marseille 1er</p>
              </div>

              <h2>Comment démarrer ?</h2>

              <ol>
                <li><strong>Audit gratuit</strong> (30 min visio) : Analyse bien + quartier + potentiel revenus Marseille</li>
                <li><strong>Estimation revenus</strong> : Simulation basée sur données locales réelles</li>
                <li><strong>Installation accès digital</strong> : Serrure connectée ou boîte à clés (150-250€ one-time)</li>
                <li><strong>Création annonce</strong> : Rédaction SEO Marseille + photos + mise en ligne</li>
                <li><strong>Lancement</strong> : Premières réservations sous 7-10 jours</li>
              </ol>

              <h2>FAQ Marseille</h2>

              <h3>La réglementation location courte durée à Marseille ?</h3>
              <p>
                Marseille applique la loi Élan : <strong>numéro d'enregistrement obligatoire</strong> (obtention en ligne sur le site 
                de la Ville, gratuit, délai 2 semaines). Limitation 120 jours/an pour résidence principale. Résidence secondaire : 
                autorisation changement d'usage nécessaire dans certaines zones (1er, 2e, 6e, 7e principalement).
              </p>

              <h3>Gérez-vous aussi Aix-en-Provence ?</h3>
              <p>
                Oui ! Aix-en-Provence (30 km de Marseille) est incluse dans notre couverture PACA. Tarif identique 239€/mois. 
                Marché aixois excellent (ville étudiante + touristique).
              </p>

              <h2>Conclusion</h2>

              <p>
                Marseille offre un <strong>marché Airbnb dynamique</strong> avec forte saisonnalité été compensée par une clientèle 
                d'affaires hiver. Les prix sont 20-30% inférieurs à Paris ou Côte d'Azur, mais la rentabilité reste excellente 
                (1 600-2 200€/mois pour un T2). Notre gestion digitale à 239€/mois vous apporte l'optimisation nécessaire pour 
                maximiser vos revenus tout en économisant 1 000-2 500€ par an par rapport aux conciergeries à commission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Quartiers marseillais à fort potentiel</h2>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Marseille</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 38+ propriétaires marseillais qui nous font confiance</p>
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