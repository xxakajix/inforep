const items = [
  'ЕГЭ',
  'ОГЭ',
  'ВПР',
  'Python',
  'Алгоритмы',
  'Теория игр',
  'Задача 27',
  'Разбор вариантов',
  'Системы счисления',
  'Пробные экзамены',
]

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-8 pr-8"
      aria-hidden={hidden ? 'true' : undefined}
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-8 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-black/40"
        >
          {item}
          <span className="size-1 rounded-full bg-primary" />
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-black/10 bg-white py-4">
      <div className="marquee-track flex w-max">
        <Group />
        <Group hidden />
      </div>
    </div>
  )
}
