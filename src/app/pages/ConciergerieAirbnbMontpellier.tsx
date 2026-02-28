import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbMontpellier() {
  const montpellierSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Montpellier",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Montpellier 239€/mois. Gestion Écusson, Antigone, Port Marianne. 79% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Montpellier",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montpellier",
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
    { label: "Revenus moyens", value: "1 750€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "79%", icon: Target },
    { label: "Prix moyen nuit", value: "93€", icon: Calendar },
    { label: "Clients gérés", value: "30+", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Montpellier 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Montpellier 239€/mois Écusson, Antigone, Port Marianne. Tarification dynamique, gestion 7j/7, +79% taux occupation. Expertise Occitanie."
        keywords="conciergerie airbnb montpellier, gestion airbnb montpellier, conciergerie ecusson, gestion location montpellier, location courte durée montpellier"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-montpellier"
        schema={montpellierSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Montpellier - Occitanie</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Montpellier 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb à Montpellier : Écusson, Antigone, Port Marianne. <strong>79% de taux d'occupation moyen</strong>.
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
              <h2>Montpellier : ville étudiante dynamique, marché Airbnb Méditerranée</h2>
              
              <p>
                <strong>Montpellier</strong>, 7e ville de France en forte croissance (+15% population en 10 ans), attire <strong>2,5 
                millions de visiteurs/an</strong>. Ville jeune (30% étudiants), climat méditerranéen (300 jours soleil), proximité plages 
                (10km). Mix tourisme balnéaire + affaires + étudiant. Un T2 bien géré génère <strong>1 600 à 2 000€ de revenus mensuels</strong>.
              </p>

              <h2>Les quartiers montpelliérains les plus rentables</h2>

              <h3>L'Écusson (Centre historique)</h3>
              <p>
                Le <strong>cœur médiéval piéton</strong>. Ruelles pavées, Place de la Comédie, shopping, restaurants. <strong>Tarif moyen : 
                100€/nuit</strong>. Taux d'occupation : 83%. Quartier touristique vivant, architecture médiévale. Clientèle jeune et internationale. 
                Attention : bruit nocturne (quartier festif).
              </p>

              <h3>Antigone</h3>
              <p>
                Quartier <strong>néoclassique moderne</strong> (années 80). Architecture monumentale, Place du Nombre d'Or, proximité tram. 
                <strong>Tarif moyen : 90€/nuit</strong>. Taux d'occupation : 78%. Appartements modernes spacieux, parking disponible. 
                Clientèle familiale et affaires.
              </p>

              <h3>Port Marianne</h3>
              <p>
                Nouveau <strong>quartier écologique</strong> (années 2000). Architecture contemporaine HQE, tramway, espaces verts. 
                <strong>Tarif moyen : 85€/nuit</strong>. Marché en forte croissance (+30% en 2024). Appartements neufs, bien équipés. 
                Proximité Odysseum (centre commercial/loisirs).
              </p>

              <h3>Beaux-Arts</h3>
              <p>
                Quartier <strong>résidentiel chic</strong>. Musée Fabre, architecture haussmannienne, calme. <strong>Tarif moyen : 
                95€/nuit</strong>. Clientèle CSP+, couples, séjours moyens-longs. Proche centre mais calme. Bon compromis.
              </p>

              <h2>Saisonnalité et événements montpelliérains</h2>

              <ul>
                <li><strong>Mai-septembre</strong> : Haute saison balnéaire. Plages à 10km (tram). Tarifs +25-35%. Taux : 88%.</li>
                <li><strong>Festival de Radio France</strong> (juillet, musique classique) : +20-25%. Clientèle culturelle.</li>
                <li><strong>Rentrée universitaire</strong> (septembre) : Pic demande étudiants Erasmus (séjours 3-6 mois).</li>
                <li><strong>Octobre-avril</strong> : Basse saison. Climat doux maintient demande. Tarifs -10-15%. Taux : 70%.</li>
              </ul>

              <h2>Pourquoi 239€/mois vs conciergeries montpelliéraines ?</h2>

              <p>
                Conciergeries locales : 18-22% commission (315-385€/mois pour 1 750€ revenus). Notre forfait <strong>239€/mois</strong> 
                = économie de <strong>75 à 145€/mois</strong> (900 à 1 740€/an).
              </p>

              <h2>Inclus dans le forfait 239€/mois</h2>

              <ul>
                <li>✅ Optimisation annonce SEO Montpellier + plages Méditerranée</li>
                <li>✅ Tarification dynamique (saisonnalité balnéaire, événements)</li>
                <li>✅ Gestion voyageurs 7j/7 (réponses en moins d'1h)</li>
                <li>✅ Check-in/check-out digital</li>
                <li>✅ Multi-diffusion plateformes</li>
                <li>✅ Coordination ménage (30-40€/ménage)</li>
              </ul>

              <h2>Témoignage Montpellier</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "T2 Écusson : avant 1 500€/mois. Maintenant 1 900€/mois grâce à l'optimisation été (je louais trop bas en juillet-août). 
                  Tarification dynamique = game changer !"
                </p>
                <p className="font-semibold">— Emma D., propriétaire T2 Écusson</p>
              </div>

              <h2>Conclusion</h2>

              <p>
                Montpellier offre un marché Airbnb <strong>dynamique et jeune</strong> : ville en croissance, climat méditerranéen, 
                proximité plages. Notre gestion 239€/mois maximise vos revenus tout en économisant 900-1 700€/an vs conciergeries 
                à commission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Montpellier</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 30+ propriétaires montpelliérains qui nous font confiance</p>
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
