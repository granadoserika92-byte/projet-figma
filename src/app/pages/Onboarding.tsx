import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { ArrowRight, Upload, Check, Home } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface FormData {
  // Informations propriétaire
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  
  // Informations logement
  adresseLogement: string;
  ville: string;
  codePostal: string;
  typeLogement: string;
  surface: string;
  
  // Caractéristiques extérieures
  terrasse: boolean;
  balcon: boolean;
  piscine: boolean;
  dimensionsPiscine: string;
  jardin: boolean;
  parking: boolean;
  
  // Chambres et équipements
  nombreChambres: string;
  nombreWC: string;
  nombreSallesBain: string;
  
  // Dimensions des lits
  litsSimples: string;
  litsDoubles: string;
  litsQueenSize: string;
  litsKingSize: string;
  canapeLit: string;
  
  // Équipements de base
  wifi: boolean;
  television: boolean;
  cuisineEquipee: boolean;
  laveLinge: boolean;
  laveVaisselle: boolean;
  climatisation: boolean;
  chauffage: boolean;
  
  // Petit électroménager
  microOndes: boolean;
  grillePain: boolean;
  bouilloire: boolean;
  machineCafe: boolean;
  
  // Batterie de cuisine
  casseroles: boolean;
  faitTout: boolean;
  poeles: boolean;
  
  // Autres ustensiles
  tireBouchon: boolean;
  decapsuleur: boolean;
  ouvreBoites: boolean;
  plancheDecouper: boolean;
  dessousPlat: boolean;
  gantFour: boolean;
  
  // Vaisselle
  assiettes: boolean;
  couverts: boolean;
  ustensileCuisine: boolean;
  verres: boolean;
  verresVin: boolean;
  verresChampagne: boolean;
  carafe: boolean;
  bolsMugs: boolean;
  tassesCafe: boolean;
  saladier: boolean;
  platsFour: boolean;
  passoire: boolean;
  
  // Linge de maison
  couettes: boolean;
  oreillers: boolean;
  secheCheveux: boolean;
  cintres: boolean;
  
  // Ménage et entretien
  climatisationVentilateurs: boolean;
  aspirateur: boolean;
  serpillere: boolean;
  seau: boolean;
  balais: boolean;
  pelleBalaayette: boolean;
  produitsManagers: boolean;
  etendoir: boolean;
  ferRepasser: boolean;
  tableRepasser: boolean;
  pincesLinge: boolean;
  grandRateau: boolean;
  
  // Système d'arrivée
  systemeArrivee: string;
  
  // Règlement
  animauxAcceptes: boolean;
  fumeursAcceptes: boolean;
  evenementsAcceptes: boolean;
  
  // Objectifs et informations complémentaires
  revenusActuels: string;
  objectifRevenus: string;
  complementsInfos: string;
}

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresseLogement: '',
    ville: '',
    codePostal: '',
    typeLogement: '',
    surface: '',
    terrasse: false,
    balcon: false,
    piscine: false,
    dimensionsPiscine: '',
    jardin: false,
    parking: false,
    nombreChambres: '',
    nombreWC: '',
    nombreSallesBain: '',
    litsSimples: '0',
    litsDoubles: '0',
    litsQueenSize: '0',
    litsKingSize: '0',
    canapeLit: '0',
    wifi: false,
    television: false,
    cuisineEquipee: false,
    laveLinge: false,
    laveVaisselle: false,
    climatisation: false,
    chauffage: false,
    microOndes: false,
    grillePain: false,
    bouilloire: false,
    machineCafe: false,
    casseroles: false,
    faitTout: false,
    poeles: false,
    tireBouchon: false,
    decapsuleur: false,
    ouvreBoites: false,
    plancheDecouper: false,
    dessousPlat: false,
    gantFour: false,
    assiettes: false,
    couverts: false,
    ustensileCuisine: false,
    verres: false,
    verresVin: false,
    verresChampagne: false,
    carafe: false,
    bolsMugs: false,
    tassesCafe: false,
    saladier: false,
    platsFour: false,
    passoire: false,
    couettes: false,
    oreillers: false,
    secheCheveux: false,
    cintres: false,
    climatisationVentilateurs: false,
    aspirateur: false,
    serpillere: false,
    seau: false,
    balais: false,
    pelleBalaayette: false,
    produitsManagers: false,
    etendoir: false,
    ferRepasser: false,
    tableRepasser: false,
    pincesLinge: false,
    grandRateau: false,
    systemeArrivee: '',
    animauxAcceptes: false,
    fumeursAcceptes: false,
    evenementsAcceptes: false,
    revenusActuels: '',
    objectifRevenus: '',
    complementsInfos: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Préparer les données pour l'envoi
      const submissionData = {
        ...formData,
        filesCount: files.length,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-a639ce82/onboarding`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(submissionData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setSubmitStatus('error');
      setErrorMessage('Impossible de se connecter au serveur. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <Card className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" strokeWidth={3} />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              Inscription réussie ! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Merci pour votre confiance ! Nous avons bien reçu vos informations.
            </p>
            <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Prochaines étapes :</strong>
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✅ Nous analysons votre bien</li>
                <li>📞 Un expert vous contacte sous 24h</li>
                <li>📸 Planification du shooting photo (optionnel)</li>
                <li>🚀 Mise en ligne optimisée de votre annonce</li>
              </ul>
            </div>
            <a href="/">
              <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white">
                Retour à l'accueil
              </Button>
            </a>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Inscription à notre service
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Complétez les informations sur votre bien pour commencer
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex-1 h-2 rounded-full mx-1 transition-all ${
                  step <= currentStep
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span className={currentStep >= 1 ? 'text-teal-600 font-semibold' : ''}>
              Propriétaire
            </span>
            <span className={currentStep >= 2 ? 'text-teal-600 font-semibold' : ''}>
              Logement
            </span>
            <span className={currentStep >= 3 ? 'text-teal-600 font-semibold' : ''}>
              Équipements
            </span>
            <span className={currentStep >= 4 ? 'text-teal-600 font-semibold' : ''}>
              Finalisation
            </span>
          </div>
        </div>

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg"
          >
            <p className="text-red-700 font-semibold">❌ {errorMessage}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Informations propriétaire */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Vos coordonnées
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <Input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <Input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Votre prénom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <Input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
                  >
                    Suivant
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Informations logement */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Informations sur le logement
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse du logement *
                    </label>
                    <Input
                      type="text"
                      name="adresseLogement"
                      value={formData.adresseLogement}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Numéro et nom de rue"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Ville *
                      </label>
                      <Input
                        type="text"
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Ville"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Code postal *
                      </label>
                      <Input
                        type="text"
                        name="codePostal"
                        value={formData.codePostal}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="13000"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Type de logement *
                      </label>
                      <select
                        name="typeLogement"
                        value={formData.typeLogement}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="Appartement">Appartement</option>
                        <option value="Maison">Maison</option>
                        <option value="Villa">Villa</option>
                        <option value="Studio">Studio</option>
                        <option value="Loft">Loft</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Surface (m²) *
                      </label>
                      <Input
                        type="number"
                        name="surface"
                        value={formData.surface}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="50"
                        min="10"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      Espaces extérieurs
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="terrasse"
                          checked={formData.terrasse}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Terrasse</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="balcon"
                          checked={formData.balcon}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Balcon</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="jardin"
                          checked={formData.jardin}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Jardin</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="parking"
                          checked={formData.parking}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Parking</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      Piscine
                    </h3>
                    
                    <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer mb-4">
                      <input
                        type="checkbox"
                        name="piscine"
                        checked={formData.piscine}
                        onChange={handleChange}
                        className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                      />
                      <span className="text-gray-700 font-semibold">Le logement possède une piscine</span>
                    </label>
                    
                    {formData.piscine && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Dimensions de la piscine
                        </label>
                        <Input
                          type="text"
                          name="dimensionsPiscine"
                          value={formData.dimensionsPiscine}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Ex: 8m x 4m ou 6m de diamètre"
                        />
                      </motion.div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      Configuration intérieure
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre de chambres *
                        </label>
                        <Input
                          type="number"
                          name="nombreChambres"
                          value={formData.nombreChambres}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre de WC *
                        </label>
                        <Input
                          type="number"
                          name="nombreWC"
                          value={formData.nombreWC}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Salles de bain *
                        </label>
                        <Input
                          type="number"
                          name="nombreSallesBain"
                          value={formData.nombreSallesBain}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                  >
                    Retour
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
                  >
                    Suivant
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Équipements et lits */}
          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Équipements et couchages
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      Dimensions des lits *
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Lits simples (90x190)
                        </label>
                        <Input
                          type="number"
                          name="litsSimples"
                          value={formData.litsSimples}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Lits doubles (140x190)
                        </label>
                        <Input
                          type="number"
                          name="litsDoubles"
                          value={formData.litsDoubles}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Lits Queen Size (160x200)
                        </label>
                        <Input
                          type="number"
                          name="litsQueenSize"
                          value={formData.litsQueenSize}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Lits King Size (180x200)
                        </label>
                        <Input
                          type="number"
                          name="litsKingSize"
                          value={formData.litsKingSize}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Canapé-lit
                        </label>
                        <Input
                          type="number"
                          name="canapeLit"
                          value={formData.canapeLit}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      Équipements disponibles
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="wifi"
                          checked={formData.wifi}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">WiFi</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="television"
                          checked={formData.television}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Télévision</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="cuisineEquipee"
                          checked={formData.cuisineEquipee}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Cuisine équipée</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="laveLinge"
                          checked={formData.laveLinge}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Lave-linge</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="laveVaisselle"
                          checked={formData.laveVaisselle}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Lave-vaisselle</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="climatisation"
                          checked={formData.climatisation}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Climatisation</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="chauffage"
                          checked={formData.chauffage}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Chauffage</span>
                      </label>
                    </div>
                  </div>

                  {/* PETIT ÉLECTROMÉNAGER */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">🔌</span>
                      Petit électroménager
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="microOndes"
                          checked={formData.microOndes}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Micro-ondes</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="grillePain"
                          checked={formData.grillePain}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Grille-pain</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="bouilloire"
                          checked={formData.bouilloire}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Bouilloire</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="machineCafe"
                          checked={formData.machineCafe}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Machine à café / cafetière</span>
                      </label>
                    </div>
                  </div>

                  {/* BATTERIE DE CUISINE */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">🍳</span>
                      Batterie de cuisine
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="casseroles"
                          checked={formData.casseroles}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Casseroles (1 petite et 1 grande)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="faitTout"
                          checked={formData.faitTout}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Fait-tout</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="poeles"
                          checked={formData.poeles}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Poêles (1 petite et 1 grande)</span>
                      </label>
                    </div>
                  </div>

                  {/* AUTRES USTENSILES */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">🔪</span>
                      Autres ustensiles
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="tireBouchon"
                          checked={formData.tireBouchon}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Tire-bouchon</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="decapsuleur"
                          checked={formData.decapsuleur}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Décapsuleur</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="ouvreBoites"
                          checked={formData.ouvreBoites}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Ouvre-boîtes</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="plancheDecouper"
                          checked={formData.plancheDecouper}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Planche à découper</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="dessousPlat"
                          checked={formData.dessousPlat}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Dessous de plat</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="gantFour"
                          checked={formData.gantFour}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Gant pour le four</span>
                      </label>
                    </div>
                  </div>

                  {/* VAISSELLE */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">🍽️</span>
                      Vaisselle
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="assiettes"
                          checked={formData.assiettes}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Assiettes (grandes, petites et creuses)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="couverts"
                          checked={formData.couverts}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Couverts (complet)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="ustensileCuisine"
                          checked={formData.ustensileCuisine}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Ustensiles de cuisine (cuillère, louche...)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="verres"
                          checked={formData.verres}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Verres</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="verresVin"
                          checked={formData.verresVin}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Verres à vin</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="verresChampagne"
                          checked={formData.verresChampagne}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Verres à champagne (optionnel)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="carafe"
                          checked={formData.carafe}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Carafe</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="bolsMugs"
                          checked={formData.bolsMugs}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Bols / Mugs</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="tassesCafe"
                          checked={formData.tassesCafe}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Tasses à café</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="saladier"
                          checked={formData.saladier}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Saladier</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="platsFour"
                          checked={formData.platsFour}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Plats pour le four</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="passoire"
                          checked={formData.passoire}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Passoire / égouttoir</span>
                      </label>
                    </div>
                  </div>

                  {/* LINGE DE MAISON */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">🛏️</span>
                      Linge de maison
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="couettes"
                          checked={formData.couettes}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Couettes (1 par lit)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="oreillers"
                          checked={formData.oreillers}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Oreillers (1 par personne)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="secheCheveux"
                          checked={formData.secheCheveux}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Sèche-cheveux (1 par salle de bain)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="cintres"
                          checked={formData.cintres}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Cintres</span>
                      </label>
                    </div>
                  </div>

                  {/* MÉNAGE ET ENTRETIEN */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">🧹</span>
                      Ménage et entretien
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="climatisationVentilateurs"
                          checked={formData.climatisationVentilateurs}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Ventilateurs (1 par pièce)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="aspirateur"
                          checked={formData.aspirateur}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Aspirateur (traîneau sans sac)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="serpillere"
                          checked={formData.serpillere}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Serpillère (pliable type veleda)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="seau"
                          checked={formData.seau}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Seau</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="balais"
                          checked={formData.balais}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Balais</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="pelleBalaayette"
                          checked={formData.pelleBalaayette}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Pelle-balayette</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="produitsManagers"
                          checked={formData.produitsManagers}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Produits ménagers</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="etendoir"
                          checked={formData.etendoir}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Étendoir</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="ferRepasser"
                          checked={formData.ferRepasser}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Fer à repasser</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="tableRepasser"
                          checked={formData.tableRepasser}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Table à repasser (optionnel)</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="pincesLinge"
                          checked={formData.pincesLinge}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Pinces à linge</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="grandRateau"
                          checked={formData.grandRateau}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Grand râteau (si gazon synthétique)</span>
                      </label>
                    </div>
                  </div>

                  {/* SYSTÈME D'ARRIVÉE */}
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">🔑</span>
                      Système d'arrivée *
                    </h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="systemeArrivee"
                          value="boiteACle"
                          checked={formData.systemeArrivee === 'boiteACle'}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 focus:ring-teal-500"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">Boîte à clé</div>
                          <div className="text-sm text-gray-600">Boîte sécurisée avec code</div>
                        </div>
                      </label>
                      
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="systemeArrivee"
                          value="serrureConnectee"
                          checked={formData.systemeArrivee === 'serrureConnectee'}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 focus:ring-teal-500"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">Serrure connectée</div>
                          <div className="text-sm text-gray-600">Serrure électronique intelligente</div>
                        </div>
                      </label>
                      
                      <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="systemeArrivee"
                          value="physique"
                          checked={formData.systemeArrivee === 'physique'}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 focus:ring-teal-500"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">Remise physique</div>
                          <div className="text-sm text-gray-600">Remise en main propre</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      Règlement intérieur
                    </h3>
                    
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="animauxAcceptes"
                          checked={formData.animauxAcceptes}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Animaux acceptés</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="fumeursAcceptes"
                          checked={formData.fumeursAcceptes}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Fumeurs acceptés</span>
                      </label>
                      
                      <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="evenementsAcceptes"
                          checked={formData.evenementsAcceptes}
                          onChange={handleChange}
                          className="w-5 h-5 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <span className="text-gray-700">Événements / fêtes autorisés</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                  >
                    Retour
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
                  >
                    Suivant
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Step 4: Finalisation */}
          {currentStep === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Finalisation
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      Vos objectifs
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Revenus actuels (si déjà en location)
                        </label>
                        <Input
                          type="text"
                          name="revenusActuels"
                          value={formData.revenusActuels}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Ex: 1500€/mois"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Objectif de revenus mensuels
                        </label>
                        <Input
                          type="text"
                          name="objectifRevenus"
                          value={formData.objectifRevenus}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Ex: 2500€/mois"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Documents et photos (optionnel)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-500 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-2">
                        Glissez vos fichiers ici ou cliquez pour parcourir
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        Photos du bien, plans, liste de l'inventaire, etc.
                      </p>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        accept="image/*,.pdf,.doc,.docx"
                        className="hidden"
                        id="fileUpload"
                      />
                      <label
                        htmlFor="fileUpload"
                        className="inline-block px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg cursor-pointer transition-colors"
                      >
                        Sélectionner des fichiers
                      </label>
                    </div>
                    {files.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                          Fichiers sélectionnés : {files.length}
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {files.map((file, index) => (
                            <li key={index}>✓ {file.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Informations complémentaires
                    </label>
                    <Textarea
                      name="complementsInfos"
                      value={formData.complementsInfos}
                      onChange={handleChange}
                      className="w-full"
                      rows={6}
                      placeholder="Ajoutez toute information importante : particularités du bien, équipements spécifiques, contraintes d'accès, etc."
                    />
                  </div>

                  <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                    <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      Récapitulatif de votre inscription
                    </h4>
                    <div className="text-sm text-amber-800 space-y-1">
                      <p>✓ Forfait : 239€/mois</p>
                      <p>✓ Sans engagement</p>
                      <p>✓ Audit gratuit sous 24h</p>
                      <p>✓ Mise en ligne optimisée incluse</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                  >
                    Retour
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Valider mon inscription'}
                    <Check className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
}