import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function Blog() {
  const articles = [
    {
      title: "Comment fixer le prix de sa location Airbnb en 2026",
      excerpt: "Découvrez notre méthode en 7 étapes pour optimiser vos tarifs et maximiser vos revenus. Tarification dynamique, saisonnalité, événements locaux...",
      date: "15 février 2026",
      category: "Tarification",
      readTime: "8 min",
      slug: "prix-location-airbnb-2026",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      title: "Tarification dynamique Airbnb : Guide complet 2026",
      excerpt: "La tarification dynamique augmente vos revenus de 35% en moyenne. Comprendre le fonctionnement, les outils et les stratégies gagnantes.",
      date: "10 février 2026",
      category: "Optimisation",
      readTime: "12 min",
      slug: "tarification-dynamique-guide-complet",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      title: "Conciergerie Airbnb : Digitale vs Traditionnelle",
      excerpt: "Comparatif détaillé entre conciergerie digitale et traditionnelle. Coûts, services, rentabilité : quel modèle choisir pour votre bien ?",
      date: "5 février 2026",
      category: "Comparatif",
      readTime: "10 min",
      slug: "conciergerie-digitale-vs-traditionnelle",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Blog Gestion Airbnb | Conseils & Astuces Location Courte Durée"
        description="Guides, conseils et astuces pour optimiser votre location Airbnb. Tarification dynamique, optimisation SEO, gestion voyageurs, rentabilité."
        keywords="blog airbnb, conseils gestion airbnb, astuces location courte durée, optimisation airbnb, guide propriétaire airbnb"
        canonical="https://www.lesclesducabanon.fr/blog"
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
                Blog Gestion Airbnb
              </h1>
              <p className="text-xl text-teal-50">
                Guides, conseils et stratégies pour maximiser vos revenus en location courte durée
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">{article.readTime} de lecture</span>
                          <a href={article.slug === 'sitemap-seo' ? '/blog/sitemap-seo' : '#'}>
                            <Button
                              variant="ghost"
                              className="text-teal-600 hover:text-teal-700 p-0 h-auto"
                            >
                              Lire l'article
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Coming soon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <Card className="p-12 bg-gradient-to-br from-teal-50 to-cyan-50">
                  <TrendingUp className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Plus d'articles à venir !
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Nous publions 2 nouveaux articles par mois sur la gestion Airbnb, 
                    l'optimisation des revenus et les meilleures pratiques de location courte durée.
                  </p>
                  <Button asChild className="bg-teal-600 text-white">
                    <a href="/#contact">
                      Recevoir les nouveaux articles par email
                    </a>
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}