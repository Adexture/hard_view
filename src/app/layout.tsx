import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HARD VIEW | Premium Security Technology & Event Intelligence",
  description: "Proactive event oversight and mobile surveillance for Nigeria's premium events. 20 years of broadcast precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-slate selection:bg-volt selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
