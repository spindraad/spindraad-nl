import SpindraadLogo from '~/components/SpindraadLogo';
import SiteNavigation from '~/components/SiteNavigation';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 sm:h-28 h-40 flex flex-col sm:flex-row items-center justify-center gap-6">
      <SpindraadLogo to="/" />

      <SiteNavigation className="ml-0 sm:ml-auto" size="md" />
    </header>
  );
}
