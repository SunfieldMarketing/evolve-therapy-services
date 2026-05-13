import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";
import TinaProviderWrapper from "@/components/TinaProvider";

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
    icon: 'https://res.cloudinary.com/dai2pg27n/image/upload/c_fill,g_west,w_256,h_256/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png',
    apple: 'https://res.cloudinary.com/dai2pg27n/image/upload/c_fill,g_west,w_256,h_256/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png',
  },
  openGraph: {
    title: "Evolve Therapy Services | LTC Therapy Management",
    description: "Holistic therapy management, operational oversight, and consulting for Long-Term Care providers. Maximize revenue and clinical outcomes.",
    url: "https://evolvetherapyservices.com",
    siteName: "Evolve Therapy Services",
    images: [
      {
        url: 'https://res.cloudinary.com/dai2pg27n/image/upload/c_pad,b_white,w_1200,h_630/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png',
        width: 1200,
        height: 630,
        alt: 'Evolve Therapy Services - Clinical & Operational Excellence',
      },
    ],
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Evolve Therapy Services | LTC Therapy Management",
    description: "Holistic therapy management, operational oversight, and consulting for Long-Term Care providers.",
    images: ['https://res.cloudinary.com/dai2pg27n/image/upload/c_pad,b_white,w_1200,h_630/v1777350681/d123fe7f-e3af-443f-933d-550dd5206381.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth h-full`} suppressHydrationWarning>
      <body className={`${outfit.variable} ${lora.variable} antialiased font-sans min-h-full flex flex-col`}>
        <TinaProviderWrapper>
          {children}
        </TinaProviderWrapper>
      </body>
    </html>
  );
}
