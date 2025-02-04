import { initEmailJS } from '@/lib/email';
import { libreFranklin, jetbrainsMono, poppins } from './fonts'
import './globals.css'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
  title: '4th Dimension Interiors',
  description: 'Your trusted Interior advisors',
}

initEmailJS();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${libreFranklin.variable} ${jetbrainsMono.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

