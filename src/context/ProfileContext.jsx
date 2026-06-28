/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useMemo } from 'react'

import frontendData from '../data/frontend.json'
import analistaData from '../data/analista.json'
import gestionData from '../data/gestion.json'
import aiData from '../data/ia.json'
import fullstackData from '../data/fullstack.json'

const ProfileContext = createContext(null)

const profileMap = {
  frontend: frontendData,
  analista: analistaData,
  gestion: gestionData,
  ia: aiData,
  fullstack: fullstackData,
}

const ALL_PROFILES = [
  { id: 'frontend', ...frontendData.profile },
  { id: 'analista', ...analistaData.profile },
  { id: 'gestion', ...gestionData.profile },
  { id: 'ia', ...aiData.profile },
  { id: 'fullstack', ...fullstackData.profile },
]

export function ProfileProvider({ children }) {
  const [profileId, setProfileId] = useState(null)

  const value = useMemo(() => {
    const active = profileId ? profileMap[profileId] : null
    return {
      profileId,
      setProfileId,
      profileData: active,
      allProfiles: ALL_PROFILES,
      profiles: profileMap,
    }
  }, [profileId])

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }
  return ctx
}

export default ProfileContext
