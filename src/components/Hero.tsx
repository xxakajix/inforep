import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { stats } from '../data'

const words = ['ЕГЭ', 'ОГЭ', 'ВПР']

const heroStats = stats.slice(0, 3).map((stat, index) => ({
  value: stat.value,
  label: ['Учеников\nсдали', 'Средний\nбалл', 'Лет\nпрактики'][index],
}))

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.12, duration: 0.6, ease },
  }),
}

export function Hero() {
  const reduced = useReducedMotion() ?? false

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#e8e5df]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="pointer-events-none absolute inset-0 bg-white/20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/85 via-white/45 to-transparent sm:w-3/4 md:w-1/2"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/70 via-white/25 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/55 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-screen flex-col pt-16 md:pt-20">
        <h1 className="sr-only">
          Подготовка к ЕГЭ, ОГЭ и ВПР по информатике — репетитор онлайн
        </h1>

        <div className="flex flex-1 items-center justify-end px-5 py-8 sm:px-8 md:px-12 md:py-0">
          <div className="flex items-start gap-5 sm:gap-8 md:gap-10">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-right"
                variants={fadeUp}
                custom={index + 2}
                initial={reduced ? false : 'hidden'}
                animate="show"
              >
                <p
                  className="font-semibold leading-none tracking-[-0.03em] text-black"
                  style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
                >
                  <span
                    className="align-top text-primary"
                    style={{ fontSize: '0.5em' }}
                  >
                    +
                  </span>
                  {stat.value}
                </p>
                <p className="mt-2 whitespace-pre-line text-[10px] font-semibold uppercase leading-tight tracking-widest text-black sm:text-xs md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 px-5 pb-8 sm:px-8 md:gap-12 md:px-12 md:pb-12">
          <div className="flex items-center justify-between gap-4">
            <motion.p
              className="max-w-[130px] text-[10px] font-semibold uppercase leading-tight tracking-widest text-black sm:max-w-[160px] sm:text-xs md:max-w-xs md:text-sm"
              variants={fadeUp}
              custom={5}
              initial={reduced ? false : 'hidden'}
              animate="show"
            >
              Репетитор
              <br />
              по информатике
              <br />
              онлайн
            </motion.p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-base font-semibold uppercase tracking-widest text-primary transition hover:opacity-70 sm:text-xl md:text-2xl"
              variants={fadeUp}
              custom={6}
              initial={reduced ? false : 'hidden'}
              animate="show"
            >
              Записаться
              <ArrowUpRight
                aria-hidden="true"
                className="size-[18px] sm:size-[22px]"
              />
            </motion.a>
          </div>

          <div className="flex items-end justify-between gap-3 sm:gap-4">
            <motion.p
              className="w-[120px] shrink-0 text-left text-[10px] font-semibold uppercase leading-relaxed tracking-wide text-black/75 sm:w-[180px] sm:text-xs md:w-[280px] md:text-right md:text-sm"
              variants={fadeUp}
              custom={7}
              initial={reduced ? false : 'hidden'}
              animate="show"
            >
              Готовлю к ЕГЭ, ОГЭ и ВПР по информатике — от Python и логики до 27
              задачи. Индивидуально, от 950 ₽ за час.
            </motion.p>

            <div className="text-right">
              {words.map((word, index) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="block font-semibold uppercase leading-[0.88] tracking-[-0.02em] text-black"
                    style={{ fontSize: 'clamp(2rem, 9vw, 9rem)' }}
                    initial={reduced ? false : { y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.14,
                      duration: 0.7,
                      ease,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
