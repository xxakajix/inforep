import { Check } from 'lucide-react'
import { plans } from '../data'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Стоимость"
          title="От 950 ₽ за час"
          description="Без скрытых платежей и оплаты «за материалы». Первый пробный урок — бесплатно."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:items-stretch">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-7 ${
                  plan.featured
                    ? 'bg-primary text-white'
                    : 'border border-black/12 bg-white'
                }`}
              >
                {plan.featured ? (
                  <span className="label absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-primary shadow-sm">
                    Выгодно
                  </span>
                ) : null}

                <p
                  className={`label ${
                    plan.featured ? 'text-white/70' : 'text-black/45'
                  }`}
                >
                  {plan.name}
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-1 text-[10px] font-semibold uppercase tracking-widest ${
                      plan.featured ? 'text-white/60' : 'text-black/40'
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    plan.featured ? 'text-white/75' : 'text-black/55'
                  }`}
                >
                  {plan.desc}
                </p>

                <ul
                  className={`mt-6 space-y-2.5 border-t pt-5 ${
                    plan.featured ? 'border-white/20' : 'border-black/10'
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${
                        plan.featured ? 'text-white/85' : 'text-black/70'
                      }`}
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.featured ? 'text-white' : 'text-primary'
                        }`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-widest transition ${
                    plan.featured
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'border border-black/15 text-black hover:border-primary hover:text-primary'
                  }`}
                >
                  Выбрать
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
