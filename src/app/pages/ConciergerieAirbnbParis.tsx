import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, Users, Target, Calendar, CheckCircle, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function ConciergerieAirbnbParis() {
  const parisSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conciergerie Airbnb Paris",
    "provider": organizationSchema,
    "description": "Conciergerie Airbnb Paris à 239€/mois. Gestion complète location courte durée tous arrondissements. Tarification dynamique, optimisation SEO, multi-plateformes, gestion 7j/7.",
    "areaServed": {
      "@type": "City",
      "name": "Paris",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
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
    { label: "Revenus moyens", value: "2 500€/mois", icon: TrendingUp },
    { label: "Taux d'occupation", value: "85%", icon: Target },
    { label: "Prix moyen nuit", value: "135€", icon: Calendar },
    { label: "Clients gérés", value: "120+", icon: Users }
  ];

  const arrondissements = [
    { name: "Marais (3e-4e)", description: "Quartier historique, forte demande touristique toute l'année", prix: "150€/nuit" },
    { name: "Saint-Germain (6e)", description: "Prestige et élégance, clientèle internationale premium", prix: "180€/nuit" },
    { name: "Montmartre (18e)", description: "Charme bohème, vue Sacré-Cœur, très prisé", prix: "140€/nuit" },
    { name: "Opéra (9e)", description: "Centre névralgique, mix tourisme et affaires", prix: "145€/nuit" },
    { name: "Batignolles (17e)", description: "Quartier tendance, familles et jeunes couples", prix: "130€/nuit" },
    { name: "Bastille (11e)", description: "Dynamique et festif, forte demande jeunes actifs", prix: "135€/nuit" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Paris à 239€/mois | Gestion Location Courte Durée"
        description="Conciergerie Airbnb Paris 239€/mois tous arrondissements. Gestion complète Marais, Saint-Germain, Montmartre. Tarification dynamique, +85% taux occupation."
        keywords="conciergerie airbnb paris, gestion airbnb paris, conciergerie marais, gestion location paris, airbnb montmartre, conciergerie saint germain, location courte durée paris, gestion appartement paris, conciergerie paris 18"
        canonical="https://www.clesducabanon.fr/conciergerie-airbnb-paris"
        schema={parisSchema}
      />
      <Header />
      
      <div className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Paris - Île-de-France</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Conciergerie Airbnb Paris à 239€/mois</h1>
              <p className="text-xl mb-8 text-white/90">
                La première conciergerie Airbnb 100% digitale à Paris. Gérez votre location courte durée dans tous les arrondissements. <strong>85% de taux d'occupation moyen</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  <a href="/#contact">Commencer maintenant <ArrowRight className="ml-2 w-5 h-5" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <a href="/#contact">Audit gratuit</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                    <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contenu SEO principal - 1200+ mots */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Conciergerie Airbnb Paris : pourquoi choisir notre gestion digitale ?</h2>
              
              <p>
                <strong>Paris</strong> est le marché #1 de la location courte durée en France, représentant 35% du volume national 
                Airbnb. Avec <strong>30 millions de visiteurs par an</strong> (touristes + clientèle d'affaires), la capitale offre 
                une opportunité extraordinaire pour les propriétaires... à condition d'optimiser parfaitement leur gestion.
              </p>

              <p>
                Notre <strong>conciergerie Airbnb à Paris</strong> combine gestion 100% digitale et expertise locale pointue. 
                Résultat : <strong>85% de taux d'occupation moyen</strong> pour nos clients parisiens (vs 68% en gestion manuelle 
                selon AirDNA 2024), et des revenus augmentés de 30-45% grâce à la tarification dynamique professionnelle.
              </p>

              <h2>Le marché Airbnb parisien en 2025 : chiffres et opportunités</h2>

              <h3>Une demande exceptionnelle toute l'année</h3>

              <p>
                Contrairement aux destinations saisonnières (mer, montagne), <strong>Paris bénéficie d'une demande stable 12 mois 
                sur 12</strong> :
              </p>

              <ul>
                <li><strong>Janvier-mars</strong> : Fashion Week Paris (janvier-février), Maison & Objet (janvier), Salon de 
                l'Agriculture (février-mars). Demande professionnelle forte. Tarifs moyens : 110-130€/nuit.</li>
                
                <li><strong>Avril-juin</strong> : Haute saison touristique printanière, météo agréable, Roland-Garros (mai-juin). 
                Pic de demande familiale + internationale. Tarifs moyens : 135-160€/nuit.</li>
                
                <li><strong>Juillet-août</strong> : Tourisme de masse, JO Paris 2024 effet durable. Forte demande malgré chaleur. 
                Tarifs moyens : 140-170€/nuit (pics à 200€+ lors d'événements).</li>
                
                <li><strong>Septembre-décembre</strong> : Rentrée professionnelle, Nuit Blanche, Foire de Paris, illuminations 
                Noël, Réveillon. Mix parfait tourisme/affaires. Tarifs moyens : 125-155€/nuit (pics 180€+ au Nouvel An).</li>
              </ul>

              <p>
                <strong>Bilan</strong> : Aucun mois "mort" à Paris. Contrairement à une station balnéaire (90% des revenus sur 
                4 mois), Paris génère des revenus réguliers toute l'année. Un T2 bien géré produit <strong>24 000 à 35 000€ 
                de revenus annuels</strong> selon l'arrondissement.
              </p>

              <h3>Les événements parisiens qui boostent les revenus</h3>

              <p>
                Notre système de <strong>tarification dynamique</strong> détecte automatiquement 200+ événements annuels à Paris 
                et ajuste vos prix en conséquence :
              </p>

              <ul>
                <li><strong>Fashion Week</strong> (janvier, février, juin, septembre) : +40% sur les tarifs, zone Marais/Opéra surchargée</li>
                <li><strong>Salon de l'Auto</strong> (octobre) : +35%, Porte de Versailles saturée</li>
                <li><strong>Roland-Garros</strong> (mai-juin) : +50% dans le 16e et ouest parisien</li>
                <li><strong>Concerts Stade de France / Accor Arena</strong> : +30-40% selon artiste</li>
                <li><strong>Salons professionnels Porte de Versailles / Paris Nord Villepinte</strong> : +25-35%</li>
                <li><strong>Matchs PSG Parc des Princes</strong> : +20-30% zones ouest</li>
              </ul>

              <p>
                Sans tarification dynamique, vous vendez au même prix les jours d'événements (argent laissé sur la table) et 
                les jours creux (calendrier vide car prix trop élevé). Nos clients parisiens gagnent en moyenne <strong>8 000€ 
                de plus par an</strong> grâce à cette optimisation automatique.
              </p>

              <h2>Nos zones d'intervention à Paris : tous les arrondissements</h2>

              <p>
                Contrairement aux conciergeries traditionnelles limitées à 2-3 arrondissements, notre modèle digital nous permet 
                de gérer <strong>partout dans Paris et proche banlieue</strong>. Voici nos zones à plus forte densité de clients :
              </p>

              <h3>Arrondissements ultra-rentables (revenus 2500-3500€/mois pour un T2)</h3>

              <ul>
                <li><strong>Le Marais (3e-4e)</strong> : Quartier historique, cœur battant de Paris. Mix parfait tourisme 
                international + jeunes actifs branchés. Proximité Hôtel de Ville, Place des Vosges, Centre Pompidou. 
                <strong>Tarif moyen : 150€/nuit</strong>. Taux d'occupation : 88%.</li>
                
                <li><strong>Saint-Germain-des-Prés (6e)</strong> : Prestige absolu, clientèle haut de gamme internationale. 
                Galeries d'art, boutiques luxe, restaurants étoilés. <strong>Tarif moyen : 180€/nuit</strong>. Taux d'occupation : 82%.</li>
                
                <li><strong>Latin Quarter (5e)</strong> : Jeunes voyageurs, étudiants, familles. Panthéon, Jardin du Luxembourg, 
                Sorbonne. <strong>Tarif moyen : 140€/nuit</strong>. Taux d'occupation : 90% (forte demande budget).</li>
                
                <li><strong>Louvre-Rivoli (1er)</strong> : Hyper-centre touristique. Louvre, Tuileries, Palais Royal. 
                <strong>Tarif moyen : 165€/nuit</strong>. Taux d'occupation : 85%.</li>
              </ul>

              <h3>Arrondissements rentables (revenus 2000-2800€/mois pour un T2)</h3>

              <ul>
                <li><strong>Montmartre (18e)</strong> : Charme bohème iconique, vue Sacré-Cœur. Quartier préféré des touristes 
                romantiques. <strong>Tarif moyen : 140€/nuit</strong>. Attention : forte concurrence, optimisation SEO critique.</li>
                
                <li><strong>Opéra-Grands Boulevards (9e)</strong> : Mix parfait tourisme + affaires. Galeries Lafayette, Opéra 
                Garnier, gares du Nord/Est proches. <strong>Tarif moyen : 145€/nuit</strong>.</li>
                
                <li><strong>Bastille-Oberkampf (11e)</strong> : Quartier dynamique, vie nocturne intense. Jeunes actifs, 
                digital nomads. <strong>Tarif moyen : 135€/nuit</strong>. Forte demande séjours moyens (5-10 jours).</li>
                
                <li><strong>Batignolles-Monceau (17e)</strong> : Quartier familial tendance, émergent. Prix plus abordables 
                que centre, excellente qualité de vie. <strong>Tarif moyen : 130€/nuit</strong>.</li>
              </ul>

              <h3>Arrondissements émergents (revenus 1800-2500€/mois pour un T2)</h3>

              <ul>
                <li><strong>Canal Saint-Martin (10e)</strong> : Gentrification avancée, très prisé jeunes voyageurs. Hipster 
                vibe, cafés branchés. <strong>Tarif moyen : 125€/nuit</strong>.</li>
                
                <li><strong>Belleville-Ménilmontant (20e)</strong> : Authentique, multiculturel, prix attractifs. Marché 
                en croissance +25% en 2024. <strong>Tarif moyen : 110€/nuit</strong>.</li>
                
                <li><strong>Butte-aux-Cailles (13e)</strong> : Village dans Paris, charme village. Clientèle recherchant 
                authenticité. <strong>Tarif moyen : 115€/nuit</strong>.</li>
              </ul>

              <h2>Pourquoi 239€/mois est imbattable à Paris ?</h2>

              <p>
                À Paris, les conciergeries traditionnelles pratiquent des tarifs prohibitifs :
              </p>

              <ul>
                <li><strong>Luckey Homes</strong> : 20% de commission (soit 500€/mois pour 2500€ de revenus)</li>
                <li><strong>GuestReady</strong> : 18-22% de commission (450-550€/mois)</li>
                <li><strong>Welkeys</strong> : 15-20% + frais setup (375-500€/mois)</li>
                <li><strong>Conciergeries locales indépendantes</strong> : 20-25% (500-625€/mois)</li>
              </ul>

              <p>
                <strong>Notre tarif fixe 239€/mois</strong> représente une économie de <strong>260 à 385€ par mois</strong> 
                (soit 3 120 à 4 620€ par an). Pour un service identique, voire supérieur (tarification dynamique IA incluse, 
                que beaucoup de concurrents facturent en option).
              </p>

              <h2>Ce qui est inclus dans notre forfait Paris 239€/mois</h2>

              <ul>
                <li>✅ <strong>Création/optimisation annonce</strong> : Rédaction SEO spécifique Paris + quartier, photos 
                pro si besoin (supplément)</li>
                <li>✅ <strong>Tarification dynamique IA</strong> : Ajustement quotidien selon événements parisiens, concurrence 
                locale, saisonnalité</li>
                <li>✅ <strong>Gestion voyageurs 7j/7</strong> : Réponses en moins d'1h en moyenne, disponibilité permanente</li>
                <li>✅ <strong>Check-in/check-out digital</strong> : Installation serrure connectée ou boîte à clés (matériel 
                à votre charge : 150-300€ one-time)</li>
                <li>✅ <strong>Multi-diffusion</strong> : Airbnb + Booking.com + Abritel + 10 autres plateformes, synchronisation 
                temps réel</li>
                <li>✅ <strong>Reporting mensuel</strong> : Dashboard temps réel + rapport détaillé envoyé chaque mois</li>
                <li>✅ <strong>Coordination ménage</strong> : Organisation avec votre prestataire ménage (coût ménage à votre charge)</li>
              </ul>

              <h2>Témoignages de propriétaires parisiens</h2>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "J'ai un T2 dans le Marais. Avant Les Clés du Cabanon, j'étais à 70% d'occupation avec beaucoup de stress. 
                  Maintenant je suis à 90% stable, les prix s'ajustent automatiquement et je gagne 700€ de plus par mois. 
                  Le service à 239€ est rentabilisé en 2 semaines !"
                </p>
                <p className="font-semibold">— Antoine M., propriétaire T2 - Le Marais (3e)</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 my-8">
                <p className="italic mb-4">
                  "Je vis à Londres et je possède un studio près de Montmartre. Impossible de gérer à distance avant. Maintenant 
                  tout est automatisé, je reçois mon virement mensuel et c'est tout. Mon taux d'occupation est passé de 65% à 85%. 
                  J'économise 300€/mois par rapport à mon ancienne conciergerie à 22% de commission."
                </p>
                <p className="font-semibold">— Sarah L., propriétaire studio - Montmartre (18e)</p>
              </div>

              <h2>Comment démarrer avec votre bien parisien ?</h2>

              <ol>
                <li><strong>Audit gratuit</strong> (30 min visio) : Analyse de votre bien, arrondissement, potentiel de revenus</li>
                <li><strong>Estimation revenus</strong> : Simulation basée sur données réelles de votre quartier</li>
                <li><strong>Installation accès digital</strong> : Serrure connectée ou boîte à clés (si pas déjà équipé)</li>
                <li><strong>Création annonce optimisée</strong> : Rédaction SEO + photos + mise en ligne multi-plateformes</li>
                <li><strong>Lancement</strong> : Votre bien reçoit ses premières réservations sous 7-10 jours</li>
              </ol>

              <h2>FAQ Paris</h2>

              <h3>Gérez-vous aussi la proche banlieue (92, 93, 94) ?</h3>
              <p>
                Oui, nous gérons les biens en proche banlieue parisienne : Hauts-de-Seine (92), Seine-Saint-Denis (93), 
                Val-de-Marne (94). Tarif identique 239€/mois. Zones particulièrement intéressantes : Montreuil, Saint-Denis 
                (Stade de France), Levallois-Perret, Boulogne-Billancourt, Vincennes.
              </p>

              <h3>Le ménage est-il inclus dans le forfait ?</h3>
              <p>
                Non, le ménage professionnel reste à votre charge (comme toutes les conciergeries). Coût moyen Paris : 
                45-65€ par ménage selon surface. Nous coordonnons avec votre prestataire ménage pour automatiser les interventions 
                après chaque départ.
              </p>

              <h3>Puis-je bloquer mon calendrier pour usage personnel ?</h3>
              <p>
                Absolument ! Vous gardez le contrôle total de votre calendrier via votre dashboard. Bloquez les dates que vous 
                souhaitez pour usage personnel, famille, amis. Aucune limite.
              </p>

              <h2>Conclusion</h2>

              <p>
                Paris offre le marché Airbnb le plus rentable de France, mais aussi le plus compétitif. Pour réussir, 
                vous devez optimiser parfaitement : tarification dynamique professionnelle, annonce SEO impeccable, 
                réactivité 24/7, multi-diffusion plateformes.
              </p>

              <p>
                Notre <strong>conciergerie Airbnb Paris à 239€/mois</strong> vous apporte cette optimisation professionnelle 
                tout en économisant 3000-4500€ par an par rapport aux conciergeries à commission. Résultat : plus de revenus, 
                moins de stress, zéro prise de tête.
              </p>
            </div>
          </div>
        </section>

        {/* Arrondissements */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Arrondissements à fort potentiel</h2>
                <p className="text-xl text-gray-600">Nous gérons des locations dans tous les arrondissements parisiens</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {arrondissements.map((arr, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{arr.name}</h3>
                        <div className="text-sm font-semibold text-teal-600 mb-2">{arr.prix}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{arr.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Prêt à optimiser votre Airbnb à Paris ?</h2>
            <p className="text-xl mb-8 text-white/90">Rejoignez les 120+ propriétaires parisiens qui nous font confiance</p>
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="/#contact">Commencer maintenant <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}