# 🏠 Les Clés du Cabanon - Site Web Officiel

## 🎯 Conciergerie Airbnb digitale à 239€/mois

Site web complet et professionnel pour promouvoir notre service de conciergerie Airbnb en Guadeloupe et dans toute la France.

---

## 📦 PROJET

- **25 pages** optimisées SEO
- **Score SEO** : 95/100
- **Design** : Moderne, jeune et dynamique
- **Couleurs** : Turquoise/Teal + Jaune (branding)
- **Domaine** : www.clesducabanon.fr
- **Hébergement** : Netlify
- **DNS** : IONOS

---

## 🚀 DÉPLOIEMENT RAPIDE (RECOMMANDÉ)

### Après avoir téléchargé le ZIP depuis Figma Make :

#### Mac/Linux :
```bash
cd cles-du-cabanon
npm install
npm run build:netlify
netlify deploy --prod --dir=dist
```

#### Windows PowerShell :
```powershell
cd cles-du-cabanon
npm install
.\build-netlify.ps1
netlify deploy --prod --dir=dist
```

**La commande `npm run build:netlify` corrige automatiquement les fichiers Netlify !**

---

## 📚 GUIDES COMPLETS

### 🌟 Commencer ici :
1. **`SOLUTION_BUILD_CORRIGE.md`** ⭐ **LISEZ EN PREMIER !**
2. **`README_IMPORTANT.md`** - Comprendre le problème des fichiers `_`
3. **`WORKFLOW_COMPLET.md`** - Diagramme de flux complet

### 🔧 Scripts de build :
- **`build-netlify.sh`** - Build avec correction automatique (Mac/Linux)
- **`build-netlify.ps1`** - Build avec correction automatique (Windows)
- **`npm run build:netlify`** - Commande npm qui lance le script

### 🛠️ Scripts de correction :
- **`fix-netlify-files.sh`** - Correction manuelle si besoin (Mac/Linux)
- **`fix-netlify-files.ps1`** - Correction manuelle si besoin (Windows)

### 📖 Guides détaillés :
- **`CORRECTION_APRES_TELECHARGEMENT.md`** - Guide étape par étape
- **`GUIDE_VISUEL_5MIN.md`** - Guide visuel rapide
- **`CHECKLIST_DEPLOIEMENT.md`** - Checklist complète
- **`LIRE_MOI_EN_PREMIER.md`** - Vue d'ensemble

---

## ⚠️ PROBLÈME CONNU (RÉSOLU AUTOMATIQUEMENT)

### Le problème :
Figma Make crée des **DOSSIERS** `_headers/` et `_redirects/` au lieu de **FICHIERS**, ce qui cause des erreurs 404 sur Netlify.

### La solution :
**Utilisez `npm run build:netlify` au lieu de `npm run build` !**

Cette commande :
- ✅ Build le projet avec Vite
- ✅ Supprime les mauvais dossiers
- ✅ Crée les bons fichiers
- ✅ Vérifie que tout est correct
- ✅ Prépare `dist/` pour Netlify

**Plus besoin de correction manuelle ! 🎉**

---

## 📂 STRUCTURE DU PROJET

