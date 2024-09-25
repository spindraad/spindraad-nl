import { NavLinkProps } from '@remix-run/react';
import { NavLinkRenderProps } from 'react-router-dom';
import Anchor from './Anchor';

export interface NavigationItem {
  label: string;
  href: string;
  className?: NavLinkProps['className'];
}

type Props = {
  items: NavigationItem[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md';
  gap?: 'sm' | 'md';
};

export type { Props as NavigationProps };

export default function Navigation({ items, orientation = 'horizontal', size = 'sm', gap = 'md', className = '' }: Props) {
  const fontSize = size === 'sm' ? 'text-sm' : 'text-base';
  const gapSize = gap === 'sm' ? 'gap-1 sm:gap-3' : 'gap-4 sm:gap-6';
  const orientationClass = orientation === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <nav className={ `${className} flex ${gapSize} ${orientationClass} items-center font-manrope font-thin` }>
      {items.map(({ label, href, className }, index) => (
        <Anchor href={href} key={index} className={applyClasses(className, fontSize)}>
          {label}
        </Anchor>
      ))}
    </nav>
  );
}

function applyClasses(itemClassName?: NavLinkProps['className'], className?: string): NavLinkProps['className'] {
  if (!itemClassName) return className;

  if (typeof itemClassName === 'string') {
    return `${className} ${itemClassName}`;
  } else {
    return (props: NavLinkRenderProps) => {
      const classes = itemClassName(props);
      return `${className} ${classes}`;
    }
  }
}
