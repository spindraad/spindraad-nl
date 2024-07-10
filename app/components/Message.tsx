import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: 'success' | 'error' | 'neutral' | 'outline';
  id?: string;
};

export default function Message({ children, variant, id }: Props) {

  let variantClasses = 'bg-deep-blue/90 border-deep-blue text-crisp-white';
  if (variant === 'success') {
    variantClasses = 'bg-green-50 border-green-300 text-green-800';
  }

  if (variant === 'neutral') {
    variantClasses = 'bg-soft-gray/90 border-soft-gray';
  }

  if (variant === 'error') {
    variantClasses = 'bg-red-50 border-red-300 text-red-800';
  }

  if (variant === 'outline') {
    variantClasses = 'bg-transparent border-deep-blue text-deep-blue';
  }

  return (
    <div id={id} className={`px-4 py-2 border ${variantClasses}`}>
      { children }
    </div>
  );
}
