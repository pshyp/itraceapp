// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My App Title",
  description: "Best app ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        
        <main>{children}</main>
      </body>
    </html>
  );
}
