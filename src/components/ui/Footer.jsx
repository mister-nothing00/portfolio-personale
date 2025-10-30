import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'GitHub', href: 'https://github.com/mister-nothing00', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/francesco-di-vita-113355183/', external: true },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mister-nothing00',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/francesco-di-vita-113355183/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:francescodavidedivita@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-light)]">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-6">
              <Link href="/" className="inline-block group">
                <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-tight">
                  Francesco
                  <span className="text-gradient"> di Vita</span>
                </h2>
              </Link>

              <p className="text-[var(--text-secondary)] leading-relaxed max-w-md">
                Full-Stack Developer specializzato in <strong className="text-[var(--text-primary)]">React</strong>, <strong className="text-[var(--text-primary)]">Next.js</strong> e <strong className="text-[var(--text-primary)]">React Native</strong>.
                <br /><br />
                Creo esperienze digitali moderne e performanti che fanno la differenza.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  
                    <a key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--bg-primary)] border border-[var(--border-light)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
                </span>
                <span className="text-xs font-medium text-[var(--text-secondary)]">
                  Disponibile per nuovi progetti
                </span>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold font-heading uppercase tracking-wider text-[var(--text-primary)] mb-4">
                Navigazione
              </h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-[var(--accent-primary)] transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold font-heading uppercase tracking-wider text-[var(--text-primary)] mb-4">
                Risorse
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    
                      <a href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-[var(--accent-primary)] transition-all duration-300" />
                      {link.label}
                      {link.external && (
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold font-heading uppercase tracking-wider text-[var(--text-primary)] mb-4">
                Contatti
              </h3>
              <ul className="space-y-3">
                <li>
                  
                   <a href="mailto:francescodavidedivita@gmail.com"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm break-all">francescodavidedivita@gmail.com</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Italia</span>
                </li>
              </ul>

              {/* Quick CTA */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] text-white text-sm font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Inizia un Progetto
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--border-light)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
              <p>
                © {currentYear} <strong className="text-[var(--text-primary)]">Francesco di Vita</strong>. 
                Tutti i diritti riservati.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>using</span>
              <span className="font-semibold text-[var(--text-primary)]">Next.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Francesco di Vita',
            url: 'https://francescodivita.dev',
            logo: 'https://francescodivita.dev/logo.png',
            description: 'Full-Stack Developer specializzato in React, Next.js e React Native',
            email: 'francescodavidedivita@gmail.com',
            sameAs: [
              'https://github.com/mister-nothing00',
              'https://www.linkedin.com/in/francesco-di-vita-113355183/',
            ],
            foundingDate: '2022',
            founder: {
              '@type': 'Person',
              name: 'Francesco Davide di Vita',
            },
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'IT',
            },
          }),
        }}
      />
    </footer>
  )
}