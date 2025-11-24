import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stella | Your AI Financial Assistant",
  description: "Manage your finances with confidence. Stella is the AI-powered financial services app that helps you budget, save, and invest smarter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mnj1wph.css" />
      </head>
      <body className={`${inter.variable} ${spaceMono.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
