import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Val Agency - Creative Digital Solutions',
  description: 'Professional video editing, web development, social media management, video production, and design services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light text-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}