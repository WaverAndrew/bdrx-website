import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "BDRX - Europe's Premier Undergraduate Restructuring & Distressed Investments Club",
  description:
    "Join BDRX, Europe's first undergraduate club focused on restructuring and distressed investments. Gain expertise in corporate finance, special situations, and credit investments while networking with industry professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
