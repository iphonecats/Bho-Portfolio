"use client"
import './globals.css'
import NavBar from './components/NavBar'
import { ThemeProvider } from 'next-themes'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
