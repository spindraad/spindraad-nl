import { type MetaFunction } from '@remix-run/node';
import Header from '~/components/Header';
import Hero from '~/components/Hero';
import Services from '~/components/Services';
import Portfolio from '~/components/Portfolio';
import Customers from '~/components/Customers';
import Contact from '~/components/Contact';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: "spindraad" },
    { name: "description", content: "Spindraad bouwt de beste web applicaties." },
    { name: 'theme-color', content: '#ff7043'}
  ];
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>
      <main className="flex-1">
        <Hero/>

        <div className="border-8 border-b-0 border-t-0 border-accent-orange">
          <Services/>
          <Portfolio/>
        </div>

        <Customers/>

        <div className="border-8 border-b-0 border-t-0 border-accent-orange">
          <Contact/>
        </div>
      </main>

      <div className="border-8 border-t-0 border-accent-orange">
        <Footer/>
      </div>
    </div>
  );
}
