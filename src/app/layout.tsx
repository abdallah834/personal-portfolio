import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bebas_Neue,
  Roboto_Condensed,
} from "next/font/google";
import "./globals.css";
import DarkVeil from "@/components/DarkVeil";
import Navbar from "./_components/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensedFont = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
});
const robotoFont = Roboto_Condensed({
  weight: "400",
  variable: "--font-bebas-neue",
});
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensedFont.className}${robotoFont.className} antialiased overflow-x-hidden`}
      >
        <div className="w-full min-h-screen absolute z-[-1]">
          <DarkVeil speed={1.3} hueShift={31} />
        </div>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
