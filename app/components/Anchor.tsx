import { Link, LinkProps } from '@remix-run/react';

interface BaseLinkProps {
  external?: boolean;
  href: string;
}

interface InternalLinkProps extends BaseLinkProps, Omit<LinkProps, 'to'> {
  external?: false;
}

interface ExternalLinkProps extends BaseLinkProps, Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'href'> {
  external: true;
}

type Props = InternalLinkProps | ExternalLinkProps;

export default function Anchor({ external, ...props }: Props) {
  const classes = `border-b-2 border-crisp-white hover:border-accent-orange transition-colors`;

  if (external) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, href, children, ...linkProps } = props as ExternalLinkProps;
    return (
      <a
        className={`${className ?? ''} ${classes}`}
        href={href}
        {...linkProps}
      >
        {children}
      </a>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, href, children, ...linkProps } = props as InternalLinkProps;
  return (
    <Link
      className={`${className ?? ''} ${classes}`}
      to={href}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
