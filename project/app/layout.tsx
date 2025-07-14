import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ELI5 GPT - Explain Like I\'m 5',
  description: 'Beautiful AI-powered explanations made simple for everyone. Ask anything and get it explained like you\'re 5 years old with stunning glass morphism design!',
  keywords: 'AI, explanation, ELI5, education, learning, kids, simple, OpenAI, GPT',
  authors: [{ name: 'ELI5 GPT Team' }],
  creator: 'ELI5 GPT',
  publisher: 'ELI5 GPT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eli5-gpt.vercel.app'),
  openGraph: {
    title: 'ELI5 GPT - Explain Like I\'m 5',
    description: 'Beautiful AI-powered explanations made simple for everyone. Ask anything and get it explained like you\'re 5 years old with stunning glass morphism design!',
    url: 'https://eli5-gpt.vercel.app',
    siteName: 'ELI5 GPT',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ELI5 GPT - Explain Like I\'m 5',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ELI5 GPT - Explain Like I\'m 5',
    description: 'Beautiful AI-powered explanations made simple for everyone. Ask anything and get it explained like you\'re 5 years old with stunning glass morphism design!',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('darkMode') === 'true' || (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}