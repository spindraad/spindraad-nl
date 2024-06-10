import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="#" className="flex items-center justify-center">
        <p className="text-deep-blue text-3xl font-bold font-chivo">spindraad<span className="text-accent-orange">/</span></p>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
          Services
        </Link>
        <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
          Portfolio
        </Link>
        <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
          Clients
        </Link>
        <Link to="#" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
    </header>
  );
}
