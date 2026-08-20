import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import type { ReactNode } from "react";

import { GitHubIcon, HomeIcon, MailIcon } from "@/components/icons";
import { NavLink } from "@/components/nav-link";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Loaded in italic only: the serif exists purely for emphasis inside sans copy. */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} at ${site.company.name}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.role} at ${site.company.name}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
};

/* sRGB equivalent of --color-canvas, so mobile browser chrome matches the page. */
export const viewport: Viewport = {
  themeColor: "#fcf9f7",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#content" className="skip-link">
          Skip to content
        </a>

        <div className="mx-auto flex w-full max-w-content flex-1 flex-col px-6 pt-12 pb-10 sm:px-8 sm:pt-16">
          <main id="content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

/**
 * Every item carries an icon and sentence case, so nothing in the row reads as
 * a different kind of thing. Icons are decorative: the label is the name.
 */
const footerItemClass =
  "inline-flex items-center gap-1.5 rounded-md px-1.5 py-1 -mx-1.5 text-ink-muted transition-colors duration-150 ease-smooth hover:bg-surface hover:text-ink";

function FooterIcon({ children }: { children: ReactNode }) {
  return (
    <span aria-hidden className="text-ink-faint">
      {children}
    </span>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-line pt-5 text-caption">
      <NavLink href="/" className={footerItemClass}>
        <FooterIcon>
          <HomeIcon className="size-3.5" />
        </FooterIcon>
        Home
      </NavLink>
      <a
        href={site.links.github.url}
        target="_blank"
        rel="noopener noreferrer"
        className={footerItemClass}
      >
        <FooterIcon>
          <GitHubIcon className="size-3.5" />
        </FooterIcon>
        {site.links.github.label}
      </a>
      <a href={site.links.email.url} className={footerItemClass}>
        <FooterIcon>
          <MailIcon className="size-3.5" />
        </FooterIcon>
        {site.links.email.label}
      </a>
      <span className="ms-auto ps-2 text-ink-faint tabular-nums">
        © {new Date().getFullYear()} {site.name}
      </span>
    </footer>
  );
}
