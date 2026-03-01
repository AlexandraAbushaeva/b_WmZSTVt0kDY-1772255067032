"use client"

import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    q: "С чего начать, если я никогда не был у психолога?",
    a: "Начните с первичной консультации — она ни к чему не обязывает. Мы просто поговорим о том, что вас беспокоит, и я расскажу, чем могу помочь. Многие клиенты после первой встречи говорят: «Я не ожидал, что будет так легко». Главное — сделать первый звонок или написать сообщение.",
  },
  {
    q: "Как долго длится терапия?",
    a: "Это очень индивидуально. Разовые консультации по конкретному вопросу — уже после 1–3 сессий вы получаете ясность. Работа с глубинными паттернами, отношениями или травмой может занять несколько месяцев. Я не буду затягивать процесс. Наша цель — ваша самостоятельность.",
  },
  {
    q: "Можно ли работать онлайн? Это эффективно?",
    a: "Да, онлайн-формат работает так же эффективно, как очный — это подтверждено многочисленными исследованиями. Я работаю через Zoom. Всё, что вам нужно — тихое место и 60 минут времени.",
  },
  {
    q: "Вся ли информация остаётся конфиденциальной?",
    a: "Абсолютно. Всё, что вы говорите на сессии, остаётся только между нами. Это этический и профессиональный стандарт психолога. Исключение — только угроза жизни (это законодательное требование, встречается крайне редко).",
  },
  {
    q: "Как понять, что мне нужен именно психолог, а не психиатр?",
    a: "Психолог работает без медикаментов: через разговор, осознание и инструменты. Если у вас жизненные трудности, отношения, тревога, стресс, выгорание — вам ко мне. Если есть выраженные психические симптомы, я помогу правильно сориентироваться и при необходимости направлю к психиатру.",
  },
  {
    q: "Что если мне неудобно говорить о чём-то личном?",
    a: "Это совершенно нормально, и я к этому готова. Никогда не давлю и не требую рассказывать больше, чем вы готовы. Темп задаёте вы. Безопасное пространство — это не просто слова, это то, что я создаю на каждой сессии.",
  },
  {
    q: "Как записаться на консультацию?",
    a: "Заполните форму на этой странице, напишите в Telegram или позвоните. Я отвечу в течение нескольких часов и предложу удобное время. Первичная консультация обычно доступна в течение 2–3 дней.",
  },
]

export function FAQ() {
  const [visible, setVisible] = useState(false)
  const [openIdx, setOpenIdx] = useState<number | null>(0)
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
    <section id="faq" ref={ref} className="py-24 lg:py-32 bg-[var(--cream)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[var(--sage)] text-sm font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2
            className="font-serif text-4xl lg:text-5xl font-light mt-3 text-[var(--warm-brown)] text-balance"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Частые
            <br />
            <span className="font-semibold italic text-[var(--sage)]">вопросы</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${
                openIdx === i
                  ? "border-[var(--sage)]/40 shadow-sm"
                  : "border-[var(--border)]"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className={`w-full text-left flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-200 ${
                  openIdx === i
                    ? "bg-[var(--sage-light)]/30 text-[var(--sage-dark)]"
                    : "bg-white hover:bg-[var(--cream)] text-foreground"
                }`}
              >
                <span className="font-medium text-base">{faq.q}</span>
                <span
                  className={`text-xl font-light flex-shrink-0 transition-transform duration-300 ${
                    openIdx === i ? "rotate-45 text-[var(--sage)]" : "text-muted-foreground"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openIdx === i ? "max-h-64" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 bg-white">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still questions CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-muted-foreground mb-4">Остались вопросы? Напишите мне напрямую.</p>
          <a
            href="https://t.me/Natalia_Ul23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--sage)] text-[var(--sage)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--sage)] hover:text-white transition-all duration-300"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
