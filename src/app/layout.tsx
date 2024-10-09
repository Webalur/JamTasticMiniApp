// app/layout.tsx

import { ChakraProvider } from '@chakra-ui/react';
import './globals.css'; // Import any global CSS styles you have
import type { ReactNode } from 'react';

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js app with Chakra UI',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
