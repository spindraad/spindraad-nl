import { MetaFunction } from 'react-router';
import { useLoaderData } from 'react-router';
import { portfolioItems } from '~/data/portfolio';
import PageLayout from '~/components/PageLayout';
import PortfolioGrid from '~/components/PortfolioGrid';

export const meta: MetaFunction = () => [
  { title: 'Portfolio / spindraad' }
];

export function loader() {
  return { portfolioItems };
}

export default function PortfolioGridRoute() {
  const { portfolioItems } = useLoaderData<typeof loader>();

  return (
    <PageLayout classes="content" topMargin>
      <div className="feature">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-7xl mb-12">Portfolio</h1>

        <PortfolioGrid portfolioItems={portfolioItems} />
      </div>
    </PageLayout>
  );
}
