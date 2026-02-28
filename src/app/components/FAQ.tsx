import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: "Combien coûte une conciergerie Airbnb ?",
    answer: "Notre conciergerie Airbnb propose un tarif fixe de 180€/mois, sans commission sur vos réservations. En comparaison, les conciergeries traditionnelles facturent entre 15% et 30% de commission (soit 400€ minimum pour un appartement), ce qui représente une économie de 2 640€ par an pour un propriétaire qui génère 2 000€/mois."
  },
  {
    question: "Quelle est la différence entre gestion Airbnb et conciergerie Airbnb ?",
    answer: "Une conciergerie Airbnb traditionnelle inclut des prestations physiques (ménage, accueil, conciergerie sur place), tandis que notre gestion Airbnb 100% digitale se concentre sur l'optimisation de votre annonce, la tarification dynamique, la gestion des voyageurs 7j/7 et l'automatisation complète. Vous gérez le ménage localement, nous gérons tout le reste à distance."
  },
  {
    question: "Comment fonctionne la gestion locative courte durée à distance ?",
    answer: "Notre solution de gestion locative courte durée est 100% digitale : nous créons et optimisons votre annonce, synchronisons toutes vos plateformes (Airbnb, Booking, Abritel), gérons la communication avec vos voyageurs 7j/7, ajustons automatiquement vos tarifs et vous donnez accès à un espace propriétaire pour suivre vos performances en temps réel."
  },
  {
    question: "Quels services sont inclus dans le forfait à 180€/mois ?",
    answer: "Le forfait inclut : création/refonte d'annonce optimisée, optimisation SEO, tarification dynamique, synchronisation multi-plateformes (Airbnb, Booking, Abritel), gestion voyageurs 7j/7, automatisation des messages, optimisation du taux d'occupation, et accès à votre espace propriétaire dédié. Les frais de ménage sont facturés directement au voyageur."
  },
  {
    question: "Travaillez-vous partout en France et dans les DOM-TOM ?",
    answer: "Oui ! Notre gestion Airbnb 100% digitale nous permet d'accompagner des propriétaires dans toute la France (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Nantes, Nice) et dans tous les DOM-TOM (Guadeloupe, Martinique, Réunion, Guyane, Mayotte). Aucun déplacement physique n'est nécessaire."
  },
  {
    question: "Comment optimisez-vous mon taux d'occupation ?",
    answer: "Nous utilisons une stratégie complète : optimisation SEO de votre annonce pour apparaître en premier sur Airbnb et Booking, tarification dynamique qui ajuste automatiquement vos prix selon la demande, synchronisation multi-plateformes pour maximiser votre visibilité, et analyse de la concurrence locale pour rester compétitif."
  },
  {
    question: "Y a-t-il un engagement ou des frais cachés ?",
    answer: "Non, aucun engagement ! Vous payez uniquement 180€/mois, sans commission sur vos réservations et sans frais cachés. Vous pouvez arrêter quand vous voulez. Les seules options payantes sont le livret d'accueil digital (15€/mois, optionnel) et le shooting photo professionnel (à partir de 170€, sur devis)."
  },
  {
    question: "Puis-je gérer plusieurs biens avec votre service ?",
    answer: "Oui ! Notre forfait à 180€/mois est par bien. Si vous avez plusieurs propriétés en location courte durée, chaque bien nécessite un abonnement séparé. Contactez-nous pour des tarifs dégressifs à partir de 3 biens."
  },
  {
    question: "Que se passe-t-il si je veux arrêter le service ?",
    answer: "Aucun problème ! Notre service est sans engagement. Vous pouvez arrêter à tout moment avec un simple préavis d'un mois. Nous vous restituons tous les accès à vos plateformes et vous conservez bien sûr toutes les optimisations réalisées (annonce, photos, tarification)."
  },
  {
    question: "Comment gérez-vous les problèmes urgents avec les voyageurs ?",
    answer: "Notre équipe est disponible 7j/7 pour gérer toutes les urgences : problème de check-in, équipement défaillant, réclamation voyageur. Nous répondons dans les 30 minutes en moyenne et trouvons une solution rapidement. En cas d'intervention physique nécessaire, nous coordonnons avec vos prestataires locaux."
  },
  {
    question: "Quelle est la différence avec des concurrents comme Luckey Homes ou GuestReady ?",
    answer: "Les conciergeries traditionnelles comme Luckey Homes facturent 15-25% de commission sur chaque réservation, soit 400€ à 2000€/mois pour un bien moyen. Notre tarif fixe de 180€/mois vous fait économiser jusqu'à 6 840€/an. De plus, nous vous laissons le contrôle total de votre bien et de votre espace propriétaire."
  },
  {
    question: "Dois-je avoir une expérience préalable de la location courte durée ?",
    answer: "Absolument pas ! Nous accompagnons aussi bien les propriétaires débutants que les expérimentés. Nous créons votre annonce de A à Z, gérons toute la partie administrative et technique, et vous formons à l'utilisation de votre espace propriétaire. Vous n'avez qu'à profiter des revenus."
  },
  {
    question: "Comment fonctionne la tarification dynamique concrètement ?",
    answer: "Notre algorithme de tarification analyse en temps réel plus de 50 critères : demande locale, événements à venir, tarifs concurrents, saisonnalité, jour de la semaine, durée de séjour. Les prix sont ajustés quotidiennement pour maximiser à la fois votre taux d'occupation et vos revenus. En moyenne, nos clients gagnent 35% de plus qu'avec un tarif fixe."
  },
  {
    question: "Que faire si mon bien nécessite des réparations entre deux voyageurs ?",
    answer: "Les réparations et la maintenance ne sont pas incluses dans notre forfait, mais nous coordonnons tout ! Nous identifions le problème avec le voyageur, contactons vos prestataires locaux (plombier, électricien, etc.), planifions l'intervention et vous tenons informé. Vous ne payez que l'intervention du prestataire."
  },
  {
    question: "Puis-je bloquer des dates pour utiliser mon logement personnellement ?",
    answer: "Bien sûr ! Votre espace propriétaire vous permet de bloquer n'importe quelle période en un clic. Les dates sont automatiquement synchronisées sur toutes les plateformes. Vous restez 100% maître de votre calendrier et pouvez profiter de votre bien quand vous le souhaitez."
  },
  {
    question: "Proposez-vous des services de ménage et de linge ?",
    answer: "Le ménage et le linge ne sont pas inclus dans notre forfait de 180€/mois, car les prix varient énormément selon la région. Nous vous mettons en relation avec des prestataires de confiance dans votre zone, et les frais de ménage sont automatiquement facturés au voyageur à chaque réservation. Vous n'avancez rien."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur notre conciergerie Airbnb
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600 mb-4">
              Vous avez d'autres questions ?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Contactez-nous →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}