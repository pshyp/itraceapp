// next.config.mjs
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

import withMDX from '@next/mdx';

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);