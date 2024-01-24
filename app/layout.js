"use client";
import { NextUIProvider } from '@nextui-org/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextUIProvider>
      <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  )
}
