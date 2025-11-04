export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-slate-900">Opla</p>
            <p className="mt-1 text-sm text-slate-600">Agence web pour PME locales — sites modernes & SEO local</p>
          </div>
          <div className="text-sm text-slate-600">
            <p>Besoin d'un site qui convertit ? Écrivons-nous: contact@opla.agency</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Opla. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
