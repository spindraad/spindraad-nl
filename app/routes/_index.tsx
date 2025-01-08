import { type MetaFunction } from '@remix-run/node';
import Header from '~/components/Header';
import Hero from '~/components/Hero';
import Services from '~/components/Services';
import Portfolio from '~/components/Portfolio';
import Customers from '~/components/Customers';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';
import Reviews from '~/components/Reviews';

export const meta: MetaFunction = () => {
  return [
    { title: "spindraad" },
    { name: "description", content: "spindraad bouwt de beste web applicaties." },
    { name: 'theme-color', content: '#ff7043'},
    { name: 'og:title', content: 'spindraad' },
    { name: 'og:description', content: 'spindraad bouwt de beste web applicaties.' },
    { name: 'og:image', content: '/linkedin-share-module.png' },
    { name: 'og:url', content: 'https://spindraad.nl' },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@spindraad' },
    { name: 'twitter:title', content: 'spindraad' },
    { name: 'twitter:description', content: 'spindraad bouwt de beste web applicaties.' },
    { name: 'twitter:image', content: '/linkedin-share-module.png' },
  ];
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>

      <main className="flex-1">
        <Hero/>

        <Services/>
        <Portfolio/>

        <Customers/>

        <Reviews/>

        <Contact/>
      </main>

      <Footer/>
    </div>
  );
}
