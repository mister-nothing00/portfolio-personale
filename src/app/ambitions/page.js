// app/ambitions/page.js
import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

// ============================================
// METADATA SSR
// ============================================
export const metadata = {
  title: 'Ambizioni & Obiettivi',
  description: 'Gli obiettivi professionali e la visione futura di Francesco di Vita. Crescita continua, nuove tecnologie e progetti innovativi nel mondo dello sviluppo software.',
  openGraph: {
    title: 'Ambizioni & Obiettivi - Francesco di Vita',
    description: 'Obiettivi professionali e visione futura di Francesco di Vita',
    url: 'https://francescodivita.dev/ambitions',
    type: 'website',
  },
}

// ============================================
// BREADCRUMB DATA
// ============================================
const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Ambitions', href: '/ambitions' },
]

// ============================================
// AMBITIONS DATA
// ============================================
const goals = {
  shortTerm: [
    {
      id: 1,
      title: 'Padroneggiare TypeScript',
      description: 'Migliorare la type safety e la qualità del codice in progetti enterprise',
      icon: '⚡',
      timeline: '3-6 mesi',
    },
    {
      id: 2,
      title: 'Contributi Open Source',
      description: 'Iniziare a contribuire attivamente a progetti open source di rilievo',
      icon: '🌟',
      timeline: '3-6 mesi',
    },
    {
      id: 3,
      title: 'Certificazione Cloud',
      description: 'Ottenere certificazione AWS o Google Cloud per deployment scalabili',
      icon: '☁️',
      timeline: '6 mesi',
    },
  ],
  mediumTerm: [
    {
      id: 1,
      title: 'Tech Lead Role',
      description: 'Guidare un team di sviluppatori in progetti complessi',
      icon: '👥',
      timeline: '1-2 anni',
    },
    {
      id: 2,
      title: 'Architetture Avanzate',
      description: 'Specializzarmi in microservizi, serverless e system design scalabile',
      icon: '🏗️',
      timeline: '1-2 anni',
    },
    {
      id: 3,
      title: 'Speaking & Mentorship',
      description: 'Iniziare a parlare a conferenze tech e fare mentorship per junior developer',
      icon: '🎤',
      timeline: '1-2 anni',
    },
  ],
  longTerm: [
    {
      id: 1,
      title: 'Startup Tecnologica',
      description: 'Lanciare una mia startup o prodotto SaaS innovativo',
      icon: '🚀',
      timeline: '3-5 anni',
    },
    {
      id: 2,
      title: 'Thought Leader',
      description: 'Diventare un punto di riferimento nella community tech italiana',
      icon: '🎯',
      timeline: '3-5 anni',
    },
    {
      id: 3,
      title: 'Indipendenza Finanziaria',
      description: 'Raggiungere libertà finanziaria attraverso progetti e investimenti smart',
      icon: '💰',
      timeline: '5+ anni',
    },
  ],
}

const futureSkills = [
  { name: 'TypeScript Avanzato', level: 'Priority High', icon: '🔷' },
  { name: 'System Design', level: 'Priority High', icon: '🏛️' },
  { name: 'AWS / Cloud', level: 'Priority High', icon: '☁️' },
  { name: 'Docker & Kubernetes', level: 'Priority Medium', icon: '🐳' },
  { name: 'GraphQL Avanzato', level: 'Priority Medium', icon: '📊' },
  { name: 'Web3 / Blockchain', level: 'Priority Low', icon: '⛓️' },
]

