# 🎯 GUIDE ULTRA-SIMPLE : CORRECTION APRÈS TÉLÉCHARGEMENT

## ⚠️ IMPORTANT À COMPRENDRE

**Le problème NE PEUT PAS être corrigé dans Figma Make !**

Figma Make a un bug avec les fichiers qui commencent par `_` (underscore).  
Il crée des DOSSIERS au lieu de FICHIERS.

**Vous DEVEZ corriger manuellement après avoir téléchargé le projet !**

---

## 📥 ÉTAPE 1 : TÉLÉCHARGER LE PROJET

1. Dans Figma Make, cliquez sur **"Download"** ou **"Export"**
2. Vous obtenez un fichier ZIP : `cles-du-cabanon.zip`
3. **Extrayez le ZIP** sur votre ordinateur

---

## 🗑️ ÉTAPE 2 : SUPPRIMER LES DOSSIERS CORROMPUS

### Sur Mac/Linux :

Ouvrez le Terminal et tapez :

```bash
# Aller dans le dossier du projet
cd /chemin/vers/cles-du-cabanon

# Supprimer les dossiers problématiques
rm -rf public/_headers
rm -rf public/_redirects

# Vérifier qu'ils sont bien supprimés
ls -la public/
```

### Sur Windows (PowerShell) :

Ouvrez PowerShell et tapez :

```powershell
# Aller dans le dossier du projet
cd C:\chemin\vers\cles-du-cabanon

# Supprimer les dossiers problématiques
Remove-Item -Recurse -Force public\_headers
Remove-Item -Recurse -Force public\_redirects

# Vérifier qu'ils sont bien supprimés
Get-ChildItem public\
```

### Ou manuellement (si vous préférez) :

1. Ouvrez le dossier `cles-du-cabanon` dans l'explorateur de fichiers
2. Allez dans le dossier `public/`
3. **Supprimez** le dossier `_headers` (dossier entier)
4. **Supprimez** le dossier `_redirects` (dossier entier)

---

## ✍️ ÉTAPE 3 : CRÉER LES BONS FICHIERS

### Méthode A : Utiliser le script automatique (RECOMMANDÉ)

```bash
# Mac/Linux
bash fix-netlify-files.sh

# Windows PowerShell
.\fix-netlify-files.ps1
```

**Le script fait TOUT automatiquement !** ✨

---

### Méthode B : Créer manuellement avec Terminal/PowerShell

#### Sur Mac/Linux :

```bash
# Créer _redirects
echo "/*    /index.html   200" > public/_redirects

# Créer _headers
cat > public/_headers << 'EOF'
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
EOF

# Vérifier
cat public/_redirects
cat public/_headers
```

#### Sur Windows PowerShell :

```powershell
# Créer _redirects
"/*    /index.html   200" | Out-File -FilePath public\_redirects -Encoding ASCII -NoNewline

# Créer _headers
@"
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
"@ | Out-File -FilePath public\_headers -Encoding ASCII

# Vérifier
Get-Content public\_redirects
Get-Content public\_headers
```

---

### Méthode C : Créer manuellement avec Notepad++/VSCode

#### Fichier 1 : _redirects

1. Ouvrez **Notepad++** ou **VSCode**
2. Créez un **nouveau fichier**
3. Copiez-collez EXACTEMENT cette ligne :
   ```
   /*    /index.html   200
   ```
4. **Enregistrer sous** :
   - Emplacement : `public/`
   - Nom du fichier : `_redirects` (sans extension !)
   - Type de fichier : **"Tous les fichiers (*.*)"**
   - Encodage : **UTF-8** ou **ASCII**
5. Cliquez sur **"Enregistrer"**

#### Fichier 2 : _headers

1. Ouvrez **Notepad++** ou **VSCode**
2. Créez un **nouveau fichier**
3. Copiez-collez EXACTEMENT ce contenu :
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
4. **Enregistrer sous** :
   - Emplacement : `public/`
   - Nom du fichier : `_headers` (sans extension !)
   - Type de fichier : **"Tous les fichiers (*.*)"**
   - Encodage : **UTF-8** ou **ASCII**
5. Cliquez sur **"Enregistrer"**

---

### Méthode D : Copier les fichiers de référence

J'ai créé deux fichiers de référence pour vous :

```bash
# Copier les fichiers de référence
cp public/netlify-redirects public/_redirects
cp public/netlify-headers public/_headers

# Vérifier
cat public/_redirects
cat public/_headers
```

