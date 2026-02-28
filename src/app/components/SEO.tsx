import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

export function SEO({
  title,
  description,
  keywords = "conciergerie airbnb, gestion location courte durée, conciergerie digitale, gestion airbnb, conciergerie location saisonnière, gestion booking, airbnb france, conciergerie DOM TOM, gestion airbnb martinique, conciergerie guadeloupe, gestion airbnb réunion, conciergerie guyane, conciergerie mayotte, tarification dynamique airbnb, optimisation airbnb, automatisation location courte durée, multi-plateformes airbnb, 180 euros par mois, conciergerie pas cher, gestion digitale airbnb, revenus locatifs optimisés",
  canonical = "https://www.clesducabanon.fr",
  ogImage = "https://www.clesducabanon.fr/og-image.jpg",
  ogType = "website",
  schema,
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: 'Les Clés du Cabanon' },
      { name: 'geo.region', content: 'FR' },
      { name: 'geo.placename', content: 'France' },
      { name: 'language', content: 'FR' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Les Clés du Cabanon' },
      { property: 'og:locale', content: 'fr_FR' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      
      // Mobile
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#14b8a6' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value!);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Structured data (Schema.org)
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, schema]);

  return null;
}

// Schema.org data structures
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Les Clés du Cabanon",
  "url": "https://www.clesducabanon.fr",
  "logo": "https://www.clesducabanon.fr/logo.png",
  "description": "Conciergerie Airbnb digitale à 180€/mois. Gestion complète de votre location courte durée partout en France et DOM-TOM.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33625401480",
    "email": "contact@lesclesducabanon.fr",
    "contactType": "customer service",
    "availableLanguage": ["French"],
    "areaServed": ["FR", "GP", "MQ", "GF", "RE", "YT"]
  },
  "sameAs": [
    "https://www.instagram.com/cles_du_cabanon_conciergerie/",
    "https://www.facebook.com/share/1EYGiY9yk1/"
  ],
  "priceRange": "180€"
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Conciergerie Airbnb et Gestion Location Courte Durée",
  "provider": {
    "@type": "Organization",
    "name": "Les Clés du Cabanon",
    "telephone": "+33625401480",
    "email": "contact@lesclesducabanon.fr"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "France"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Guadeloupe"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Martinique"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Guyane"
    },
    {
      "@type": "AdministrativeArea",
      "name": "La Réunion"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Mayotte"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "180",
    "priceCurrency": "EUR",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "description": "Forfait gestion digitale Airbnb tout compris à 180€/mois sans engagement"
  },
  "description": "Conciergerie Airbnb 100% digitale : création annonce, optimisation SEO, tarification dynamique, multi-plateformes, gestion voyageurs 7j/7, automatisation complète",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de Conciergerie Airbnb",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Création et refonte d'annonce Airbnb"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Optimisation SEO Airbnb et Booking"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tarification dynamique quotidienne"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Synchronisation multi-plateformes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gestion voyageurs 7j/7"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Automatisation complète"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Optimisation taux d'occupation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Espace propriétaire dédié"
        }
      }
    ]
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Les Clés du Cabanon",
  "image": "https://www.clesducabanon.fr/logo.png",
  "url": "https://www.clesducabanon.fr",
  "telephone": "+33625401480",
  "email": "contact@lesclesducabanon.fr",
  "priceRange": "180€",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.instagram.com/cles_du_cabanon_conciergerie/",
    "https://www.facebook.com/share/1EYGiY9yk1/"
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte la gestion Airbnb avec Les Clés du Cabanon ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notre forfait de gestion digitale Airbnb coûte 180€ par mois, sans engagement. Ce tarif fixe inclut tous nos services : création d'annonce, optimisation SEO, tarification dynamique, synchronisation multi-plateformes, gestion voyageurs 7j/7, automatisation complète et espace propriétaire dédié."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles zones géographiques couvrez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous proposons nos services de conciergerie Airbnb dans toute la France métropolitaine et les DOM-TOM : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte. Notre gestion 100% digitale nous permet d'intervenir partout sans limite géographique."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi choisir une conciergerie digitale plutôt qu'une conciergerie traditionnelle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Une conciergerie digitale coûte beaucoup moins cher (180€/mois vs 400€ à 2000€/mois), offre un prix fixe toute l'année, utilise une technologie de pointe pour optimiser vos revenus, et permet l'arrivée autonome qui augmente vos réservations de 23% en moyenne."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne l'arrivée autonome avec votre service ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'arrivée autonome permet aux voyageurs de s'installer à n'importe quelle heure sans rendez-vous. Cela augmente significativement vos réservations. En cas de dégradation, vous disposez de 14 jours pour réclamer un litige et 30 jours pour envoyer les documents, avec une protection jusqu'à 1 000 000€."
      }
    },
    {
      "@type": "Question",
      "name": "Sur combien de plateformes puis-je diffuser mon annonce ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Votre annonce est synchronisée sur plus de 50 plateformes de location courte durée incluant Airbnb, Booking.com, Abritel, Vrbo, Expedia et bien d'autres. Tout est géré depuis une interface unique."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si je veux arrêter le service ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aucun problème ! Notre service est sans engagement. Vous pouvez arrêter à tout moment avec un simple préavis d'un mois. Nous vous restituons tous les accès à vos plateformes et vous conservez bien sûr toutes les optimisations réalisées."
      }
    },
    {
      "@type": "Question",
      "name": "Comment gérez-vous les problèmes urgents avec les voyageurs ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notre équipe est disponible 7j/7 pour gérer toutes les urgences : problème de check-in, équipement défaillant, réclamation voyageur. Nous répondons dans les 30 minutes en moyenne et trouvons une solution rapidement."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle est la différence avec des concurrents comme Luckey Homes ou GuestReady ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les conciergeries traditionnelles comme Luckey Homes facturent 15-25% de commission sur chaque réservation, soit 400€ à 2000€/mois pour un bien moyen. Notre tarif fixe de 180€/mois vous fait économiser 10 000€/an."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne la tarification dynamique concrètement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Notre algorithme de tarification analyse en temps réel plus de 50 critères : demande locale, événements à venir, tarifs concurrents, saisonnalité, jour de la semaine, durée de séjour. Les prix sont ajustés quotidiennement pour maximiser vos revenus. En moyenne, nos clients gagnent 35% de plus qu'avec un tarif fixe."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je bloquer des dates pour utiliser mon logement personnellement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bien sûr ! Votre espace propriétaire vous permet de bloquer n'importe quelle période en un clic. Les dates sont automatiquement synchronisées sur toutes les plateformes. Vous restez 100% maître de votre calendrier."
      }
    }
  ]
};