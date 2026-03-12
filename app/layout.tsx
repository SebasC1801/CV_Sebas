import type { Metadata } from "next";
import { Neuton, Oswald, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeController } from "./src/components/ThemeController";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const neuton = Neuton({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-neuton",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${neuton.variable} ${oswald.variable} antialiased`}
      >
        <ThemeController>{children}</ThemeController>
      </body>
    </html>
  );
}
