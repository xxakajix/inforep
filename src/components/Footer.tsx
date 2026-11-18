import { Send } from 'lucide-react'

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Экзамены',
    links: [
      { label: 'ЕГЭ по информатике', href: '#services' },
      { label: 'ОГЭ по информатике', href: '#services' },
      { label: 'ВПР', href: '#services' },
      { label: '9 класс', href: '#services' },
    ],
  },
  {
    title: 'Занятия',
    links: [
      { label: 'Программа', href: '#program' },
      { label: 'Отзывы', href: '#reviews' },
      { label: 'Стоимость', href: '#pricing' },
      { label: 'Вопросы', href: '#faq' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'Telegram', href: 'https://t.me/inforep' },
      { label: 'WhatsApp', href: 'https://wa.me/79000000000' },
      { label: 'hello@inforep.ru', href: 'mailto:hello@inforep.ru' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white px-5 pb-8 pt-14 sm:px-8 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-full border-2 border-primary">
                <span className="size-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                Инфореп
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-black/50">
              Подготовка к ЕГЭ, ОГЭ и ВПР по информатике. Онлайн, индивидуально,
              с планом и результатом.
            </p>
            <a
              href="https://t.me/inforep"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black transition hover:border-primary hover:text-primary"
            >
              <Send size={14} aria-hidden="true" />
              Написать в Telegram
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="label text-black/35">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-black/55 transition hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-black/35">
            © {year} Инфореп. Все права защищены.
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-black/35">
            Онлайн по всей России · от 950 ₽ за час
          </p>
        </div>
      </div>
    </footer>
  )
}
