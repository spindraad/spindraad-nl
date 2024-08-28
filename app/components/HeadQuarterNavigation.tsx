import Navigation, { NavigationItem } from '~/components/Navigation';

export default function HeadQuarterNavigation() {
  const items: NavigationItem[] = [
    {
      label: 'Dashboard',
      href: '/hq',
    },
    {
      label: 'Uren',
      href: '/hq/urenregistratie'
    },
    {
      label: 'Klanten',
      href: '/hq/klanten'
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
