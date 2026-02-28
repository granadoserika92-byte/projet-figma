import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-a639ce82/health", (c) => {
  return c.json({ status: "ok" });
});

// Sitemap XML endpoint
app.get("/make-server-a639ce82/sitemap.xml", (c) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.clesducabanon.fr/</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.clesducabanon.fr/gestion-airbnb</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.95</priority></url>
  <url><loc>https://www.clesducabanon.fr/gestion-locative-courte-duree</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.95</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-france</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.95</priority></url>
  <url><loc>https://www.clesducabanon.fr/methode</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/calculateur-revenus</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/inscription</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-guadeloupe</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-martinique</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-reunion</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-guyane</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-mayotte</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-paris</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-lyon</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-marseille</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-bordeaux</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-toulouse</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-nice</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/conciergerie-airbnb-nantes</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.clesducabanon.fr/blog</loc><lastmod>2026-02-21</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/creation-annonce</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/optimisation-seo</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/tarification-dynamique</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/multi-plateformes</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/gestion-voyageurs</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/automatisation</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/optimisation-occupation</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/services/espace-proprietaire</loc><lastmod>2026-02-21</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.clesducabanon.fr/mentions-legales</loc><lastmod>2026-02-21</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.clesducabanon.fr/cgv</loc><lastmod>2026-02-21</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://www.clesducabanon.fr/confidentialite</loc><lastmod>2026-02-21</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>`;

  return c.body(sitemap, 200, {
    'Content-Type': 'application/xml; charset=utf-8',
  });
});

// Contact form endpoint
app.post("/make-server-a639ce82/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, address, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !address) {
      return c.json({ 
        success: false, 
        error: "Tous les champs obligatoires doivent être remplis" 
      }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ 
        success: false, 
        error: "L'adresse email n'est pas valide" 
      }, 400);
    }

    // Store the audit request in the database
    const timestamp = new Date().toISOString();
    const auditId = `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await kv.set(auditId, {
      name,
      email,
      phone,
      address,
      message: message || '',
      timestamp,
      status: 'new'
    });

    // Initialize Supabase client for sending email
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Send email notification to contact@lesclesducabanon.fr
    const emailContent = `
      Nouvelle demande d'audit gratuit
      
      Nom: ${name}
      Email: ${email}
      Téléphone: ${phone}
      Adresse du bien: ${address}
      Message: ${message || 'Aucun message'}
      
      Date: ${new Date(timestamp).toLocaleString('fr-FR')}
      ID: ${auditId}
    `;

    // Note: Supabase doesn't have a built-in email service in the free tier
    // For production, you would integrate with Resend, SendGrid, or another email service
    // For now, we'll log the email and store it in the database
    console.log('Email à envoyer:', emailContent);

    // Alternative: Use Resend API (recommended for production)
    // You would need to add RESEND_API_KEY as an environment variable
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (resendApiKey) {
      try {
        console.log('🔑 Tentative d\'envoi d\'email avec Resend...');
        console.log('🔑 Longueur de la clé API:', resendApiKey.length);
        console.log('🔑 Début de la clé:', resendApiKey.substring(0, 7) + '...');
        
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Les Clés du Cabanon <onboarding@resend.dev>',
            to: ['granados.erika92@gmail.com'], // Mode test Resend : envoie à votre email
            subject: `Nouvelle demande d'audit gratuit - ${name}`,
            text: emailContent,
            html: `
              <h2>Nouvelle demande d'audit gratuit</h2>
              <p><strong>Nom:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
              <p><strong>Adresse du bien:</strong> ${address}</p>
              <p><strong>Message:</strong> ${message || 'Aucun message'}</p>
              <hr>
              <p><small>Date: ${new Date(timestamp).toLocaleString('fr-FR')}</small></p>
              <p><small>ID: ${auditId}</small></p>
            `,
          }),
        });

        const resendData = await resendResponse.json();
        
        if (!resendResponse.ok) {
          console.error('❌ Erreur Resend:', JSON.stringify(resendData));
          console.error('❌ Status:', resendResponse.status);
          console.error('❌ IMPORTANT: Vérifiez que votre clé API Resend est valide');
          console.error('❌ La clé doit commencer par "re_" et provenir de https://resend.com/api-keys');
        } else {
          console.log('✅ Email envoyé avec succès via Resend');
          console.log('✅ ID de l\'email:', resendData.id);
        }
      } catch (error) {
        console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
      }
    } else {
      console.log('⚠️  RESEND_API_KEY non configurée - Email non envoyé');
      console.log('📧 Pour activer l\'envoi d\'emails, ajoutez votre clé API Resend dans les variables d\'environnement');
      console.log('📧 Obtenez votre clé gratuite sur https://resend.com/api-keys');
    }

    return c.json({ 
      success: true, 
      message: "Votre demande a été envoyée avec succès ! Nous vous recontacterons dans les plus brefs délais.",
      auditId 
    });

  } catch (error) {
    console.error('Erreur lors du traitement de la demande de contact:', error);
    return c.json({ 
      success: false, 
      error: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer." 
    }, 500);
  }
});

