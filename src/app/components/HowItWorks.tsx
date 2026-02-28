import { motion } from 'motion/react';
import { PhoneCall, FileCheck, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Contactez-nous',
    description: 'Appelez-nous ou remplissez notre formulaire. On vous rappelle en moins de 2h.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: FileCheck,
    title: 'Visite en visio de votre bien',
    description: 'Audit complet à distance, photos pro en option et création de l\'annonce optimisée.',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Rocket,
    title: 'Mise en ligne optimisée',
    description: 'On optimise votre annonce, prix et calendrier. Synchronisation multi-plateformes automatique.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Vous profitez',
    description: 'Suivez vos réservations et revenus en temps réel depuis votre espace propriétaire.',
    color: 'from-teal-500 to-emerald-500',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Comment ça{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              marche ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 étapes simples pour commencer à gagner de l'argent avec votre bien
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0" />
                )}

                <div className="relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-700">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg hover:scale-105 transition-transform duration-300`}>
                    <step.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}