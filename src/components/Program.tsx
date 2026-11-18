import { program } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Program() {
  return (
    <section id="program" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Программа · 7 блоков"
          title="От синтаксиса до 27 задачи"
          description="Семь блоков, которые закрывают весь кодификатор. Двигаемся по порядку, но темп и глубину подстраиваем под вас."
        />

        <ol className="mt-10">
          {program.map((block, index) => (
            <li key={block.title}>
              <Reveal delay={Math.min(index * 0.04, 0.24)}>
                <div className="group grid grid-cols-[auto_1fr] items-start gap-4 border-t border-black/10 py-5 transition-colors hover:bg-primary/[0.03] sm:gap-8 md:grid-cols-[90px_1fr_auto] md:items-center md:py-6">
                  <span className="text-3xl font-semibold leading-none tracking-[-0.03em] text-black/15 transition-colors group-hover:text-primary sm:text-4xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="text-base font-semibold leading-snug text-black sm:text-lg">
                      {block.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-black/55">
                      {block.desc}
                    </p>
                  </div>

                  <span className="label col-start-2 w-fit rounded-full border border-black/15 px-2.5 py-1 text-black/50 md:col-start-3 md:justify-self-end">
                    {block.exam}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="border-t border-black/10" />
      </div>
    </section>
  )
}
