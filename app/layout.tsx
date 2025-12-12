import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { ExternalLink, Home } from "lucide-react";
import { SiYoutube, SiDiscourse } from "@icons-pack/react-simple-icons";

const inter = Inter({
  subsets: ["latin"],
});

const extendedTree = {
  name: "Docs",
  children: [
    {
      type: "page" as const,
      name: "Home",
      url: "/",
    },
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
    {
      type: "page" as const,
      name: "Discourse",
      url: "https://discourse.margo.org/invites/78Dyn2wDfP",
      external: true,
      icon: <SiDiscourse className="w-4 h-4" />,
    },
  ],
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" cz-shortcut-listen="true">
        <RootProvider>
          <DocsLayout tree={extendedTree} {...baseOptions()}>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
