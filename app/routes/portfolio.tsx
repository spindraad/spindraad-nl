import Prose from '~/components/Prose';
import PageLayout from '~/components/PageLayout';
import { Outlet } from '@remix-run/react';

export default function PortfolioRoutesLayout() {
  return (
    <PageLayout>
      <Prose>
        <Outlet />
      </Prose>
    </PageLayout>
  );
}
