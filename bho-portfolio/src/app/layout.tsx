"use client"
import './globals.css'
import NavBar from './components/NavBar'
import { ThemeProvider } from 'next-themes'
import Footer from './components/Footer'
import Head from 'next/head'

export default function RootLayout({
  children,
  pageTitle = 'Brandon Ho',
}: {
  children: React.ReactNode
  pageTitle?: string;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
