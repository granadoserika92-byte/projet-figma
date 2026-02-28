# 📧 Guide de Configuration des Emails

## ✅ Ce qui est déjà fait

1. ✅ Supabase connecté et configuré
2. ✅ Serveur backend créé avec route `/contact`
3. ✅ Formulaire de contact mis à jour
4. ✅ Base de données prête à stocker les demandes
5. ✅ Variable d'environnement `RESEND_API_KEY` créée

## 🚀 Comment activer l'envoi d'emails (GRATUIT)

### Option 1 : Resend (Recommandé - GRATUIT)

**Resend est gratuit jusqu'à 100 emails/jour** (3000/mois) - parfait pour votre usage !

#### Étapes :

1. **Créer un compte gratuit sur Resend**
   - Allez sur : https://resend.com/signup
   - Inscrivez-vous avec votre email

2. **Obtenir votre clé API**
   - Une fois connecté, allez dans "API Keys"
   - Cliquez sur "Create API Key"
   - Donnez-lui un nom : "Les Clés du Cabanon"
   - Copiez la clé (elle commence par `re_...`)

3. **Ajouter la clé dans Supabase**
   - Vous avez déjà reçu une invitation à ajouter `RESEND_API_KEY`
   - Collez votre clé API Resend dans le champ
   - Sauvegardez

4. **Configurer votre domaine (optionnel mais recommandé)**
   - Dans Resend, allez dans "Domains"
   - Ajoutez votre domaine `lesclesducabanon.fr`
   - Suivez les instructions pour configurer les DNS
   - Une fois vérifié, vos emails viendront de `contact@lesclesducabanon.fr`

#### Sans domaine vérifié :
- Les emails viendront de `onboarding@resend.dev`
- Ça fonctionne parfaitement pour les tests
- Mais pour la production, mieux vaut configurer votre domaine

---

## 📊 Ce qui se passe maintenant

### Quand un visiteur remplit le formulaire :

1. **Formulaire soumis** → Données envoyées au serveur
2. **Serveur reçoit** → Valide les données
3. **Stockage** → Sauvegarde dans la base de données Supabase
4. **Email envoyé** → Notification à `contact@lesclesducabanon.fr`
5. **Confirmation** → Message de succès affiché à l'utilisateur

### Format de l'email que vous recevrez :

```
Sujet: Nouvelle demande d'audit gratuit - [Nom du client]

Nouvelle demande d'audit gratuit

Nom: Jean Dupont
Email: jean.dupont@email.com
Téléphone: 06 12 34 56 78
Adresse du bien: 75001 Paris
Message: J'aimerais louer mon appartement sur Airbnb

Date: 19/02/2026 15:30
ID: audit_1739270400000_xyz123
```

---

## 🔍 Tester le formulaire

1. Allez sur votre site web
2. Remplissez le formulaire d'audit gratuit
3. Cliquez sur "Envoyer ma demande"
4. Vous devriez voir un message de succès ✅

**Vérifiez :**
- Les logs du serveur Supabase (pour voir si l'email a été envoyé)
- Votre boîte mail `contact@lesclesducabanon.fr`

---

## 🆘 En cas de problème

### Si vous ne recevez pas d'email :

1. **Vérifiez que la clé API Resend est bien configurée**
   - Allez dans les variables d'environnement Supabase
   - La clé `RESEND_API_KEY` doit être présente

2. **Consultez les logs du serveur**
   - Dans Supabase, allez dans "Functions" → "Logs"
   - Cherchez les messages d'erreur

3. **Vérifiez vos spams**
   - L'email peut être dans les spams la première fois

### Si le formulaire ne s'envoie pas :

1. **Ouvrez la console du navigateur** (F12)
2. **Regardez les erreurs** dans l'onglet "Console"
3. **Vérifiez la connexion réseau** dans l'onglet "Network"

---

## 💡 Fonctionnalités incluses

✅ **Validation des données**
- Tous les champs obligatoires sont vérifiés
- Format email validé
- Messages d'erreur clairs

✅ **Expérience utilisateur**
- Message de succès après envoi
- Message d'erreur si problème
- Formulaire désactivé pendant l'envoi
- Auto-reset du formulaire après succès

✅ **Sécurité**
- Clés API protégées côté serveur
- CORS configuré
- Validation des entrées

✅ **Historique**
- Toutes les demandes sont sauvegardées dans Supabase
- Vous pouvez consulter l'historique des demandes

---

## 🎯 Prochaines étapes possibles

1. **Email de confirmation au client** (après envoi)
2. **Notification Slack/Discord** (pour être alerté instantanément)
3. **Dashboard admin** (pour voir toutes les demandes)
4. **Auto-réponse** (email automatique au client)

---

## 📞 Support

Si vous avez des questions ou des problèmes, n'hésitez pas à demander !

**Email de test recommandé :**
Avant de mettre en production, testez avec votre propre email pour vérifier que tout fonctionne.
