import { initEmailJS } from '@/lib/email';
import { libreFranklin, jetbrainsMono, poppins } from './fonts'
import './globals.css'
// import { initEmailJS } from '../lib/emailjs'

export const metadata = {
  title: 'Modia Properties & Consultancy',
  description: 'Your trusted real estate advisors',
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

