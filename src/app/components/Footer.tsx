import { Home, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Les Clés du Cabanon" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Les Clés du Cabanon</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Votre partenaire de confiance pour la gestion de vos locations courte durée.
            </p>
            <p className="text-gray-500 text-xs">
              SIRET : 929 924 983 00026
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Gestion digitale</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Optimisation tarifaire</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Communication voyageurs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Photos professionnelles</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+33625401480" className="hover:text-white transition-colors">
                  📞 (+33) 6 25 40 14 80
                </a>
              </li>
              <li>
                <a href="mailto:contact@lesclesducabanon.fr" className="hover:text-white transition-colors">
                  ✉️ contact@lesclesducabanon.fr
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Du lundi au vendredi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">9h - 19h</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="/cgv" className="hover:text-white transition-colors">Conditions générales</a></li>
              <li><a href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Les Clés du Cabanon. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/cles_du_cabanon_conciergerie/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/share/1EYGiY9yk1/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contact@lesclesducabanon.fr" 
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}