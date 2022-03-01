import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { LinksFunction } from "remix";

import globalStyles from "./styles/global.css"

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles }
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Edwin Bartunek's Site" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <div className="container">
            <Outlet />
            <ScrollRestoration />
          </div>
        </main>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
