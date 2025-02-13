import Pill from '~/components/Pill';
import { portfolioItems, PortfolioItem as IPortFolioItem } from '~/data/portfolio';
import { Link } from '@remix-run/react';

export default function Portfolio() {
  const items = portfolioItems.filter((item) => !item.wip);

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

type PortfolioItemProps = Pick<IPortFolioItem, 'title' | 'summary' | 'image' | 'slug'>;

function PortfolioItem({ title, summary, image, slug }: PortfolioItemProps) {
  return (
    <Link to={`/portfolio/${slug}`} className="rounded-xl overflow-hidden group">
      <img
        src={ image }
        height="250"
        alt="Portfolio Item"
        className="aspect-[4/3] object-cover object-top w-full h-[250px] scale-[1.01] group-hover:scale-105 transition-transform"
      />
      <div className="p-4 bg-soft-gray dark:bg-gray-800 h-full">
        <h3 className="text-lg font-bold group-hover:text-accent-orange">{ title }</h3>
        <p className="text-gray-500 dark:text-gray-400">
          { summary }
        </p>
      </div>
    </Link>
  );
}
