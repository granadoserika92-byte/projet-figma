#!/usr/bin/env python3
"""
Script Python pour remplacer toutes les couleurs violettes par teal/jaune
Usage: python3 replace_colors.py
"""

import os
import re
from pathlib import Path

# Mappings de remplacement
REPLACEMENTS = {
    # Indigo → Teal
    'indigo-900': 'teal-900',
    'indigo-800': 'teal-800',
    'indigo-700': 'teal-700',
    'indigo-600': 'teal-600',
    'indigo-500': 'teal-500',
    'indigo-400': 'teal-400',
    'indigo-300': 'teal-300',
    'indigo-200': 'teal-200',
    'indigo-100': 'teal-100',
    'indigo-50': 'teal-50',
    
    # Purple → Amber
    'purple-900': 'amber-600',
    'purple-800': 'amber-600',
    'purple-700': 'amber-600',
    'purple-600': 'amber-500',
    'purple-500': 'amber-400',
    'purple-400': 'amber-300',
    'purple-300': 'amber-300',
    'purple-200': 'amber-200',
    'purple-100': 'amber-100',
    'purple-50': 'amber-50',
    
    # Violet → Cyan
    'violet-600': 'cyan-600',
    'violet-500': 'cyan-500',
}

def replace_colors_in_file(filepath):
    """Remplace les couleurs dans un fichier"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        replacements_made = 0
        
        # Appliquer chaque remplacement
        for old_color, new_color in REPLACEMENTS.items():
            if old_color in content:
                count = content.count(old_color)
                content = content.replace(old_color, new_color)
                replacements_made += count
        
        # Sauvegarder seulement si des changements ont été faits
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return replacements_made
        
        return 0
    except Exception as e:
        print(f"❌ Erreur dans {filepath}: {e}")
        return 0

def main():
    print("🎨 Remplacement des couleurs violettes → teal/jaune...")
    print()
    
    # Chercher tous les fichiers .tsx dans src/app
    src_dir = Path('src/app')
    if not src_dir.exists():
        print(f"❌ Le dossier {src_dir} n'existe pas!")
        return
    
    tsx_files = list(src_dir.rglob('*.tsx'))
    total_files = len(tsx_files)
    total_replacements = 0
    files_modified = 0
    
    print(f"📁 {total_files} fichiers .tsx trouvés")
    print()
    
    for filepath in tsx_files:
        replacements = replace_colors_in_file(filepath)
        if replacements > 0:
            files_modified += 1
            total_replacements += replacements
            print(f"✅ {filepath.relative_to(src_dir)}: {replacements} remplacement(s)")
    
    print()
    print("=" * 60)
    print(f"✅ Terminé!")
    print(f"📊 {files_modified} fichiers modifiés")
    print(f"🎨 {total_replacements} couleurs remplacées")
    print("=" * 60)
    
    # Vérification finale
    print()
    print("🔍 Vérification finale...")
    
    remaining_indigo = 0
    remaining_purple = 0
    
    for filepath in tsx_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            remaining_indigo += len(re.findall(r'\bindigo-\d+', content))
            remaining_purple += len(re.findall(r'\bpurple-\d+', content))
    
    if remaining_indigo == 0 and remaining_purple == 0:
        print("✅ Aucune couleur violette/indigo restante!")
    else:
        print(f"⚠️  Couleurs restantes: {remaining_indigo} indigo, {remaining_purple} purple")

if __name__ == '__main__':
    main()
