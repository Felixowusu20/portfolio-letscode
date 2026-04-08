import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"]
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"]
});

export const metadata = {
  title: "LetsCode Multi Portfolio",
  description: "Data-driven multi-profile portfolio system built with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
