import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/lib/config';

const META_PIXEL_ID = '1283319630551339';
const OG_IMAGE_URL = `${siteConfig.siteUrl}/images/og-share.png`;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Implement AI Into Your Real Estate Agency | Estate Labs Masterclass',
  description:
    'Learn how to implement AI into your real estate agency to manage follow-ups, handle high enquiry volumes, and close more deals — without hiring extra staff.',
  keywords:
    'real estate AI, AI for real estate agents, real estate agency automation, lead follow-up, Estate Labs, Paras Arora',
  metadataBase: new URL(siteConfig.siteUrl),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  openGraph: {
    title: 'Top Agents Never Chase Leads | Free Estate Labs Masterclass',
    description:
      'Free 90-minute live session for real estate agents who get enquiries but lose deals to broken follow-ups.',
    url: siteConfig.siteUrl,
    siteName: 'Estate Labs',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Estate Labs — Top Agents Never Chase Leads',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Agents Never Chase Leads | Free Estate Labs Masterclass',
    description:
      'Free 90-minute live session for real estate agents who get enquiries but lose deals to broken follow-ups.',
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
