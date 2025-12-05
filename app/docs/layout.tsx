import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { ExternalLink } from "lucide-react";
import { SiYoutube } from "@icons-pack/react-simple-icons";
// Extend the page tree with external links
const extendedTree = {
  name: "Docs",
  children: [
    ...source.pageTree.children,
    {
      type: "separator" as const,
      name: "External Resources",
    },
    {
      type: "page" as const,
      name: "Get Started (Sandbox)",
      url: "https://github.com/margo/sandbox",
      external: true,
      icon: <ExternalLink className="w-4 h-4" />,
    },
    {
      type: "page" as const,
      name: "GitHub Projects",
      url: "https://github.com/orgs/margo/projects",
      external: true,
      icon: <ExternalLink className="w-4 h-4" />,
    },
    {
      type: "page" as const,
      name: "YouTube Channel",
      url: "https://www.youtube.com/@Margoinitiative",
      external: true,
      icon: <SiYoutube className="w-4 h-4" />,
    },

  ],
};

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout tree={extendedTree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
