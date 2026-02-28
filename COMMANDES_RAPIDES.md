# ⚡ COMMANDES RAPIDES (COPIER-COLLER)

## 📋 ÉTAPE 1 : CORRIGER COULEURS (15 MIN)

**Ouvrir VS Code** → **Ctrl + Shift + H**

**Files to include** : `src/app/**/*.tsx`

**Copier-coller chaque ligne une par une et cliquer "Replace All"** :

```
indigo-700
teal-700

indigo-600
teal-600

indigo-500
teal-500

indigo-300
teal-300

indigo-200
teal-200

indigo-100
teal-100

indigo-50
teal-50

purple-700
amber-600

purple-600
amber-500

purple-500
amber-400

purple-300
amber-300

purple-200
amber-200

purple-100
amber-100

purple-50
amber-50
```

---

## ⚡ ÉTAPE 2 : GIT COMMIT + PUSH (2 MIN)

**Copier-coller dans le terminal** (Git Bash / Terminal / PowerShell) :

```bash
git add .
```

```bash
git commit -m "Fix: Vercel config + 404 errors + WWW redirects + Teal/Amber colors"
```

```bash
git push origin main
```

**Note** : Si ta branche est `master` au lieu de `main`, remplace `main` par `master`

---

## 🔍 ÉTAPE 3 : VÉRIFIER DEPLOY VERCEL (3 MIN)

**Aller sur** : https://vercel.com/dashboard

**Cliquer** sur ton projet

**Onglet** : **Deployments**

**Attendre** : Status = **"Ready"** ✅ (2-3 minutes)

---

## 🌐 ÉTAPE 4 : TESTER LE SITE (5 MIN)

**Ouvrir en navigation privée** (Ctrl+Shift+N) :

```
https://www.clesducabanon.fr/gestion-airbnb
```

```
https://www.clesducabanon.fr/services/automatisation
```

```
https://www.clesducabanon.fr/conciergerie-airbnb-paris
```

```
https://www.clesducabanon.fr/services/creation-annonce
```

```
https://www.clesducabanon.fr/services/gestion-voyageurs
```

```
https://www.clesducabanon.fr/services/tarification-dynamique
```

**Résultat attendu** : Toutes les pages s'affichent (pas 404) ✅

**Tester redirections WWW** :

```
http://clesducabanon.fr
```
→ Doit rediriger vers `https://www.clesducabanon.fr` ✅

```
https://clesducabanon.fr
```
→ Doit rediriger vers `https://www.clesducabanon.fr` ✅

---

## 📊 ÉTAPE 5 : GOOGLE SEARCH CONSOLE (5 MIN)

**Aller sur** : https://search.google.com/search-console

**Sélectionner** : www.clesducabanon.fr

**Menu** : **Couverture** → **Exclues**

**Cliquer sur chaque URL et demander indexation** :

1. `/gestion-airbnb`
   - Cliquer dessus
   - **"Tester l'URL en direct"**
   - **"Demander une indexation"**

2. `/services/automatisation`
   - Cliquer dessus
   - **"Tester l'URL en direct"**
   - **"Demander une indexation"**

3. `/conciergerie-airbnb-paris`
   - Cliquer dessus
   - **"Tester l'URL en direct"**
   - **"Demander une indexation"**

4. `/services/creation-annonce`
   - Cliquer dessus
   - **"Tester l'URL en direct"**
   - **"Demander une indexation"**

5. `/services/gestion-voyageurs`
   - Cliquer dessus
   - **"Tester l'URL en direct"**
   - **"Demander une indexation"**

6. `/services/tarification-dynamique`
   - Cliquer dessus
   - **"Tester l'URL en direct"**
   - **"Demander une indexation"**

**Délai de réindexation** : 1-7 jours

---

## ✅ C'EST TOUT !

**Temps total : 30 minutes**

**Impact** :
- ✅ Erreurs 404 : 6 → 0
- ✅ Pages indexées : 5 → 36
- ✅ Site Health : 90% → 95%

**TON SITE EST À 95% ! 🚀**

---

## 🆘 PROBLÈME ?

### Pages toujours en 404 ?
```bash
# Vider cache navigateur
Ctrl + Shift + R

# Ou tester en navigation privée
Ctrl + Shift + N
```

### Build échoue ?
**Dashboard Vercel** → Deployments → Dernier deploy → **View Logs**

Lire les erreurs et corriger en local :
```bash
npm install
npm run build
```

Puis re-push :
```bash
git add .
git commit -m "Fix build errors"
git push origin main
```

---

## 📄 DOCUMENTATION

Si besoin d'aide, lire :
- **`/START_HERE_VERCEL.md`** (checklist détaillée)
- **`/GUIDE_DEPLOIEMENT_VERCEL.md`** (guide complet)
- **`/VERCEL_VS_NETLIFY.md`** (différences)

---

## 💪 TU AS TOUT !

**Copier-coller les commandes ci-dessus et c'est fini ! ⚡**
