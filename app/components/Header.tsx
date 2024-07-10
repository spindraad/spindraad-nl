import { Link } from '@remix-run/react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-28 flex items-center">
      <Link to="#" className="flex items-center justify-center">
        <p className="text-deep-blue text-3xl font-bold font-chivo">spindraad<span className="text-accent-orange">/</span></p>
      </Link>
      <Navigation size="md" />
    </header>
  );
}
