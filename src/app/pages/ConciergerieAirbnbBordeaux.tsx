import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbBordeaux() {
  const bordeauxSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Bordeaux",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Bordeaux 239€/mois. Gestion Centre-Ville, Chartrons, Bassin à Flot, Saint-Pierre. 81% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Bordeaux",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bordeaux",
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
    { label: "Revenus moyens", value: "1 850€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "81%", icon: Target },
    { label: "Prix moyen nuit", value: "98€", icon: Calendar },
    { label: "Clients gérés", value: "35+", icon: Users }
  ];

  const quartiers = [
    { name: "Centre-Ville Triangle d'Or", description: "Hyper-centre, Grand Théâtre, shopping, UNESCO", prix: "115€/nuit" },
    { name: "Chartrons", description: "Quartier branché, antiquaires, bars à vin, quais", prix: "105€/nuit" },
    { name: "Saint-Pierre", description: "Historique, proximité Miroir d'eau, touristique", prix: "110€/nuit" },
    { name: "Bassin à Flot", description: "Moderne, Cité du Vin, architecture contemporaine", prix: "100€/nuit" },
    { name: "Bastide", description: "Rive droite, Darwin, prix abordables, émergent", prix: "85€/nuit" },
    { name: "Victoire", description: "Étudiant, dynamique, vie nocturne, jeune", prix: "90€/nuit" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Bordeaux 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Bordeaux 239€/mois Centre-Ville, Chartrons, Bassin à Flot, Saint-Pierre. Tarification dynamique, gestion 7j/7, +81% taux occupation. Expertise Nouvelle-Aquitaine."
        keywords="conciergerie airbnb bordeaux, gestion airbnb bordeaux, conciergerie chartrons, gestion location bordeaux, airbnb centre ville bordeaux, location courte durée bordeaux"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-bordeaux"
        schema={bordeauxSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Bordeaux - Nouvelle-Aquitaine</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Bordeaux 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb complète à Bordeaux : Centre-Ville, Chartrons, Bassin à Flot. <strong>81% de taux d'occupation moyen</strong>.
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
              <h2>Bordeaux : 5e marché Airbnb français, ville UNESCO en pleine expansion</h2>
              
              <p>
                <strong>Bordeaux</strong>, capitale mondiale du vin et 5e marché Airbnb national (5% du volume, +20% de croissance en 2024), 
                attire <strong>4 millions de visiteurs par an</strong>. Classée UNESCO, ville dynamique et moderne, Bordeaux combine 
                œnotourisme, tourisme urbain, et clientèle d'affaires. Un T2 bien géré génère <strong>1 700 à 2 200€ de revenus mensuels</strong>.
              </p>

              <h2>Les quartiers bordelais les plus rentables</h2>

              <h3>Triangle d'Or - Centre-Ville</h3>
              <p>
                L'<strong>hyper-centre historique</strong> classé UNESCO. Grand Théâtre, Place de la Bourse, Miroir d'eau, rue Sainte-Catherine 
                (shopping). <strong>Tarif moyen : 115€/nuit</strong>. Taux d'occupation : 87%. Clientèle internationale haut de gamme, forte 
                demande toute l'année. Architecture 18e siècle exceptionnelle.
              </p>

              <h3>Chartrons</h3>
              <p>
                Le <strong>quartier branché</strong> de Bordeaux. Antiquaires, bars à vin, restaurants gastronomiques, quais de Garonne. 
                <strong>Tarif moyen : 105€/nuit</strong>. Taux d'occupation : 83%. Clientèle CSP+ 30-50 ans, œnotourisme, couples. 
                Proximité Cité du Vin. Quartier résidentiel chic et dynamique.
              </p>

              <h3>Saint-Pierre</h3>
              <p>
                Le <strong>cœur historique</strong> touristique. Proximité Miroir d'eau, Place de la Bourse, ruelles médiévales. 
                <strong>Tarif moyen : 110€/nuit</strong>. Taux d'occupation : 85%. Très forte demande touristique. Quartier piéton 
                agréable, restaurants, bars. Attention : bruit nocturne possible (zones animées).
              </p>

              <h3>Bassin à Flot</h3>
              <p>
                Quartier <strong>moderne et écologique</strong>. Cité du Vin (musée), architecture contemporaine, docks réhabilités, 
                marina. <strong>Tarif moyen : 100€/nuit</strong>. Marché en forte croissance (+35% en 2024). Clientèle jeune, familles, 
                appartements neufs bien équipés. Parking souvent disponible.
              </p>

              <h3>Bastide (rive droite)</h3>
              <p>
                Quartier <strong>émergent et authentique</strong>. Darwin (éco-quartier alternatif), Jardin botanique, vue sur Garonne. 
                <strong>Tarif moyen : 85€/nuit</strong>. Prix plus abordables, clientèle budget et locale. Marché en développement, 
                bon potentiel investissement.
              </p>

              <h2>Saisonnalité et événements bordelais</h2>

              <p>Bordeaux a une <strong>saisonnalité modérée</strong> (œnotourisme + affaires).</p>

              <ul>
                <li><strong>Vinexpo</strong> (juin, biennal) : +50-60% sur les tarifs. Événement mondial du vin.</li>
                <li><strong>Bordeaux Fête le Vin</strong> (juin, tous les 2 ans) : +40-50%. 500 000 visiteurs.</li>
                <li><strong>Marathon du Médoc</strong> (septembre) : +25-30%. Unique au monde (dégustation vins pendant course).</li>
                <li><strong>Vendanges</strong> (septembre-octobre) : +20-25%. Œnotourisme pic.</li>
              </ul>

              <h2>Pourquoi 239€/mois vs conciergeries traditionnelles ?</h2>

              <p>
                Conciergeries bordelaises traditionnelles : 18-22% commission (320-400€/mois pour 1 850€ revenus). Notre forfait fixe 
                <strong>239€/mois</strong> = économie de <strong>80 à 160€/mois</strong> (960 à 1 920€/an).
              </p>

              <h2>Ce qui est inclus - Forfait 239€/mois</h2>

              <ul>
                <li>✅ Création/optimisation annonce SEO Bordeaux + œnotourisme</li>
                <li>✅ Tarification dynamique (événements vins, saisonnalité)</li>
                <li>✅ Gestion voyageurs 7j/7 (réponses en moins d'1h)</li>
                <li>✅ Check-in/check-out digital</li>
                <li>✅ Multi-diffusion Airbnb + Booking + Abritel + 10 plateformes</li>
                <li>✅ Coordination ménage (30-45€/ménage à Bordeaux)</li>
              </ul>

              <h2>Témoignage Bordeaux</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "T2 Chartrons : avant 1 600€/mois en gestion manuelle. Maintenant 2 100€/mois avec tarification dynamique 
                  (Vinexpo, vendanges optimisés). Le forfait 239€ est rentabilisé en 10 jours !"
                </p>
                <p className="font-semibold">— Claire B., propriétaire T2 Chartrons</p>
              </div>

              <h2>Conclusion</h2>

              <p>
                Bordeaux offre un marché Airbnb <strong>très rentable</strong> : œnotourisme premium, ville UNESCO, événements majeurs. 
                Notre gestion digitale 239€/mois maximise vos revenus tout en économisant 1 000-1 900€/an vs conciergeries à commission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Quartiers bordelais à fort potentiel</h2>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Bordeaux</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 35+ propriétaires bordelais qui nous font confiance</p>
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
