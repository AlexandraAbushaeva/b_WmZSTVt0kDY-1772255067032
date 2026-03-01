import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeStrip } from "@/components/marquee-strip"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Problems } from "@/components/problems"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <Services />
      <Problems />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
