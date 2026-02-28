# 🚀 GUIDE COMPLET DÉPLOIEMENT NETLIFY - LES CLÉS DU CABANON

## 🚨 PROBLÈME : Ancienne version affichée après déploiement

### Causes possibles :
1. ❌ **Cache navigateur** (le plus fréquent)
2. ❌ **Cache CDN Netlify**
3. ❌ **Build incomplet ou ancien**
4. ❌ **Assets non mis à jour**

---

## ✅ SOLUTION COMPLÈTE - ÉTAPE PAR ÉTAPE

### **ÉTAPE 1 : BUILD LOCAL CORRECT**

#### 1.1 - Téléchargez le code depuis Figma Make
```bash
# Vous obtenez un fichier ZIP
clesducabanon-project.zip
```

#### 1.2 - Décompressez et ouvrez le dossier
```bash
cd clesducabanon-project
```

#### 1.3 - Installez les dépendances
```bash
npm install
# OU
pnpm install
```

#### 1.4 - BUILD en production
```bash
npm run build
# OU
pnpm build
```

#### 1.5 - Vérifiez le dossier `dist/`
```bash
dist/
├── index.html
├── assets/
│   ├── index-XXXXX.js
│   ├── index-XXXXX.css
│   └── ... (tous vos fichiers compilés)
└── ... (autres fichiers statiques)
```

✅ **Le dossier `dist/` doit contenir TOUS vos fichiers buildés**

---

### **ÉTAPE 2 : DÉPLOIEMENT SUR NETLIFY**

#### Option A : **Drag & Drop (Manuel)**

1. Allez sur **Netlify Dashboard**
2. Cliquez sur votre site **"clesducabanon"**
3. Onglet **"Deploys"**
4. **⚠️ AVANT DE DRAG & DROP :**
   - Cliquez sur **"Trigger deploy"**
   - Sélectionnez **"Clear cache and deploy site"**
5. **Drag & Drop le dossier `dist/`** (PAS le dossier racine !)

#### Option B : **Netlify CLI (Recommandé)**

```bash
# Installez Netlify CLI
npm install -g netlify-cli

# Connectez-vous
netlify login

# Déployez en forçant le cache clear
netlify deploy --prod --dir=dist

# Ou avec clear cache explicite
netlify deploy --prod --dir=dist --force
```

---

### **ÉTAPE 3 : CLEAR LE CACHE NETLIFY**

#### Sur le Dashboard Netlify :

1. **Site settings** → **Build & deploy**
2. **Post processing** → **Asset optimization**
3. **Désactivez temporairement :**
   - ❌ Bundle CSS
   - ❌ Minify CSS
   - ❌ Minify JS
   - ❌ Pretty URLs
4. **Sauvegardez**
5. **Retournez dans "Deploys"**
6. **Cliquez sur "Trigger deploy" → "Clear cache and deploy site"**

---

### **ÉTAPE 4 : CLEAR LE CACHE NAVIGATEUR**

#### Chrome / Edge / Brave :
```
Windows : Ctrl + Shift + R
Mac : Cmd + Shift + R
```

#### Firefox :
```
Windows : Ctrl + F5
Mac : Cmd + Shift + R
```

#### Safari :
```
Mac : Cmd + Option + R
```

#### OU : Navigation privée
```
Chrome : Ctrl/Cmd + Shift + N
Firefox : Ctrl/Cmd + Shift + P
```

---

## 🔍 VÉRIFICATION QUE ÇA FONCTIONNE

### 1. **Inspectez le code source**
```
Clic droit → "Afficher le code source de la page"
Cherchez vos modifications récentes (ex: "+33" dans le numéro)
```

### 2. **Vérifiez les headers HTTP**
```
F12 → Network → Rechargez la page
Cliquez sur le fichier index.html
Headers → Response Headers
```

Cherchez :
```
cache-control: public, max-age=0, must-revalidate
```

### 3. **Vérifiez les assets**
```
F12 → Network
Regardez les fichiers .js et .css
Vérifiez qu'ils ont un nouveau hash (ex: index-ABC123.js)
```

---

## 🚨 SI ÇA NE FONCTIONNE TOUJOURS PAS

### **SOLUTION RADICALE : REDÉPLOIEMENT COMPLET**

#### 1. Supprimez le site actuel sur Netlify
```
Site settings → Danger Zone → Delete this site
```

#### 2. Créez un nouveau site
```
Netlify Dashboard → Add new site → Deploy manually
```

#### 3. Drag & Drop votre dossier `dist/`

#### 4. Configurez votre domaine personnalisé
```
Domain management → Add custom domain
→ www.clesducabanon.fr
```

#### 5. Configurez le DNS chez IONOS
```
Type: CNAME
Nom: www
Valeur: votre-site.netlify.app
```

---

## ⚙️ CONFIGURATION NETLIFY OPTIMALE

### Créez un fichier `netlify.toml` à la racine :

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## 🎯 CHECKLIST DÉPLOIEMENT

### Avant déploiement :
- [ ] Code téléchargé depuis Figma Make
- [ ] Dépendances installées (`npm install`)
- [ ] Build réussi (`npm run build`)
- [ ] Dossier `dist/` généré et complet
- [ ] Fichiers vérifiés dans `dist/`

