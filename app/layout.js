import { Mulish, Raleway, Roboto } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-heading",
  subsets: ["latin"]
});

const roboto = Roboto({
  variable: "--font-body",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"]
});

const raleway = Raleway({
  variable: "--font-nav",
  weight: ["500", "600", "700"],
  subsets: ["latin"]
});

export const metadata = {
  title: "LetsCode Multi Portfolio",
  description: "Data-driven multi-profile portfolio system built with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} ${roboto.variable} ${raleway.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
