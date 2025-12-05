import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Fix the workspace root warning by using the current directory
  turbopack: {
    root: __dirname
  },
  // Also set outputFileTracingRoot for production builds
  outputFileTracingRoot: __dirname,
};

export default withMDX(config);
