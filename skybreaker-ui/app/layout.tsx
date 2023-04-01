// app/layout.tsx
'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import "@/locales";
import { theme } from '../config/theme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
