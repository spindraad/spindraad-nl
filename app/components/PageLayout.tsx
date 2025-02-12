import { ReactNode } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

type Props = {
  children: ReactNode;
  classes?: string;
  topMargin?: boolean;
};

export default function PageLayout({ children, topMargin = false, classes = '' }: Props) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>

      <main className={`${topMargin ? 'mt-14' : ''} ${classes}`}>
        { children }
      </main>

      <Footer/>
    </div>
  );
}
