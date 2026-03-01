"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const credentials = [
  {
    icon: "🎓",
    title: "Высшее образование",
    desc: "Диплом психолога, специализация в семейной, детской и педагогической психологии",
  },
  {
    icon: "📜",
    title: "Экспертная деятельность",
    desc: "Судебная психолого-педагогическая экспертиза и оценка психологического состояния",
  },
  {
    icon: "🤝",
    title: "Дипломированный медиатор",
    desc: "Специалист по решению семейных, школьных, деловых конфликтов",
  },
  {
    icon: "📚",
    title: "Непрерывное обучение",
    desc: "Регулярное повышение квалификации, участие в профессиональных конференциях",
  },
]

const values = [
  { label: "Бережность", desc: "Ваши чувства в безопасности" },
  { label: "Честность", desc: "Говорю прямо, без иллюзий" },
  { label: "Уважение", desc: "Без осуждения и советов" },
  { label: "Индивидуальность", desc: "Каждый случай уникален" },
]

export function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[var(--sage)] text-sm font-semibold uppercase tracking-widest">
            Обо мне
          </span>
          <h2
            className="font-serif text-4xl lg:text-5xl font-light mt-3 text-[var(--warm-brown)] text-balance"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Психолог, которому
            <br />
            <span className="font-semibold italic text-[var(--sage)]">можно доверять</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Image + values */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <div className="relative h-[700px] rounded-[28px] overflow-hidden shadow-xl">
                <Image
                  src="/images/office.jpg"
                  alt="Кабинет психолога Натальи Ульяновой"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--sage)]/10 to-transparent" />
              </div>

              {/* Values overlay */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div
                    key={v.label}
                    className="bg-[var(--cream)] rounded-2xl p-4 border border-[var(--border)] hover:border-[var(--sage)]/50 hover:shadow-sm transition-all duration-300"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="text-sm font-semibold text-[var(--sage-dark)]">{v.label}</div>
                    <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Text + credentials */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex flex-col gap-4">
              <p className="text-lg leading-relaxed text-foreground">
                Меня зовут <strong className="text-[var(--sage-dark)]">Наталья Ульянова</strong>.
                Я — семейный, личный и детский психолог с большим стажем практической работы.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Каждый день я встречаю людей, которые оказались в точке, где больше нельзя справляться
                в одиночку. И я точно знаю: это не слабость — это мужество признать, что нужна помощь.
                Именно с этого момента и начинается настоящее изменение.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                В своей работе я создаю пространство, где вы можете говорить открыто — без страха
                осуждения, без готовых рецептов. Мы вместе разбираемся в вашей ситуации, находим
                ресурсы и прокладываем путь к тому, чего вы действительно хотите.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Работаю как очно, так и онлайн — это позволяет вам выбрать комфортный для вас формат
                общения независимо от места жительства.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-4">
              <h3
                className="font-serif text-xl font-semibold text-[var(--warm-brown)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Образование и квалификация
              </h3>
              <div className="flex flex-col gap-3">
                {credentials.map((cred, i) => (
                  <div
                    key={cred.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--cream)] border border-[var(--border)] hover:border-[var(--sage)]/40 hover:shadow-sm transition-all duration-300"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--sage-light)] flex items-center justify-center flex-shrink-0 text-lg">
                      {cred.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{cred.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {cred.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="self-start bg-[var(--sage)] text-[var(--primary-foreground)] px-8 py-4 rounded-full text-sm font-medium hover:bg-[var(--sage-dark)] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Записаться на первую консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
