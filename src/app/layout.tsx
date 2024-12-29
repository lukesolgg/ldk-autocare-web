import "./globals.css";
import { Alumni_Sans } from 'next/font/google';

const alumniSans = Alumni_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={alumniSans.className}>
      <body>{children}</body>
    </html>
  );
}
