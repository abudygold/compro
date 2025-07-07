import type { Metadata } from 'next';
import { Gabarito, Inter } from 'next/font/google';
import './styles/globals.css';

const gabarito = Gabarito({
  weight: ['500', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
});

const inter = Inter({
  weight: ['500', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'BSP Landing Page',
  description:
    'Welcome to the BSP Landing Page, your gateway to the latest updates, resources, and information about the BSP platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gabarito.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
