// app/layout.js
import { Inter } from 'next/font/google';
import './styles.css';
import { Providers } from './providers'; // Assuming you have the Providers component

const inter = Inter({
  subsets: ['latin'], // You can add other subsets if needed
  variable: '--font-inter', // Using a CSS variable for font
});

export const metadata = {
  title: 'Opmetrics',
  description: 'Still in development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
