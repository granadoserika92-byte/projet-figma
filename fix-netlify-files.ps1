# Script PowerShell de correction des fichiers Netlify
# Usage: .\fix-netlify-files.ps1

Write-Host "🔧 Correction des fichiers Netlify pour Les Clés du Cabanon" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier qu'on est dans le bon dossier
if (-Not (Test-Path "package.json")) {
    Write-Host "❌ Erreur : package.json non trouvé" -ForegroundColor Red
    Write-Host "   Assurez-vous d'être à la racine du projet" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Dossier du projet détecté" -ForegroundColor Green
Write-Host ""

# Étape 1 : Supprimer les fichiers/dossiers problématiques
Write-Host "📁 Étape 1/5 : Nettoyage des fichiers corrompus..." -ForegroundColor Cyan

if (Test-Path "public\_headers") {
    Remove-Item -Recurse -Force "public\_headers"
    Write-Host "   ✓ Supprimé : public\_headers" -ForegroundColor Green
} else {
    Write-Host "   ⚠ Fichier déjà absent : public\_headers" -ForegroundColor Yellow
}

if (Test-Path "public\_redirects") {
    Remove-Item -Recurse -Force "public\_redirects"
    Write-Host "   ✓ Supprimé : public\_redirects" -ForegroundColor Green
} else {
    Write-Host "   ⚠ Fichier déjà absent : public\_redirects" -ForegroundColor Yellow
}

Write-Host ""

# Étape 2 : Créer le fichier _redirects
Write-Host "📝 Étape 2/5 : Création de _redirects..." -ForegroundColor Cyan

$redirectsContent = "/*    /index.html   200"
[System.IO.File]::WriteAllText("$PWD\public\_redirects", $redirectsContent, [System.Text.Encoding]::ASCII)

if (Test-Path "public\_redirects") {
    Write-Host "   ✓ Créé : public\_redirects" -ForegroundColor Green
    $content = Get-Content "public\_redirects" -Raw
    Write-Host "   Contenu : $content" -ForegroundColor Gray
} else {
    Write-Host "   ✗ Échec création : public\_redirects" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Étape 3 : Créer le fichier _headers
Write-Host "📝 Étape 3/5 : Création de _headers..." -ForegroundColor Cyan

$headersContent = @"
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
"@

[System.IO.File]::WriteAllText("$PWD\public\_headers", $headersContent, [System.Text.Encoding]::ASCII)

if (Test-Path "public\_headers") {
    Write-Host "   ✓ Créé : public\_headers" -ForegroundColor Green
    $lines = (Get-Content "public\_headers").Count
    Write-Host "   Lignes : $lines" -ForegroundColor Gray
} else {
    Write-Host "   ✗ Échec création : public\_headers" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Étape 4 : Vérification
Write-Host "🔍 Étape 4/5 : Vérification des fichiers..." -ForegroundColor Cyan

# Vérifier _redirects
if ((Test-Path "public\_redirects") -and -not (Get-Item "public\_redirects").PSIsContainer) {
    $content = Get-Content "public\_redirects" -Raw
    if ($content -eq "/*    /index.html   200") {
        Write-Host "   ✓ _redirects : Fichier valide" -ForegroundColor Green
    } else {
        Write-Host "   ✗ _redirects : Contenu incorrect" -ForegroundColor Red
        Write-Host "   Contenu trouvé : $content" -ForegroundColor Yellow
    }
} else {
    Write-Host "   ✗ _redirects : N'est pas un fichier valide" -ForegroundColor Red
}

# Vérifier _headers
if ((Test-Path "public\_headers") -and -not (Get-Item "public\_headers").PSIsContainer) {
    $lines = (Get-Content "public\_headers").Count
    if ($lines -gt 5) {
        Write-Host "   ✓ _headers : Fichier valide ($lines lignes)" -ForegroundColor Green
    } else {
        Write-Host "   ✗ _headers : Contenu trop court" -ForegroundColor Red
    }
} else {
    Write-Host "   ✗ _headers : N'est pas un fichier valide" -ForegroundColor Red
}

Write-Host ""

# Étape 5 : Build et vérification finale
Write-Host "🏗️  Étape 5/5 : Build et vérification finale..." -ForegroundColor Cyan

# Vérifier si node_modules existe
if (-Not (Test-Path "node_modules")) {
    Write-Host "   Installation des dépendances..." -ForegroundColor Yellow
    npm install
}

# Build
Write-Host "   Build en cours..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✓ Build réussi" -ForegroundColor Green
} else {
    Write-Host "   ✗ Build échoué" -ForegroundColor Red
    exit 1
}

# Vérifier que les fichiers sont copiés dans dist/
Write-Host ""
Write-Host "   Vérification de dist/..." -ForegroundColor Cyan

if (Test-Path "dist\_redirects") {
    $distContent = Get-Content "dist\_redirects" -Raw
    if ($distContent -eq "/*    /index.html   200") {
        Write-Host "   ✓ dist\_redirects : Copié correctement" -ForegroundColor Green
    } else {
        Write-Host "   ✗ dist\_redirects : Contenu incorrect" -ForegroundColor Red
        Write-Host "   Contenu : $distContent" -ForegroundColor Yellow
    }
} else {
    Write-Host "   ✗ dist\_redirects : Fichier manquant" -ForegroundColor Red
}

if (Test-Path "dist\_headers") {
    Write-Host "   ✓ dist\_headers : Copié correctement" -ForegroundColor Green
} else {
    Write-Host "   ✗ dist\_headers : Fichier manquant" -ForegroundColor Red
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "✅ CORRECTION TERMINÉE !" -ForegroundColor Green
Write-Host ""
Write-Host "📦 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "   1. Vérifiez le contenu de dist/ : Get-ChildItem dist\" -ForegroundColor White
Write-Host "   2. Testez localement : npm run preview" -ForegroundColor White
Write-Host "   3. Déployez sur Netlify : netlify deploy --prod --dir=dist" -ForegroundColor White
Write-Host ""
Write-Host "🌐 Ou glissez-déposez le dossier dist/ sur :" -ForegroundColor Cyan
Write-Host "   https://app.netlify.com/drop" -ForegroundColor White
Write-Host ""
