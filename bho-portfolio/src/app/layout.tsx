"use client"
import './globals.css'
import NavBar from './components/NavBar'
import { ThemeProvider } from 'next-themes'
import Footer from './components/Footer'
import {NextUIProvider} from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='font-sans'>
        <NextUIProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
