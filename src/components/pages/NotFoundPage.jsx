import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import SEOHead from '../organisms/SEOHead'

export default function NotFoundPage() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = prefersReducedMotion
    ? { initial: {}, animate: {} }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  return (
    <>
      <SEOHead
        title="404 | Eudys Mora"
        description="Página no encontrada"
      />

      <section className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="text-8xl font-bold text-slate-700 mb-4"
        >
          404
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-slate-400 mb-8"
        >
          Página no encontrada
        </motion.p>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors text-sm font-medium"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </section>
    </>
  )
}
