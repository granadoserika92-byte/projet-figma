# 🎨 SCRIPT DE REMPLACEMENT DES COULEURS VIOLETTES → TEAL/JAUNE

Ce fichier contient un script pour remplacer automatiquement TOUTES les couleurs violettes/indigo par teal/jaune dans tout le projet.

## 🔍 ANALYSE : 101+ OCCURRENCES DÉTECTÉES

### Fichiers concernés (14 fichiers) :
1. `/src/app/components/Pricing.tsx` - 4 occurrences (✅ PARTIELLEMENT CORRIGÉ)
2. `/src/app/components/MentionsLegales.tsx` - 4 occurrences
3. `/src/app/components/CGV.tsx` - 3 occurrences
4. `/src/app/components/PolitiqueConfidentialite.tsx` - 4 occurrences
5. `/src/app/pages/CreationAnnonce.tsx` - 7 occurrences
6. `/src/app/pages/OptimisationSEO.tsx` - 8 occurrences
7. `/src/app/pages/TarificationDynamique.tsx` - 11 occurrences
8. `/src/app/pages/MultiPlateformes.tsx` - 7 occurrences
9. `/src/app/pages/GestionVoyageurs.tsx` - 14 occurrences
10. `/src/app/pages/Automatisation.tsx` - 9 occurrences
11. `/src/app/pages/OptimisationOccupation.tsx` - 6 occurrences
12. `/src/app/pages/EspaceProprietaire.tsx` - 8 occurrences
13. `/src/app/pages/ErrorPage.tsx` - 2 occurrences
14. `/src/app/pages/GestionAirbnb.tsx` - 11 occurrences

---

## 📋 TABLE DE REMPLACEMENT

### Indigo → Teal (Turquoise)
```
indigo-900 → teal-900
indigo-800 → teal-800
indigo-700 → teal-700
indigo-600 → teal-600
indigo-500 → teal-500
indigo-400 → teal-400
indigo-300 → teal-300
indigo-200 → teal-200
indigo-100 → teal-100
indigo-50 → teal-50
```

### Purple → Amber (Jaune)
```
purple-900 → amber-600
purple-800 → amber-600
purple-700 → amber-600
purple-600 → amber-500
purple-500 → amber-400
purple-400 → amber-300
purple-300 → amber-300
purple-200 → amber-200
purple-100 → amber-100
purple-50 → amber-50
```

### Violet → Cyan (pour les gradients secondaires)
```
violet-600 → cyan-600
violet-500 → cyan-500
```

---

## 🖥️ SCRIPT BASH (MacOS / Linux)

Créez un fichier `replace-colors.sh` :

```bash
#!/bin/bash

# Script de remplacement des couleurs violettes → teal/jaune
# Usage: chmod +x replace-colors.sh && ./replace-colors.sh

echo "🎨 Remplacement des couleurs violettes → teal/jaune..."

# Indigo → Teal
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-900/teal-900/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-800/teal-800/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-700/teal-700/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-600/teal-600/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-500/teal-500/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-400/teal-400/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-300/teal-300/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-200/teal-200/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-100/teal-100/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/indigo-50/teal-50/g' {} +

# Purple → Amber
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-900/amber-600/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-800/amber-600/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-700/amber-600/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-600/amber-500/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-500/amber-400/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-400/amber-300/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-300/amber-300/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-200/amber-200/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-100/amber-100/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/purple-50/amber-50/g' {} +

# Violet → Cyan
find src/app -name "*.tsx" -type f -exec sed -i '' 's/violet-600/cyan-600/g' {} +
find src/app -name "*.tsx" -type f -exec sed -i '' 's/violet-500/cyan-500/g' {} +

echo "✅ Remplacement terminé !"
echo ""
echo "📊 Vérifiez le nombre de remplacements :"
grep -r "indigo-" src/app --include="*.tsx" | wc -l
grep -r "purple-" src/app --include="*.tsx" | wc -l
```

### Utilisation :
```bash
# 1. Créer le fichier
nano replace-colors.sh

# 2. Coller le contenu ci-dessus
# 3. Sauvegarder (Ctrl+O, Enter, Ctrl+X)

# 4. Rendre exécutable
chmod +x replace-colors.sh

# 5. Exécuter
./replace-colors.sh
```

---

## 🪟 SCRIPT POWERSHELL (Windows)

Créez un fichier `replace-colors.ps1` :

```powershell
# Script de remplacement des couleurs violettes → teal/jaune
# Usage: .\replace-colors.ps1

Write-Host "🎨 Remplacement des couleurs violettes → teal/jaune..." -ForegroundColor Cyan

$files = Get-ChildItem -Path "src\app" -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Indigo → Teal
    $content = $content -replace 'indigo-900', 'teal-900'
    $content = $content -replace 'indigo-800', 'teal-800'
    $content = $content -replace 'indigo-700', 'teal-700'
    $content = $content -replace 'indigo-600', 'teal-600'
    $content = $content -replace 'indigo-500', 'teal-500'
    $content = $content -replace 'indigo-400', 'teal-400'
    $content = $content -replace 'indigo-300', 'teal-300'
    $content = $content -replace 'indigo-200', 'teal-200'
    $content = $content -replace 'indigo-100', 'teal-100'
    $content = $content -replace 'indigo-50', 'teal-50'
    
    # Purple → Amber
    $content = $content -replace 'purple-900', 'amber-600'
    $content = $content -replace 'purple-800', 'amber-600'
    $content = $content -replace 'purple-700', 'amber-600'
    $content = $content -replace 'purple-600', 'amber-500'
    $content = $content -replace 'purple-500', 'amber-400'
    $content = $content -replace 'purple-400', 'amber-300'
    $content = $content -replace 'purple-300', 'amber-300'
    $content = $content -replace 'purple-200', 'amber-200'
    $content = $content -replace 'purple-100', 'amber-100'
    $content = $content -replace 'purple-50', 'amber-50'
    
    # Violet → Cyan
    $content = $content -replace 'violet-600', 'cyan-600'
    $content = $content -replace 'violet-500', 'cyan-500'
    
    Set-Content $file.FullName -Value $content -NoNewline
}

Write-Host "✅ Remplacement terminé !" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Vérifiez le nombre de remplacements :"
(Get-ChildItem -Path "src\app" -Filter "*.tsx" -Recurse | Select-String -Pattern "indigo-").Count
(Get-ChildItem -Path "src\app" -Filter "*.tsx" -Recurse | Select-String -Pattern "purple-").Count
```

