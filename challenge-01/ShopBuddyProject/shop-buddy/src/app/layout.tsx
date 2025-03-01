import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { HeaderComponent } from "@/components/header-component";
import { FooterComponent } from "@/components/footer-component";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shop-Buddy",
  description: "Aplicativo de Listas de Compras Compartilhadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <div className="page-container">
          <HeaderComponent />
          <main className="content-wrap">
            {children}
          </main>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
