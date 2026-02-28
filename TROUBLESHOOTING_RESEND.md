# 🔧 Résolution du problème "API key is invalid" avec Resend

## ❌ Le problème

Vous recevez cette erreur :
```
Erreur Resend: {"statusCode":400,"name":"validation_error","message":"API key is invalid"}
```

Cela signifie que la clé API Resend n'est pas valide ou mal configurée.

---

## ✅ Solution étape par étape

### Étape 1 : Vérifier que vous avez bien une clé API Resend valide

1. **Allez sur https://resend.com/login** et connectez-vous
   - Si vous n'avez pas de compte, créez-en un sur https://resend.com/signup

2. **Accédez à la page des clés API**
   - URL directe : https://resend.com/api-keys
   - Ou : Menu → API Keys

3. **Créez une nouvelle clé API**
   - Cliquez sur **"Create API Key"**
   - Nom : `Les Clés du Cabanon - Production`
   - Permission : **"Sending access"** (par défaut)
   - Cliquez sur **"Add"**

4. **Copiez la clé immédiatement**
   - ⚠️ La clé commence OBLIGATOIREMENT par `re_`
   - Exemple : `re_123abc456def789ghi...`
   - ⚠️ Vous ne pourrez plus la voir après, donc copiez-la maintenant !

---

### Étape 2 : Ajouter la clé API dans les variables d'environnement

**Option A : Via l'interface Figma Make**

Un modal devrait apparaître automatiquement pour que vous puissiez entrer votre clé.

**Option B : Manuellement via Supabase**

1. Ouvrez votre projet Supabase : https://supabase.com/dashboard
2. Allez dans **Settings** (Paramètres) → **Edge Functions** → **Manage Secrets**
3. Trouvez `RESEND_API_KEY`
4. Cliquez sur **"Edit"** ou **"Add"** si elle n'existe pas
5. Collez votre clé API (qui commence par `re_`)
6. Cliquez sur **"Save"**

---

### Étape 3 : Redémarrer la fonction Edge (important !)

Après avoir ajouté/modifié la variable d'environnement, il faut redémarrer la fonction :

1. Dans Supabase Dashboard → **Edge Functions**
2. Trouvez la fonction `make-server-a639ce82`
3. Cliquez sur **"Redeploy"** ou attendez 1-2 minutes que la fonction se redémarre automatiquement

---

### Étape 4 : Tester le formulaire

1. Allez sur votre site web
2. Remplissez le formulaire d'audit gratuit
3. Cliquez sur **"Envoyer ma demande"**
4. Vérifiez les logs dans Supabase

**Pour voir les logs :**
- Supabase Dashboard → Edge Functions → Votre fonction → **Logs**
- Vous devriez voir :
  ```
  🔑 Tentative d'envoi d'email avec Resend...
  🔑 Longueur de la clé API: 40
  🔑 Début de la clé: re_xxxx...
  ✅ Email envoyé avec succès via Resend
  ✅ ID de l'email: abc123...
  ```

---

## ⚠️ Erreurs courantes

### Erreur 1 : "API key is invalid"

**Causes possibles :**
- ❌ La clé ne commence pas par `re_`
- ❌ Vous avez copié seulement une partie de la clé
- ❌ Il y a des espaces avant ou après la clé
- ❌ Vous avez utilisé une ancienne clé supprimée

**Solution :**
1. Créez une NOUVELLE clé sur https://resend.com/api-keys
2. Copiez la clé ENTIÈRE (environ 40 caractères)
3. Supprimez l'ancienne clé dans Supabase
4. Ajoutez la nouvelle clé

---

### Erreur 2 : "Domain not verified"

Si vous voyez cette erreur, c'est normal ! Utilisez l'email par défaut :

```javascript
from: 'Les Clés du Cabanon <onboarding@resend.dev>'
```

Pour utiliser votre propre domaine (`contact@lesclesducabanon.fr`), il faut :
1. Aller sur https://resend.com/domains
2. Ajouter votre domaine `lesclesducabanon.fr`
3. Configurer les enregistrements DNS (SPF, DKIM, DMARC)
4. Attendre la vérification (quelques heures)

---

### Erreur 3 : La clé est correcte mais l'email n'arrive pas

**Vérifiez :**
1. ✅ Votre boîte de réception `contact@lesclesducabanon.fr`
2. ✅ Les **spams** / dossier indésirables
3. ✅ Les logs Supabase montrent "✅ Email envoyé avec succès"
4. ✅ Dans Resend Dashboard → Logs → Vérifiez le statut de l'email

---

## 🧪 Test rapide

Voici une commande curl pour tester directement votre clé API Resend :

```bash
curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer VOTRE_CLE_API_ICI' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "onboarding@resend.dev",
    "to": ["contact@lesclesducabanon.fr"],
    "subject": "Test",
    "html": "<p>Test email</p>"
  }'
```

**Réponse attendue si la clé est valide :**
```json
{
  "id": "abc123-def456-ghi789"
}
```

**Réponse si la clé est invalide :**
```json
{
  "statusCode": 400,
  "name": "validation_error",
  "message": "API key is invalid"
}
```

---

## 📊 Checklist complète

Utilisez cette checklist pour vérifier que tout est correct :

- [ ] J'ai un compte Resend actif
- [ ] J'ai créé une nouvelle clé API sur https://resend.com/api-keys
- [ ] La clé commence bien par `re_`
- [ ] J'ai copié la clé ENTIÈRE (environ 40 caractères)
- [ ] J'ai ajouté la clé dans les variables d'environnement Supabase (`RESEND_API_KEY`)
- [ ] J'ai redémarré la fonction Edge ou attendu 2 minutes
- [ ] J'ai testé le formulaire sur le site
- [ ] J'ai vérifié les logs dans Supabase
- [ ] J'ai vérifié ma boîte mail (et les spams)

---

## 💡 Astuce : Mode de secours

Si Resend ne fonctionne toujours pas, le formulaire continue de fonctionner !

**Ce qui se passe sans Resend :**
- ✅ Les demandes sont **toujours sauvegardées** dans la base de données Supabase
- ✅ Le visiteur reçoit un message de confirmation
- ✅ Vous pouvez consulter toutes les demandes dans Supabase Dashboard → Table Editor → `kv_store_a639ce82`

**Pour consulter les demandes :**
1. Allez sur https://supabase.com/dashboard
2. Votre projet → **Table Editor**
3. Table : `kv_store_a639ce82`
4. Cherchez les clés qui commencent par `audit_`

---

## 🆘 Besoin d'aide ?

Si le problème persiste après avoir suivi toutes ces étapes :

1. **Vérifiez les logs Supabase**
   - Copiez les messages d'erreur complets
   
2. **Vérifiez votre clé Resend**
   - Testez-la avec la commande curl ci-dessus
   
3. **Alternative temporaire**
   - Utilisez un autre service d'email (SendGrid, Mailgun, etc.)
   - Ou consultez simplement la base de données Supabase

---

## 📧 Limites du plan gratuit Resend

**Plan gratuit :**
- ✅ 3 000 emails/mois (100/jour)
- ✅ 1 domaine personnalisé
- ✅ Support API complet
- ✅ Parfait pour votre usage !

**Si vous dépassez 100 emails/jour**, Resend propose des plans payants à partir de 20$/mois.

Pour la conciergerie, 100 demandes d'audit par jour est largement suffisant ! 🎯
