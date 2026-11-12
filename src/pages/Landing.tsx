import { TopBar } from '../components/TopBar'
import { Chips } from '../components/Chips'
import { Hero } from '../components/Hero'
import { Faq, Features, HowItWorks, Install } from '../components/Sections'
import { Footer } from '../components/Footer'

export function Landing() {
  return (
    <>
      <TopBar />
      <main id="top" className="wrap">
        <Chips />
        <Hero />
        <Features />
        <HowItWorks />
        <Install />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
