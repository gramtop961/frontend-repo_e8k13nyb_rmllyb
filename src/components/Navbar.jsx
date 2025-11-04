import { useState } from 'react';
import { Rocket, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-xl font-semibold tracking-tight">Opla</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-slate-900 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors">
              <Phone size={18} /> Devis gratuit
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700">
              <a href="#services" className="rounded-md px-3 py-2 hover:bg-slate-100">Services</a>
              <a href="#portfolio" className="rounded-md px-3 py-2 hover:bg-slate-100">Portfolio</a>
              <a href="#contact" className="rounded-md px-3 py-2 hover:bg-slate-100">Contact</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-white w-fit">
                <Phone size={18} /> Devis gratuit
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
