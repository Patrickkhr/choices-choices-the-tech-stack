import { redirect } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from './components/NavBar'
import "./global.css";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  if (url.pathname === '/') {
    return redirect('/index');
  }
  return null;
};

export const links = () => {
  return [
    {
      rel: "icon",
      href: "/wogologo.webp",
      type: "image/webp",
    },
  ];
};


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
