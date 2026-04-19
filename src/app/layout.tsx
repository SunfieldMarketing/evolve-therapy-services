import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Evolve Therapy Services | LTC Therapy Management & Consulting",
  description: "Evolve Therapy Services provides holistic therapy management, operational oversight, and consulting for LTC providers. Maximize revenue and clinical outcomes in Avon Lake, OH.",
  keywords: "therapy management, LTC consulting, SNF therapy, therapy revenue retention, Evolve Therapy Services, Avon Lake OH",
  openGraph: {
    title: "Evolve Therapy Services",
    description: "Changing how therapy functions for LTC providers.",
    url: "https://evolvetherapyservices.com",
    siteName: "Evolve Therapy Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth h-full`}>
      <body className={`${jakarta.variable} ${syne.variable} antialiased font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
