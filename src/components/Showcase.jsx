import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Boulangerie Le Pain Doré',
    tag: 'Site vitrine · SEO local',
    hue: 'from-amber-400 via-orange-500 to-rose-500',
  },
  {
    title: 'Cabinet Dentaire Valvert',
    tag: 'Prise de RDV · Maps',
    hue: 'from-sky-400 via-cyan-500 to-teal-500',
  },
  {
    title: 'Atelier du Coin',
    tag: 'Portfolio · Google Business Profile',
    hue: 'from-violet-400 via-fuchsia-500 to-pink-500',
  },
  {
    title: 'Coach Sportive Anaïs',
    tag: 'Landing · Collecte leads',
    hue: 'from-lime-400 via-emerald-500 to-teal-500',
  },
  {
    title: 'Fleuriste Marguerite',
    tag: 'E-commerce léger · Instagram Shop',
    hue: 'from-rose-400 via-pink-500 to-fuchsia-500',
  },
  {
    title: 'Plombier Express',
    tag: 'Pages locales · Avis clients',
    hue: 'from-indigo-400 via-blue-500 to-sky-500',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.06 } }),
};

export default function Showcase() {
  return (
    <section id="portfolio" className="relative">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-300/30 via-violet-300/25 to-sky-300/25 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sky-300/25 via-cyan-300/20 to-emerald-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur"
          >
            <Sparkles size={14} /> Réalisations sélectionnées
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Du local, mais avec un rendu premium
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600"
          >
            Une sélection de sites rapides, élégants et optimisés pour Google & Maps.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition will-change-transform"
            >
              {/* Card visual */}
              <div className="relative h-56 w-full sm:h-56">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.hue} opacity-90`} />
                {/* abstract shapes */}
                <div className="absolute left-[-20%] top-[-20%] h-40 w-40 rounded-full bg-white/15 blur-2xl" />
                <div className="absolute right-[-10%] bottom-[-10%] h-48 w-48 rounded-full bg-black/10 blur-2xl" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.25),_rgba(255,255,255,0))]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_40%)]" />
              </div>

              {/* Overlay content */}
              <div className="relative z-10 p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.tag}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-slate-900/80">
                  <span className="text-sm font-medium">Voir le projet</span>
                  <ExternalLink size={16} />
                </div>
              </div>

              {/* Hover motion */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/50" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Marquee logos */}
        <div className="mt-14 overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
            <div className="flex gap-10 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="text-slate-500">•</span>
              ))}
              {['Nova Print', 'BioMarket', 'Le Déménageur', 'Café Louna', 'Clinique Vet', 'FixIt Auto'].map((name) => (
                <div key={name} className="mx-6 inline-flex items-center gap-3 text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-slate-200" />
                  <span className="text-sm font-medium tracking-wide">{name}</span>
                </div>
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={`tail-${i}`} className="text-slate-500">•</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* marquee keyframes */}
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
