import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from 'next/font/google'
import { ILink, roadmap } from "@/consts/nav";
import Link from "next/link";

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
        className={`${firacode.className} text-green-500 antialiased bg-[#070b0a]`}
      >
        <div className="flex flex-row gap-4">
          <div className="p-6">
            <h2>
              Roadmap
            </h2>
            <pre>
              │ <br />
              {roadmap.map((link: ILink, id: number) => (
                <LinkComponent link={link} key={id} isFirst={true} />
              ))}
            </pre>
          </div>
          <div className="max-w-[700px] max-h-screen overflow-auto p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

function LinkComponent({ link, isFirst }: { link: ILink, isFirst: boolean }) {
  return (
    <div>
      {isFirst ? "├─┬─" : "│ ├── "}{link.href ? <Link href={link.href}>{link.label}</Link> : link.label}
      {link.sublinks && link.sublinks.length > 0 && (
        <>
          {link.sublinks.map((sublink: ILink, id: number) => (
            <div key={id}>
              <LinkComponent link={sublink} isFirst={false} />
            </div>
          ))}
          │
        </>
      )}
    </div>
  );
}