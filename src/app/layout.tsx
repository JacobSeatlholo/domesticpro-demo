import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Domestic Pro Service — Eco-Friendly & Pet-Safe Cleaning | Cape Town Northern Suburbs",
  description:
    "AI-powered booking & dispatch demo for Domestic Pro Service. Eco-friendly, pet-safe cleaning across Durbanville, Bellville, Tygervalley and Parow. Built by BusinessHustle.",
  keywords: [
    "Domestic Pro",
    "eco-friendly cleaning",
    "pet-safe cleaning",
    "Durbanville",
    "Bellville",
    "Tygervalley",
    "Parow",
    "Cape Town cleaning",
    "BusinessHustle",
  ],
  authors: [{ name: "BusinessHustle", url: "https://www.businesshustle.co.za" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Domestic Pro Service — Eco-Friendly & Pet-Safe Cleaning",
    description:
      "AI-powered booking & dispatch demo for Domestic Pro Service across Cape Town Northern Suburbs.",
    url: "https://domesticpro.co.za",
    siteName: "Domestic Pro Service",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Domestic Pro Service — Eco-Friendly & Pet-Safe Cleaning",
    description:
      "AI-powered booking & dispatch demo for Domestic Pro Service across Cape Town Northern Suburbs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <Sonner position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
