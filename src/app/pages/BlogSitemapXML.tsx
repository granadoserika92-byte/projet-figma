import { useEffect } from 'react';

export function BlogSitemapXML() {
  useEffect(() => {
    // Essayer de définir le content-type (peut ne pas fonctionner dans tous les environnements)
    document.contentType = 'application/xml';
  }, []);

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.clesducabanon.fr/</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.clesducabanon.fr/gestion-airbnb</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.95</priority></url>
  <url><loc>https://www.clesducabanon.fr/gestion-locative-courte-duree</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.95</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-france</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.95</priority></url>
  <url><loc>https://www.clesducabanon.fr/methode</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/calculateur-revenus</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/inscription</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-guadeloupe</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-martinique</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-reunion</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-guyane</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-mayotte</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-paris</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-lyon</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-marseille</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-bordeaux</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-toulouse</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-nice</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-nantes</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/blog</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/creation-annonce</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/optimisation-seo</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/tarification-dynamique</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/multi-plateformes</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/gestion-voyageurs</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/automatisation</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/optimisation-occupation</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/espace-proprietaire</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/mentions-legales</loc><lastmod>2026-02-21</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.clesducabanon.fr/cgv</loc><lastmod>2026-02-21</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.clesducabanon.fr/confidentialite</loc><lastmod>2026-02-21</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>`;

  return (
    <pre style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap',
      margin: 0,
      padding: 0,
      background: 'white'
    }}>
      {sitemapXML}
    </pre>
  );
}
