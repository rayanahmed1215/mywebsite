import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const googleSans = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-google-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Rayan Ahmed",
    template: "%s | Rayan Ahmed",
  },
  description: "Rayan Ahmed's personal website and portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.className} min-h-screen bg-black text-white`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}