import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Script from "next/script";

// ============================================
// METADATA SPECIFICI PER ABOUT PAGE
// ============================================
export const metadata = {
  title: "About Me",
  description:
    "24 anni, Full-Stack Developer con passione per React, Next.js e React Native. Attualmente in Space2Earth e GeospatialX. Spirito libero, mente pragmatica.",
  openGraph: {
    title: "About Francesco di Vita",
    description: "Sviluppatore Full-Stack specializzato in tecnologie moderne",
    url: "https://portfolio-personale-alpha.vercel.app/about",
    type: "profile",
  },
};

// ============================================
// BREADCRUMB DATA
// ============================================
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

// ============================================
// ABOUT PAGE - LAYOUT DIVISO
// ============================================
export default function AboutPage() {
  return (
    <>
      {/* Schema.org JSON-LD per About */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Francesco Davide di Vita",
              alternateName: "Francesco di Vita",
              description:
                "Full-Stack Developer con esperienza in React, Next.js e React Native",
              birthDate: "2001-06-18",
              jobTitle: "Full-Stack Developer",
              url: "https://portfolio-personale-alpha.vercel.app",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://portfolio-personale-alpha.vercel.app",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://portfolio-personale-alpha.vercel.app/about",
                },
              ],
            },
          }),
        }}
      />

      <section className="section min-h-screen flex items-center max-w-8xl mx-auto">
        <div className="container">
          {/* ✅ BREADCRUMBS */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* ============================================ */}
          {/* SEZIONE 1 - IMMAGINE + INTRO */}
          {/* ============================================ */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
            {/* Left - Image */}
            <div className="relative animate-fade-in-up order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative max-w-sm w-full">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] rounded-2xl blur-2xl opacity-20" />

                {/* Image container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-[var(--border-light)] shadow-xl">
                  <Image
                    src="/images/profile.png"
                    alt="Francesco di Vita"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center text-white font-bold text-xl">
                          F
                        </div>
                        <div>
                          <p className="font-semibold text-white">
                            Francesco di Vita
                          </p>
                          <p className="text-sm text-gray-300">
                            Full-Stack Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Intro Content */}
            <div className="space-y-6 animate-fade-in-up delay-200 order-1 lg:order-2">
              {/* Section label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30">
                <span className="text-sm font-semibold text-[var(--accent-primary)]">
                  CHI SONO
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Spirito Libero,
                <span className="text-gradient"> Mente Pragmatica</span>
              </h1>

              <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                  <strong className="text-[var(--text-primary)]">
                    24 anni
                  </strong>
                  , nato il 18 giugno 2001. Sviluppatore{" "}
                  <strong className="text-[var(--text-primary)]">
                    Full-Stack
                  </strong>{" "}
                  con una passione per la tecnologia che va oltre il codice.
                </p>

                <p>
                  Attualmente lavoro per{" "}
                  <strong className="text-[var(--text-primary)]">
                    space2earth
                  </strong>
                  , startup innovativa nel settore geospaziale, dove sviluppo
                  soluzioni web che fanno la differenza.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* SEZIONE 2 - APPROCCIO + STATS/TECH */}
          {/* ============================================ */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-16">
            {/* Left - Approccio e Crescita Personale */}
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed animate-fade-in-up">
              <p>
                Il mio approccio combina{" "}
                <strong className="text-[var(--text-primary)]">
                  ambizione
                </strong>
                ,{" "}
                <strong className="text-[var(--text-primary)]">
                  determinazione
                </strong>{" "}
                e un costante desiderio di{" "}
                <strong className="text-[var(--text-primary)]">
                  evoluzione
                </strong>
                . Credo nel potere del codice pulito e nelle soluzioni che
                risolvono problemi reali.
              </p>

              <p>
                Oltre al lavoro, investo nella{" "}
                <strong className="text-[var(--text-primary)]">
                  crescita personale
                </strong>
                : leggo libri come "Pensa e Arricchisci Te Stesso", "Come
                Trattare gli Altri e Farseli Amici", "Padre Ricco Padre Povero"
                e "Le 48 Leggi del Potere". Sono convinto che il successo inizi
                dalla mente.
              </p>
            </div>

            {/* Right - Stats, Tech, CTA */}
            <div className="space-y-8 animate-fade-in-up delay-200">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">
                        start2impact University
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        Master Full-Stack & Front-End
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">
                        1+ Anni
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        Esperienza Professionale
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">
                        20+ Progetti
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        Completati con Successo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">
                        3 Certificazioni
                      </p>
                      <p className="text-sm text-[var(--text-muted)]">
                        start2impact University
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <p className="text-sm font-semibold text-[var(--text-muted)] mb-3">
                  TECNOLOGIE PRINCIPALI
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Bootstrap",
                    "JavaScript",
                    "jQuery",
                    "React",
                    "RTK Query",
                    "Redux",
                    "Vite",
                    "Next.js",
                    "Vue.js",
                    "React Native",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "MySQL",
                    "WordPress",
                    "Git & GitHub",
                    "ThunderClient",
                    "Postman",
                    "Figma",
                    "Canva",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 text-sm font-medium text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-medium)] hover:border-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Contattami
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl  text-white font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Vedi i miei progetti
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* SEZIONE VALORI - MINIMAL */}
          {/* ============================================ */}
          <div className="mt-24 animate-fade-in-up">
            {/* Header */}
            <div className="text-left mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/30 mb-4">
                <span className="text-sm font-semibold text-[var(--accent-secondary)]">
                  COSA MI GUIDA
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                I Miei <span className="text-gradient">Valori</span>
              </h2>

              <p className="text-base text-[var(--text-secondary)]">
                Oltre al codice, credo in principi che guidano ogni mio progetto
                e decisione. Questi valori sono il{" "}
                <strong className="text-[var(--text-primary)]">
                  fondamento
                </strong>{" "}
                del mio approccio professionale.
              </p>
            </div>

            {/* Grid Card Minimal - 2x2 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] transition-all duration-300">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="text-sm font-bold font-heading mb-1">
                  Innovazione Continua
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Apprendimento costante
                </p>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] transition-all duration-300">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="text-sm font-bold font-heading mb-1">
                  Risultati Concreti
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Valore reale nei progetti
                </p>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] transition-all duration-300">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="text-sm font-bold font-heading mb-1">
                  Collaborazione
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Lavoro di squadra
                </p>
              </div>

              <div className="p-4 rounded-lg border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)] transition-all duration-300">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="text-sm font-bold font-heading mb-1">
                  Crescita Personale
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Evoluzione continua
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
