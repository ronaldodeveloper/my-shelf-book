import { Inter } from "next/font/google";
import "./globals.scss";
import "../assets/icomoon.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Shelf Book",
  description: "My Shelf Book",
};

export default function RootLayout({ children }) {

  // suppressHydrationWarning resolve erro de hydration no desenvolvimento   
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="pt-br">
      <body className={inter.className} suppressHydrationWarning={isDev}>{children}</body>
    </html>
  );
}
