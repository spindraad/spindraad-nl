import Navigation from './Navigation';
import SpindraadLogo from '~/components/SpindraadLogo';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 sm:h-28 h-40 flex flex-col sm:flex-row items-center justify-center gap-6">
      <SpindraadLogo to="/" />

      <Navigation className="ml-0 sm:ml-auto" size="md" />
    </header>
  );
}
