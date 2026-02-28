#!/bin/bash

# 🚀 SCRIPT DE DÉPLOIEMENT - LES CLÉS DU CABANON
# Ce script prépare et déploie le site sur Netlify

echo "🏠 Les Clés du Cabanon - Déploiement Netlify"
echo "============================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Étape 1 : Vérification
echo "${YELLOW}📋 Étape 1/5 : Vérification de l'environnement...${NC}"
if ! command -v node &> /dev/null; then
    echo "${RED}❌ Node.js n'est pas installé${NC}"
    exit 1
fi
echo "${GREEN}✅ Node.js installé : $(node --version)${NC}"

if ! command -v npm &> /dev/null; then
    echo "${RED}❌ npm n'est pas installé${NC}"
    exit 1
fi
echo "${GREEN}✅ npm installé : $(npm --version)${NC}"
echo ""

# Étape 2 : Installation des dépendances
echo "${YELLOW}📦 Étape 2/5 : Installation des dépendances...${NC}"
npm install
if [ $? -eq 0 ]; then
    echo "${GREEN}✅ Dépendances installées${NC}"
else
    echo "${RED}❌ Erreur lors de l'installation${NC}"
    exit 1
fi
echo ""

# Étape 3 : Build
echo "${YELLOW}🔨 Étape 3/5 : Build du projet...${NC}"
npm run build
if [ $? -eq 0 ]; then
    echo "${GREEN}✅ Build réussi${NC}"
else
    echo "${RED}❌ Erreur lors du build${NC}"
    exit 1
fi
echo ""

# Étape 4 : Vérification du dossier dist
echo "${YELLOW}🔍 Étape 4/5 : Vérification du dossier dist...${NC}"
if [ -d "dist" ]; then
    echo "${GREEN}✅ Dossier dist existe${NC}"
    FILE_COUNT=$(find dist -type f | wc -l)
    echo "${GREEN}   📁 $FILE_COUNT fichiers générés${NC}"
    
    # Vérification des fichiers clés
    if [ -f "dist/index.html" ]; then
        echo "${GREEN}   ✅ index.html présent${NC}"
    else
        echo "${RED}   ❌ index.html manquant${NC}"
        exit 1
    fi
    
    if [ -d "dist/assets" ]; then
        ASSET_COUNT=$(find dist/assets -type f | wc -l)
        echo "${GREEN}   ✅ dossier assets présent ($ASSET_COUNT fichiers)${NC}"
    else
        echo "${YELLOW}   ⚠️  dossier assets manquant (c'est peut-être normal)${NC}"
    fi
else
    echo "${RED}❌ Dossier dist n'existe pas${NC}"
    exit 1
fi
echo ""

# Étape 5 : Instructions de déploiement
echo "${YELLOW}🚀 Étape 5/5 : Déploiement sur Netlify${NC}"
echo ""
echo "Vous avez 3 options :"
echo ""
echo "${GREEN}Option 1 : Netlify CLI (Recommandé)${NC}"
echo "   1. Installez Netlify CLI : npm install -g netlify-cli"
echo "   2. Connectez-vous : netlify login"
echo "   3. Déployez : netlify deploy --prod --dir=dist"
echo ""
echo "${GREEN}Option 2 : Drag & Drop${NC}"
echo "   1. Allez sur app.netlify.com"
echo "   2. Ouvrez votre site"
echo "   3. Onglet 'Deploys'"
echo "   4. Cliquez 'Trigger deploy' → 'Clear cache and deploy site'"
echo "   5. Drag & drop le dossier ${YELLOW}dist/${NC} (PAS le dossier racine !)"
echo ""
echo "${GREEN}Option 3 : Git Push (Si configuré)${NC}"
echo "   1. git add ."
echo "   2. git commit -m 'Update site'"
echo "   3. git push origin main"
echo ""
echo "${YELLOW}⚠️  N'OUBLIEZ PAS APRÈS LE DÉPLOIEMENT :${NC}"
echo "   1. Clear le cache Netlify (Dashboard → Trigger deploy → Clear cache)"
echo "   2. Clear le cache navigateur (Ctrl+Shift+R ou Cmd+Shift+R)"
echo "   3. Tester en navigation privée"
echo ""
echo "${GREEN}✅ Build terminé avec succès !${NC}"
echo "Le dossier 'dist' est prêt pour le déploiement."
echo ""