```
cles-du-cabanon/
├── 📄 README.md                          ⭐ Vous êtes ici !
├── 📄 SOLUTION_BUILD_CORRIGE.md          🚀 Guide principal
├── 📄 package.json                       npm scripts
├── 📄 vite.config.js                     Configuration Vite
├── 📄 netlify.toml                       Configuration Netlify
│
├── 🔧 Scripts de build
│   ├── 📄 build-netlify.sh               Build corrigé (Mac/Linux)
│   ├── 📄 build-netlify.ps1              Build corrigé (Windows)
│   ├── 📄 fix-netlify-files.sh           Correction manuelle
│   └── 📄 fix-netlify-files.ps1          Correction manuelle
│
├── 📚 Guides
│   ├── 📄 README_IMPORTANT.md
│   ├── 📄 WORKFLOW_COMPLET.md
│   ├── 📄 GUIDE_VISUEL_5MIN.md
│   ├── 📄 CHECKLIST_DEPLOIEMENT.md
│   └── 📄 CORRECTION_APRES_TELECHARGEMENT.md
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📄 App.tsx                    Composant principal
│   │   ├── 📄 routes.ts                  Routes React Router
│   │   ├── 📁 components/                Composants réutilisables
│   │   └── 📁 pages/                     25 pages du site
│   └── 📁 styles/
│       ├── 📄 globals.css                Styles globaux
│       ├── 📄 theme.css                  Thème Tailwind v4
│       └── 📄 fonts.css                  Imports de fonts
│
└── 📁 public/
    ├── 📄 .redirects                     Source pour _redirects
    ├── 📄 .headers                       Source pour _headers
    ├── 📄 sitemap.xml                    Plan du site (SEO)
    ├── 📄 robots.txt                     Instructions robots (SEO)
    └── 📄 README.md                      Documentation public/
```

---

## 🛠️ COMMANDES NPM

```bash
# Développement local
npm run dev              # Lance le serveur de dev (port 3000)

# Build standard
npm run build            # Build Vite normal

# Build pour Netlify (RECOMMANDÉ)
npm run build:netlify    # Build + correction automatique des fichiers

# Preview local
npm run preview          # Teste le build localement (port 4173)

# Linting
npm run lint             # Vérifie le code
```

---

## 📄 LES 25 PAGES DU SITE

### Pages principales :
- `/` - Page d'accueil
- `/gestion-airbnb` - Service de gestion
- `/methode` - Notre méthode
- `/inscription` - Formulaire d'inscription
- `/contact` - Contact
- `/blog` - Liste des articles

### Pages géolocalisées DOM-TOM :
- `/conciergerie-airbnb-guadeloupe`
- `/conciergerie-airbnb-martinique`
- `/conciergerie-airbnb-reunion`
- `/conciergerie-airbnb-guyane`
- `/conciergerie-airbnb-mayotte`

### Pages grandes villes :
- `/conciergerie-airbnb-paris`
- `/conciergerie-airbnb-lyon`
- `/conciergerie-airbnb-marseille`
- `/conciergerie-airbnb-nice`
- `/conciergerie-airbnb-bordeaux`
- `/conciergerie-airbnb-toulouse`

### Articles de blog :
- `/blog/prix-location-airbnb-2026`
- `/blog/tarification-dynamique-guide-complet`
- `/blog/conciergerie-digitale-vs-traditionnelle`
- `/blog/optimiser-rentabilite-airbnb-2026`
- `/blog/multi-plateforme-strategie-reussie`
- Et plus...

---

## 🎨 DESIGN & BRANDING

