import { Outlet } from '@remix-run/react';
import PageLayout from '~/components/PageLayout';

export default function CasesRoutesLayout() {
  return (
    <PageLayout>
      <div className="prose sm:prose-sm prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl marker:text-accent-orange prose-figcaption:text-sm content max-w-none">
        <Outlet />
      </div>
    </PageLayout>
  );
}
