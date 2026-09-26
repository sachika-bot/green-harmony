import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repositoryName.endsWith('.github.io');
const basePath = isGitHubPages && repositoryName && !isUserSite
  ? `/${repositoryName}`
  : '';

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: 'export' as const } : {}),
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.GITHUB_PAGES_URL ?? '',
    NEXT_PUBLIC_ASSET_ORIGIN: isGitHubPages
      ? 'https://green-harmony-garden.sachika-itakura.chatgpt.site'
      : '',
  },
};

export default nextConfig;
