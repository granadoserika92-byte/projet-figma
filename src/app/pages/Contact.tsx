import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    typeLogement: 'appartement',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez ajouter l'envoi réel du formulaire
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contactez-Nous - Les Clés du Cabanon | Conciergerie Airbnb"
        description="Contactez Les Clés du Cabanon pour toute question sur notre service de conciergerie Airbnb à 239€/mois. Réponse sous 24h garantie. Tel: 06 25 40 14 80"
        canonical="https://www.clesducabanon.fr/contact"
        keywords="contact conciergerie airbnb, devis gestion airbnb, rendez-vous conciergerie, questions gestion location courte durée"
      />
      
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <MessageCircle className="w-16 h-16 text-teal-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Parlons de Votre{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Projet Airbnb
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Une question ? Un projet ? Notre équipe vous répond sous 24h maximum. 
                Nous sommes là pour vous accompagner dans la gestion de votre location courte durée.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-50 to-white p-6 rounded-2xl border border-teal-200 text-center"
              >
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                <a href="tel:+33625401480" className="text-teal-600 hover:text-teal-700 font-semibold">
                  (+33) 6 25 40 14 80
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-2xl border border-cyan-200 text-center"
              >
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:contact@lesclesducabanon.fr" className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm">
                  contact@lesclesducabanon.fr
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border border-yellow-200 text-center"
              >
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Horaires</h3>
                <p className="text-gray-600 text-sm">
                  Lun - Ven<br />
                  9h - 19h
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Zone</h3>
                <p className="text-gray-600 text-sm">
                  France entière<br />
                  + DOM-TOM
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left: Why Contact Us */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Pourquoi Nous Contacter ?
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Estimation Personnalisée</h3>
                        <p className="text-gray-600 text-sm">
                          Obtenez une estimation précise de vos revenus potentiels avec notre forfait à 239€/mois
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Rendez-vous Gratuit</h3>
                        <p className="text-gray-600 text-sm">
                          Échangez avec un expert pour comprendre notre méthode et comment nous pouvons vous aider
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Questions & Conseils</h3>
                        <p className="text-gray-600 text-sm">
                          Posez-nous toutes vos questions sur la gestion Airbnb, les revenus, la fiscalité, etc.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Send className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Réponse Rapide</h3>
                        <p className="text-gray-600 text-sm">
                          Nous répondons à tous les messages sous 24h maximum, même le week-end
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-teal-50 border border-teal-200 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong className="text-teal-700">Engagement qualité :</strong> Nous prenons le temps de comprendre votre projet et vous proposons une solution sur-mesure adaptée à vos besoins.
                    </p>
                  </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Envoyez-Nous Un Message
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-green-900 mb-2">
                        Message Envoyé !
                      </h3>
                      <p className="text-green-700 text-sm">
                        Nous avons bien reçu votre message et vous répondrons sous 24h maximum.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Jean Dupont"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="jean.dupont@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          required
                          value={formData.telephone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="06 12 34 56 78"
                        />
                      </div>

                      <div>
                        <label htmlFor="ville" className="block text-sm font-semibold text-gray-700 mb-2">
                          Ville du bien
                        </label>
                        <input
                          type="text"
                          id="ville"
                          name="ville"
                          value={formData.ville}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Paris, Lyon, Guadeloupe..."
                        />
                      </div>

                      <div>
                        <label htmlFor="typeLogement" className="block text-sm font-semibold text-gray-700 mb-2">
                          Type de logement
                        </label>
                        <select
                          id="typeLogement"
                          name="typeLogement"
                          value={formData.typeLogement}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        >
                          <option value="appartement">Appartement</option>
                          <option value="studio">Studio</option>
                          <option value="maison">Maison</option>
                          <option value="villa">Villa</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Votre message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                          placeholder="Décrivez votre projet ou posez-nous vos questions..."
                        />
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-6 text-lg"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Envoyer le message
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        En envoyant ce formulaire, vous acceptez d'être recontacté par notre équipe. 
                        Vos données sont traitées conformément à notre politique de confidentialité.
                      </p>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Questions Fréquentes
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Sous combien de temps recevrai-je une réponse ?
                  </h3>
                  <p className="text-gray-600">
                    Nous répondons à tous les messages sous <strong>24h maximum</strong>, même le week-end. 
                    Pour les demandes urgentes, appelez-nous directement au (+33) 6 25 40 14 80.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Le premier contact est-il gratuit et sans engagement ?
                  </h3>
                  <p className="text-gray-600">
                    Oui, absolument ! L'échange initial, l'estimation de revenus et les conseils sont 
                    totalement gratuits et sans aucun engagement de votre part.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Puis-je prendre rendez-vous pour un appel vidéo ?
                  </h3>
                  <p className="text-gray-600">
                    Oui ! Indiquez-le dans votre message et nous vous proposerons plusieurs créneaux 
                    pour un rendez-vous visio de 30 minutes avec un de nos experts.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Quelles informations dois-je préparer avant de vous contacter ?
                  </h3>
                  <p className="text-gray-600">
                    Pour une estimation précise, préparez : le type de bien, la ville, le nombre de pièces, 
                    si le bien est déjà meublé, et votre objectif de revenus mensuels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à Commencer Votre Projet ?
              </h2>
              <p className="text-xl mb-8 text-teal-50">
                Découvrez combien vous pourriez gagner avec notre conciergerie Airbnb à 239€/mois
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/inscription">
                  <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-6">
                    Commencer l'inscription
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}