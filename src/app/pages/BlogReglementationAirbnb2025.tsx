import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { AlertTriangle, FileText, CheckCircle, XCircle, Home } from 'lucide-react';
import { Card } from '../components/ui/card';

export function BlogReglementationAirbnb2025() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Réglementation Airbnb 2025 : Lois, Règles, Autorisations | Guide Complet"
        description="Réglementation Airbnb 2025 à jour : règle des 120 jours, numéro enregistrement, autorisation mairie, résidence principale vs secondaire. Amendes et sanctions."
        keywords="réglementation airbnb 2025, loi airbnb france, règle 120 jours airbnb, autorisation mairie airbnb, numéro enregistrement airbnb, airbnb légal"
        canonical="https://www.clesducabanon.fr/blog/reglementation-airbnb-2025"
      />
      <Header />
      
      <div className="pt-16">
        <section className="py-12 bg-gradient-to-br from-teal-600 via-amber-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
              <p className="text-teal-100 mb-4">⚖️ Article Blog • Réglementation</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Réglementation Airbnb 2025 : Guide Complet des Lois</h1>
              <p className="text-xl text-white/90">Règle des 120 jours, numéro d'enregistrement, autorisations : tout ce qu'il faut savoir pour être en règle.</p>
              <div className="flex items-center gap-4 mt-6 text-sm text-white/80">
                <span>⏱️ 11 min</span>
                <span>📅 27 février 2025</span>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <p className="lead text-xl font-medium">
                La réglementation Airbnb en France est <strong>complexe et en constante évolution</strong>. Entre la règle des 120 jours, les numéros d'enregistrement obligatoires, et les restrictions locales, il est facile de se retrouver en infraction sans le savoir. Ce guide 2025 recense <strong>toutes les règles en vigueur</strong> et les amendes encourues.
              </p>

              <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg my-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-red-900 font-bold mt-0 mb-2">⚠️ AMENDES IMPORTANTES</h3>
                    <p className="text-red-800 text-sm mb-0">
                      Non-respect de la réglementation Airbnb = amendes jusqu'à <strong>50 000€ par infraction</strong>. Airbnb partage désormais les données avec les mairies (2024). Vous êtes facilement détectable. La régularité est impérative.
                    </p>
                  </div>
                </div>
              </div>

              <h2>🏠 Distinction fondamentale : Résidence principale vs Résidence secondaire</h2>

              <p>
                Toute la réglementation Airbnb dépend de cette distinction. <strong>Les règles sont très différentes</strong> selon le statut de votre bien.
              </p>

              <h3>Résidence principale</h3>

              <p><strong>Définition légale</strong> :</p>
              <ul>
                <li>Vous y habitez <strong>au moins 8 mois par an</strong> (240 jours minimum)</li>
                <li>C'est votre adresse officielle (impôts, CAF, courriers administratifs)</li>
                <li>Vous pouvez le prouver (factures EDF, avis imposition...)</li>
              </ul>

              <p><strong>Réglementation résidence principale</strong> :</p>
              <ul>
                <li>✅ Location autorisée <strong>maximum 120 jours/an</strong> (règle nationale)</li>
                <li>✅ Pas besoin d'autorisation mairie (sauf villes spécifiques)</li>
                <li>✅ Déclaration en mairie obligatoire (numéro d'enregistrement)</li>
                <li>✅ Fiscalité : revenus BIC (LMNP ou LMP)</li>
              </ul>

              <h3>Résidence secondaire / Investissement locatif</h3>

              <p><strong>Définition</strong> :</p>
              <ul>
                <li>Bien dont vous êtes propriétaire mais où vous n'habitez PAS 8+ mois/an</li>
                <li>Appartement que vous louez à l'année sur Airbnb</li>
              </ul>

              <p><strong>Réglementation résidence secondaire</strong> :</p>
              <ul>
                <li>⚠️ <strong>Autorisation de changement d'usage obligatoire</strong> dans villes en tension (Paris, Lyon, Bordeaux, Nice, etc.)</li>
                <li>⚠️ Déclaration + numéro d'enregistrement mairie obligatoire</li>
                <li>⚠️ <strong>PAS de limite 120 jours</strong> (location possible 365j/an SI autorisation obtenue)</li>
                <li>⚠️ Compensation obligatoire (transformer local commercial en habitation pour chaque m² loué)</li>
              </ul>

              <h2>📅 La règle des 120 jours : Tout comprendre</h2>

              <p>
                C'est <strong>LA règle la plus connue</strong> et la plus mal comprise de la réglementation Airbnb.
              </p>

              <h3>À qui s'applique la règle des 120 jours ?</h3>

              <p>
                <strong>Uniquement aux résidences principales</strong> louées en meublé de tourisme pendant l'absence du propriétaire.
              </p>

              <h3>Que dit exactement la loi ?</h3>

              <p>
                Vous pouvez louer votre résidence principale sur Airbnb <strong>maximum 120 nuits par an</strong> (cumul de toutes les réservations). Au-delà, vous devez obtenir une autorisation de changement d'usage (= transformer en résidence secondaire).
              </p>

              <h3>Comment sont comptés les 120 jours ?</h3>

              <ul>
                <li>📆 Année civile (1er janvier - 31 décembre)</li>
                <li>🛏️ <strong>Nuits louées uniquement</strong> (calendrier bloqué mais non loué = pas compté)</li>
                <li>📊 Airbnb transmet automatiquement les données aux mairies (depuis 2024)</li>
              </ul>

              <h3>Que se passe-t-il si je dépasse 120 jours ?</h3>

              <p><strong>Sanctions applicables</strong> :</p>
              <ul>
                <li>❌ <strong>Amende jusqu'à 10 000€</strong> pour non-respect règle 120 jours</li>
                <li>❌ <strong>Amende supplémentaire 50 000€</strong> si pas d'autorisation changement d'usage (Paris, grandes villes)</li>
                <li>❌ Blocage compte Airbnb possible (mairie peut demander à Airbnb)</li>
              </ul>

              <h3>Comment Airbnb contrôle les 120 jours ?</h3>

              <p>
                Depuis 2024, Airbnb <strong>bloque automatiquement le calendrier à 120 jours</strong> pour les annonces déclarées "résidence principale" sans autorisation. Vous ne pouvez plus réserver au-delà sauf à fournir une autorisation de changement d'usage.
              </p>

              <div className="bg-teal-50 p-6 rounded-lg border-2 border-teal-200 my-6">
                <p className="font-semibold text-teal-900 mb-2">✅ Bonne pratique</p>
                <p className="text-teal-800 text-sm">
                  Gardez une marge de sécurité : visez <strong>110 jours maximum</strong> pour éviter tout dépassement accidentel (annulation tardive qui devient réservation, etc.). Activez les notifications Airbnb pour suivre votre compteur.
                </p>
              </div>

              <h2>🏛️ Numéro d'enregistrement : Obligation dans 1000+ communes</h2>

              <p>
                Depuis 2017, des milliers de communes françaises ont instauré un <strong>numéro d'enregistrement obligatoire</strong> pour toute location meublée de tourisme.
              </p>

              <h3>Villes concernées (liste non exhaustive)</h3>

              <p><strong>Villes avec numéro obligatoire</strong> :</p>
              <ul>
                <li>🏙️ Paris et petite couronne (75, 92, 93, 94)</li>
                <li>🏙️ Lyon, Marseille, Bordeaux, Toulouse, Nice, Nantes, Strasbourg, Montpellier, Lille, Rennes</li>
                <li>🏖️ Stations balnéaires : Biarritz, La Rochelle, Arcachon, Cannes, Antibes, etc.</li>
                <li>🏔️ Stations de ski : Chamonix, Courchevel, Val d'Isère, Megève, etc.</li>
                <li>📍 <strong>Toute zone tendue</strong> (1000+ communes au total)</li>
              </ul>

              <p>
                ➡️ <strong>Vérifiez sur le site de votre mairie</strong> si un numéro est obligatoire. En cas de doute, demandez au service urbanisme.
              </p>

              <h3>Comment obtenir le numéro d'enregistrement ?</h3>

              <p><strong>Procédure standard</strong> :</p>
              <ol>
                <li>📝 Remplir le formulaire en ligne (téléservice local) ou papier en mairie</li>
                <li>📄 Fournir : pièce identité, justificatif propriété, plan logement, attestation résidence principale (si applicable)</li>
                <li>⏱️ Délai réponse : immédiat à 2 mois selon commune</li>
                <li>🆓 Gratuit (dans la majorité des villes)</li>
                <li>📧 Réception numéro par email ou courrier (format : 75112345678912 pour Paris)</li>
              </ol>

              <h3>Où afficher le numéro ?</h3>

              <ul>
                <li>✅ <strong>Dans le titre ou la description de l'annonce Airbnb</strong> (obligation légale)</li>
                <li>✅ Format recommandé : "Numéro d'enregistrement : 75112345678912" (fin de description)</li>
              </ul>

              <h3>Sanctions absence de numéro</h3>

              <ul>
                <li>❌ <strong>Amende jusqu'à 50 000€</strong> (article L324-1-1 du code du tourisme)</li>
                <li>❌ Suppression annonce Airbnb (mairie peut demander retrait)</li>
                <li>❌ Impossibilité de louer légalement</li>
              </ul>

              <h2>🔐 Autorisation de changement d'usage : Résidence secondaire en zone tendue</h2>

              <p>
                Dans les <strong>villes en tension immobilière</strong> (Paris, Lyon, Bordeaux, Nice, Marseille, etc.), transformer une résidence secondaire en meublé de tourisme nécessite une <strong>autorisation de changement d'usage</strong>.
              </p>

              <h3>Principe</h3>

              <p>
                L'autorisation vise à <strong>protéger le parc immobilier résidentiel</strong>. Pour chaque m² transformé en location touristique, vous devez "compenser" en transformant un m² de local commercial en habitation.
              </p>

              <h3>Comment obtenir l'autorisation ?</h3>

              <p><strong>Procédure Paris (exemple)</strong> :</p>
              <ol>
                <li>📝 Dossier autorisation changement d'usage + demande compensation</li>
                <li>🏢 Trouver un <strong>local commercial à transformer en habitation</strong> (surface équivalente)</li>
                <li>💰 <strong>Coût compensation : 50 000-150 000€</strong> (achat local commercial + travaux transformation)</li>
                <li>⏱️ Délai réponse mairie : 2-6 mois</li>
              </ol>

              <p>
                <strong>Alternative</strong> : Payer une <strong>compensation financière à la mairie</strong> (10 000-40 000€ selon ville et surface). La mairie se charge de la transformation avec cet argent.
              </p>

              <h3>Conséquence si pas d'autorisation</h3>

              <ul>
                <li>❌ <strong>Amende jusqu'à 50 000€</strong></li>
                <li>❌ <strong>Astreinte de 1 000€/jour</strong> tant que situation non régularisée</li>
                <li>❌ Ordre de cesser l'activité immédiatement</li>
              </ul>

              <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 my-6">
                <p className="font-semibold text-amber-900 mb-2">💡 Alternative légale</p>
                <p className="text-amber-800 text-sm">
                  Si vous ne pouvez pas obtenir d'autorisation changement d'usage, privilégiez la <strong>location à l'année en bail mobilité</strong> (séjours 1-10 mois) ou <strong>location longue durée classique</strong>. Ces options ne nécessitent pas d'autorisation.
                </p>
              </div>

              <h2>🏢 Règlement de copropriété : Vérification obligatoire</h2>

              <p>
                Même si la loi autorise Airbnb, <strong>votre copropriété peut l'interdire</strong> via son règlement.
              </p>

              <h3>Que peut interdire une copropriété ?</h3>

              <ul>
                <li>❌ Interdiction totale de location meublée de tourisme</li>
                <li>❌ Limitation durée minimum (ex : minimum 7 jours)</li>
                <li>⚠️ Autorisation préalable du syndic requise</li>
              </ul>

              <h3>Comment vérifier ?</h3>

              <ol>
                <li>📄 Consulter le <strong>règlement de copropriété</strong> (annexe acte de vente)</li>
                <li>📧 Demander confirmation écrite au <strong>syndic de copropriété</strong></li>
                <li>📋 Vérifier les <strong>derniers PV d'assemblée générale</strong> (modifications possibles)</li>
              </ol>

              <h3>Sanctions violation règlement copropriété</h3>

              <ul>
                <li>❌ Mise en demeure de cesser l'activité</li>
                <li>❌ Procédure judiciaire (tribunal de grande instance)</li>
                <li>❌ <strong>Amende jusqu'à 20 000€</strong> (décision juge)</li>
                <li>❌ Dommages et intérêts envers copropriété</li>
              </ul>

              <h2>📊 Tableau récapitulatif : Résidence principale vs secondaire</h2>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Critère</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Résidence principale</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Résidence secondaire</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Durée location max</td>
                      <td className="border border-gray-300 px-4 py-2">120 jours/an</td>
                      <td className="border border-gray-300 px-4 py-2">365 jours/an (si autorisé)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Numéro enregistrement</td>
                      <td className="border border-gray-300 px-4 py-2">✅ Obligatoire (zones concernées)</td>
                      <td className="border border-gray-300 px-4 py-2">✅ Obligatoire (zones concernées)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Autorisation changement usage</td>
                      <td className="border border-gray-300 px-4 py-2">❌ Non nécessaire</td>
                      <td className="border border-gray-300 px-4 py-2">✅ Obligatoire (zones tendues)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Compensation</td>
                      <td className="border border-gray-300 px-4 py-2">❌ Non</td>
                      <td className="border border-gray-300 px-4 py-2">✅ Oui (50k-150k€ Paris)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Règlement copropriété</td>
                      <td className="border border-gray-300 px-4 py-2">⚠️ Vérifier (peut interdire)</td>
                      <td className="border border-gray-300 px-4 py-2">⚠️ Vérifier (peut interdire)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>🎯 Conclusion : Check-list conformité 2025</h2>

              <p><strong>Pour être 100% en règle sur Airbnb en 2025</strong> :</p>

              <ol>
                <li>✅ <strong>Identifier le statut de votre bien</strong> : résidence principale ou secondaire ?</li>
                <li>✅ <strong>Respecter la limite 120 jours</strong> (si résidence principale)</li>
                <li>✅ <strong>Obtenir le numéro d'enregistrement</strong> (si commune concernée) + l'afficher sur annonce</li>
                <li>✅ <strong>Obtenir autorisation changement d'usage</strong> (si résidence secondaire zone tendue)</li>
                <li>✅ <strong>Vérifier règlement copropriété</strong> (autorisation syndic si nécessaire)</li>
                <li>✅ <strong>Déclarer activité SIRET</strong> (formulaire P0i)</li>
                <li>✅ <strong>Déclarer revenus fiscaux</strong> (BIC - LMNP)</li>
                <li>✅ <strong>Collecter et reverser taxe de séjour</strong></li>
              </ol>

              <p>
                La réglementation Airbnb est complexe mais <strong>le non-respect coûte très cher</strong> (amendes 10 000-50 000€). Prenez le temps de vous mettre en conformité avant de lancer votre activité.
              </p>

            </div>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}
