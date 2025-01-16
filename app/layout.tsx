import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontMono, fontSans, ibrand } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased ",
          ibrand.variable, fontMono.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="min-h-max relative overflow-hidden">
            <Navbar />
            <main className="container mx-auto flex-grow mt-16">
              <div className="absolute top-0 left-0 -translate-x-[54%] translate-y-[100%] w-2/5 rounded-full aspect-square bg-yellow-600/70 backdrop-filter blur-3xl opacity-50" />
              <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-yellow-400/5 right-0 -translate-y-[40%] translate-x-[40%] top-0">
                <div className="inset-[10%] rounded-full bg-gradient-to-l from-yellow-400/20">
                  <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-yellow-400/30" />
                </div>
              </div>
              {/* <div className="absolute bottom-0 translate-y-[70%] w-2/5 rounded-full aspect-square bg-yellow-600/70 backdrop-filter blur-3xl opacity-50" /> */}
              {/* <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-emerald-400/5 left-40 translate-y-[40%] -translate-x-[40%] bottom-0">
              <div className="inset-[10%] rounded-full bg-gradient-to-r from-emerald-400/40">
                <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-emerald-400/50" />
              </div>
            </div> */}
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/fphaikal"
                title="nextui.org homepage"
              >
                <span className="text-default-600">
                  2025 | FASE#7. All rights reserved.
                </span>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
