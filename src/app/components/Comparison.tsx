import { motion } from 'motion/react';
import { Check, TrendingDown, TrendingUp, Home, Building, X, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';

const comparisons = [
  {
    type: 'Appartement',
    icon: Building,
    ourPrice: 180,
    competitorPrice: 400,
    savings: 2640,
    savingsPercent: 55,
    color: 'from-teal-500 to-cyan-500',
    revenueOptimized: 2000,
    revenueNonOptimized: 1400,
    revenueLoss: 600,
  },
  {
    type: 'Villa',
    icon: Home,
    ourPrice: 180,
    competitorPrice: 750,
    savings: 6840,
    savingsPercent: 76,
    color: 'from-amber-500 to-yellow-500',
    revenueOptimized: 5000,
    revenueNonOptimized: 3500,
    revenueLoss: 1500,
  },
];

const advantages = [
  'Prix fixe quelle que soit la taille du bien',
  'Aucun frais caché ou supplémentaire',
  'Même niveau de service premium',
  'Support client identique pour tous',
  'Technologie de pointe incluse',
  'Sans engagement, résiliable à tout moment',
];

export function Comparison() {
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
            Pourquoi nous sommes{' '}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              différents ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Économisez jusqu'à 88% par rapport aux conciergeries traditionnelles
          </p>
        </motion.div>

        {/* 3-way Comparison Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 mx-auto`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item.type}</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Sans conciergerie - Perte de revenus */}
                <Card className="p-6 bg-red-50 border-2 border-red-200 relative">
                  <div className="absolute top-4 right-4">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Sans conciergerie
                  </h4>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <X className="w-4 h-4" />
                      <span>Aucune optimisation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <X className="w-4 h-4" />
                      <span>Tarifs non ajustés</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <X className="w-4 h-4" />
                      <span>SEO non optimisé</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <X className="w-4 h-4" />
                      <span>Temps perdu en gestion</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-3 border border-red-200">
                    <p className="text-sm text-gray-600 mb-1">Revenus mensuels</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {item.revenueNonOptimized}€
                    </p>
                  </div>

                  <div className="bg-red-100 border border-red-300 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <p className="text-xs font-semibold text-red-800 uppercase">Perte de revenus</p>
                    </div>
                    <p className="text-xl font-bold text-red-700">
                      -{item.revenueLoss}€/mois
                    </p>
                    <p className="text-xs text-red-600 mt-1">
                      soit -{item.revenueLoss * 12}€/an
                    </p>
                  </div>

                  <p className="text-xs text-center text-red-600 mt-3 font-medium">
                    Coût : 0€ mais revenus non optimisés
                  </p>
                </Card>

                {/* Conciergerie classique */}
                <Card className="p-6 bg-orange-50 border-2 border-orange-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Conciergerie classique
                  </h4>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Optimisation manuelle</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Gestion quotidienne</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <X className="w-4 h-4" />
                      <span>Commission élevée</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <X className="w-4 h-4" />
                      <span>Frais cachés</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-3 border border-orange-200">
                    <p className="text-sm text-gray-600 mb-1">Revenus mensuels optimisés</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {item.revenueOptimized}€
                    </p>
                  </div>

                  <div className="bg-red-100 border border-red-200 rounded-lg p-3 mb-3">
                    <p className="text-xs text-red-800 mb-1 font-semibold uppercase">Coût mensuel</p>
                    <p className="text-2xl font-bold text-red-600">
                      {item.competitorPrice}€/mois
                    </p>
                  </div>

                  <div className="bg-orange-100 border border-orange-300 rounded-lg p-3">
                    <p className="text-xs font-semibold text-orange-800 uppercase mb-1">Coût annuel</p>
                    <p className="text-xl font-bold text-orange-700">
                      {item.competitorPrice * 12}€/an
                    </p>
                  </div>
                </Card>

                {/* Notre solution */}
                <Card className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-300 relative">
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    ✓ Meilleur choix
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Notre gestion digitale
                  </h4>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Optimisation automatique</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Tarification dynamique IA</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>SEO optimisé</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>0% commission</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-3 border-2 border-teal-300">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <p className="text-sm text-gray-600">Revenus mensuels optimisés</p>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      {item.revenueOptimized}€
                    </p>
                  </div>

                  <div className="bg-teal-100 border-2 border-teal-300 rounded-lg p-3 mb-3">
                    <p className="text-xs text-teal-800 mb-1 font-semibold uppercase">Coût mensuel</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      180€/mois
                    </p>
                  </div>

                  <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingDown className="w-4 h-4 text-green-600" />
                      <p className="text-xs font-semibold text-green-800 uppercase">Économie annuelle</p>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      {item.savings}€
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      vs conciergerie classique
                    </p>
                  </div>
                </Card>
              </div>

              {/* Summary for this type */}
              <motion.div
                className="mt-6 text-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  💡 Résumé pour un {item.type}
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-red-600 font-bold">Sans conciergerie</p>
                    <p className="text-gray-600">Perte de {item.revenueLoss * 12}€/an en revenus non optimisés</p>
                  </div>
                  <div>
                    <p className="text-orange-600 font-bold">Conciergerie classique</p>
                    <p className="text-gray-600">Coût de {item.competitorPrice * 12}€/an</p>
                  </div>
                  <div>
                    <p className="text-teal-600 font-bold">Notre solution</p>
                    <p className="text-gray-600">Économie de {item.savings}€/an + revenus optimisés</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Advantages */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-100">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Nos avantages compétitifs
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-2">
            ⚠️ <strong>Attention :</strong> Sans optimisation professionnelle, vous perdez des revenus chaque mois !
          </p>
          <p className="text-gray-600">
            Notre tarif fixe de 180€/mois vous fait économiser jusqu'à 8 000€/an tout en maximisant vos revenus
          </p>
        </motion.div>
      </div>
    </section>
  );
}