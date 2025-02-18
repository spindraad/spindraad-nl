import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { LinksFunction, MetaFunction } from "react-router";
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

export const meta: MetaFunction = () => ([
  {
    tag: 'link',
    rel: 'canonical',
    href: 'https://spindraad.nl',
  }
]);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return <Outlet />;
}
