import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suris Challenge",
  description: "Es un palindromo?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
