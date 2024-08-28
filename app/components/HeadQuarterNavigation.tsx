import Navigation, { NavigationItem } from '~/components/Navigation';

export default function HeadQuarterNavigation() {
  const items: NavigationItem[] = [
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Uren',
      href: '/urenregistratie'
    },
    {
      label: 'Klanten',
      href: '/klanten'
    },
    {
      label: 'spindraad.nl',
      href: '/'
    }
  ];

  return (
    <Navigation items={items} size="md" />
  );
}
