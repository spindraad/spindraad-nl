import { Outlet } from 'react-router';
import PageLayout from '~/components/PageLayout';

export default function ShopRoutesLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
