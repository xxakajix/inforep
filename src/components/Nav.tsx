import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'

const links = [
  { href: '#services', label: 'Услуги' },
  { href: '#program', label: 'Программа' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#pricing', label: 'Стоимость' },
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="ИНФОРЕП — на главную">
      <span className="grid size-8 place-items-center rounded-full border-2 border-primary">
        <span className="size-2.5 rounded-full bg-primary" />
      </span>
      <span
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${
          light ? 'text-white' : 'text-black'
        }`}
      >
        Инфореп
      </span>
    </a>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? 'border-b border-black/10 bg-white/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-6 px-5 sm:px-8 md:h-20 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo />
          </motion.div>

          <nav
            className="hidden items-center gap-8 md:flex lg:gap-12"
            aria-label="Основная навигация"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index + 1) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-sm font-semibold uppercase tracking-widest text-black transition-colors hover:text-primary"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:brightness-110 lg:inline-flex"
            >
              Пробный урок
            </motion.a>
            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid size-9 place-items-center rounded-full bg-black text-white transition hover:bg-black/80"
              aria-label="Открыть меню"
              aria-expanded={open}
            >
              <span className="flex w-4 flex-col gap-1">
                <span className="h-0.5 w-4 bg-white" />
                <span className="h-0.5 w-4 bg-white" />
                <span className="h-0.5 w-4 bg-white" />
              </span>
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-white px-5 pb-8 pt-5 sm:px-8 md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Меню"
          >
            <div className="flex h-11 items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-9 place-items-center rounded-full bg-black text-white transition hover:bg-black/80"
                aria-label="Закрыть меню"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-8" aria-label="Мобильная навигация">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold uppercase tracking-widest text-black transition-colors hover:text-primary"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index + 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-3xl font-semibold uppercase tracking-widest text-black transition-colors hover:text-primary"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.21 }}
              >
                Контакты
              </motion.a>
            </nav>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center gap-2 text-xl font-semibold uppercase tracking-widest text-primary"
            >
              Записаться на пробный
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
