import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import {
  icon as fontAwesomeIcon,
  library,
  toHtml,
} from '@fortawesome/fontawesome-svg-core';
import {
  faLaptopCode,
  faUsersRectangle,
  faMobileAlt,
  faScrewdriverWrench,
  faLink,
  faSearch,
} from '@awesome.me/kit-feaffe80b3/icons/classic/light';
import {
  faPaperPlane,
  faCopyright,
  faStroopwafel,
} from '@awesome.me/kit-feaffe80b3/icons/classic/solid';
import {
  faMastodon,
  faTwitter,
} from '@awesome.me/kit-feaffe80b3/icons/classic/brands';

library.add(
  faLaptopCode,
  faUsersRectangle,
  faMobileAlt,
  faScrewdriverWrench,
  faLink,
  faSearch,
  faStroopwafel,
  faPaperPlane,
  faCopyright,
  faMastodon,
  faTwitter,
);

export type Props = {
  name: IconName;
  className?: React.HTMLAttributes<HTMLSpanElement>['className'];
  prefix?: IconPrefix;
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
  try {
    const icon = fontAwesomeIcon(
      {
        prefix,
        iconName: name,
      },
      {
        classes: [ faClasses, sizeMap.get(sizes) || '' ],
      }
    ).abstract.shift();

    return (
      <span
        className={ className }
        dangerouslySetInnerHTML={ { __html: toHtml(icon) } }
      />
    );
  } catch (error) {
    throw new Error(`Icon "${ name }" not found.`);
  }
};

export default Icon;
