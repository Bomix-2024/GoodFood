import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good Food Alimentos - Bem vindo(a)",
  description: "Explore nossa seleção premium de alimentos naturais e orgânicos. Descubra sabores autênticos, nutra seu corpo e desperte seus sentidos com o melhor que a natureza tem a oferecer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
