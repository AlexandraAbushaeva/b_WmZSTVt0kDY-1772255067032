"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Анна М.",
    role: "Клиент, семейная терапия",
    initials: "АМ",
    color: "bg-[var(--sage-light)] text-[var(--sage-dark)]",
    quote:
      "К Наталье пришли с мужем в очень тяжёлый период. Казалось, всё разваливается. После нескольких сессий начали слышать друг друга. Не волшебство, но настоящая работа. Спасибо за безопасное пространство.",
    stars: 5,
  },
  {
    name: "Дмитрий К.",
    role: "Клиент, индивидуальная терапия",
    initials: "ДК",
    color: "bg-[oklch(0.93_0.04_50)] text-[var(--warm-brown)]",
    quote:
      "Обратился с выгоранием, думал, просто устал. Оказалось, всё глубже. Наталья помогла разобраться в причинах и найти новые точки опоры. Теперь снова есть энергия и смысл. Рекомендую без оговорок.",
    stars: 5,
  },
  {
    name: "Ольга Р.",
    role: "Клиент, работа с тревогой",
    initials: "ОР",
    color: "bg-[oklch(0.92_0.03_155)] text-[var(--sage-dark)]",
    quote:
      "Панические атаки преследовали меня почти год. С Натальей за 2 месяца стало значительно легче. Она объясняет доступно, не осуждает и всегда на стороне клиента. Очень благодарна.",
    stars: 5,
  },
  {
    name: "Марина В.",
    role: "Мама ребёнка-подростка",
    initials: "МВ",
    color: "bg-[oklch(0.94_0.02_260)] text-[oklch(0.3_0.05_260)]",
    quote:
      "Обратилась по поводу конфликтов с дочерью-подростком. Наталья дала мне инструменты и новый взгляд. Отношения с дочерью стали мягче и доверительнее. Очень профессиональный подход.",
    stars: 5,
  },
  {
    name: "Сергей Н.",
    role: "Клиент, медиация",
    initials: "СН",
    color: "bg-[var(--secondary)] text-[var(--warm-brown)]",
    quote:
      "Участвовал в медиации при разводе. Наталья сохраняла нейтралитет и помогла нам договориться без судов. Ребёнок остался в стороне от конфликта. Это именно то, чего я хотел.",
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} звёзд из 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[var(--terracotta)] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section id="testimonials" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[var(--sage)] text-sm font-semibold uppercase tracking-widest">
            Отзывы
          </span>
          <h2
            className="font-serif text-4xl lg:text-5xl font-light mt-3 text-[var(--warm-brown)] text-balance"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Что говорят
            <br />
            <span className="font-semibold italic text-[var(--sage)]">клиенты</span>
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Имена изменены с согласия клиентов для соблюдения конфиденциальности
          </p>
        </div>

        {/* Featured testimonial */}
        <div
          className={`mb-8 p-8 lg:p-12 rounded-3xl bg-[var(--cream)] border border-[var(--border)] transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold ${testimonials[active].color}`}
              >
                {testimonials[active].initials}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <StarRating count={testimonials[active].stars} />
              <blockquote className="font-serif text-xl lg:text-2xl font-light text-[var(--warm-brown)] leading-relaxed italic" style={{ fontFamily: "var(--font-serif)" }}>
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-foreground text-sm">{testimonials[active].name}</div>
                <div className="text-xs text-muted-foreground">{testimonials[active].role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots + small cards */}
        <div className="grid md:grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => {
                setActive(i)
                if (intervalRef.current) clearInterval(intervalRef.current)
              }}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                active === i
                  ? "border-[var(--sage)] bg-[var(--sage-light)]/40 shadow-sm"
                  : "border-[var(--border)] bg-[var(--cream)] hover:border-[var(--sage)]/40"
              }`}
            >
              <div className={`w-8 h-8 rounded-xl text-xs font-bold flex items-center justify-center mb-2 ${t.color}`}>
                {t.initials}
              </div>
              <div className="text-xs font-semibold text-foreground">{t.name}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{t.role}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
