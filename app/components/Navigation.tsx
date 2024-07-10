import Anchor from './Anchor';

type Props = {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md';
  gap?: 'sm' | 'md';
};

export default function Navigation({ orientation = 'horizontal', size = 'sm', gap = 'md' }: Props) {
  const fontSize = size === 'sm' ? 'text-sm' : 'text-base';
  const gapSize = gap === 'sm' ? 'gap-1 sm:gap-3' : 'gap-4 sm:gap-6';
  const orientationClass = orientation === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <nav className={ `ml-auto flex ${gapSize} ${orientationClass} items-center` }>
      <Anchor font="body" href="#" className={fontSize}>
        Diensten
      </Anchor>
      <Anchor font="body" href="#" className={fontSize}>
        Portfolio
      </Anchor>
      <Anchor font="body" href="#" className={fontSize}>
        Klanten
      </Anchor>
      <Anchor font="body" href="#" className={fontSize}>
        Contact
      </Anchor>
    </nav>
  );
}
