# Design System - Alternative Down Visual Language

## 📋 Table of Contents

1. [Visão Geral](#visão-geral)
2. [Sistema de Cores (OKLCH)](#sistema-de-cores-oklch)
3. [Tipografia](#tipografia)
4. [Espaçamento & Layout](#espaçamento--layout)
5. [Componentes](#componentes)
6. [Sombras & Elevação](#sombras--elevação)
7. [Bordas & Radius](#bordas--radius)
8. [Estados & Interações](#estados--interações)
9. [Dark Mode](#dark-mode)
10. [Padrões Visuais](#padrões-visuais)
11. [Guia de Uso](#guia-de-uso)

---

## Visão Geral

O design system do Alternative Down é baseado em **sofisticação subtil**. Usa:
- **OKLCH color model** para cores sofisticadas e perceptualmente uniformes
- **Duas famílias de fonte**: Onest (corpo) + Literata (headings)
- **Espacamento generoso** para respiro visual
- **Sombras sutis** e gradientes refinados
- **Dark mode nativo** com suporte completo
- **Componentes reutilizáveis** construídos com Radix UI + Tailwind CSS v4

### Características Principais

✨ **Sofisticado** - Cores e espaçamento cuidadosamente escolhidos  
🎨 **OKLCH-First** - Cores perceptualmente uniformes  
📱 **Responsivo** - Mobile-first, mobile-perfect  
🌙 **Dark Mode Nativo** - Experiência de primeira classe em ambos temas  
♿ **Acessível** - Construído com Radix UI (WCAG 2.1 AA)  
⚡ **Performático** - CSS-in-JS minimal, Tailwind estático  

---

## Sistema de Cores (OKLCH)

### O Que é OKLCH?

**OKLCH** é um espaço de cor perceptualmente uniforme:
- **O** = Lightness (luminância, 0-1)
- **K** = Chroma (saturação perceptual)
- **L** = Hue (matiz, 0-360°)

**Vantagem vs RGB/HSL**: Cores com mesmo `L` parecem igualmente brilhantes para o olho humano. Ideal para design systems.

### Paleta de Cores (Light Mode)

#### Cores Base

```css
--background: oklch(0.99 0.002 270);        /* Quase branco, extremamente sutil */
--foreground: oklch(0.141 0.005 285.823);   /* Quase preto com toque azul */
```

- **Lightness: 0.99** = Praticamente branco (luminância máxima)
- **Chroma: 0.002** = Praticamente sem cor (muito sutil)
- **Resultado**: Branco puro com um toque de frieza (não amarelado)

#### Primária (Botões, Links, Destaque)

```css
--primary: oklch(0.56 0.08 252);            /* Azul sofisticado */
--primary-foreground: oklch(0.985 0 0);     /* Branco */
```

- **Lightness: 0.56** = Meio caminho entre claro e escuro
- **Chroma: 0.08** = Saturação moderada (not oversaturated)
- **Hue: 252** = Azul (ligeiramente para roxa)
- **Uso**: Buttons primários, links, destaques

#### Card & Surface

```css
--card: oklch(1 0 0);                       /* Branco puro */
--secondary: oklch(0.965 0.004 270);        /* Cinza muito claro */
--muted: oklch(0.965 0.004 270);            /* Cinza claro (backgrounds) */
--accent: oklch(0.965 0.004 270);           /* Cinza claro (backgrounds secundários) */
```

#### Borders & Inputs

```css
--border: oklch(0.9 0.008 270);             /* Cinza muito claro para bordas */
--input: oklch(0.9 0.008 270);              /* Mesmo das bordas */
```

- **Lightness: 0.9** = Bem claro, mas visível
- **Chroma: 0.008** = Praticamente sem saturação (cinza puro)
- **Uso**: Bordas de cards, inputs, separadores

#### Estados & Feedback

```css
--destructive: oklch(0.577 0.245 27.325);   /* Vermelho sofisticado */
--ring: oklch(0.56 0.08 252);               /* Mesmo da primária (para focus) */
```

#### Charts (Visualizações)

```css
--chart-1: oklch(0.646 0.222 41.116);       /* Laranja */
--chart-2: oklch(0.6 0.118 184.704);        /* Ciano/Azul-verde */
--chart-3: oklch(0.398 0.07 227.392);       /* Roxo profundo */
--chart-4: oklch(0.828 0.189 84.429);       /* Amarelo/Verde */
--chart-5: oklch(0.769 0.188 70.08);        /* Amarelo ouro */
```

### Paleta de Cores (Dark Mode)

```css
.dark {
  --background: oklch(0.14 0.006 270);      /* Cinza muito escuro */
  --foreground: oklch(0.985 0 0);           /* Branco */
  --card: oklch(0.2 0.006 270);             /* Cinza escuro (cards) */
  --primary: oklch(0.72 0.07 252);          /* Azul mais claro (mais visível) */
  --primary-foreground: oklch(0.141 0.005 285.823); /* Preto (text on blue) */
  --border: oklch(1 0 0 / 14%);             /* Branco com 14% opacidade */
  --muted-foreground: oklch(0.705 0.015 286.067); /* Cinza claro para texto muted */
  /* ... outras cores ajustadas para dark mode */
}
```

**Pattern no Dark Mode**:
- Luminância **reduzida** para proteger olhos
- Chroma **aumentada** ligeiramente para compensar
- Cores primárias **mais claras** para contraste
- Borders com **opacidade** ao invés de cor sólida

### Usando as Cores

#### CSS Variables

```css
/* Light mode (default) */
background-color: var(--background);
color: var(--foreground);
border: 1px solid var(--border);

/* Dark mode (automaticamente aplicado) */
.dark {
  background-color: var(--background);   /* Muda automaticamente */
  color: var(--foreground);              /* Muda automaticamente */
}
```

#### Tailwind CSS

```jsx
// Usar cores CSS variables via Tailwind
<div className="bg-background text-foreground border border-border/60">
  {/* Cores mudam automaticamente em dark mode */}
</div>

// Com opacidade
<div className="bg-card/55 border border-border/60 shadow-black/5">
  {/* Opacidade aplicada dinamicamente */}
</div>

// Dark mode específico
<div className="bg-background dark:bg-slate-900">
  {/* Fallback se a variável não funcionar */}
</div>
```

#### Padrão de Opacidade

O design usa **opacidade strategicamente** para criar hierarquia:

```css
/* Bordas subtis */
border-color: var(--border) / 60%;    /* 60% opacidade = mais sutil */

/* Cards semi-transparentes */
background-color: var(--card) / 55%;  /* 55% = permite backgrounds atrás */

/* Sombras sutis */
box-shadow: 0 1px 2px rgb(0 0 0 / 5%);   /* 5% = bem sutil */

/* Dark mode borders */
.dark border: 1px solid rgb(255 255 255 / 14%); /* Branco transparente */
```

---

## Tipografia

### Famílias de Fonte

#### 1. Onest (Body/UI)
```css
--font-body: "Onest", system-ui, sans-serif;
```

- **Uso**: Corpo do texto, labels, descriptions, UI text
- **Pesos**: 400 (regular), 500, 600, 700
- **Características**: Sans-serif moderna, geométrica, ótima legibilidade
- **Tamanho default**: 17px (mobile), 18px (desktop)

#### 2. Literata (Headings/Display)
```css
--font-display: "Literata", serif;
```

- **Uso**: H1, H2, H3, títulos principais
- **Pesos**: 400 (regular), 500
- **Características**: Serif elegante, sofisticada, ótima para headlines
- **Design**: Usa a fonte display para dar elegância

### Escala Tipográfica

#### Headings

```jsx
// H1 - Hero/Main Title
<h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal leading-[0.88]">
  {/* 
    Lightness: 0.6 a 0.8 (dependendo do background)
    Weight: 400 (regular, não bold)
    Leading: 0.88 (88% da altura = compacto, elegante)
    Tracking: tight (letter-spacing pequeno)
  */}
</h1>

// H2 - Section Titles
<h2 className="text-2xl sm:text-3xl font-normal">
  {/* text-2xl = 24px, text-3xl = 30px */}
</h2>

// H3 - Card Titles
<h3 className="text-lg font-normal">
  {/* text-lg = 18px */}
</h3>
```

#### Body Text

```jsx
// Paragraph default
<p className="text-base leading-relaxed text-muted-foreground">
  {/* 
    text-base = 16px
    leading-relaxed = 1.75 (espaçamento generoso entre linhas)
    text-muted-foreground = cor cinza
  */}
</p>

// Small text
<span className="text-sm text-muted-foreground">
  {/* text-sm = 14px */}
</span>

// Tiny text (labels, badges)
<span className="text-[11px] font-medium uppercase tracking-[0.15em]">
  {/* 
    text-[11px] = custom size para precisão
    font-medium = weight 500
    uppercase = MAIÚSCULAS
    tracking-[0.15em] = letter-spacing aumentado (elegant) 
  */}
</span>
```

#### Proprietário de Fonte

```css
h1, h2, h3 {
  font-family: var(--font-display);  /* Literata */
  font-weight: 400;                  /* Sempre regular, não bold */
}

body {
  font-family: var(--font-body);     /* Onest */
  font-size: 17px;                   /* Mobile */
}

@media (min-width: 1024px) {
  body {
    font-size: 18px;                 /* Desktop */
  }
}
```

### Propriedades Comuns

#### font-weight

- **400** = Regular (padrão para headings, muito usado em corpo)
- **500** = Medium (labels, badges)
- **600-700** = Não usado em design system (mantém simplicidade)

#### line-height

```css
leading-[0.88]    = 0.88 (headings, compacto)
leading-[1.02]    = 1.02 (medium headings)
leading-relaxed   = 1.75 (body text, confortável)
```

#### letter-spacing (tracking)

```css
tracking-tight         = -0.01em (headings)
tracking-[0.15em]      = 0.15em (labels, badges - elegante)
tracking-normal        = 0 (padrão)
```

---

## Espaçamento & Layout

### Escala de Espaçamento

O design usa a **escala padrão do Tailwind**, mas com aplicação estratégica:

```css
/* Padding/Margin Base */
4px (px-1, py-1)
8px (px-2, py-2)
12px (px-3, py-3)
16px (px-4, py-4)     /* Padrão para cards pequenos */
20px (px-5, py-5)     /* Mobile card padding */
24px (px-6, py-6)     /* Desktop card padding */
28px (px-7, py-7)
32px (px-8, py-8)     /* Seções grandes */
...
```

### Container & Seções

```jsx
// Container padrão
<div className="w-full px-6 sm:px-8 lg:px-12">
  {/* 
    Mobile: px-6 = 24px left + 24px right
    Tablet: px-8 = 32px left + 32px right
    Desktop: px-12 = 48px left + 48px right
    
    width: 100% (full width, sem max-width no padrão)
  */}
</div>

// Seção com espaçamento vertical
<section className="py-6 sm:py-8">
  {/* 
    Mobile: py-6 = 24px top + 24px bottom
    Desktop: py-8 = 32px top + 32px bottom
    
    Entre seções para respiro visual
  */}
</section>
```

### Grid & Flex Spacing

```jsx
// Grid com gap padrão
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* gap-6 = 24px entre itens */}
</div>

// Flex com gap
<div className="flex gap-4 items-center">
  {/* gap-4 = 16px entre items */}
</div>

// Cards side-by-side com gaps
<div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
  <div className="lg:w-1/3"> {/* 3 cards iguais */}
  <div className="lg:w-1/3">
  <div className="lg:w-1/3">
</div>
```

### Espacos Internos (Card Padding)

```jsx
// Card compacto (featured cards)
<div className="p-5 sm:p-6">
  {/* 
    Mobile: 20px padding
    Desktop: 24px padding
    Para cards principais
  */}
</div>

// Card normal
<div className="p-6 sm:p-8">
  {/* 
    Mobile: 24px padding
    Desktop: 32px padding
    Para cards com mais conteúdo
  */}
</div>

// Card grande (CTAs, panels especiais)
<div className="p-8 sm:p-12 md:p-16">
  {/* 
    Mobile: 32px
    Tablet: 48px
    Desktop: 64px
    Para seções especiais
  */}
</div>
```

### Espaçamento Vertical Entre Elementos

```jsx
// Dentro de cards
<div className="space-y-6">
  {/* gap-y: 24px entre todos os children */}
</div>

// Dentro de seções
<div className="space-y-6">
  {/* 
    Headers
    Separator
    Content grid
    = espaçamento consistente
  */}
</div>

// Margin top para relacionamento visual
<h2 className="mt-3">Section Title</h2>  {/* 12px top */}
<p className="mt-3">Description</p>      {/* 12px top */}
```

---

## Componentes

### 1. Button

#### Base

```jsx
<Button>Click Me</Button>
```

```css
/* Base styles (todos os buttons) */
inline-flex
items-center
justify-center
gap-2
whitespace-nowrap
rounded-sm                    /* Radius pequeno, sofisticado */
text-sm
font-medium
transition-all               /* Smooth transitions */
disabled:pointer-events-none
disabled:opacity-50
outline-none
focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]
```

#### Variantes

```jsx
// Default (Primária, CTA)
<Button variant="default">Começar</Button>
// bg-primary text-white shadow-xs hover:bg-primary/90

// Outline (Secundária, menos destaque)
<Button variant="outline">Saiba Mais</Button>
// border bg-background/90 shadow-xs hover:bg-accent

// Secondary (Com background)
<Button variant="secondary">Saber Mais</Button>
// border border-border/60 bg-secondary shadow-xs hover:bg-secondary/80

// Ghost (Minimalista)
<Button variant="ghost">Link like</Button>
// border border-border/40 bg-transparent shadow-xs hover:bg-accent

// Link (Texto puro)
<Button variant="link">Clique</Button>
// text-primary underline-offset-4 hover:underline
```

#### Tamanhos

```jsx
<Button size="default">Normal</Button>      {/* h-9 px-4 py-2 */}
<Button size="sm">Small</Button>            {/* h-8 px-3 */}
<Button size="lg">Large</Button>            {/* h-10 px-6 */}
<Button size="xs">Extra Small</Button>      {/* h-6 px-2 text-xs */}
<Button size="icon">Icon</Button>           {/* h-9 w-9 */}
```

#### Estados

```css
/* Hover */
.default:hover {
  background-color: var(--primary) / 90%;  /* Slightly darker */
}

/* Focus (acessibilidade) */
focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]

/* Disabled */
opacity-50
pointer-events-none
```

### 2. Card / Panel

#### Estrutura

```jsx
<Panel className="p-6">
  <h3>Card Title</h3>
  <p>Content here</p>
</Panel>
```

#### Estilos Base

```css
relative
overflow-hidden
rounded-lg                              /* Radius maior que buttons */
border border-border/60                 /* Borda sutil */
bg-card/55                              /* Semi-transparente */
shadow-sm shadow-black/5                /* Sombra muito sutil */
ring-1 ring-primary/5                   /* Ring interno, muito leve */
dark:shadow-black/45                    /* Dark mode: sombra mais forte */
```

#### Padrão de Gradiente Interno (Tone="portfolio")

```css
/* Adiciona um gradiente radial sutil para "portfólio" tone */
before {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 14% 0%,
    var(--primary) / 12%,
    transparent 58%
  ),
  radial-gradient(
    circle at 92% 36%,
    var(--chart-2) / 6%,
    transparent 74%
  );
  opacity: 75%;
  pointer-events: none;
}

/* Overlay padrão (gridlines) */
after {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    var(--border) 1px,
    transparent 1px
  );
  background-size: 220px 220px;
  opacity: 0.055;
  pointer-events: none;
}
```

#### Exemplos

```jsx
{/* Neutro (sem tone) */}
<Panel className="p-6">
  {/* Base com gradient muted */}
</Panel>

{/* Portfolio (destaque) */}
<Panel tone="portfolio" className="p-6">
  {/* + Gradiente azul/ciano */}
</Panel>

{/* Community (comunidade) */}
<Panel tone="community" className="p-6">
  {/* + Gradiente ciano/azul invertido */}
</Panel>
```

### 3. Separator

#### Uso

```jsx
<Separator className="opacity-40" />
```

#### Estilos

```css
height: 1px                 /* Linha fina */
width: 100%
background-color: var(--border)
opacity: 40%                /* Sutil */
```

#### Padrão de Uso

```jsx
<div className="space-y-6">
  <SectionTitle>...</SectionTitle>
  <Separator className="opacity-40" />     {/* Divisor entre título e conteúdo */}
  <Content>...</Content>
</div>
```

### 4. Badge / Status Chip

#### Estrutura

```jsx
<span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/25 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em]">
  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
  Label
</span>
```

#### Propriedades

```css
inline-flex
items-center
gap-2
rounded-full                /* Fully rounded */
border border-border/60     /* Borda sutil */
bg-background/25            /* Fundo semi-transparente */
px-3 py-1                   /* Padding compacto */
text-[11px]                 /* Texto pequeno */
font-medium                 /* Weight 500 */
uppercase                   /* MAIÚSCULAS */
tracking-[0.15em]           /* Letter spacing elegante */
```

#### Status Colors (com tones dinâmicos)

```css
/* As cores vêm do Tailwind, dinamicamente */
.status-proposed {
  color: var(--yellow-600);
  border-color: color-mix(in srgb, var(--yellow-600) 40%, transparent);
}

.status-planned {
  color: var(--blue-600);
  border-color: color-mix(in srgb, var(--blue-600) 40%, transparent);
}

.status-in_progress {
  color: var(--green-600);
  border-color: color-mix(in srgb, var(--green-600) 40%, transparent);
}

.status-done {
  color: var(--slate-600);
  border-color: color-mix(in srgb, var(--slate-600) 40%, transparent);
}
```

### 5. Section Title Pattern

#### Estrutura

```jsx
<div className="flex flex-wrap items-end justify-between gap-4">
  <div>
    <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
      CATEGORIA                           {/* Kicker */}
    </div>
    <h2 className="mt-3 text-2xl sm:text-3xl font-normal">
      Main Title                          {/* Heading */}
    </h2>
    <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
      Description                         {/* Descrição */}
    </p>
  </div>
  <div className="flex items-center gap-4">
    {/* Actions (botões, links, etc) */}
  </div>
</div>
```

#### Propriedades

```css
/* Container */
flex flex-wrap
items-end
justify-between
gap-4

/* Kicker (label pequeno) */
text-[11px]
font-medium
uppercase
tracking-[0.15em]
text-muted-foreground
margin-top: 0

/* Heading (título) */
margin-top: 12px
text-2xl sm:text-3xl
font-normal
text-balance

/* Description */
margin-top: 12px
text-sm sm:text-base
leading-relaxed
text-muted-foreground
text-pretty

/* Actions (direita) */
flex items-center gap-4
```

---

## Sombras & Elevação

### Sistema de Sombras

O design usa sombras **muito sutis** para não pesar visualmente.

#### Shadow Values

```css
/* Tailwind shadow-xs (não existia, custom) */
shadow-xs: 0 1px 2px rgb(0 0 0 / 0.05)

/* Tailwind shadow-sm */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)

/* Custom dark mode */
dark:shadow-black/45: rgb(0 0 0 / 45%)
```

#### Uso por Componente

```jsx
// Cards
<div className="shadow-sm shadow-black/5 dark:shadow-black/45">

// Buttons
<button className="shadow-xs hover:shadow-xs">

// Subtle elevation
<div className="shadow-xs">
```

#### Padrão

```css
/*
Layering visual:
- Sem shadow = conteúdo inline
- shadow-xs = elementos leves
- shadow-sm = cards principais
- dark:shadow-black/45 = compensação visual em dark mode
*/
```

---

## Bordas & Radius

### Border Radius Scale

```css
--radius: 0.5rem (8px - base)

--radius-sm: calc(var(--radius) - 4px) = 4px
--radius-md: calc(var(--radius) - 2px) = 6px
--radius-lg: var(--radius) = 8px
--radius-xl: calc(var(--radius) + 4px) = 12px
--radius-2xl: calc(var(--radius) + 8px) = 16px
```

### Aplicação

```jsx
// Buttons
<button className="rounded-sm">       {/* 4px radius */}

// Cards
<div className="rounded-lg">           {/* 8px radius */}

// Badges/Pills
<span className="rounded-full">        {/* 9999px = pill shape */}
```

### Bordas

```jsx
// Padrão com border
<div className="border border-border/60">

// Sem border
<div>

// Borda customizada
<div className="border border-border/40">  {/* Menos visível */}
<div className="border-2 border-primary">  {/* Mais forte */}
```

---

## Estados & Interações

### Hover States

```jsx
// Button default
.hover:bg-primary/90        /* Escurece levemente */

// Button outline
.hover:bg-accent
.hover:text-accent-foreground

// Button secondary
.hover:bg-secondary/80      /* Opacidade reduzida */

// Card
.group-hover:text-primary   /* Texto muda ao hover */

// Link
.hover:underline            /* Underline appears */
```

### Focus States (Accessibility)

```jsx
// Padrão (todos os buttons)
focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]

// Keyboard navigation
outline-none                 /* Remove outline padrão */
```

### Active States

```jsx
/* Mantidos simples, transições suaves */
transition-all              /* Smooth changes */
```

### Disabled States

```jsx
disabled:pointer-events-none
disabled:opacity-50         /* Mais transparente */
```

---

## Dark Mode

### Ativação

```jsx
// HTML root recebe classe "dark"
<html className="dark">

// Via localStorage
localStorage.setItem('theme', 'dark')

// Via system preference
window.matchMedia('(prefers-color-scheme: dark)')
```

### Variables em Dark Mode

```css
.dark {
  --background: oklch(0.14 0.006 270);        /* Muito escuro */
  --foreground: oklch(0.985 0 0);             /* Branco */
  --primary: oklch(0.72 0.07 252);            /* Azul mais claro */
  --border: oklch(1 0 0 / 14%);               /* Branco semi-transparente */
  /* ... todas as cores redefini das */
}
```

### Padrão de Background em Dark Mode

```css
.dark {
  background: 
    linear-gradient(to bottom, transparent 0%, oklch(0 0 0 / 0.72) 100%),
    repeating-linear-gradient(
      45deg,
      var(--border) 0 1px,
      transparent 1px 14px
    );
}
```

**Resultado**: Gradiente escuro com diagonal pattern sutil

### Uso no Tailwind

```jsx
// Dark mode specific
<div className="bg-background dark:bg-slate-900">

// Variable-based (preferred)
<div className="bg-background">  {/* Muda automaticamente */}

// Text color
<p className="text-foreground dark:text-white">
```

---

## Padrões Visuais

### Diagonal Pattern (Background)

```css
/* Usado globalmente no background */
repeating-linear-gradient(
  45deg,                      /* 45 graus = diagonal */
  var(--border) 0 1px,       /* Linha de 1px */
  transparent 1px 14px       /* Espaço transparente de 14px */
)
```

**Efeito**: Grid diagonal sutil, sofisticado

### Radial Gradient (Cards)

```css
/* Portfolio tone */
radial-gradient(
  circle at 14% 0%,           /* Começa no topo esquerdo */
  theme(colors.primary) / 12%, /* Azul leve */
  transparent 58%              /* Desvanece rapidamente */
)

/* Community tone */
radial-gradient(
  circle at 14% 0%,
  theme(colors.chart-2) / 14%, /* Ciano leve */
  transparent 58%
)
```

**Efeito**: Iluminação sutil como se houvesse uma luz vindo de um lado

### Grid Background (Cards)

```css
/* Muito sutil */
background: linear-gradient(
  to right,
  var(--border) 1px,
  transparent 1px
);
background-size: 220px 220px;
opacity: 0.055;              /* 5.5% = praticamente invisível */
```

**Efeito**: Sugestão de estrutura, sem pesar

---

## Guia de Uso

### Checklist: Implementando novo componente

- [ ] **Cores** → Use CSS variables (`var(--primary)`, etc)
- [ ] **Tipografia** → H1-H3 usam `--font-display`, body usa `--font-body`
- [ ] **Weight** → Headings: 400 (regular), labels: 500 (medium)
- [ ] **Spacing** → Use escala Tailwind (px-6, py-8, gap-6)
- [ ] **Border** → `border border-border/60` (não mais escuro)
- [ ] **Radius** → Buttons: `rounded-sm`, Cards: `rounded-lg`, Pills: `rounded-full`
- [ ] **Shadow** → Cards: `shadow-sm shadow-black/5 dark:shadow-black/45`
- [ ] **Dark Mode** → Teste com `.dark` no HTML root
- [ ] **Focus** → Inclua `focus-visible:ring-ring/50 focus-visible:ring-[3px]`
- [ ] **Hover** → Transição suave, mudanças sutis
- [ ] **Responsive** → Mobile-first (base case), depois `sm:`, `lg:`, etc

### Exemplos de Componentes Corretos

#### Exemplo 1: Hero Section

```jsx
<section className="relative overflow-hidden pb-4 pt-2 sm:pb-6">
  <div className="pointer-events-none absolute inset-0 opacity-70">
    {/* Background pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(...)]" />
    <div className="absolute inset-0 bg-[radial-gradient(...)]" />
  </div>
  
  <div className="w-full px-6 sm:px-8 lg:px-12">
    <div className="relative py-12 sm:py-14 lg:py-16">
      <h1 className="text-balance text-6xl leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl font-normal">
        Heading here
      </h1>
    </div>
  </div>
</section>
```

#### Exemplo 2: Card Grid

```jsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {items.map(item => (
    <div
      key={item.id}
      className="relative overflow-hidden rounded-lg border border-border/60 bg-card/55 shadow-sm shadow-black/5 ring-1 ring-primary/5 dark:shadow-black/45 p-6"
    >
      <h3 className="text-lg font-normal">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </div>
  ))}
</div>
```

#### Exemplo 3: Section with Title

```jsx
<section className="py-6 sm:py-8">
  <div className="w-full px-6 sm:px-8 lg:px-12">
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Category
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-normal">
            Section Title
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Description
          </p>
        </div>
      </div>
      
      <Separator className="opacity-40" />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Content */}
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 Summary

O estilo Alternative Down é definido por:

1. **OKLCH Colors** - Sofisticação perceptual, não RGB
2. **Onest + Literata** - Combinação de sans-serif + serif elegante
3. **Generous Spacing** - Respiro visual em tudo
4. **Subtle Shadows** - Elevação, nunca óbvia
5. **Small Radius** - `rounded-sm`, não `rounded-lg` em buttons
6. **High Opacity** - Cores semi-transparentes para hierarquia
7. **Dark Mode First** - Não afterthought, integral ao design
8. **Accessibility** - Focus states, semantic HTML, contrast
9. **Pattern & Texture** - Diagonal lines, radial gradients, grids
10. **Consistent** - Mesmas proporções, espaçamento, colors em todo lugar

**Chave**: Menos é mais. Sofisticação através da restrição, não da adição.

