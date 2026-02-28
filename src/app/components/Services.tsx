import { motion } from 'motion/react';
import { 
  Calendar, 
  MessageCircle, 
  TrendingUp,
  BarChart3,
  Shield,
  Camera
} from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Calendar,
    title: 'Gestion des réservations',
    description: 'Optimisation des prix, gestion du calendrier et synchronisation multi-plateformes.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: MessageCircle,
    title: 'Communication voyageurs',
    description: 'Réponses rapides 24/7, gestion des messages et assistance complète à distance.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Optimisation des revenus',
    description: 'Stratégie tarifaire dynamique quotidienne et analyse des performances.',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: BarChart3,
    title: 'Synchronisation multi-plateformes',
    description: 'Plus de 50 plateformes synchronisées automatiquement (Airbnb, Booking...).',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Automatisation complète',
    description: 'Système intelligent qui gère tout automatiquement pour un gain de temps maximal.',
    color: 'from-teal-500 to-blue-500',
  },
  {
    icon: Camera,
    title: 'Photos professionnelles *',
    description: 'Shooting photo HD pour maximiser l\'attractivité de votre annonce. À partir de 170€.',
    color: 'from-amber-500 to-orange-500',
    isOption: true,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nos <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gestion complète et professionnelle de votre bien pour votre tranquillité d'esprit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-6 h-full hover:shadow-xl transition-all duration-300 group border-2 ${service.isOption ? 'border-amber-200 bg-amber-50/30' : 'border-transparent hover:border-teal-100'}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                {service.isOption && (
                  <div className="mt-3 pt-3 border-t border-amber-200">
                    <p className="text-sm font-medium text-amber-700">
                      📸 Option sur devis
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Note about options */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-gray-600">
            * Service optionnel disponible sur devis - À partir de 170€ le shooting photo professionnel
          </p>
        </motion.div>
      </div>
    </section>
  );
}