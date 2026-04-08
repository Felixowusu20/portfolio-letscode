import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "LetsCode Multi Portfolio",
  description:
    "LetsCode portfolio hub — a scalable multi-profile system built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}

        <Script
          src="/assets/vendor/aos/aos.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/typed.js/typed.umd.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/vendor/waypoints/noframework.waypoints.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
