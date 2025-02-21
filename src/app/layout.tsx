// Root Layout for global components //

//Imports
import type { Metadata } from "next";
import "./globals.css";
import { exo2, orbitron } from "./fonts"

//Global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";

//Set metadata
export const metadata: Metadata = {
  title: "Branched | Home",
  description: "Branched Gaming Network landing page.",
};

//Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className={`${exo2.className}`}>
        {/* <IntroAnimation/> */}
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
