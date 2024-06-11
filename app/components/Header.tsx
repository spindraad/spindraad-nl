import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="#" className="flex items-center justify-center">
        <p className="text-deep-blue text-3xl font-bold font-chivo">spindraad<span className="text-accent-orange">/</span></p>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to="#" className="text-sm font-medium border-b-2 border-crisp-white hover:border-accent-orange transition-colors">
          Diensten
        </Link>
        <Link to="#" className="text-sm font-medium border-b-2 border-crisp-white hover:border-accent-orange transition-colors">
          Portfolio
        </Link>
        <Link to="#" className="text-sm font-medium border-b-2 border-crisp-white hover:border-accent-orange transition-colors">
          Klanten
        </Link>
        <Link to="#" className="text-sm font-medium border-b-2 border-crisp-white hover:border-accent-orange transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
}
