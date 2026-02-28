import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbStrasbourg() {
  const strasbourgSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Strasbourg",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Strasbourg 239€/mois. Gestion Grande Île, Petite France, Krutenau. 76% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Strasbourg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Strasbourg",
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
    { label: "Revenus moyens", value: "1 600€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "76%", icon: Target },
    { label: "Prix moyen nuit", value: "92€", icon: Calendar },
    { label: "Clients gérés", value: "22+", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Strasbourg 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Strasbourg 239€/mois Grande Île, Petite France, Krutenau. Tarification dynamique, gestion 7j/7, +76% taux occupation. Expertise Grand Est."
        keywords="conciergerie airbnb strasbourg, gestion airbnb strasbourg, conciergerie petite france, gestion location strasbourg, location courte durée strasbourg"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-strasbourg"
        schema={strasbourgSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Strasbourg - Grand Est</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Strasbourg 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb à Strasbourg : Grande Île UNESCO, Petite France. <strong>76% de taux d'occupation moyen</strong>.
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
              <h2>Strasbourg : capitale européenne, marché Airbnb Grand Est</h2>
              
              <p>
                <strong>Strasbourg</strong>, capitale européenne (Parlement européen, Conseil de l'Europe) et ville UNESCO, attire 
                <strong>2 millions de visiteurs/an</strong>. Mix unique tourisme + affaires européen + marché de Noël mondialement 
                célèbre. Un T2 bien géré génère <strong>1 450 à 1 850€ de revenus mensuels</strong>.
              </p>

              <h2>Les quartiers strasbourgeois les plus rentables</h2>

              <h3>Grande Île (Centre UNESCO)</h3>
              <p>
                Le <strong>cœur historique classé UNESCO</strong>. Cathédrale Notre-Dame, Petite France, canaux. <strong>Tarif moyen : 
                100€/nuit</strong>. Taux d'occupation : 82%. Clientèle internationale et institutionnelle européenne. Architecture 
                alsacienne authentique, colombages iconiques.
              </p>

              <h3>Petite France</h3>
              <p>
                Le <strong>quartier le plus photographié</strong>. Maisons à colombages sur canaux, écluses, charme maximum. 
                <strong>Tarif moyen : 105€/nuit</strong>. Taux d'occupation : 85%. Très forte demande touristique toute l'année. 
                Quartier piéton romantique.
              </p>

              <h3>Krutenau</h3>
              <p>
                Quartier <strong>étudiant et branché</strong>. Bars, restaurants, vie nocturne, proximité universités. <strong>Tarif 
                moyen : 85€/nuit</strong>. Clientèle jeune et dynamique. Prix plus abordables, forte demande budget.
              </p>

              <h3>Quartier européen (Wacken)</h3>
              <p>
                Zone <strong>institutionnelle</strong>. Parlement européen, institutions, parc de l'Orangerie. <strong>Tarif moyen : 
                90€/nuit</strong>. Clientèle majoritairement professionnelle (fonctionnaires européens, lobbyistes). Demande stable 
                semaine, faible week-end.
              </p>

              <h2>Saisonnalité et événements strasbourgeois</h2>

              <ul>
                <li><strong>Marché de Noël</strong> (fin novembre - fin décembre) : +70-100% sur les tarifs. Événement #1 mondial, 
                2 millions de visiteurs. Réservations complètes 6 mois à l'avance. Période la plus rentable de l'année.</li>
                <li><strong>Sessions Parlement européen</strong> (1 semaine/mois) : +25-30%. Forte demande hôtelière professionnelle.</li>
                <li><strong>Été</strong> (mai-septembre) : Tourisme classique. Tarifs +15-20%. Taux : 80%.</li>
                <li><strong>Hiver hors Noël</strong> : Demande faible. Tarifs -15%. Taux : 65%.</li>
              </ul>

              <h2>Pourquoi 239€/mois vs conciergeries strasbourgeoises ?</h2>

              <p>
                Conciergeries locales : 18-22% commission (290-350€/mois pour 1 600€ revenus). Notre forfait <strong>239€/mois</strong> 
                = économie de <strong>50 à 110€/mois</strong> (600 à 1 320€/an).
              </p>

              <h2>Inclus dans le forfait 239€/mois</h2>

              <ul>
                <li>✅ Optimisation annonce SEO Strasbourg + marché de Noël</li>
                <li>✅ Tarification dynamique (Noël, sessions européennes)</li>
                <li>✅ Gestion voyageurs 7j/7 multilingue (français, allemand, anglais)</li>
                <li>✅ Check-in/check-out digital</li>
                <li>✅ Multi-diffusion plateformes</li>
                <li>✅ Coordination ménage (30-45€/ménage)</li>
              </ul>

              <h2>Témoignage Strasbourg</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "T2 Petite France : pendant le marché de Noël, je loue maintenant 180€/nuit au lieu de 95€. Sur décembre, 
                  je fais 4 500€ au lieu de 2 500€. Le forfait 239€ est ridicule comparé au gain !"
                </p>
                <p className="font-semibold">— Lucie S., propriétaire T2 Petite France</p>
              </div>

              <h2>Conclusion</h2>

              <p>
                Strasbourg offre un marché Airbnb <strong>unique en France</strong> : marché de Noël exceptionnel, institutions 
                européennes, ville UNESCO. Le marché de Noël à lui seul justifie l'optimisation professionnelle. Notre gestion 
                239€/mois maximise vos revenus notamment sur cette période critique.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Strasbourg</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 22+ propriétaires strasbourgeois qui nous font confiance</p>
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
