import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./layouts/Header/page";
import Footer from "./layouts/Footer/page";

export const metadata: Metadata = {
  title: "Brending",
  description: "Day 1 Belajar Buat Web",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // kamu bisa pilih sesuai kebutuhan
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
