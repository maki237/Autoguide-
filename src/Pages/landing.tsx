import Navbar from "@/components/ui/navbar"
import Hero from "@/components/ui/hero"
import FeaturesSection from "@/components/ui/featuessection"
import HowItWorks from "@/components/ui/howitworks"
import GarageSection from "@/components/ui/Garagesection"
import AlertSection from "@/components/ui/AlertSection"
import TrustSection from "@/components/ui/trustsection"
import CTASection from "@/components/ui/CTASection"
import Footer from "@/components/ui/Footer"
import { motion } from "motion/react"

export default function LandingPage() {
  return (
    <main className="landing-page min-h-screen bg-[#F8FAFC] text-slate-900">

      <Navbar />

      <div className="landing-panel landing-hero-panel">
        <Hero />
      </div>

      <motion.div id="solutions" className="landing-panel landing-content-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }}><FeaturesSection /></motion.div>

      <motion.div id="fonctionnement" className="landing-panel landing-content-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }}><HowItWorks /></motion.div>

      <motion.div id="garages" className="landing-panel landing-content-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }}><GarageSection /></motion.div>

      <motion.div id="aide" className="landing-panel landing-content-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }}><AlertSection /></motion.div>

      <motion.div className="landing-panel landing-content-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }}><TrustSection /></motion.div>

      <motion.div className="landing-panel landing-content-panel" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }}><CTASection /></motion.div>

      <Footer />

    </main>
  )
}