import { fakerNL as faker } from '@faker-js/faker';
import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';
import watershedLogo from '~/assets/images/watershed-logo.png';

export interface PortfolioItem {
  title: string;
  summary: string;
  content: string;
  image: string;
  customer: string;
  logo: string;
  featured?: boolean;
  wip?: boolean;
  slug?: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Maatwerk klantportaal voor Drakenfruit',
    summary: 'Drakenfruit, een consultancybureau dat organisaties begeleidt bij het creëren van alignment tussen visie en strategie met een focus op diversiteit en inclusie, had behoefte aan een efficiënte manier om kennis en informatie met klanten te delen. Ze schakelden spindraad in om hun klantportaal te bouwen.',
    content: faker.lorem.paragraphs({ min: 2, max: 5 }, '<br/>'),
    image: '/cases/drakenfruit-portaal-home.png',
    customer: 'Drakenfruit',
    featured: false,
    logo: drakenfruitLogo,
    slug: 'drakenfruit-portaal',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Custom CMS']
  },
  {
    title: 'Een nieuwe WordPress website voor Golfvereniging Het Caves',
    summary: 'Golfvereniging Het Caves had behoefte aan een nieuwe website die ze zelf konden beheren. Ze schakelden spindraad in om een website te bouwen die ze zelf kunnen beheren.',
    content: faker.lorem.paragraphs({ min: 2, max: 5 }, '<br/>'),
    image: '/portfolio/het-caves-home.png',
    customer: 'Golfvereniging Het Caves',
    featured: false,
    logo: '/het-caves-logo.png',
    slug: 'het-caves-website',
    tags: ['WordPress', 'Custom thema', 'Server setup en onderhoud']
  },
  {
    title: 'Maatwerk website en content management systeem voor Watershed',
    summary: 'Watershed, een consultancybureau dat organisaties helpt bij het creëren van een inclusieve en diverse werkomgeving, had behoefte aan een nieuwe website en content management systeem. Ze schakelden spindraad in om hun website te bouwen.',
    content: faker.lorem.paragraphs({ min: 2, max: 5 }, '<br/>'),
    image: watershedLogo,
    customer: 'Stichting Watershed',
    featured: false,
    wip: true,
    logo: watershedLogo,
    slug: 'watershed-website',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Custom CMS']
  },
];
