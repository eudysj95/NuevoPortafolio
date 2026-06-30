import projects from '../../data/projects'
import HeroSection from '../organisms/HeroSection'
import GallerySection from '../organisms/GallerySection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GallerySection projects={projects} />
    </>
  )
}
