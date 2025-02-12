import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Prose({ children }: Props) {
  return (
    <div className="prose sm:prose-sm prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl marker:text-accent-orange prose-figcaption:text-sm content max-w-none">
      {children}
    </div>
  );
}
