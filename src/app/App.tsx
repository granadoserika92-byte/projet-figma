import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from './pages/Home';
import { Methode } from './pages/Methode';
import { Blog } from './pages/Blog';
import { GestionAirbnb } from './pages/GestionAirbnb';
import { GestionLocativeCourteDuree } from './pages/GestionLocativeCourteDuree';
import { ConciergerieAirbnbFrance } from './pages/ConciergerieAirbnbFrance';
import { ConciergerieAirbnbGuadeloupe } from './pages/ConciergerieAirbnbGuadeloupe';
import { ConciergerieAirbnbMartinique } from './pages/ConciergerieAirbnbMartinique';
import { ConciergerieAirbnbReunion } from './pages/ConciergerieAirbnbReunion';
import { ConciergerieAirbnbGuyane } from './pages/ConciergerieAirbnbGuyane';
import { ConciergerieAirbnbMayotte } from './pages/ConciergerieAirbnbMayotte';
import { ConciergerieAirbnbParis } from './pages/ConciergerieAirbnbParis';
import { ConciergerieAirbnbLyon } from './pages/ConciergerieAirbnbLyon';
import { ConciergerieAirbnbMarseille } from './pages/ConciergerieAirbnbMarseille';
import { ConciergerieAirbnbBordeaux } from './pages/ConciergerieAirbnbBordeaux';
import { ConciergerieAirbnbToulouse } from './pages/ConciergerieAirbnbToulouse';
import { ConciergerieAirbnbNice } from './pages/ConciergerieAirbnbNice';
import { ConciergerieAirbnbNantes } from './pages/ConciergerieAirbnbNantes';
import { CreationAnnonce } from './pages/CreationAnnonce';
import { OptimisationSEO } from './pages/OptimisationSEO';
import { TarificationDynamique } from './pages/TarificationDynamique';
import { MultiPlateformes } from './pages/MultiPlateformes';
import { GestionVoyageurs } from './pages/GestionVoyageurs';
import { Automatisation } from './pages/Automatisation';
import { OptimisationOccupation } from './pages/OptimisationOccupation';
import { EspaceProprietaire } from './pages/EspaceProprietaire';
import { MentionsLegales } from './components/MentionsLegales';
import { CGV } from './components/CGV';
import { PolitiqueConfidentialite } from './components/PolitiqueConfidentialite';
import { ErrorPage } from './pages/ErrorPage';
import Onboarding from './pages/Onboarding';
import { NosServices } from './pages/NosServices';
import { NosZones } from './pages/NosZones';
import { Contact } from './pages/Contact';

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/inscription',
    element: <Onboarding />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/methode',
    element: <Methode />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/blog',
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/gestion-airbnb',
    element: <GestionAirbnb />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/gestion-locative-courte-duree',
    element: <GestionLocativeCourteDuree />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-france',
    element: <ConciergerieAirbnbFrance />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-guadeloupe',
    element: <ConciergerieAirbnbGuadeloupe />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-martinique',
    element: <ConciergerieAirbnbMartinique />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-reunion',
    element: <ConciergerieAirbnbReunion />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-guyane',
    element: <ConciergerieAirbnbGuyane />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-mayotte',
    element: <ConciergerieAirbnbMayotte />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-paris',
    element: <ConciergerieAirbnbParis />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-lyon',
    element: <ConciergerieAirbnbLyon />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-marseille',
    element: <ConciergerieAirbnbMarseille />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-bordeaux',
    element: <ConciergerieAirbnbBordeaux />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-toulouse',
    element: <ConciergerieAirbnbToulouse />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-nice',
    element: <ConciergerieAirbnbNice />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciergerie-airbnb-nantes',
    element: <ConciergerieAirbnbNantes />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services/creation-annonce',
    element: <CreationAnnonce />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services/optimisation-seo',
    element: <OptimisationSEO />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services/tarification-dynamique',
    element: <TarificationDynamique />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services/multi-plateformes',
    element: <MultiPlateformes />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services/gestion-voyageurs',
    element: <GestionVoyageurs />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services/automatisation',
    element: <Automatisation />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services/optimisation-occupation',
    element: <OptimisationOccupation />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/services/espace-proprietaire',
    element: <EspaceProprietaire />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/nos-services',
    element: <NosServices />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/nos-zones',
    element: <NosZones />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mentions-legales',
    element: <MentionsLegales />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/cgv',
    element: <CGV />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/confidentialite',
    element: <PolitiqueConfidentialite />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}