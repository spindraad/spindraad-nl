import { forwardRef } from 'react';
import { Link, LinkProps, NavLink, NavLinkProps } from 'react-router';

interface BaseLinkProps {
  external?: boolean;
  href: string;
  initiallyHideUnderline?: boolean;
  isNavLink?: boolean;
}

interface InternalLinkProps extends BaseLinkProps, Omit<LinkProps, 'to'> {
  external?: false;
  isNavLink?: false;
}

interface InternalNavLinkProps extends BaseLinkProps, Omit<NavLinkProps, 'to'> {
  isNavLink: true;
}

interface ExternalLinkProps extends BaseLinkProps, Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'> {
  external: true;
  isNavLink?: false;
}

type Props = InternalLinkProps | InternalNavLinkProps | ExternalLinkProps;

const Anchor = forwardRef<HTMLAnchorElement, Props>(({ external, isNavLink, initiallyHideUnderline = false, ...props }, ref) => {
  const classes = `border-b-2 ${initiallyHideUnderline ? 'border-crisp-white hover:border-accent-orange' : 'border-accent-orange'} transition-colors`;

  if (external) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, href, children, ...linkProps } = props as ExternalLinkProps;
    return (
      <a
        ref={ref}
        className={`${className ?? ''} ${classes}`}
        href={href}
        {...linkProps}
      >
        {children}
      </a>
    )
  }

  if (isNavLink) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, href, children, ...linkProps } = props as InternalNavLinkProps;
    return (
      <NavLink
        ref={ref}
        className={(({ isActive }) => {
          return `
            ${className ?? ''}
            ${isActive ? 'bg-accent-orange text-white hover:bg-vibrant-teal transition-colors !border-0' : ''}
            px-2
            ${classes}
          `;
        })}
        to={href}
        {...linkProps}
      >
        {children}
      </NavLink>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, href, children, ...linkProps } = props as InternalLinkProps;
  return (
    <Link
      ref={ref}
      className={`${className ?? ''} ${classes}`}
      to={href}
      {...linkProps}
    >
      {children}
    </Link>
  );
});
Anchor.displayName = 'Anchor';

export default Anchor;
