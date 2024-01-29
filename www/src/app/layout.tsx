import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-crimson'
})

export const metadata: Metadata = {
  title: "Turistando",
  description: "Um app pra turistas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body className={`w-full h-full
        ${inter.className}
        ${crimson.variable}
        p-4
      `}>{children}</body>
    </html>
  );
}
