#!/bin/bash
# Script de build personnalisé pour Les Clés du Cabanon
# Ce script s'assure que les fichiers Netlify sont créés correctement

echo "🏗️  Build de Les Clés du Cabanon"
echo "=================================="
echo ""

# Étape 1 : Nettoyer dist/
echo "🧹 Nettoyage du dossier dist/..."
rm -rf dist/

# Étape 2 : Build Vite
echo "📦 Build du projet avec Vite..."
npm run build

# Étape 3 : Créer les fichiers Netlify manuellement
echo ""
echo "📝 Création des fichiers Netlify..."

# Créer _redirects
cat > dist/_redirects << 'EOF'
/*    /index.html   200
EOF

if [ -f "dist/_redirects" ]; then
    echo "✅ Créé : dist/_redirects"
    echo "   Contenu : $(cat dist/_redirects)"
else
    echo "❌ Échec : dist/_redirects"
    exit 1
fi

# Créer _headers
cat > dist/_headers << 'EOF'
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/sitemap.xml
  Content-Type: application/xml
  Cache-Control: public, max-age=3600

/robots.txt
  Content-Type: text/plain
  Cache-Control: public, max-age=3600
EOF

if [ -f "dist/_headers" ]; then
    echo "✅ Créé : dist/_headers"
    lines=$(wc -l < dist/_headers)
    echo "   Lignes : $lines"
else
    echo "❌ Échec : dist/_headers"
    exit 1
fi

# Étape 4 : Supprimer les mauvais dossiers _headers/ et _redirects/ si présents
echo ""
echo "🗑️  Nettoyage des dossiers corrompus..."

if [ -d "dist/_headers" ] && [ ! -f "dist/_headers" ]; then
    rm -rf dist/_headers
    # Recréer le fichier
    cat > dist/_headers << 'EOF'
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/sitemap.xml
  Content-Type: application/xml
  Cache-Control: public, max-age=3600

/robots.txt
  Content-Type: text/plain
  Cache-Control: public, max-age=3600
EOF
    echo "✅ Corrigé : dist/_headers (était un dossier, maintenant un fichier)"
fi

if [ -d "dist/_redirects" ] && [ ! -f "dist/_redirects" ]; then
    rm -rf dist/_redirects
    # Recréer le fichier
    echo "/*    /index.html   200" > dist/_redirects
    echo "✅ Corrigé : dist/_redirects (était un dossier, maintenant un fichier)"
fi

# Étape 5 : Vérification finale
echo ""
echo "🔍 Vérification finale..."

# Vérifier _redirects
if [ -f "dist/_redirects" ] && [ ! -d "dist/_redirects" ]; then
    content=$(cat dist/_redirects)
    if [[ "$content" == "/*    /index.html   200" ]]; then
        echo "✅ dist/_redirects : FICHIER valide avec bon contenu"
    else
        echo "⚠️  dist/_redirects : FICHIER mais contenu incorrect"
        echo "   Contenu : $content"
    fi
else
    echo "❌ dist/_redirects : PROBLÈME (pas un fichier valide)"
fi

# Vérifier _headers
if [ -f "dist/_headers" ] && [ ! -d "dist/_headers" ]; then
    lines=$(wc -l < dist/_headers)
    echo "✅ dist/_headers : FICHIER valide avec $lines lignes"
else
    echo "❌ dist/_headers : PROBLÈME (pas un fichier valide)"
fi

# Vérifier les autres fichiers
echo ""
echo "📄 Autres fichiers :"
if [ -f "dist/index.html" ]; then
    echo "✅ index.html"
fi
if [ -f "dist/sitemap.xml" ]; then
    echo "✅ sitemap.xml"
fi
if [ -f "dist/robots.txt" ]; then
    echo "✅ robots.txt"
fi
if [ -d "dist/assets" ]; then
    echo "✅ assets/"
fi

echo ""
echo "=================================="
echo "✅ BUILD TERMINÉ !"
echo ""
echo "📦 Le dossier dist/ est prêt pour Netlify !"
echo ""
echo "🚀 Prochaines étapes :"
echo "   1. Vérifier : cat dist/_redirects"
echo "   2. Déployer : netlify deploy --prod --dir=dist"
echo "   3. Ou drag & drop dist/ sur https://app.netlify.com/drop"
echo ""
