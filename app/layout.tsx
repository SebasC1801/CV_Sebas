import type { Metadata } from "next";
import { Neuton, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeController } from "./src/components/ThemeController";
import { LanguageController } from "./src/components/LanguageController";

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
  title: "CV-Sebastian",
  description: "Personal portfolio",
  icons: {
    icon: '/avatar_sebas.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${neuton.variable} ${oswald.variable} antialiased`}
      >
        <ThemeController>
          <LanguageController>{children}</LanguageController>
        </ThemeController>
      </body>
    </html>
  );
}