// Onboarding form endpoint
app.post("/make-server-a639ce82/onboarding", async (c) => {
  try {
    const body = await c.req.json();

    // Validate required fields
    if (!body.nom || !body.prenom || !body.email || !body.telephone) {
      return c.json({ 
        success: false, 
        error: "Les informations propriétaire sont obligatoires" 
      }, 400);
    }

    if (!body.adresseLogement || !body.ville || !body.codePostal || !body.typeLogement || !body.surface) {
      return c.json({ 
        success: false, 
        error: "Les informations du logement sont obligatoires" 
      }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return c.json({ 
        success: false, 
        error: "L'adresse email n'est pas valide" 
      }, 400);
    }

    // Store the onboarding data
    const timestamp = new Date().toISOString();
    const onboardingId = `onboarding_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await kv.set(onboardingId, {
      ...body,
      timestamp,
      status: 'new'
    });

    // Calculate total beds
    const totalLits = parseInt(body.litsSimples || 0) + 
                      parseInt(body.litsDoubles || 0) + 
                      parseInt(body.litsQueenSize || 0) + 
                      parseInt(body.litsKingSize || 0) + 
                      parseInt(body.canapeLit || 0);

    // Prepare email content
    const emailContent = `
      NOUVELLE INSCRIPTION CLIENT
      
      ═══════════════════════════════════════
      PROPRIÉTAIRE
      ═══════════════════════════════════════
      Nom: ${body.nom}
      Prénom: ${body.prenom}
      Email: ${body.email}
      Téléphone: ${body.telephone}
      
      ═══════════════════════════════════════
      LOGEMENT
      ═══════════════════════════════════════
      Adresse: ${body.adresseLogement}
      Ville: ${body.ville} (${body.codePostal})
      Type: ${body.typeLogement}
      Surface: ${body.surface} m²
      
      ═══════════════════════════════════════
      ESPACES EXTÉRIEURS
      ═══════════════════════════════════════
      ${body.terrasse ? '✓' : '✗'} Terrasse
      ${body.balcon ? '✓' : '✗'} Balcon
      ${body.jardin ? '✓' : '✗'} Jardin
      ${body.parking ? '✓' : '✗'} Parking
      ${body.piscine ? `✓ Piscine (${body.dimensionsPiscine})` : '✗ Piscine'}
      
      ═══════════════════════════════════════
      CONFIGURATION
      ═══════════════════════════════════════
      Chambres: ${body.nombreChambres}
      WC: ${body.nombreWC}
      Salles de bain: ${body.nombreSallesBain}
      
      ═══════════════════════════════════════
      COUCHAGES (${totalLits} lits au total)
      ═══════════════════════════════════════
      Lits simples (90x190): ${body.litsSimples}
      Lits doubles (140x190): ${body.litsDoubles}
      Lits Queen Size (160x200): ${body.litsQueenSize}
      Lits King Size (180x200): ${body.litsKingSize}
      Canapé-lit: ${body.canapeLit}
      
      ═══════════════════════════════════════
      ÉQUIPEMENTS DE BASE
      ═══════════════════════════════════════
      ${body.wifi ? '✓' : '✗'} WiFi
      ${body.television ? '✓' : '✗'} Télévision
      ${body.cuisineEquipee ? '✓' : '✗'} Cuisine équipée
      ${body.laveLinge ? '✓' : '✗'} Lave-linge
      ${body.laveVaisselle ? '✓' : '✗'} Lave-vaisselle
      ${body.climatisation ? '✓' : '✗'} Climatisation
      ${body.chauffage ? '✓' : '✗'} Chauffage
      
      ═══════════════════════════════════════
      PETIT ÉLECTROMÉNAGER
      ═══════════════════════════════════════
      ${body.microOndes ? '✓' : '✗'} Micro-ondes
      ${body.grillePain ? '✓' : '✗'} Grille-pain
      ${body.bouilloire ? '✓' : '✗'} Bouilloire
      ${body.machineCafe ? '✓' : '✗'} Machine à café
      
      ═══════��═══════════════════════════════
      BATTERIE DE CUISINE
      ═══════════════════════════════════════
      ${body.casseroles ? '✓' : '✗'} Casseroles (1 petite et 1 grande)
      ${body.faitTout ? '✓' : '✗'} Fait-tout
      ${body.poeles ? '✓' : '✗'} Poêles (1 petite et 1 grande)
      
      ═══════════════════════════════════════
      USTENSILES
      ═══════════════════════════════════════
      ${body.tireBouchon ? '✓' : '✗'} Tire-bouchon
      ${body.decapsuleur ? '✓' : '✗'} Décapsuleur
      ${body.ouvreBoites ? '✓' : '✗'} Ouvre-boîtes
      ${body.plancheDecouper ? '✓' : '✗'} Planche à découper
      ${body.dessousPlat ? '✓' : '✗'} Dessous de plat
      ${body.gantFour ? '✓' : '✗'} Gant pour le four
      
      ═══════════════════════════════════════
      VAISSELLE
      ═══════════════════════════════════════
      ${body.assiettes ? '✓' : '✗'} Assiettes (complètes)
      ${body.couverts ? '✓' : '✗'} Couverts (complet)
      ${body.ustensileCuisine ? '✓' : '✗'} Ustensiles de cuisine
      ${body.verres ? '✓' : '✗'} Verres
      ${body.verresVin ? '✓' : '✗'} Verres à vin
      ${body.verresChampagne ? '✓' : '✗'} Verres à champagne
      ${body.carafe ? '✓' : '✗'} Carafe
      ${body.bolsMugs ? '✓' : '✗'} Bols / Mugs
      ${body.tassesCafe ? '✓' : '✗'} Tasses à café
      ${body.saladier ? '✓' : '✗'} Saladier
      ${body.platsFour ? '✓' : '✗'} Plats pour le four
      ${body.passoire ? '✓' : '✗'} Passoire / égouttoir
      
      ═══════════════════════════════════════
      LINGE DE MAISON
      ═══════════════════════════════════════
      ${body.couettes ? '✓' : '✗'} Couettes (1 par lit)
      ${body.oreillers ? '✓' : '✗'} Oreillers (1 par personne)
      ${body.secheCheveux ? '✓' : '✗'} Sèche-cheveux (1 par SDB)
      ${body.cintres ? '✓' : '✗'} Cintres
      
      ═══════════════════════════════════════
      MÉNAGE ET ENTRETIEN
      ═══════════════════════════════════════
      ${body.climatisationVentilateurs ? '✓' : '✗'} Ventilateurs
      ${body.aspirateur ? '✓' : '✗'} Aspirateur
      ${body.serpillere ? '✓' : '✗'} Serpillère
      ${body.seau ? '✓' : '✗'} Seau
      ${body.balais ? '✓' : '✗'} Balais
      ${body.pelleBalaayette ? '✓' : '✗'} Pelle-balayette
      ${body.produitsManagers ? '✓' : '✗'} Produits ménagers
      ${body.etendoir ? '✓' : '✗'} Étendoir
      ${body.ferRepasser ? '✓' : '✗'} Fer à repasser
      ${body.tableRepasser ? '✓' : '✗'} Table à repasser
      ${body.pincesLinge ? '✓' : '✗'} Pinces à linge
      ${body.grandRateau ? '✓' : '✗'} Grand râteau
      
      ═══════════════════════════════════════
      SYSTÈME D'ARRIVÉE
      ═══════════════════════════════════════
      Système: ${body.systemeArrivee === 'boiteACle' ? 'Boîte à clé' : body.systemeArrivee === 'serrureConnectee' ? 'Serrure connectée' : body.systemeArrivee === 'physique' ? 'Remise physique' : 'Non renseigné'}
      
      ═══════════════════════════════════════
      RÈGLEMENT
      ═══════════════════════════════════════
      ${body.animauxAcceptes ? '✓' : '✗'} Animaux acceptés
      ${body.fumeursAcceptes ? '✓' : '✗'} Fumeurs acceptés
      ${body.evenementsAcceptes ? '✓' : '✗'} Événements autorisés
      
      ═══════════════════════════════════════
      OBJECTIFS
      ═══════════════════════════════════════
      Revenus actuels: ${body.revenusActuels || 'Non renseigné'}
      Objectif revenus: ${body.objectifRevenus || 'Non renseigné'}
      
      ${body.complementsInfos ? `═══════════════════════════════════════
      INFORMATIONS COMPLÉMENTAIRES
      ═══════════════════════════════════════
      ${body.complementsInfos}` : ''}
      
      ═══════════════════════════════════════
      Fichiers joints: ${body.filesCount || 0}
      Date: ${new Date(timestamp).toLocaleString('fr-FR')}
      ID: ${onboardingId}
    `;

    // Send email via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (resendApiKey) {
      try {
        console.log('📧 Envoi de l\'inscription...');
        
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Les Clés du Cabanon <onboarding@resend.dev>',
            to: ['granados.erika92@gmail.com'],
            subject: `🏠 Nouvelle inscription - ${body.prenom} ${body.nom} (${body.ville})`,
            text: emailContent,
            html: `
              <h1 style="color: #0d9488;">🏠 Nouvelle inscription client</h1>
              
              <h2 style="color: #0891b2;">Propriétaire</h2>
              <ul>
                <li><strong>Nom:</strong> ${body.nom}</li>
                <li><strong>Prénom:</strong> ${body.prenom}</li>
                <li><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></li>
                <li><strong>Téléphone:</strong> <a href="tel:${body.telephone}">${body.telephone}</a></li>
              </ul>
              
              <h2 style="color: #0891b2;">Logement</h2>
              <ul>
                <li><strong>Adresse:</strong> ${body.adresseLogement}</li>
                <li><strong>Ville:</strong> ${body.ville} (${body.codePostal})</li>
                <li><strong>Type:</strong> ${body.typeLogement}</li>
                <li><strong>Surface:</strong> ${body.surface} m²</li>
              </ul>
              
              <h2 style="color: #0891b2;">Espaces extérieurs</h2>
              <ul>
                <li>${body.terrasse ? '✅' : '❌'} Terrasse</li>
                <li>${body.balcon ? '✅' : '❌'} Balcon</li>
                <li>${body.jardin ? '✅' : '❌'} Jardin</li>
                <li>${body.parking ? '✅' : '❌'} Parking</li>
                <li>${body.piscine ? `✅ Piscine (${body.dimensionsPiscine})` : '❌ Piscine'}</li>
              </ul>
              
              <h2 style="color: #0891b2;">Configuration</h2>
              <ul>
                <li><strong>Chambres:</strong> ${body.nombreChambres}</li>
                <li><strong>WC:</strong> ${body.nombreWC}</li>
                <li><strong>Salles de bain:</strong> ${body.nombreSallesBain}</li>
              </ul>
              
              <h2 style="color: #0891b2;">Couchages (${totalLits} au total)</h2>
              <ul>
                <li>Lits simples: ${body.litsSimples}</li>
                <li>Lits doubles: ${body.litsDoubles}</li>
                <li>Queen Size: ${body.litsQueenSize}</li>
                <li>King Size: ${body.litsKingSize}</li>
                <li>Canapé-lit: ${body.canapeLit}</li>
              </ul>
              
              <h2 style="color: #0891b2;">Équipements</h2>
              <ul>
                <li>${body.wifi ? '✅' : '❌'} WiFi</li>
                <li>${body.television ? '✅' : '❌'} Télévision</li>
                <li>${body.cuisineEquipee ? '✅' : '❌'} Cuisine équipée</li>
                <li>${body.laveLinge ? '✅' : '❌'} Lave-linge</li>
                <li>${body.laveVaisselle ? '✅' : '❌'} Lave-vaisselle</li>
                <li>${body.climatisation ? '✅' : '❌'} Climatisation</li>
                <li>${body.chauffage ? '✅' : '❌'} Chauffage</li>
              </ul>
              
              <h2 style="color: #0891b2;">Règlement</h2>
              <ul>
                <li>${body.animauxAcceptes ? '✅' : '❌'} Animaux acceptés</li>
                <li>${body.fumeursAcceptes ? '✅' : '❌'} Fumeurs acceptés</li>
                <li>${body.evenementsAcceptes ? '✅' : '❌'} Événements autorisés</li>
              </ul>
              
              <h2 style="color: #0891b2;">Objectifs</h2>
              <ul>
                <li><strong>Revenus actuels:</strong> ${body.revenusActuels || 'Non renseigné'}</li>
                <li><strong>Objectif revenus:</strong> ${body.objectifRevenus || 'Non renseigné'}</li>
              </ul>
              
              ${body.complementsInfos ? `
              <h2 style="color: #0891b2;">Informations complémentaires</h2>
              <p style="white-space: pre-wrap;">${body.complementsInfos}</p>
              ` : ''}
              
              <hr style="margin: 30px 0;">
              <p><small>📎 Fichiers joints: ${body.filesCount || 0}</small></p>
              <p><small>📅 Date: ${new Date(timestamp).toLocaleString('fr-FR')}</small></p>
              <p><small>🆔 ID: ${onboardingId}</small></p>
            `,
          }),
        });

        const resendData = await resendResponse.json();
        
        if (!resendResponse.ok) {
          console.error('❌ Erreur Resend:', JSON.stringify(resendData));
        } else {
          console.log('✅ Email d\'inscription envoyé avec succès');
        }
      } catch (error) {
        console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
      }
    }

    return c.json({ 
      success: true, 
      message: "Inscription réussie ! Nous vous contacterons sous 24h.",
      onboardingId 
    });

  } catch (error) {
    console.error('Erreur lors du traitement de l\'inscription:', error);
    return c.json({ 
      success: false, 
      error: "Une erreur est survenue. Veuillez réessayer." 
    }, 500);
  }
});

Deno.serve(app.fetch);