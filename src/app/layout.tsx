import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TENACIX | AI Agents & High-Performance Websites',
  description:
    'TENACIX is your strategic digital partner. We design high-performance websites and AI agents that automate, convert, and scale modern businesses.',
};

import { BackgroundBeams } from '@/components/ui/background-beams';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen w-full">
            <BackgroundBeams className="fixed inset-0 z-0 h-screen w-full pointer-events-none" />
            <div className="relative z-10 w-full">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
