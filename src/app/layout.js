import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Sheard/Navbar/Navbar';
import Footer from '@/components/Ui/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-xl mx-auto px-5`}>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}
