import "./globals.css";
import { SideNav } from "./components/Navbar/SideNav";

export const metadata = {
  title: "Consolian | Software Agency by Elias Bhuiyan",
  description:
    "Experienced MERN Stack Developer specializing in Website Design, Web & App Development, UI/UX, SEO Optimization, and Website Maintenance. Explore my portfolio for innovative digital solutions.",
  keywords:
    "MERN Stack Developer, Website Design, Web Development, App Development, UI/UX Design, SEO Optimization, Website Maintenance, Consolian, Elias Bhuiyan",
  authors: "Elias Bhuiyan",
  creator: "Elias Bhuiyan",
  publisher: "Consolian",
  googlebot: "index, follow",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased cursor shape`}>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
