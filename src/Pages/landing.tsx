import Navbar from "@/components/ui/navbar"
import Hero from "@/components/ui/hero"
import FeaturesSection from "@/components/ui/featuessection"
import HowItWorks from "@/components/ui/howitworks"
import GarageSection from "@/components/ui/Garagesection"
import AlertSection from "@/components/ui/AlertSection"
import TrustSection from "@/components/ui/trustsection"
import CTASection from "@/components/ui/CTASection"
import Footer from "@/components/ui/Footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">

      <Navbar />

      <Hero />

      <FeaturesSection />

      <HowItWorks />

      <GarageSection />

      <AlertSection />

      <TrustSection />

      <CTASection />

      <Footer />

    </main>
  )
}