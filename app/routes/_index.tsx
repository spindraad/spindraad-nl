import { type MetaFunction } from 'react-router';
import Header from '~/components/Header';
import Hero from '~/components/Hero';
import Services from '~/components/Services';
import Portfolio from '~/components/Portfolio';
import Customers from '~/components/Customers';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';
import Reviews from '~/components/Reviews';
import CoursePromo from '~/components/CoursePromo';

export const meta: MetaFunction = () => {
  return [
    { title: 'spindraad' },
    { name: 'title', property: 'og:title', content: 'spindraad' },
    { name: 'description', property: 'og:description', content: 'spindraad bouwt de beste web applicaties.' },
    { name: 'theme-color', content: '#ff7043' },
    { name: 'image', property: 'og:image', content: 'https://spindraad.nl/linkedin-share-module.png' },
    { property: 'og:image:alt', content: 'spindraad vergroot je digitale aanwezigheid' },
    { property: 'og:url', content: 'https://spindraad.nl' },
    { property: 'og:type', content: 'website' },
    { property: 'og:logo', content:'https://spindraad.nl/spindraad-logo' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@spindraad' },
    { name: 'twitter:title', content: 'spindraad' },
    { name: 'twitter:description', content: 'spindraad bouwt de beste web applicaties.' },
    { name: 'twitter:image', content: 'https://spindraad.nl/linkedin-share-module.png' },
  ];
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>

      <main className="flex-1">
        <Hero/>

        <Services/>

        <CoursePromo />

        <Portfolio/>


        <Customers/>

        <Reviews/>

        <Contact/>
      </main>

      <Footer/>
    </div>
  );
}
