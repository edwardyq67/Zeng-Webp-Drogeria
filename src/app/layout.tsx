import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inversiones Bienestar Zeng S.A.C.",
  description: "Empresa líder en comercialización de productos farmacéuticos, productos sanitarios y dispositivos médicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo/LOGO.ico" type="image/x-icon" />
        
        {/* Para otros navegadores/dispositivos */}
        <link rel="shortcut icon" href="/logo/LOGO.ico" />
        <link rel="apple-touch-icon" href="/logo/LOGO.ico" />
        
        {/* Para asegurar que Next.js maneje el favicon correctamente */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={` antialiased`}>
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}