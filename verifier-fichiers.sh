#!/bin/bash
# Script de vérification pour Figma Make
# Ce script liste les fichiers problématiques

echo "🔍 VÉRIFICATION DES FICHIERS NETLIFY"
echo "======================================"
echo ""

echo "📁 Contenu du dossier public/ :"
ls -la public/

echo ""
echo "🔍 Type des fichiers _headers et _redirects :"

if [ -d "public/_headers" ]; then
    echo "❌ _headers est un DOSSIER (problème confirmé)"
    echo "   Contenu :"
    ls -la public/_headers/
else
    echo "✅ _headers est un fichier"
    echo "   Contenu :"
    cat public/_headers
fi

echo ""

if [ -d "public/_redirects" ]; then
    echo "❌ _redirects est un DOSSIER (problème confirmé)"
    echo "   Contenu :"
    ls -la public/_redirects/
else
    echo "✅ _redirects est un fichier"
    echo "   Contenu :"
    cat public/_redirects
fi

echo ""
echo "======================================"
echo ""
echo "🎯 RÉSULTAT :"
echo ""

if [ -d "public/_headers" ] || [ -d "public/_redirects" ]; then
    echo "❌ PROBLÈME DÉTECTÉ !"
    echo ""
    echo "Les fichiers _headers et/ou _redirects sont des DOSSIERS."
    echo "C'est un bug de Figma Make qui ne peut PAS être corrigé ici."
    echo ""
    echo "📝 CE QUE VOUS DEVEZ FAIRE :"
    echo ""
    echo "1. Téléchargez le projet depuis Figma Make (ZIP)"
    echo "2. Extrayez le ZIP sur votre ordinateur"
    echo "3. Exécutez : bash fix-netlify-files.sh"
    echo "4. Déployez sur Netlify"
    echo ""
    echo "📚 Lisez : CORRECTION_APRES_TELECHARGEMENT.md"
else
    echo "✅ TOUT EST CORRECT !"
    echo ""
    echo "Les fichiers _headers et _redirects sont bien des fichiers."
    echo "Vous pouvez déployer sur Netlify sans problème !"
fi

echo ""
