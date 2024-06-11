import { Colors } from '~/utils';

type Props = {
  children: string;
  color?: Colors;
};

export default function Pill({ children, color = Colors.DEEP_BLUE }: Props) {
  let colorClass = 'bg-deep-blue';

  switch (color) {
    case Colors.DEEP_BLUE:
      colorClass = 'bg-deep-blue text-soft-gray';
      break;
    case Colors.VIBRANT_TEAL:
      colorClass = 'bg-vibrant-teal text-soft-gray';
      break;
    case Colors.SOFT_GRAY:
      colorClass = 'bg-soft-gray text-deep-blue';
      break;
    case Colors.CRISP_WHITE:
      colorClass = 'bg-crisp-white text-deep-blue';
      break;
    case Colors.ACCENT_ORANGE:
      colorClass = 'bg-accent-orange text-soft-gray';
      break;
  }

  return (
    <p className={ `inline-block rounded-lg px-3 py-1 text-sm ${colorClass}` }>
      { children }
    </p>
  );
}
