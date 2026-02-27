import { Button } from '@/components/ui/button'
import { ArrowUpRight, Zap, Lock, BarChart3, Gauge } from 'lucide-react'
import { 
  Panel, 
  SectionTitle, 
  SectionTitleKicker, 
  SectionTitleMain, 
  SectionTitleHeading, 
  SectionTitleDescription, 
  SplitKicker,
  StatusChip 
} from '@/components/home-sections'

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
)

function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/60 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <nav className="h-16 flex items-center justify-between">
          <Container>
            <div className="flex items-center justify-between w-full">
              <a href="#home" className="text-xl font-semibold">
                Micro-SaaS
              </a>
              <div className="flex gap-6 items-center">
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                  Features
                </a>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
                <Button>Get Started</Button>
              </div>
            </div>
          </Container>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-12">
          <Container>
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px)] bg-[size:140px_140px] opacity-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,theme(colors.primary)/10,transparent_62%),radial-gradient(circle_at_82%_52%,theme(colors.chart-2)/8,transparent_68%)]" />
            </div>

            <div className="relative text-center space-y-8">
              <div className="space-y-6">
                <SplitKicker left="Produto" right="Moderno" />
                
                <h1 className="text-balance text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.88] tracking-tight">
                  Construa seu<br/>
                  <span className="text-muted-foreground">SaaS mais rápido</span>
                </h1>

                <p className="mx-auto max-w-[92ch] text-pretty text-base text-muted-foreground sm:text-lg">
                  Tudo que você precisa para lançar um produto SaaS moderno. Construído com TypeScript, React e as melhores práticas da indústria.
                </p>
              </div>

              <div className="flex gap-3 justify-center flex-wrap">
                <Button size="lg">
                  Começar <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Saber mais
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section id="features" className="py-12 sm:py-16">
          <Container>
            <div className="space-y-12">
              <SectionTitle>
                <SectionTitleMain>
                  <SectionTitleKicker>Capacidades</SectionTitleKicker>
                  <SectionTitleHeading>
                    Recursos poderosos para seu SaaS
                  </SectionTitleHeading>
                  <SectionTitleDescription>
                    Tudo que você precisa para construir e escalar seu produto com confiança.
                  </SectionTitleDescription>
                </SectionTitleMain>
              </SectionTitle>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Zap, title: 'Ultra rápido', desc: 'Construído com Vite para performance máxima.' },
                  { icon: Lock, title: 'Seguro por padrão', desc: 'Autenticação e boas práticas de segurança.' },
                  { icon: BarChart3, title: 'Analytics', desc: 'Acompanhe o comportamento e métricas dos usuários.' },
                  { icon: Gauge, title: 'Escalável', desc: 'Pronto para escalar de MVP para milhões.' }
                ].map((feature) => {
                  const Icon = feature.icon
                  return (
                    <Panel key={feature.title} tone="portfolio" className="p-6 flex flex-col">
                      <Icon className="h-6 w-6 mb-4" />
                      <h3 className="font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </Panel>
                  )
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12 sm:py-16">
          <Container>
            <div className="space-y-12">
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

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Starter', price: '$29', status: 'proposed', features: ['Até 1.000 usuários', 'Recursos principais', 'Suporte por email'] },
                  { name: 'Professional', price: '$99', status: 'in_progress', featured: true, features: ['Até 10.000 usuários', 'Todos recursos Starter', 'Suporte prioritário', 'Analytics avançado'] },
                  { name: 'Enterprise', price: 'Custom', status: 'planned', features: ['Usuários ilimitados', 'Todos os recursos', 'Suporte 24/7', 'Account manager'] }
                ].map((plan) => (
                  <Panel
                    key={plan.name}
                    tone={plan.featured ? 'portfolio' : 'community'}
                    className={`p-6 sm:p-8 flex flex-col ${plan.featured ? 'ring-2 ring-primary' : ''}`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="min-w-0">
                        <h3 className="text-2xl font-semibold">
                          {plan.name}
                        </h3>
                      </div>
                      <StatusChip status={plan.status as any} />
                    </div>

                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        {plan.price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-muted-foreground">/mês</span>
                      )}
                    </div>

                    <Button className="w-full mb-6" variant={plan.featured ? "default" : "secondary"}>
                      Começar
                    </Button>

                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5">✓</span>
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

        {/* CTA */}
        <section className="py-12 sm:py-16">
          <Container>
            <Panel tone="portfolio" className="p-8 sm:p-12 md:p-16 text-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-4xl sm:text-5xl font-bold">
                    Pronto para começar?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-[92ch] mx-auto">
                    Junte-se a milhares de empreendedores construindo seu SaaS com nossa plataforma.
                  </p>
                </div>

                <div className="flex gap-3 justify-center flex-wrap">
                  <Button size="lg">
                    Iniciar teste grátis <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="secondary">
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
      <footer className="border-t border-border/60 py-8">
        <Container>
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Micro-SaaS. Todos os direitos reservados.</p>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default App
