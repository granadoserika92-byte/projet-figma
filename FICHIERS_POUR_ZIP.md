# 📦 LISTE DES FICHIERS À INCLURE DANS LE ZIP

## ✅ FICHIERS ESSENTIELS POUR NETLIFY

### 📁 Racine du projet
- ✅ `package.json` - Dépendances et scripts
- ✅ `vite.config.js` - Configuration Vite
- ✅ `netlify.toml` - Configuration Netlify (IMPORTANT !)
- ✅ `index.html` - Template HTML
- ✅ `.gitignore` - Fichiers à ignorer
- ✅ `README.md` - Documentation
- ✅ `DEPLOIEMENT_NETLIFY.md` - Guide déploiement

### 📁 /src/
Tout le dossier `src/` complet :
- ✅ `/src/app/` - Application React
  - `App.tsx` - Composant principal
  - `main.tsx` - Point d'entrée
  - `routes.ts` - Routes React Router
  - `/components/` - Tous les composants (Header, Footer, etc.)
  - `/pages/` - Toutes les 25 pages
- ✅ `/src/styles/` - Styles CSS
  - `index.css`
  - `theme.css`
  - `fonts.css`
- ✅ `/src/imports/` - Assets importés

### 📁 /public/
Tout le dossier `public/` complet :
- ✅ `_redirects` - **CRITIQUE pour Netlify** (évite les 404)
- ✅ `robots.txt` - SEO
- ✅ `sitemap.xml` - SEO
- ✅ `logo.png` - Logo du site
- ✅ Autres fichiers statiques (favicons si ajoutés)

### ❌ À NE PAS INCLURE

- ❌ `node_modules/` - Trop lourd, sera réinstallé
- ❌ `dist/` - Sera généré par le build
- ❌ `.netlify/` - Cache Netlify
- ❌ `.env` - Variables d'environnement locales
- ❌ Fichiers temporaires (`.DS_Store`, etc.)

---

## 🎯 STRUCTURE DU ZIP FINAL

```
cles-du-cabanon.zip
├── package.json              ✅
├── vite.config.js            ✅
├── netlify.toml              ✅ IMPORTANT
├── index.html                ✅
├── .gitignore                ✅
├── README.md                 ✅
├── DEPLOIEMENT_NETLIFY.md    ✅
├── public/
│   ├── _redirects            ✅ CRITIQUE
│   ├── robots.txt            ✅
│   ├── sitemap.xml           ✅
│   └── logo.png              ✅
└── src/
    ├── app/
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── routes.ts
    │   ├── components/       (tous les fichiers)
    │   └── pages/            (tous les fichiers)
    ├── styles/
    │   ├── index.css
    │   ├── theme.css
    │   └── fonts.css
    └── imports/              (si des assets)
```

---

## 🚀 COMMENT CRÉER LE ZIP

### Option 1 : Manuellement

1. Sélectionnez tous les fichiers **SAUF** :
   - `node_modules/`
   - `dist/`
   - `.netlify/`

2. Clic droit → Compresser → `cles-du-cabanon.zip`

### Option 2 : Via Terminal (Mac/Linux)

```bash
# À la racine du projet
zip -r cles-du-cabanon.zip . \
  -x "node_modules/*" \
  -x "dist/*" \
  -x ".netlify/*" \
  -x ".git/*" \
  -x "*.log"
```

### Option 3 : Via Terminal (Windows PowerShell)

```powershell
Compress-Archive -Path * `
  -DestinationPath cles-du-cabanon.zip `
  -Force `
  -CompressionLevel Optimal
```

---

## 📤 DÉPLOIEMENT APRÈS EXTRACTION DU ZIP

### Sur votre ordinateur local :

```bash
# 1. Extraire le ZIP
unzip cles-du-cabanon.zip -d cles-du-cabanon

# 2. Aller dans le dossier
cd cles-du-cabanon

# 3. Installer les dépendances
npm install

# 4. Build
npm run build

# 5. Déployer sur Netlify
netlify deploy --prod --dir=dist
```

### Ou directement sur Netlify (sans build local) :

1. Uploadez le ZIP sur GitHub
2. Connectez le repo à Netlify
3. Netlify build automatiquement (détecte `netlify.toml`)

---

## 🔍 VÉRIFICATION AVANT DE ZIPPER

### Checklist rapide :

```bash
# Vérifier que _redirects existe
cat public/_redirects

# Vérifier que netlify.toml existe
cat netlify.toml

# Vérifier que package.json a le script build
grep "build" package.json

# Vérifier que vite.config.js existe
cat vite.config.js

# Vérifier que main.tsx existe
cat src/app/main.tsx
```

**Si tous ces fichiers existent → ✅ Vous pouvez zipper !**

---

## 📊 TAILLE DU ZIP

**Attendu** : ~500 KB - 2 MB (sans node_modules)  
**Avec node_modules** : ~200-300 MB (NE PAS INCLURE !)

---

## ✨ RAPPEL : FICHIER CRITIQUE

**`/public/_redirects`** est le fichier le plus important !

Sans ce fichier :
- ❌ Page d'accueil : ✅ OK
- ❌ Pages internes : ❌ 404 Error

Avec ce fichier :
- ✅ Toutes les pages : ✅ OK

**Vérifiez toujours qu'il est présent avant de zipper !**

---

## 🎯 RÉSUMÉ

| Étape | Action | Status |
|-------|--------|--------|
| 1 | Vérifier `/public/_redirects` | ✅ |
| 2 | Vérifier `netlify.toml` | ✅ |
| 3 | Vérifier `vite.config.js` | ✅ |
| 4 | Supprimer `node_modules/` et `dist/` | ⏳ |
| 5 | Créer le ZIP | ⏳ |
| 6 | Tester en local après extraction | ⏳ |
| 7 | Déployer sur Netlify | ⏳ |

---

**✅ Tous les fichiers sont prêts ! Vous pouvez créer votre ZIP et déployer ! 🚀**
