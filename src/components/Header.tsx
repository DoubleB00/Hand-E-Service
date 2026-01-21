import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/img_5534.jpg"
            alt="HAND E Service Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>
        <a
          href="tel:3212919480"
          className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          <Phone className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">321-291-9480</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
