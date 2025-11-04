import { motion } from 'framer-motion';
import { Globe, Search, MapPin, Rocket } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Sites web modernes',
    desc: "Design premium, rapide et responsive. Une vitrine qui inspire confiance et convertit.",
  },
  {
    icon: Search,
    title: 'Référencement local',
    desc: 'Optimisation Google Business Profile, avis, mots-clés locaux et backlinks de proximité.',
  },
  {
    icon: MapPin,
    title: 'Présence cartographique',
    desc: 'Apparaissez sur Google Maps et annuaires locaux avec des fiches parfaitement remplies.',
  },
  {
    icon: Rocket,
    title: 'Lancement express',
    desc: 'Process clair, contenu guidé et mise en ligne en 2 à 3 semaines selon votre besoin.',
  },
];

export default function Features() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Tout ce qu'il faut pour paraître pro et être trouvé
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-slate-600"
          >
            Nous créons une présence complète: site, SEO local et optimisation des profils.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 text-violet-600">
                <f.icon />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
