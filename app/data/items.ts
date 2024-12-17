import drakenfruitLogo from '~/assets/images/drakenfruit-logo.png';
import watershedLogo from '~/assets/images/watershed-logo.png';

export interface PortfolioDescription {
  title: string;
  description: string;
  image: string;
}

export const items: PortfolioDescription[] = [
  {
    title: 'Drakenfruit Portaal',
    description: 'Een gebruikersportaal voor de klanten van Drakenfruit, waar ze een toegang hebben tot hun projecten en een schat aan informatie tot hun beschikking hebben.',
    image: drakenfruitLogo,
  },
  {
    title: 'Watershed',
    description: 'Een erg dynamische en interactieve website voor Watershed, waar mensen informatie kunnen vinden over de projecten en de organisatie en tickets kunnen kopen voor lezingen en evenementen.',
    image: watershedLogo,
  }
];
