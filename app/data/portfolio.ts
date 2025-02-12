import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';

export interface PortfolioItem {
  title: string;
  summary: string;
  image: string;
  customer: string;
  logo: string;
  featured?: boolean;
  url: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Een toegankelijk klantportaal voor Drakenfruit',
    summary: 'Drakenfruit, een consultancybureau dat organisaties begeleidt bij het creëren van alignment tussen visie en strategie met een focus op diversiteit en inclusie, had behoefte aan een efficiënte manier om kennis en informatie met klanten te delen. Ze sachakelden spindraad in om hun klantportaal te bouwen.',
    image: '/cases/drakenfruit-portaal-home.png',
    customer: 'Drakenfruit',
    featured: false,
    logo: drakenfruitLogo,
    url: '/portfolio/drakenfruit-portaal',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Custom CMS']
  },
  {
    title: 'Een nieuwe WordPress website voor Golfvereniging Het Caves',
    summary: 'Golfvereniging Het Caves had behoefte aan een nieuwe website die ze zelf konden beheren. Ze schakelden spindraad in om een website te bouwen die ze zelf kunnen beheren.',
    image: '/portfolio/het-caves-home.png',
    customer: 'Golfvereniging Het Caves',
    featured: false,
    logo: '/het-caves-logo.png',
    url: '/portfolio/het-caves-website',
    tags: ['WordPress', 'Custom thema', 'Server setup en onderhoud']
  }
];
