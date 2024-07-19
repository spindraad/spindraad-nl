import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from '@remix-run/node';
import stylesheet from "~/tailwind.css?url";
import chivo from "@fontsource-variable/chivo?url";
import manrope from "@fontsource-variable/manrope?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: chivo },
  { rel: "stylesheet", href: manrope },
  {
    rel: 'icon',
    href: '/favicon.ico',
    type: 'image/png',
  },
  {
    rel: 'apple-touch-icon',
    href: '/favicon.ico',
    type: 'image/png',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
