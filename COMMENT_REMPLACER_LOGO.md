# 🎨 COMMENT REMPLACER LE LOGO

## 📌 IMPORTANT

Le fichier `/public/logo.png` dans le ZIP contient un placeholder. 
**Vous DEVEZ le remplacer par votre vrai logo !**

---

## 🚀 ÉTAPE PAR ÉTAPE

### 1. Télécharger le ZIP depuis Figma Make

Cliquez sur "Download" pour télécharger le projet complet.

### 2. Extraire le ZIP

Extrayez le ZIP sur votre ordinateur dans un dossier de votre choix, par exemple :
- Windows : `C:\Users\VotreNom\Desktop\cles-du-cabanon\`
- Mac/Linux : `~/Desktop/cles-du-cabanon/`

### 3. Préparer votre logo

Votre fichier logo doit être :
- **Format** : PNG (de préférence avec fond transparent)
- **Nom** : `logo.png`
- **Dimensions recommandées** : 
  - **Minimum** : 200x200 pixels
  - **Idéal** : 512x512 pixels ou 1024x1024 pixels
  - **Format** : Carré ou circulaire
- **Poids** : Moins de 500 KB (optimisez si besoin avec TinyPNG.com)

### 4. Localiser le dossier `/public`

Dans le dossier extrait, allez dans :
```
cles-du-cabanon/
└── public/
    └── logo.png  ← Ce fichier à remplacer
```

### 5. Remplacer le fichier

**Méthode 1 : Glisser-déposer**
1. Ouvrez le dossier `/public/`
2. **Supprimez** le fichier `logo.png` existant
3. **Copiez** votre nouveau fichier `logo.png` dans ce dossier

**Méthode 2 : Copier-coller**
1. Renommez votre logo en `logo.png` (exactement, respect de la casse)
2. Copiez ce fichier
3. Allez dans `/public/`
4. Collez et remplacez l'ancien fichier

---

## ✅ VÉRIFICATION

### Vérifier que le fichier est bien remplacé :

**Windows :**
```
Clic droit sur logo.png → Propriétés
- Vérifiez la date de modification (doit être récente)
- Vérifiez la taille (ne doit pas être 0 Ko)
```

**Mac :**
```
Clic droit sur logo.png → Lire les informations
- Vérifiez la date de modification
- Vérifiez la taille
```

**Linux :**
```bash
ls -lh public/logo.png
# Devrait afficher la taille et la date
```

---

## 🔧 TEST LOCAL

### Tester que le logo s'affiche correctement :

```bash
# 1. Aller dans le dossier du projet
cd cles-du-cabanon

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Puis ouvrez : **http://localhost:3000**

### Vérifier :
- ✅ Le logo apparaît dans le header (en haut à gauche)
- ✅ Le logo apparaît dans le footer (en bas)
- ✅ Le logo est net et bien dimensionné
- ✅ Le logo n'est pas pixelisé

---

## 🎨 OPTIMISATION DU LOGO (OPTIONNEL)

Si votre logo est trop lourd (> 500 KB) :

### Option 1 : TinyPNG (recommandé)
1. Allez sur https://tinypng.com/
2. Uploadez votre `logo.png`
3. Téléchargez la version optimisée
4. Remplacez dans `/public/logo.png`

### Option 2 : Squoosh
1. Allez sur https://squoosh.app/
2. Uploadez votre `logo.png`
3. Ajustez la qualité (80-90%)
4. Téléchargez et remplacez

### Option 3 : Photoshop / GIMP
1. Ouvrez votre logo
2. Image → Taille de l'image → 512x512 px
3. Exportez en PNG
4. Qualité : Haute
5. Remplacez dans `/public/logo.png`

---

## 🚀 BUILD POUR NETLIFY

Une fois le logo remplacé et vérifié :

```bash
# Build du projet avec correction des fichiers Netlify
npm run build:netlify

# Vérifier que le logo est dans dist/
ls -la dist/logo.png  # (Mac/Linux)
dir dist\logo.png     # (Windows)
```

Le script de build copiera automatiquement votre logo dans le dossier `dist/`.

---

## 📦 DÉPLOIEMENT

```bash
# Option 1 : Netlify CLI
netlify deploy --prod --dir=dist

# Option 2 : Netlify Drop
# 1. Allez sur https://app.netlify.com/drop
# 2. Glissez le dossier dist/
```

Après le déploiement, vérifiez que votre logo s'affiche sur :
- ✅ https://www.clesducabanon.fr/ (header)
- ✅ Toutes les autres pages (header)
- ✅ Footer de toutes les pages

---

## 🎯 DIMENSIONS RECOMMANDÉES

### Header (desktop) :
- **Taille affichée** : 48x48 px
- **Taille source recommandée** : 512x512 px (pour retina displays)

### Header (mobile) :
- **Taille affichée** : 48x48 px

### Footer :
- **Taille affichée** : 40x40 px

**Note** : Le logo est automatiquement redimensionné par le CSS. Fournissez une version haute résolution (512x512 ou 1024x1024) pour une qualité optimale sur tous les écrans.

---

## 🐛 PROBLÈMES COURANTS

### Le logo ne s'affiche pas ?

**1. Vérifier le nom du fichier**
```
✅ Correct : logo.png
❌ Incorrect : Logo.png
❌ Incorrect : logo.PNG
❌ Incorrect : mon-logo.png
```

**2. Vérifier l'emplacement**
```
✅ Correct : /public/logo.png
❌ Incorrect : /src/assets/logo.png
❌ Incorrect : /logo.png (racine)
```

**3. Vérifier que le fichier n'est pas corrompu**
```bash
# Essayez d'ouvrir le fichier avec une visionneuse d'images
# S'il ne s'ouvre pas, le fichier est corrompu
```

**4. Vider le cache du navigateur**
```
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

---

## 📝 CHECKLIST FINALE

Avant de déployer, vérifiez :

- [ ] Logo remplacé dans `/public/logo.png`
- [ ] Nom exact : `logo.png` (minuscules)
- [ ] Format PNG avec fond transparent
- [ ] Dimensions min 200x200, idéal 512x512
- [ ] Poids < 500 KB
- [ ] Test local réussi (`npm run dev`)
- [ ] Logo visible dans header
- [ ] Logo visible dans footer
- [ ] Build réussi (`npm run build:netlify`)
- [ ] Logo présent dans `dist/logo.png`
- [ ] Déployé sur Netlify
- [ ] Logo visible sur le site en production

---

## 🎉 TERMINÉ !

Votre logo est maintenant intégré partout sur votre site :
- ✅ Header (toutes les pages)
- ✅ Footer (toutes les pages)
- ✅ SEO meta tags (logo.png référencé)
- ✅ Open Graph pour réseaux sociaux
- ✅ Responsive sur tous les appareils

**Votre site Les Clés du Cabanon est prêt ! 🚀**

---

## 📞 BESOIN D'AIDE ?

Si vous rencontrez des difficultés :
1. Vérifiez que le fichier s'appelle exactement `logo.png`
2. Vérifiez qu'il est bien dans `/public/logo.png`
3. Essayez de vider le cache du navigateur
4. Relancez `npm run dev` après le remplacement

Le logo DOIT être au format PNG et se nommer exactement `logo.png` !
