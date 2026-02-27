import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'

export default function App() {
  return (
    <Layout>
      <div className="space-y-20">
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </div>
    </Layout>
  )
}
