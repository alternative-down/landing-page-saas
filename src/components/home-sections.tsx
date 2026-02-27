import { cn } from "@/lib/utils"

export function SplitKicker({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3 justify-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {left}
      </span>
      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
        {right}
      </span>
    </div>
  )
}

export function Panel({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode
  tone?: "neutral" | "portfolio" | "community"
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border/60 bg-card/55 shadow-sm shadow-black/5 ring-1 ring-primary/5 dark:shadow-black/45",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-75">
        {tone === "portfolio" && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,theme(colors.primary)/12,transparent_58%),radial-gradient(circle_at_92%_36%,theme(colors.chart-2)/6,transparent_74%)]" />
        )}
        {tone === "community" && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,theme(colors.chart-2)/14,transparent_58%),radial-gradient(circle_at_92%_36%,theme(colors.primary)/7,transparent_74%)]" />
        )}
        {tone === "neutral" && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,theme(colors.muted)/35,transparent_60%)]" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px)] bg-[size:220px_220px] opacity-[0.055]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      {children}
    </div>
  )
}

export function SectionTitleMain({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[92ch]">{children}</div>
}

export function SectionTitleKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
      {children}
    </div>
  )
}

export function SectionTitleHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl font-normal">
      {children}
    </h2>
  )
}

export function SectionTitleDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
      {children}
    </p>
  )
}

export function SectionTitleActions({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-4">{children}</div>
}

export function SectionTitleLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={href} className="text-sm underline underline-offset-4 hover:text-foreground">
      {children}
    </a>
  )
}

type ProjectStatus = "proposed" | "planned" | "in_progress" | "done"

const statusLabels: Record<ProjectStatus, string> = {
  proposed: "Proposto",
  planned: "Planejado",
  in_progress: "Em progresso",
  done: "Concluído",
}

const statusTones: Record<ProjectStatus, string> = {
  proposed: "text-yellow-600 dark:text-yellow-400 border-yellow-600/40 dark:border-yellow-400/40",
  planned: "text-blue-600 dark:text-blue-400 border-blue-600/40 dark:border-blue-400/40",
  in_progress: "text-green-600 dark:text-green-400 border-green-600/40 dark:border-green-400/40",
  done: "text-slate-600 dark:text-slate-400 border-slate-600/40 dark:border-slate-400/40",
}

export function StatusChip({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em]",
        statusTones[status],
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {statusLabels[status]}
    </span>
  )
}
