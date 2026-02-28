# 🚀 GUIDE DE DÉPLOIEMENT IONOS

## ✅ FICHIERS CRÉÉS

J'ai ajouté deux fichiers pour que votre site fonctionne correctement sur IONOS :

1. **`/public/.htaccess`** → Configuration Apache pour IONOS
2. **`/public/_redirects`** → Configuration de secours

---

## 📦 ÉTAPE 1 : BUILDER VOTRE SITE

Dans votre terminal (sur votre ordinateur) :

```bash
npm run build
```

**Résultat** : Un dossier `dist/` sera créé avec tous vos fichiers prêts à être déployés.

---

## 📂 ÉTAPE 2 : STRUCTURE DU DOSSIER `dist/`

Après le build, vous devriez avoir :

```
dist/
├── index.html
├── robots.txt          ← IMPORTANT
├── sitemap.xml         ← IMPORTANT
├── .htaccess           ← IMPORTANT
├── assets/
│   ├── index-abc123.js
│   ├── index-def456.css
│   └── ...
└── autres fichiers...
```

**⚠️ VÉRIFIEZ** que `robots.txt`, `sitemap.xml` et `.htaccess` sont bien présents dans `dist/`

---

## 📤 ÉTAPE 3 : TÉLÉCHARGER LES FICHIERS SUR IONOS

### **Option A : Via l'interface IONOS (FACILE)**

1. Connectez-vous à votre **espace IONOS**
2. Allez dans **"Sites Web & Boutiques"**
3. Cliquez sur votre domaine `clesducabanon.fr`
4. Cliquez sur **"Gérer les fichiers"** ou **"File Manager"**
5. Vous verrez un dossier (probablement appelé `/` ou `/htdocs/`)
6. **SUPPRIMEZ** tous les anciens fichiers
7. **UPLOADEZ** tout le contenu du dossier `dist/` (pas le dossier lui-même, mais son contenu)

---

### **Option B : Via FTP (PLUS RAPIDE)**

#### **Qu'est-ce que FTP ?**

FTP = File Transfer Protocol = C'est comme un "Google Drive" pour envoyer des fichiers vers votre serveur web.

#### **1. Trouver vos identifiants FTP**

1. Connectez-vous à votre **espace IONOS**
2. Allez dans **"Sites Web & Boutiques"**
3. Cliquez sur **"Accès FTP"** ou **"FTP Access"**
4. Vous verrez :
   - **Serveur FTP** : ex. `ftp.clesducabanon.fr` ou `access123456789.webspace-data.io`
   - **Nom d'utilisateur** : ex. `u12345678`
   - **Mot de passe** : (celui que vous avez créé, ou à réinitialiser)

---

#### **2. Télécharger un logiciel FTP**

**Recommandation** : **FileZilla** (gratuit et simple)

📥 Téléchargez-le ici : https://filezilla-project.org/

---

#### **3. Se connecter avec FileZilla**

1. Ouvrez FileZilla
2. En haut, remplissez :
   - **Hôte** : `ftp.clesducabanon.fr` (ou l'adresse IONOS)
   - **Identifiant** : Votre nom d'utilisateur IONOS
   - **Mot de passe** : Votre mot de passe IONOS
   - **Port** : `21`
3. Cliquez **"Connexion rapide"**

---

#### **4. Uploader les fichiers**

Une fois connecté, vous verrez :

**Côté GAUCHE** : Votre ordinateur  
**Côté DROIT** : Votre serveur IONOS

1. **À GAUCHE** : Naviguez vers votre dossier `dist/`
2. **À DROITE** : Allez dans le dossier racine (souvent `/` ou `/htdocs/`)
3. **Sélectionnez TOUS les fichiers** dans `dist/` (à gauche)
4. **Faites glisser** vers la fenêtre de droite (ou clic droit → "Envoyer")

**⏱️ Temps estimé** : 2-5 minutes selon votre connexion

---

## ✅ ÉTAPE 4 : VÉRIFICATION

Une fois l'upload terminé, testez ces URLs :

### **Test 1 : Page d'accueil**
```
https://www.clesducabanon.fr/
```
**Résultat attendu** : Votre site React s'affiche ✅

---

### **Test 2 : Robots.txt**
```
https://www.clesducabanon.fr/robots.txt
```
**Résultat attendu** : Vous voyez le contenu texte du fichier robots.txt ✅

---

### **Test 3 : Sitemap**
```
https://www.clesducabanon.fr/sitemap.xml
```
**Résultat attendu** : Vous voyez du code XML avec vos 25 pages ✅

---

## ❌ SI ÇA NE MARCHE PAS

### **Problème 1 : "Not Found" pour sitemap.xml**

**Cause** : Le fichier n'a pas été uploadé

**Solution** :
1. Vérifiez que `sitemap.xml` est bien dans votre dossier `dist/` AVANT l'upload
2. Si non, relancez `npm run build`
3. Re-uploadez tous les fichiers

---

### **Problème 2 : Le site ne s'affiche pas du tout**

**Cause** : Les fichiers sont dans le mauvais dossier

**Solution** :
- Sur IONOS, les fichiers doivent être dans `/` ou `/htdocs/`
- Le fichier `index.html` doit être à la racine de ce dossier

**Structure CORRECTE sur IONOS** :
```
/htdocs/  (ou juste /)
├── index.html          ← À LA RACINE
├── robots.txt          ← À LA RACINE
├── sitemap.xml         ← À LA RACINE
├── .htaccess           ← À LA RACINE
├── assets/
│   └── ...
```

**Structure INCORRECTE** :
```
/htdocs/
└── dist/               ← MAUVAIS !
    ├── index.html
    └── ...
```

---

### **Problème 3 : Le sitemap affiche ma page d'accueil**

**Cause** : Le fichier `.htaccess` n'a pas été uploadé

**Solution** :
1. Vérifiez que `.htaccess` est visible dans votre logiciel FTP
2. Sur FileZilla, allez dans **"Serveur"** → **"Forcer l'affichage des fichiers cachés"**
3. Re-uploadez `.htaccess`

---

## 🎯 RÉCAPITULATIF

1. ✅ `npm run build` → Créer le dossier `dist/`
2. ✅ Uploader TOUT le contenu de `dist/` vers IONOS
3. ✅ Vérifier que `sitemap.xml`, `robots.txt` et `.htaccess` sont à la racine
4. ✅ Tester les 3 URLs
5. ✅ Soumettre le sitemap à Google Search Console

---

## 📞 BESOIN D'AIDE ?

Si ça ne fonctionne toujours pas après ces étapes, dites-moi :

1. **Avez-vous fait** `npm run build` ?
2. **Le fichier sitemap.xml existe-t-il** dans votre dossier `dist/` ?
3. **Avez-vous uploadé les fichiers** via FTP ou via l'interface IONOS ?
4. **Quelle structure de dossiers voyez-vous** dans FileZilla côté serveur ?

---

## 🚀 APRÈS LE DÉPLOIEMENT

Une fois que `https://www.clesducabanon.fr/sitemap.xml` fonctionne :

1. Retournez dans **Google Search Console**
2. Menu **"Sitemaps"**
3. Entrez : `sitemap.xml`
4. Cliquez **"Envoyer"**
5. Attendez 1-2 heures → Statut "Réussite" ✅

---

**Bonne chance ! 🎉**
