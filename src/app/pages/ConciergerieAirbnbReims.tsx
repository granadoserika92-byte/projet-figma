import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbReims() {
  const stats = [
    { label: "Revenus moyens", value: "1 650€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "77%", icon: Target },
    { label: "Prix moyen nuit", value: "90€", icon: Calendar },
    { label: "Clients gérés", value: "18+", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Reims 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Reims 239€/mois centre historique, cathédrale, champagne. Tarification dynamique, +77% taux occupation. Œnotourisme Champagne."
        keywords="conciergerie airbnb reims, gestion airbnb reims, gestion location reims, location courte durée reims champagne"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-reims"
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Reims - Grand Est</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Reims 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb à Reims : cathédrale UNESCO, œnotourisme Champagne. <strong>77% taux d'occupation</strong>.
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
              <h2>Reims : capitale du Champagne, œnotourisme premium</h2>
              
              <p><strong>Reims</strong>, cité du sacre des rois et capitale mondiale du Champagne, attire 1,5 million de visiteurs/an. Cathédrale UNESCO + caves de Champagne (Veuve Clicquot, Taittinger, Pommery) = œnotourisme haut de gamme. Un T2 génère <strong>1 500-1 900€/mois</strong>.</p>

              <h3>Quartiers rentables</h3>
              <ul>
                <li><strong>Centre-ville cathédrale</strong> : UNESCO, patrimoine, touristique. 98€/nuit, taux 82%.</li>
                <li><strong>Cours Langlet</strong> : élégant, commerçant, central. 88€/nuit, taux 75%.</li>
                <li><strong>Gare Centre</strong> : TGV Paris 45min, business. 82€/nuit, taux 73%.</li>
              </ul>

              <h3>Clientèle spécifique</h3>
              <p>Œnotourisme Champagne = clientèle <strong>premium CSP+</strong>. Couples, anniversaires, demandes en mariage. Séjours week-ends courts mais tarifs élevés.</p>

              <h3>Événements</h3>
              <ul>
                <li><strong>Flâneries Musicales</strong> (été, musique classique) : +20-25%.</li>
                <li><strong>Vendanges Champagne</strong> (septembre) : +30-35%.</li>
              </ul>

              <h2>Pourquoi 239€/mois ?</h2>
              <p>Conciergeries rémoises : 18-22% (300-365€/mois). Notre forfait = économie 60-125€/mois (720-1 500€/an).</p>

              <h2>Inclus</h2>
              <ul>
                <li>✅ Annonce SEO Reims + Champagne + œnotourisme</li>
                <li>✅ Tarification dynamique vendanges/événements</li>
                <li>✅ Gestion 7j/7</li>
                <li>✅ Multi-diffusion</li>
              </ul>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic">"T2 cathédrale : clientèle Champagne = tarifs +20% vs autres villes. Reims est un marché premium !"</p>
                <p className="font-semibold">— Vincent M., Reims</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Optimisez votre Airbnb à Reims</h2>
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
