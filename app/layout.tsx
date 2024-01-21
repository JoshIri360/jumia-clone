import { ThemeProvider } from "@/components/theme-provider";
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
      <body className={`${inter.className} min-h-[100vh]`}>
        <main className="flex h-full flex-col items-center bg-secondary min-h-[inherit]">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="z-10 w-full flex flex-center border-b shadow-md bg-background">
              <Nav />
            </div>
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}

export const dynamicParams = false;
