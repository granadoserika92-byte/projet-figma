import { useEffect } from 'react';

export function SitemapRedirect() {
  useEffect(() => {
    // Rediriger immédiatement vers le sitemap hébergé sur GitHub Gist
    // REMPLACEZ CETTE URL PAR VOTRE URL RAW DU GIST
    const gistUrl = 'VOTRE_URL_GIST_RAW_ICI';
    
    if (gistUrl !== 'VOTRE_URL_GIST_RAW_ICI') {
      window.location.replace(gistUrl);
    }
  }, []);

  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif', 
      padding: '40px',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#0d9488' }}>Redirection vers le sitemap...</h1>
      <p style={{ marginTop: '20px', color: '#666' }}>
        Si vous n'êtes pas redirigé automatiquement, veuillez configurer l'URL du Gist dans le fichier SitemapRedirect.tsx
      </p>
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        background: '#f0fdfa', 
        borderRadius: '8px',
        textAlign: 'left'
      }}>
        <h2 style={{ fontSize: '16px', color: '#0d9488', marginBottom: '10px' }}>
          Instructions :
        </h2>
        <ol style={{ color: '#334155', lineHeight: '1.8' }}>
          <li>Allez sur votre GitHub Gist</li>
          <li>Cliquez sur le bouton <strong>"Raw"</strong></li>
          <li>Copiez l'URL complète</li>
          <li>Remplacez <code>VOTRE_URL_GIST_RAW_ICI</code> dans le fichier SitemapRedirect.tsx</li>
        </ol>
      </div>
    </div>
  );
}
