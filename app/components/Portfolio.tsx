import Pill from '~/components/Pill';
import { items, PortfolioDescription } from '~/data/items';

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <Pill>Onze Portfolio</Pill>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bekijk onze uitzonderlijke opdrachten</h2>
        <p
          className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Ontdek een selectie van onze bekroonde webontwerpen en -applicaties die publiek hebben betoverd en
          resultaten hebben geboekt voor onze klanten.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 justify-center">
        { items.map((item, index) => (
          <PortfolioItem key={ index } { ...item } />
        )) }
      </div>
    </div>
  </section>
  );
}

type PortfolioItemProps = PortfolioDescription;

function PortfolioItem({ title, description, image }: PortfolioItemProps) {
  return (
    <div className="rounded-xl overflow-hidden">
      <img
        src={ image }
        height="300"
        alt="Portfolio Item"
        className="aspect-[4/3] object-cover w-full"
      />
      <div className="p-4 bg-soft-gray dark:bg-gray-800 h-full">
        <h3 className="text-lg font-bold">{ title }</h3>
        <p className="text-gray-500 dark:text-gray-400">
          { description }
        </p>
      </div>
    </div>
  );
}
