import Prose from '~/components/Prose';
import PageLayout from '~/components/PageLayout';
import { Outlet } from 'react-router';

export default function PortfolioRoutesLayout() {
  return (
    <PageLayout topMargin>
      <Prose>
        <Outlet />
      </Prose>
    </PageLayout>
  );
}
