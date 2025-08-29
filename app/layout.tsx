import "./globals.css";
import Navbar from "./Navbar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import "./theme-config.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.variable}>
        <Theme accentColor="violet">
          <Navbar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
