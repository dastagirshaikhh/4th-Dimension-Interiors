import Hero from '@/components/hero'
import Stats from '@/components/stats'
import GlobalNetwork from '@/components/global-network'
import Services from '@/components/services'
import Contact from '@/components/contact'
import BackToTop from '@/components/back-to-top'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Stats />
        <Projects />
        <GlobalNetwork />
        <Services />
        <Contact />
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

