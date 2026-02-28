import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Calendar, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbLille() {
  const lilleSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Lille",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Lille 239€/mois. Gestion Vieux-Lille, Wazemmes, Euralille. 75% taux occupation.",
    "areaServed": {
      "@type": "City",
      "name": "Lille",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lille",
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
    { label: "Revenus moyens", value: "1 550€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "75%", icon: Target },
    { label: "Prix moyen nuit", value: "87€", icon: Calendar },
    { label: "Clients gérés", value: "25+", icon: Users }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Lille 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Lille 239€/mois Vieux-Lille, Wazemmes, Euralille. Tarification dynamique, gestion 7j/7, +75% taux occupation. Expertise Hauts-de-France."
        keywords="conciergerie airbnb lille, gestion airbnb lille, conciergerie vieux lille, gestion location lille, location courte durée lille"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-lille"
        schema={lilleSchema}
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Lille - Hauts-de-France</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Lille 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                Gestion Airbnb à Lille : Vieux-Lille, Wazemmes, Euralille. <strong>75% de taux d'occupation moyen</strong>.
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
              <h2>Lille : capitale nordiste, marché Airbnb affaires + week-ends</h2>
              
              <p>
                <strong>Lille</strong>, capitale des Hauts-de-France et 4e métropole française, attire <strong>2 millions de 
                visiteurs/an</strong>. Hub transfrontalier (Eurostar Londres 1h20, Bruxelles 30min), ville d'affaires dynamique, 
                et destination week-end prisée (braderie de Lille = 2 millions de visiteurs). Un T2 bien géré génère <strong>1 400 
                à 1 800€ de revenus mensuels</strong>.
              </p>

              <h2>Les quartiers lillois les plus rentables</h2>

              <h3>Vieux-Lille</h3>
              <p>
                Le <strong>quartier historique flamand</strong>. Architecture flamande colorée, ruelles pavées, Grand'Place, boutiques. 
                <strong>Tarif moyen : 95€/nuit</strong>. Taux d'occupation : 80%. Quartier le plus touristique et photogénique. 
                Clientèle internationale (Eurostar), couples, week-ends. Charme maximal.
              </p>

              <h3>Wazemmes</h3>
              <p>
                Quartier <strong>populaire et multiculturel</strong>. Marché de Wazemmes (dimanche), bars alternatifs, vie locale 
                authentique. <strong>Tarif moyen : 75€/nuit</strong>. Taux d'occupation : 72%. Prix plus abordables, clientèle jeune 
                et étudiante. Quartier en gentrification, bon potentiel.
              </p>

              <h3>Euralille (Quartier d'affaires)</h3>
              <p>
                Zone <strong>business moderne</strong>. Gare Lille Europe (Eurostar, TGV), tours de bureaux, centre commercial. 
                <strong>Tarif moyen : 85€/nuit</strong>. Taux d'occupation : 73%. Clientèle majoritairement professionnelle. 
                Demande stable semaine, faible week-end. Appartements modernes fonctionnels.
              </p>

              <h3>République-Beaux-Arts</h3>
              <p>
                Quartier <strong>central résidentiel</strong>. Palais des Beaux-Arts (musée), commerçant, bien desservi. 
                <strong>Tarif moyen : 82€/nuit</strong>. Mix tourisme/affaires. Bon compromis emplacement/prix. Quartier calme 
                et agréable.
              </p>

              <h2>Saisonnalité et événements lillois</h2>

              <ul>
                <li><strong>Braderie de Lille</strong> (1er week-end septembre) : +80-120% sur les tarifs. Plus grand marché aux 
                puces d'Europe, 2 millions de visiteurs. Réservations complètes 6 mois avant. Événement #1 de l'année.</li>
                <li><strong>Lille 3000</strong> (biennal, événement culturel) : +30-40% sur périodes fortes.</li>
                <li><strong>Toute l'année</strong> : Demande affaires stable (hub économique). Faible saisonnalité.</li>
                <li><strong>Décembre</strong> : Marché de Noël. +20-25%.</li>
              </ul>

              <h2>Pourquoi 239€/mois vs conciergeries lilloises ?</h2>

              <p>
                Conciergeries locales : 18-22% commission (280-340€/mois pour 1 550€ revenus). Notre forfait <strong>239€/mois</strong> 
                = économie de <strong>40 à 100€/mois</strong> (480 à 1 200€/an).
              </p>

              <h2>Inclus dans le forfait 239€/mois</h2>

              <ul>
                <li>✅ Optimisation annonce SEO Lille + braderie</li>
                <li>✅ Tarification dynamique (braderie, événements, affaires)</li>
                <li>✅ Gestion voyageurs 7j/7 multilingue (français, anglais, néerlandais)</li>
                <li>✅ Check-in/check-out digital</li>
                <li>✅ Multi-diffusion plateformes</li>
                <li>✅ Coordination ménage (30-40€/ménage)</li>
              </ul>

              <h2>Témoignage Lille</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "T2 Vieux-Lille : pendant la braderie, je loue 200€/nuit au lieu de 85€. Sur le week-end braderie seul, je fais 
                  600€ au lieu de 250€. La tarification dynamique est essentielle à Lille !"
                </p>
                <p className="font-semibold">— Pierre L., propriétaire T2 Vieux-Lille</p>
              </div>

              <h2>Conclusion</h2>

              <p>
                Lille offre un marché Airbnb <strong>équilibré affaires + événements</strong> : demande stable toute l'année + 
                pics événementiels (braderie). Notre gestion 239€/mois maximise vos revenus tout en économisant 500-1 200€/an 
                vs conciergeries à commission.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Optimisez votre Airbnb à Lille</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 25+ propriétaires lillois qui nous font confiance</p>
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
