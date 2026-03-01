"use client"

import { useEffect, useRef, useState } from "react"

const problems = [
  {
    title: "Тревога и страхи",
    desc: "Постоянное беспокойство, панические атаки, навязчивые мысли — всё это поддаётся работе. Вы можете снова чувствовать почву под ногами.",
    icon: "◎",
  },
  {
    title: "Конфликты и отношения",
    desc: "Недопонимание с партнёром, ссоры, ощущение стены между вами — мы разберёмся, что происходит, и найдём выход вместе.",
    icon: "◈",
  },
  {
    title: "Кризис в семье",
    desc: "Измена, развод, потеря близкого, переезд — любой кризис можно пережить с меньшими потерями, если рядом есть профессиональная поддержка.",
    icon: "◇",
  },
  {
    title: "Трудности в воспитании",
    desc: "Ребёнок не слушается, конфликтует в школе или замкнулся — я помогаю родителям понять своего ребёнка и выстроить здоровый контакт.",
    icon: "○",
  },
  {
    title: "Профессиональное выгорание",
    desc: "Когда работа перестала приносить радость, а сил ни на что не хватает — это сигнал. Вместе найдём причину и восстановим ресурс.",
    icon: "◻",
  },
  {
    title: "Самореализация",
    desc: "Ощущение, что живёте не своей жизнью? Помогаю найти смысл, расставить приоритеты и двигаться к тому, что действительно важно.",
    icon: "◈",
  },
  {
    title: "Конфликты на работе",
    desc: "Напряжение с коллегами, конфликт с руководством, токсичная среда — разберёмся, как защитить себя и сохранить работоспособность.",
    icon: "◎",
  },
  {
    title: "Проблемы со здоровьем",
    desc: "Психосоматика — когда тело говорит то, что душа замалчивает. Работаем с глубинными причинами, а не только симптомами.",
    icon: "◇",
  },
]

export function Problems() {
  const [visible, setVisible] = useState(false)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
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
    <section
      id="problems"
      ref={ref}
      className="py-24 lg:py-32 bg-[var(--sage-dark)] text-[var(--primary-foreground)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-[var(--sage-light)] text-sm font-semibold uppercase tracking-widest">
                С чем я работаю
              </span>
              <h2
                className="font-serif text-4xl lg:text-5xl font-light mt-3 text-[var(--primary-foreground)] text-balance"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Узнаёте
                <br />
                <span className="font-semibold italic text-[var(--sage-light)]">себя здесь?</span>
              </h2>
            </div>
            <p className="text-base text-[var(--primary-foreground)]/70 max-w-md leading-relaxed lg:text-right">
              Если хотя бы один из пунктов отзывается, значит, мы можем работать вместе.
              Нет ничего «слишком маленького», чтобы обратиться за помощью.
            </p>
          </div>
        </div>

        {/* Problems accordion/list */}
        <div className="flex flex-col gap-3">
          {problems.map((problem, i) => (
            <button
              key={problem.title}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              className={`group w-full text-left flex items-start gap-5 p-5 lg:p-6 rounded-2xl border transition-all duration-400 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              } ${
                activeIdx === i
                  ? "bg-white/10 border-[var(--sage-light)]/40"
                  : "border-white/10 hover:border-white/20 hover:bg-white/5"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <span
                className="text-2xl text-[var(--sage-light)] flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                {problem.icon}
              </span>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base lg:text-lg font-semibold text-[var(--primary-foreground)]">
                    {problem.title}
                  </h3>
                  <span
                    className={`text-[var(--sage-light)] ml-4 flex-shrink-0 transition-transform duration-300 ${
                      activeIdx === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    activeIdx === i ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-[var(--primary-foreground)]/70 leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 lg:p-8 rounded-3xl bg-white/10 border border-white/15 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <p className="font-serif text-xl lg:text-2xl font-semibold text-[var(--primary-foreground)]" style={{ fontFamily: "var(--font-serif)" }}>
              Готовы сделать первый шаг?
            </p>
            <p className="text-sm text-[var(--primary-foreground)]/60 mt-1">
              Напишите мне, и мы вместе определим, как начать работу.
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-[var(--sage-dark)] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[var(--sage-light)] transition-all duration-300 shadow-lg flex-shrink-0"
          >
            Записаться сейчас
          </button>
        </div>
      </div>
    </section>
  )
}
