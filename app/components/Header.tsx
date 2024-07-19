import { Link } from '@remix-run/react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-28 flex items-center">
      <Link to="#" className="flex items-center justify-center">
        <img src="/spindraad-logo.webp" alt="spindraad Logo" className="h-32" />
      </Link>
      <Navigation size="md" />
    </header>
  );
}
