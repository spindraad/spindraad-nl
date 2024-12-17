import { ReactNode } from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

type Props = {
  children: ReactNode;
  classes?: string;
};

export default function PageLayout({ children, classes = '' }: Props) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header/>

      <main className={classes}>
        { children }
      </main>

      <Footer/>
    </div>
  );
}
