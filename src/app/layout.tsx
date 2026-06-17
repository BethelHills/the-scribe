import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { themeInitScript } from "@/lib/theme-script";
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
  title: "The Scribe",
  description: "AI Writing Assistant for Christian Authors",
  icons: {
    icon: "/og-image.png",
    apple: "/og-image.png",
  },
  openGraph: {
    title: "The Scribe",
    description: "AI Writing Assistant for Christian Authors",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Scribe",
    description: "AI Writing Assistant for Christian Authors",
    images: ["/og-image.png"],
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
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
