import { motion, useReducedMotion } from 'framer-motion'
import HeroSection from '../organisms/HeroSection'
import ProfileSelector from '../organisms/ProfileSelector'
import SEOHead from '../organisms/SEOHead'

export default function LandingPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SEOHead
        title="Eudys Mora | Portfolio"
        description="Portfolio profesional de Eudys Mora — Frontend, IA, Management"
      />

      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <HeroSection />
        <ProfileSelector />
      </motion.div>
    </>
  )
}