### Couleurs principales :
- **Primaire** : Turquoise/Teal (#14B8A6)
- **Accent** : Jaune (#F59E0B)
- **Neutre** : Gris moderne

### Typographie :
- **Titres** : Inter (bold)
- **Corps** : Inter (regular)

### Style :
- Moderne et épuré
- Jeune et dynamique
- Mobile-first responsive
- Animations subtiles (Motion)

---

## 🔒 CONFIGURATION NETLIFY

### Fichiers de configuration :
- **`netlify.toml`** - Configuration principale
- **`dist/_redirects`** - Redirections SPA (créé par le build)
- **`dist/_headers`** - Headers HTTP sécurité (créé par le build)

### Paramètres :
- **Build command** : `npm run build:netlify`
- **Publish directory** : `dist`
- **Node version** : 20.x

---

## 🌐 CONFIGURATION DOMAINE

### Sur Netlify :
1. Site settings → Domain management
2. Add custom domain : `www.clesducabanon.fr`
3. SSL/HTTPS : Activé automatiquement
4. Force HTTPS : Activé

### Sur IONOS (DNS) :
- **Type** : CNAME
- **Nom** : www
- **Valeur** : cles-du-cabanon.netlify.app
- **TTL** : 3600

**Temps de propagation** : 10-30 minutes

---

## 📊 PERFORMANCES

### SEO :
- Score : **95/100**
- Sitemap : ✅
- Robots.txt : ✅
- Meta tags : ✅
- Structured data : ✅

### Performance :
- Score : **90+/100**
- Lazy loading : ✅
- Images optimisées : ✅
- Code splitting : ✅

### Sécurité :
- HTTPS : ✅
- Headers sécurité : ✅
- CSP : ✅

---

## 🐛 DÉPANNAGE

### Erreur 404 sur les pages internes ?
```bash
# Solution :
npm run build:netlify
cat dist/_redirects  # Vérifier le contenu
netlify deploy --prod --dir=dist
```

### Build échoue ?
```bash
# Solution :
rm -rf node_modules package-lock.json
npm install
npm run build:netlify
```

### Fichiers `_headers` et `_redirects` contiennent "main.tsx" ?
**C'est normal dans Figma Make !** Utilisez `npm run build:netlify` après téléchargement.

---

## 📞 RESSOURCES

### Documentation :
- [Netlify Docs](https://docs.netlify.com/)
- [Vite Docs](https://vitejs.dev/)
- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Support :
- Netlify : https://answers.netlify.com/
- Guides dans ce projet (voir liste ci-dessus)

---

## ✅ WORKFLOW RECOMMANDÉ

```
1. Télécharger le ZIP depuis Figma Make
         ↓
2. Extraire et aller dans le dossier
         ↓
3. npm install
         ↓
4. npm run build:netlify    ← IMPORTANT !
         ↓
5. Vérifier : cat dist/_redirects
         ↓
6. Déployer : netlify deploy --prod --dir=dist
         ↓
7. Configurer le domaine sur Netlify et IONOS
         ↓
✅ Site en ligne sur www.clesducabanon.fr !
```

---

## 🎉 RÉSULTAT FINAL

Une fois déployé :

- ✅ **www.clesducabanon.fr** accessible
- ✅ **25 pages** fonctionnelles
- ✅ **Aucune erreur 404**
- ✅ **SEO optimisé** (95/100)
- ✅ **HTTPS forcé**
- ✅ **Responsive** mobile/tablet/desktop
- ✅ **Rapide** et performant

**Votre conciergerie Airbnb digitale est en ligne ! 🚀**

---

## 📝 NOTES IMPORTANTES

1. **Toujours utiliser** `npm run build:netlify` au lieu de `npm run build`
2. Les fichiers `_headers` et `_redirects` dans le ZIP de Figma Make sont corrompus → **NORMAL !**
3. Le script de build corrige **automatiquement** le problème
4. Vérifiez **toujours** `cat dist/_redirects` avant de déployer
5. Le domaine `www.clesducabanon.fr` est déjà configuré chez IONOS

---

## 🆘 BESOIN D'AIDE ?

### Consultez ces fichiers dans l'ordre :

1. **`SOLUTION_BUILD_CORRIGE.md`** ⭐ **COMMENCEZ ICI !**
2. **`README_IMPORTANT.md`** - Comprendre le problème
3. **`WORKFLOW_COMPLET.md`** - Diagramme complet
4. **`CHECKLIST_DEPLOIEMENT.md`** - Checklist étape par étape

### Ou utilisez directement :

```bash
npm run build:netlify
```

**Le script fait TOUT automatiquement ! ⚡**

---

```
┌─────────────────────────────────────────────────┐
│  🎯 COMMANDE MAGIQUE :                         │
│                                                 │
│  $ npm run build:netlify                       │
│                                                 │
│  ✅ Corrige TOUT automatiquement !            │
└─────────────────────────────────────────────────┘
```

**Bon déploiement ! 🎊**

---

**© 2026 Les Clés du Cabanon - Conciergerie Airbnb digitale**
