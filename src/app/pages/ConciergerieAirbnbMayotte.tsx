import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export function ConciergerieAirbnbMayotte() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb Mayotte à 239€/mois | Gestion Location Saisonnière"
        description="Conciergerie Airbnb Mayotte 239€/mois. Gestion Mamoudzou, Petite-Terre. Tarification dynamique, multi-plateformes. Sans commission."
        keywords="conciergerie airbnb mayotte, gestion airbnb mayotte, conciergerie mamoudzou, gestion location mayotte, airbnb petite terre, location saisonnière mayotte, conciergerie DOM TOM"
        canonical="https://www.lesclesducabanon.fr/conciergerie-airbnb-mayotte"
      />
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Mayotte - DOM-TOM</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Conciergerie Airbnb Mayotte à 239€/mois</h1>
            <p className="text-xl mb-8">Gestion 100% digitale de votre location à Mayotte : Mamoudzou, Petite-Terre, Bouéni. Lagon exceptionnel, marché touristique en développement.</p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600">
                <a href="/inscription">Commencer <ArrowRight className="ml-2 w-5 h-5" /></a>
              </Button>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Gestion complète à Mayotte</h2>
            <p className="text-lg text-gray-600 mb-8">Notre conciergerie digitale optimise votre Airbnb à Mayotte avec tarification dynamique et gestion complète. Profitez du développement touristique du lagon le plus préservé au monde.</p>
            <Button asChild size="lg" className="bg-teal-600 text-white">
              <a href="/inscription">Démarrer maintenant</a>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
