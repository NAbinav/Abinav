import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Intro from "./intro";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Abinav N",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className={inter.className}>
        <main className="">
          {children}
          <div className="">
            <Navbar />
          </div>
        </main>
      </body>
    </html>
  );
}