---

## 🔍 ÉTAPE 4 : VÉRIFIER

### Vérification 1 : Ce sont bien des FICHIERS (pas des dossiers)

```bash
# Mac/Linux
file public/_redirects
# ✅ Devrait afficher : "ASCII text"
# ❌ NE DOIT PAS afficher : "directory"

file public/_headers
# ✅ Devrait afficher : "ASCII text"
# ❌ NE DOIT PAS afficher : "directory"
```

```powershell
# Windows PowerShell
Get-Item public\_redirects | Select-Object Mode
# ✅ Devrait afficher : "-a----" (fichier)
# ❌ NE DOIT PAS afficher : "d-----" (dossier)

Get-Item public\_headers | Select-Object Mode
# ✅ Devrait afficher : "-a----" (fichier)
# ❌ NE DOIT PAS afficher : "d-----" (dossier)
```

### Vérification 2 : Le contenu est correct

```bash
# Vérifier _redirects
cat public/_redirects
# ✅ Devrait afficher : /*    /index.html   200
# ❌ NE DOIT PAS contenir : "main.tsx" ou autre chose

# Vérifier _headers
cat public/_headers
# ✅ Devrait afficher le contenu des headers HTTP
# ❌ NE DOIT PAS contenir : "main.tsx"
```

### Vérification 3 : Build et vérification de dist/

```bash
# Installer les dépendances
npm install

# Build
npm run build

# Vérifier que les fichiers sont copiés dans dist/
ls -la dist/ | grep "_"

# Vérifier le contenu de dist/_redirects
cat dist/_redirects
# ✅ DOIT afficher : /*    /index.html   200
# ❌ NE DOIT PAS contenir : "main.tsx"
```

---

## ✅ RÉSUMÉ EN 4 ÉTAPES

```
1. Télécharger le ZIP depuis Figma Make
         ↓
2. Supprimer public/_headers et public/_redirects (dossiers)
         ↓
3. Créer public/_redirects et public/_headers (fichiers)
         ↓
4. npm run build + vérifier dist/
         ↓
   PRÊT POUR NETLIFY ! ✅
```

---

## 🚀 DÉPLOIEMENT APRÈS CORRECTION

Une fois que `npm run build` a réussi et que `cat dist/_redirects` affiche le bon contenu :

```bash
# Option 1 : Netlify Drop
# Allez sur https://app.netlify.com/drop
# Glissez le dossier dist/

# Option 2 : Netlify CLI
netlify deploy --prod --dir=dist
```

---

## 🎯 CHECKLIST FINALE

Avant de déployer, vérifiez :

- [ ] Projet téléchargé depuis Figma Make
- [ ] ZIP extrait sur mon ordinateur
- [ ] Dossiers `public/_headers` et `public/_redirects` supprimés
- [ ] Fichiers `public/_redirects` et `public/_headers` créés
- [ ] `file public/_redirects` affiche "ASCII text"
- [ ] `cat public/_redirects` affiche `/*    /index.html   200`
- [ ] `npm install` réussi
- [ ] `npm run build` réussi
- [ ] `cat dist/_redirects` affiche `/*    /index.html   200`
- [ ] Aucun fichier `main.tsx` dans `dist/_redirects` ou `dist/_headers`
- [ ] Prêt à déployer sur Netlify !

---

## 📞 RÉSUMÉ DU PROBLÈME

**Dans Figma Make :**
- ❌ Je ne peux PAS créer de vrais fichiers `_headers` et `_redirects`
- ❌ Figma Make crée des dossiers au lieu de fichiers
- ❌ Ces dossiers contiennent un fichier `main.tsx`

**Sur votre ordinateur (après téléchargement) :**
- ✅ VOUS pouvez supprimer les dossiers
- ✅ VOUS pouvez créer les vrais fichiers
- ✅ Le script `fix-netlify-files.sh` fait TOUT automatiquement

---

## ✨ NE VOUS INQUIÉTEZ PAS !

C'est **NORMAL** que les fichiers soient corrompus dans le ZIP téléchargé depuis Figma Make.

**C'est un bug de Figma Make, pas de votre site !**

Suivez simplement les étapes ci-dessus après avoir téléchargé le ZIP, et tout fonctionnera parfaitement ! 🚀

---

**La correction prend 2 minutes avec le script automatique ! ⚡**

```bash
bash fix-netlify-files.sh
```

**C'est tout ! 🎉**
