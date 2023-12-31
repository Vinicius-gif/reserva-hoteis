import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Footer from '../components/footer';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seu Hotel.com'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-lt-installed={true}>
      <body className={inter.className}>
        <Header />
        <main className="h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
