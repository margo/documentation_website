import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/specification/margo-management-interface/management-interface-swagger',
        destination:
          '/specification/margo-management-interface/workload-management-api-1.0.0',
        permanent: true,
      },
      {
        source: '/specification/margo-management-interface/management-interface-swagger.md',
        destination:
          '/specification/margo-management-interface/workload-management-api-1.0.0',
        permanent: true,
      },
    ];
  },
  // Fix the workspace root warning by using the current directory
  turbopack: {
    root: __dirname
  },
  // Also set outputFileTracingRoot for production builds
  outputFileTracingRoot: __dirname,
};

export default withMDX(config);
