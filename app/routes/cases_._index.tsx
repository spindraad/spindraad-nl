import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { cases } from '~/data/cases';
import PageLayout from '~/components/PageLayout';
import CaseGrid from '~/components/CaseGrid';

export const meta: MetaFunction = () => [
  { title: 'Cases / spindraad' },
];

export function loader() {
  return { cases };
}

export default function CasesIndexRoute() {
  const { cases } = useLoaderData<typeof loader>();

  return (
    <PageLayout classes="content" topMargin>
      <div className="feature">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-7xl mb-12">Cases</h1>

        <CaseGrid caseItems={cases} />
      </div>
    </PageLayout>
  );
}
