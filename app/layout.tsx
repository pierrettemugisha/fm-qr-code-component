import { Outfit } from 'next/font/google';
import type { Metadata } from 'next';
import './global.css';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'QR Code component',
  description: 'Frontend Mentor QR code component challenge solution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
