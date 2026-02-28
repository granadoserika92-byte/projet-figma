import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbNantes() {
  const nantesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Nantes",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Nantes 239€/mois. Gestion Centre-Ville, Île de Nantes, Bouffay, Graslin. 78% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Nantes",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nantes",
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
    { label: "Revenus moyens", value: "1 650€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "78%", icon: Target },
    { label: "Prix moyen nuit", value: "88€", icon: Calendar },
    { label: "Clients gérés", value: "28+", icon: Users }
  ];

  const quartiers = [
    { name: "Bouffay (Centre historique)", description: "Cœur médiéval, Château des Ducs, touristique", prix: "95€/nuit" },
    { name: "Graslin (Centre commerçant)", description: "Shopping, Théâtre, restaurants, dynamique", prix: "90€/nuit" },
    { name: "Île de Nantes", description: "Moderne, Machines de l'île, architecture contemporaine", prix: "85€/nuit" },
    { name: "Talensac", description: "Marché, résidentiel, vie locale authentique", prix: "80€/nuit" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Nantes 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Nantes 239€/mois Bouffay, Graslin, Île de Nantes. Tarification dynamique, gestion 7j/7, +78% taux occupation. Expertise Pays de la Loire."
        keywords="conciergerie airbnb nantes, gestion airbnb nantes, conciergerie bouffay, gestion location nantes, airbnb ile de nantes, location courte durée nantes"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-nantes"
        schema={nantesSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Nantes - Pays de la Loire</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Nantes 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb à Nantes : Bouffay, Graslin, Île de Nantes. <strong>78% de taux d'occupation moyen</strong>.
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
              <h2>Nantes : ville verte et dynamique, marché Airbnb en croissance</h2>
              
              <p>
                <strong>Nantes</strong>, 6e ville de France et capitale des Pays de la Loire, représente un <strong>marché Airbnb dynamique</strong> 
                (3% du volume national, +17% croissance 2024). Élue ville la plus agréable de France (L'Express 2023), Nantes attire 
                <strong>2,5 millions de visiteurs/an</strong>. Mix tourisme culturel (Machines de l'île, Château) + affaires (hub économique ouest). 
                Un T2 bien géré génère <strong>1 500 à 1 900€ de revenus mensuels</strong>.
              </p>

              <h2>Les quartiers nantais les plus rentables</h2>

              <h3>Bouffay (Centre historique)</h3>
              <p>
                Le <strong>cœur médiéval</strong> de Nantes. Ruelles pavées, Château des Ducs de Bretagne, cathédrale, restaurants. 
                <strong>Tarif moyen : 95€/nuit</strong>. Taux d'occupation : 82%. Quartier piéton agréable, très touristique. Clientèle française 
                et européenne. Proximité tous commerces. Attention : bruit nocturne week-ends (bars, terrasses).
              </p>

              <h3>Graslin (Centre commerçant)</h3>
              <p>
                Le <strong>quartier élégant</strong> 18e siècle. Théâtre Graslin, Passage Pommeraye, rue Crébillon (shopping). 
                <strong>Tarif moyen : 90€/nuit</strong>. Taux d'occupation : 79%. Clientèle mix tourisme/affaires. Architecture néoclassique, 
                quartier dynamique et central. Bien desservi tram.
              </p>

              <h3>Île de Nantes</h3>
              <p>
                Quartier <strong>moderne et créatif</strong>. Machines de l'île (éléphant mécanique), Hangar à Bananes, architecture contemporaine. 
                <strong>Tarif moyen : 85€/nuit</strong>. Taux d'occupation : 76%. Marché en croissance (+25% en 2024). Clientèle jeune, familles, 
                curieux. Appartements neufs, parking disponible. Légèrement excentré mais bien connecté.
              </p>

              <h3>Talensac</h3>
              <p>
                Quartier <strong>résidentiel authentique</strong>. Marché de Talensac (marché couvert), vie de quartier, restaurants locaux. 
                <strong>Tarif moyen : 80€/nuit</strong>. Taux d'occupation : 73%. Clientèle cherchant authenticité. Prix plus abordables. 
                Bon rapport qualité/prix. Proximité centre (10 min tram).
              </p>

              <h2>Saisonnalité et événements nantais</h2>

              <p>Nantes a une <strong>saisonnalité modérée</strong> (mix tourisme/affaires stabilise la demande).</p>

              <ul>
                <li><strong>Avril-octobre</strong> : Haute saison. Météo agréable, événements culturels. Tarifs +15-20% vs hiver. Taux : 85%.</li>
                <li><strong>La Folle Journée</strong> (janvier, festival musique classique) : +20-25%. 150 000 visiteurs.</li>
                <li><strong>Hellfest</strong> (juin, festival métal à Clisson 30km) : +30-35%. Retombées Nantes.</li>
                <li><strong>Voyage à Nantes</strong> (juillet-août, événement culturel) : +15-20%.</li>
                <li><strong>Novembre-mars</strong> : Basse saison. Clientèle affaires. Tarifs -10-15%. Taux : 70%.</li>
              </ul>

              <h2>Pourquoi 239€/mois vs conciergeries nantaises ?</h2>

              <p>
                Conciergeries traditionnelles nantaises : 18-22% commission (300-365€/mois pour 1 650€ revenus). Notre forfait <strong>239€/mois</strong> 
                = économie de <strong>60 à 125€/mois</strong> (720 à 1 500€/an).
              </p>

              <h2>Ce qui est inclus - Forfait 239€/mois</h2>

              <ul>
                <li>✅ Création/optimisation annonce SEO Nantes</li>
                <li>✅ Tarification dynamique (événements nantais, saisonnalité)</li>
                <li>✅ Gestion voyageurs 7j/7 (réponses en moins d'1h)</li>
                <li>✅ Check-in/check-out digital</li>
                <li>✅ Multi-diffusion Airbnb + Booking + Abritel + plateformes</li>
                <li>✅ Coordination ménage (30-40€/ménage à Nantes)</li>
              </ul>

              <h2>Témoignage Nantes</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "T2 Bouffay : avant 1 400€/mois en gestion manuelle. Maintenant 1 750€/mois avec optimisation SEO + tarification dynamique. 
                  Forfait 239€ rentabilisé en 12 jours !"
                </p>
                <p className="font-semibold">— Sophie M., propriétaire T2 Bouffay</p>
              </div>

              <h2>Conclusion</h2>

              <p>
                Nantes offre un <strong>marché Airbnb équilibré</strong> : ville agréable, dynamique économique, prix raisonnables. Notre gestion 
                digitale 239€/mois maximise vos revenus tout en économisant 700-1 500€/an vs conciergeries à commission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Quartiers nantais à fort potentiel</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Nantes</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 28+ propriétaires nantais qui nous font confiance</p>
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
