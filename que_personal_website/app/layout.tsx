import type { Metadata } from "next";
import {
  Geist_Mono,
  Pixelify_Sans,
  Space_Grotesk,
} from "next/font/google";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: "variable",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Qhamani Twaku | Information Systems Student";
const siteDescription =
  "Portfolio of Qhamani Twaku, a final-year BCom Information Systems student building practical software, FinTech and digital business solutions.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Qhamani Twaku",
  },
  description: siteDescription,
  applicationName: "Qhamani Twaku Portfolio",
  authors: [{ name: "Qhamani Twaku" }],
  creator: "Qhamani Twaku",
  keywords: [
    "Qhamani Twaku",
    "Information Systems",
    "Software Development",
    "Full-Stack Development",
    "FinTech",
    "South Africa",
  ],
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    title: siteTitle,
    description: siteDescription,
    siteName: "Qhamani Twaku Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${pixelifySans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
