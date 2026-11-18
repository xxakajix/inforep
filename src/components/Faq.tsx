import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { faq } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Вопросы"
          title="Коротко о главном"
          description="Если вашего вопроса тут нет — напишите в Telegram, отвечу лично."
        />

        <div className="mt-10 max-w-3xl">
          {faq.map((item, index) => {
            const expanded = open === index
            const panelId = `faq-panel-${index}`

            return (
              <Reveal key={item.q} delay={Math.min(index * 0.04, 0.2)}>
                <div className="border-t border-black/10 last:border-b">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : index)}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-black sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          expanded
                            ? 'rotate-45 border-primary bg-primary text-white'
                            : 'border-black/15 text-black/50'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {expanded ? (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-8 text-sm leading-relaxed text-black/60 sm:pr-12">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
