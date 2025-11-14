import type { Metadata } from "next";
import { Inter, Spectral } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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
      <body className={`${inter.variable} ${spectral.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
