import { motion, useReducedMotion } from 'framer-motion'

export default function HeroSection() {
  const prefersReduced = useReducedMotion()

  const fadeUp = prefersReduced
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Animated background accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/20 via-cyan-400/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-100 mb-4"
        >
          Hola, soy Eudys Mora
        </motion.h1>

        <motion.p
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.6, delay: prefersReduced ? 0 : 0.15, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-cyan-400 max-w-2xl mx-auto"
        >
          Desarrollador de Software
        </motion.p>
      </div>
    </section>
  )
}
