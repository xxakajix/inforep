import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services, type ExamTag } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const filters: Array<'Все' | ExamTag> = ['Все', 'ЕГЭ', 'ОГЭ', 'ВПР']

export function Services() {
  const [filter, setFilter] = useState<'Все' | ExamTag>('Все')

  const visible = useMemo(
    () =>
      services.filter(
        (service) =>
          filter === 'Все' ||
          service.exam === filter ||
          service.exam === 'Все',
      ),
    [filter],
  )

  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Услуги · 11 направлений"
          title="Репетитор по информатике под вашу цель"
          description="ЕГЭ, ОГЭ, ВПР и школьная программа. Выберите направление — программа занятия подстроится под уровень и сроки."
        />

        <Reveal className="mt-10 flex flex-wrap gap-2">
          {filters.map((item) => {
            const active = filter === item
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition ${
                  active
                    ? 'bg-primary text-white'
                    : 'border border-black/15 text-black/70 hover:border-black/40 hover:text-black'
                }`}
              >
                {item}
              </button>
            )
          })}
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((service, index) => (
            <motion.article
              key={service.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              className="group flex flex-col rounded-2xl border border-black/12 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_70px_-50px_rgba(94,14,215,0.6)]"
            >
              <div className="flex items-center justify-between">
                <span className="label text-primary">{service.exam}</span>
                <span className="label text-black/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-snug text-black">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/55">
                {service.desc}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  от 950 ₽ / час
                </p>
                <a
                  href="#contact"
                  className="grid size-9 place-items-center rounded-full border border-black/15 text-black/60 transition group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                  aria-label={`Записаться: ${service.title}`}
                >
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}

          <Reveal
            delay={0.1}
            className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-dashed border-black/20 p-6"
          >
            <div>
              <span className="label text-primary">Не нашли свой класс?</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug">
                Соберём программу под задачу
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/55">
                Олимпиады, проекты, пересдача или просто «подтянуть школу» —
                напишите, обсудим.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary transition hover:gap-3"
            >
              Обсудить задачу
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
