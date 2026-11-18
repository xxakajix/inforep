import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="border-t border-black/15 pt-5">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div className="max-w-3xl">
            <span className="label text-primary">{eyebrow}</span>
            <h2 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          {description ? (
            <p className="max-w-xs text-sm leading-relaxed text-black/55 md:text-right">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  )
}
