import { PortfolioItem } from '~/data/portfolio';
import PortfolioGridItem from '~/components/PortfolioGridItem';

type Props = {
  portfolioItems: Omit<PortfolioItem, 'content'>[];
};

export default function PortfolioGrid({ portfolioItems }: Props) {
  return (
    <ul className="grid grid-cols-[repeat(3,minmax(18rem,24rem))] gap-4">
      {portfolioItems.map((item, index) => (
        <li key={index} className="w-full">
          <PortfolioGridItem {...item} />
        </li>
      ))}
    </ul>
  );
}
