import { Button } from '@/components/ui/button'
import { ArrowUpRight, Flame, Lightbulb } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { 
  Panel, 
  SectionTitle, 
  SectionTitleKicker, 
  SectionTitleMain, 
  SectionTitleHeading, 
  SectionTitleDescription,
  SectionTitleActions,
  SectionTitleLink,
  SplitKicker,
  StatusChip
} from '@/components/home-sections'

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full px-6 sm:px-8 lg:px-12">
    {children}
  </div>
)

function App() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-[radial-gradient(circle_at_20%_0%,theme(colors.primary)/5,transparent_55%),linear-gradient(to_bottom,theme(colors.muted)/22,theme(colors.background),theme(colors.background))]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,oklch(0_0_0/0.18)_100%),repeating-linear-gradient(45deg,var(--border)_0_1px,transparent_1px_14px)] dark:bg-[linear-gradient(to_bottom,transparent_0%,oklch(0_0_0/0.72)_100%),repeating-linear-gradient(45deg,var(--border)_0_1px,transparent_1px_14px)]"
      />
      <div className="relative">
      {/* Header */}
      <header className="border-b border-border/60 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
        <Container>
          <nav className="flex items-center justify-between h-16">
            <a href="#" className="text-lg font-normal">
              Micro-SaaS
            </a>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                Features
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </a>
              <Button>Começar</Button>
            </div>
          </nav>
        </Container>
      </header>

      <main>
        {/* Hero Section - EXACT COPY from portal */}
        <section className="relative overflow-hidden pb-4 pt-2 sm:pb-6">
          <Container>
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px)] bg-[size:140px_140px] opacity-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,theme(colors.primary)/10,transparent_62%),radial-gradient(circle_at_82%_52%,theme(colors.chart-2)/8,transparent_68%)]" />
            </div>

            <div className="relative py-12 sm:py-14 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-12">
                  <div className="hidden sm:flex sm:justify-center">
                    <SplitKicker left="Produto" right="Moderno" />
                  </div>

                  <div className="mt-6 space-y-6 text-center">
                    <h1 className="text-balance text-6xl leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl font-normal">
                      Construa seu
                      <span className="block text-muted-foreground">
                        SaaS mais rápido
                      </span>
                    </h1>

                    <p className="mx-auto max-w-[92ch] text-pretty text-base text-muted-foreground sm:text-lg">
                      Tudo que você precisa para lançar um produto SaaS moderno. Construído com TypeScript, React e as melhores práticas da indústria.
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured showcase - THREE PANELS */}
              <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-stretch">
                <Panel className="p-5 sm:p-6 lg:w-1/3">
                  <div className="space-y-2 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Build Tool
                    </p>
                    <p className="text-3xl font-normal">Vite 7.3.1</p>
                    <p className="text-sm text-muted-foreground">Ultra-rápido com HMR instant</p>
                  </div>
                </Panel>

                <Panel className="p-5 sm:p-6 lg:w-1/3">
                  <div className="space-y-2 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      UI Library
                    </p>
                    <p className="text-3xl font-normal">React 19.2</p>
                    <p className="text-sm text-muted-foreground">Com concurrent features</p>
                  </div>
                </Panel>

                <Panel className="p-5 sm:p-6 lg:w-1/3">
                  <div className="space-y-2 text-center">
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                      Type Safety
                    </p>
                    <p className="text-3xl font-normal">TypeScript 5.9</p>
                    <p className="text-sm text-muted-foreground">Zero runtime type errors</p>
                  </div>
                </Panel>
              </div>

              <div className="mt-6 flex gap-3 justify-center flex-wrap">
                <Button size="lg">
                  Começar <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Saber mais
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="py-6 sm:py-8">
          <Container>
            <div className="space-y-6">
              <SectionTitle>
                <SectionTitleMain>
                  <SectionTitleKicker>Capacidades</SectionTitleKicker>
                  <SectionTitleHeading>
                    Recursos poderosos para seu SaaS
                  </SectionTitleHeading>
                  <SectionTitleDescription>
                    Tudo que você precisa para construir e escalar seu produto.
                  </SectionTitleDescription>
                </SectionTitleMain>
              </SectionTitle>

              <Separator className="opacity-40" />

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { title: 'Ultra rápido', desc: 'Vite garante builds em milissegundos.' },
                  { title: 'Seguro', desc: 'Autenticação e boas práticas embutidas.' },
                  { title: 'Escalável', desc: 'De MVP a milhões de usuários.' },
                  { title: 'Type-Safe', desc: 'Zero erros de tipo em runtime.' }
                ].map((item) => (
                  <Panel key={item.title} tone="portfolio" className="p-6 flex flex-col">
                    <h3 className="font-normal mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Panel>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Tech Stack Section */}
        <section className="py-6 sm:py-8">
          <Container>
            <div className="space-y-6">
              <SectionTitle>
                <SectionTitleMain>
                  <SectionTitleKicker>Stack</SectionTitleKicker>
                  <SectionTitleHeading>Tecnologia escolhida</SectionTitleHeading>
                  <SectionTitleDescription>
                    Ferramentas modernas e produtivas para desenvolvimento rápido.
                  </SectionTitleDescription>
                </SectionTitleMain>
                <SectionTitleActions>
                  <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                    <Flame className="size-4" />
                    Curada
                  </span>
                </SectionTitleActions>
              </SectionTitle>

              <Separator className="opacity-40" />

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'Vite 7.3.1', desc: 'Build tool ultra-rápido com HMR instant', status: 'done' },
                  { name: 'React 19.2.4', desc: 'UI library com hooks e concurrent features', status: 'done' },
                  { name: 'TypeScript 5.9.3', desc: 'Type safety total, zero bugs de tipo', status: 'done' },
                  { name: 'Tailwind v4', desc: 'Utility-first CSS com @tailwindcss/vite', status: 'done' },
                  { name: 'Shadcn/ui', desc: 'Componentes acessíveis e customizáveis', status: 'done' },
                  { name: 'Lucide Icons', desc: '500+ ícones SVG consistentes', status: 'done' }
                ].map((tech) => (
                  <Panel key={tech.name} tone="community" className="p-6 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-normal text-base">{tech.name}</h3>
                      <StatusChip status={tech.status as any} />
                    </div>
                    <p className="text-sm text-muted-foreground">{tech.desc}</p>
                  </Panel>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-6 sm:py-8">
          <Container>
            <div className="space-y-6">
              <SectionTitle>
                <SectionTitleMain>
                  <SectionTitleKicker>Preços</SectionTitleKicker>
                  <SectionTitleHeading>
                    Simplicidade em cada plano
                  </SectionTitleHeading>
                  <SectionTitleDescription>
                    Escolha o plano ideal para você, sem surpresas.
                  </SectionTitleDescription>
                </SectionTitleMain>
              </SectionTitle>

              <Separator className="opacity-40" />

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { name: 'Starter', price: '$29', status: 'proposed', features: ['Até 1.000 usuários', 'Recursos principais', 'Suporte por email'] },
                  { name: 'Professional', price: '$99', status: 'in_progress', featured: true, features: ['Até 10.000 usuários', 'Todos recursos Starter', 'Suporte prioritário', 'Analytics avançado'] },
                  { name: 'Enterprise', price: 'Custom', status: 'planned', features: ['Usuários ilimitados', 'Todos os recursos', 'Suporte 24/7', 'Account manager'] }
                ].map((plan) => (
                  <Panel
                    key={plan.name}
                    tone={plan.featured ? 'portfolio' : 'neutral'}
                    className={`p-6 sm:p-8 flex flex-col ${plan.featured ? 'ring-2 ring-primary' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-normal">{plan.name}</h3>
                      <StatusChip status={plan.status as any} />
                    </div>

                    <div className="mb-6">
                      <span className="text-4xl font-normal">{plan.price}</span>
                      {plan.price !== 'Custom' && <span className="text-muted-foreground">/mês</span>}
                    </div>

                    <Button className="w-full mb-6" variant={plan.featured ? "default" : "secondary"}>
                      Começar
                    </Button>

                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 text-primary">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Panel>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Ideas / Community Section */}
        <section className="py-6 sm:py-8">
          <Container>
            <div className="space-y-6">
              <SectionTitle>
                <SectionTitleMain>
                  <SectionTitleKicker>Comunidade</SectionTitleKicker>
                  <SectionTitleHeading>
                    Ideias & Feedback
                  </SectionTitleHeading>
                  <SectionTitleDescription>
                    O que a comunidade está pedindo e o que vem a seguir.
                  </SectionTitleDescription>
                </SectionTitleMain>
                <SectionTitleActions>
                  <SectionTitleLink href="/roadmap">Ver roadmap</SectionTitleLink>
                </SectionTitleActions>
              </SectionTitle>

              <Separator className="opacity-40" />

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: 'OAuth Integration', votes: 234, status: 'planned' },
                  { title: 'Dark Mode Support', votes: 189, status: 'in_progress' }
                ].map((idea) => (
                  <Panel key={idea.title} tone="community" className="p-6 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <Lightbulb className="h-5 w-5 text-primary mt-1" />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-normal">{idea.title}</h3>
                          <p className="text-sm text-muted-foreground">{idea.votes} votes</p>
                        </div>
                      </div>
                      <StatusChip status={idea.status as any} />
                    </div>
                  </Panel>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16">
          <Container>
            <Panel tone="portfolio" className="p-8 sm:p-12 md:p-16">
              <div className="space-y-6 text-center max-w-3xl mx-auto">
                <div className="space-y-3">
                  <h2 className="text-4xl sm:text-5xl font-normal leading-[1.1]">
                    Pronto para começar?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Junte-se a empreendedores construindo seu SaaS com tecnologia moderna.
                  </p>
                </div>

                <div className="flex gap-3 justify-center flex-wrap pt-4">
                  <Button size="lg">
                    Iniciar teste grátis <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Agendar demo
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Sem cartão de crédito. 14 dias de teste grátis.
                </p>
              </div>
            </Panel>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8 sm:py-12 bg-background/50">
        <Container>
          <div className="space-y-6">
            <Separator className="opacity-40" />
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; 2026 Micro-SaaS. Todos os direitos reservados.</p>
            </div>
          </div>
        </Container>
      </footer>
      </div>
    </div>
  )
}

export default App
