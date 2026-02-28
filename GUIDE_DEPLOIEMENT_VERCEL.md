# 🚀 GUIDE DÉPLOIEMENT VERCEL (CONNEXION GITHUB)

## ✅ CONFIGURATION CORRIGÉE

### Fichier `/vercel.json` mis à jour avec :

1. ✅ **Redirections WWW permanentes (301)**
   - `http://clesducabanon.fr` → `https://www.clesducabanon.fr`
   - `https://clesducabanon.fr` → `https://www.clesducabanon.fr`

2. ✅ **Rewrites pour React Router (SPA)**
   - Toutes les routes passent par `/index.html`
   - Fichiers statiques servis directement (`sitemap.xml`, `robots.txt`)

3. ✅ **Headers de sécurité**
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `X-XSS-Protection: 1; mode=block`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy` (géolocalisation, micro, caméra désactivés)

4. ✅ **Headers de cache optimisés**
   - HTML : `max-age=0` (toujours frais)
   - Assets : `max-age=31536000, immutable` (1 an de cache)
   - Sitemap : `max-age=3600` (1 heure)
   - Robots : `max-age=86400` (24 heures)

---

## ⚠️ FICHIERS À IGNORER SUR VERCEL

Ces fichiers sont **IGNORÉS** par Vercel (spécifiques à Netlify) :

- ❌ `/public/_redirects` → Inutile sur Vercel
- ❌ `/public/_headers` → Inutile sur Vercel
- ❌ `/netlify.toml` → Inutile sur Vercel

**Tu peux les supprimer ou les garder** (Vercel les ignore de toute façon).

---

## 🔧 CONFIGURATION VERCEL (DASHBOARD)

### 1. Vérifier les paramètres du projet

**Aller sur** : https://vercel.com/dashboard → Ton projet → **Settings**

#### Build & Development Settings
```
Framework Preset      : Vite
Build Command         : npm run build
Output Directory      : dist
Install Command       : npm install
```

#### Root Directory
```
Root Directory        : ./
```

#### Node.js Version
```
Node.js Version       : 18.x (ou 20.x)
```

---

### 2. Configurer le domaine personnalisé

**Aller sur** : Settings → **Domains**

#### Ajouter ton domaine
```
1. Cliquer "Add"
2. Entrer : www.clesducabanon.fr
3. Valider

4. Cliquer "Add" à nouveau
5. Entrer : clesducabanon.fr
6. Cocher "Redirect to www.clesducabanon.fr"
7. Valider
```

#### Configuration DNS chez IONOS

**Tu dois configurer** :

1. **Record A** pour `clesducabanon.fr` :
   ```
   Type : A
   Name : @
   Value : 76.76.21.21
   ```

2. **Record CNAME** pour `www.clesducabanon.fr` :
   ```
   Type : CNAME
   Name : www
   Value : cname.vercel-dns.com.
   ```

**Délai de propagation** : 1-24 heures

---

### 3. Configurer les variables d'environnement (si besoin)

**Aller sur** : Settings → **Environment Variables**

Si tu utilises des clés API :
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

---

## 🚀 DÉPLOIEMENT AUTOMATIQUE (GITHUB)

### Comment ça marche

1. **Tu push sur GitHub** :
   ```bash
   git add .
   git commit -m "Fix 404 errors + redirections WWW"
   git push origin main
   ```

2. **Vercel détecte automatiquement** le push

3. **Build automatique** sur Vercel :
   - Install : `npm install`
   - Build : `npm run build`
   - Deploy : Mise en ligne automatique

4. **Déploiement en ligne** en 2-3 minutes

---

## 🔍 VÉRIFIER LE DÉPLOIEMENT

### 1. Vérifier le build Vercel

**Aller sur** : https://vercel.com/dashboard → Ton projet → **Deployments**

Tu dois voir :
```
✅ main - Ready
   Build Time: 1m 30s
   Status: Ready
```

Si erreur :
```
❌ main - Failed
   Build logs → Voir les erreurs
```

### 2. Tester les pages 404

**Ouvrir** :
- https://www.clesducabanon.fr/gestion-airbnb
- https://www.clesducabanon.fr/services/automatisation
- https://www.clesducabanon.fr/conciergerie-airbnb-paris
- https://www.clesducabanon.fr/services/creation-annonce
- https://www.clesducabanon.fr/services/gestion-voyageurs
- https://www.clesducabanon.fr/services/tarification-dynamique

**Résultat attendu** : Pages s'affichent (pas 404)

### 3. Tester les redirections WWW

**Test 1** : Ouvrir `http://clesducabanon.fr`
- Doit rediriger vers `https://www.clesducabanon.fr` ✅

**Test 2** : Ouvrir `https://clesducabanon.fr`
- Doit rediriger vers `https://www.clesducabanon.fr` ✅

### 4. Vérifier les headers

**Ouvrir DevTools** (F12) → **Network** → Recharger la page → Cliquer sur le premier élément → **Headers**

Tu dois voir :
```
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
```

---

## 🐛 TROUBLESHOOTING

### Problème : Pages toujours en 404

**Cause possible** : `vercel.json` pas pris en compte

**Solution** :
1. Vérifier que `vercel.json` est à la **racine** du projet
2. Push sur GitHub
3. Attendre le redéploiement automatique (2-3 min)
4. Vider cache navigateur (Ctrl+Shift+R)

---

### Problème : Redirections WWW ne fonctionnent pas

**Cause possible** : DNS pas configuré ou propagation en cours

**Solution** :
1. Vérifier DNS chez IONOS :
   - Record A : `@` → `76.76.21.21`
   - Record CNAME : `www` → `cname.vercel-dns.com.`
