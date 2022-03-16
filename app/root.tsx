import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { MetaFunction } from "remix";
import { LinksFunction } from "remix";

import globalStyles from "./styles/global.css"



export function CatchBoundary() {
  const caught = useCatch();
  const load = React.createRef<HTMLInputElement>();
  useEffect(() => {
    gsap.fromTo(load.current, { opacity: 0, duration: 2 }, { opacity: 1, color: '#fafafa', duration: 2 })

  }, [load])
  return (

    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{caught.status} {caught.statusText} </title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="container">
          <div ref={load} className="page">
            <h1>
              {caught.status} {caught.statusText}
            </h1>
            <figure>
              <figcaption className="indexImage">
                <img src="404img.png" alt="fallen ice cream" width="200" height="200" />
              </figcaption>
            </figure>
            <p>Well, we all make mistakes. Luckily we can fix this.</p>
            <Link to='/'>Go back</Link>
          </div>
        </main>
        <Scripts />
      </body>
    </html>
  );
}

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MCCJK1H53R"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MCCJK1H53R', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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
