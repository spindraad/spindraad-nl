import Anchor from './Anchor';

type Props = {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md';
  gap?: 'sm' | 'md';
};

export default function Navigation({ orientation = 'horizontal', size = 'sm', gap = 'md', className = '' }: Props) {
  const fontSize = size === 'sm' ? 'text-sm' : 'text-base';
  const gapSize = gap === 'sm' ? 'gap-1 sm:gap-3' : 'gap-4 sm:gap-6';
  const orientationClass = orientation === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <nav className={ `${className} flex ${gapSize} ${orientationClass} items-center font-manrope font-thin` }>
      <Anchor href="/#diensten" className={fontSize} initiallyHideUnderline>
        Diensten
      </Anchor>
      <Anchor isNavLink href="/cases" className={fontSize} initiallyHideUnderline>
        Cases
      </Anchor>
      <Anchor href="/portfolio" className={fontSize} initiallyHideUnderline>
        Portfolio
      </Anchor>
      <Anchor href="/#klanten" className={fontSize} initiallyHideUnderline>
        Klanten
      </Anchor>
      <Anchor href="/#contact" className={fontSize} initiallyHideUnderline>
        Contact
      </Anchor>
    </nav>
  );
}
