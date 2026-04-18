import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ShoppingCartProvider>
            {children}
          </ShoppingCartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}