export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--foreground)] text-[var(--background)]/70 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <div
              className="font-serif text-xl font-semibold text-[var(--background)] tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Наталья Ульянова
            </div>
            <div className="text-xs uppercase tracking-widest text-[var(--background)]/50 mt-1">
              Психолог · Медиатор · Эксперт
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {[
              { label: "Обо мне", href: "#about" },
              { label: "Услуги", href: "#services" },
              { label: "С чем я работаю", href: "#problems" },
              { label: "Отзывы", href: "#testimonials" },
              { label: "FAQ", href: "#faq" },
              { label: "Записаться", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--background)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="tel:+79602963555"
              className="hover:text-[var(--background)] transition-colors duration-200"
            >
              +7 960 296 3555
            </a>
            <a
              href="https://t.me/Natalia_Ul23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--background)] transition-colors duration-200"
            >
              Telegram
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--background)]/40">
          <div>© {year} Наталья Ульянова. Все права защищены.</div>
          <div className="flex gap-6">
            <span> &ldquo;&rdquo;</span>
            <span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
