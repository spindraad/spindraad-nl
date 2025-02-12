import { PortfolioItem } from '~/data/portfolio';
import PortfolioGridItem from '~/components/PortfolioGridItem';

type Props = {
  portfolioItems: PortfolioItem[];
};

export default function PortfolioGrid({ portfolioItems }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-dense gap-4">
      {portfolioItems.map((item, index) => (
        <PortfolioGridItem key={index} {...item} />
      ))}
    </div>
  );
}
