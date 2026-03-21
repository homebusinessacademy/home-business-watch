import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://homebusinesswatch.com"),
  title: {
    default: "HomeBusinessWatch - Honest Reviews of 500+ Home Business Opportunities",
    template: "%s | HomeBusinessWatch",
  },
  description:
    "Research before you join. Honest, unbiased reviews of MLM companies, affiliate programs, and work from home opportunities. Compare compensation plans, startup costs, and real success rates.",
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
      "Research before you join. Honest, unbiased reviews of MLM companies, affiliate programs, and work from home opportunities.",
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
      "Research before you join. Honest, unbiased reviews of MLM companies, affiliate programs, and work from home opportunities.",
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
      </body>
    </html>
  );
}
