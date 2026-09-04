import Navbar from "@/components/ui/navbar"
import Hero from "@/components/ui/hero"
import FeaturesSection from "@/components/ui/featuessection"
import HowItWorks from "@/components/ui/howitworks"
import GarageSection from "@/components/ui/Garagesection"
import AlertSection from "@/components/ui/AlertSection"
import TrustSection from "@/components/ui/trustsection"
import CTASection from "@/components/ui/CTASection"
import Footer from "@/components/ui/Footer"
import { useEffect } from "react"

export default function LandingPage() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    elements.forEach((element) => element.classList.add("reveal-on-scroll"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">

      <Navbar />

      <Hero />

      <div data-reveal><FeaturesSection /></div>

      <div data-reveal><HowItWorks /></div>

      <div data-reveal><GarageSection /></div>

      <div data-reveal><AlertSection /></div>

      <div data-reveal><TrustSection /></div>

      <div data-reveal><CTASection /></div>

      <Footer />

    </main>
  )
}