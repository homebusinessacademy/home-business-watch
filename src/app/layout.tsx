import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header, Footer } from "@/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.homebusinesswatch.com"),
  title: {
    default: "HomeBusinessWatch - Honest Reviews of 500+ Home Business Opportunities",
    template: "%s | HomeBusinessWatch",
  },
  description:
    "Thinking about joining an MLM or home business? We analyzed 500+ companies using actual income disclosures. What we found might change your decision.",
  keywords: [
    "MLM reviews",
    "network marketing",
    "home business reviews",
    "affiliate programs",
    "direct sales",
    "work from home",
    "business opportunity reviews",
    "MLM watchdog",
  ],
  authors: [{ name: "HomeBusinessWatch" }],
  creator: "HomeBusinessWatch",
  publisher: "HomeBusinessWatch",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://homebusinesswatch.com",
    siteName: "HomeBusinessWatch",
    title: "HomeBusinessWatch - Honest Reviews of 500+ Home Business Opportunities",
    description:
      "We analyzed 500+ home businesses using real income data. What we found might change your decision.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HomeBusinessWatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeBusinessWatch - Honest Home Business Reviews",
    description:
      "We analyzed 500+ home businesses using real income data. What we found might change your decision.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "rKX2A-aIlGX6YV0cjmHDiX4zqLCxkAyLB3ZJa5br07E",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId="G-F221KBWY34" />
      </body>
    </html>
  );
}
