import { useRouteError, isRouteErrorResponse } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || 'Page non trouvée';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Une erreur inconnue est survenue';
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-24">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🤔</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Oups ! Page introuvable
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              {errorMessage}
            </p>
            
            <p className="text-gray-500 mb-8">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            
            <a href="/">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
              >
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