2. Attendre propagation DNS (max 24h)
3. Tester avec : https://dnschecker.org

---

### Problème : Build échoue sur Vercel

**Cause possible** : Erreur dans le code ou dépendances manquantes

**Solution** :
1. Voir les logs : Dashboard Vercel → Deployments → Dernier deploy → **Logs**
2. Tester en local : `npm install && npm run build`
3. Corriger les erreurs
4. Push sur GitHub

---

### Problème : Site ne se met pas à jour

**Cause possible** : Cache Vercel ou cache navigateur

**Solution** :
1. **Dashboard Vercel** → Deployments → Dernier deploy → **Redeploy**
2. Vider cache navigateur : Ctrl+Shift+R (ou Cmd+Shift+R sur Mac)
3. Tester en navigation privée

---

## 📋 CHECKLIST DÉPLOIEMENT VERCEL

### Configuration Vercel Dashboard
- [ ] ✅ Build Command : `npm run build`
- [ ] ✅ Output Directory : `dist`
- [ ] ✅ Framework Preset : Vite
- [ ] ✅ Node.js Version : 18.x ou 20.x

### Domaine personnalisé
- [ ] ✅ `www.clesducabanon.fr` ajouté sur Vercel
- [ ] ✅ `clesducabanon.fr` avec redirection vers www
- [ ] ✅ DNS configuré chez IONOS (A + CNAME)
- [ ] ⏳ Propagation DNS (1-24h)

### Configuration GitHub
- [ ] ✅ Repo connecté à Vercel
- [ ] ✅ Branche main/master configurée
- [ ] ✅ Auto-deployment activé

### Fichiers de config
- [ ] ✅ `vercel.json` à la racine avec redirections WWW
- [ ] ✅ `vercel.json` avec rewrites SPA
- [ ] ✅ `vercel.json` avec headers sécurité

### Tests post-déploiement
- [ ] ⏳ Pages 404 → 200 OK
- [ ] ⏳ Redirections WWW fonctionnelles
- [ ] ⏳ Headers sécurité présents
- [ ] ⏳ Sitemap.xml accessible
- [ ] ⏳ Robots.txt accessible

---

## 🚀 WORKFLOW COMPLET

### 1. Corriger couleurs violettes (15 min)
```
VS Code : Ctrl + Shift + H
Files : src/app/**/*.tsx
Remplacer : indigo-600 → teal-600, etc.
```

### 2. Commit & Push sur GitHub (2 min)
```bash
git add .
git commit -m "Fix: Erreurs 404 + Redirections WWW + Couleurs teal/jaune"
git push origin main
```

### 3. Vercel deploy automatiquement (2-3 min)
- Vérifier dashboard Vercel
- Attendre "Ready" ✅

### 4. Tester (5 min)
- Tester pages 404 → 200 OK
- Tester redirections WWW
- Tester en navigation privée

### 5. Google Search Console (5 min)
- Demander indexation 6 URLs en 404

**Total : 30 minutes**

---

## 🔄 COMPARAISON NETLIFY vs VERCEL

| Fonctionnalité | Netlify | Vercel |
|----------------|---------|--------|
| Config redirections | `_redirects` + `netlify.toml` | `vercel.json` |
| Config headers | `_headers` + `netlify.toml` | `vercel.json` |
| SPA rewrites | Automatique | `vercel.json` |
| Deploy auto GitHub | ✅ | ✅ |
| Domaine personnalisé | ✅ | ✅ |
| HTTPS automatique | ✅ | ✅ |
| Edge Functions | ✅ | ✅ |

**Conclusion** : Même fonctionnalités, juste la configuration qui change !

---

## 💡 AVANTAGES VERCEL

1. ✅ **Deploy ultra rapide** (2-3 min vs 5-10 min Netlify)
2. ✅ **Preview deployments** automatiques (branches)
3. ✅ **Analytics gratuits** (Core Web Vitals)
4. ✅ **Edge Network global** (performance mondiale)
5. ✅ **Build cache intelligent** (rebuilds plus rapides)

---

## 🎯 RÉSULTAT ATTENDU

Après push sur GitHub + deploy Vercel :

### Immédiat (5 minutes)
- ✅ Site déployé automatiquement
- ✅ Erreurs 404 éliminées (6 → 0)
- ✅ Redirections WWW fonctionnelles

### Court terme (1 semaine)
- ✅ 36 pages indexées Google (vs 5)
- ✅ Erreur structured data disparue
- ✅ Score Site Health : 95% (vs 90%)

### Moyen terme (1 mois)
- 📈 Trafic organique +50%
- 📈 Featured snippets SERP
- 📈 Positionnement amélioré

---

## 🆘 BESOIN D'AIDE ?

### Documentation Vercel
- Config : https://vercel.com/docs/configuration
- Redirects : https://vercel.com/docs/edge-network/redirects
- Headers : https://vercel.com/docs/edge-network/headers
- Rewrites : https://vercel.com/docs/edge-network/rewrites

### Support
- Discord Vercel : https://vercel.com/discord
- GitHub Issues : https://github.com/vercel/vercel/issues

---

## ✅ PRÊT À DÉPLOYER !

```bash
# 1. Corriger couleurs (VS Code Find & Replace)
# 2. Commit & Push
git add .
git commit -m "Fix: 404 + WWW redirects + Colors"
git push origin main

# 3. Vérifier dashboard Vercel
# 4. Tester le site
# 5. Google Search Console indexation
```

**C'EST PARTI ! 🚀**
