import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KAR Consultants - Structural Engineering and Consultancy",
  description: "KAR Consultants provides top-tier structural engineering and consultancy services, specializing in innovative solutions for commercial, residential, and industrial projects.",
  keywords: "structural engineering, consultancy, construction, building design, KAR Consultants, engineering services, civil engineering, structural analysis, project management",
  openGraph: {
    title: "KAR Consultants - Structural Engineering and Consultancy",
    description: "Providing top-tier structural engineering and consultancy services for commercial, residential, and industrial projects.",
    url: "https://www.karconsultants.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
        alt: "KAR Consultants Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
