import { ReactNode } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

type Props = {
  children: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>

      <main className="mt-4 content">
        { children }
      </main>

      <Footer/>
    </div>
  );
}
