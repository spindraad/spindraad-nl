import { MetaFunction, Outlet } from '@remix-run/react';

import SpindraadCaption from '~/components/SpindraadCaption';
import SpindraadLogo from '~/components/SpindraadLogo';
import HeadQuarterNavigation from '~/components/HeadQuarterNavigation';

export const meta: MetaFunction = () => [
  {
    title: 'Headquarters | spindraad',
  },
];

export default function HeadquartersRoute() {
  return (
    <div className="grid grid-areas-hq grid-cols-hq grid-rows-hq min-h-[100dvh]">
      <header className="grid-in-header flex flex-row justify-between px-5 items-center">
        <SpindraadLogo to="/hq" />

        <HeadQuarterNavigation />
      </header>

      <aside className="grid-in-aside bg-deep-blue text-crisp-white py-10 px-5">
        <h2>spindraad</h2>
        <p>spindraad bouwt de beste web applicaties.</p>
      </aside>

      <main className="grid-in-main p-10">
        <Outlet />
      </main>

      <footer className="grid-in-footer px-5 flex place-items-center">
        <p>© {new Date().getFullYear()} <SpindraadCaption/></p>
      </footer>
    </div>
  );
}
