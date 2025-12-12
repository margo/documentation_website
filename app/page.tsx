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
              Margo Documentation
            </h1>
            <p className="mt-6 text-lg leading-8 text-fd-muted-foreground sm:text-xl">
              Margo enables open, interoperable orchestration of edge applications and devices at scale—unlocking innovation and accelerating digital transformation.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm text-fd-muted-foreground">
              <Shield className="h-4 w-4" />
              Open standard • Reference implementation • Compliance testing
            </div>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://github.com/margo/dev-repo"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-fd-primary bg-fd-primary px-6 py-3.5 text-base font-semibold text-fd-primary-foreground transition-all hover:bg-fd-primary/90 hover:shadow-lg sm:w-auto"
              >
                <Rocket className="h-5 w-5" />
                Get started with the sandbox
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/margo-api-reference"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-fd-border bg-fd-background px-6 py-3.5 text-base font-semibold text-fd-foreground transition-all hover:border-fd-primary/50 hover:bg-fd-muted sm:w-auto"
              >
                <FileText className="h-5 w-5" />
                Read the specification
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 rounded-lg bg-amber-500/10 border border-amber-500/20 px-4 py-3 text-center">
              <p className="text-xs text-amber-700 dark:text-amber-400">
                ⚠️ Pre-draft stage: No products should be produced based on this version
              </p>
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
    </main>
  );
}
