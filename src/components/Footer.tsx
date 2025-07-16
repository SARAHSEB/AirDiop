import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 : logo + slogan */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-sky-500 rounded-lg shadow">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-yellow-400">AirDiop</span>
            </div>
            <p className="text-gray-400 mb-4">
              Votre compagnon de voyage pour trouver les meilleurs vols et destinations inspirantes.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener" className="text-sky-400 hover:text-white"><Facebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="text-pink-400 hover:text-white"><Instagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="text-sky-400 hover:text-white"><Twitter /></a>
            </div>
          </div>

          {/* Col 2 : Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Destinations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/decouverte" className="hover:text-white">Page découverte</Link></li>
              <li><a href="#" className="hover:text-white">Europe</a></li>
              <li><a href="#" className="hover:text-white">Asie</a></li>
              <li><a href="#" className="hover:text-white">Amériques</a></li>
              <li><a href="#" className="hover:text-white">Afrique</a></li>
            </ul>
          </div>

          {/* Col 3 : Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Vols</Link></li>
              <li><a href="#" className="hover:text-white">Hôtels <span className="text-xs text-yellow-400">(bientôt)</span></a></li>
              <li><a href="#" className="hover:text-white">Voitures <span className="text-xs text-yellow-400">(bientôt)</span></a></li>
              <li><a href="#" className="hover:text-white">Assurance voyage <span className="text-xs text-yellow-400">(bientôt)</span></a></li>
            </ul>
          </div>

          {/* Col 4 : Support & contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-400">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/help" className="hover:text-white flex items-center space-x-2">
                  <MapPin className="w-4 h-4" /> <span>Centre d'aide</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white flex items-center space-x-2">
                  <Mail className="w-4 h-4" /> <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="hover:text-white">Conditions générales</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">Confidentialité</Link>
              </li>
              <li>
                <a href="tel:+123456789" className="hover:text-white flex items-center space-x-2">
                  <Phone className="w-4 h-4" /> <span>+1 23 45 67 89</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 AirDiop. Tous droits réservés. <br />
            Développé avec ❤️ pour faciliter vos voyages.
          </p>
        </div>
      </div>
    </footer>
  );
}
