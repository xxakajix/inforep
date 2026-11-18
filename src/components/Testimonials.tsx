import { Star } from 'lucide-react'
import { testimonials } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Отзывы · 4.9 из 5"
          title="Результаты, а не обещания"
          description="Ниже несколько историй учеников за последний год — с баллами и тем, что реально помогло."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.08}
              className="flex flex-col rounded-2xl border border-black/12 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5" role="img" aria-label="Оценка 5 из 5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={14}
                      className="fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="label text-primary">{item.result}</span>
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-black/70">
                «{item.text}»
              </blockquote>

              <footer className="mt-6 flex items-center gap-3 border-t border-black/10 pt-4">
                <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-black">{item.name}</p>
                  <p className="text-xs text-black/45">{item.meta}</p>
                </div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
