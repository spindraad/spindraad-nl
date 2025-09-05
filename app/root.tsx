import { Links, Meta, Outlet, Scripts, ScrollRestoration, LinksFunction, MetaFunction } from "react-router";
import stylesheet from "~/tailwind.css?url";
import chivo from "@fontsource-variable/chivo?url";
import manrope from "@fontsource-variable/manrope?url";
import webawesome from '@awesome.me/webawesome/dist/styles/webawesome.css?url';
import { setKitCode } from '@awesome.me/webawesome';

import '@awesome.me/webawesome/dist/components/button/button.js';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: chivo },
  { rel: "stylesheet", href: manrope },
  { rel: "stylesheet", href: webawesome },
  { rel: 'stylesheet', href: 'https://early.webawesome.com/webawesome@3.0.0-beta.4/dist/styles/themes/mellow.css' },
  { rel: 'stylesheet', href: 'https://early.webawesome.com/webawesome@3.0.0-beta.4/dist/styles/color/palettes/vogue.css' },
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

export const meta: MetaFunction = () => ([
  {
    tag: 'link',
    rel: 'canonical',
    href: 'https://spindraad.nl',
  }
]);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="wa-theme-mellow wa-palette-vogue wa-brand-orange wa-neutral-gray wa-success-green wa-warning-yellow wa-danger-red">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Meta/>
      <Links/>
      <script defer data-domain="spindraad.nl" src="/js/script.js"></script>
    </head>
    <body>
    { children }
    <ScrollRestoration/>
    <Scripts/>
    </body>
    </html>
  );
}

export default function App() {
  // if (MutationObserver !== null) {
  //   setKitCode('feaffe80b3');
  // }

  return <Outlet />;
}
