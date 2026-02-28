#!/bin/bash

# Script de correction automatique des fichiers Netlify
# Usage: bash fix-netlify-files.sh

echo "🔧 Correction des fichiers Netlify pour Les Clés du Cabanon"
echo "============================================================"
echo ""

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Vérifier qu'on est dans le bon dossier
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Erreur : package.json non trouvé${NC}"
    echo "   Assurez-vous d'être à la racine du projet"
    exit 1
fi

echo "✅ Dossier du projet détecté"
echo ""

# Étape 1 : Supprimer les dossiers/fichiers problématiques
echo "📁 Étape 1/5 : Nettoyage des fichiers corrompus..."

if [ -e "public/_headers" ]; then
    rm -rf public/_headers
    echo -e "${GREEN}   ✓${NC} Supprimé : public/_headers"
else
    echo -e "${YELLOW}   ⚠${NC} Fichier déjà absent : public/_headers"
fi

if [ -e "public/_redirects" ]; then
    rm -rf public/_redirects
    echo -e "${GREEN}   ✓${NC} Supprimé : public/_redirects"
else
    echo -e "${YELLOW}   ⚠${NC} Fichier déjà absent : public/_redirects"
fi

echo ""

# Étape 2 : Créer le fichier _redirects
echo "📝 Étape 2/5 : Création de _redirects..."

cat > public/_redirects << 'EOF'
/*    /index.html   200
EOF

if [ -f "public/_redirects" ]; then
    echo -e "${GREEN}   ✓${NC} Créé : public/_redirects"
    echo "   Contenu : $(cat public/_redirects)"
else
    echo -e "${RED}   ✗${NC} Échec création : public/_redirects"
    exit 1
fi

echo ""

# Étape 3 : Créer le fichier _headers
echo "📝 Étape 3/5 : Création de _headers..."

cat > public/_headers << 'EOF'
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

if [ -f "public/_headers" ]; then
    echo -e "${GREEN}   ✓${NC} Créé : public/_headers"
    echo "   Lignes : $(wc -l < public/_headers)"
else
    echo -e "${RED}   ✗${NC} Échec création : public/_headers"
    exit 1
fi

echo ""

# Étape 4 : Vérification
echo "🔍 Étape 4/5 : Vérification des fichiers..."

# Vérifier _redirects
if [ -f "public/_redirects" ] && [ ! -d "public/_redirects" ]; then
    content=$(cat public/_redirects)
    if [[ "$content" == "/*    /index.html   200" ]]; then
        echo -e "${GREEN}   ✓${NC} _redirects : Fichier valide"
    else
        echo -e "${RED}   ✗${NC} _redirects : Contenu incorrect"
        echo "   Contenu trouvé : $content"
    fi
else
    echo -e "${RED}   ✗${NC} _redirects : N'est pas un fichier valide"
fi

# Vérifier _headers
if [ -f "public/_headers" ] && [ ! -d "public/_headers" ]; then
    lines=$(wc -l < public/_headers)
    if [ "$lines" -gt 5 ]; then
        echo -e "${GREEN}   ✓${NC} _headers : Fichier valide ($lines lignes)"
    else
        echo -e "${RED}   ✗${NC} _headers : Contenu trop court"
    fi
else
    echo -e "${RED}   ✗${NC} _headers : N'est pas un fichier valide"
fi

echo ""

# Étape 5 : Build et vérification finale
echo "🏗️  Étape 5/5 : Build et vérification finale..."

# Vérifier si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "   Installation des dépendances..."
    npm install
fi

# Build
echo "   Build en cours..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}   ✓${NC} Build réussi"
else
    echo -e "${RED}   ✗${NC} Build échoué"
    exit 1
fi

# Vérifier que les fichiers sont copiés dans dist/
echo ""
echo "   Vérification de dist/..."

if [ -f "dist/_redirects" ]; then
    dist_content=$(cat dist/_redirects)
    if [[ "$dist_content" == "/*    /index.html   200" ]]; then
        echo -e "${GREEN}   ✓${NC} dist/_redirects : Copié correctement"
    else
        echo -e "${RED}   ✗${NC} dist/_redirects : Contenu incorrect"
        echo "   Contenu : $dist_content"
    fi
else
    echo -e "${RED}   ✗${NC} dist/_redirects : Fichier manquant"
fi

if [ -f "dist/_headers" ]; then
    echo -e "${GREEN}   ✓${NC} dist/_headers : Copié correctement"
else
    echo -e "${RED}   ✗${NC} dist/_headers : Fichier manquant"
fi

echo ""
echo "============================================================"
echo -e "${GREEN}✅ CORRECTION TERMINÉE !${NC}"
echo ""
echo "📦 Prochaines étapes :"
echo "   1. Vérifiez le contenu de dist/ : ls -la dist/"
echo "   2. Testez localement : npm run preview"
echo "   3. Déployez sur Netlify : netlify deploy --prod --dir=dist"
echo ""
echo "🌐 Ou glissez-déposez le dossier dist/ sur :"
echo "   https://app.netlify.com/drop"
echo ""
