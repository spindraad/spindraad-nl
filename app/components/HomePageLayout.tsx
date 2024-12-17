import { ReactNode } from 'react';
import Header from '~/components/Header';

type Props = {
  children: ReactNode;
};

export default function HomePageLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>

      <main className="flex-1">
        { children }
      </main>
    </div>
  );
}
