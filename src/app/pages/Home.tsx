import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { Comparison } from '../components/Comparison';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { SEO, organizationSchema, serviceSchema, localBusinessSchema, faqSchema } from '../components/SEO';

export function Home() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      serviceSchema,
      localBusinessSchema,
      faqSchema
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Conciergerie Airbnb 239€/mois | France & DOM-TOM"
        description="Gestion Airbnb digitale 239€/mois partout en France. Tarification dynamique, multi-plateformes, 7j/7. Économisez 8000€/an."
        keywords="conciergerie airbnb, conciergerie airbnb france, conciergerie airbnb guadeloupe, conciergerie airbnb martinique, conciergerie airbnb reunion, conciergerie airbnb guyane, conciergerie airbnb mayotte, gestion location courte durée, conciergerie digitale, gestion airbnb 239 euros, conciergerie pas cher, tarification dynamique airbnb, optimisation airbnb, gestion booking, multi-plateformes airbnb, automatisation airbnb, revenus locatifs, conciergerie location saisonnière DOM TOM, gestion airbnb pas cher, conciergerie france entière"
        canonical="https://www.clesducabanon.fr/"
        schema={combinedSchema}
      />
      <Header />
      <div className="pt-16"> {/* Padding to account for fixed header */}
        <Hero />
        <div id="services">
          <Services />
        </div>
        <HowItWorks />
        <Comparison />
        <div id="pricing">
          <Pricing />
        </div>
        <div id="temoignages">
          <Testimonials />
        </div>
        <FAQ />
        <div id="contact">
          <CTA />
        </div>
        <Footer />
      </div>
    </div>
  );
}