import { PortfolioItem } from '~/data/portfolio';
import PortfolioGridItem from '~/components/PortfolioGridItem';

type Props = {
  portfolioItems: PortfolioItem[];
};

export default function PortfolioGrid({ portfolioItems }: Props) {
  return (
    <ul className="flex flex-row flex-wrap gap-4">
      {portfolioItems.map((item, index) => (
        <li key={index} className="w-full max-w-96">
          <PortfolioGridItem {...item} />
        </li>
      ))}
    </ul>
  );
}
