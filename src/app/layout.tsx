import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollToTop from '@/components/utils/ScrollToTop'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Garstang Country Club",
  description: "Luxury Hotel, Golf & Events in Lancashire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
