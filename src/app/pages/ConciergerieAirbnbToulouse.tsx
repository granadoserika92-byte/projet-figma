import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbToulouse() {
  const toulouseSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Toulouse",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Toulouse 239€/mois. Gestion Capitole, Saint-Cyprien, Carmes, Compans-Caffarelli. 79% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Toulouse",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toulouse",
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
    { label: "Revenus moyens", value: "1 700€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "79%", icon: Target },
    { label: "Prix moyen nuit", value: "90€", icon: Calendar },
    { label: "Clients gérés", value: "32+", icon: Users }
  ];

  const quartiers = [
    { name: "Capitole-Esquirol", description: "Hyper-centre, Place du Capitole, forte demande touristique", prix: "100€/nuit" },
    { name: "Saint-Cyprien", description: "Rive gauche Garonne, authentique, marché Victor Hugo", prix: "85€/nuit" },
    { name: "Les Carmes", description: "Quartier branché, bars, restaurants, vie nocturne", prix: "90€/nuit" },
    { name: "Compans-Caffarelli", description: "Quartier d'affaires, gare Matabiau, clientèle pro", prix: "85€/nuit" },
    { name: "Jean-Jaurès", description: "Central, métro, mix tourisme/affaires, dynamique", prix: "88€/nuit" },
    { name: "Minimes-Barrière de Paris", description: "Résidentiel, Canal du Midi, calme, familles", prix: "80€/nuit" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Toulouse 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Toulouse 239€/mois Capitole, Saint-Cyprien, Carmes, Compans. Tarification dynamique, gestion 7j/7, +79% taux occupation moyen. Expertise locale Occitanie."
        keywords="conciergerie airbnb toulouse, gestion airbnb toulouse, conciergerie capitole, gestion location toulouse, airbnb saint cyprien, conciergerie carmes toulouse, location courte durée toulouse"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-toulouse"
        schema={toulouseSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Toulouse - Occitanie</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Toulouse 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb complète à Toulouse : Capitole, Saint-Cyprien, Carmes, Compans. <strong>79% de taux d'occupation moyen</strong>.
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
              <h2>Toulouse : 4e marché Airbnb français en forte croissance</h2>
              
              <p>
                <strong>Toulouse</strong>, la Ville Rose, capitale de l'aéronautique et 4e ville de France, représente un <strong>marché 
                Airbnb dynamique</strong> (6% du volume national, +18% de croissance en 2024). Avec <strong>3,5 millions de visiteurs 
                par an</strong>, un mix parfait tourisme + affaires (Airbus, Aerospace Valley), et des prix plus abordables que Paris 
                ou Lyon, Toulouse attire une clientèle diverse.
              </p>

              <p>
                Notre <strong>conciergerie Airbnb Toulouse</strong> génère un <strong>taux d'occupation moyen de 79%</strong> pour nos 
                clients toulousains (vs 60% en gestion manuelle). Un T2 bien situé et optimisé génère 1 500 à 2 000€ de revenus mensuels, 
                soit 18 000 à 24 000€ annuels.
              </p>

              <h2>Les quartiers toulousains les plus rentables pour Airbnb</h2>

              <h3>Capitole - Esquirol (centre-ville)</h3>
              <p>
                Le <strong>cœur battant de Toulouse</strong>. Place du Capitole iconique, Théâtre, restaurants, shopping. Hyper-centre 
                touristique et commercial. <strong>Tarif moyen : 100€/nuit</strong>. Taux d'occupation exceptionnel : 85%. Clientèle 
                internationale et française, séjours courts (2-4 nuits). Forte demande week-ends et vacances. Attention : bruit possible 
                (bars, terrasses animées jusqu'à tard).
              </p>

              <h3>Saint-Cyprien (rive gauche)</h3>
              <p>
                Le quartier <strong>authentique populaire</strong> de Toulouse. Rive gauche de la Garonne, marché Victor Hugo, brocantes 
                dimanche, ambiance village. <strong>Tarif moyen : 85€/nuit</strong>. Taux d'occupation : 76%. Excellent rapport qualité-prix. 
                Clientèle cherchant authenticité et vie locale. Bien relié centre (pont, métro). Familles et couples. Prix plus abordables 
                qu'hyper-centre = forte demande budget.
              </p>

              <h3>Les Carmes (quartier branché)</h3>
              <p>
                Le <strong>quartier festif et commerçant</strong>. Rue des Filatiers (shopping), bars, restaurants, vie nocturne intense. 
                Très prisé jeunes actifs 25-40 ans. <strong>Tarif moyen : 90€/nuit</strong>. Taux d'occupation : 80%. Clientèle jeune, 
                dynamique, séjours courts. Forte demande week-ends festifs. Proximité Garonne, quais animés. Attention : bruit nocturne 
                (bars jusqu'à 2h).
              </p>

              <h3>Compans-Caffarelli (quartier d'affaires)</h3>
              <p>
                Le <strong>quartier business</strong> de Toulouse. Gare Matabiau (TGV), tours de bureaux, quartier d'affaires moderne. 
                Clientèle majoritairement <strong>professionnelle</strong> : commerciaux, consultants Airbus/Aerospace. <strong>Tarif 
                moyen : 85€/nuit</strong>. Taux d'occupation : 74%. Avantage : demande stable semaine, faible saisonnalité. Séjours 
                moyens-longs (3-7 nuits). Rentabilité régulière toute l'année.
              </p>

              <h3>Jean-Jaurès (central dynamique)</h3>
              <p>
                Quartier <strong>mix parfait tourisme/affaires</strong>. Place Jean-Jaurès, métro, commerces, proximité Capitole. 
                Très bien desservi transports. <strong>Tarif moyen : 88€/nuit</strong>. Taux d'occupation : 78%. Clientèle variée : 
                touristes, voyageurs d'affaires, familles. Bon compromis emplacement/prix. Quartier vivant, services nombreux.
              </p>

              <h3>Minimes - Barrière de Paris (résidentiel)</h3>
              <p>
                Quartier <strong>familial et calme</strong> près du Canal du Midi (UNESCO). Résidentiel, verdure, parc de la Maourine, 
                ambiance village. <strong>Tarif moyen : 80€/nuit</strong>. Taux d'occupation : 72%. Clientèle familiale, séjours détente. 
                Forte demande printemps-été (Canal du Midi, balades vélo). Prix abordables, appartements spacieux. Un peu éloigné centre 
                (métro/bus nécessaire).
              </p>

              <h2>Saisonnalité et événements toulousains</h2>

              <p>
                Toulouse a une <strong>saisonnalité modérée</strong> (mix tourisme/affaires lisse les variations). Pas de mois "mort".
              </p>

              <ul>
                <li><strong>Avril-juin, septembre-octobre</strong> (haute saison) : Météo agréable, tourisme + affaires. Tarifs +15-20% 
                vs hiver. Taux d'occupation : 85-90%.</li>
                
                <li><strong>Juillet-août</strong> (été) : Tourisme familial, étudiants Erasmus, festivals. Tarifs standard. Taux 
                d'occupation : 80%.</li>
                
                <li><strong>Novembre-mars</strong> (basse saison) : Clientèle affaires domine, météo douce. Tarifs -10-15%. Taux 
                d'occupation : 70-75%.</li>
              </ul>

              <p>
                <strong>Événements majeurs</strong> détectés par notre tarification dynamique :
              </p>

              <ul>
                <li><strong>Toulouse Game Show</strong> (novembre, jeux vidéo) : +30-40%. Forte demande jeunes 18-30 ans.</li>
                <li><strong>Rio Loco</strong> (juin, festival musiques du monde) : +25-30%. Clientèle festive.</li>
                <li><strong>Festival Toulouse d'Été</strong> (juillet-août) : +15-20%.</li>
                <li><strong>Matchs Stade Toulousain</strong> (rugby, 15-20 matchs/an au Stade Ernest-Wallon) : +20-25% zones sud.</li>
                <li><strong>Salons professionnels Parc des Expositions</strong> : +20-30% sur périodes salons aerospace.</li>
                <li><strong>Violet Festival</strong> (festival urbain, mai) : +15-20%.</li>
              </ul>

              <h2>Pourquoi 239€/mois est imbattable à Toulouse ?</h2>

              <p>
                Conciergeries traditionnelles toulousaines :
              </p>

              <ul>
                <li><strong>GuestReady</strong> : 18-20% commission (300-360€/mois pour 1 700€ revenus)</li>
                <li><strong>Conciergeries locales</strong> : 18-22% (300-400€/mois)</li>
                <li><strong>Luckey Homes</strong> : 20% (340€/mois)</li>
              </ul>

              <p>
                Notre forfait fixe <strong>239€/mois</strong> = économie de <strong>60 à 160€ par mois</strong> (720 à 1 920€ par an). 
                Service équivalent incluant tarification dynamique, multi-diffusion, gestion 7j/7.
              </p>

              <h2>Ce qui est inclus - Forfait Toulouse 239€/mois</h2>

              <ul>
                <li>✅ Création/optimisation annonce SEO Toulouse</li>
                <li>✅ Tarification dynamique (événements toulousains, saisonnalité, concurrence locale)</li>
                <li>✅ Gestion voyageurs 7j/7 (réponses en moins d'1h)</li>
                <li>✅ Check-in/check-out digital (serrure connectée ou boîte à clés)</li>
                <li>✅ Multi-diffusion Airbnb + Booking + Abritel + 10 plateformes</li>
                <li>✅ Reporting mensuel</li>
                <li>✅ Coordination ménage (coût ménage à votre charge : 30-45€/ménage à Toulouse)</li>
              </ul>

              <h2>Témoignage Toulouse</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "Je possède un T2 Capitole. Avant Les Clés du Cabanon, je le gérais moi-même à 75€/nuit fixe et j'étais à 65% 
                  d'occupation. Maintenant avec tarification dynamique, je vends 95€ les week-ends, 110€ pendant Toulouse Game Show, 
                  et 70€ en semaine creuse pour remplir. Mon revenu mensuel est passé de 1 250€ à 1 850€. Rentabilité immédiate !"
                </p>
                <p className="font-semibold">— Julien R., propriétaire T2 Capitole, Toulouse centre</p>
              </div>

              <h2>Comment démarrer ?</h2>

              <ol>
                <li><strong>Audit gratuit</strong> (30 min visio) : Analyse bien + quartier + potentiel revenus Toulouse</li>
                <li><strong>Estimation revenus</strong> : Simulation basée sur données locales réelles</li>
                <li><strong>Installation accès digital</strong> : Serrure connectée ou boîte à clés (150-250€ one-time)</li>
                <li><strong>Création annonce</strong> : Rédaction SEO Toulouse + photos + mise en ligne</li>
                <li><strong>Lancement</strong> : Premières réservations sous 7-10 jours</li>
              </ol>

              <h2>FAQ Toulouse</h2>

              <h3>La réglementation location courte durée à Toulouse ?</h3>
              <p>
                Toulouse applique la loi Élan : <strong>numéro d'enregistrement obligatoire</strong> (obtention en ligne sur le site 
                de la Mairie, gratuit, délai 2-3 semaines). Limitation 120 jours/an pour résidence principale. Résidence secondaire : 
                pas de limite de jours mais autorisation de changement d'usage dans certaines zones du centre-ville.
              </p>

              <h3>Gérez-vous aussi Blagnac (aéroport) ?</h3>
              <p>
                Oui ! Blagnac (proche aéroport Toulouse-Blagnac et Airbus) est incluse dans notre couverture. Tarif identique 239€/mois. 
                Marché business intéressant (employés Airbus, voyageurs early flight).
              </p>

              <h2>Conclusion</h2>

              <p>
                Toulouse offre un <strong>marché Airbnb équilibré</strong> avec mix tourisme/affaires, faible saisonnalité, et prix 
                accessibles. Un T2 bien géré génère 1 500-2 000€/mois (18 000-24 000€/an). Notre gestion digitale à 239€/mois vous 
                apporte l'optimisation professionnelle nécessaire pour maximiser vos revenus tout en économisant 700-1 900€ par an 
                par rapport aux conciergeries à commission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Quartiers toulousains à fort potentiel</h2>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Toulouse</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 32+ propriétaires toulousains qui nous font confiance</p>
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