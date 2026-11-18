import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Check, ChevronDown, Mail, MessageCircle, Send } from 'lucide-react'
import { Reveal } from './Reveal'

type FormState = {
  name: string
  exam: string
  contact: string
}

const emptyForm: FormState = { name: '', exam: '', contact: '' }

const contacts = [
  {
    icon: Send,
    label: 'Telegram',
    value: '@inforep',
    href: 'https://t.me/inforep',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+7 900 000-00-00',
    href: 'https://wa.me/79000000000',
  },
  {
    icon: Mail,
    label: 'Почта',
    value: 'hello@inforep.ru',
    href: 'mailto:hello@inforep.ru',
  },
]

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: Partial<FormState> = {}
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Укажите имя — хотя бы 2 символа'
    }
    if (!form.exam) {
      nextErrors.exam = 'Выберите экзамен или класс'
    }
    if (form.contact.trim().length < 5) {
      nextErrors.contact = 'Оставьте телефон или ник в Telegram'
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSent(true)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-black/10 bg-[#f7f5f1] px-5 py-20 sm:px-8 sm:py-28 md:px-12"
    >
      <div className="mx-auto grid max-w-[1440px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="label text-primary">Запись</span>
          <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Первый пробный урок — <span className="text-primary">бесплатно</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-black/60">
            Познакомимся, разберём одну задачу и составим план. Без обязательств и
            оплаты — просто посмотрим, подходим ли мы друг другу.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              'Диагностика уровня за 30 минут',
              'План подготовки в первый день',
              'Запись занятия остаётся у вас',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-black/75"
              >
                <span className="grid size-6 place-items-center rounded-full bg-primary text-white">
                  <Check size={13} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {contacts.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2.5 text-sm text-black/75 transition hover:border-primary hover:text-primary"
                >
                  <Icon size={15} className="text-primary" aria-hidden="true" />
                  {item.value}
                </a>
              )
            })}
          </div>

          <p className="mt-5 text-xs text-black/40">
            Отвечаю в течение дня, обычно быстрее.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_40px_90px_-60px_rgba(0,0,0,0.35)] sm:p-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-[340px] flex-col items-center justify-center text-center"
                role="status"
              >
                <span className="grid size-14 place-items-center rounded-full bg-primary text-white">
                  <Check size={26} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold uppercase tracking-wide">
                  Заявка отправлена
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-black/55">
                  Свяжусь с вами в течение дня и предложу время для пробного
                  урока.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(emptyForm)
                    setSent(false)
                  }}
                  className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary hover:opacity-70"
                >
                  Отправить ещё одну
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p className="text-lg font-semibold uppercase tracking-wide">
                  Записаться на урок
                </p>
                <p className="mt-1 text-sm text-black/45">Займёт меньше минуты.</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="label mb-1.5 block text-black/50">
                      Имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={(event) => update('name', event.target.value)}
                      placeholder="Как к вам обращаться"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-primary focus:outline-none"
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-1.5 text-xs text-red-600">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="exam" className="label mb-1.5 block text-black/50">
                      Экзамен или класс
                    </label>
                    <div className="relative">
                      <select
                        id="exam"
                        name="exam"
                        value={form.exam}
                        onChange={(event) => update('exam', event.target.value)}
                        aria-invalid={Boolean(errors.exam)}
                        aria-describedby={errors.exam ? 'exam-error' : undefined}
                        className="w-full appearance-none rounded-xl border border-black/15 bg-white px-4 py-3 pr-10 text-sm text-black focus:border-primary focus:outline-none"
                      >
                        <option value="">Выберите вариант</option>
                        <option value="ЕГЭ">ЕГЭ по информатике</option>
                        <option value="ОГЭ">ОГЭ по информатике</option>
                        <option value="ВПР">ВПР по информатике</option>
                        <option value="9 класс">9 класс, школьная программа</option>
                        <option value="10-11 класс">10–11 класс</option>
                        <option value="other">Другое</option>
                      </select>
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40"
                      />
                    </div>
                    {errors.exam ? (
                      <p id="exam-error" className="mt-1.5 text-xs text-red-600">
                        {errors.exam}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="contact-info" className="label mb-1.5 block text-black/50">
                      Телефон или Telegram
                    </label>
                    <input
                      id="contact-info"
                      name="contact"
                      value={form.contact}
                      onChange={(event) => update('contact', event.target.value)}
                      placeholder="+7 ... или @nickname"
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={errors.contact ? 'contact-error' : undefined}
                      className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 focus:border-primary focus:outline-none"
                    />
                    {errors.contact ? (
                      <p id="contact-error" className="mt-1.5 text-xs text-red-600">
                        {errors.contact}
                      </p>
                    ) : null}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:brightness-110"
                >
                  Записаться на пробный
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="mt-3 text-center text-[11px] leading-relaxed text-black/35">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
