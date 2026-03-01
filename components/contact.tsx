"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MessageCircle, Clock, MapPin, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 960 296 3555",
    sub: "Звонки и WhatsApp",
    href: "tel:+79602963555",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@natalia_psych",
    sub: "Пишите в любое время",
    href: "https://t.me/Natalia_Ul23",
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн–Пт: 10:00–20:00",
    sub: "Сб: 10:00–16:00",
  },
  {
    icon: MapPin,
    label: "Формат",
    value: "Онлайн и очно",
    sub: "г. Вологда, по договорённости",
  },
]

export function Contact() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState({
    name: "",
    phone: "",
    request: "",
    format: "online",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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

// Указываем тип Record<string, any>, чтобы TS понимал, что это объект с данными
const encode = (data: Record<string, any>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

// Указываем тип React.FormEvent для события формы
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "callback-form", 
        ...form 
      }),
    });
    
    alert("Спасибо! Заявка принята.");
    // Очистка формы (проверьте, что начальные значения совпадают с вашими)
    setForm({ name: '', phone: '', request: '', format: 'any', message: '' });
  } catch (error) {
    alert("Ошибка при отправке");
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  const requestOptions = [
    "Тревога и стресс",
    "Отношения и семья",
    "Дети и подростки",
    "Выгорание",
    "Саморазвитие",
    "Другое",
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[var(--sage)] text-sm font-semibold uppercase tracking-widest">
            Контакты
          </span>
          <h2
            className="font-serif text-4xl lg:text-5xl font-light mt-3 text-[var(--warm-brown)] text-balance"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Запись на
            <br />
            <span className="font-semibold italic text-[var(--sage)]">консультацию</span>
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Оставьте заявку — я отвечу в течение нескольких часов и предложу удобное время.
            Первый шаг — самый важный.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Contact info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                const content = (
                  <div
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--cream)] border border-[var(--border)] hover:border-[var(--sage)]/40 hover:shadow-sm transition-all duration-300"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--sage-light)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[var(--sage)]" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        {info.label}
                      </div>
                      <div className="text-sm font-semibold text-foreground mt-0.5">
                        {info.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{info.sub}</div>
                    </div>
                  </div>
                )

                return info.href ? (
                  <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                )
              })}
            </div>

            {/* Promise block */}
            <div className="p-6 rounded-2xl bg-[var(--sage-dark)] text-[var(--primary-foreground)]">
              <h3
                className="font-serif text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Мои обязательства
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  "Отвечу в течение нескольких часов",
                  "Полная конфиденциальность",
                  "Без осуждения и давления",
                  "Первая консультация - без обязательств",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--primary-foreground)]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--sage-light)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 rounded-3xl bg-[var(--sage-light)]/30 border border-[var(--sage)]/20">
                <div className="w-16 h-16 rounded-full bg-[var(--sage)] flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="font-serif text-2xl font-semibold text-[var(--warm-brown)] mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                  Спасибо, что обратились ко мне. Я свяжусь с вами в ближайшее время, чтобы
                  согласовать удобное время для консультации.
                </p>
              </div>
            ) : (
              <form
  name="callback-form"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
  className="flex flex-col gap-5 p-6 lg:p-8 rounded-3xl bg-[var(--cream)] border border-[var(--border)]"
>
  {/* Это скрытое поле критически важно для React-проектов на Netlify */}
  <input type="hidden" name="form-name" value="callback-form" />

  {/* Name + Phone */}
  <div className="grid sm:grid-cols-2 gap-4">
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-foreground uppercase tracking-wide">
        Ваше имя *
      </label>
      <input
        type="text"
        name="name" // Добавлено имя для Netlify
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Как к вам обращаться?"
        className="px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--sage)] focus:ring-1 focus:ring-[var(--sage)] transition-all duration-200"
      />
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-foreground uppercase tracking-wide">
        Телефон / Telegram
      </label>
      <input
        type="text"
        name="phone" // Добавлено имя для Netlify
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        placeholder="+7 или @username"
        className="px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--sage)] focus:ring-1 focus:ring-[var(--sage)] transition-all duration-200"
      />
    </div>
  </div>

  {/* Request topic */}
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold text-foreground uppercase tracking-wide">
      С чем хотите разобраться?
    </label>
    <div className="flex flex-wrap gap-2">
      {requestOptions.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => setForm({ ...form, request: opt })}
          className={`text-xs px-3 py-2 rounded-full border transition-all duration-200 ${
            form.request === opt
              ? "bg-[var(--sage)] text-white border-[var(--sage)]"
              : "bg-white border-[var(--border)] text-foreground hover:border-[var(--sage)]/50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
    {/* Скрытое поле для передачи выбранного значения кнопки */}
    <input type="hidden" name="request" value={form.request} />
  </div>

  {/* Format */}
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold text-foreground uppercase tracking-wide">
      Предпочтительный формат
    </label>
    <div className="flex gap-3">
      {[
        { id: "online", label: "Онлайн" },
        { id: "offline", label: "Очно" },
        { id: "any", label: "Не важно" },
      ].map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={() => setForm({ ...form, format: f.id })}
          className={`flex-1 text-sm py-2.5 rounded-xl border transition-all duration-200 ${
            form.format === f.id
              ? "bg-[var(--sage)] text-white border-[var(--sage)]"
              : "bg-white border-[var(--border)] text-foreground hover:border-[var(--sage)]/50"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
    {/* Скрытое поле для передачи выбранного формата */}
    <input type="hidden" name="format" value={form.format} />
  </div>

  {/* Message */}
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold text-foreground uppercase tracking-wide">
      Коротко о ситуации (необязательно)
    </label>
    <textarea
      name="message" // Добавлено имя для Netlify
      value={form.message}
      onChange={(e) => setForm({ ...form, message: e.target.value })}
      rows={3}
      placeholder="Несколько слов о том, что вас беспокоит..."
      className="px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[var(--sage)] focus:ring-1 focus:ring-[var(--sage)] transition-all duration-200 resize-none"
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    disabled={loading || !form.name}
    className="flex items-center justify-center gap-2 bg-[var(--sage)] text-white py-4 rounded-xl text-base font-semibold hover:bg-[var(--sage-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
  >
    {loading ? (
      <>
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        Отправляем...
      </>
    ) : (
      <>
        Отправить заявку
        <Send className="w-4 h-4" />
      </>
    )}
  </button>

  <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
    Вся информация строго конфиденциальна.
  </p>
</form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
