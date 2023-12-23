"use client"
import './globals.css'
import NavBar from './components/NavBar'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
