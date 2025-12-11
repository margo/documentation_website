import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  FileText,
  ExternalLink,
  Rocket,
  Users,
  Shield,
} from "lucide-react";
import { SiGithub, SiYoutube } from "@icons-pack/react-simple-icons";
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-fd-border bg-gradient-to-b from-fd-background to-fd-muted/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-fd-primary/20 bg-fd-primary/5 px-4 py-1.5 text-sm font-medium text-fd-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fd-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fd-primary"></span>
              </span>
              Preview Release Available
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-fd-foreground sm:text-6xl lg:text-7xl">
              Welcome to the Margo Documentation!
            </h1>
            <p className="mt-6 text-lg leading-8 text-fd-muted-foreground sm:text-xl">
              Margo enables open, interoperable orchestration of edge applications and devices at scale—unlocking innovation and accelerating digital transformation.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-fd-muted-foreground">
              <Shield className="h-4 w-4" />
              Open standard • Reference implementation • Compliance testing
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-fd-border bg-fd-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
              Everything You Need to Get Started
            </h2>
            <p className="mt-4 text-lg text-fd-muted-foreground">
              Unlock barriers to innovation in complex multi-vendor environments
              and accelerate digital transformation
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-fd-border bg-fd-card/50 p-8 transition-all hover:shadow-xl hover:border-fd-primary/50 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-fd-foreground">
                Preview Release Sandbox
              </h3>
              <p className="mb-4 text-fd-muted-foreground">
                Get your hands on the first preview release sandbox. Start
                building and testing right away.
              </p>
              <Link
                href="https://github.com/margo/dev-repo"
                className="inline-flex items-center gap-2 text-sm font-medium text-fd-primary transition-colors hover:text-fd-primary/80"
              >
                View Repository
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="mt-3 text-xs text-fd-muted-foreground italic">
                Note: This link will be replaced with the public dev repo
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-fd-border bg-fd-card/50 p-8 transition-all hover:shadow-xl hover:border-fd-primary/50 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-fd-foreground">
                Technical Specification
              </h3>
              <p className="mb-4 text-fd-muted-foreground">
                Review the specification directly if you're a technical
                representative looking for detailed documentation.
              </p>
              <Link
                href="/docs/margo-api-reference"
                className="inline-flex items-center gap-2 text-sm font-medium text-fd-primary transition-colors hover:text-fd-primary/80"
              >
                Read Specification
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="mt-4 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2">
                <p className="text-xs text-amber-700 dark:text-amber-400">
                  ⚠️ Pre-draft stage: No products should be produced based on
                  this version
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-fd-border bg-fd-card/50 p-8 transition-all hover:shadow-xl hover:border-fd-primary/50 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-fd-foreground">
                Full Technical Website
              </h3>
              <p className="mb-4 text-fd-muted-foreground">
                Navigate through the complete technical documentation, guides,
                and reference materials.
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-sm font-medium text-fd-primary transition-colors hover:text-fd-primary/80"
              >
                Explore Documentation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-fd-border bg-fd-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-fd-foreground sm:text-4xl">
              Learn More About Margo
            </h2>
            <p className="mt-4 text-lg text-fd-muted-foreground">
              Explore our educational resources and community channels
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-fd-border bg-fd-background p-8 shadow-sm">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-600">
                <SiYoutube className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-fd-foreground">
                Margo YouTube Channel
              </h3>
              <p className="mb-6 text-fd-muted-foreground">
                Watch short educational videos to learn more about the Margo
                initiative, personas, and preview releases.
              </p>
              <div className="space-y-3">
                <Link
                  href="https://www.youtube.com/watch?v=aacT3Y-uqNY&list=PLJz_zvU2cruHFrymYsgCUqeGA6qhgh_55&index=1&t=1s"
                  className="flex items-center justify-between rounded-lg border border-fd-border bg-fd-muted/50 px-4 py-3 transition-colors hover:bg-fd-muted hover:border-fd-primary/50"
                >
                  <span className="text-sm font-medium text-fd-foreground">
                    Intro to Margo Initiative
                  </span>
                  <ExternalLink className="h-4 w-4 text-fd-muted-foreground" />
                </Link>
                <div className="flex items-center justify-between rounded-lg border border-fd-border bg-fd-muted/30 px-4 py-3 opacity-60">
                  <span className="text-sm font-medium text-fd-muted-foreground">
                    Personas and Lexicon
                  </span>
                  <span className="text-xs text-fd-muted-foreground">
                    (Coming Soon)
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-fd-border bg-fd-muted/30 px-4 py-3 opacity-60">
                  <span className="text-sm font-medium text-fd-muted-foreground">
                    What is Margo Preview Release 1?
                  </span>
                  <span className="text-xs text-fd-muted-foreground">
                    (Coming Soon)
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-fd-border bg-fd-background p-8 shadow-sm">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-fd-foreground">
                Join the Community
              </h3>
              <p className="mb-6 text-fd-muted-foreground">
                Connect with the Margo community and stay updated with the
                latest developments and initiative details.
              </p>
              <Link
                href="https://margo.org"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-fd-primary bg-fd-primary/5 px-6 py-4 text-base font-semibold text-fd-primary transition-all hover:bg-fd-primary hover:text-fd-primary-foreground"
              >
                Visit Margo.org
                <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <div className="mt-6 rounded-lg bg-fd-muted/50 px-4 py-3">
                <p className="text-sm text-fd-muted-foreground">
                  Get initiative overview details, community updates, and
                  connect with other developers working with Margo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="border-t border-fd-border bg-fd-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="flex items-center">
                  <img
                    src="/figures/margo-logo.png"
                    alt="Margo"
                    className="h-8 w-auto dark:hidden"
                  />
                  <img
                    src="/figures/margo_white.png"
                    alt="Margo"
                    className="hidden h-8 w-auto dark:block"
                  />
                </span>
              </Link>
              <p className="text-sm text-fd-muted-foreground max-w-md mb-6">
                Defining mechanisms for interoperable orchestration at scale of
                edge applications/workloads and devices through open standards
                and reference implementations.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/margo/dev-repo"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-fd-border bg-fd-background text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground hover:border-fd-primary/50"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@margo"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-fd-border bg-fd-background text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground hover:border-fd-primary/50"
                  aria-label="YouTube"
                >
                  <SiYoutube className="h-5 w-5" />
                </Link>
                <Link
                  href="https://margo.org"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-fd-border bg-fd-background text-fd-muted-foreground transition-colors hover:bg-fd-muted hover:text-fd-foreground hover:border-fd-primary/50"
                  aria-label="Margo.org"
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-fd-foreground mb-4">
                Documentation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/overview"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/margo-api-reference"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/concepts"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    Concepts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/how-to-contribute"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    Contribute
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-fd-foreground mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://github.com/margo/dev-repo"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    Sandbox Repository
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/watch?v=aacT3Y-uqNY"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    Intro Video
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://margo.org"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    Margo.org
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/personas-definitions"
                    className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                  >
                    Personas
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-fd-border pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-fd-muted-foreground">
                © {new Date().getFullYear()} Margo Initiative. All rights
                reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="https://margo.org/privacy"
                  className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="https://margo.org/terms"
                  className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-primary"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
