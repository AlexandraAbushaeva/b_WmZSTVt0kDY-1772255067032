"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "С чем я работаю", href: "#problems" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--cream)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col leading-none group"
          >
            <span
              className="font-serif text-xl lg:text-2xl font-semibold tracking-tight text-[var(--sage-dark)] group-hover:text-[var(--sage)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Наталья Ульянова
            </span>
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)] font-sans mt-0.5">
              Психолог
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-sm text-foreground/70 hover:text-[var(--sage)] transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+79602960000"
              className="flex items-center gap-2 text-sm text-[var(--sage-dark)] hover:text-[var(--sage)] transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              +7 960 296 3555
            </a>
            <button
              onClick={() => handleLink("#contact")}
              className="bg-[var(--sage)] text-[var(--primary-foreground)] text-sm px-5 py-2.5 rounded-full hover:bg-[var(--sage-dark)] transition-all duration-300 font-medium shadow-sm hover:shadow-md"
            >
              Записаться
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--secondary)] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-[var(--cream)] border-b border-[var(--border)] p-6 transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-left text-base font-medium text-foreground hover:text-[var(--sage)] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-3">
              <a
                href="tel:+79602963555"
                className="flex items-center gap-2 text-[var(--sage-dark)] font-medium"
              >
                <Phone className="w-4 h-4" />
                +7 960 296 3555
              </a>
              <button
                onClick={() => handleLink("#contact")}
                className="bg-[var(--sage)] text-[var(--primary-foreground)] text-sm px-5 py-3 rounded-full font-medium w-full"
              >
                Записаться на консультацию
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
