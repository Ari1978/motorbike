import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ShoppingCartProvider from "./Components/ShoppingCartProvider"; 
import { AuthProvider } from "./context/AuthContext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Motorcicle",
  description: "Venta de motocicletas app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ShoppingCartProvider>
            <Navbar />
            {children}
            <Footer />
          </ShoppingCartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
