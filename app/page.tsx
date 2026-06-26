import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import EstateLabsSite from '@/components/EstateLabsSite';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Estate Labs — AI Sales Systems for Real Estate | India & UAE',
  description:
    'Estate Labs installs done-for-you AI sales engines for real estate firms — 60-second lead response, AI qualification, and automated site-visit booking. Book a free strategy call.',
  keywords:
    'real estate AI, AI sales system, lead follow-up automation, real estate India UAE, Estate Labs, Paras Arora, AI for real estate',
  openGraph: {
    title: 'Estate Labs — AI Sales Systems for Real Estate',
    description:
      'Turn the leads you already pay for into booked site visits. Done-for-you AI sales engine for real estate firms in India & UAE.',
    siteName: 'Estate Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estate Labs — AI Sales Systems for Real Estate | India & UAE',
    description:
      'Turn the leads you already pay for into booked site visits. Done-for-you AI for real estate.',
  },
};

export default function Home() {
  return (
    <div className={fraunces.variable}>
      <EstateLabsSite />
    </div>
  );
}
