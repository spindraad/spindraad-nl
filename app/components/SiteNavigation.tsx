import Navigation, { NavigationItem, NavigationProps } from '~/components/Navigation';

type Props = Omit<NavigationProps, 'items'>;

export default function SiteNavigation({ orientation, gap, size, className }: Props) {
  const items: NavigationItem[] = [
    {
      label: 'Diensten',
      href: '#diensten',
    },
    {
      label: 'Portfolio',
      href: '#portfolio',
    },
    {
      label: 'Klanten',
      href: '#klanten',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <Navigation
      items={items}
      orientation={orientation}
      gap={gap}
      size={size}
      className={className}
    />
  );
}
