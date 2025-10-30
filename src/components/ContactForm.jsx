// components/ContactForm.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Validate form
  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Il messaggio deve essere di almeno 10 caratteri'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')

    try {
      // TODO: Integrare con API reale (es. EmailJS, SendGrid, etc.)
      // Per ora simuliamo invio
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Simula successo
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success dopo 5 secondi
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="section min-h-screen">
      <div className="container">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* ============================================ */}
        {/* HEADER */}
        {/* ============================================ */}
        <div className="text-left max-w-8xl mx-auto mb-16 animate-fade-in-up mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 mb-6">
            <span className="text-sm font-semibold text-[var(--accent-primary)]">
              CONTATTAMI
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Lavoriamo <span className="text-gradient">Insieme</span>
          </h1>

          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl">
            Hai un progetto in mente? Cerchi un developer per la tua startup? 
            O semplicemente vuoi fare due chiacchiere? Scrivimi!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:francescodavidedivita@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">francescodavidedivita@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/francesco-di-vita-113355183/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/mister-nothing00"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* ============================================ */}
          {/* FORM - 3 COLONNE */}
          {/* ============================================ */}
          <div className="lg:col-span-3">
            <div className="card p-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold font-heading mb-6">
                📧 Invia un Messaggio
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-[var(--border-medium)] focus:border-[var(--accent-primary)]'
                    } bg-[var(--bg-primary)] text-[var(--text-primary)] outline-none transition-colors`}
                    placeholder="Il tuo nome"
                    disabled={status === 'loading'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-[var(--border-medium)] focus:border-[var(--accent-primary)]'
                    } bg-[var(--bg-primary)] text-[var(--text-primary)] outline-none transition-colors`}
                    placeholder="tua@email.com"
                    disabled={status === 'loading'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Oggetto */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Oggetto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-medium)] focus:border-[var(--accent-primary)] bg-[var(--bg-primary)] text-[var(--text-primary)] outline-none transition-colors"
                    placeholder="Di cosa vuoi parlare?"
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Messaggio */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-[var(--border-medium)] focus:border-[var(--accent-primary)]'
                    } bg-[var(--bg-primary)] text-[var(--text-primary)] outline-none transition-colors resize-none`}
                    placeholder="Raccontami del tuo progetto..."
                    disabled={status === 'loading'}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] text-white font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Invia Messaggio
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600">
                    <p className="font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Messaggio inviato con successo!
                    </p>
                    <p className="text-sm mt-1">Ti risponderò il prima possibile.</p>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600">
                    <p className="font-semibold flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Errore nell'invio del messaggio
                    </p>
                    <p className="text-sm mt-1">Riprova o scrivimi direttamente via email.</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* ============================================ */}
          {/* INFO SIDEBAR - 2 COLONNE */}
          {/* ============================================ */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up delay-200">
            {/* Tempi di Risposta */}
            <div className="card">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <h3 className="font-bold font-heading text-[var(--text-primary)] mb-1">
                    Risposta Rapida
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Di solito rispondo entro 24 ore nei giorni lavorativi
                  </p>
                </div>
              </div>
            </div>

            {/* Disponibilità */}
            <div className="card">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white flex-shrink-0">
                  💼
                </div>
                <div>
                  <h3 className="font-bold font-heading text-[var(--text-primary)] mb-1">
                    Disponibilità
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Aperto a freelance, collaborazioni e opportunità full-time
                  </p>
                </div>
              </div>
            </div>

            {/* Progetti */}
            <div className="card">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white flex-shrink-0">
                  🚀
                </div>
                <div>
                  <h3 className="font-bold font-heading text-[var(--text-primary)] mb-1">
                    Tipologie Progetti
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Web app, mobile app, MVP, consulenza tecnica
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]">
              <h3 className="font-bold font-heading text-[var(--text-primary)] mb-4">
                Link Utili
              </h3>
              <div className="space-y-3">
                <Link 
                  href="/projects"
                  className="flex items-center justify-between text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>Portfolio Progetti</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/skills"
                  className="flex items-center justify-between text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>Competenze Tecniche</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/certificates"
                  className="flex items-center justify-between text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>Certificazioni</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}