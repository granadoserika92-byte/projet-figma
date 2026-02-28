# Script de build personnalisé pour Les Clés du Cabanon (PowerShell)
# Ce script s'assure que les fichiers Netlify sont créés correctement

Write-Host "🏗️  Build de Les Clés du Cabanon" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1 : Nettoyer dist/
Write-Host "🧹 Nettoyage du dossier dist/..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force "dist"
}

# Étape 2 : Build Vite
Write-Host "📦 Build du projet avec Vite..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Le build a échoué !" -ForegroundColor Red
    exit 1
}

# Étape 3 : Créer les fichiers Netlify manuellement
Write-Host ""
Write-Host "📝 Création des fichiers Netlify..." -ForegroundColor Yellow

# Créer _redirects
$redirectsContent = "/*    /index.html   200"
[System.IO.File]::WriteAllText("$PWD\dist\_redirects", $redirectsContent, [System.Text.Encoding]::ASCII)

if (Test-Path "dist\_redirects") {
    Write-Host "✅ Créé : dist\_redirects" -ForegroundColor Green
    $content = Get-Content "dist\_redirects" -Raw
    Write-Host "   Contenu : $content" -ForegroundColor Gray
} else {
    Write-Host "❌ Échec : dist\_redirects" -ForegroundColor Red
    exit 1
}

# Créer _headers
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

[System.IO.File]::WriteAllText("$PWD\dist\_headers", $headersContent, [System.Text.Encoding]::ASCII)

if (Test-Path "dist\_headers") {
    Write-Host "✅ Créé : dist\_headers" -ForegroundColor Green
    $lines = (Get-Content "dist\_headers").Count
    Write-Host "   Lignes : $lines" -ForegroundColor Gray
} else {
    Write-Host "❌ Échec : dist\_headers" -ForegroundColor Red
    exit 1
}

# Étape 4 : Supprimer les mauvais dossiers _headers/ et _redirects/ si présents
Write-Host ""
Write-Host "🗑️  Nettoyage des dossiers corrompus..." -ForegroundColor Yellow

if ((Test-Path "dist\_headers") -and (Get-Item "dist\_headers").PSIsContainer) {
    Remove-Item -Recurse -Force "dist\_headers"
    # Recréer le fichier
    [System.IO.File]::WriteAllText("$PWD\dist\_headers", $headersContent, [System.Text.Encoding]::ASCII)
    Write-Host "✅ Corrigé : dist\_headers (était un dossier, maintenant un fichier)" -ForegroundColor Green
}

if ((Test-Path "dist\_redirects") -and (Get-Item "dist\_redirects").PSIsContainer) {
    Remove-Item -Recurse -Force "dist\_redirects"
    # Recréer le fichier
    [System.IO.File]::WriteAllText("$PWD\dist\_redirects", $redirectsContent, [System.Text.Encoding]::ASCII)
    Write-Host "✅ Corrigé : dist\_redirects (était un dossier, maintenant un fichier)" -ForegroundColor Green
}

# Étape 5 : Vérification finale
Write-Host ""
Write-Host "🔍 Vérification finale..." -ForegroundColor Yellow

# Vérifier _redirects
if ((Test-Path "dist\_redirects") -and -not (Get-Item "dist\_redirects").PSIsContainer) {
    $content = Get-Content "dist\_redirects" -Raw
    if ($content -eq "/*    /index.html   200") {
        Write-Host "✅ dist\_redirects : FICHIER valide avec bon contenu" -ForegroundColor Green
    } else {
        Write-Host "⚠️  dist\_redirects : FICHIER mais contenu incorrect" -ForegroundColor Yellow
        Write-Host "   Contenu : $content" -ForegroundColor Gray
    }
} else {
    Write-Host "❌ dist\_redirects : PROBLÈME (pas un fichier valide)" -ForegroundColor Red
}

# Vérifier _headers
if ((Test-Path "dist\_headers") -and -not (Get-Item "dist\_headers").PSIsContainer) {
    $lines = (Get-Content "dist\_headers").Count
    Write-Host "✅ dist\_headers : FICHIER valide avec $lines lignes" -ForegroundColor Green
} else {
    Write-Host "❌ dist\_headers : PROBLÈME (pas un fichier valide)" -ForegroundColor Red
}

# Vérifier les autres fichiers
Write-Host ""
Write-Host "📄 Autres fichiers :" -ForegroundColor Cyan
if (Test-Path "dist\index.html") {
    Write-Host "✅ index.html" -ForegroundColor Green
}
if (Test-Path "dist\sitemap.xml") {
    Write-Host "✅ sitemap.xml" -ForegroundColor Green
}
if (Test-Path "dist\robots.txt") {
    Write-Host "✅ robots.txt" -ForegroundColor Green
}
if (Test-Path "dist\assets") {
    Write-Host "✅ assets/" -ForegroundColor Green
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "✅ BUILD TERMINÉ !" -ForegroundColor Green
Write-Host ""
Write-Host "📦 Le dossier dist/ est prêt pour Netlify !" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Prochaines étapes :" -ForegroundColor Cyan
Write-Host "   1. Vérifier : Get-Content dist\_redirects" -ForegroundColor White
Write-Host "   2. Déployer : netlify deploy --prod --dir=dist" -ForegroundColor White
Write-Host "   3. Ou drag & drop dist/ sur https://app.netlify.com/drop" -ForegroundColor White
Write-Host ""
