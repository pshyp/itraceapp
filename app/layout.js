// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header/header";
import Footer from "./Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Itrace Africa",
  description: "Automotive solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
