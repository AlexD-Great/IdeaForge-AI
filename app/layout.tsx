import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "IdeaForge AI",
  description: "Generate startup ideas in seconds using AI."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
