import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BetaBadge from "@/components/ui/BetaBadge";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXION - Master Calisthenics",
  description: "Your complete calisthenics training platform with AI-powered workouts, skill progression tracking, and comprehensive tutorials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <Header />
          <BetaBadge />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" theme="dark" richColors />
        </LanguageProvider>
      </body>
    </html>
  );
}
