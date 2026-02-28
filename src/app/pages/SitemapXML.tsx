import { useEffect } from 'react';

export function SitemapXML() {
  useEffect(() => {
    // Changer le Content-Type de la page
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Type';
    meta.content = 'application/xml; charset=utf-8';
    document.head.appendChild(meta);
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Page d'accueil -->
  <url>
    <loc>https://www.clesducabanon.fr/</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Pages stratégiques -->
  <url>
    <loc>https://www.clesducabanon.fr/gestion-airbnb</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/gestion-locative-courte-duree</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-france</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/methode</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/calculateur-revenus</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/inscription</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Pages DOM-TOM -->
  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-guadeloupe</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-martinique</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-reunion</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-guyane</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-mayotte</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Pages villes principales -->
  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-paris</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-lyon</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-marseille</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-bordeaux</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-toulouse</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-nice</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/conciergerie-airbnb-nantes</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Blog -->
  <url>
    <loc>https://www.clesducabanon.fr/blog</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Pages de services -->
  <url>
    <loc>https://www.clesducabanon.fr/services/creation-annonce</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/services/optimisation-seo</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/services/tarification-dynamique</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/services/multi-plateformes</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/services/gestion-voyageurs</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/services/automatisation</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/services/optimisation-occupation</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/services/espace-proprietaire</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Pages légales -->
  <url>
    <loc>https://www.clesducabanon.fr/mentions-legales</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/cgv</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://www.clesducabanon.fr/confidentialite</loc>
    <lastmod>2026-02-21</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>`;

  return (
    <pre style={{ 
      margin: 0, 
      padding: 0, 
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word'
    }}>
      {xml}
    </pre>
  );
}
