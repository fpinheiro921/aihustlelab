import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'AI Hustle Lab - Launch Your Business in a Weekend',
  description: 'AI-powered tools and resources to help you launch a profitable side hustle in just a weekend.',
  keywords: 'AI, business, entrepreneurship, side hustle, weekend hustle launcher',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-base text-text-primary">
        {children}
      </body>
    </html>
  );
}
