# 🚀 DÉPLOIEMENT RAPIDE - LES CLÉS DU CABANON

## 🎯 PROBLÈME : Ancienne version affichée sur Netlify ?

### ✅ SOLUTION EXPRESS (3 étapes)

#### 1️⃣ **Clear le cache Netlify**
- Allez sur votre **Dashboard Netlify**
- Cliquez sur **"Deploys"**
- **"Trigger deploy"** → **"Clear cache and deploy site"**

#### 2️⃣ **Clear le cache navigateur**
```
Windows : Ctrl + Shift + R
Mac : Cmd + Shift + R
```

#### 3️⃣ **Testez en navigation privée**
```
Windows : Ctrl + Shift + N
Mac : Cmd + Shift + N
```

---

## 🏗️ DÉPLOIEMENT COMPLET

### Méthode 1 : Scripts automatisés (RECOMMANDÉ)

#### Sur Linux/Mac :
```bash
chmod +x deploy.sh
./deploy.sh
```

#### Sur Windows :
```powershell
.\deploy.ps1
```

Ces scripts font automatiquement :
- ✅ Vérification Node.js
- ✅ Installation dépendances
- ✅ Build production
- ✅ Vérification fichiers
- ✅ Instructions de déploiement

---

### Méthode 2 : Manuellement

#### Étape 1 : Installation
```bash
npm install
```

#### Étape 2 : Build
```bash
npm run build
```

#### Étape 3 : Vérification
```bash
# Le dossier dist/ doit contenir :
dist/
├── index.html
├── assets/
│   ├── index-XXXXX.js
│   └── index-XXXXX.css
└── ... (autres fichiers)
```

#### Étape 4 : Déploiement

**Option A : Netlify CLI**
```bash
# Installer CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod --dir=dist
```

**Option B : Drag & Drop**
1. Allez sur [app.netlify.com](https://app.netlify.com)
2. Ouvrez votre site
3. Onglet **"Deploys"**
4. **Clear cache** : "Trigger deploy" → "Clear cache and deploy site"
5. **Drag & Drop** le dossier `dist/` ⚠️ (PAS le dossier racine !)

---

## ⚠️ IMPORTANT : QUE DÉPLOYER ?

### ✅ À DÉPLOYER :
```
dist/              ← Ce dossier UNIQUEMENT
├── index.html
├── assets/
└── ...
```

### ❌ NE PAS DÉPLOYER :
```
src/               ← Code source (non compilé)
node_modules/      ← Dépendances
public/            ← Fichiers sources
```

---

## 🔧 CONFIGURATION NETLIFY

### Fichiers déjà configurés :
- ✅ `netlify.toml` - Configuration Netlify
- ✅ `.nvmrc` - Version Node.js (20)
- ✅ `deploy.sh` - Script Linux/Mac
- ✅ `deploy.ps1` - Script Windows

### Settings recommandés :

#### Build settings :
```
Build command: npm run build
Publish directory: dist
```

#### Node version :
```
NODE_VERSION=20
```

---

## 🌐 DOMAINE PERSONNALISÉ

### Votre domaine : `www.clesducabanon.fr`

#### Configuration DNS chez IONOS :
```
Type: CNAME
Nom: www
Valeur: votre-site.netlify.app
TTL: 3600
```

#### Configuration Netlify :
1. **Domain management**
2. **Add custom domain**
3. Entrez : `www.clesducabanon.fr`
4. Vérifiez le DNS

---

## 🐛 DÉPANNAGE

### Problème : Ancienne version affichée

#### Solution 1 : Clear cache complet
```bash
# 1. Sur Netlify
Dashboard → Deploys → Trigger deploy → Clear cache

# 2. Dans votre navigateur
Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)

# 3. Testez en navigation privée
Ctrl+Shift+N (Windows) ou Cmd+Shift+N (Mac)
```

#### Solution 2 : Vérifier le build
```bash
# Vérifiez que dist/ contient vos modifications
cat dist/index.html | grep "(+33)"

# Si vous ne voyez pas (+33), rebuild :
rm -rf dist
npm run build
```

#### Solution 3 : Redéploiement forcé
```bash
# Avec Netlify CLI
netlify deploy --prod --dir=dist --force

# Ou supprimez et recréez le site sur Netlify
```

---

### Problème : Erreur de build

#### Vérifiez Node.js :
```bash
node --version  # Doit être >= 18
npm --version   # Doit être >= 9
```

#### Vérifiez les dépendances :
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

### Problème : Domaine ne fonctionne pas

#### Vérifiez le DNS :
```bash
# Windows
nslookup www.clesducabanon.fr

# Mac/Linux
dig www.clesducabanon.fr
```

#### Attendez la propagation :
- DNS peut prendre **1 à 48h** pour se propager
- Testez avec l'URL Netlify en attendant : `votre-site.netlify.app`

---

## ✅ CHECKLIST POST-DÉPLOIEMENT

Vérifiez que ces éléments sont bien affichés :

### Header/Footer :
- [ ] Logo turquoise visible
- [ ] Numéro : `(+33) 6 25 40 14 80`
- [ ] Navigation fonctionnelle

### Page Nos Zones :
- [ ] 543 clients (353 métropole + 190 DOM-TOM)
- [ ] Taux moyen : **62%**
- [ ] 12 régions affichées

### Taux par ville :
- [ ] Paris : **71%**
- [ ] Toulouse : **68%**
- [ ] Bordeaux : **67%**
- [ ] Nice : **67%**
- [ ] Marseille : **66%**
- [ ] Nantes : **65%**
- [ ] Lyon : **63%**
- [ ] Martinique : **61%**
- [ ] Mayotte : **57%**
- [ ] Guadeloupe : **52%**
- [ ] Réunion : **49%**
- [ ] Guyane : **42%**

### Couleurs :
- [ ] Couleurs teal/turquoise partout
- [ ] Accents jaune
- [ ] Plus de violet/indigo

### Performance :
- [ ] Score SEO 98-100/100
- [ ] Toutes les pages chargent
- [ ] Pas d'erreurs console

---

## 📞 CONTACT & SUPPORT

### Site web :
- Production : `https://www.clesducabanon.fr`
- Netlify : `https://votre-site.netlify.app`

### Hébergement :
- **Domaine** : IONOS (www.clesducabanon.fr)
- **Hébergement** : Netlify
- **Framework** : React + Vite + Tailwind CSS v4

---

## 🎉 FÉLICITATIONS !

Votre site est maintenant déployé avec :
- ✅ Taux d'occupation réalistes (62% moyenne)
- ✅ Préfixe international (+33) pour DOM-TOM
- ✅ Logo turquoise intégré
- ✅ Couleurs teal/jaune cohérentes
- ✅ 36 pages optimisées SEO
- ✅ Données clients exactes (543 total)

**Bon lancement ! 🚀**
