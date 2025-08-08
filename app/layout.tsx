import type { Metadata } from "next";
import { Inter, Roboto_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: "True Starlight - Web Design Education",
  description: "Master web design with ease through our victory-focused educational videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${robotoMono.variable} ${pacifico.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
