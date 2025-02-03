import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Properties from '@/components/properties'
import GlobalNetwork from '@/components/global-network'
import Services from '@/components/services'
import Contact from '@/components/contact'
import BackToTop from '@/components/back-to-top'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Stats />
        <Properties />
        <GlobalNetwork />
        <Services />
        <Contact />
        <BackToTop />
      </main>
      <Footer />
    </>
  )
}

