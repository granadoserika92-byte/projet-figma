#!/usr/bin/env python3
"""
Script pour remplacer toutes les couleurs violettes par teal/amber
"""

import os
import re

# Table de remplacement
COLOR_REPLACEMENTS = {
    'indigo-700': 'teal-700',
    'indigo-600': 'teal-600',
    'indigo-500': 'teal-500',
    'indigo-400': 'teal-400',
    'indigo-300': 'teal-300',
    'indigo-200': 'teal-200',
    'indigo-100': 'teal-100',
    'indigo-50': 'teal-50',
    'purple-700': 'amber-600',
    'purple-600': 'amber-500',
    'purple-500': 'amber-400',
    'purple-400': 'amber-300',
    'purple-300': 'amber-300',
    'purple-200': 'amber-200',
    'purple-100': 'amber-100',
    'purple-50': 'amber-50',
    'pink-600': 'amber-500',
    'pink-500': 'amber-400',
}

# Fichiers à corriger
FILES_TO_FIX = [
    '/src/app/components/Pricing.tsx',
    '/src/app/components/CGV.tsx',
    '/src/app/components/PolitiqueConfidentialite.tsx',
    '/src/app/pages/CreationAnnonce.tsx',
    '/src/app/pages/OptimisationSEO.tsx',
    '/src/app/pages/TarificationDynamique.tsx',
    '/src/app/pages/MultiPlateformes.tsx',
    '/src/app/pages/GestionVoyageurs.tsx',
    '/src/app/pages/Automatisation.tsx',
    '/src/app/pages/OptimisationOccupation.tsx',
    '/src/app/pages/EspaceProprietaire.tsx',
    '/src/app/pages/ErrorPage.tsx',
    '/src/app/pages/GestionAirbnb.tsx',
    '/src/app/pages/GestionLocativeCourteDuree.tsx',
    '/src/app/pages/ConciergerieAirbnbFrance.tsx',
]

def fix_colors_in_file(filepath):
    """Remplace les couleurs dans un fichier"""
    print(f"Traitement de {filepath}...")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        replacements_count = 0
        
        # Appliquer chaque remplacement
        for old_color, new_color in COLOR_REPLACEMENTS.items():
            count = content.count(old_color)
            if count > 0:
                content = content.replace(old_color, new_color)
                replacements_count += count
                print(f"  - {old_color} → {new_color} : {count} occurrences")
        
        # Écrire le fichier modifié
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  ✅ {replacements_count} remplacements effectués\n")
            return replacements_count
        else:
            print(f"  ⏭️  Aucune modification nécessaire\n")
            return 0
    
    except FileNotFoundError:
        print(f"  ❌ Fichier non trouvé\n")
        return 0
    except Exception as e:
        print(f"  ❌ Erreur : {e}\n")
        return 0

def main():
    print("🎨 CORRECTION DES COULEURS VIOLETTES → TEAL/AMBER\n")
    print("=" * 60)
    
    total_replacements = 0
    files_modified = 0
    
    for filepath in FILES_TO_FIX:
        replacements = fix_colors_in_file(filepath)
        if replacements > 0:
            files_modified += 1
            total_replacements += replacements
    
    print("=" * 60)
    print(f"\n✅ TERMINÉ !")
    print(f"   Fichiers modifiés : {files_modified}/{len(FILES_TO_FIX)}")
    print(f"   Total remplacements : {total_replacements}")

if __name__ == '__main__':
    main()
