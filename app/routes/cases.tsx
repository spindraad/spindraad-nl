import { Outlet } from '@remix-run/react';
import PageLayout from '~/components/PageLayout';

export default function CasesRoutesLayout() {
  return (
    <PageLayout>
      <div className="prose md:prose-lg lg:prose-xl xl:prose-2xl">
        <Outlet />
      </div>
    </PageLayout>
  );
}
