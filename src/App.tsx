import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Program } from './components/Program'
import { Formats } from './components/Formats'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest focus:text-white"
      >
        Перейти к содержанию
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Program />
        <Formats />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
