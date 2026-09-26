import type { Metadata } from 'next';
import './globals.css';

const socialImage = 'https://green-harmony-garden.sachika-itakura.chatgpt.site/og.png';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://green-harmony-garden.sachika-itakura.chatgpt.site'),
  title: 'Green Harmony｜植物のある暮らし',
  description: '庭づくりから植物販売、メンテナンスまで。暮らしにちょうどいい緑をご提案します。',
  openGraph: {
    title: 'Green Harmony｜植物のある暮らし',
    description: '庭づくりから植物販売、メンテナンスまで。暮らしにちょうどいい緑をご提案します。',
    images: [{ url: socialImage, width: 1730, height: 909, alt: 'Green Harmony 植物のある暮らし。' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Harmony｜植物のある暮らし',
    description: '庭づくりから植物販売、メンテナンスまで。暮らしにちょうどいい緑をご提案します。',
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
