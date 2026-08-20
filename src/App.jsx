import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Ticker } from './components/Ticker'
import { MarginSection } from './components/MarginSection'
import { ExecutionSection } from './components/ExecutionSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <MarginSection />
        <ExecutionSection />
      </main>
      <Footer />
    </div>
  )
}