### Utilisation :
```powershell
# 1. Ouvrir PowerShell dans le dossier du projet

# 2. Si c'est la première fois, autoriser l'exécution de scripts :
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 3. Exécuter le script
.\replace-colors.ps1
```

---

## 🔍 VÉRIFICATION MANUELLE (VS Code)

### Méthode Find & Replace :

1. **Ouvrir VS Code**
2. **Ctrl + Shift + H** (Find and Replace dans tous les fichiers)
3. **Remplacer UN PAR UN** (dans cet ordre) :

#### Indigo → Teal
```
Rechercher    : indigo-600
Remplacer par : teal-600
Fichiers      : src/app/**/*.tsx
→ Remplacer tout
```

Répéter pour :
- `indigo-700` → `teal-700`
- `indigo-500` → `teal-500`
- `indigo-300` → `teal-300`
- `indigo-200` → `teal-200`
- `indigo-100` → `teal-100`
- `indigo-50` → `teal-50`

#### Purple → Amber
```
Rechercher    : purple-600
Remplacer par : amber-500
Fichiers      : src/app/**/*.tsx
→ Remplacer tout
```

Répéter pour :
- `purple-700` → `amber-600`
- `purple-500` → `amber-400`
- `purple-300` → `amber-300`
- `purple-200` → `amber-200`
- `purple-100` → `amber-100`
- `purple-50` → `amber-50`

---

## ✅ VÉRIFICATION POST-REMPLACEMENT

### 1. Compter les occurrences restantes :

#### MacOS / Linux :
```bash
# Indigo restants ?
grep -r "indigo-" src/app --include="*.tsx" | wc -l

# Purple restants ?
grep -r "purple-" src/app --include="*.tsx" | wc -l
```

**Résultat attendu** : `0` pour les deux

---

#### Windows (PowerShell) :
```powershell
# Indigo restants ?
(Get-ChildItem -Path "src\app" -Filter "*.tsx" -Recurse | Select-String -Pattern "indigo-").Count

# Purple restants ?
(Get-ChildItem -Path "src\app" -Filter "*.tsx" -Recurse | Select-String -Pattern "purple-").Count
```

**Résultat attendu** : `0` pour les deux

---

### 2. Lancer le serveur de dev :
```bash
npm run dev
```

Vérifiez visuellement que :
- ✅ Tous les gradients sont **teal → jaune**
- ✅ Tous les liens sont **teal-600**
- ✅ Tous les boutons sont **teal-600**
- ❌ **Aucun violet/indigo** visible

---

## 🎨 PALETTE FINALE

### Couleurs principales :
- **Teal-600** : `#14b8a6` (Turquoise principal)
- **Teal-500** : `#14b8a6` (Turquoise léger)
- **Amber-500** : `#f59e0b` (Jaune principal)
- **Amber-400** : `#fbbf24` (Jaune léger)

### Gradients :
- `from-teal-600 to-amber-500` (Turquoise → Jaune)
- `from-teal-600 to-cyan-600` (Turquoise → Cyan)
- `from-amber-500 to-yellow-500` (Jaune → Jaune clair)

---

## 📋 CHECKLIST FINALE

Après exécution du script :

- [ ] ✅ Script exécuté sans erreurs
- [ ] ✅ 0 occurrence de `indigo-` dans `/src/app`
- [ ] ✅ 0 occurrence de `purple-` dans `/src/app`
- [ ] ✅ Site testé localement (`npm run dev`)
- [ ] ✅ Toutes les pages vérifiées visuellement
- [ ] ✅ Aucun violet/indigo visible
- [ ] ✅ Build réussi (`npm run build`)
- [ ] ✅ Déployé sur Netlify
- [ ] ✅ Cache Netlify clearé
- [ ] ✅ Cache navigateur clearé (Ctrl+Shift+R)

---

## 🚨 EN CAS D'ERREUR

### Erreur "Permission denied" (MacOS/Linux)
```bash
chmod +x replace-colors.sh
```

### Erreur PowerShell "scripts disabled" (Windows)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Certaines couleurs subsistent ?
Vérifiez manuellement les fichiers listés par :
```bash
grep -r "indigo-" src/app --include="*.tsx"
grep -r "purple-" src/app --include="*.tsx"
```

---

## 💡 CONSEILS

1. **SAUVEGARDEZ** votre projet avant d'exécuter le script (Git commit ou backup)
2. **TESTEZ** visuellement toutes les pages après remplacement
3. **VÉRIFIEZ** les gradients (doivent être teal → jaune)
4. **NE MODIFIEZ PAS** les couleurs système (green, red, blue, etc.)

---

## 🎯 RÉSULTAT ATTENDU

Avant :
```tsx
className="bg-gradient-to-r from-indigo-600 to-purple-600"
```

Après :
```tsx
className="bg-gradient-to-r from-teal-600 to-amber-500"
```

**100% des couleurs violettes/indigo sont remplacées par teal/jaune ! 🚀**
