import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbNice() {
  const niceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Nice",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Nice 239€/mois. Gestion Vieux-Nice, Promenade des Anglais, Libération, Cimiez. 83% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Nice",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nice",
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
    { label: "Revenus moyens", value: "2 100€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "83%", icon: Target },
    { label: "Prix moyen nuit", value: "115€", icon: Calendar },
    { label: "Clients gérés", value: "42+", icon: Users }
  ];

  const quartiers = [
    { name: "Vieux-Nice", description: "Cœur historique, ruelles colorées, marché Cours Saleya", prix: "130€/nuit" },
    { name: "Promenade des Anglais", description: "Front de mer iconique, vue mer, prestige", prix: "145€/nuit" },
    { name: "Libération", description: "Gare SNCF, mix affaires/tourisme, bien desservi", prix: "105€/nuit" },
    { name: "Cimiez", description: "Quartier résidentiel chic, musées, calme", prix: "120€/nuit" },
    { name: "Port", description: "Marina, restaurants, vie nocturne, dynamique", prix: "125€/nuit" },
    { name: "Musiciens", description: "Central, piéton, commerçant, authentique", prix: "110€/nuit" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Nice 239€/mois | Gestion Location Courte Durée Côte d'Azur"
        description="Conciergerie Airbnb Nice 239€/mois Vieux-Nice, Promenade des Anglais, Libération. Tarification dynamique, gestion 7j/7, +83% taux occupation. Expertise Côte d'Azur."
        keywords="conciergerie airbnb nice, gestion airbnb nice, conciergerie vieux nice, gestion location nice, airbnb promenade anglais, location courte durée nice côte azur"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-nice"
        schema={niceSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Nice - Côte d'Azur</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Nice 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb Côte d'Azur : Vieux-Nice, Promenade, Port. <strong>83% de taux d'occupation moyen</strong>.
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
              <h2>Nice : Perle de la Côte d'Azur, marché Airbnb premium</h2>
              
              <p>
                <strong>Nice</strong>, capitale de la Côte d'Azur et 6e marché Airbnb français (4% du volume), attire <strong>5 millions 
                de visiteurs par an</strong>. Mer Méditerranée, 300 jours de soleil, climat doux toute l'année : Nice offre un marché 
                <strong>haut de gamme</strong> avec tarifs premium. Un T2 bien géré génère <strong>1 900 à 2 600€ de revenus mensuels</strong>.
              </p>

              <h2>Les quartiers niçois les plus rentables</h2>

              <h3>Vieux-Nice</h3>
              <p>
                Le <strong>cœur historique</strong> iconique. Ruelles colorées italiennes, marché Cours Saleya, restaurants, boutiques. 
                <strong>Tarif moyen : 130€/nuit</strong>. Taux d'occupation : 87%. Clientèle internationale cherchant authenticité 
                méditerranéenne. Proximité plage et port. Architecture baroque, charme provençal.
              </p>

              <h3>Promenade des Anglais</h3>
              <p>
                Le <strong>front de mer mythique</strong>. Vue mer, plages, hôtels de luxe, prestige absolu. <strong>Tarif moyen : 
                145€/nuit</strong>. Taux d'occupation : 85%. Clientèle haut de gamme, couples, lune de miel. Appartements vue mer 
                = tarifs premium justifiés. Demande forte toute l'année.
              </p>

              <h3>Libération (Gare SNCF)</h3>
              <p>
                Quartier <strong>mix affaires/tourisme</strong>. Gare SNCF (TGV Paris 5h30), bien desservi, commerces. <strong>Tarif 
                moyen : 105€/nuit</strong>. Taux d'occupation : 80%. Clientèle business semaine + tourisme week-end. Prix plus 
                abordables qu'hyper-centre, demande stable.
              </p>

              <h3>Cimiez</h3>
              <p>
                Quartier <strong>résidentiel chic</strong> collines. Musée Matisse, monastère, parcs, calme luxueux. <strong>Tarif 
                moyen : 120€/nuit</strong>. Clientèle CSP+, familles, séjours longs. Vue panoramique ville/mer. Éloigné plage 
                (bus nécessaire).
              </p>

              <h2>Saisonnalité Côte d'Azur</h2>

              <p>
                Nice a une <strong>forte saisonnalité été</strong> (mai-septembre = 70% des revenus annuels) mais climat doux 
                hiver maintient demande.
              </p>

              <ul>
                <li><strong>Mai-septembre</strong> (haute saison) : Plages, soleil, tourisme de masse. Tarifs +40-60% vs hiver. 
                Taux d'occupation : 92-95%.</li>
                <li><strong>Février</strong> : Carnaval de Nice (+50% tarifs, 2 semaines). 1 million de visiteurs.</li>
                <li><strong>Mai</strong> : Festival de Cannes (+30%, proximité 30km). Retombées Nice.</li>
                <li><strong>Octobre-avril</strong> : Hiver doux (15-18°C), retraités, digital nomads. Tarifs -20%. Taux : 70%.</li>
              </ul>

              <h2>Pourquoi 239€/mois vs conciergeries niçoises ?</h2>

              <p>
                Conciergeries Côte d'Azur : 18-25% commission (380-525€/mois pour 2 100€ revenus). Notre forfait <strong>239€/mois</strong> 
                = économie de <strong>140 à 285€/mois</strong> (1 680 à 3 420€/an).
              </p>

              <h2>Ce qui est inclus - Forfait 239€/mois</h2>

              <ul>
                <li>✅ Création/optimisation annonce SEO Nice + Côte d'Azur</li>
                <li>✅ Tarification dynamique (saisonnalité forte, événements)</li>
                <li>✅ Gestion voyageurs 7j/7 multilingue (anglais, italien)</li>
                <li>✅ Check-in/check-out digital</li>
                <li>✅ Multi-diffusion plateformes</li>
                <li>✅ Coordination ménage (40-55€/ménage à Nice)</li>
              </ul>

              <h2>Témoignage Nice</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "T2 Promenade des Anglais : avant 1 800€/mois en auto-gestion. Maintenant 2 500€/mois avec tarification dynamique 
                  (150€/nuit été, 95€ hiver au lieu de 110€ fixe). Rentabilité immédiate !"
                </p>
                <p className="font-semibold">— Marc T., propriétaire T2 Promenade</p>
              </div>

              <h2>Conclusion</h2>

              <p>
                Nice offre un <strong>marché Airbnb premium</strong> : Côte d'Azur, climat exceptionnel, clientèle internationale 
                haut de gamme. Notre gestion 239€/mois maximise vos revenus tout en économisant 1 700-3 400€/an vs conciergeries 
                à commission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Quartiers niçois à fort potentiel</h2>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Nice</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 42+ propriétaires niçois qui nous font confiance</p>
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
