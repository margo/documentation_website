import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center">
          <img
            src="/figures/margo-logo.png"
            alt="Margo Logo"
            className="w-24 dark:hidden"
          />
          <img
            src="/figures/margo_white.png"
            alt="Margo Logo"
            className="hidden w-24 dark:block"
          />
        </span>
      ),
    },
    // Main navigation links matching Margo website structure
    links: [],
  };
}
