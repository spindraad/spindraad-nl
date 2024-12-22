import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';

export interface Case {
  title: string;
  summary: string;
  image: string;
  customer: string;
  logo: string;
  featured?: boolean;
  url: string;
}

export const cases: Case[] = [
  {
    title: 'Een toegankelijk klantportaal voor Drakenfruit',
    summary: 'Drakenfruit, een consultancybureau dat organisaties begeleidt bij het creëren van alignment tussen visie en strategie met een focus op diversiteit en inclusie, had behoefte aan een efficiënte manier om kennis en informatie met klanten te delen. Ze sachakelden spindraad in om hun klantportaal te bouwen.',
    image: '/cases/drakenfruit-portaal-home.png',
    customer: 'Drakenfruit',
    featured: false,
    logo: drakenfruitLogo,
    url: '/cases/drakenfruit-portaal',
  }
];
