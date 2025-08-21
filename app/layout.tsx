import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
