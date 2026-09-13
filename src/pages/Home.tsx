import { useEffect } from 'react'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { CustomSolutions } from '../components/sections/CustomSolutions'
import { FAQ } from '../components/sections/FAQ'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Hero } from '../components/sections/Hero'
import { Industries } from '../components/sections/Industries'
import { Process } from '../components/sections/Process'
import { Services } from '../components/sections/Services'
import { Technology } from '../components/sections/Technology'
import { Testimonials } from '../components/sections/Testimonials'
import { TrustStrip } from '../components/sections/TrustStrip'
import { WhyUs } from '../components/sections/WhyUs'
import { Work } from '../components/sections/Work'
import { setPageMeta } from '../lib/seo'

export function Home() {
  useEffect(() => {
    setPageMeta()
  }, [])

  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Industries />
      <WhyUs />
      <Work />
      <Process />
      <CustomSolutions />
      <About />
      <Technology />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  )
}
