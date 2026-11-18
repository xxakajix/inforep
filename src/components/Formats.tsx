import { Flame, Monitor, Users } from 'lucide-react'
import { formats } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const icons = {
  monitor: Monitor,
  users: Users,
  flame: Flame,
}

export function Formats() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Формат"
          title="Как проходят занятия"
          description="Все занятия идут онлайн и длятся 60 минут. Запись и конспект остаются у вас."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {formats.map((format, index) => {
            const Icon = icons[format.icon as keyof typeof icons]

            return (
              <Reveal
                key={format.title}
                delay={index * 0.08}
                className="group rounded-2xl border border-black/12 p-6 transition hover:border-primary/40"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-primary/8 text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="label text-black/35">{format.meta}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{format.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/55">
                  {format.desc}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
