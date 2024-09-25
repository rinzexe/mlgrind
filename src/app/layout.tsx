import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from 'next/font/google'

const firacode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "MLGrind"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firacode.className} antialiased bg-[#070b0a]`}
      >
        {children}
      </body>
    </html>
  );
}
