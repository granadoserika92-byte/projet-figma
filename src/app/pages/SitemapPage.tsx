import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function SitemapPage() {
  const [copied, setCopied] = useState(false);

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sitemapContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            📄 Sitemap XML - Les Clés du Cabanon
          </h1>
          
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
            <h2 className="text-lg font-semibold text-teal-900 mb-2">
              🎯 Instructions pour Google Search Console
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-teal-800">
              <li>Cliquez sur le bouton "Copier" ci-dessous</li>
              <li>Créez un fichier texte nommé <code className="bg-teal-100 px-2 py-1 rounded">sitemap.xml</code></li>
              <li>Collez le contenu copié dans ce fichier</li>
              <li>Uploadez ce fichier sur votre serveur IONOS dans le dossier racine</li>
              <li>Soumettez l'URL <code className="bg-teal-100 px-2 py-1 rounded">https://www.clesducabanon.fr/sitemap.xml</code> dans Google Search Console</li>
            </ol>
          </div>

          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Contenu du Sitemap (25 pages)
            </h3>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copié !
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copier le Sitemap
                </>
              )}
            </button>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap break-all">
              {sitemapContent}
            </pre>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h3 className="font-semibold text-yellow-900 mb-2">
              ⚠️ Pourquoi cette méthode manuelle ?
            </h3>
            <p className="text-yellow-800 text-sm">
              Figma Make ne déploie pas automatiquement les fichiers du dossier <code>/public/</code>. 
              Cette solution manuelle vous permet de soumettre votre sitemap à Google immédiatement.
            </p>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">
              💡 Comment uploader sur IONOS
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-blue-800 text-sm">
              <li>Connectez-vous à votre espace IONOS</li>
              <li>Allez dans "Hébergement Web" → "Gestionnaire de fichiers"</li>
              <li>Naviguez vers le dossier racine de votre site</li>
              <li>Cliquez sur "Upload" et uploadez le fichier <code>sitemap.xml</code></li>
              <li>Vérifiez que l'URL <code>https://www.clesducabanon.fr/sitemap.xml</code> fonctionne</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
