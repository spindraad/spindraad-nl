import { Link, LinkProps } from '@remix-run/react';

type Props = {
  to: LinkProps['to'];
};

export default function SpindraadLogo({ to }: Props) {
  return (
    <Link to={to} className="flex items-center justify-center">
      <img src="/spindraad-logo.png" alt="spindraad Logo" className="w-full max-w-72" />
    </Link>
  );
}
