import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karol Espiritu — DevOps Engineer",
  description: "DevOps engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">
        <Nav />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">{children}</main>
        <footer className="border-t border-neutral-800 text-center text-neutral-600 text-xs py-4">
          Built with Next.js &amp; Tailwind
        </footer>
      </body>
    </html>
  );
}
