export function MarqueeStrip() {
  const items = [
    "Семейная терапия",
    "Личная консультация",
    "Работа с тревогой",
    "Детско-родительские отношения",
    "Кризисная помощь",
    "Медиация конфликтов",
    "Психосоматика",
    "Профессиональное выгорание",
    "Самореализация",
    "Судебная экспертиза",
  ]

  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="py-5 bg-[var(--sage)] overflow-hidden select-none">
      <div className="flex gap-0 w-max animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6 whitespace-nowrap">
            <span className="text-[var(--primary-foreground)]/90 text-sm font-medium tracking-wide uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-foreground)]/40 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
