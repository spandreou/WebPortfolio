import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Spyridon Andreou | Software Portfolio",
  description:
    "Futuristic portfolio showcasing resume, technical projects, and collaboration contact channels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <BackgroundEffect />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pb-12 pt-2 sm:pt-4">
            <Container className="h-full">{children}</Container>
          </main>
        </div>
      </body>
    </html>
  );
}
