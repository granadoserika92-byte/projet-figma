import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbRennes() {
  const stats = [
    { label: "Revenus moyens", value: "1 500€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "74%", icon: Target },
    { label: "Prix moyen nuit", value: "85€", icon: Calendar },
    { label: "Clients gérés", value: "20+", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Rennes 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Rennes 239€/mois centre historique, Colombier, Thabor. Tarification dynamique, +74% taux occupation. Expertise Bretagne."
        keywords="conciergerie airbnb rennes, gestion airbnb rennes, gestion location rennes, location courte durée rennes bretagne"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-rennes"
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Rennes - Bretagne</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Rennes 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb à Rennes : centre historique, Thabor. <strong>74% de taux d'occupation moyen</strong>.
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
              <h2>Rennes : capitale bretonne dynamique</h2>
              
              <p><strong>Rennes</strong>, capitale de Bretagne et ville étudiante (70 000 étudiants), attire 1,8 million de visiteurs/an. Mix tourisme + affaires + étudiant. Un T2 génère <strong>1 400-1 700€/mois</strong>.</p>

              <h3>Quartiers rentables</h3>
              <ul>
                <li><strong>Centre historique</strong> : maisons à colombages, Place des Lices. 92€/nuit, taux 78%.</li>
                <li><strong>Colombier</strong> : quartier branché, bars, restaurants. 80€/nuit, taux 72%.</li>
                <li><strong>Thabor</strong> : résidentiel, parc, familles. 78€/nuit, taux 70%.</li>
              </ul>

              <h3>Événements clés</h3>
              <ul>
                <li><strong>Transmusicales</strong> (décembre, festival musique) : +40-50%.</li>
                <li><strong>Tombées de la Nuit</strong> (juillet) : +25-30%.</li>
              </ul>

              <h2>Pourquoi 239€/mois ?</h2>
              <p>Conciergeries rennaises : 18-22% (270-330€/mois). Notre forfait = économie 30-90€/mois (360-1 080€/an).</p>

              <h2>Inclus</h2>
              <ul>
                <li>✅ Annonce SEO Rennes Bretagne</li>
                <li>✅ Tarification dynamique événements</li>
                <li>✅ Gestion 7j/7</li>
                <li>✅ Multi-diffusion plateformes</li>
              </ul>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic">"T2 centre : 1 300€ avant, 1 650€ maintenant. Transmusicales optimisées = +500€ sur décembre !"</p>
                <p className="font-semibold">— Anne G., Rennes</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Optimisez votre Airbnb à Rennes</h2>
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
