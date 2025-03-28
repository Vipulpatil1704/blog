import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen h-full">
        <header>
          <Navbar />
        </header>
        {children}
        <footer className="absolute top-full flex justify-center items-center w-full">
          <div className="p-3 text-center">
            © 2025 Techcik, All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
