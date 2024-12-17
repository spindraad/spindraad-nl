import { Outlet } from '@remix-run/react';
import PageLayout from '~/components/PageLayout';

export default function CasesRoutesLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
