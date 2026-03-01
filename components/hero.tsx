"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, MessageCircle } from "lucide-react"
import Image from "next/image"

const rotatingWords = ["гармонию", "уверенность", "спокойствие", "себя", "счастье"]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    setMounted(true)
    intervalRef.current = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--cream)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-0 w-[45vw] h-[80vh] rounded-l-[60px] bg-[var(--sage-light)]/40"
          style={{ transform: "translateX(5%)" }}
        />
        <div className="absolute bottom-32 left-10 w-32 h-32 rounded-full bg-[var(--terracotta)]/10 animate-float" />
        <div
          className="absolute top-40 left-[20%] w-4 h-4 rounded-full bg-[var(--sage)]/30 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-60 right-[15%] w-6 h-6 rounded-full bg-[var(--terracotta)]/20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Text content */}
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[var(--sage-light)] text-[var(--sage-dark)] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage)] inline-block" />
              Профессиональная психологическая помощь
            </div>

            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance text-[var(--warm-brown)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Найдите{" "}
              <span
                className={`text-[var(--sage)] font-semibold italic inline-block transition-all duration-400 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                {rotatingWords[wordIndex]}
              </span>
              <br />
              снова
            </h1>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Наталья Ульянова, семейный и личный психолог с многолетним опытом. Помогаю
              людям разобраться в себе, наладить отношения и вернуться к полноценной жизни.
              Бережно, честно и без осуждения.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center justify-center gap-2 bg-[var(--sage)] text-[var(--primary-foreground)] px-8 py-4 rounded-full text-base font-medium hover:bg-[var(--sage-dark)] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Записаться на консультацию
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
              <a
                href="https://t.me/Natalia_Ul23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[var(--border)] text-foreground px-8 py-4 rounded-full text-base font-medium hover:border-[var(--sage)] hover:text-[var(--sage)] transition-all duration-300 bg-white/60"
              >
                <MessageCircle className="w-5 h-5" />
                Написать в Telegram
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 border-t border-[var(--border)]">
              <div className="text-center">
                <div
                  className="font-serif text-3xl font-semibold text-[var(--sage-dark)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  10+
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">лет опыта</div>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <div className="text-center">
                <div
                  className="font-serif text-3xl font-semibold text-[var(--sage-dark)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  500+
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">клиентов</div>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <div className="text-center">
                <div
                  className="font-serif text-3xl font-semibold text-[var(--sage-dark)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  3
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">формата работы</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[40px] border-2 border-[var(--sage)]/20 rotate-3" />
              <div className="absolute -inset-8 rounded-[50px] border border-[var(--terracotta)]/10 -rotate-2" />

              {/* Main image */}
              <div className="relative w-72 h-96 lg:w-96 lg:h-[520px] rounded-[32px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/natalia.jpg"
                  alt="Наталья Ульянова — психолог"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--sage-dark)]/20 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-[var(--sage-light)] flex items-center justify-center">
                  <span className="text-[var(--sage)] font-serif font-bold text-lg" style={{ fontFamily: "var(--font-serif)" }}>★</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">Онлайн и очно</div>
                  <div className="text-xs text-muted-foreground">Запись доступна</div>
                </div>
              </div>

              {/* Second floating card */}
              <div
                className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-lg p-3 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-xs font-semibold text-foreground">Конфиденциально</div>
                <div className="text-xs text-muted-foreground">Безопасное пространство</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-[var(--sage)] transition-colors group"
        aria-label="Прокрутить вниз"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Узнать больше</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
