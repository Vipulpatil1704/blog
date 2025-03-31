import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ActiveNavProvider } from "./components/contexts/ActiveNavContext";

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
        <ToastContainer/>
        <div className="flex">
          <div className="hidden md:block md:flex-1/3 mr-5"></div>
          <div className="w-full md:flex-2/3">
          <ActiveNavProvider>
            {children}
          </ActiveNavProvider>
          </div>
          <div className="hidden md:block md:flex-1/3 ml-5 m-2">
            <Search/>
            <div className="mt-5">
              <h2 className="text-xl">Categories</h2>
              <div className="flex flex-col gap-2 mt-3">
                <div><Link href={'/android'} className="text-sky-400">Android</Link></div>
                <div><Link href={'/windows'} className="text-sky-400">Windows</Link></div>
                <div><Link href={'/tech'} className="text-sky-400">Tech</Link></div>
              </div>
            </div>
          </div>
        </div>
        <footer className="absolute top-full flex justify-center items-center w-full">
          <div className="p-3 text-center">
            © 2025 Techcik, All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
