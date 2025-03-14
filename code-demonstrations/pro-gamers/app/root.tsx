import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { NavigationBar } from "./components/navigation-bar/navigation-bar";
import { Provider } from "./components/ui/provider";
import { Box } from "@chakra-ui/react";
import { UserContext } from "./contexts/user-context";
import { Footer } from "./components/footer/footer";
import { useState } from "react";
import type { User } from "./types/user";
import { ThemeContext } from "./contexts/theme-context";
import { ThemeVariation } from "./types/theme-variation";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
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
  const [theme, setTheme] = useState<string>(ThemeVariation.Dark);
  const [user, setUser] = useState<User>({
    profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/035/857/753/small_2x/people-face-avatar-icon-cartoon-character-png.png',
    username: 'arnarl@ru.is',
    fullName: 'Arnar Leifsson'
  });

  return (
    <Provider>
      <ThemeContext.Provider value={{
        theme,
        toggleTheme: () => setTheme(theme => theme === ThemeVariation.Dark ? ThemeVariation.Light : ThemeVariation.Dark)
      }}>
        <UserContext.Provider value={{
          user,
          setUser
        }}>
          <NavigationBar />
          <Box padding={20}>
            <Outlet />
          </Box>
          <Footer />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </Provider >
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
