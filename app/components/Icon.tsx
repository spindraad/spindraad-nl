import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import {
  icon as fontAwesomeIcon,
  library,
  toHtml,
} from '@fortawesome/fontawesome-svg-core';
import {
  faMedal,
  faLaptopCode,
  faUsersRectangle,
  faMobileAlt,
  faChartLine,
  faScrewdriverWrench, faLink, faSearch
} from '@fortawesome/free-solid-svg-icons';

library.add(faMedal, faLaptopCode, faUsersRectangle, faMobileAlt, faChartLine, faScrewdriverWrench, faLink, faSearch);

export type Props = {
  name: IconName;
  className?: React.HTMLAttributes<HTMLSpanElement>['className'];
  prefix?: Extract<IconPrefix, 'fas' | 'fab' | 'far'>;
  sizes?: 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | 'full';
  faClasses?: string;
};

const sizeMap = new Map<Props['sizes'], string>();
sizeMap.set('s', 'fa-xs');
sizeMap.set('m', ''); // Default font-size
sizeMap.set('l', 'fa-lg');
sizeMap.set('xl', 'fa-xl');
sizeMap.set('2xl', 'fa-2x');
sizeMap.set('3xl', 'fa-3x');
sizeMap.set('full', 'fa-5x');

const Icon = ({
                name,
                prefix = 'fas',
                className = '',
                sizes = 'm',
                faClasses = '',
              }: Props) => {
  const icon = fontAwesomeIcon(
    {
      prefix,
      iconName: name,
    },
    {
      classes: [faClasses, sizeMap.get(sizes) || ''],
    }
  ).abstract.shift();

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: toHtml(icon) }}
    />
  );
};

export default Icon;
