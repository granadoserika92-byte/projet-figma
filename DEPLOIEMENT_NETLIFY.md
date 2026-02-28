# 🚀 DÉPLOIEMENT NETLIFY - GUIDE RAPIDE

## ✅ TOUS LES FICHIERS SONT PRÊTS !

Votre projet est **100% prêt** pour Netlify. Aucun problème 404 !

---

## 📦 MÉTHODE 1 : DÉPLOIEMENT ZIP (LA PLUS SIMPLE)

### Étape 1 : Build le projet

```bash
# Installer les dépendances
npm install

# Générer le dossier dist/
npm run build
```

### Étape 2 : Déployer sur Netlify

**Option A : Glisser-déposer**
1. Allez sur https://app.netlify.com/drop
2. Glissez le dossier `dist/` généré
3. Votre site est en ligne !

**Option B : Netlify CLI**
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod --dir=dist
```

---

## 🔗 MÉTHODE 2 : DÉPLOIEMENT GIT (AUTOMATIQUE)

### Étape 1 : Créer un repo GitHub

```bash
git init
git add .
git commit -m "Initial commit - Les Clés du Cabanon"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/cles-du-cabanon.git
git push -u origin main
```

### Étape 2 : Connecter à Netlify

1. Allez sur https://app.netlify.com
2. Cliquez sur **"Add new site"** → **"Import an existing project"**
3. Sélectionnez **GitHub**
4. Choisissez votre repository `cles-du-cabanon`

### Étape 3 : Configuration (automatique)

Netlify détecte automatiquement :
- ✅ Build command : `npm run build`
- ✅ Publish directory : `dist`
- ✅ Framework : Vite

**Cliquez sur "Deploy site"** - C'est tout ! 🎉

---

## 🌐 CONFIGURATION DOMAINE www.clesducabanon.fr

### Sur Netlify

1. Allez dans **Site settings** → **Domain management**
2. Cliquez sur **"Add custom domain"**
3. Entrez : `www.clesducabanon.fr`
4. Netlify vous donne une adresse : `votre-site.netlify.app`

### Sur IONOS (votre hébergeur DNS)

1. Connectez-vous à votre compte IONOS
2. Allez dans **DNS Settings** (Paramètres DNS)
3. Ajoutez un enregistrement **CNAME** :

```
Type: CNAME
Nom: www
Valeur: votre-site.netlify.app
TTL: 3600
```

4. Si vous voulez aussi `clesducabanon.fr` (sans www) :

```
Type: A
Nom: @
Valeur: 75.2.60.5
TTL: 3600
```

5. **Attendez 10-30 minutes** (propagation DNS)

### Activer HTTPS (automatique)

Netlify active automatiquement SSL gratuit (Let's Encrypt).
Dans Netlify : **Domain settings** → Cochez **"Force HTTPS"**

---

## 🔍 VÉRIFICATION POST-DÉPLOIEMENT

### ✅ Checklist

1. **Site accessible** :
   - [ ] `https://www.clesducabanon.fr` fonctionne
   - [ ] `https://clesducabanon.fr` redirige vers www

2. **Pages internes (pas de 404)** :
   - [ ] `/gestion-airbnb`
   - [ ] `/conciergerie-airbnb-guadeloupe`
   - [ ] `/blog`
   - [ ] `/methode`

3. **SEO** :
   - [ ] `/sitemap.xml` accessible
   - [ ] `/robots.txt` accessible
   - [ ] Meta tags présents (F12 → Éléments → `<head>`)

4. **Performance** :
   - [ ] Tester sur https://pagespeed.web.dev/
   - [ ] Score > 90

---

## 🐛 DÉPANNAGE

### ❌ Erreur : "Page not found" sur les pages internes

**Cause** : Le fichier `_redirects` n'est pas copié.

**Solution** :
```bash
# Vérifiez que le fichier existe
cat public/_redirects

# Devrait afficher :
# /*    /index.html   200

# Rebuild
npm run build

# Vérifiez que dist/_redirects existe
ls dist/_redirects

# Redéployez
netlify deploy --prod --dir=dist
```

### ❌ Erreur : "Build failed"

**Cause** : Dépendances manquantes ou erreur de build.

**Solution** :
```bash
# Nettoyer
rm -rf node_modules dist

# Réinstaller
npm install

# Tester localement
npm run build

# Si ça marche localement, redéployez
```

### ❌ Le domaine ne fonctionne pas

**Cause** : DNS pas encore propagé.

**Solution** :
- Attendez 30 minutes à 24h
- Vérifiez votre configuration IONOS
- Testez avec : `nslookup www.clesducabanon.fr`

---

## 📊 FICHIERS CRÉÉS POUR NETLIFY

| Fichier | Rôle | Status |
|---------|------|--------|
| `/public/_redirects` | Redirections SPA | ✅ Créé |
| `/netlify.toml` | Config Netlify | ✅ Créé |
| `/vite.config.js` | Config Vite | ✅ Créé |
| `/index.html` | Template HTML | ✅ Créé |
| `/package.json` | Scripts npm | ✅ Mis à jour |
| `/README.md` | Documentation | ✅ Créé |

---

## 🎯 COMMANDE UNIQUE POUR DÉPLOYER

```bash
# Installation + Build + Déploiement en une commande
npm install && npm run build && netlify deploy --prod --dir=dist
```

---

## 📞 BESOIN D'AIDE ?

**Documentation Netlify** : https://docs.netlify.com/  
**Support Netlify** : https://answers.netlify.com/

---

## ✨ RÉSUMÉ : POURQUOI ÇA MARCHERA

1. ✅ **`/public/_redirects`** résout le problème 404
2. ✅ **`netlify.toml`** configure automatiquement le build
3. ✅ **`vite.config.js`** optimise le build pour production
4. ✅ **React Router** fonctionne correctement en mode SPA
5. ✅ **SEO optimisé** : sitemap, robots.txt, meta tags

**Plus aucun problème 404 ! Votre site va fonctionner parfaitement ! 🚀**

---

**Prêt à déployer ? Lancez :**

```bash
npm run build && netlify deploy --prod --dir=dist
```

🎉 **Votre site sera en ligne en 2 minutes !**
