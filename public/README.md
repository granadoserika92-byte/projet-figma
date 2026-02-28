# 📁 Dossier /public/ - Fichiers statiques pour Netlify

## 📋 Contenu de ce dossier

Ce dossier contient les fichiers statiques qui seront **copiés tels quels** dans le dossier `dist/` lors du build Vite.

### ✅ Fichiers présents

| Fichier | Type | Rôle |
|---------|------|------|
| `_redirects` | Fichier | **CRITIQUE** - Redirections SPA pour Netlify |
| `_headers` | Fichier | Headers HTTP pour sécurité et cache |
| `robots.txt` | Fichier | Instructions pour les robots (SEO) |
| `sitemap.xml` | Fichier | Plan du site (SEO) |
| `netlify-redirects` | Fichier | Référence du contenu de `_redirects` |
| `netlify-headers` | Fichier | Référence du contenu de `_headers` |

---

## ⚠️ IMPORTANT : _redirects et _headers DOIVENT être des FICHIERS

### ❌ NE PAS CRÉER :
- `_redirects/` (dossier)
- `_headers/` (dossier)

### ✅ CRÉER :
- `_redirects` (fichier sans extension)
- `_headers` (fichier sans extension)

---

## 🔍 Comment vérifier

### Dans le terminal :

```bash
# Vérifier que ce sont des fichiers (pas des dossiers)
ls -l public/ | grep "^-.*_"

# Devrait afficher :
# -rw-r--r-- ... _headers
# -rw-r--r-- ... _redirects
# (Le "-" au début signifie "fichier")

# Vérifier le contenu
cat public/_redirects
# Devrait afficher : /*    /index.html   200

cat public/_headers
# Devrait afficher le contenu des headers HTTP
```

### Après le build :

```bash
# Build
npm run build

# Vérifier que les fichiers sont copiés dans dist/
ls -l dist/ | grep "^-.*_"

# Devrait afficher :
# -rw-r--r-- ... _headers
# -rw-r--r-- ... _redirects
```

---

## 📄 Contenu des fichiers

### _redirects

```
/*    /index.html   200
```

**Explication :**
- `/*` = Toutes les URLs
- `/index.html` = Redirige vers index.html
- `200` = Code HTTP succès (pas de redirection visible)

**Rôle :** Permet à React Router de fonctionner sur Netlify en redirigeant toutes les requêtes vers index.html.

### _headers

```
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
```

**Rôle :** Configure les headers HTTP pour la sécurité et la performance.

---

## 🚨 SI LES FICHIERS SONT CORROMPUS

### Symptômes :
- `dist/_headers/` est un dossier au lieu d'un fichier
- `dist/_redirects/` est un dossier au lieu d'un fichier
- Les dossiers contiennent un fichier `main.tsx`
- Erreur 404 sur toutes les pages internes sur Netlify

### Solution :

**1. Supprimer les dossiers :**
```bash
rm -rf public/_headers
rm -rf public/_redirects
```

**2. Utiliser les fichiers de référence :**
```bash
cp public/netlify-redirects public/_redirects
cp public/netlify-headers public/_headers
```

**3. Ou utiliser le script automatique :**
```bash
bash fix-netlify-files.sh
```

---

## 🔄 Workflow Vite

```
public/
├── _redirects       → Vite copie tel quel → dist/_redirects
├── _headers         → Vite copie tel quel → dist/_headers
├── robots.txt       → Vite copie tel quel → dist/robots.txt
└── sitemap.xml      → Vite copie tel quel → dist/sitemap.xml
```

**Vite copie TOUT le contenu de `public/` vers `dist/` sans modification.**

---

## 📚 Documentation

- [Netlify Redirects](https://docs.netlify.com/routing/redirects/)
- [Netlify Headers](https://docs.netlify.com/routing/headers/)
- [Vite Public Directory](https://vitejs.dev/guide/assets.html#the-public-directory)

---

## ✅ Checklist avant déploiement

- [ ] `_redirects` est un fichier (pas un dossier)
- [ ] `_headers` est un fichier (pas un dossier)
- [ ] `cat public/_redirects` affiche le bon contenu
- [ ] `cat public/_headers` affiche le bon contenu
- [ ] `npm run build` réussit
- [ ] `cat dist/_redirects` affiche le bon contenu
- [ ] Aucun dossier `dist/_redirects/` ou `dist/_headers/`

**Si tous ces points sont cochés → ✅ Prêt pour Netlify !**
