import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Mermaid } from '@/components/mdx/mermaid';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';

function Img({ className, loading, ...props }: ComponentProps<'img'>) {
  const mergedClassName = className ? `${className} max-w-full` : 'max-w-full';

  return (
    <img
      {...props}
      className={mergedClassName}
      loading={loading ?? 'lazy'}
    />
  );
}

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: Img,
    Mermaid, // [!code ++]
    ...components,
  };
}
