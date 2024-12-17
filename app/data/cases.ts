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
    summary: 'Drakenfruit, een consultancybureau dat organisaties begeleidt bij het creëren van alignment tussen visie en strategie met een focus op diversiteit en inclusie, had behoefte aan een efficiënte manier om kennis en informatie met klanten te delen. Het bestaande proces voor het delen van blogs, tools en projectdocumenten was versnipperd en tijdrovend. Daarnaast wilde Drakenfruit klanten de mogelijkheid bieden om specifieke content aan te schaffen en hun favoriete materialen op te slaan voor eenvoudig hergebruik.',
    image: 'https://picsum.photos/200/300',
    customer: 'Drakenfruit',
    featured: true,
    logo: drakenfruitLogo,
    url: '/cases/drakenfruit-portaal',
  }
];
