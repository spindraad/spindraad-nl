import { Link } from '@remix-run/react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="px-4 border-b-4 border-accent-orange lg:px-6 sm:h-28 h-40 flex flex-col sm:flex-row items-center justify-center gap-6">
      <Link to="/" className="flex items-center justify-center">
        <img src="/spindraad-logo.png" alt="spindraad Logo" className="w-full max-w-72" />
      </Link>

      <Navigation className="ml-0 sm:ml-auto" size="md" />
    </header>
  );
}
