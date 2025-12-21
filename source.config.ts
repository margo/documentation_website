import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';
import { visit } from 'unist-util-visit';

const remarkHttpsAsText = () => (tree: unknown) =>
  visit(tree as any, 'code', (node: { lang?: string }) => {
    if (node.lang === 'https') node.lang = 'text';
  });

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkImageOptions: false,
    remarkPlugins: [remarkHttpsAsText, remarkMdxMermaid],
  },
});
