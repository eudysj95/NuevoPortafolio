import { Helmet } from 'react-helmet-async'

const DEFAULT_OG_IMAGE = '/og-image.png'
const SITE_NAME = 'Eudys Mora | Portfolio'

export default function SEOHead({
  title = SITE_NAME,
  description = 'Portfolio profesional de Eudys Mora — Frontend, Analista, Gestión, IA, Full Stack',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
}) {
  const fullTitle = title.includes('|') ? title : `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
