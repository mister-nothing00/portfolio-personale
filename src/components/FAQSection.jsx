'use client'

import { useState } from 'react'
import { homeFAQ } from '@/data/faq'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 mb-6">
              <span className="text-sm font-semibold text-[var(--accent-primary)]">FAQ</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Domande <span className="text-gradient">Frequenti</span>
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)]">
              Le risposte alle domande più comuni
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {homeFAQ.map((faq, index) => (
              <article
                key={faq.id}
                className="card cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => toggleFAQ(index)}
                itemScope
                itemType="https://schema.org/Question"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 
                      className="text-lg font-semibold font-heading text-[var(--text-primary)] mb-2"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p 
                        className="text-[var(--text-secondary)] leading-relaxed"
                        itemProp="text"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <button
                    className={`w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-primary)] transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-label={openIndex === index ? 'Chiudi risposta' : 'Apri risposta'}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12 p-8 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-primary)]">
            <p className="text-lg text-[var(--text-secondary)] mb-4">
              Non trovi la risposta che cerchi?
            </p>
            
             <a href="mailto:francescodavidedivita@gmail.com"
              className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-semibold hover:gap-3 transition-all"
            >
              Scrivimi direttamente
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homeFAQ.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}