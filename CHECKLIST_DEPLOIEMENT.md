# ✅ CHECKLIST DE DÉPLOIEMENT NETLIFY

## 📋 AVANT DE DÉPLOYER

### 1️⃣ Téléchargement du projet
- [ ] Projet téléchargé depuis Figma Make (ZIP)
- [ ] ZIP extrait sur mon ordinateur
- [ ] Je suis dans le dossier du projet (`cd cles-du-cabanon`)

### 2️⃣ Correction des fichiers Netlify
- [ ] J'ai exécuté `bash fix-netlify-files.sh` (Mac/Linux)
  OU `.\fix-netlify-files.ps1` (Windows)
- [ ] Le script affiche "✅ CORRECTION TERMINÉE !"
- [ ] Aucune erreur affichée

### 3️⃣ Vérification des fichiers
- [ ] `cat public/_redirects` affiche : `/*    /index.html   200`
- [ ] `cat public/_headers` affiche le contenu des headers
- [ ] `file public/_redirects` affiche "ASCII text" (pas "directory")
- [ ] `file public/_headers` affiche "ASCII text" (pas "directory")

### 4️⃣ Build du projet
- [ ] `npm install` réussi (si nécessaire)
- [ ] `npm run build` réussi
- [ ] Dossier `dist/` créé
- [ ] `ls dist/` affiche les fichiers (_redirects, _headers, index.html, assets/)

### 5️⃣ Vérification de dist/
- [ ] `cat dist/_redirects` affiche : `/*    /index.html   200`
- [ ] `cat dist/_headers` affiche le contenu des headers
- [ ] `file dist/_redirects` affiche "ASCII text" (pas "directory")
- [ ] `file dist/_headers` affiche "ASCII text" (pas "directory")
- [ ] ❌ AUCUN dossier `dist/_redirects/` ou `dist/_headers/`

### 6️⃣ Test local (optionnel mais recommandé)
- [ ] `npm run preview` lancé
- [ ] Site accessible sur `http://localhost:4173`
- [ ] Page d'accueil fonctionne
- [ ] Page `/gestion-airbnb` fonctionne (pas de 404)
- [ ] Page `/blog` fonctionne (pas de 404)

---

## 🚀 DÉPLOIEMENT SUR NETLIFY

### Option A : Netlify Drop (le plus simple)
- [ ] Aller sur https://app.netlify.com/drop
- [ ] Glisser-déposer le dossier `dist/` complet
- [ ] Attendre le déploiement (30 secondes)
- [ ] Site en ligne !

### Option B : Netlify CLI
- [ ] `netlify login` exécuté
- [ ] `netlify deploy --prod --dir=dist` exécuté
- [ ] Déploiement réussi
- [ ] URL du site affichée

### Option C : GitHub + Netlify
- [ ] Projet pushé sur GitHub
- [ ] Repo connecté à Netlify
- [ ] Build automatique configuré
- [ ] Déploiement automatique

---

## 🌐 CONFIGURATION DU DOMAINE

### Sur Netlify
- [ ] Site settings → Domain management
- [ ] Add custom domain : `www.clesducabanon.fr`
- [ ] Netlify affiche l'adresse : `cles-du-cabanon.netlify.app`
- [ ] SSL/HTTPS activé automatiquement
- [ ] "Force HTTPS" activé

### Sur IONOS (DNS)
- [ ] Connexion au compte IONOS
- [ ] Domaines → DNS → `clesducabanon.fr`
- [ ] Enregistrement CNAME créé :
  - Type : CNAME
  - Nom : www
  - Valeur : `cles-du-cabanon.netlify.app`
  - TTL : 3600
- [ ] Enregistrement A créé (optionnel pour root domain) :
  - Type : A
  - Nom : @
  - Valeur : 75.2.60.5
- [ ] Attendre 10-30 minutes (propagation DNS)

---

## 🔍 VÉRIFICATION POST-DÉPLOIEMENT

### Pages principales
- [ ] `https://www.clesducabanon.fr/` → ✅ Fonctionne
- [ ] `https://www.clesducabanon.fr/gestion-airbnb` → ✅ Fonctionne (pas de 404)
- [ ] `https://www.clesducabanon.fr/methode` → ✅ Fonctionne
- [ ] `https://www.clesducabanon.fr/inscription` → ✅ Fonctionne
- [ ] `https://www.clesducabanon.fr/blog` → ✅ Fonctionne
- [ ] `https://www.clesducabanon.fr/contact` → ✅ Fonctionne

