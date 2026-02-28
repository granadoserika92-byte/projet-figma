# 🚀 SCRIPT DE DÉPLOIEMENT - LES CLÉS DU CABANON
# Ce script prépare et déploie le site sur Netlify (Windows)

Write-Host "🏠 Les Clés du Cabanon - Déploiement Netlify" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1 : Vérification
Write-Host "📋 Étape 1/5 : Vérification de l'environnement..." -ForegroundColor Yellow

# Vérifier Node.js
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js installé : $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js n'est pas installé" -ForegroundColor Red
    exit 1
}

# Vérifier npm
if (Get-Command npm -ErrorAction SilentlyContinue) {
    $npmVersion = npm --version
    Write-Host "✅ npm installé : $npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ npm n'est pas installé" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Étape 2 : Installation des dépendances
Write-Host "📦 Étape 2/5 : Installation des dépendances..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dépendances installées" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors de l'installation" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Étape 3 : Build
Write-Host "🔨 Étape 3/5 : Build du projet..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build réussi" -ForegroundColor Green
} else {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Étape 4 : Vérification du dossier dist
Write-Host "🔍 Étape 4/5 : Vérification du dossier dist..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Write-Host "✅ Dossier dist existe" -ForegroundColor Green
    $fileCount = (Get-ChildItem -Path "dist" -Recurse -File).Count
    Write-Host "   📁 $fileCount fichiers générés" -ForegroundColor Green
    
    # Vérification des fichiers clés
    if (Test-Path "dist/index.html") {
        Write-Host "   ✅ index.html présent" -ForegroundColor Green
    } else {
        Write-Host "   ❌ index.html manquant" -ForegroundColor Red
        exit 1
    }
    
    if (Test-Path "dist/assets") {
        $assetCount = (Get-ChildItem -Path "dist/assets" -Recurse -File).Count
        Write-Host "   ✅ dossier assets présent ($assetCount fichiers)" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  dossier assets manquant (c'est peut-être normal)" -ForegroundColor Yellow
    }
} else {
    Write-Host "❌ Dossier dist n'existe pas" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Étape 5 : Instructions de déploiement
Write-Host "🚀 Étape 5/5 : Déploiement sur Netlify" -ForegroundColor Yellow
Write-Host ""
Write-Host "Vous avez 3 options :" -ForegroundColor Cyan
Write-Host ""
Write-Host "Option 1 : Netlify CLI (Recommandé)" -ForegroundColor Green
Write-Host "   1. Installez Netlify CLI : npm install -g netlify-cli"
Write-Host "   2. Connectez-vous : netlify login"
Write-Host "   3. Déployez : netlify deploy --prod --dir=dist"
Write-Host ""
Write-Host "Option 2 : Drag & Drop" -ForegroundColor Green
Write-Host "   1. Allez sur app.netlify.com"
Write-Host "   2. Ouvrez votre site"
Write-Host "   3. Onglet 'Deploys'"
Write-Host "   4. Cliquez 'Trigger deploy' → 'Clear cache and deploy site'"
Write-Host "   5. Drag & drop le dossier " -NoNewline
Write-Host "dist/" -ForegroundColor Yellow -NoNewline
Write-Host " (PAS le dossier racine !)"
Write-Host ""
Write-Host "Option 3 : Git Push (Si configuré)" -ForegroundColor Green
Write-Host "   1. git add ."
Write-Host "   2. git commit -m 'Update site'"
Write-Host "   3. git push origin main"
Write-Host ""
Write-Host "⚠️  N'OUBLIEZ PAS APRÈS LE DÉPLOIEMENT :" -ForegroundColor Yellow
Write-Host "   1. Clear le cache Netlify (Dashboard → Trigger deploy → Clear cache)"
Write-Host "   2. Clear le cache navigateur (Ctrl+Shift+R)"
Write-Host "   3. Tester en navigation privée (Ctrl+Shift+N)"
Write-Host ""
Write-Host "✅ Build terminé avec succès !" -ForegroundColor Green
Write-Host "Le dossier 'dist' est prêt pour le déploiement." -ForegroundColor Green
Write-Host ""
Write-Host "Appuyez sur une touche pour continuer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
