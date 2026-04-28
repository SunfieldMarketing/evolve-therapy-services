import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Evolve Therapy Services | LTC Therapy Management & Consulting",
  description: "Evolve Therapy Services provides holistic therapy management, operational oversight, and consulting for LTC providers. Maximize revenue and clinical outcomes.",
  keywords: "therapy management, LTC consulting, SNF therapy, therapy revenue retention, Evolve Therapy Services",
  icons: {
    icon: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png',
    apple: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png',
  },
  openGraph: {
    title: "Evolve Therapy Services | LTC Therapy Management",
    description: "Changing how therapy functions for LTC providers. Retain 100% of revenue while maximizing clinical outcomes.",
    url: "https://evolvetherapyservices.com",
    siteName: "Evolve Therapy Services",
    images: [
      {
        url: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png',
        width: 1200,
        height: 630,
        alt: 'Evolve Therapy Services Logo',
      },
    ],
    locale: 'en_US',
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
      <body className={`${outfit.variable} ${lora.variable} antialiased font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
