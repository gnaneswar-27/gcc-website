import "./globals.css";
// import { Playfair_Display, Inter } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollToTop from '@/components/utils/ScrollToTop'
import {Bodoni_Moda, Bodoni_Moda_SC, Cormorant_Garamond } from 'next/font/google'

const headingFont = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
})

const bodyFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})




// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-heading",
//   display: "swap",
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-body",
//   display: "swap",
// });

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
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <SmoothScroll />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