### Pages géolocalisées (DOM-TOM)
- [ ] `/conciergerie-airbnb-guadeloupe` → ✅ Fonctionne
- [ ] `/conciergerie-airbnb-martinique` → ✅ Fonctionne
- [ ] `/conciergerie-airbnb-reunion` → ✅ Fonctionne
- [ ] `/conciergerie-airbnb-guyane` → ✅ Fonctionne
- [ ] `/conciergerie-airbnb-mayotte` → ✅ Fonctionne

### Pages villes
- [ ] `/conciergerie-airbnb-paris` → ✅ Fonctionne
- [ ] `/conciergerie-airbnb-lyon` → ✅ Fonctionne
- [ ] `/conciergerie-airbnb-marseille` → ✅ Fonctionne
- [ ] `/conciergerie-airbnb-nice` → ✅ Fonctionne

### Articles de blog
- [ ] `/blog/prix-location-airbnb-2026` → ✅ Fonctionne
- [ ] `/blog/tarification-dynamique-guide-complet` → ✅ Fonctionne
- [ ] `/blog/conciergerie-digitale-vs-traditionnelle` → ✅ Fonctionne

### SEO
- [ ] `https://www.clesducabanon.fr/sitemap.xml` → ✅ Accessible
- [ ] `https://www.clesducabanon.fr/robots.txt` → ✅ Accessible

### Redirections
- [ ] `http://www.clesducabanon.fr` → Redirige vers HTTPS
- [ ] `https://clesducabanon.fr` → Redirige vers www (optionnel)

### Performance
- [ ] Test sur https://pagespeed.web.dev/
- [ ] Score Performance > 90
- [ ] Score SEO > 95
- [ ] Aucune erreur console (F12)

---

## 🐛 DÉPANNAGE

### ❌ Erreur 404 sur pages internes
**Cause** : Fichier `_redirects` manquant ou incorrect

**Solution** :
```bash
cat dist/_redirects
# Devrait afficher : /*    /index.html   200

# Si incorrect :
bash fix-netlify-files.sh
npm run build
netlify deploy --prod --dir=dist
```

### ❌ Build échoue
**Cause** : Dépendances manquantes

**Solution** :
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ❌ Domaine ne fonctionne pas
**Cause** : DNS pas propagé

**Solution** :
- Attendre 30 minutes à 24h
- Vérifier configuration IONOS
- Tester avec : `nslookup www.clesducabanon.fr`

### ❌ Site affiche "main.tsx" dans _redirects
**Cause** : _redirects est un dossier au lieu d'un fichier

**Solution** :
```bash
rm -rf public/_headers public/_redirects
bash fix-netlify-files.sh
npm run build
```

---

## 📊 SCORE FINAL ATTENDU

### SEO
- ✅ Score : 95-100/100
- ✅ Sitemap : Accessible
- ✅ Robots.txt : Accessible
- ✅ Meta tags : Complets
- ✅ Structured data : Présent

### Performance
- ✅ Score : 90-100/100
- ✅ Lazy loading : Activé
- ✅ Images optimisées : Oui
- ✅ Cache : Configuré

### Accessibilité
- ✅ Score : 95-100/100
- ✅ Contraste : Bon
- ✅ Navigation clavier : Oui

### Best Practices
- ✅ Score : 90-100/100
- ✅ HTTPS : Forcé
- ✅ Headers sécurité : Présents

---

## 📝 NOTES

**Date de déploiement** : ___/___/2026

**URL Netlify** : _______________________

**URL finale** : www.clesducabanon.fr

**Temps total** : ~15-30 minutes

**Problèmes rencontrés** :
- [ ] Aucun
- [ ] _redirects était un dossier → Corrigé avec le script
- [ ] Build échoué → Réinstallé les dépendances
- [ ] DNS lent → Attendu 24h
- [ ] Autre : _______________________

---

## ✅ VALIDATION FINALE

**Toutes les cases ci-dessus sont cochées ?**

**FÉLICITATIONS ! 🎉**

Votre site **Les Clés du Cabanon** est :
- ✅ En ligne
- ✅ Sans erreur 404
- ✅ SEO optimisé
- ✅ Sécurisé (HTTPS)
- ✅ Rapide
- ✅ Professionnel

**Votre conciergerie Airbnb digitale est prête à recevoir des clients ! 🚀**

---

## 📞 RESSOURCES

- **Scripts** : `fix-netlify-files.sh` ou `fix-netlify-files.ps1`
- **Guides** : `LIRE_MOI_EN_PREMIER.md`, `SOLUTION_RAPIDE_NETLIFY.md`
- **Support Netlify** : https://answers.netlify.com/
- **Documentation** : https://docs.netlify.com/

---

**Bon déploiement ! 🎯**
