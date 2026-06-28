import { useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useProfile } from '../../context/ProfileContext'
import SEOHead from '../organisms/SEOHead'
import HeroSection from '../organisms/HeroSection'
import SkillsSection from '../organisms/SkillsSection'
import ProjectsSection from '../organisms/ProjectsSection'
import TimelineSection from '../organisms/TimelineSection'
import TestimonialsSection from '../organisms/TestimonialsSection'
import ContactForm from '../organisms/ContactForm'

const validProfiles = ['frontend', 'analista', 'gestion', 'ia', 'fullstack']

export default function ProfilePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { setProfileId, profileData } = useProfile()
  const prefersReducedMotion = useReducedMotion()

  const profileParam = useMemo(() => {
    return location.pathname.replace(/^\//, '') || null
  }, [location.pathname])

  useEffect(() => {
    if (!profileParam || !validProfiles.includes(profileParam)) {
      navigate('/404', { replace: true })
      return
    }
    setProfileId(profileParam)
  }, [profileParam, setProfileId, navigate])

  if (!profileData || !validProfiles.includes(profileParam)) {
    return null
  }

  const { profile } = profileData

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <SEOHead
        title={`${profile.name} | Eudys Mora`}
        description={profile.bio?.slice(0, 160) || `Perfil de ${profile.name}`}
      />

      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <TestimonialsSection />
      <ContactForm />
    </motion.div>
  )
}
