// app/layout.jsx

import './globals.css';

export const metadata = {
  title: 'Caffeinated Sarcasm Co. | Funny Quotes & Bold Merch for Tired People',
  description: 'Caffeinated Sarcasm Co. delivers snarky, coffee-fueled designs on shirts, books, and more. COFFEE. SARCASM. REPEAT.',
  keywords: 'funny quotes, sarcastic gifts, coffee lovers, snarky merch, t-shirts, coloring books, Etsy, Redbubble, TeePublic',
  authors: [{ name: 'Caffeinated Sarcasm Co.' }],
  verification: {
    google: 'IaexImF9uk3mQ7RtfOnnEw8L6IwbopIlC5nDLQAae44',
  },
  openGraph: {
    title: 'Caffeinated Sarcasm Co.',
    description: 'Sarcastic quotes and funny merch for coffee-fueled humans.',
    url: 'https://caffeinated-sarcasm.vercel.app/',
    images: [
      {
        url: '/images/angry-coffee-cup.png',
        width: 800,
        height: 600,
        alt: 'Caffeinated Sarcasm Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  other: {
    'instagram:site': 'https://www.instagram.com/caffeinatedsarcasmco/',
    'tiktok:site': 'https://www.tiktok.com/@caffeinated_sarcasm_co',
    'pinterest:site': 'https://pin.it/5aKUMLScS',
    'youtube:channel': 'https://www.youtube.com/channel/UCbutJWboiMFd60QDP3ykbMA',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
