import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Target, TrendingUp, Users, Calendar, Sparkles, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function Methode() {
  const steps = [
    {
      number: "01",
      title: "Audit complet de votre bien",
      description: "Nous analysons votre bien, votre marché local, la concurrence et identifions les opportunités d'optimisation. Durée : 48h.",
      icon: Target,
      details: [
        "Analyse des 20 concurrents directs dans un rayon de 2km",
        "Évaluation du prix optimal selon 50+ critères",
        "Identification des événements locaux impactant la demande",
        "Recommandations équipements pour augmenter le prix"
      ]
    },
    {
      number: "02",
      title: "Création annonce ultra-optimisée",
      description: "Rédaction professionnelle du titre et de la description avec intégration des mots-clés stratégiques pour un SEO maximum.",
      icon: Sparkles,
      details: [
        "Titre accrocheur avec mots-clés locaux (ex: 'Villa piscine Sainte-Anne vue mer')",
        "Description 800+ mots optimisée pour Airbnb et Booking",
        "Traduction professionnelle EN/FR (+ ES/DE en option)",
        "Mise en avant des 15 équipements les plus recherchés"
      ]
    },
    {
      number: "03",
      title: "Synchronisation multi-plateformes",
      description: "Connexion simultanée à Airbnb, Booking, Abritel, Vrbo, Expedia et 45+ autres plateformes pour maximiser votre visibilité.",
      icon: TrendingUp,
      details: [
        "Synchronisation calendrier temps réel (0 double-réservation)",
        "Tarifs ajustés par plateforme selon commission",
        "Photos optimisées pour chaque plateforme",
        "Gestion centralisée depuis 1 seul outil"
      ]
    },
    {
      number: "04",
      title: "Tarification dynamique intelligente",
      description: "Notre algorithme ajuste automatiquement vos prix toutes les 24h selon la demande, les événements et la concurrence.",
      icon: BarChart3,
      details: [
        "Analyse de 50+ variables : saisonnalité, météo, événements, concurrence",
        "Prix minimum/maximum définis ensemble pour protéger vos marges",
        "Stratégie 'early bird' : réduction si réservé >60 jours à l'avance",
        "Optimisation durée séjour : prix dégressifs 7+ nuits"
      ]
    },
    {
      number: "05",
      title: "Gestion voyageurs 7j/7",
      description: "Notre équipe répond à tous les messages dans les 30 minutes en moyenne, 7 jours sur 7, y compris les urgences.",
      icon: Users,
      details: [
        "Réponse aux demandes de réservation en <1h",
        "Messages automatiques : confirmation, check-in, check-out, avis",
        "Gestion réclamations et litiges",
        "Coordination avec vos prestataires (ménage, maintenance)"
      ]
    },
    {
      number: "06",
      title: "Optimisation continue",
      description: "Nous analysons vos performances chaque mois et ajustons notre stratégie pour améliorer continuellement vos résultats.",
      icon: Calendar,
      details: [
        "Rapport mensuel détaillé : revenus, taux d'occupation, prix moyen",
        "A/B testing titre et photos (tests de 2 semaines)",
        "Benchmark vs 10 concurrents directs",
        "Ajustement stratégie tarifaire selon résultats"
      ]
    }
  ];

  const results = [
    { metric: "+35%", label: "Revenus moyens vs gestion manuelle" },
    { metric: "85%", label: "Taux d'occupation moyen clients" },
    { metric: "30min", label: "Temps de réponse moyen" },
    { metric: "4.8/5", label: "Note moyenne nos clients propriétaires" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Notre Méthode de Gestion Airbnb | Les Clés du Cabanon"
        description="Découvrez notre méthode éprouvée de gestion Airbnb en 6 étapes : audit, création annonce, multi-plateformes, tarification dynamique, gestion voyageurs, optimisation continue. +35% de revenus en moyenne."
        keywords="méthode gestion airbnb, processus conciergerie airbnb, optimisation airbnb, stratégie tarification dynamique, gestion location courte durée, expertise airbnb"
        canonical="https://www.lesclesducabanon.fr/methode"
      />
      <Header />
      
      <div className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Notre méthode en 6 étapes pour maximiser vos revenus Airbnb
              </h1>
              <p className="text-xl mb-8 text-teal-50">
                Un processus éprouvé qui a permis à 200+ propriétaires d'augmenter leurs revenus de <strong>35% en moyenne</strong>
              </p>
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-6 text-lg">
                <a href="/inscription">
                  Appliquer cette méthode à mon bien
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">{result.metric}</div>
                    <div className="text-sm text-gray-600">{result.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Les 6 étapes de notre méthode</h2>
                <p className="text-xl text-gray-600">Un processus rodé et optimisé depuis 3 ans</p>
              </div>

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-8 lg:p-10 hover:shadow-xl transition-shadow">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <span className="text-5xl font-bold text-teal-200">{step.number}</span>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                              <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-2 gap-3 ml-16">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}