// ============================================
// AMBITIONS PAGE - SSR
// ============================================
export default function AmbitionsPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            name: 'Ambizioni & Obiettivi - Francesco di Vita',
            description: 'Obiettivi professionali e visione futura di Francesco di Vita',
            url: 'https://francescodivita.dev/ambitions',
            author: {
              '@type': 'Person',
              name: 'Francesco Davide di Vita',
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://francescodivita.dev',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Ambitions',
                  item: 'https://francescodivita.dev/ambitions',
                },
              ],
            },
          }),
        }}
      />

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
                OBIETTIVI & VISIONE
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Le Mie <span className="text-gradient">Ambizioni</span>
            </h1>

            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl">
              Credo nell'evoluzione continua e negli obiettivi concreti. Questa pagina rappresenta 
              la mia roadmap personale: dove sono ora, dove voglio arrivare e come intendo farlo.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--border-light)]">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)]">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Focus</p>
                  <p className="text-xs text-[var(--text-muted)]">Crescita Continua</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)]">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Mindset</p>
                  <p className="text-xs text-[var(--text-muted)]">Ambizione + Azione</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)]">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Timeline</p>
                  <p className="text-xs text-[var(--text-muted)]">0-5 anni</p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* GOALS TIMELINE */}
          {/* ============================================ */}
          <div className="mb-20">
            {/* Short Term */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading">
                    Breve Termine <span className="text-gradient">(3-6 mesi)</span>
                  </h2>
                  <p className="text-sm text-[var(--text-muted)]">Obiettivi immediati e azioni concrete</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goals.shortTerm.map((goal, index) => (
                  <div
                    key={goal.id}
                    className="card hover:shadow-2xl animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-4xl mb-4">{goal.icon}</div>
                    <h3 className="text-xl font-bold font-heading mb-2">{goal.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-4">{goal.description}</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{goal.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Medium Term */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading">
                    Medio Termine <span className="text-gradient">(1-2 anni)</span>
                  </h2>
                  <p className="text-sm text-[var(--text-muted)]">Crescita professionale e leadership</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goals.mediumTerm.map((goal, index) => (
                  <div
                    key={goal.id}
                    className="card hover:shadow-2xl animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-4xl mb-4">{goal.icon}</div>
                    <h3 className="text-xl font-bold font-heading mb-2">{goal.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-4">{goal.description}</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{goal.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Long Term */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading">
                    Lungo Termine <span className="text-gradient">(3-5+ anni)</span>
                  </h2>
                  <p className="text-sm text-[var(--text-muted)]">Visione e impatto a lungo termine</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goals.longTerm.map((goal, index) => (
                  <div
                    key={goal.id}
                    className="card hover:shadow-2xl animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-4xl mb-4">{goal.icon}</div>
                    <h3 className="text-xl font-bold font-heading mb-2">{goal.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-4">{goal.description}</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{goal.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* FUTURE SKILLS */}
          {/* ============================================ */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              🎯 Skills da <span className="text-gradient">Acquisire</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl">
              Tecnologie e competenze nel mio radar. L'apprendimento continuo è fondamentale 
              per restare rilevanti in un settore in rapida evoluzione.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {futureSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-3xl">{skill.icon}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-[var(--text-primary)]">{skill.name}</p>
                    <p className={`text-xs font-medium ${
                      skill.level === 'Priority High' 
                        ? 'text-[var(--accent-primary)]' 
                        : skill.level === 'Priority Medium'
                        ? 'text-[var(--accent-secondary)]'
                        : 'text-[var(--text-muted)]'
                    }`}>
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================ */}
          {/* PHILOSOPHY */}
          {/* ============================================ */}
          <div className="mb-20">
            <div className="card p-8 md:p-12 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)]">
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
                💭 La Mia <span className="text-gradient">Filosofia</span>
              </h2>

              <div className="space-y-6 text-lg text-[var(--text-secondary)]">
                <p>
                  <strong className="text-[var(--text-primary)]">"Il successo inizia dalla mente"</strong> - 
                  È una frase che guida ogni mia azione. Credo fermamente che 
                  <strong className="text-[var(--text-primary)]"> l'ambizione</strong>, unita a 
                  <strong className="text-[var(--text-primary)]"> un'azione costante</strong>, possa portare 
                  a risultati straordinari.
                </p>

                <p>
                  Non mi accontento dello status quo. Cerco sempre di 
                  <strong className="text-[var(--text-primary)]"> migliorare</strong>, 
                  <strong className="text-[var(--text-primary)]"> imparare</strong> e 
                  <strong className="text-[var(--text-primary)]"> crescere</strong>. 
                  Ogni sfida è un'opportunità per evolvere.
                </p>

                <p>
                  I miei obiettivi non sono solo professionali: investo nella 
                  <strong className="text-[var(--text-primary)]"> crescita personale</strong> attraverso 
                  lettura, studio e riflessione. Libri come "Pensa e Arricchisci Te Stesso" e 
                  "Le 48 Leggi del Potere" sono parte del mio percorso.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[var(--border-light)]">
                <div className="text-center">
                  <div className="text-3xl mb-2">📖</div>
                  <p className="font-semibold text-[var(--text-primary)]">Apprendimento</p>
                  <p className="text-sm text-[var(--text-muted)]">Costante e strategico</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💪</div>
                  <p className="font-semibold text-[var(--text-primary)]">Determinazione</p>
                  <p className="text-sm text-[var(--text-muted)]">Focus sugli obiettivi</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <p className="font-semibold text-[var(--text-primary)]">Evoluzione</p>
                  <p className="text-sm text-[var(--text-muted)]">Crescita continua</p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* CTA FINALE */}
          {/* ============================================ */}
          <div className="text-center p-12 rounded-2xl border border-[var(--border-light)] bg-[var(--bg-secondary)]">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Cresciamo Insieme?
            </h3>
            <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
              Se condividi la mia visione di crescita continua e vuoi collaborare su progetti 
              ambiziosi, parliamone!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Vedi i Miei Lavori
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#10b981] text-white font-semibold hover:bg-[#059669] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Contattami
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}