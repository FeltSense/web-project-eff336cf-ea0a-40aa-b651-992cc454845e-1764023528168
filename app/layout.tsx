import type { Metadata } from 'next';
import { Oswald, Roboto } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: 'Fitness First',
  description: 'Your journey to a healthier you starts here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
