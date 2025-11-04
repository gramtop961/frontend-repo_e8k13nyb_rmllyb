import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-300/40 via-violet-300/30 to-sky-300/30 blur-3xl pointer-events-none" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div className="relative z-10 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur"
          >
            <MapPin size={14} /> Pour PME locales et commerces de proximité
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Donnez à votre entreprise une image moderne et professionnelle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Opla conçoit des sites web élégants et optimise votre référencement local pour que vos clients vous trouvent là où ils sont: sur Google, Maps et les réseaux.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm transition-colors hover:bg-slate-800"
            >
              Demander un devis <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-800 shadow-sm hover:bg-slate-50"
            >
              Voir nos services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 grid grid-cols-2 gap-6 text-sm text-slate-600"
          >
            <div>
              <p className="font-semibold text-slate-900">+40%</p>
              <p>de visibilité locale moyenne</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">2-3 semaines</p>
              <p>pour livrer votre nouveau site</p>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] w-full md:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl border border-slate-200 bg-white/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)] overflow-hidden">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
