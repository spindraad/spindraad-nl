import { Outlet } from 'react-router';
import PageLayout from '~/components/PageLayout';
import Prose from '~/components/Prose';

export default function CasesRoutesLayout() {
  return (
    <PageLayout>
      <Prose>
        <Outlet />
      </Prose>
    </PageLayout>
  );
}
