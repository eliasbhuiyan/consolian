import localFont from "next/font/local";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { SideNav } from "./components/Navbar/SideNav";
import SmoothScrolling from "./lib/SmoothScroll";


export const metadata = {
  title: "Consolian | Software Agency by Elias Bhuiyan",
  description: "Experienced MERN Stack Developer specializing in Website Design, Web & App Development, UI/UX, SEO Optimization, and Website Maintenance. Explore my portfolio for innovative digital solutions.",
  keywords: "MERN Stack Developer, Website Design, Web Development, App Development, UI/UX Design, SEO Optimization, Website Maintenance, Consolian, Elias Bhuiyan",
  authors: "Elias Bhuiyan",
  creator: "Elias Bhuiyan",
  publisher: "Consolian",
  robots: "index, follow",
  googlebot: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased cursor shape`}
      >
        <SideNav />
        {children}
        <SmoothScrolling></SmoothScrolling>
      </body>
    </html>
  );
}
