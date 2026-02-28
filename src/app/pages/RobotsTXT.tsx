export function RobotsTXT() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.clesducabanon.fr/sitemap.xml

# Optimisation pour Google
User-agent: Googlebot
Allow: /

# Optimisation pour Bing
User-agent: Bingbot
Allow: /

# Bloquer les scrapers agressifs
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10`;

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      fontSize: '14px',
      whiteSpace: 'pre',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      {robotsTxt}
    </div>
  );
}
