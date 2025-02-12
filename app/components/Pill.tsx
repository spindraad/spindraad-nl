import { Colors } from '~/utils';

type Props = {
  children: string;
  color?: Colors;
  textSize?: 'xs' | 'sm';
};

export default function Pill({ children, textSize = 'sm', color = 'deep-blue' }: Props) {
  let colorClass = 'bg-deep-blue';

  switch (color) {
    case 'deep-blue':
      colorClass = 'bg-deep-blue text-soft-gray';
      break;
    case 'vibrant-teal':
      colorClass = 'bg-vibrant-teal text-soft-gray';
      break;
    case 'soft-gray':
      colorClass = 'bg-soft-gray text-deep-blue';
      break;
    case 'crisp-white':
      colorClass = 'bg-crisp-white text-deep-blue';
      break;
    case 'accent-orange':
      colorClass = 'bg-accent-orange text-soft-gray';
      break;
  }

  return (
    <p className={ `inline-block rounded-lg px-3 py-1 ${textSize === 'sm' ? 'text-sm' : 'text-xs'} ${colorClass}` }>
      { children }
    </p>
  );
}
