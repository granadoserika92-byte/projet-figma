# 🔄 CHANGEMENT DE TARIF : 239€ → 180€/mois

## 📋 RÉCAPITULATIF DES MODIFICATIONS

### Remplacements directs
- `239€` → `180€` (108 occurrences)
- `"239"` → `"180"` (dans schemas JSON - 42 occurrences)
- `2868€` → `2160€` (239€×12 → 180€×12 - 4 occurrences)
- `2 868€` → `2 160€` (3 occurrences)

### Recalcul des économies annuelles

#### Avant (avec 239€/mois) :
- Conciergerie traditionnelle 15% : ~400€/mois = 4800€/an
- Économie : 4800 - 2868 = **1932€/an**

- Conciergerie traditionnelle 25% : ~500€/mois = 6000€/an
- Économie : 6000 - 2868 = **3132€/an**

- Villa haut de gamme 25% : ~2000€/mois = 24000€/an
- Économie : 24000 - 2868 = **21132€/an ≈ 8000€/an** (arrondi conservateur)

#### Après (avec 180€/mois) :
- Conciergerie traditionnelle 15% : ~400€/mois = 4800€/an
- Économie : 4800 - 2160 = **2640€/an** (+708€)

- Conciergerie traditionnelle 25% : ~500€/mois = 6000€/an
- Économie : 6000 - 2160 = **3840€/an** (+708€)

- Villa haut de gamme 25% : ~2000€/mois = 24000€/an
- Économie : 24000 - 2160 = **21840€/an ≈ 10500€/an** (arrondi conservateur, +2500€)

### Fichiers à modifier (30 fichiers)

#### Composants globaux (priorité 1)
1. `/src/app/components/Hero.tsx`
2. `/src/app/components/Pricing.tsx`
3. `/src/app/components/Comparison.tsx`
4. `/src/app/components/SEO.tsx`
5. `/src/app/components/FAQ.tsx`
6. `/src/app/components/CGV.tsx`

#### Pages services (6 fichiers)
7. `/src/app/pages/CreationAnnonce.tsx`
8. `/src/app/pages/OptimisationSEO.tsx`
9. `/src/app/pages/TarificationDynamique.tsx`
10. `/src/app/pages/MultiPlateformes.tsx`
11. `/src/app/pages/GestionVoyageurs.tsx`
12. `/src/app/pages/Automatisation.tsx`
13. `/src/app/pages/OptimisationOccupation.tsx`
14. `/src/app/pages/EspaceProprietaire.tsx`

#### Pages principales (3 fichiers)
15. `/src/app/pages/Home.tsx`
16. `/src/app/pages/GestionAirbnb.tsx`
17. `/src/app/pages/GestionLocativeCourteDuree.tsx`
18. `/src/app/pages/ConciergerieAirbnbFrance.tsx`
19. `/src/app/pages/Onboarding.tsx`

#### Pages DOM-TOM (5 fichiers)
20. `/src/app/pages/ConciergerieAirbnbGuadeloupe.tsx`
21. `/src/app/pages/ConciergerieAirbnbMartinique.tsx`
22. `/src/app/pages/ConciergerieAirbnbReunion.tsx`
23. `/src/app/pages/ConciergerieAirbnbGuyane.tsx`
24. `/src/app/pages/ConciergerieAirbnbMayotte.tsx`

#### Pages villes (12 fichiers)
25. `/src/app/pages/ConciergerieAirbnbParis.tsx`
26. `/src/app/pages/ConciergerieAirbnbLyon.tsx`
27. `/src/app/pages/ConciergerieAirbnbMarseille.tsx`
28. `/src/app/pages/ConciergerieAirbnbToulouse.tsx`
29. `/src/app/pages/ConciergerieAirbnbBordeaux.tsx`
30. `/src/app/pages/ConciergerieAirbnbNice.tsx`
31. `/src/app/pages/ConciergerieAirbnbNantes.tsx`
32. `/src/app/pages/ConciergerieAirbnbStrasbourg.tsx`
33. `/src/app/pages/ConciergerieAirbnbMontpellier.tsx`
34. `/src/app/pages/ConciergerieAirbnbLille.tsx`
35. `/src/app/pages/ConciergerieAirbnbRennes.tsx`
36. `/src/app/pages/ConciergerieAirbnbReims.tsx`

#### Pages piliers SEO (6 fichiers)
37. `/src/app/pages/GestionAirbnbSansCommission.tsx`
38. `/src/app/pages/AlternativeConciergerieAirbnb.tsx`
39. `/src/app/pages/GestionAirbnbDigitale.tsx`
40. `/src/app/pages/OptimisationAnnonceAirbnb.tsx`
41. `/src/app/pages/TarificationDynamiqueAirbnbGuide.tsx`
42. `/src/app/pages/GestionAirbnbFranceNational.tsx`

#### Articles blog (2 fichiers créés + 3 modifiés par utilisateur)
43. `/src/app/pages/BlogRentabiliteAirbnb.tsx`
44. `/src/app/pages/BlogLocationSansProprietaire.tsx`
45. `/src/app/pages/BlogAirbnbProfessionnelStatut.tsx` (modifié par user)
46. `/src/app/pages/BlogAugmenterTauxOccupation.tsx` (modifié par user)
47. `/src/app/pages/BlogReglementationAirbnb2025.tsx` (modifié par user)

---

## ⚙️ PROCÉDURE

Je vais maintenant procéder au remplacement système file par file, en commençant par les composants globaux qui sont utilisés partout, puis les pages.

**Durée estimée** : 20-30 minutes pour traiter tous les fichiers
