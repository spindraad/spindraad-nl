import type { MetaFunction } from '@remix-run/node';
// import { Label } from "~/components/ui/label"
// import { Button } from "~/components/ui/button"
import Header from '~/components/Header';
import { Hero } from '~/components/Hero';
import { Services } from '~/components/Services';
import { Portfolio } from '~/components/Portfolio';
import { Customers } from '~/components/Customers';
import { Contact } from '~/components/Contact';

export const meta: MetaFunction = () => {
  return [
    { title: "spindraad" },
    { name: "description", content: "Spindraad bouwt de beste web applicaties." },
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
        <Contact/>
      </main>
    </div>
  );
}
