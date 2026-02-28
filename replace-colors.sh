#!/bin/bash
# Script de remplacement global des couleurs indigo/purple → teal/cyan

# Liste des fichiers à modifier
files=(
  "/src/app/components/Pricing.tsx"
  "/src/app/components/HowItWorks.tsx"
  "/src/app/components/Testimonials.tsx"
  "/src/app/components/CTA.tsx"
  "/src/app/components/Comparison.tsx"
  "/src/app/components/MentionsLegales.tsx"
  "/src/app/components/CGV.tsx"
  "/src/app/components/PolitiqueConfidentialite.tsx"
  "/src/app/components/FAQ.tsx"
  "/src/app/pages/CreationAnnonce.tsx"
  "/src/app/pages/OptimisationSEO.tsx"
  "/src/app/pages/TarificationDynamique.tsx"
  "/src/app/pages/MultiPlateformes.tsx"
  "/src/app/pages/GestionVoyageurs.tsx"
  "/src/app/pages/Automatisation.tsx"
  "/src/app/pages/OptimisationOccupation.tsx"
  "/src/app/pages/EspaceProprietaire.tsx"
  "/src/app/pages/ErrorPage.tsx"
  "/src/app/pages/GestionAirbnb.tsx"
  "/src/app/pages/GestionLocativeCourteDuree.tsx"
  "/src/app/pages/ConciergerieAirbnbFrance.tsx"
)

# Remplacements
declare -A replacements=(
  ["from-indigo-600 to-purple-600"]="from-teal-600 to-cyan-600"
  ["from-indigo-700 to-purple-700"]="from-teal-700 to-cyan-700"
  ["from-indigo-500 to-purple-500"]="from-teal-500 to-cyan-500"
  ["from-purple-500 to-pink-500"]="from-amber-500 to-yellow-500"
  ["text-indigo-600"]="text-teal-600"
  ["text-indigo-800"]="text-teal-800"
  ["text-purple-600"]="text-cyan-600"
  ["bg-indigo-50"]="bg-teal-50"
  ["bg-indigo-100"]="bg-teal-100"
  ["bg-indigo-600"]="bg-teal-600"
  ["bg-purple-50"]="bg-cyan-50"
  ["bg-purple-100"]="bg-cyan-100"
  ["border-indigo-100"]="border-teal-100"
  ["border-indigo-200"]="border-teal-200"
  ["border-indigo-300"]="border-teal-300"
  ["border-indigo-400"]="border-teal-400"
  ["hover:text-indigo-600"]="hover:text-teal-600"
  ["hover:text-indigo-700"]="hover:text-teal-700"
  ["hover:bg-indigo-50"]="hover:bg-teal-50"
  ["hover:border-indigo-600"]="hover:border-teal-600"
  ["via-indigo-50"]="via-teal-50"
  ["via-purple-50"]="via-cyan-50"
  ["to-purple-50"]="to-cyan-50"
  ["to-pink-50"]="to-amber-50"
  ["from-pink-500"]="from-amber-500"
  ["to-pink-500"]="to-yellow-500"
  ["via-purple-600"]="via-cyan-600"
  ["to-pink-600"]="to-amber-600"
)

echo "🔄 Remplacement des couleurs en cours..."

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "📝 Modification de $file"
    for search in "${!replacements[@]}"; do
      replace="${replacements[$search]}"
      sed -i "s/$search/$replace/g" "$file"
    done
  fi
done

echo "✅ Remplacement terminé!"
