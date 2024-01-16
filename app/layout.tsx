import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jumia",
  description:
    "Jumia Nigeria the #1 of Online Shopping in Nigeria - Shop Online All Products : Smartphones, Appliances, Clothing... ✓ Top Brands : Samsung, Xiaomi, ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col flex-center">
          <div className="w-full flex flex-center border-b shadow-md">
            <Nav />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
