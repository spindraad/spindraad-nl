import { MetaFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { portfolioItems } from '~/data/portfolio';
import PageLayout from '~/components/PageLayout';
import Prose from '~/components/Prose';
import PortfolioGrid from '~/components/PortfolioGrid';

export const meta: MetaFunction = () => [
  { title: 'Portfolio / spindraad' }
];

export function loader() {
  return json({ portfolioItems });
}

export default function PortfolioGridRoute() {
  const { portfolioItems } = useLoaderData<typeof loader>();

  return (
    <PageLayout topMargin>
      <Prose>
        <h1>Portfolio</h1>

        <PortfolioGrid portfolioItems={portfolioItems} />
      </Prose>
    </PageLayout>
  );
}
