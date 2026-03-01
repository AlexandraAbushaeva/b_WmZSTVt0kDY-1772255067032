"use client"

import { useEffect, useRef, useState } from "react"

const services = [
  {
    number: "01",
    title: "Индивидуальная терапия",
    short: "Личная консультация",
    desc: "Глубокая индивидуальная работа с вашей уникальной историей. Разбираемся в причинах тревоги, страхов, внутренних конфликтов и находим пути к изменениям. Первый шаг — всегда самый важный.",
    tags: ["Тревога и страхи", "Самооценка", "Выгорание", "Личностный рост"],
    price: "от 3 500 ₽",
    duration: "60 мин",
    color: "bg-[var(--sage-light)]",
    accent: "var(--sage)",
  },
  {
    number: "02",
    title: "Семейная терапия",
    short: "Для пары или семьи",
    desc: "Помогаю парам и семьям восстановить доверие, наладить общение и выйти из кризиса. Работаем с конфликтами, недопониманием, кризисами доверия. Вместе находим точки опоры и роста.",
    tags: ["Конфликты в паре", "Кризис отношений", "Коммуникация", "Развод"],
    price: "от 3 500 ₽",
    duration: "60–90 мин",
    color: "bg-[oklch(0.95_0.03_50)]",
    accent: "var(--terracotta)",
  },
  {
    number: "03",
    title: "Детско-родительская терапия",
    short: "Родители + дети",
    desc: "Поддерживаю родителей в сложных ситуациях: проблемы поведения, школьные трудности, подростковые кризисы. Работаю как с родителями отдельно, так и совместно с детьми.",
    tags: ["Поведение детей", "Подростки", "Школьные трудности", "Семейные границы"],
    price: "от 3 500 ₽",
    duration: "60 мин",
    color: "bg-[oklch(0.94_0.025_155)]",
    accent: "var(--sage-dark)",
  },
  {
    number: "04",
    title: "Кризисная помощь",
    short: "Экстренная поддержка",
    desc: "Острые кризисные состояния, потеря, утрата, резкие жизненные перемены. Я рядом в самые трудные моменты — профессионально и с полным вниманием к вашей ситуации.",
    tags: ["Потеря близких", "Острый стресс", "Тяжёлые решения", "Кризис смысла"],
    price: "от 3 500 ₽",
    duration: "60 мин",
    color: "bg-[oklch(0.96_0.015_260)]",
    accent: "#7B91C4",
  },
  {
    number: "05",
    title: "Медиация",
    short: "Разрешение конфликтов",
    desc: "Помогаю урегулировать семейные, родительские и иные конфликты через нейтральный диалог. Медиация — это путь к договорённости без суда, с уважением к интересам каждой стороны.",
    tags: ["Семейные споры", "Раздел имущества", "Родительские права", "Наследство"],
    price: "от 4 000 ₽",
    duration: "90 мин",
    color: "bg-[oklch(0.95_0.02_75)]",
    accent: "var(--warm-brown)",
  },
  {
    number: "06",
    title: "Судебная экспертиза",
    short: "Экспертная деятельность",
    desc: "Профессиональная психолого-педагогическая экспертиза и письменная оценка психологического состояния для судебных и административных нужд. Строго, компетентно, в срок.",
    tags: ["Экспертное заключение", "Оценка состояния", "Суд", "Официальный документ"],
    price: "По запросу",
    duration: "Индивидуально",
    color: "bg-[var(--secondary)]",
    accent: "var(--foreground)",
  },
]

export function Services() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-[var(--sage)] text-sm font-semibold uppercase tracking-widest">
                Услуги
              </span>
              <h2
                className="font-serif text-4xl lg:text-5xl font-light mt-3 text-[var(--warm-brown)] text-balance"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Форматы
                <br />
                <span className="font-semibold italic text-[var(--sage)]">нашей работы</span>
              </h2>
            </div>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed lg:text-right">
              Выберите подходящий формат или напишите мне, и мы вместе определим, что нужно именно вам.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.number}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex flex-col p-6 lg:p-7 rounded-3xl border border-[var(--border)] cursor-pointer transition-all duration-500 ${service.color} ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hovered === i ? "shadow-xl scale-[1.02] border-transparent" : "hover:shadow-md"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number */}
              <div
                className="font-serif text-4xl font-light mb-4 opacity-30"
                style={{ fontFamily: "var(--font-serif)", color: service.accent }}
              >
                {service.number}
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {service.short}
                </span>
                <h3
                  className="font-serif text-xl font-semibold text-[var(--warm-brown)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/70 text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price & duration */}
              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <div>
                  <div className="text-xs text-muted-foreground">Стоимость</div>
                  <div className="font-semibold text-sm" style={{ color: service.accent }}>
                    {service.price}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Длительность</div>
                  <div className="text-sm font-medium text-foreground">{service.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-muted-foreground mb-6">
            Не уверены, какой формат подходит вам? Напишите мне — вместе разберёмся.
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[var(--sage)] text-[var(--primary-foreground)] px-10 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Записаться на консультацию
          </button>
        </div>
      </div>
    </section>
  )
}