### Pendant déploiement :
- [ ] Cache Netlify clearé
- [ ] Dossier `dist/` uploadé (PAS le dossier racine)
- [ ] Déploiement terminé sans erreurs
- [ ] URL Netlify accessible

### Après déploiement :
- [ ] Cache navigateur clearé (Ctrl+Shift+R)
- [ ] Navigation privée testée
- [ ] Code source vérifié
- [ ] Numéro (+33) visible
- [ ] Taux d'occupation à 62%
- [ ] Logo visible dans header/footer

---

## 📋 FICHIERS À VÉRIFIER APRÈS BUILD

### Dans `dist/index.html` :
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Les Clés du Cabanon</title>
  <link rel="stylesheet" href="/assets/index-XXXXX.css">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index-XXXXX.js"></script>
</body>
</html>
```

### Dans `dist/assets/` :
- ✅ Fichiers JS avec hash (index-ABC123.js)
- ✅ Fichiers CSS avec hash (index-DEF456.css)
- ✅ Images/SVG si utilisés
- ✅ Fonts si utilisées

---

## 🔧 COMMANDES UTILES

### Clear cache complet :
```bash
# Clear cache navigateur
Ctrl + Shift + Delete → "Tout l'historique" → Cocher tout

# Clear cache Netlify CLI
netlify deploy --prod --dir=dist --force

# Clear cache DNS (si domaine personnalisé)
ipconfig /flushdns (Windows)
sudo dscacheutil -flushcache (Mac)
```

### Vérifier le déploiement :
```bash
# Voir les logs de déploiement
netlify logs

# Tester en local avant déploiement
npm run preview
# Puis ouvrir http://localhost:4173
```

---

## 🌐 CONFIGURATION DNS IONOS

### Pour www.clesducabanon.fr :

#### Type de DNS :
```
Type: CNAME
Nom: www
Valeur: votre-site.netlify.app
TTL: 3600
```

#### Redirection racine (optionnel) :
```
Type: A
Nom: @
Valeur: 75.2.60.5 (Load Balancer Netlify)
```

---

## ✅ RÉSULTAT ATTENDU

Après toutes ces étapes, vous devriez voir :

### Sur www.clesducabanon.fr :
- ✅ Numéro : **(+33) 6 25 40 14 80**
- ✅ Taux d'occupation moyen : **62%**
- ✅ Logo turquoise dans header/footer
- ✅ Couleurs teal/jaune partout
- ✅ 543 clients (353 métropole + 190 DOM-TOM)
- ✅ 36 pages fonctionnelles
- ✅ SEO 98-100/100

---

## 🆘 SUPPORT EN CAS DE PROBLÈME

### Si l'ancienne version persiste :

1. **Vérifiez que vous uploadez le BON dossier**
   - ✅ Uploadez `dist/` (le dossier buildé)
   - ❌ PAS le dossier racine du projet

2. **Vérifiez la date de build**
   ```
   Netlify Dashboard → Deploys → Dernière date
   ```
   Doit être APRÈS vos modifications

3. **Inspectez le code source**
   ```
   Clic droit → Code source
   Cherchez "(+33)" dans la page
   ```
   Si vous ne le trouvez pas → c'est l'ancienne version

4. **Testez depuis un autre appareil**
   - Smartphone
   - Tablette
   - Ordinateur collègue

5. **Attendez la propagation DNS**
   - Si domaine personnalisé : 1-48h
   - Si URL Netlify (.netlify.app) : instantané

---

## 🎯 COMMANDE ULTIME (SI VRAIMENT RIEN NE MARCHE)

### Déploiement en mode "force" :

```bash
# 1. Clear tout local
rm -rf dist node_modules

# 2. Réinstallez
npm install

# 3. Rebuild
npm run build

# 4. Déployez avec force
netlify deploy --prod --dir=dist --force

# 5. Clear cache Netlify
# (depuis le dashboard)

# 6. Testez en navigation privée
```

---

## 📊 STATISTIQUES APRÈS DÉPLOIEMENT

### Vous devriez voir :

#### **Page Nos Zones :**
- 🗼 Paris : **71%**
- 🛩️ Toulouse : **68%**
- 🍷 Bordeaux : **67%**
- 🌊 Nice : **67%**
- ⛵ Marseille : **66%**
- 🏰 Nantes : **65%**
- 🏔️ Lyon : **63%**
- 🌺 Martinique : **61%**
- 🐬 Mayotte : **57%**
- 🏝️ Guadeloupe : **52%**
- 🌋 Réunion : **49%**
- 🌿 Guyane : **42%**

#### **Moyenne globale : 62%**

#### **Répartition clients :**
- Métropole : 353 (65%)
- DOM-TOM : 190 (35%)
- **Total : 543**

---

## ✨ CONCLUSION

**Problème cache = Solution clear cache !**

1. ✅ Clear cache Netlify
2. ✅ Clear cache navigateur
3. ✅ Vérifier le bon dossier uploadé
4. ✅ Tester en navigation privée

**Si ça ne marche toujours pas :**
- Supprimez et recréez le site Netlify
- Contactez le support Netlify
- Vérifiez que le build est bien complet

**Votre site est prêt, c'est juste un problème de cache ! 🚀**
