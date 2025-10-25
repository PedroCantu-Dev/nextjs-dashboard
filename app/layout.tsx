import './ui/global.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <p>esto es del layout</p>
        {children}
        {/* <footer className='text-center text-sm text-gray-500'>Hecho con amor por la gente de vercel </footer> */}
        <footer className='py-10 flex justify-center items-center'>Hecho con amor por la gente de vercel </footer>
      </body>
    </html>
  );
}
