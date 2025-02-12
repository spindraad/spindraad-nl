import { MetaFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { cases } from '~/data/cases';
import CaseItem from '~/components/CaseItem';
import PageLayout from '~/components/PageLayout';

export const meta: MetaFunction = () => [
  { title: 'Cases / spindraad' },
];

export function loader() {
  return json({ cases });
}

export default function CasesIndexRoute() {
  const { cases } = useLoaderData<typeof loader>();

  return (
    <PageLayout classes="content" topMargin>
      <div className="feature">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-7xl mb-12">Cases</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1">
          { cases.map((item, index) => (
            <CaseItem key={index} {...item} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
